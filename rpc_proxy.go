package main

import (
	"context"
	"crypto/x509"
	"encoding/json"
	"flag"
	"fmt"
	"io/ioutil"
	"net"
	"net/http"
	"os"
	"os/signal"
	"path/filepath"
	"syscall"
	"time"

	"github.com/btcsuite/btcutil"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	grpcProxy "github.com/mwitkow/grpc-proxy/proxy"
	log "github.com/sirupsen/logrus"
	"github.com/tdex-network/tdex-daemon/pkg/macaroons"
	"github.com/tdex-network/tdex-daemon/pkg/tdexdconnect"
	"google.golang.org/grpc"
	"google.golang.org/grpc/backoff"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/metadata"
	"gopkg.in/macaroon.v2"
)

const (
	defaultConnectTimeout = 15 * time.Second
	defaultServerTimeout  = 10 * time.Second
	defaultServerAddr     = ":3030"
)

var (
	// maxMsgRecvSize is the largest message our proxy will receive. We
	// set this to 200MiB atm.
	maxMsgRecvSize = grpc.MaxCallRecvMsgSize(1 * 1024 * 1024 * 200)
	settingsPath   = filepath.Join(
		btcutil.AppDataDir("tdex-dashboard", false), "settings.json",
	)
)

func main() {
	connectUrl, httpServerAddr := parseFlags()
	// if --tdexdconnecturl is not set, let's source the url from the datadir.
	if len(connectUrl) <= 0 {
		var err error
		connectUrl, err = getUrlFromSettings()
		if err != nil {
			log.Fatal(err)
		}
	}

	proxy, err := newRpcProxy(connectUrl)
	if err != nil {
		log.Fatal(err)
	}
	defer proxy.Stop()

	chErr := make(chan error, 1)
	go func() {
		if err := proxy.Start(httpServerAddr); err != nil {
			chErr <- err
		}
	}()

	sigChan := make(chan os.Signal, 1)
	signal.Notify(sigChan, syscall.SIGTERM, syscall.SIGINT)

	select {
	case <-sigChan:
		log.Info("shutting down")
		return
	case <-chErr:
		log.Fatal(err)
	}
}

func parseFlags() (string, string) {
	connectUrl := flag.String(
		"tdexdconnecturl",
		"",
		"the TDEXConnect url to connect to the TDEX daemon",
	)
	httpServerAddr := flag.String(
		"addr",
		defaultServerAddr,
		"the host:port address which the HTTP proxy should listen on",
	)

	flag.Parse()

	return *connectUrl, *httpServerAddr
}

func getUrlFromSettings() (string, error) {
	buf, err := ioutil.ReadFile(settingsPath)
	if err != nil {
		return "", fmt.Errorf(
			"failed to read from file %s: %s", settingsPath, err,
		)
	}
	var settings map[string]interface{}
	if err := json.Unmarshal(buf, &settings); err != nil {
		return "", fmt.Errorf("failed to parse settings JSON")
	}
	url, ok := settings["tdexdConnectUrl"].(string)
	if !ok {
		return "", fmt.Errorf("connect url not found in %s", settingsPath)
	}
	return url, nil
}

type rpcProxy struct {
	tdexdConn    *grpc.ClientConn
	grpcServer   *grpc.Server
	grpcWebProxy *grpcweb.WrappedGrpcServer
	httpServer   *http.Server
}

func newRpcProxy(connectUrl string) (*rpcProxy, error) {
	if len(connectUrl) <= 0 {
		return nil, fmt.Errorf("tdexdconnect url must not be an empty string")
	}

	addr, tlsCert, macaroon, err := tdexdconnect.Decode(connectUrl)
	if err != nil {
		return nil, err
	}

	tdexdConn, err := createGRPCConn(addr, macaroon, tlsCert)
	if err != nil {
		return nil, err
	}

	director := func(
		ctx context.Context, requireURI string,
	) (context.Context, *grpc.ClientConn, error) {
		// If this header is present in the request from the web client,
		// the actual connection to the backend will not be established.
		// https://github.com/improbable-eng/grpc-web/issues/568
		md, _ := metadata.FromIncomingContext(ctx)
		mdCopy := md.Copy()
		delete(mdCopy, "connection")

		outCtx := metadata.NewOutgoingContext(ctx, mdCopy)

		return outCtx, tdexdConn, nil
	}

	grpcServer := grpc.NewServer(
		grpc.CustomCodec(grpcProxy.Codec()),
		grpc.UnknownServiceHandler(
			grpcProxy.TransparentHandler(director),
		),
	)

	opts := []grpcweb.Option{
		grpcweb.WithWebsockets(true),
		grpcweb.WithWebsocketPingInterval(2 * time.Minute),
		grpcweb.WithCorsForRegisteredEndpointsOnly(false),
	}

	grpcWebProxy := grpcweb.WrapServer(grpcServer, opts...)

	httpHandler := func(resp http.ResponseWriter, req *http.Request) {
		resp.Header().Set("Access-Control-Allow-Origin", "*")
		resp.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
		resp.Header().Set("Access-Control-Allow-Headers", "*")

		if grpcWebProxy.IsGrpcWebRequest(req) ||
			grpcWebProxy.IsGrpcWebSocketRequest(req) ||
			grpcWebProxy.IsAcceptableGrpcCorsRequest(req) {
			if req.Method != "OPTIONS" {
				log.Infof("handling gRPC web request: %s", req.URL.Path)
			}
			grpcWebProxy.ServeHTTP(resp, req)
			return
		}
		if req.Method != "OPTIONS" {
			log.Infof("handling gRPC request: %s", req.URL.Path)
		}
		grpcServer.ServeHTTP(resp, req)
	}
	httpServer := &http.Server{
		// To make sure that long-running calls and indefinitely opened
		// streaming connections aren't terminated by the internal
		// proxy, we need to disable all timeouts except the one for
		// reading the HTTP headers. That timeout shouldn't be removed
		// as we would otherwise be prone to the slowloris attack where
		// an attacker takes too long to send the headers and uses up
		// connections that way.
		WriteTimeout:      0,
		IdleTimeout:       0,
		ReadTimeout:       0,
		ReadHeaderTimeout: defaultServerTimeout,
		Handler:           http.HandlerFunc(httpHandler),
	}

	return &rpcProxy{tdexdConn, grpcServer, grpcWebProxy, httpServer}, nil
}

func (p *rpcProxy) Start(addr string) error {
	httpListener, err := net.Listen("tcp", addr)
	if err != nil {
		return fmt.Errorf("failed to listen on %s: %s", addr, err)
	}
	log.Infof("start listening on %s", addr)
	return p.httpServer.Serve(httpListener)
}

func (p *rpcProxy) Stop() error {
	log.Debug("stopping internal gRPC server")
	p.grpcServer.Stop()
	log.Debug("closing connection with TDEX daemon")
	return p.tdexdConn.Close()
}

func createGRPCConn(
	daemonEndpoint string, macBytes, certBytes []byte,
) (*grpc.ClientConn, error) {
	var opts []grpc.DialOption

	// TLS credentials
	cert, err := x509.ParseCertificate(certBytes)
	if err != nil {
		return nil, fmt.Errorf("failed to parse TLS certificate: %s", err)
	}
	cp := x509.NewCertPool()
	cp.AddCert(cert)
	tlsCreds := credentials.NewClientTLSFromCert(cp, "")

	if len(macBytes) > 0 {
		// macaroons credentials
		mac := &macaroon.Macaroon{}
		if err := mac.UnmarshalBinary(macBytes); err != nil {
			return nil, fmt.Errorf("could failed to parse macaroon: %s", err)
		}
		macCreds := macaroons.NewMacaroonCredential(mac, true)
		opts = append(opts, grpc.WithPerRPCCredentials(macCreds))
	}

	opts = append(
		opts,
		grpc.WithCodec(grpcProxy.Codec()),
		grpc.WithDefaultCallOptions(maxMsgRecvSize),
		grpc.WithTransportCredentials(tlsCreds),
		grpc.WithConnectParams(grpc.ConnectParams{
			Backoff:           backoff.DefaultConfig,
			MinConnectTimeout: defaultConnectTimeout,
		}),
	)

	conn, err := grpc.Dial(daemonEndpoint, opts...)
	if err != nil {
		return nil, fmt.Errorf("failed to connect to RPC server: %v", err)
	}

	return conn, nil
}
