.PHONY: build clean fmt help install run vet

install:
	@go mod download && go mod tidy

## build: build for all platforms
build: 
	@chmod u+x ./scripts/build-proxy && ./scripts/build-proxy

## clean: cleans the binary
clean:
	@go clean

## fmt: Go Format
fmt:
	@if [ -n "$(gofmt -l .)" ]; then echo "Go code is not formatted"; exit 1; fi


## help: prints this help message
help:
	@echo "Usage: \n"
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/ /'

## run: Run proxy
run:
	@go run ./rpc_proxy.go


## vet: code analysis
vet:
	@go vet rpc_proxy.go
