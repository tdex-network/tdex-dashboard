/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as wallet_pb from './wallet_pb';


export class WalletClient {
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

  methodInfoWalletAddress = new grpcWeb.MethodDescriptor(
    '/Wallet/WalletAddress',
    grpcWeb.MethodType.UNARY,
    wallet_pb.WalletAddressRequest,
    wallet_pb.WalletAddressReply,
    (request: wallet_pb.WalletAddressRequest) => {
      return request.serializeBinary();
    },
    wallet_pb.WalletAddressReply.deserializeBinary
  );

  walletAddress(
    request: wallet_pb.WalletAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<wallet_pb.WalletAddressReply>;

  walletAddress(
    request: wallet_pb.WalletAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wallet_pb.WalletAddressReply) => void): grpcWeb.ClientReadableStream<wallet_pb.WalletAddressReply>;

  walletAddress(
    request: wallet_pb.WalletAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wallet_pb.WalletAddressReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Wallet/WalletAddress',
        request,
        metadata || {},
        this.methodInfoWalletAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Wallet/WalletAddress',
    request,
    metadata || {},
    this.methodInfoWalletAddress);
  }

  methodInfoWalletBalance = new grpcWeb.MethodDescriptor(
    '/Wallet/WalletBalance',
    grpcWeb.MethodType.UNARY,
    wallet_pb.WalletBalanceRequest,
    wallet_pb.WalletBalanceReply,
    (request: wallet_pb.WalletBalanceRequest) => {
      return request.serializeBinary();
    },
    wallet_pb.WalletBalanceReply.deserializeBinary
  );

  walletBalance(
    request: wallet_pb.WalletBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<wallet_pb.WalletBalanceReply>;

  walletBalance(
    request: wallet_pb.WalletBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wallet_pb.WalletBalanceReply) => void): grpcWeb.ClientReadableStream<wallet_pb.WalletBalanceReply>;

  walletBalance(
    request: wallet_pb.WalletBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wallet_pb.WalletBalanceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Wallet/WalletBalance',
        request,
        metadata || {},
        this.methodInfoWalletBalance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Wallet/WalletBalance',
    request,
    metadata || {},
    this.methodInfoWalletBalance);
  }

  methodInfoSendToMany = new grpcWeb.MethodDescriptor(
    '/Wallet/SendToMany',
    grpcWeb.MethodType.UNARY,
    wallet_pb.SendToManyRequest,
    wallet_pb.SendToManyReply,
    (request: wallet_pb.SendToManyRequest) => {
      return request.serializeBinary();
    },
    wallet_pb.SendToManyReply.deserializeBinary
  );

  sendToMany(
    request: wallet_pb.SendToManyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wallet_pb.SendToManyReply>;

  sendToMany(
    request: wallet_pb.SendToManyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wallet_pb.SendToManyReply) => void): grpcWeb.ClientReadableStream<wallet_pb.SendToManyReply>;

  sendToMany(
    request: wallet_pb.SendToManyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wallet_pb.SendToManyReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Wallet/SendToMany',
        request,
        metadata || {},
        this.methodInfoSendToMany,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Wallet/SendToMany',
    request,
    metadata || {},
    this.methodInfoSendToMany);
  }

}

