/**
 * @fileoverview gRPC-Web generated client stub for tdex_daemon.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as tdex$daemon_v1_wallet_pb from '../../tdex-daemon/v1/wallet_pb';


export class WalletServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorWalletAddress = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.WalletService/WalletAddress',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_wallet_pb.WalletAddressRequest,
    tdex$daemon_v1_wallet_pb.WalletAddressResponse,
    (request: tdex$daemon_v1_wallet_pb.WalletAddressRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_wallet_pb.WalletAddressResponse.deserializeBinary
  );

  walletAddress(
    request: tdex$daemon_v1_wallet_pb.WalletAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_wallet_pb.WalletAddressResponse>;

  walletAddress(
    request: tdex$daemon_v1_wallet_pb.WalletAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_wallet_pb.WalletAddressResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_wallet_pb.WalletAddressResponse>;

  walletAddress(
    request: tdex$daemon_v1_wallet_pb.WalletAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_wallet_pb.WalletAddressResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.WalletService/WalletAddress',
        request,
        metadata || {},
        this.methodDescriptorWalletAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.WalletService/WalletAddress',
    request,
    metadata || {},
    this.methodDescriptorWalletAddress);
  }

  methodDescriptorWalletBalance = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.WalletService/WalletBalance',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_wallet_pb.WalletBalanceRequest,
    tdex$daemon_v1_wallet_pb.WalletBalanceResponse,
    (request: tdex$daemon_v1_wallet_pb.WalletBalanceRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_wallet_pb.WalletBalanceResponse.deserializeBinary
  );

  walletBalance(
    request: tdex$daemon_v1_wallet_pb.WalletBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_wallet_pb.WalletBalanceResponse>;

  walletBalance(
    request: tdex$daemon_v1_wallet_pb.WalletBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_wallet_pb.WalletBalanceResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_wallet_pb.WalletBalanceResponse>;

  walletBalance(
    request: tdex$daemon_v1_wallet_pb.WalletBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_wallet_pb.WalletBalanceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.WalletService/WalletBalance',
        request,
        metadata || {},
        this.methodDescriptorWalletBalance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.WalletService/WalletBalance',
    request,
    metadata || {},
    this.methodDescriptorWalletBalance);
  }

  methodDescriptorSendToMany = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.WalletService/SendToMany',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_wallet_pb.SendToManyRequest,
    tdex$daemon_v1_wallet_pb.SendToManyResponse,
    (request: tdex$daemon_v1_wallet_pb.SendToManyRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_wallet_pb.SendToManyResponse.deserializeBinary
  );

  sendToMany(
    request: tdex$daemon_v1_wallet_pb.SendToManyRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_wallet_pb.SendToManyResponse>;

  sendToMany(
    request: tdex$daemon_v1_wallet_pb.SendToManyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_wallet_pb.SendToManyResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_wallet_pb.SendToManyResponse>;

  sendToMany(
    request: tdex$daemon_v1_wallet_pb.SendToManyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_wallet_pb.SendToManyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.WalletService/SendToMany',
        request,
        metadata || {},
        this.methodDescriptorSendToMany,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.WalletService/SendToMany',
    request,
    metadata || {},
    this.methodDescriptorSendToMany);
  }

}

