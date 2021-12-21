package main

import (
	"context"
	"crypto/x509"
	"encoding/json"
	"flag"
	"fmt"
	"net"
	"net/http"
	"os"
	"os/signal"
	"sync"
	"syscall"
	"time"

	"github.com/gorilla/mux"
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
	statusServing serviceState = iota
	statusNotConnected
	statusNotServing

	defaultConnectTimeout = 15 * time.Second
	defaultServerTimeout  = 10 * time.Second
	defaultServerAddr     = ":3030"
	defaultLogToFile      = false
)

var (
	// maxMsgRecvSize is the largest message our proxy will receive. We
	// set this to 200MiB atm.
	maxMsgRecvSize = grpc.MaxCallRecvMsgSize(1 * 1024 * 1024 * 200)

	// flag --addr to customize host:port on which the HTTP server should listen.
	httpServerAddr = flag.String(
		"insecure-httplisten",
		defaultServerAddr,
		"the host:port address which the HTTP proxy should listen on",
	)
	logToFile = flag.Bool(
		"log-to-file",
		defaultLogToFile,
		"write logs to rpc_proxy.log file instead of stdout",
	)

	serviceStateMap = map[serviceState]string{
		statusServing:      "SERVING",
		statusNotServing:   "NOT_SERVING",
		statusNotConnected: "SERVING_NOT_CONNECTED",
	}
)

type serviceState int

func (s serviceState) String() string {
	return serviceStateMap[s]
}

func init() {
	flag.Parse()
	// Log method name
	// Adds between 20 and 40% overhead
	// Comment when not debugging
	// https://github.com/sirupsen/logrus#logging-method-name
	log.SetReportCaller(true)

	if *logToFile {
		file, err := os.OpenFile("rpc_proxy.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
		if err != nil {
			log.WithError(err).Warn(
				"unable to open rpc_proxy.log. Falling back to stdout logs",
			)
			return
		}
		log.SetOutput(file)
	}
}

func main() {
	proxy, err := newRpcProxy()
	if err != nil {
		log.Fatal(err)
	}
	defer proxy.Stop()

	chErr := make(chan error, 1)
	go func() {
		if err := proxy.Start(*httpServerAddr); err != nil {
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

type rpcProxy struct {
	tdexdConn    *grpc.ClientConn
	grpcServer   *grpc.Server
	grpcWebProxy *grpcweb.WrappedGrpcServer
	httpServer   *http.Server

	lock *sync.Mutex
}

func newRpcProxy() (*rpcProxy, error) {
	proxy := &rpcProxy{
		lock: &sync.Mutex{},
	}
	proxy.newGRPCWebProxy()
	proxy.newHTTPServer()
	return proxy, nil
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
	log.Debug("stopping http server")
	if err := p.httpServer.Close(); err != nil {
		return err
	}

	log.Debug("stopping internal gRPC server")
	p.grpcServer.Stop()

	if p.tdexdConn != nil {
		log.Debug("closing connection with TDEX daemon")
		return p.tdexdConn.Close()
	}
	return nil
}

func (p *rpcProxy) newGRPCWebProxy() {
	grpcServer := grpc.NewServer(
		grpc.CustomCodec(grpcProxy.Codec()),
		grpc.UnknownServiceHandler(
			grpcProxy.TransparentHandler(p.director),
		),
	)

	opts := []grpcweb.Option{
		grpcweb.WithWebsockets(true),
		grpcweb.WithWebsocketPingInterval(2 * time.Minute),
		grpcweb.WithCorsForRegisteredEndpointsOnly(false),
	}

	grpcWebProxy := grpcweb.WrapServer(grpcServer, opts...)
	p.grpcServer, p.grpcWebProxy = grpcServer, grpcWebProxy
}

func (p *rpcProxy) newHTTPServer() {
	httpHandler := p.newHTTPHandler()
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
		Handler:           httpHandler,
	}
	p.httpServer = httpServer
}

func (p *rpcProxy) director(
	ctx context.Context, requireURI string,
) (context.Context, *grpc.ClientConn, error) {
	// If this header is present in the request from the web client,
	// the actual connection to the backend will not be established.
	// https://github.com/improbable-eng/grpc-web/issues/568
	md, _ := metadata.FromIncomingContext(ctx)
	mdCopy := md.Copy()
	delete(mdCopy, "connection")

	outCtx := metadata.NewOutgoingContext(ctx, mdCopy)

	return outCtx, p.tdexdConn, nil
}

func (p *rpcProxy) newHTTPHandler() *mux.Router {
	router := mux.NewRouter()

	// Forward all requests to target TDEX daemon.
	router.HandleFunc("/healthcheck", p.handleHealthCheckRequest).Methods(http.MethodGet, http.MethodOptions)
	router.HandleFunc("/connect", p.handleConnectRequest).Methods(http.MethodPost, http.MethodOptions)
	router.HandleFunc("/disconnect", p.handleDisconnectRequest).Methods(http.MethodPost, http.MethodOptions)
	router.PathPrefix("/").HandlerFunc(p.forwardGRPCRequest)

	return router
}

func (p *rpcProxy) forwardGRPCRequest(resp http.ResponseWriter, req *http.Request) {
	// TODO: 'cargo tauri dev' requires "Access-Control-Allow-Origin: http://localhost:3003/"
	// and 'cargo tauri build' requires "Access-Control-Allow-Origin: tauri://localhost"
	// Set header from flag
	resp.Header().Set("Access-Control-Allow-Origin", "*")
	resp.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	resp.Header().Set("Access-Control-Allow-Headers", "*")

	if req.Method != "OPTIONS" && !p.isConnected() {
		resp.Header().Set("Content-Type", req.Header.Get("Content-Type"))
		resp.WriteHeader(http.StatusServiceUnavailable)
		return
	}

	if p.grpcWebProxy.IsGrpcWebRequest(req) ||
		p.grpcWebProxy.IsGrpcWebSocketRequest(req) ||
		p.grpcWebProxy.IsAcceptableGrpcCorsRequest(req) {
		if req.Method != "OPTIONS" {
			log.Infof("handling gRPC web request: %s", req.URL.Path)
		}
		p.grpcWebProxy.ServeHTTP(resp, req)
		return
	}
	if req.Method != "OPTIONS" {
		log.Infof("handling gRPC request: %s", req.URL.Path)
	}
	p.grpcServer.ServeHTTP(resp, req)
}

func (p *rpcProxy) handleHealthCheckRequest(resp http.ResponseWriter, req *http.Request) {
	resp.Header().Set("Access-Control-Allow-Origin", "*")
	resp.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
	resp.Header().Set("Access-Control-Allow-Headers", "*")

	if req.Method != "OPTIONS" {
		log.Infof("handling http request: %s", req.URL.Path)
	}

	status := statusServing
	if !p.isConnected() {
		status = statusNotConnected
	}
	json.NewEncoder(resp).Encode(map[string]interface{}{
		"code": status,
		"desc": status.String(),
	})
}

func (p *rpcProxy) handleConnectRequest(resp http.ResponseWriter, req *http.Request) {
	resp.Header().Set("Access-Control-Allow-Origin", "*")
	resp.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	resp.Header().Set("Access-Control-Allow-Headers", "*")

	if req.Method != "OPTIONS" {
		log.Infof("handling http request: %s", req.URL.Path)
	}

	body := make(map[string]interface{})
	if err := json.NewDecoder(req.Body).Decode(&body); err != nil {
		errMsg := fmt.Sprintf("invalid request body: %v", err)
		http.Error(resp, errMsg, http.StatusBadRequest)
		return
	}

	connectUrl, ok := body["url"].(string)
	if !ok || len(connectUrl) <= 0 {
		http.Error(resp, "url is undefined", http.StatusBadRequest)
		return
	}

	addr, tlsCert, macaroon, err := tdexdconnect.Decode(connectUrl)
	if err != nil {
		errMsg := fmt.Sprintf("failed to parse url: %s", err)
		http.Error(resp, errMsg, http.StatusBadRequest)
		return
	}

	tdexdConn, err := createGRPCConn(addr, macaroon, tlsCert)
	if err != nil {
		errMsg := fmt.Sprintf("failed to connect to daemon: %s", err)
		http.Error(resp, errMsg, http.StatusInternalServerError)
		return
	}

	p.lock.Lock()
	defer p.lock.Unlock()

	p.tdexdConn = tdexdConn

	json.NewEncoder(resp).Encode(map[string]interface{}{
		"status": "connected",
	})
}

func (p *rpcProxy) handleDisconnectRequest(resp http.ResponseWriter, req *http.Request) {
	resp.Header().Set("Access-Control-Allow-Origin", "*")
	resp.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	resp.Header().Set("Access-Control-Allow-Headers", "*")

	if req.Method != "OPTIONS" {
		log.Infof("handling http request: %s", req.URL.Path)
	}

	p.lock.Lock()
	defer p.lock.Unlock()

	if p.tdexdConn != nil {
		p.tdexdConn.Close()

		p.tdexdConn = nil
	}

	json.NewEncoder(resp).Encode(map[string]interface{}{
		"status": "disconnected",
	})
}

func (p *rpcProxy) isConnected() bool {
	return p.tdexdConn != nil
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
