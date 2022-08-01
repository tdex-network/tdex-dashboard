###
## Golang RPC Proxy
###
FROM golang:latest as gobuilder

ARG TARGETOS
ARG TARGETARCH

WORKDIR /app

COPY go.mod .
COPY rpc_proxy.go .

RUN go mod tidy
RUN go mod download

RUN GOOS=${TARGETOS} GOARCH=${TARGETARCH} go build -ldflags="-s -w " -tags netgo -a -o rpcproxy rpc_proxy.go

# third image, running the tdexd executable
FROM debian:buster-slim

COPY --from=gobuilder /app/rpcproxy /usr/local/bin/rpcproxy
COPY --from=ghcr.io/tdex-network/tdexd:latest /usr/local/bin/* /usr/local/bin/
COPY proxy-entrypoint.sh .
RUN chmod +x /proxy-entrypoint.sh 

# $USER name, and data $DIR to be used in the `final` image
ARG USER=tdex
ARG DIR=/home/tdex

RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates

# NOTE: Default GID == UID == 1000
RUN adduser --disabled-password \
            --home "$DIR/" \
            --gecos "" \
            "$USER"
USER $USER

# Prevents `VOLUME $DIR/.tdex-daemon/` being created as owned by `root`
RUN mkdir -p "$DIR/.tdex-daemon/"

# Expose volume containing all `tdexd` data
VOLUME $DIR/.tdex-daemon/

# expose trader and operator interface ports
EXPOSE 9945
EXPOSE 9000

# expose grpcproxy port
EXPOSE 3030

CMD ["/proxy-entrypoint.sh"]
