/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import {
  ChangePasswordReply,
  ChangePasswordRequest,
  GenSeedReply,
  GenSeedRequest,
  InitWalletReply,
  InitWalletRequest,
  IsReadyReply,
  IsReadyRequest,
  UnlockWalletReply,
  UnlockWalletRequest} from './walletunlocker_pb';

export class WalletUnlockerClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGenSeed = new grpcWeb.AbstractClientBase.MethodInfo(
    GenSeedReply,
    (request: GenSeedRequest) => {
      return request.serializeBinary();
    },
    GenSeedReply.deserializeBinary
  );

  genSeed(
    request: GenSeedRequest,
    metadata: grpcWeb.Metadata | null): Promise<GenSeedReply>;

  genSeed(
    request: GenSeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GenSeedReply) => void): grpcWeb.ClientReadableStream<GenSeedReply>;

  genSeed(
    request: GenSeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GenSeedReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/WalletUnlocker/GenSeed', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGenSeed,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/WalletUnlocker/GenSeed',
    request,
    metadata || {},
    this.methodInfoGenSeed);
  }

  methodInfoInitWallet = new grpcWeb.AbstractClientBase.MethodInfo(
    InitWalletReply,
    (request: InitWalletRequest) => {
      return request.serializeBinary();
    },
    InitWalletReply.deserializeBinary
  );

  initWallet(
    request: InitWalletRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      new URL('/WalletUnlocker/InitWallet', this.hostname_).toString(),
      request,
      metadata || {},
      this.methodInfoInitWallet);
  }

  methodInfoUnlockWallet = new grpcWeb.AbstractClientBase.MethodInfo(
    UnlockWalletReply,
    (request: UnlockWalletRequest) => {
      return request.serializeBinary();
    },
    UnlockWalletReply.deserializeBinary
  );

  unlockWallet(
    request: UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null): Promise<UnlockWalletReply>;

  unlockWallet(
    request: UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UnlockWalletReply) => void): grpcWeb.ClientReadableStream<UnlockWalletReply>;

  unlockWallet(
    request: UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: UnlockWalletReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/WalletUnlocker/UnlockWallet', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoUnlockWallet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/WalletUnlocker/UnlockWallet',
    request,
    metadata || {},
    this.methodInfoUnlockWallet);
  }

  methodInfoChangePassword = new grpcWeb.AbstractClientBase.MethodInfo(
    ChangePasswordReply,
    (request: ChangePasswordRequest) => {
      return request.serializeBinary();
    },
    ChangePasswordReply.deserializeBinary
  );

  changePassword(
    request: ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<ChangePasswordReply>;

  changePassword(
    request: ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ChangePasswordReply) => void): grpcWeb.ClientReadableStream<ChangePasswordReply>;

  changePassword(
    request: ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ChangePasswordReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/WalletUnlocker/ChangePassword', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoChangePassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/WalletUnlocker/ChangePassword',
    request,
    metadata || {},
    this.methodInfoChangePassword);
  }

  methodInfoIsReady = new grpcWeb.AbstractClientBase.MethodInfo(
    IsReadyReply,
    (request: IsReadyRequest) => {
      return request.serializeBinary();
    },
    IsReadyReply.deserializeBinary
  );

  isReady(
    request: IsReadyRequest,
    metadata: grpcWeb.Metadata | null): Promise<IsReadyReply>;

  isReady(
    request: IsReadyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: IsReadyReply) => void): grpcWeb.ClientReadableStream<IsReadyReply>;

  isReady(
    request: IsReadyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: IsReadyReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/WalletUnlocker/IsReady', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoIsReady,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/WalletUnlocker/IsReady',
    request,
    metadata || {},
    this.methodInfoIsReady);
  }

}

