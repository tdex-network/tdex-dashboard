/**
 * @fileoverview gRPC-Web generated client stub for tdex.daemon.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as tdex$daemon_v1_operator_pb from '../../tdex-daemon/v1/operator_pb';


export class OperatorClient {
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

  methodDescriptorGetInfo = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/GetInfo',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetInfoRequest,
    tdex$daemon_v1_operator_pb.GetInfoReply,
    (request: tdex$daemon_v1_operator_pb.GetInfoRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetInfoReply.deserializeBinary
  );

  getInfo(
    request: tdex$daemon_v1_operator_pb.GetInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetInfoReply>;

  getInfo(
    request: tdex$daemon_v1_operator_pb.GetInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetInfoReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetInfoReply>;

  getInfo(
    request: tdex$daemon_v1_operator_pb.GetInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetInfoReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/GetInfo',
        request,
        metadata || {},
        this.methodDescriptorGetInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/GetInfo',
    request,
    metadata || {},
    this.methodDescriptorGetInfo);
  }

  methodDescriptorGetFeeAddress = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/GetFeeAddress',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetFeeAddressRequest,
    tdex$daemon_v1_operator_pb.GetFeeAddressReply,
    (request: tdex$daemon_v1_operator_pb.GetFeeAddressRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetFeeAddressReply.deserializeBinary
  );

  getFeeAddress(
    request: tdex$daemon_v1_operator_pb.GetFeeAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetFeeAddressReply>;

  getFeeAddress(
    request: tdex$daemon_v1_operator_pb.GetFeeAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetFeeAddressReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetFeeAddressReply>;

  getFeeAddress(
    request: tdex$daemon_v1_operator_pb.GetFeeAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetFeeAddressReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/GetFeeAddress',
        request,
        metadata || {},
        this.methodDescriptorGetFeeAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/GetFeeAddress',
    request,
    metadata || {},
    this.methodDescriptorGetFeeAddress);
  }

  methodDescriptorListFeeAddresses = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/ListFeeAddresses',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ListFeeAddressesRequest,
    tdex$daemon_v1_operator_pb.ListFeeAddressesReply,
    (request: tdex$daemon_v1_operator_pb.ListFeeAddressesRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ListFeeAddressesReply.deserializeBinary
  );

  listFeeAddresses(
    request: tdex$daemon_v1_operator_pb.ListFeeAddressesRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ListFeeAddressesReply>;

  listFeeAddresses(
    request: tdex$daemon_v1_operator_pb.ListFeeAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListFeeAddressesReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ListFeeAddressesReply>;

  listFeeAddresses(
    request: tdex$daemon_v1_operator_pb.ListFeeAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListFeeAddressesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/ListFeeAddresses',
        request,
        metadata || {},
        this.methodDescriptorListFeeAddresses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/ListFeeAddresses',
    request,
    metadata || {},
    this.methodDescriptorListFeeAddresses);
  }

  methodDescriptorGetFeeBalance = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/GetFeeBalance',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetFeeBalanceRequest,
    tdex$daemon_v1_operator_pb.GetFeeBalanceReply,
    (request: tdex$daemon_v1_operator_pb.GetFeeBalanceRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetFeeBalanceReply.deserializeBinary
  );

  getFeeBalance(
    request: tdex$daemon_v1_operator_pb.GetFeeBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetFeeBalanceReply>;

  getFeeBalance(
    request: tdex$daemon_v1_operator_pb.GetFeeBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetFeeBalanceReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetFeeBalanceReply>;

  getFeeBalance(
    request: tdex$daemon_v1_operator_pb.GetFeeBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetFeeBalanceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/GetFeeBalance',
        request,
        metadata || {},
        this.methodDescriptorGetFeeBalance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/GetFeeBalance',
    request,
    metadata || {},
    this.methodDescriptorGetFeeBalance);
  }

  methodDescriptorClaimFeeDeposits = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/ClaimFeeDeposits',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ClaimFeeDepositsRequest,
    tdex$daemon_v1_operator_pb.ClaimFeeDepositsReply,
    (request: tdex$daemon_v1_operator_pb.ClaimFeeDepositsRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ClaimFeeDepositsReply.deserializeBinary
  );

  claimFeeDeposits(
    request: tdex$daemon_v1_operator_pb.ClaimFeeDepositsRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ClaimFeeDepositsReply>;

  claimFeeDeposits(
    request: tdex$daemon_v1_operator_pb.ClaimFeeDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ClaimFeeDepositsReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ClaimFeeDepositsReply>;

  claimFeeDeposits(
    request: tdex$daemon_v1_operator_pb.ClaimFeeDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ClaimFeeDepositsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/ClaimFeeDeposits',
        request,
        metadata || {},
        this.methodDescriptorClaimFeeDeposits,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/ClaimFeeDeposits',
    request,
    metadata || {},
    this.methodDescriptorClaimFeeDeposits);
  }

  methodDescriptorWithdrawFee = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/WithdrawFee',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.WithdrawFeeRequest,
    tdex$daemon_v1_operator_pb.WithdrawFeeReply,
    (request: tdex$daemon_v1_operator_pb.WithdrawFeeRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.WithdrawFeeReply.deserializeBinary
  );

  withdrawFee(
    request: tdex$daemon_v1_operator_pb.WithdrawFeeRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.WithdrawFeeReply>;

  withdrawFee(
    request: tdex$daemon_v1_operator_pb.WithdrawFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.WithdrawFeeReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.WithdrawFeeReply>;

  withdrawFee(
    request: tdex$daemon_v1_operator_pb.WithdrawFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.WithdrawFeeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/WithdrawFee',
        request,
        metadata || {},
        this.methodDescriptorWithdrawFee,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/WithdrawFee',
    request,
    metadata || {},
    this.methodDescriptorWithdrawFee);
  }

  methodDescriptorNewMarket = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/NewMarket',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.NewMarketRequest,
    tdex$daemon_v1_operator_pb.NewMarketReply,
    (request: tdex$daemon_v1_operator_pb.NewMarketRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.NewMarketReply.deserializeBinary
  );

  newMarket(
    request: tdex$daemon_v1_operator_pb.NewMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.NewMarketReply>;

  newMarket(
    request: tdex$daemon_v1_operator_pb.NewMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.NewMarketReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.NewMarketReply>;

  newMarket(
    request: tdex$daemon_v1_operator_pb.NewMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.NewMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/NewMarket',
        request,
        metadata || {},
        this.methodDescriptorNewMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/NewMarket',
    request,
    metadata || {},
    this.methodDescriptorNewMarket);
  }

  methodDescriptorGetMarketInfo = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/GetMarketInfo',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetMarketInfoRequest,
    tdex$daemon_v1_operator_pb.GetMarketInfoReply,
    (request: tdex$daemon_v1_operator_pb.GetMarketInfoRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetMarketInfoReply.deserializeBinary
  );

  getMarketInfo(
    request: tdex$daemon_v1_operator_pb.GetMarketInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetMarketInfoReply>;

  getMarketInfo(
    request: tdex$daemon_v1_operator_pb.GetMarketInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketInfoReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetMarketInfoReply>;

  getMarketInfo(
    request: tdex$daemon_v1_operator_pb.GetMarketInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketInfoReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/GetMarketInfo',
        request,
        metadata || {},
        this.methodDescriptorGetMarketInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/GetMarketInfo',
    request,
    metadata || {},
    this.methodDescriptorGetMarketInfo);
  }

  methodDescriptorGetMarketAddress = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/GetMarketAddress',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetMarketAddressRequest,
    tdex$daemon_v1_operator_pb.GetMarketAddressReply,
    (request: tdex$daemon_v1_operator_pb.GetMarketAddressRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetMarketAddressReply.deserializeBinary
  );

  getMarketAddress(
    request: tdex$daemon_v1_operator_pb.GetMarketAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetMarketAddressReply>;

  getMarketAddress(
    request: tdex$daemon_v1_operator_pb.GetMarketAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketAddressReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetMarketAddressReply>;

  getMarketAddress(
    request: tdex$daemon_v1_operator_pb.GetMarketAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketAddressReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/GetMarketAddress',
        request,
        metadata || {},
        this.methodDescriptorGetMarketAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/GetMarketAddress',
    request,
    metadata || {},
    this.methodDescriptorGetMarketAddress);
  }

  methodDescriptorListMarketAddresses = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/ListMarketAddresses',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ListMarketAddressesRequest,
    tdex$daemon_v1_operator_pb.ListMarketAddressesReply,
    (request: tdex$daemon_v1_operator_pb.ListMarketAddressesRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ListMarketAddressesReply.deserializeBinary
  );

  listMarketAddresses(
    request: tdex$daemon_v1_operator_pb.ListMarketAddressesRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ListMarketAddressesReply>;

  listMarketAddresses(
    request: tdex$daemon_v1_operator_pb.ListMarketAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListMarketAddressesReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ListMarketAddressesReply>;

  listMarketAddresses(
    request: tdex$daemon_v1_operator_pb.ListMarketAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListMarketAddressesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/ListMarketAddresses',
        request,
        metadata || {},
        this.methodDescriptorListMarketAddresses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/ListMarketAddresses',
    request,
    metadata || {},
    this.methodDescriptorListMarketAddresses);
  }

  methodDescriptorGetMarketBalance = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/GetMarketBalance',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetMarketBalanceRequest,
    tdex$daemon_v1_operator_pb.GetMarketBalanceReply,
    (request: tdex$daemon_v1_operator_pb.GetMarketBalanceRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetMarketBalanceReply.deserializeBinary
  );

  getMarketBalance(
    request: tdex$daemon_v1_operator_pb.GetMarketBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetMarketBalanceReply>;

  getMarketBalance(
    request: tdex$daemon_v1_operator_pb.GetMarketBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketBalanceReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetMarketBalanceReply>;

  getMarketBalance(
    request: tdex$daemon_v1_operator_pb.GetMarketBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketBalanceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/GetMarketBalance',
        request,
        metadata || {},
        this.methodDescriptorGetMarketBalance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/GetMarketBalance',
    request,
    metadata || {},
    this.methodDescriptorGetMarketBalance);
  }

  methodDescriptorClaimMarketDeposits = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/ClaimMarketDeposits',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ClaimMarketDepositsRequest,
    tdex$daemon_v1_operator_pb.ClaimMarketDepositsReply,
    (request: tdex$daemon_v1_operator_pb.ClaimMarketDepositsRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ClaimMarketDepositsReply.deserializeBinary
  );

  claimMarketDeposits(
    request: tdex$daemon_v1_operator_pb.ClaimMarketDepositsRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ClaimMarketDepositsReply>;

  claimMarketDeposits(
    request: tdex$daemon_v1_operator_pb.ClaimMarketDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ClaimMarketDepositsReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ClaimMarketDepositsReply>;

  claimMarketDeposits(
    request: tdex$daemon_v1_operator_pb.ClaimMarketDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ClaimMarketDepositsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/ClaimMarketDeposits',
        request,
        metadata || {},
        this.methodDescriptorClaimMarketDeposits,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/ClaimMarketDeposits',
    request,
    metadata || {},
    this.methodDescriptorClaimMarketDeposits);
  }

  methodDescriptorOpenMarket = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/OpenMarket',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.OpenMarketRequest,
    tdex$daemon_v1_operator_pb.OpenMarketReply,
    (request: tdex$daemon_v1_operator_pb.OpenMarketRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.OpenMarketReply.deserializeBinary
  );

  openMarket(
    request: tdex$daemon_v1_operator_pb.OpenMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.OpenMarketReply>;

  openMarket(
    request: tdex$daemon_v1_operator_pb.OpenMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.OpenMarketReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.OpenMarketReply>;

  openMarket(
    request: tdex$daemon_v1_operator_pb.OpenMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.OpenMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/OpenMarket',
        request,
        metadata || {},
        this.methodDescriptorOpenMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/OpenMarket',
    request,
    metadata || {},
    this.methodDescriptorOpenMarket);
  }

  methodDescriptorCloseMarket = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/CloseMarket',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.CloseMarketRequest,
    tdex$daemon_v1_operator_pb.CloseMarketReply,
    (request: tdex$daemon_v1_operator_pb.CloseMarketRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.CloseMarketReply.deserializeBinary
  );

  closeMarket(
    request: tdex$daemon_v1_operator_pb.CloseMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.CloseMarketReply>;

  closeMarket(
    request: tdex$daemon_v1_operator_pb.CloseMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.CloseMarketReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.CloseMarketReply>;

  closeMarket(
    request: tdex$daemon_v1_operator_pb.CloseMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.CloseMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/CloseMarket',
        request,
        metadata || {},
        this.methodDescriptorCloseMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/CloseMarket',
    request,
    metadata || {},
    this.methodDescriptorCloseMarket);
  }

  methodDescriptorDropMarket = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/DropMarket',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.DropMarketRequest,
    tdex$daemon_v1_operator_pb.DropMarketReply,
    (request: tdex$daemon_v1_operator_pb.DropMarketRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.DropMarketReply.deserializeBinary
  );

  dropMarket(
    request: tdex$daemon_v1_operator_pb.DropMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.DropMarketReply>;

  dropMarket(
    request: tdex$daemon_v1_operator_pb.DropMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.DropMarketReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.DropMarketReply>;

  dropMarket(
    request: tdex$daemon_v1_operator_pb.DropMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.DropMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/DropMarket',
        request,
        metadata || {},
        this.methodDescriptorDropMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/DropMarket',
    request,
    metadata || {},
    this.methodDescriptorDropMarket);
  }

  methodDescriptorGetMarketCollectedSwapFees = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/GetMarketCollectedSwapFees',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetMarketCollectedSwapFeesRequest,
    tdex$daemon_v1_operator_pb.GetMarketCollectedSwapFeesReply,
    (request: tdex$daemon_v1_operator_pb.GetMarketCollectedSwapFeesRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetMarketCollectedSwapFeesReply.deserializeBinary
  );

  getMarketCollectedSwapFees(
    request: tdex$daemon_v1_operator_pb.GetMarketCollectedSwapFeesRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetMarketCollectedSwapFeesReply>;

  getMarketCollectedSwapFees(
    request: tdex$daemon_v1_operator_pb.GetMarketCollectedSwapFeesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketCollectedSwapFeesReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetMarketCollectedSwapFeesReply>;

  getMarketCollectedSwapFees(
    request: tdex$daemon_v1_operator_pb.GetMarketCollectedSwapFeesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketCollectedSwapFeesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/GetMarketCollectedSwapFees',
        request,
        metadata || {},
        this.methodDescriptorGetMarketCollectedSwapFees,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/GetMarketCollectedSwapFees',
    request,
    metadata || {},
    this.methodDescriptorGetMarketCollectedSwapFees);
  }

  methodDescriptorWithdrawMarket = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/WithdrawMarket',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.WithdrawMarketRequest,
    tdex$daemon_v1_operator_pb.WithdrawMarketReply,
    (request: tdex$daemon_v1_operator_pb.WithdrawMarketRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.WithdrawMarketReply.deserializeBinary
  );

  withdrawMarket(
    request: tdex$daemon_v1_operator_pb.WithdrawMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.WithdrawMarketReply>;

  withdrawMarket(
    request: tdex$daemon_v1_operator_pb.WithdrawMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.WithdrawMarketReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.WithdrawMarketReply>;

  withdrawMarket(
    request: tdex$daemon_v1_operator_pb.WithdrawMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.WithdrawMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/WithdrawMarket',
        request,
        metadata || {},
        this.methodDescriptorWithdrawMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/WithdrawMarket',
    request,
    metadata || {},
    this.methodDescriptorWithdrawMarket);
  }

  methodDescriptorUpdateMarketPercentageFee = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/UpdateMarketPercentageFee',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.UpdateMarketPercentageFeeRequest,
    tdex$daemon_v1_operator_pb.UpdateMarketFeeReply,
    (request: tdex$daemon_v1_operator_pb.UpdateMarketPercentageFeeRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.UpdateMarketFeeReply.deserializeBinary
  );

  updateMarketPercentageFee(
    request: tdex$daemon_v1_operator_pb.UpdateMarketPercentageFeeRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.UpdateMarketFeeReply>;

  updateMarketPercentageFee(
    request: tdex$daemon_v1_operator_pb.UpdateMarketPercentageFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.UpdateMarketFeeReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.UpdateMarketFeeReply>;

  updateMarketPercentageFee(
    request: tdex$daemon_v1_operator_pb.UpdateMarketPercentageFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.UpdateMarketFeeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/UpdateMarketPercentageFee',
        request,
        metadata || {},
        this.methodDescriptorUpdateMarketPercentageFee,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/UpdateMarketPercentageFee',
    request,
    metadata || {},
    this.methodDescriptorUpdateMarketPercentageFee);
  }

  methodDescriptorUpdateMarketFixedFee = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/UpdateMarketFixedFee',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.UpdateMarketFixedFeeRequest,
    tdex$daemon_v1_operator_pb.UpdateMarketFeeReply,
    (request: tdex$daemon_v1_operator_pb.UpdateMarketFixedFeeRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.UpdateMarketFeeReply.deserializeBinary
  );

  updateMarketFixedFee(
    request: tdex$daemon_v1_operator_pb.UpdateMarketFixedFeeRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.UpdateMarketFeeReply>;

  updateMarketFixedFee(
    request: tdex$daemon_v1_operator_pb.UpdateMarketFixedFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.UpdateMarketFeeReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.UpdateMarketFeeReply>;

  updateMarketFixedFee(
    request: tdex$daemon_v1_operator_pb.UpdateMarketFixedFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.UpdateMarketFeeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/UpdateMarketFixedFee',
        request,
        metadata || {},
        this.methodDescriptorUpdateMarketFixedFee,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/UpdateMarketFixedFee',
    request,
    metadata || {},
    this.methodDescriptorUpdateMarketFixedFee);
  }

  methodDescriptorUpdateMarketPrice = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/UpdateMarketPrice',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.UpdateMarketPriceRequest,
    tdex$daemon_v1_operator_pb.UpdateMarketPriceReply,
    (request: tdex$daemon_v1_operator_pb.UpdateMarketPriceRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.UpdateMarketPriceReply.deserializeBinary
  );

  updateMarketPrice(
    request: tdex$daemon_v1_operator_pb.UpdateMarketPriceRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.UpdateMarketPriceReply>;

  updateMarketPrice(
    request: tdex$daemon_v1_operator_pb.UpdateMarketPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.UpdateMarketPriceReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.UpdateMarketPriceReply>;

  updateMarketPrice(
    request: tdex$daemon_v1_operator_pb.UpdateMarketPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.UpdateMarketPriceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/UpdateMarketPrice',
        request,
        metadata || {},
        this.methodDescriptorUpdateMarketPrice,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/UpdateMarketPrice',
    request,
    metadata || {},
    this.methodDescriptorUpdateMarketPrice);
  }

  methodDescriptorUpdateMarketStrategy = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/UpdateMarketStrategy',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.UpdateMarketStrategyRequest,
    tdex$daemon_v1_operator_pb.UpdateMarketStrategyReply,
    (request: tdex$daemon_v1_operator_pb.UpdateMarketStrategyRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.UpdateMarketStrategyReply.deserializeBinary
  );

  updateMarketStrategy(
    request: tdex$daemon_v1_operator_pb.UpdateMarketStrategyRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.UpdateMarketStrategyReply>;

  updateMarketStrategy(
    request: tdex$daemon_v1_operator_pb.UpdateMarketStrategyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.UpdateMarketStrategyReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.UpdateMarketStrategyReply>;

  updateMarketStrategy(
    request: tdex$daemon_v1_operator_pb.UpdateMarketStrategyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.UpdateMarketStrategyReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/UpdateMarketStrategy',
        request,
        metadata || {},
        this.methodDescriptorUpdateMarketStrategy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/UpdateMarketStrategy',
    request,
    metadata || {},
    this.methodDescriptorUpdateMarketStrategy);
  }

  methodDescriptorGetFeeFragmenterAddress = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/GetFeeFragmenterAddress',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetFeeFragmenterAddressRequest,
    tdex$daemon_v1_operator_pb.GetFeeFragmenterAddressReply,
    (request: tdex$daemon_v1_operator_pb.GetFeeFragmenterAddressRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetFeeFragmenterAddressReply.deserializeBinary
  );

  getFeeFragmenterAddress(
    request: tdex$daemon_v1_operator_pb.GetFeeFragmenterAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetFeeFragmenterAddressReply>;

  getFeeFragmenterAddress(
    request: tdex$daemon_v1_operator_pb.GetFeeFragmenterAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetFeeFragmenterAddressReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetFeeFragmenterAddressReply>;

  getFeeFragmenterAddress(
    request: tdex$daemon_v1_operator_pb.GetFeeFragmenterAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetFeeFragmenterAddressReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/GetFeeFragmenterAddress',
        request,
        metadata || {},
        this.methodDescriptorGetFeeFragmenterAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/GetFeeFragmenterAddress',
    request,
    metadata || {},
    this.methodDescriptorGetFeeFragmenterAddress);
  }

  methodDescriptorListFeeFragmenterAddresses = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/ListFeeFragmenterAddresses',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ListFeeFragmenterAddressesRequest,
    tdex$daemon_v1_operator_pb.ListFeeFragmenterAddressesReply,
    (request: tdex$daemon_v1_operator_pb.ListFeeFragmenterAddressesRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ListFeeFragmenterAddressesReply.deserializeBinary
  );

  listFeeFragmenterAddresses(
    request: tdex$daemon_v1_operator_pb.ListFeeFragmenterAddressesRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ListFeeFragmenterAddressesReply>;

  listFeeFragmenterAddresses(
    request: tdex$daemon_v1_operator_pb.ListFeeFragmenterAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListFeeFragmenterAddressesReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ListFeeFragmenterAddressesReply>;

  listFeeFragmenterAddresses(
    request: tdex$daemon_v1_operator_pb.ListFeeFragmenterAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListFeeFragmenterAddressesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/ListFeeFragmenterAddresses',
        request,
        metadata || {},
        this.methodDescriptorListFeeFragmenterAddresses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/ListFeeFragmenterAddresses',
    request,
    metadata || {},
    this.methodDescriptorListFeeFragmenterAddresses);
  }

  methodDescriptorGetFeeFragmenterBalance = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/GetFeeFragmenterBalance',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetFeeFragmenterBalanceRequest,
    tdex$daemon_v1_operator_pb.GetFeeFragmenterBalanceReply,
    (request: tdex$daemon_v1_operator_pb.GetFeeFragmenterBalanceRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetFeeFragmenterBalanceReply.deserializeBinary
  );

  getFeeFragmenterBalance(
    request: tdex$daemon_v1_operator_pb.GetFeeFragmenterBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetFeeFragmenterBalanceReply>;

  getFeeFragmenterBalance(
    request: tdex$daemon_v1_operator_pb.GetFeeFragmenterBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetFeeFragmenterBalanceReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetFeeFragmenterBalanceReply>;

  getFeeFragmenterBalance(
    request: tdex$daemon_v1_operator_pb.GetFeeFragmenterBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetFeeFragmenterBalanceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/GetFeeFragmenterBalance',
        request,
        metadata || {},
        this.methodDescriptorGetFeeFragmenterBalance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/GetFeeFragmenterBalance',
    request,
    metadata || {},
    this.methodDescriptorGetFeeFragmenterBalance);
  }

  methodDescriptorFeeFragmenterSplitFunds = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/FeeFragmenterSplitFunds',
    grpcWeb.MethodType.SERVER_STREAMING,
    tdex$daemon_v1_operator_pb.FeeFragmenterSplitFundsRequest,
    tdex$daemon_v1_operator_pb.FragmenterSplitFundsReply,
    (request: tdex$daemon_v1_operator_pb.FeeFragmenterSplitFundsRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.FragmenterSplitFundsReply.deserializeBinary
  );

  feeFragmenterSplitFunds(
    request: tdex$daemon_v1_operator_pb.FeeFragmenterSplitFundsRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.FragmenterSplitFundsReply> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/tdex.daemon.v1.Operator/FeeFragmenterSplitFunds',
      request,
      metadata || {},
      this.methodDescriptorFeeFragmenterSplitFunds);
  }

  methodDescriptorWithdrawFeeFragmenter = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/WithdrawFeeFragmenter',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.WithdrawFeeFragmenterRequest,
    tdex$daemon_v1_operator_pb.WithdrawFeeFragmenterReply,
    (request: tdex$daemon_v1_operator_pb.WithdrawFeeFragmenterRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.WithdrawFeeFragmenterReply.deserializeBinary
  );

  withdrawFeeFragmenter(
    request: tdex$daemon_v1_operator_pb.WithdrawFeeFragmenterRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.WithdrawFeeFragmenterReply>;

  withdrawFeeFragmenter(
    request: tdex$daemon_v1_operator_pb.WithdrawFeeFragmenterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.WithdrawFeeFragmenterReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.WithdrawFeeFragmenterReply>;

  withdrawFeeFragmenter(
    request: tdex$daemon_v1_operator_pb.WithdrawFeeFragmenterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.WithdrawFeeFragmenterReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/WithdrawFeeFragmenter',
        request,
        metadata || {},
        this.methodDescriptorWithdrawFeeFragmenter,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/WithdrawFeeFragmenter',
    request,
    metadata || {},
    this.methodDescriptorWithdrawFeeFragmenter);
  }

  methodDescriptorGetMarketFragmenterAddress = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/GetMarketFragmenterAddress',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetMarketFragmenterAddressRequest,
    tdex$daemon_v1_operator_pb.GetMarketFragmenterAddressReply,
    (request: tdex$daemon_v1_operator_pb.GetMarketFragmenterAddressRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetMarketFragmenterAddressReply.deserializeBinary
  );

  getMarketFragmenterAddress(
    request: tdex$daemon_v1_operator_pb.GetMarketFragmenterAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetMarketFragmenterAddressReply>;

  getMarketFragmenterAddress(
    request: tdex$daemon_v1_operator_pb.GetMarketFragmenterAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketFragmenterAddressReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetMarketFragmenterAddressReply>;

  getMarketFragmenterAddress(
    request: tdex$daemon_v1_operator_pb.GetMarketFragmenterAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketFragmenterAddressReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/GetMarketFragmenterAddress',
        request,
        metadata || {},
        this.methodDescriptorGetMarketFragmenterAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/GetMarketFragmenterAddress',
    request,
    metadata || {},
    this.methodDescriptorGetMarketFragmenterAddress);
  }

  methodDescriptorListMarketFragmenterAddresses = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/ListMarketFragmenterAddresses',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ListMarketFragmenterAddressesRequest,
    tdex$daemon_v1_operator_pb.ListMarketFragmenterAddressesReply,
    (request: tdex$daemon_v1_operator_pb.ListMarketFragmenterAddressesRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ListMarketFragmenterAddressesReply.deserializeBinary
  );

  listMarketFragmenterAddresses(
    request: tdex$daemon_v1_operator_pb.ListMarketFragmenterAddressesRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ListMarketFragmenterAddressesReply>;

  listMarketFragmenterAddresses(
    request: tdex$daemon_v1_operator_pb.ListMarketFragmenterAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListMarketFragmenterAddressesReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ListMarketFragmenterAddressesReply>;

  listMarketFragmenterAddresses(
    request: tdex$daemon_v1_operator_pb.ListMarketFragmenterAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListMarketFragmenterAddressesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/ListMarketFragmenterAddresses',
        request,
        metadata || {},
        this.methodDescriptorListMarketFragmenterAddresses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/ListMarketFragmenterAddresses',
    request,
    metadata || {},
    this.methodDescriptorListMarketFragmenterAddresses);
  }

  methodDescriptorGetMarketFragmenterBalance = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/GetMarketFragmenterBalance',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetMarketFragmenterBalanceRequest,
    tdex$daemon_v1_operator_pb.GetMarketFragmenterBalanceReply,
    (request: tdex$daemon_v1_operator_pb.GetMarketFragmenterBalanceRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetMarketFragmenterBalanceReply.deserializeBinary
  );

  getMarketFragmenterBalance(
    request: tdex$daemon_v1_operator_pb.GetMarketFragmenterBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetMarketFragmenterBalanceReply>;

  getMarketFragmenterBalance(
    request: tdex$daemon_v1_operator_pb.GetMarketFragmenterBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketFragmenterBalanceReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetMarketFragmenterBalanceReply>;

  getMarketFragmenterBalance(
    request: tdex$daemon_v1_operator_pb.GetMarketFragmenterBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketFragmenterBalanceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/GetMarketFragmenterBalance',
        request,
        metadata || {},
        this.methodDescriptorGetMarketFragmenterBalance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/GetMarketFragmenterBalance',
    request,
    metadata || {},
    this.methodDescriptorGetMarketFragmenterBalance);
  }

  methodDescriptorMarketFragmenterSplitFunds = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/MarketFragmenterSplitFunds',
    grpcWeb.MethodType.SERVER_STREAMING,
    tdex$daemon_v1_operator_pb.MarketFragmenterSplitFundsRequest,
    tdex$daemon_v1_operator_pb.FragmenterSplitFundsReply,
    (request: tdex$daemon_v1_operator_pb.MarketFragmenterSplitFundsRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.FragmenterSplitFundsReply.deserializeBinary
  );

  marketFragmenterSplitFunds(
    request: tdex$daemon_v1_operator_pb.MarketFragmenterSplitFundsRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.FragmenterSplitFundsReply> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/tdex.daemon.v1.Operator/MarketFragmenterSplitFunds',
      request,
      metadata || {},
      this.methodDescriptorMarketFragmenterSplitFunds);
  }

  methodDescriptorWithdrawMarketFragmenter = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/WithdrawMarketFragmenter',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.WithdrawMarketFragmenterRequest,
    tdex$daemon_v1_operator_pb.WithdrawMarketFragmenterReply,
    (request: tdex$daemon_v1_operator_pb.WithdrawMarketFragmenterRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.WithdrawMarketFragmenterReply.deserializeBinary
  );

  withdrawMarketFragmenter(
    request: tdex$daemon_v1_operator_pb.WithdrawMarketFragmenterRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.WithdrawMarketFragmenterReply>;

  withdrawMarketFragmenter(
    request: tdex$daemon_v1_operator_pb.WithdrawMarketFragmenterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.WithdrawMarketFragmenterReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.WithdrawMarketFragmenterReply>;

  withdrawMarketFragmenter(
    request: tdex$daemon_v1_operator_pb.WithdrawMarketFragmenterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.WithdrawMarketFragmenterReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/WithdrawMarketFragmenter',
        request,
        metadata || {},
        this.methodDescriptorWithdrawMarketFragmenter,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/WithdrawMarketFragmenter',
    request,
    metadata || {},
    this.methodDescriptorWithdrawMarketFragmenter);
  }

  methodDescriptorListMarkets = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/ListMarkets',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ListMarketsRequest,
    tdex$daemon_v1_operator_pb.ListMarketsReply,
    (request: tdex$daemon_v1_operator_pb.ListMarketsRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ListMarketsReply.deserializeBinary
  );

  listMarkets(
    request: tdex$daemon_v1_operator_pb.ListMarketsRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ListMarketsReply>;

  listMarkets(
    request: tdex$daemon_v1_operator_pb.ListMarketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListMarketsReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ListMarketsReply>;

  listMarkets(
    request: tdex$daemon_v1_operator_pb.ListMarketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListMarketsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/ListMarkets',
        request,
        metadata || {},
        this.methodDescriptorListMarkets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/ListMarkets',
    request,
    metadata || {},
    this.methodDescriptorListMarkets);
  }

  methodDescriptorListTrades = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/ListTrades',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ListTradesRequest,
    tdex$daemon_v1_operator_pb.ListTradesReply,
    (request: tdex$daemon_v1_operator_pb.ListTradesRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ListTradesReply.deserializeBinary
  );

  listTrades(
    request: tdex$daemon_v1_operator_pb.ListTradesRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ListTradesReply>;

  listTrades(
    request: tdex$daemon_v1_operator_pb.ListTradesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListTradesReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ListTradesReply>;

  listTrades(
    request: tdex$daemon_v1_operator_pb.ListTradesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListTradesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/ListTrades',
        request,
        metadata || {},
        this.methodDescriptorListTrades,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/ListTrades',
    request,
    metadata || {},
    this.methodDescriptorListTrades);
  }

  methodDescriptorReloadUtxos = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/ReloadUtxos',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ReloadUtxosRequest,
    tdex$daemon_v1_operator_pb.ReloadUtxosReply,
    (request: tdex$daemon_v1_operator_pb.ReloadUtxosRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ReloadUtxosReply.deserializeBinary
  );

  reloadUtxos(
    request: tdex$daemon_v1_operator_pb.ReloadUtxosRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ReloadUtxosReply>;

  reloadUtxos(
    request: tdex$daemon_v1_operator_pb.ReloadUtxosRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ReloadUtxosReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ReloadUtxosReply>;

  reloadUtxos(
    request: tdex$daemon_v1_operator_pb.ReloadUtxosRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ReloadUtxosReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/ReloadUtxos',
        request,
        metadata || {},
        this.methodDescriptorReloadUtxos,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/ReloadUtxos',
    request,
    metadata || {},
    this.methodDescriptorReloadUtxos);
  }

  methodDescriptorListUtxos = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/ListUtxos',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ListUtxosRequest,
    tdex$daemon_v1_operator_pb.ListUtxosReply,
    (request: tdex$daemon_v1_operator_pb.ListUtxosRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ListUtxosReply.deserializeBinary
  );

  listUtxos(
    request: tdex$daemon_v1_operator_pb.ListUtxosRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ListUtxosReply>;

  listUtxos(
    request: tdex$daemon_v1_operator_pb.ListUtxosRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListUtxosReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ListUtxosReply>;

  listUtxos(
    request: tdex$daemon_v1_operator_pb.ListUtxosRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListUtxosReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/ListUtxos',
        request,
        metadata || {},
        this.methodDescriptorListUtxos,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/ListUtxos',
    request,
    metadata || {},
    this.methodDescriptorListUtxos);
  }

  methodDescriptorAddWebhook = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/AddWebhook',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.AddWebhookRequest,
    tdex$daemon_v1_operator_pb.AddWebhookReply,
    (request: tdex$daemon_v1_operator_pb.AddWebhookRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.AddWebhookReply.deserializeBinary
  );

  addWebhook(
    request: tdex$daemon_v1_operator_pb.AddWebhookRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.AddWebhookReply>;

  addWebhook(
    request: tdex$daemon_v1_operator_pb.AddWebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.AddWebhookReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.AddWebhookReply>;

  addWebhook(
    request: tdex$daemon_v1_operator_pb.AddWebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.AddWebhookReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/AddWebhook',
        request,
        metadata || {},
        this.methodDescriptorAddWebhook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/AddWebhook',
    request,
    metadata || {},
    this.methodDescriptorAddWebhook);
  }

  methodDescriptorRemoveWebhook = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/RemoveWebhook',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.RemoveWebhookRequest,
    tdex$daemon_v1_operator_pb.RemoveWebhookReply,
    (request: tdex$daemon_v1_operator_pb.RemoveWebhookRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.RemoveWebhookReply.deserializeBinary
  );

  removeWebhook(
    request: tdex$daemon_v1_operator_pb.RemoveWebhookRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.RemoveWebhookReply>;

  removeWebhook(
    request: tdex$daemon_v1_operator_pb.RemoveWebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.RemoveWebhookReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.RemoveWebhookReply>;

  removeWebhook(
    request: tdex$daemon_v1_operator_pb.RemoveWebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.RemoveWebhookReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/RemoveWebhook',
        request,
        metadata || {},
        this.methodDescriptorRemoveWebhook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/RemoveWebhook',
    request,
    metadata || {},
    this.methodDescriptorRemoveWebhook);
  }

  methodDescriptorListWebhooks = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/ListWebhooks',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ListWebhooksRequest,
    tdex$daemon_v1_operator_pb.ListWebhooksReply,
    (request: tdex$daemon_v1_operator_pb.ListWebhooksRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ListWebhooksReply.deserializeBinary
  );

  listWebhooks(
    request: tdex$daemon_v1_operator_pb.ListWebhooksRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ListWebhooksReply>;

  listWebhooks(
    request: tdex$daemon_v1_operator_pb.ListWebhooksRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListWebhooksReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ListWebhooksReply>;

  listWebhooks(
    request: tdex$daemon_v1_operator_pb.ListWebhooksRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListWebhooksReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/ListWebhooks',
        request,
        metadata || {},
        this.methodDescriptorListWebhooks,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/ListWebhooks',
    request,
    metadata || {},
    this.methodDescriptorListWebhooks);
  }

  methodDescriptorListDeposits = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/ListDeposits',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ListDepositsRequest,
    tdex$daemon_v1_operator_pb.ListDepositsReply,
    (request: tdex$daemon_v1_operator_pb.ListDepositsRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ListDepositsReply.deserializeBinary
  );

  listDeposits(
    request: tdex$daemon_v1_operator_pb.ListDepositsRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ListDepositsReply>;

  listDeposits(
    request: tdex$daemon_v1_operator_pb.ListDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListDepositsReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ListDepositsReply>;

  listDeposits(
    request: tdex$daemon_v1_operator_pb.ListDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListDepositsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/ListDeposits',
        request,
        metadata || {},
        this.methodDescriptorListDeposits,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/ListDeposits',
    request,
    metadata || {},
    this.methodDescriptorListDeposits);
  }

  methodDescriptorListWithdrawals = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/ListWithdrawals',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ListWithdrawalsRequest,
    tdex$daemon_v1_operator_pb.ListWithdrawalsReply,
    (request: tdex$daemon_v1_operator_pb.ListWithdrawalsRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ListWithdrawalsReply.deserializeBinary
  );

  listWithdrawals(
    request: tdex$daemon_v1_operator_pb.ListWithdrawalsRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ListWithdrawalsReply>;

  listWithdrawals(
    request: tdex$daemon_v1_operator_pb.ListWithdrawalsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListWithdrawalsReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ListWithdrawalsReply>;

  listWithdrawals(
    request: tdex$daemon_v1_operator_pb.ListWithdrawalsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListWithdrawalsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/ListWithdrawals',
        request,
        metadata || {},
        this.methodDescriptorListWithdrawals,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/ListWithdrawals',
    request,
    metadata || {},
    this.methodDescriptorListWithdrawals);
  }

  methodDescriptorGetMarketReport = new grpcWeb.MethodDescriptor(
    '/tdex.daemon.v1.Operator/GetMarketReport',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetMarketReportRequest,
    tdex$daemon_v1_operator_pb.GetMarketReportReply,
    (request: tdex$daemon_v1_operator_pb.GetMarketReportRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetMarketReportReply.deserializeBinary
  );

  getMarketReport(
    request: tdex$daemon_v1_operator_pb.GetMarketReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetMarketReportReply>;

  getMarketReport(
    request: tdex$daemon_v1_operator_pb.GetMarketReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketReportReply) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetMarketReportReply>;

  getMarketReport(
    request: tdex$daemon_v1_operator_pb.GetMarketReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketReportReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.daemon.v1.Operator/GetMarketReport',
        request,
        metadata || {},
        this.methodDescriptorGetMarketReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.daemon.v1.Operator/GetMarketReport',
    request,
    metadata || {},
    this.methodDescriptorGetMarketReport);
  }

}

