/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as walletunlocker_pb from './walletunlocker_pb';


export class WalletUnlockerClient {
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

  methodDescriptorGenSeed = new grpcWeb.MethodDescriptor(
    '/WalletUnlocker/GenSeed',
    grpcWeb.MethodType.UNARY,
    walletunlocker_pb.GenSeedRequest,
    walletunlocker_pb.GenSeedReply,
    (request: walletunlocker_pb.GenSeedRequest) => {
      return request.serializeBinary();
    },
    walletunlocker_pb.GenSeedReply.deserializeBinary
  );

  genSeed(
    request: walletunlocker_pb.GenSeedRequest,
    metadata: grpcWeb.Metadata | null): Promise<walletunlocker_pb.GenSeedReply>;

  genSeed(
    request: walletunlocker_pb.GenSeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: walletunlocker_pb.GenSeedReply) => void): grpcWeb.ClientReadableStream<walletunlocker_pb.GenSeedReply>;

  genSeed(
    request: walletunlocker_pb.GenSeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: walletunlocker_pb.GenSeedReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/WalletUnlocker/GenSeed',
        request,
        metadata || {},
        this.methodDescriptorGenSeed,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/WalletUnlocker/GenSeed',
    request,
    metadata || {},
    this.methodDescriptorGenSeed);
  }

  methodDescriptorInitWallet = new grpcWeb.MethodDescriptor(
    '/WalletUnlocker/InitWallet',
    grpcWeb.MethodType.SERVER_STREAMING,
    walletunlocker_pb.InitWalletRequest,
    walletunlocker_pb.InitWalletReply,
    (request: walletunlocker_pb.InitWalletRequest) => {
      return request.serializeBinary();
    },
    walletunlocker_pb.InitWalletReply.deserializeBinary
  );

  initWallet(
    request: walletunlocker_pb.InitWalletRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<walletunlocker_pb.InitWalletReply> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/WalletUnlocker/InitWallet',
      request,
      metadata || {},
      this.methodDescriptorInitWallet);
  }

  methodDescriptorUnlockWallet = new grpcWeb.MethodDescriptor(
    '/WalletUnlocker/UnlockWallet',
    grpcWeb.MethodType.UNARY,
    walletunlocker_pb.UnlockWalletRequest,
    walletunlocker_pb.UnlockWalletReply,
    (request: walletunlocker_pb.UnlockWalletRequest) => {
      return request.serializeBinary();
    },
    walletunlocker_pb.UnlockWalletReply.deserializeBinary
  );

  unlockWallet(
    request: walletunlocker_pb.UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null): Promise<walletunlocker_pb.UnlockWalletReply>;

  unlockWallet(
    request: walletunlocker_pb.UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: walletunlocker_pb.UnlockWalletReply) => void): grpcWeb.ClientReadableStream<walletunlocker_pb.UnlockWalletReply>;

  unlockWallet(
    request: walletunlocker_pb.UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: walletunlocker_pb.UnlockWalletReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/WalletUnlocker/UnlockWallet',
        request,
        metadata || {},
        this.methodDescriptorUnlockWallet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/WalletUnlocker/UnlockWallet',
    request,
    metadata || {},
    this.methodDescriptorUnlockWallet);
  }

  methodDescriptorChangePassword = new grpcWeb.MethodDescriptor(
    '/WalletUnlocker/ChangePassword',
    grpcWeb.MethodType.UNARY,
    walletunlocker_pb.ChangePasswordRequest,
    walletunlocker_pb.ChangePasswordReply,
    (request: walletunlocker_pb.ChangePasswordRequest) => {
      return request.serializeBinary();
    },
    walletunlocker_pb.ChangePasswordReply.deserializeBinary
  );

  changePassword(
    request: walletunlocker_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<walletunlocker_pb.ChangePasswordReply>;

  changePassword(
    request: walletunlocker_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: walletunlocker_pb.ChangePasswordReply) => void): grpcWeb.ClientReadableStream<walletunlocker_pb.ChangePasswordReply>;

  changePassword(
    request: walletunlocker_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: walletunlocker_pb.ChangePasswordReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/WalletUnlocker/ChangePassword',
        request,
        metadata || {},
        this.methodDescriptorChangePassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/WalletUnlocker/ChangePassword',
    request,
    metadata || {},
    this.methodDescriptorChangePassword);
  }

  methodDescriptorIsReady = new grpcWeb.MethodDescriptor(
    '/WalletUnlocker/IsReady',
    grpcWeb.MethodType.UNARY,
    walletunlocker_pb.IsReadyRequest,
    walletunlocker_pb.IsReadyReply,
    (request: walletunlocker_pb.IsReadyRequest) => {
      return request.serializeBinary();
    },
    walletunlocker_pb.IsReadyReply.deserializeBinary
  );

  isReady(
    request: walletunlocker_pb.IsReadyRequest,
    metadata: grpcWeb.Metadata | null): Promise<walletunlocker_pb.IsReadyReply>;

  isReady(
    request: walletunlocker_pb.IsReadyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: walletunlocker_pb.IsReadyReply) => void): grpcWeb.ClientReadableStream<walletunlocker_pb.IsReadyReply>;

  isReady(
    request: walletunlocker_pb.IsReadyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: walletunlocker_pb.IsReadyReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/WalletUnlocker/IsReady',
        request,
        metadata || {},
        this.methodDescriptorIsReady,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/WalletUnlocker/IsReady',
    request,
    metadata || {},
    this.methodDescriptorIsReady);
  }

}

