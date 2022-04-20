/**
 * @fileoverview gRPC-Web generated client stub for tdex_daemon.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as tdex$daemon_v1_operator_pb from '../../tdex-daemon/v1/operator_pb';


export class OperatorServiceClient {
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
    '/tdex_daemon.v1.OperatorService/GetInfo',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetInfoRequest,
    tdex$daemon_v1_operator_pb.GetInfoResponse,
    (request: tdex$daemon_v1_operator_pb.GetInfoRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetInfoResponse.deserializeBinary
  );

  getInfo(
    request: tdex$daemon_v1_operator_pb.GetInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetInfoResponse>;

  getInfo(
    request: tdex$daemon_v1_operator_pb.GetInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetInfoResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetInfoResponse>;

  getInfo(
    request: tdex$daemon_v1_operator_pb.GetInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/GetInfo',
        request,
        metadata || {},
        this.methodDescriptorGetInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/GetInfo',
    request,
    metadata || {},
    this.methodDescriptorGetInfo);
  }

  methodDescriptorGetFeeAddress = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/GetFeeAddress',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetFeeAddressRequest,
    tdex$daemon_v1_operator_pb.GetFeeAddressResponse,
    (request: tdex$daemon_v1_operator_pb.GetFeeAddressRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetFeeAddressResponse.deserializeBinary
  );

  getFeeAddress(
    request: tdex$daemon_v1_operator_pb.GetFeeAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetFeeAddressResponse>;

  getFeeAddress(
    request: tdex$daemon_v1_operator_pb.GetFeeAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetFeeAddressResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetFeeAddressResponse>;

  getFeeAddress(
    request: tdex$daemon_v1_operator_pb.GetFeeAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetFeeAddressResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/GetFeeAddress',
        request,
        metadata || {},
        this.methodDescriptorGetFeeAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/GetFeeAddress',
    request,
    metadata || {},
    this.methodDescriptorGetFeeAddress);
  }

  methodDescriptorListFeeAddresses = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/ListFeeAddresses',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ListFeeAddressesRequest,
    tdex$daemon_v1_operator_pb.ListFeeAddressesResponse,
    (request: tdex$daemon_v1_operator_pb.ListFeeAddressesRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ListFeeAddressesResponse.deserializeBinary
  );

  listFeeAddresses(
    request: tdex$daemon_v1_operator_pb.ListFeeAddressesRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ListFeeAddressesResponse>;

  listFeeAddresses(
    request: tdex$daemon_v1_operator_pb.ListFeeAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListFeeAddressesResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ListFeeAddressesResponse>;

  listFeeAddresses(
    request: tdex$daemon_v1_operator_pb.ListFeeAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListFeeAddressesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/ListFeeAddresses',
        request,
        metadata || {},
        this.methodDescriptorListFeeAddresses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/ListFeeAddresses',
    request,
    metadata || {},
    this.methodDescriptorListFeeAddresses);
  }

  methodDescriptorGetFeeBalance = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/GetFeeBalance',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetFeeBalanceRequest,
    tdex$daemon_v1_operator_pb.GetFeeBalanceResponse,
    (request: tdex$daemon_v1_operator_pb.GetFeeBalanceRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetFeeBalanceResponse.deserializeBinary
  );

  getFeeBalance(
    request: tdex$daemon_v1_operator_pb.GetFeeBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetFeeBalanceResponse>;

  getFeeBalance(
    request: tdex$daemon_v1_operator_pb.GetFeeBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetFeeBalanceResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetFeeBalanceResponse>;

  getFeeBalance(
    request: tdex$daemon_v1_operator_pb.GetFeeBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetFeeBalanceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/GetFeeBalance',
        request,
        metadata || {},
        this.methodDescriptorGetFeeBalance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/GetFeeBalance',
    request,
    metadata || {},
    this.methodDescriptorGetFeeBalance);
  }

  methodDescriptorClaimFeeDeposits = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/ClaimFeeDeposits',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ClaimFeeDepositsRequest,
    tdex$daemon_v1_operator_pb.ClaimFeeDepositsResponse,
    (request: tdex$daemon_v1_operator_pb.ClaimFeeDepositsRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ClaimFeeDepositsResponse.deserializeBinary
  );

  claimFeeDeposits(
    request: tdex$daemon_v1_operator_pb.ClaimFeeDepositsRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ClaimFeeDepositsResponse>;

  claimFeeDeposits(
    request: tdex$daemon_v1_operator_pb.ClaimFeeDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ClaimFeeDepositsResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ClaimFeeDepositsResponse>;

  claimFeeDeposits(
    request: tdex$daemon_v1_operator_pb.ClaimFeeDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ClaimFeeDepositsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/ClaimFeeDeposits',
        request,
        metadata || {},
        this.methodDescriptorClaimFeeDeposits,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/ClaimFeeDeposits',
    request,
    metadata || {},
    this.methodDescriptorClaimFeeDeposits);
  }

  methodDescriptorWithdrawFee = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/WithdrawFee',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.WithdrawFeeRequest,
    tdex$daemon_v1_operator_pb.WithdrawFeeResponse,
    (request: tdex$daemon_v1_operator_pb.WithdrawFeeRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.WithdrawFeeResponse.deserializeBinary
  );

  withdrawFee(
    request: tdex$daemon_v1_operator_pb.WithdrawFeeRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.WithdrawFeeResponse>;

  withdrawFee(
    request: tdex$daemon_v1_operator_pb.WithdrawFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.WithdrawFeeResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.WithdrawFeeResponse>;

  withdrawFee(
    request: tdex$daemon_v1_operator_pb.WithdrawFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.WithdrawFeeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/WithdrawFee',
        request,
        metadata || {},
        this.methodDescriptorWithdrawFee,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/WithdrawFee',
    request,
    metadata || {},
    this.methodDescriptorWithdrawFee);
  }

  methodDescriptorNewMarket = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/NewMarket',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.NewMarketRequest,
    tdex$daemon_v1_operator_pb.NewMarketResponse,
    (request: tdex$daemon_v1_operator_pb.NewMarketRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.NewMarketResponse.deserializeBinary
  );

  newMarket(
    request: tdex$daemon_v1_operator_pb.NewMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.NewMarketResponse>;

  newMarket(
    request: tdex$daemon_v1_operator_pb.NewMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.NewMarketResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.NewMarketResponse>;

  newMarket(
    request: tdex$daemon_v1_operator_pb.NewMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.NewMarketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/NewMarket',
        request,
        metadata || {},
        this.methodDescriptorNewMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/NewMarket',
    request,
    metadata || {},
    this.methodDescriptorNewMarket);
  }

  methodDescriptorGetMarketInfo = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/GetMarketInfo',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetMarketInfoRequest,
    tdex$daemon_v1_operator_pb.GetMarketInfoResponse,
    (request: tdex$daemon_v1_operator_pb.GetMarketInfoRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetMarketInfoResponse.deserializeBinary
  );

  getMarketInfo(
    request: tdex$daemon_v1_operator_pb.GetMarketInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetMarketInfoResponse>;

  getMarketInfo(
    request: tdex$daemon_v1_operator_pb.GetMarketInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketInfoResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetMarketInfoResponse>;

  getMarketInfo(
    request: tdex$daemon_v1_operator_pb.GetMarketInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/GetMarketInfo',
        request,
        metadata || {},
        this.methodDescriptorGetMarketInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/GetMarketInfo',
    request,
    metadata || {},
    this.methodDescriptorGetMarketInfo);
  }

  methodDescriptorGetMarketAddress = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/GetMarketAddress',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetMarketAddressRequest,
    tdex$daemon_v1_operator_pb.GetMarketAddressResponse,
    (request: tdex$daemon_v1_operator_pb.GetMarketAddressRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetMarketAddressResponse.deserializeBinary
  );

  getMarketAddress(
    request: tdex$daemon_v1_operator_pb.GetMarketAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetMarketAddressResponse>;

  getMarketAddress(
    request: tdex$daemon_v1_operator_pb.GetMarketAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketAddressResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetMarketAddressResponse>;

  getMarketAddress(
    request: tdex$daemon_v1_operator_pb.GetMarketAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketAddressResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/GetMarketAddress',
        request,
        metadata || {},
        this.methodDescriptorGetMarketAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/GetMarketAddress',
    request,
    metadata || {},
    this.methodDescriptorGetMarketAddress);
  }

  methodDescriptorListMarketAddresses = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/ListMarketAddresses',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ListMarketAddressesRequest,
    tdex$daemon_v1_operator_pb.ListMarketAddressesResponse,
    (request: tdex$daemon_v1_operator_pb.ListMarketAddressesRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ListMarketAddressesResponse.deserializeBinary
  );

  listMarketAddresses(
    request: tdex$daemon_v1_operator_pb.ListMarketAddressesRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ListMarketAddressesResponse>;

  listMarketAddresses(
    request: tdex$daemon_v1_operator_pb.ListMarketAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListMarketAddressesResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ListMarketAddressesResponse>;

  listMarketAddresses(
    request: tdex$daemon_v1_operator_pb.ListMarketAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListMarketAddressesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/ListMarketAddresses',
        request,
        metadata || {},
        this.methodDescriptorListMarketAddresses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/ListMarketAddresses',
    request,
    metadata || {},
    this.methodDescriptorListMarketAddresses);
  }

  methodDescriptorGetMarketBalance = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/GetMarketBalance',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetMarketBalanceRequest,
    tdex$daemon_v1_operator_pb.GetMarketBalanceResponse,
    (request: tdex$daemon_v1_operator_pb.GetMarketBalanceRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetMarketBalanceResponse.deserializeBinary
  );

  getMarketBalance(
    request: tdex$daemon_v1_operator_pb.GetMarketBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetMarketBalanceResponse>;

  getMarketBalance(
    request: tdex$daemon_v1_operator_pb.GetMarketBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketBalanceResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetMarketBalanceResponse>;

  getMarketBalance(
    request: tdex$daemon_v1_operator_pb.GetMarketBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketBalanceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/GetMarketBalance',
        request,
        metadata || {},
        this.methodDescriptorGetMarketBalance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/GetMarketBalance',
    request,
    metadata || {},
    this.methodDescriptorGetMarketBalance);
  }

  methodDescriptorClaimMarketDeposits = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/ClaimMarketDeposits',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ClaimMarketDepositsRequest,
    tdex$daemon_v1_operator_pb.ClaimMarketDepositsResponse,
    (request: tdex$daemon_v1_operator_pb.ClaimMarketDepositsRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ClaimMarketDepositsResponse.deserializeBinary
  );

  claimMarketDeposits(
    request: tdex$daemon_v1_operator_pb.ClaimMarketDepositsRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ClaimMarketDepositsResponse>;

  claimMarketDeposits(
    request: tdex$daemon_v1_operator_pb.ClaimMarketDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ClaimMarketDepositsResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ClaimMarketDepositsResponse>;

  claimMarketDeposits(
    request: tdex$daemon_v1_operator_pb.ClaimMarketDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ClaimMarketDepositsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/ClaimMarketDeposits',
        request,
        metadata || {},
        this.methodDescriptorClaimMarketDeposits,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/ClaimMarketDeposits',
    request,
    metadata || {},
    this.methodDescriptorClaimMarketDeposits);
  }

  methodDescriptorOpenMarket = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/OpenMarket',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.OpenMarketRequest,
    tdex$daemon_v1_operator_pb.OpenMarketResponse,
    (request: tdex$daemon_v1_operator_pb.OpenMarketRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.OpenMarketResponse.deserializeBinary
  );

  openMarket(
    request: tdex$daemon_v1_operator_pb.OpenMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.OpenMarketResponse>;

  openMarket(
    request: tdex$daemon_v1_operator_pb.OpenMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.OpenMarketResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.OpenMarketResponse>;

  openMarket(
    request: tdex$daemon_v1_operator_pb.OpenMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.OpenMarketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/OpenMarket',
        request,
        metadata || {},
        this.methodDescriptorOpenMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/OpenMarket',
    request,
    metadata || {},
    this.methodDescriptorOpenMarket);
  }

  methodDescriptorCloseMarket = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/CloseMarket',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.CloseMarketRequest,
    tdex$daemon_v1_operator_pb.CloseMarketResponse,
    (request: tdex$daemon_v1_operator_pb.CloseMarketRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.CloseMarketResponse.deserializeBinary
  );

  closeMarket(
    request: tdex$daemon_v1_operator_pb.CloseMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.CloseMarketResponse>;

  closeMarket(
    request: tdex$daemon_v1_operator_pb.CloseMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.CloseMarketResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.CloseMarketResponse>;

  closeMarket(
    request: tdex$daemon_v1_operator_pb.CloseMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.CloseMarketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/CloseMarket',
        request,
        metadata || {},
        this.methodDescriptorCloseMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/CloseMarket',
    request,
    metadata || {},
    this.methodDescriptorCloseMarket);
  }

  methodDescriptorDropMarket = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/DropMarket',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.DropMarketRequest,
    tdex$daemon_v1_operator_pb.DropMarketResponse,
    (request: tdex$daemon_v1_operator_pb.DropMarketRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.DropMarketResponse.deserializeBinary
  );

  dropMarket(
    request: tdex$daemon_v1_operator_pb.DropMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.DropMarketResponse>;

  dropMarket(
    request: tdex$daemon_v1_operator_pb.DropMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.DropMarketResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.DropMarketResponse>;

  dropMarket(
    request: tdex$daemon_v1_operator_pb.DropMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.DropMarketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/DropMarket',
        request,
        metadata || {},
        this.methodDescriptorDropMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/DropMarket',
    request,
    metadata || {},
    this.methodDescriptorDropMarket);
  }

  methodDescriptorGetMarketCollectedSwapFees = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/GetMarketCollectedSwapFees',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetMarketCollectedSwapFeesRequest,
    tdex$daemon_v1_operator_pb.GetMarketCollectedSwapFeesResponse,
    (request: tdex$daemon_v1_operator_pb.GetMarketCollectedSwapFeesRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetMarketCollectedSwapFeesResponse.deserializeBinary
  );

  getMarketCollectedSwapFees(
    request: tdex$daemon_v1_operator_pb.GetMarketCollectedSwapFeesRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetMarketCollectedSwapFeesResponse>;

  getMarketCollectedSwapFees(
    request: tdex$daemon_v1_operator_pb.GetMarketCollectedSwapFeesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketCollectedSwapFeesResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetMarketCollectedSwapFeesResponse>;

  getMarketCollectedSwapFees(
    request: tdex$daemon_v1_operator_pb.GetMarketCollectedSwapFeesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketCollectedSwapFeesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/GetMarketCollectedSwapFees',
        request,
        metadata || {},
        this.methodDescriptorGetMarketCollectedSwapFees,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/GetMarketCollectedSwapFees',
    request,
    metadata || {},
    this.methodDescriptorGetMarketCollectedSwapFees);
  }

  methodDescriptorWithdrawMarket = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/WithdrawMarket',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.WithdrawMarketRequest,
    tdex$daemon_v1_operator_pb.WithdrawMarketResponse,
    (request: tdex$daemon_v1_operator_pb.WithdrawMarketRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.WithdrawMarketResponse.deserializeBinary
  );

  withdrawMarket(
    request: tdex$daemon_v1_operator_pb.WithdrawMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.WithdrawMarketResponse>;

  withdrawMarket(
    request: tdex$daemon_v1_operator_pb.WithdrawMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.WithdrawMarketResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.WithdrawMarketResponse>;

  withdrawMarket(
    request: tdex$daemon_v1_operator_pb.WithdrawMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.WithdrawMarketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/WithdrawMarket',
        request,
        metadata || {},
        this.methodDescriptorWithdrawMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/WithdrawMarket',
    request,
    metadata || {},
    this.methodDescriptorWithdrawMarket);
  }

  methodDescriptorUpdateMarketPercentageFee = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/UpdateMarketPercentageFee',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.UpdateMarketPercentageFeeRequest,
    tdex$daemon_v1_operator_pb.UpdateMarketPercentageFeeResponse,
    (request: tdex$daemon_v1_operator_pb.UpdateMarketPercentageFeeRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.UpdateMarketPercentageFeeResponse.deserializeBinary
  );

  updateMarketPercentageFee(
    request: tdex$daemon_v1_operator_pb.UpdateMarketPercentageFeeRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.UpdateMarketPercentageFeeResponse>;

  updateMarketPercentageFee(
    request: tdex$daemon_v1_operator_pb.UpdateMarketPercentageFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.UpdateMarketPercentageFeeResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.UpdateMarketPercentageFeeResponse>;

  updateMarketPercentageFee(
    request: tdex$daemon_v1_operator_pb.UpdateMarketPercentageFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.UpdateMarketPercentageFeeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/UpdateMarketPercentageFee',
        request,
        metadata || {},
        this.methodDescriptorUpdateMarketPercentageFee,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/UpdateMarketPercentageFee',
    request,
    metadata || {},
    this.methodDescriptorUpdateMarketPercentageFee);
  }

  methodDescriptorUpdateMarketFixedFee = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/UpdateMarketFixedFee',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.UpdateMarketFixedFeeRequest,
    tdex$daemon_v1_operator_pb.UpdateMarketFixedFeeResponse,
    (request: tdex$daemon_v1_operator_pb.UpdateMarketFixedFeeRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.UpdateMarketFixedFeeResponse.deserializeBinary
  );

  updateMarketFixedFee(
    request: tdex$daemon_v1_operator_pb.UpdateMarketFixedFeeRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.UpdateMarketFixedFeeResponse>;

  updateMarketFixedFee(
    request: tdex$daemon_v1_operator_pb.UpdateMarketFixedFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.UpdateMarketFixedFeeResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.UpdateMarketFixedFeeResponse>;

  updateMarketFixedFee(
    request: tdex$daemon_v1_operator_pb.UpdateMarketFixedFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.UpdateMarketFixedFeeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/UpdateMarketFixedFee',
        request,
        metadata || {},
        this.methodDescriptorUpdateMarketFixedFee,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/UpdateMarketFixedFee',
    request,
    metadata || {},
    this.methodDescriptorUpdateMarketFixedFee);
  }

  methodDescriptorUpdateMarketPrice = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/UpdateMarketPrice',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.UpdateMarketPriceRequest,
    tdex$daemon_v1_operator_pb.UpdateMarketPriceResponse,
    (request: tdex$daemon_v1_operator_pb.UpdateMarketPriceRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.UpdateMarketPriceResponse.deserializeBinary
  );

  updateMarketPrice(
    request: tdex$daemon_v1_operator_pb.UpdateMarketPriceRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.UpdateMarketPriceResponse>;

  updateMarketPrice(
    request: tdex$daemon_v1_operator_pb.UpdateMarketPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.UpdateMarketPriceResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.UpdateMarketPriceResponse>;

  updateMarketPrice(
    request: tdex$daemon_v1_operator_pb.UpdateMarketPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.UpdateMarketPriceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/UpdateMarketPrice',
        request,
        metadata || {},
        this.methodDescriptorUpdateMarketPrice,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/UpdateMarketPrice',
    request,
    metadata || {},
    this.methodDescriptorUpdateMarketPrice);
  }

  methodDescriptorUpdateMarketStrategy = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/UpdateMarketStrategy',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.UpdateMarketStrategyRequest,
    tdex$daemon_v1_operator_pb.UpdateMarketStrategyResponse,
    (request: tdex$daemon_v1_operator_pb.UpdateMarketStrategyRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.UpdateMarketStrategyResponse.deserializeBinary
  );

  updateMarketStrategy(
    request: tdex$daemon_v1_operator_pb.UpdateMarketStrategyRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.UpdateMarketStrategyResponse>;

  updateMarketStrategy(
    request: tdex$daemon_v1_operator_pb.UpdateMarketStrategyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.UpdateMarketStrategyResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.UpdateMarketStrategyResponse>;

  updateMarketStrategy(
    request: tdex$daemon_v1_operator_pb.UpdateMarketStrategyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.UpdateMarketStrategyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/UpdateMarketStrategy',
        request,
        metadata || {},
        this.methodDescriptorUpdateMarketStrategy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/UpdateMarketStrategy',
    request,
    metadata || {},
    this.methodDescriptorUpdateMarketStrategy);
  }

  methodDescriptorGetFeeFragmenterAddress = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/GetFeeFragmenterAddress',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetFeeFragmenterAddressRequest,
    tdex$daemon_v1_operator_pb.GetFeeFragmenterAddressResponse,
    (request: tdex$daemon_v1_operator_pb.GetFeeFragmenterAddressRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetFeeFragmenterAddressResponse.deserializeBinary
  );

  getFeeFragmenterAddress(
    request: tdex$daemon_v1_operator_pb.GetFeeFragmenterAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetFeeFragmenterAddressResponse>;

  getFeeFragmenterAddress(
    request: tdex$daemon_v1_operator_pb.GetFeeFragmenterAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetFeeFragmenterAddressResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetFeeFragmenterAddressResponse>;

  getFeeFragmenterAddress(
    request: tdex$daemon_v1_operator_pb.GetFeeFragmenterAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetFeeFragmenterAddressResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/GetFeeFragmenterAddress',
        request,
        metadata || {},
        this.methodDescriptorGetFeeFragmenterAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/GetFeeFragmenterAddress',
    request,
    metadata || {},
    this.methodDescriptorGetFeeFragmenterAddress);
  }

  methodDescriptorListFeeFragmenterAddresses = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/ListFeeFragmenterAddresses',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ListFeeFragmenterAddressesRequest,
    tdex$daemon_v1_operator_pb.ListFeeFragmenterAddressesResponse,
    (request: tdex$daemon_v1_operator_pb.ListFeeFragmenterAddressesRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ListFeeFragmenterAddressesResponse.deserializeBinary
  );

  listFeeFragmenterAddresses(
    request: tdex$daemon_v1_operator_pb.ListFeeFragmenterAddressesRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ListFeeFragmenterAddressesResponse>;

  listFeeFragmenterAddresses(
    request: tdex$daemon_v1_operator_pb.ListFeeFragmenterAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListFeeFragmenterAddressesResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ListFeeFragmenterAddressesResponse>;

  listFeeFragmenterAddresses(
    request: tdex$daemon_v1_operator_pb.ListFeeFragmenterAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListFeeFragmenterAddressesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/ListFeeFragmenterAddresses',
        request,
        metadata || {},
        this.methodDescriptorListFeeFragmenterAddresses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/ListFeeFragmenterAddresses',
    request,
    metadata || {},
    this.methodDescriptorListFeeFragmenterAddresses);
  }

  methodDescriptorGetFeeFragmenterBalance = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/GetFeeFragmenterBalance',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetFeeFragmenterBalanceRequest,
    tdex$daemon_v1_operator_pb.GetFeeFragmenterBalanceResponse,
    (request: tdex$daemon_v1_operator_pb.GetFeeFragmenterBalanceRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetFeeFragmenterBalanceResponse.deserializeBinary
  );

  getFeeFragmenterBalance(
    request: tdex$daemon_v1_operator_pb.GetFeeFragmenterBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetFeeFragmenterBalanceResponse>;

  getFeeFragmenterBalance(
    request: tdex$daemon_v1_operator_pb.GetFeeFragmenterBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetFeeFragmenterBalanceResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetFeeFragmenterBalanceResponse>;

  getFeeFragmenterBalance(
    request: tdex$daemon_v1_operator_pb.GetFeeFragmenterBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetFeeFragmenterBalanceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/GetFeeFragmenterBalance',
        request,
        metadata || {},
        this.methodDescriptorGetFeeFragmenterBalance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/GetFeeFragmenterBalance',
    request,
    metadata || {},
    this.methodDescriptorGetFeeFragmenterBalance);
  }

  methodDescriptorFeeFragmenterSplitFunds = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/FeeFragmenterSplitFunds',
    grpcWeb.MethodType.SERVER_STREAMING,
    tdex$daemon_v1_operator_pb.FeeFragmenterSplitFundsRequest,
    tdex$daemon_v1_operator_pb.FeeFragmenterSplitFundsResponse,
    (request: tdex$daemon_v1_operator_pb.FeeFragmenterSplitFundsRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.FeeFragmenterSplitFundsResponse.deserializeBinary
  );

  feeFragmenterSplitFunds(
    request: tdex$daemon_v1_operator_pb.FeeFragmenterSplitFundsRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.FeeFragmenterSplitFundsResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/tdex_daemon.v1.OperatorService/FeeFragmenterSplitFunds',
      request,
      metadata || {},
      this.methodDescriptorFeeFragmenterSplitFunds);
  }

  methodDescriptorWithdrawFeeFragmenter = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/WithdrawFeeFragmenter',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.WithdrawFeeFragmenterRequest,
    tdex$daemon_v1_operator_pb.WithdrawFeeFragmenterResponse,
    (request: tdex$daemon_v1_operator_pb.WithdrawFeeFragmenterRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.WithdrawFeeFragmenterResponse.deserializeBinary
  );

  withdrawFeeFragmenter(
    request: tdex$daemon_v1_operator_pb.WithdrawFeeFragmenterRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.WithdrawFeeFragmenterResponse>;

  withdrawFeeFragmenter(
    request: tdex$daemon_v1_operator_pb.WithdrawFeeFragmenterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.WithdrawFeeFragmenterResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.WithdrawFeeFragmenterResponse>;

  withdrawFeeFragmenter(
    request: tdex$daemon_v1_operator_pb.WithdrawFeeFragmenterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.WithdrawFeeFragmenterResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/WithdrawFeeFragmenter',
        request,
        metadata || {},
        this.methodDescriptorWithdrawFeeFragmenter,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/WithdrawFeeFragmenter',
    request,
    metadata || {},
    this.methodDescriptorWithdrawFeeFragmenter);
  }

  methodDescriptorGetMarketFragmenterAddress = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/GetMarketFragmenterAddress',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetMarketFragmenterAddressRequest,
    tdex$daemon_v1_operator_pb.GetMarketFragmenterAddressResponse,
    (request: tdex$daemon_v1_operator_pb.GetMarketFragmenterAddressRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetMarketFragmenterAddressResponse.deserializeBinary
  );

  getMarketFragmenterAddress(
    request: tdex$daemon_v1_operator_pb.GetMarketFragmenterAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetMarketFragmenterAddressResponse>;

  getMarketFragmenterAddress(
    request: tdex$daemon_v1_operator_pb.GetMarketFragmenterAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketFragmenterAddressResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetMarketFragmenterAddressResponse>;

  getMarketFragmenterAddress(
    request: tdex$daemon_v1_operator_pb.GetMarketFragmenterAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketFragmenterAddressResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/GetMarketFragmenterAddress',
        request,
        metadata || {},
        this.methodDescriptorGetMarketFragmenterAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/GetMarketFragmenterAddress',
    request,
    metadata || {},
    this.methodDescriptorGetMarketFragmenterAddress);
  }

  methodDescriptorListMarketFragmenterAddresses = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/ListMarketFragmenterAddresses',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ListMarketFragmenterAddressesRequest,
    tdex$daemon_v1_operator_pb.ListMarketFragmenterAddressesResponse,
    (request: tdex$daemon_v1_operator_pb.ListMarketFragmenterAddressesRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ListMarketFragmenterAddressesResponse.deserializeBinary
  );

  listMarketFragmenterAddresses(
    request: tdex$daemon_v1_operator_pb.ListMarketFragmenterAddressesRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ListMarketFragmenterAddressesResponse>;

  listMarketFragmenterAddresses(
    request: tdex$daemon_v1_operator_pb.ListMarketFragmenterAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListMarketFragmenterAddressesResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ListMarketFragmenterAddressesResponse>;

  listMarketFragmenterAddresses(
    request: tdex$daemon_v1_operator_pb.ListMarketFragmenterAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListMarketFragmenterAddressesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/ListMarketFragmenterAddresses',
        request,
        metadata || {},
        this.methodDescriptorListMarketFragmenterAddresses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/ListMarketFragmenterAddresses',
    request,
    metadata || {},
    this.methodDescriptorListMarketFragmenterAddresses);
  }

  methodDescriptorGetMarketFragmenterBalance = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/GetMarketFragmenterBalance',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetMarketFragmenterBalanceRequest,
    tdex$daemon_v1_operator_pb.GetMarketFragmenterBalanceResponse,
    (request: tdex$daemon_v1_operator_pb.GetMarketFragmenterBalanceRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetMarketFragmenterBalanceResponse.deserializeBinary
  );

  getMarketFragmenterBalance(
    request: tdex$daemon_v1_operator_pb.GetMarketFragmenterBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetMarketFragmenterBalanceResponse>;

  getMarketFragmenterBalance(
    request: tdex$daemon_v1_operator_pb.GetMarketFragmenterBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketFragmenterBalanceResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetMarketFragmenterBalanceResponse>;

  getMarketFragmenterBalance(
    request: tdex$daemon_v1_operator_pb.GetMarketFragmenterBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketFragmenterBalanceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/GetMarketFragmenterBalance',
        request,
        metadata || {},
        this.methodDescriptorGetMarketFragmenterBalance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/GetMarketFragmenterBalance',
    request,
    metadata || {},
    this.methodDescriptorGetMarketFragmenterBalance);
  }

  methodDescriptorMarketFragmenterSplitFunds = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/MarketFragmenterSplitFunds',
    grpcWeb.MethodType.SERVER_STREAMING,
    tdex$daemon_v1_operator_pb.MarketFragmenterSplitFundsRequest,
    tdex$daemon_v1_operator_pb.MarketFragmenterSplitFundsResponse,
    (request: tdex$daemon_v1_operator_pb.MarketFragmenterSplitFundsRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.MarketFragmenterSplitFundsResponse.deserializeBinary
  );

  marketFragmenterSplitFunds(
    request: tdex$daemon_v1_operator_pb.MarketFragmenterSplitFundsRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.MarketFragmenterSplitFundsResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/tdex_daemon.v1.OperatorService/MarketFragmenterSplitFunds',
      request,
      metadata || {},
      this.methodDescriptorMarketFragmenterSplitFunds);
  }

  methodDescriptorWithdrawMarketFragmenter = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/WithdrawMarketFragmenter',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.WithdrawMarketFragmenterRequest,
    tdex$daemon_v1_operator_pb.WithdrawMarketFragmenterResponse,
    (request: tdex$daemon_v1_operator_pb.WithdrawMarketFragmenterRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.WithdrawMarketFragmenterResponse.deserializeBinary
  );

  withdrawMarketFragmenter(
    request: tdex$daemon_v1_operator_pb.WithdrawMarketFragmenterRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.WithdrawMarketFragmenterResponse>;

  withdrawMarketFragmenter(
    request: tdex$daemon_v1_operator_pb.WithdrawMarketFragmenterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.WithdrawMarketFragmenterResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.WithdrawMarketFragmenterResponse>;

  withdrawMarketFragmenter(
    request: tdex$daemon_v1_operator_pb.WithdrawMarketFragmenterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.WithdrawMarketFragmenterResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/WithdrawMarketFragmenter',
        request,
        metadata || {},
        this.methodDescriptorWithdrawMarketFragmenter,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/WithdrawMarketFragmenter',
    request,
    metadata || {},
    this.methodDescriptorWithdrawMarketFragmenter);
  }

  methodDescriptorListMarkets = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/ListMarkets',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ListMarketsRequest,
    tdex$daemon_v1_operator_pb.ListMarketsResponse,
    (request: tdex$daemon_v1_operator_pb.ListMarketsRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ListMarketsResponse.deserializeBinary
  );

  listMarkets(
    request: tdex$daemon_v1_operator_pb.ListMarketsRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ListMarketsResponse>;

  listMarkets(
    request: tdex$daemon_v1_operator_pb.ListMarketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListMarketsResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ListMarketsResponse>;

  listMarkets(
    request: tdex$daemon_v1_operator_pb.ListMarketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListMarketsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/ListMarkets',
        request,
        metadata || {},
        this.methodDescriptorListMarkets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/ListMarkets',
    request,
    metadata || {},
    this.methodDescriptorListMarkets);
  }

  methodDescriptorListTrades = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/ListTrades',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ListTradesRequest,
    tdex$daemon_v1_operator_pb.ListTradesResponse,
    (request: tdex$daemon_v1_operator_pb.ListTradesRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ListTradesResponse.deserializeBinary
  );

  listTrades(
    request: tdex$daemon_v1_operator_pb.ListTradesRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ListTradesResponse>;

  listTrades(
    request: tdex$daemon_v1_operator_pb.ListTradesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListTradesResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ListTradesResponse>;

  listTrades(
    request: tdex$daemon_v1_operator_pb.ListTradesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListTradesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/ListTrades',
        request,
        metadata || {},
        this.methodDescriptorListTrades,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/ListTrades',
    request,
    metadata || {},
    this.methodDescriptorListTrades);
  }

  methodDescriptorReloadUtxos = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/ReloadUtxos',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ReloadUtxosRequest,
    tdex$daemon_v1_operator_pb.ReloadUtxosResponse,
    (request: tdex$daemon_v1_operator_pb.ReloadUtxosRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ReloadUtxosResponse.deserializeBinary
  );

  reloadUtxos(
    request: tdex$daemon_v1_operator_pb.ReloadUtxosRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ReloadUtxosResponse>;

  reloadUtxos(
    request: tdex$daemon_v1_operator_pb.ReloadUtxosRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ReloadUtxosResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ReloadUtxosResponse>;

  reloadUtxos(
    request: tdex$daemon_v1_operator_pb.ReloadUtxosRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ReloadUtxosResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/ReloadUtxos',
        request,
        metadata || {},
        this.methodDescriptorReloadUtxos,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/ReloadUtxos',
    request,
    metadata || {},
    this.methodDescriptorReloadUtxos);
  }

  methodDescriptorListUtxos = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/ListUtxos',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ListUtxosRequest,
    tdex$daemon_v1_operator_pb.ListUtxosResponse,
    (request: tdex$daemon_v1_operator_pb.ListUtxosRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ListUtxosResponse.deserializeBinary
  );

  listUtxos(
    request: tdex$daemon_v1_operator_pb.ListUtxosRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ListUtxosResponse>;

  listUtxos(
    request: tdex$daemon_v1_operator_pb.ListUtxosRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListUtxosResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ListUtxosResponse>;

  listUtxos(
    request: tdex$daemon_v1_operator_pb.ListUtxosRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListUtxosResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/ListUtxos',
        request,
        metadata || {},
        this.methodDescriptorListUtxos,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/ListUtxos',
    request,
    metadata || {},
    this.methodDescriptorListUtxos);
  }

  methodDescriptorAddWebhook = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/AddWebhook',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.AddWebhookRequest,
    tdex$daemon_v1_operator_pb.AddWebhookResponse,
    (request: tdex$daemon_v1_operator_pb.AddWebhookRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.AddWebhookResponse.deserializeBinary
  );

  addWebhook(
    request: tdex$daemon_v1_operator_pb.AddWebhookRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.AddWebhookResponse>;

  addWebhook(
    request: tdex$daemon_v1_operator_pb.AddWebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.AddWebhookResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.AddWebhookResponse>;

  addWebhook(
    request: tdex$daemon_v1_operator_pb.AddWebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.AddWebhookResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/AddWebhook',
        request,
        metadata || {},
        this.methodDescriptorAddWebhook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/AddWebhook',
    request,
    metadata || {},
    this.methodDescriptorAddWebhook);
  }

  methodDescriptorRemoveWebhook = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/RemoveWebhook',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.RemoveWebhookRequest,
    tdex$daemon_v1_operator_pb.RemoveWebhookResponse,
    (request: tdex$daemon_v1_operator_pb.RemoveWebhookRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.RemoveWebhookResponse.deserializeBinary
  );

  removeWebhook(
    request: tdex$daemon_v1_operator_pb.RemoveWebhookRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.RemoveWebhookResponse>;

  removeWebhook(
    request: tdex$daemon_v1_operator_pb.RemoveWebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.RemoveWebhookResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.RemoveWebhookResponse>;

  removeWebhook(
    request: tdex$daemon_v1_operator_pb.RemoveWebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.RemoveWebhookResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/RemoveWebhook',
        request,
        metadata || {},
        this.methodDescriptorRemoveWebhook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/RemoveWebhook',
    request,
    metadata || {},
    this.methodDescriptorRemoveWebhook);
  }

  methodDescriptorListWebhooks = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/ListWebhooks',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ListWebhooksRequest,
    tdex$daemon_v1_operator_pb.ListWebhooksResponse,
    (request: tdex$daemon_v1_operator_pb.ListWebhooksRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ListWebhooksResponse.deserializeBinary
  );

  listWebhooks(
    request: tdex$daemon_v1_operator_pb.ListWebhooksRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ListWebhooksResponse>;

  listWebhooks(
    request: tdex$daemon_v1_operator_pb.ListWebhooksRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListWebhooksResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ListWebhooksResponse>;

  listWebhooks(
    request: tdex$daemon_v1_operator_pb.ListWebhooksRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListWebhooksResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/ListWebhooks',
        request,
        metadata || {},
        this.methodDescriptorListWebhooks,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/ListWebhooks',
    request,
    metadata || {},
    this.methodDescriptorListWebhooks);
  }

  methodDescriptorListDeposits = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/ListDeposits',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ListDepositsRequest,
    tdex$daemon_v1_operator_pb.ListDepositsResponse,
    (request: tdex$daemon_v1_operator_pb.ListDepositsRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ListDepositsResponse.deserializeBinary
  );

  listDeposits(
    request: tdex$daemon_v1_operator_pb.ListDepositsRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ListDepositsResponse>;

  listDeposits(
    request: tdex$daemon_v1_operator_pb.ListDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListDepositsResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ListDepositsResponse>;

  listDeposits(
    request: tdex$daemon_v1_operator_pb.ListDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListDepositsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/ListDeposits',
        request,
        metadata || {},
        this.methodDescriptorListDeposits,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/ListDeposits',
    request,
    metadata || {},
    this.methodDescriptorListDeposits);
  }

  methodDescriptorListWithdrawals = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/ListWithdrawals',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.ListWithdrawalsRequest,
    tdex$daemon_v1_operator_pb.ListWithdrawalsResponse,
    (request: tdex$daemon_v1_operator_pb.ListWithdrawalsRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.ListWithdrawalsResponse.deserializeBinary
  );

  listWithdrawals(
    request: tdex$daemon_v1_operator_pb.ListWithdrawalsRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.ListWithdrawalsResponse>;

  listWithdrawals(
    request: tdex$daemon_v1_operator_pb.ListWithdrawalsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListWithdrawalsResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.ListWithdrawalsResponse>;

  listWithdrawals(
    request: tdex$daemon_v1_operator_pb.ListWithdrawalsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.ListWithdrawalsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/ListWithdrawals',
        request,
        metadata || {},
        this.methodDescriptorListWithdrawals,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/ListWithdrawals',
    request,
    metadata || {},
    this.methodDescriptorListWithdrawals);
  }

  methodDescriptorGetMarketReport = new grpcWeb.MethodDescriptor(
    '/tdex_daemon.v1.OperatorService/GetMarketReport',
    grpcWeb.MethodType.UNARY,
    tdex$daemon_v1_operator_pb.GetMarketReportRequest,
    tdex$daemon_v1_operator_pb.GetMarketReportResponse,
    (request: tdex$daemon_v1_operator_pb.GetMarketReportRequest) => {
      return request.serializeBinary();
    },
    tdex$daemon_v1_operator_pb.GetMarketReportResponse.deserializeBinary
  );

  getMarketReport(
    request: tdex$daemon_v1_operator_pb.GetMarketReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex$daemon_v1_operator_pb.GetMarketReportResponse>;

  getMarketReport(
    request: tdex$daemon_v1_operator_pb.GetMarketReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketReportResponse) => void): grpcWeb.ClientReadableStream<tdex$daemon_v1_operator_pb.GetMarketReportResponse>;

  getMarketReport(
    request: tdex$daemon_v1_operator_pb.GetMarketReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex$daemon_v1_operator_pb.GetMarketReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex_daemon.v1.OperatorService/GetMarketReport',
        request,
        metadata || {},
        this.methodDescriptorGetMarketReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex_daemon.v1.OperatorService/GetMarketReport',
    request,
    metadata || {},
    this.methodDescriptorGetMarketReport);
  }

}

