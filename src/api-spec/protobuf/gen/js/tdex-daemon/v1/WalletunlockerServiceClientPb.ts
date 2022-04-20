/**
 * @fileoverview gRPC-Web generated client stub for tdex_daemon.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as tdex$daemon_v1_walletunlocker_pb from '../../tdex-daemon/v1/walletunlocker_pb';


export class WalletUnlockerServiceClient {
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
    '/tdex_daemon.v1.WalletUnlockerService/GenSeed',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_walletunlocker_pb.GenSeedRequest,
    tdex$daemon_v1_walletunlocker_pb.GenSeedResponse,
    (request: tdex$daemon_v1_walletunlocker_pb.GenSeedRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_walletunlocker_pb.GenSeedResponse.deserializeBinary
  );

  genSeed(
    request: tdex$daemon_v1_walletunlocker_pb.GenSeedRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_walletunlocker_pb.GenSeedResponse>;

  genSeed(
    request: tdex$daemon_v1_walletunlocker_pb.GenSeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_walletunlocker_pb.GenSeedResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_walletunlocker_pb.GenSeedResponse>;

  genSeed(
    request: tdex$daemon_v1_walletunlocker_pb.GenSeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_walletunlocker_pb.GenSeedResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.WalletUnlockerService/GenSeed',
        request,
        metadata || {},
        this.methodDescriptorGenSeed,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.WalletUnlockerService/GenSeed',
    request,
    metadata || {},
    this.methodDescriptorGenSeed);
  }

  methodDescriptorInitWallet = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.WalletUnlockerService/InitWallet',
    grpcWeb.MethodType.SERVER_STREAMING,
    tdex$daemon_v1_walletunlocker_pb.InitWalletRequest,
    tdex$daemon_v1_walletunlocker_pb.InitWalletResponse,
    (request: tdex$daemon_v1_walletunlocker_pb.InitWalletRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_walletunlocker_pb.InitWalletResponse.deserializeBinary
  );

  initWallet(
    request: tdex$daemon_v1_walletunlocker_pb.InitWalletRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<tdex$daemon_v1_walletunlocker_pb.InitWalletResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/tdex_daemon.v1.WalletUnlockerService/InitWallet',
      request,
      metadata || {},
      this.methodDescriptorInitWallet);
  }

  methodDescriptorUnlockWallet = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.WalletUnlockerService/UnlockWallet',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_walletunlocker_pb.UnlockWalletRequest,
    tdex$daemon_v1_walletunlocker_pb.UnlockWalletResponse,
    (request: tdex$daemon_v1_walletunlocker_pb.UnlockWalletRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_walletunlocker_pb.UnlockWalletResponse.deserializeBinary
  );

  unlockWallet(
    request: tdex$daemon_v1_walletunlocker_pb.UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_walletunlocker_pb.UnlockWalletResponse>;

  unlockWallet(
    request: tdex$daemon_v1_walletunlocker_pb.UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_walletunlocker_pb.UnlockWalletResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_walletunlocker_pb.UnlockWalletResponse>;

  unlockWallet(
    request: tdex$daemon_v1_walletunlocker_pb.UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_walletunlocker_pb.UnlockWalletResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.WalletUnlockerService/UnlockWallet',
        request,
        metadata || {},
        this.methodDescriptorUnlockWallet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.WalletUnlockerService/UnlockWallet',
    request,
    metadata || {},
    this.methodDescriptorUnlockWallet);
  }

  methodDescriptorChangePassword = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.WalletUnlockerService/ChangePassword',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_walletunlocker_pb.ChangePasswordRequest,
    tdex$daemon_v1_walletunlocker_pb.ChangePasswordResponse,
    (request: tdex$daemon_v1_walletunlocker_pb.ChangePasswordRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_walletunlocker_pb.ChangePasswordResponse.deserializeBinary
  );

  changePassword(
    request: tdex$daemon_v1_walletunlocker_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_walletunlocker_pb.ChangePasswordResponse>;

  changePassword(
    request: tdex$daemon_v1_walletunlocker_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_walletunlocker_pb.ChangePasswordResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_walletunlocker_pb.ChangePasswordResponse>;

  changePassword(
    request: tdex$daemon_v1_walletunlocker_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_walletunlocker_pb.ChangePasswordResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.WalletUnlockerService/ChangePassword',
        request,
        metadata || {},
        this.methodDescriptorChangePassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.WalletUnlockerService/ChangePassword',
    request,
    metadata || {},
    this.methodDescriptorChangePassword);
  }

  methodDescriptorIsReady = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.WalletUnlockerService/IsReady',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_walletunlocker_pb.IsReadyRequest,
    tdex$daemon_v1_walletunlocker_pb.IsReadyResponse,
    (request: tdex$daemon_v1_walletunlocker_pb.IsReadyRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_walletunlocker_pb.IsReadyResponse.deserializeBinary
  );

  isReady(
    request: tdex$daemon_v1_walletunlocker_pb.IsReadyRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_walletunlocker_pb.IsReadyResponse>;

  isReady(
    request: tdex$daemon_v1_walletunlocker_pb.IsReadyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_walletunlocker_pb.IsReadyResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_walletunlocker_pb.IsReadyResponse>;

  isReady(
    request: tdex$daemon_v1_walletunlocker_pb.IsReadyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_walletunlocker_pb.IsReadyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.WalletUnlockerService/IsReady',
        request,
        metadata || {},
        this.methodDescriptorIsReady,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.WalletUnlockerService/IsReady',
    request,
    metadata || {},
    this.methodDescriptorIsReady);
  }

}

