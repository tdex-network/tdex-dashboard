/**
 * @fileoverview gRPC-Web generated client stub for tdex.daemon.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

import * as grpcWeb from 'grpc-web';

import * as tdex$daemon_v1_walletunlocker_pb from './walletunlocker_pb';

export class WalletUnlockerClient {
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

  methodDescriptorGenSeed = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.WalletUnlocker/GenSeed',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_walletunlocker_pb.GenSeedRequest,
    tdex$daemon_v1_walletunlocker_pb.GenSeedReply,
    (request: tdex$daemon_v1_walletunlocker_pb.GenSeedRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_walletunlocker_pb.GenSeedReply.deserializeBinary
  );

  genSeed(
    request: tdex$daemon_v1_walletunlocker_pb.GenSeedRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<tdex$daemon_v1_walletunlocker_pb.GenSeedReply>;

  genSeed(
    request: tdex$daemon_v1_walletunlocker_pb.GenSeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError, response: tdex$daemon_v1_walletunlocker_pb.GenSeedReply) => void
  ): grpcWeb.ClientReadableStream<tdex$daemon_v1_walletunlocker_pb.GenSeedReply>;

  genSeed(
    request: tdex$daemon_v1_walletunlocker_pb.GenSeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError, response: tdex$daemon_v1_walletunlocker_pb.GenSeedReply) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + '/tdex.daemon.v1.WalletUnlocker/GenSeed',
        request,
        metadata || {},
        this.methodDescriptorGenSeed,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + '/tdex.daemon.v1.WalletUnlocker/GenSeed',
      request,
      metadata || {},
      this.methodDescriptorGenSeed
    );
  }

  methodDescriptorInitWallet = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.WalletUnlocker/InitWallet',
    grpcWeb.MethodType.SERVER_STREAMING,
    tdex$daemon_v1_walletunlocker_pb.InitWalletRequest,
    tdex$daemon_v1_walletunlocker_pb.InitWalletReply,
    (request: tdex$daemon_v1_walletunlocker_pb.InitWalletRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_walletunlocker_pb.InitWalletReply.deserializeBinary
  );

  initWallet(
    request: tdex$daemon_v1_walletunlocker_pb.InitWalletRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<tdex$daemon_v1_walletunlocker_pb.InitWalletReply> {
    return this.client_.serverStreaming(
      this.hostname_ + '/tdex.daemon.v1.WalletUnlocker/InitWallet',
      request,
      metadata || {},
      this.methodDescriptorInitWallet
    );
  }

  methodDescriptorUnlockWallet = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.WalletUnlocker/UnlockWallet',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_walletunlocker_pb.UnlockWalletRequest,
    tdex$daemon_v1_walletunlocker_pb.UnlockWalletReply,
    (request: tdex$daemon_v1_walletunlocker_pb.UnlockWalletRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_walletunlocker_pb.UnlockWalletReply.deserializeBinary
  );

  unlockWallet(
    request: tdex$daemon_v1_walletunlocker_pb.UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<tdex$daemon_v1_walletunlocker_pb.UnlockWalletReply>;

  unlockWallet(
    request: tdex$daemon_v1_walletunlocker_pb.UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError, response: tdex$daemon_v1_walletunlocker_pb.UnlockWalletReply) => void
  ): grpcWeb.ClientReadableStream<tdex$daemon_v1_walletunlocker_pb.UnlockWalletReply>;

  unlockWallet(
    request: tdex$daemon_v1_walletunlocker_pb.UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError, response: tdex$daemon_v1_walletunlocker_pb.UnlockWalletReply) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + '/tdex.daemon.v1.WalletUnlocker/UnlockWallet',
        request,
        metadata || {},
        this.methodDescriptorUnlockWallet,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + '/tdex.daemon.v1.WalletUnlocker/UnlockWallet',
      request,
      metadata || {},
      this.methodDescriptorUnlockWallet
    );
  }

  methodDescriptorChangePassword = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.WalletUnlocker/ChangePassword',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_walletunlocker_pb.ChangePasswordRequest,
    tdex$daemon_v1_walletunlocker_pb.ChangePasswordReply,
    (request: tdex$daemon_v1_walletunlocker_pb.ChangePasswordRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_walletunlocker_pb.ChangePasswordReply.deserializeBinary
  );

  changePassword(
    request: tdex$daemon_v1_walletunlocker_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<tdex$daemon_v1_walletunlocker_pb.ChangePasswordReply>;

  changePassword(
    request: tdex$daemon_v1_walletunlocker_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError, response: tdex$daemon_v1_walletunlocker_pb.ChangePasswordReply) => void
  ): grpcWeb.ClientReadableStream<tdex$daemon_v1_walletunlocker_pb.ChangePasswordReply>;

  changePassword(
    request: tdex$daemon_v1_walletunlocker_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError, response: tdex$daemon_v1_walletunlocker_pb.ChangePasswordReply) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + '/tdex.daemon.v1.WalletUnlocker/ChangePassword',
        request,
        metadata || {},
        this.methodDescriptorChangePassword,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + '/tdex.daemon.v1.WalletUnlocker/ChangePassword',
      request,
      metadata || {},
      this.methodDescriptorChangePassword
    );
  }

  methodDescriptorIsReady = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.WalletUnlocker/IsReady',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_walletunlocker_pb.IsReadyRequest,
    tdex$daemon_v1_walletunlocker_pb.IsReadyReply,
    (request: tdex$daemon_v1_walletunlocker_pb.IsReadyRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_walletunlocker_pb.IsReadyReply.deserializeBinary
  );

  isReady(
    request: tdex$daemon_v1_walletunlocker_pb.IsReadyRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<tdex$daemon_v1_walletunlocker_pb.IsReadyReply>;

  isReady(
    request: tdex$daemon_v1_walletunlocker_pb.IsReadyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError, response: tdex$daemon_v1_walletunlocker_pb.IsReadyReply) => void
  ): grpcWeb.ClientReadableStream<tdex$daemon_v1_walletunlocker_pb.IsReadyReply>;

  isReady(
    request: tdex$daemon_v1_walletunlocker_pb.IsReadyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError, response: tdex$daemon_v1_walletunlocker_pb.IsReadyReply) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + '/tdex.daemon.v1.WalletUnlocker/IsReady',
        request,
        metadata || {},
        this.methodDescriptorIsReady,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + '/tdex.daemon.v1.WalletUnlocker/IsReady',
      request,
      metadata || {},
      this.methodDescriptorIsReady
    );
  }
}
