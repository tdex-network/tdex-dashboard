/**
 * @fileoverview gRPC-Web generated client stub for tdex.daemon.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

import * as grpcWeb from 'grpc-web';

import * as tdex$daemon_v1_wallet_pb from './wallet_pb';

export class WalletClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string };
  options_: null | { [index: string]: any };

  constructor(
    hostname: string,
    credentials?: null | { [index: string]: string },
    options?: null | { [index: string]: any }
  ) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorWalletAddress = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Wallet/WalletAddress',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_wallet_pb.WalletAddressRequest,
    tdex$daemon_v1_wallet_pb.WalletAddressReply,
    (request: tdex$daemon_v1_wallet_pb.WalletAddressRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_wallet_pb.WalletAddressReply.deserializeBinary
  );

  walletAddress(
    request: tdex$daemon_v1_wallet_pb.WalletAddressRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<tdex$daemon_v1_wallet_pb.WalletAddressReply>;

  walletAddress(
    request: tdex$daemon_v1_wallet_pb.WalletAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError, response: tdex$daemon_v1_wallet_pb.WalletAddressReply) => void
  ): grpcWeb.ClientReadableStream<tdex$daemon_v1_wallet_pb.WalletAddressReply>;

  walletAddress(
    request: tdex$daemon_v1_wallet_pb.WalletAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError, response: tdex$daemon_v1_wallet_pb.WalletAddressReply) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + '/tdex.daemon.v1.Wallet/WalletAddress',
        request,
        metadata || {},
        this.methodDescriptorWalletAddress,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + '/tdex.daemon.v1.Wallet/WalletAddress',
      request,
      metadata || {},
      this.methodDescriptorWalletAddress
    );
  }

  methodDescriptorWalletBalance = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Wallet/WalletBalance',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_wallet_pb.WalletBalanceRequest,
    tdex$daemon_v1_wallet_pb.WalletBalanceReply,
    (request: tdex$daemon_v1_wallet_pb.WalletBalanceRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_wallet_pb.WalletBalanceReply.deserializeBinary
  );

  walletBalance(
    request: tdex$daemon_v1_wallet_pb.WalletBalanceRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<tdex$daemon_v1_wallet_pb.WalletBalanceReply>;

  walletBalance(
    request: tdex$daemon_v1_wallet_pb.WalletBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError, response: tdex$daemon_v1_wallet_pb.WalletBalanceReply) => void
  ): grpcWeb.ClientReadableStream<tdex$daemon_v1_wallet_pb.WalletBalanceReply>;

  walletBalance(
    request: tdex$daemon_v1_wallet_pb.WalletBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError, response: tdex$daemon_v1_wallet_pb.WalletBalanceReply) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + '/tdex.daemon.v1.Wallet/WalletBalance',
        request,
        metadata || {},
        this.methodDescriptorWalletBalance,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + '/tdex.daemon.v1.Wallet/WalletBalance',
      request,
      metadata || {},
      this.methodDescriptorWalletBalance
    );
  }

  methodDescriptorSendToMany = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Wallet/SendToMany',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_wallet_pb.SendToManyRequest,
    tdex$daemon_v1_wallet_pb.SendToManyReply,
    (request: tdex$daemon_v1_wallet_pb.SendToManyRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_wallet_pb.SendToManyReply.deserializeBinary
  );

  sendToMany(
    request: tdex$daemon_v1_wallet_pb.SendToManyRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<tdex$daemon_v1_wallet_pb.SendToManyReply>;

  sendToMany(
    request: tdex$daemon_v1_wallet_pb.SendToManyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError, response: tdex$daemon_v1_wallet_pb.SendToManyReply) => void
  ): grpcWeb.ClientReadableStream<tdex$daemon_v1_wallet_pb.SendToManyReply>;

  sendToMany(
    request: tdex$daemon_v1_wallet_pb.SendToManyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError, response: tdex$daemon_v1_wallet_pb.SendToManyReply) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + '/tdex.daemon.v1.Wallet/SendToMany',
        request,
        metadata || {},
        this.methodDescriptorSendToMany,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + '/tdex.daemon.v1.Wallet/SendToMany',
      request,
      metadata || {},
      this.methodDescriptorSendToMany
    );
  }
}
