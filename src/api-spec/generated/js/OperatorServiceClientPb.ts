/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as operator_pb from './operator_pb';


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
    '/Operator/GetInfo',
    grpcWeb.MethodType.UNARY,
    operator_pb.GetInfoRequest,
    operator_pb.GetInfoReply,
    (request: operator_pb.GetInfoRequest) => {
      return request.serializeBinary();
    },
    operator_pb.GetInfoReply.deserializeBinary
  );

  getInfo(
    request: operator_pb.GetInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.GetInfoReply>;

  getInfo(
    request: operator_pb.GetInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.GetInfoReply) => void): grpcWeb.ClientReadableStream<operator_pb.GetInfoReply>;

  getInfo(
    request: operator_pb.GetInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.GetInfoReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/GetInfo',
        request,
        metadata || {},
        this.methodDescriptorGetInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/GetInfo',
    request,
    metadata || {},
    this.methodDescriptorGetInfo);
  }

  methodDescriptorGetFeeAddress = new grpcWeb.MethodDescriptor(
    '/Operator/GetFeeAddress',
    grpcWeb.MethodType.UNARY,
    operator_pb.GetFeeAddressRequest,
    operator_pb.GetFeeAddressReply,
    (request: operator_pb.GetFeeAddressRequest) => {
      return request.serializeBinary();
    },
    operator_pb.GetFeeAddressReply.deserializeBinary
  );

  getFeeAddress(
    request: operator_pb.GetFeeAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.GetFeeAddressReply>;

  getFeeAddress(
    request: operator_pb.GetFeeAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.GetFeeAddressReply) => void): grpcWeb.ClientReadableStream<operator_pb.GetFeeAddressReply>;

  getFeeAddress(
    request: operator_pb.GetFeeAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.GetFeeAddressReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/GetFeeAddress',
        request,
        metadata || {},
        this.methodDescriptorGetFeeAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/GetFeeAddress',
    request,
    metadata || {},
    this.methodDescriptorGetFeeAddress);
  }

  methodDescriptorListFeeAddresses = new grpcWeb.MethodDescriptor(
    '/Operator/ListFeeAddresses',
    grpcWeb.MethodType.UNARY,
    operator_pb.ListFeeAddressesRequest,
    operator_pb.ListFeeAddressesReply,
    (request: operator_pb.ListFeeAddressesRequest) => {
      return request.serializeBinary();
    },
    operator_pb.ListFeeAddressesReply.deserializeBinary
  );

  listFeeAddresses(
    request: operator_pb.ListFeeAddressesRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.ListFeeAddressesReply>;

  listFeeAddresses(
    request: operator_pb.ListFeeAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.ListFeeAddressesReply) => void): grpcWeb.ClientReadableStream<operator_pb.ListFeeAddressesReply>;

  listFeeAddresses(
    request: operator_pb.ListFeeAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.ListFeeAddressesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ListFeeAddresses',
        request,
        metadata || {},
        this.methodDescriptorListFeeAddresses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ListFeeAddresses',
    request,
    metadata || {},
    this.methodDescriptorListFeeAddresses);
  }

  methodDescriptorGetFeeBalance = new grpcWeb.MethodDescriptor(
    '/Operator/GetFeeBalance',
    grpcWeb.MethodType.UNARY,
    operator_pb.GetFeeBalanceRequest,
    operator_pb.GetFeeBalanceReply,
    (request: operator_pb.GetFeeBalanceRequest) => {
      return request.serializeBinary();
    },
    operator_pb.GetFeeBalanceReply.deserializeBinary
  );

  getFeeBalance(
    request: operator_pb.GetFeeBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.GetFeeBalanceReply>;

  getFeeBalance(
    request: operator_pb.GetFeeBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.GetFeeBalanceReply) => void): grpcWeb.ClientReadableStream<operator_pb.GetFeeBalanceReply>;

  getFeeBalance(
    request: operator_pb.GetFeeBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.GetFeeBalanceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/GetFeeBalance',
        request,
        metadata || {},
        this.methodDescriptorGetFeeBalance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/GetFeeBalance',
    request,
    metadata || {},
    this.methodDescriptorGetFeeBalance);
  }

  methodDescriptorClaimFeeDeposits = new grpcWeb.MethodDescriptor(
    '/Operator/ClaimFeeDeposits',
    grpcWeb.MethodType.UNARY,
    operator_pb.ClaimFeeDepositsRequest,
    operator_pb.ClaimFeeDepositsReply,
    (request: operator_pb.ClaimFeeDepositsRequest) => {
      return request.serializeBinary();
    },
    operator_pb.ClaimFeeDepositsReply.deserializeBinary
  );

  claimFeeDeposits(
    request: operator_pb.ClaimFeeDepositsRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.ClaimFeeDepositsReply>;

  claimFeeDeposits(
    request: operator_pb.ClaimFeeDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.ClaimFeeDepositsReply) => void): grpcWeb.ClientReadableStream<operator_pb.ClaimFeeDepositsReply>;

  claimFeeDeposits(
    request: operator_pb.ClaimFeeDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.ClaimFeeDepositsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ClaimFeeDeposits',
        request,
        metadata || {},
        this.methodDescriptorClaimFeeDeposits,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ClaimFeeDeposits',
    request,
    metadata || {},
    this.methodDescriptorClaimFeeDeposits);
  }

  methodDescriptorWithdrawFee = new grpcWeb.MethodDescriptor(
    '/Operator/WithdrawFee',
    grpcWeb.MethodType.UNARY,
    operator_pb.WithdrawFeeRequest,
    operator_pb.WithdrawFeeReply,
    (request: operator_pb.WithdrawFeeRequest) => {
      return request.serializeBinary();
    },
    operator_pb.WithdrawFeeReply.deserializeBinary
  );

  withdrawFee(
    request: operator_pb.WithdrawFeeRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.WithdrawFeeReply>;

  withdrawFee(
    request: operator_pb.WithdrawFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.WithdrawFeeReply) => void): grpcWeb.ClientReadableStream<operator_pb.WithdrawFeeReply>;

  withdrawFee(
    request: operator_pb.WithdrawFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.WithdrawFeeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/WithdrawFee',
        request,
        metadata || {},
        this.methodDescriptorWithdrawFee,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/WithdrawFee',
    request,
    metadata || {},
    this.methodDescriptorWithdrawFee);
  }

  methodDescriptorNewMarket = new grpcWeb.MethodDescriptor(
    '/Operator/NewMarket',
    grpcWeb.MethodType.UNARY,
    operator_pb.NewMarketRequest,
    operator_pb.NewMarketReply,
    (request: operator_pb.NewMarketRequest) => {
      return request.serializeBinary();
    },
    operator_pb.NewMarketReply.deserializeBinary
  );

  newMarket(
    request: operator_pb.NewMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.NewMarketReply>;

  newMarket(
    request: operator_pb.NewMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.NewMarketReply) => void): grpcWeb.ClientReadableStream<operator_pb.NewMarketReply>;

  newMarket(
    request: operator_pb.NewMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.NewMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/NewMarket',
        request,
        metadata || {},
        this.methodDescriptorNewMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/NewMarket',
    request,
    metadata || {},
    this.methodDescriptorNewMarket);
  }

  methodDescriptorGetMarketInfo = new grpcWeb.MethodDescriptor(
    '/Operator/GetMarketInfo',
    grpcWeb.MethodType.UNARY,
    operator_pb.GetMarketInfoRequest,
    operator_pb.GetMarketInfoReply,
    (request: operator_pb.GetMarketInfoRequest) => {
      return request.serializeBinary();
    },
    operator_pb.GetMarketInfoReply.deserializeBinary
  );

  getMarketInfo(
    request: operator_pb.GetMarketInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.GetMarketInfoReply>;

  getMarketInfo(
    request: operator_pb.GetMarketInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.GetMarketInfoReply) => void): grpcWeb.ClientReadableStream<operator_pb.GetMarketInfoReply>;

  getMarketInfo(
    request: operator_pb.GetMarketInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.GetMarketInfoReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/GetMarketInfo',
        request,
        metadata || {},
        this.methodDescriptorGetMarketInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/GetMarketInfo',
    request,
    metadata || {},
    this.methodDescriptorGetMarketInfo);
  }

  methodDescriptorGetMarketAddress = new grpcWeb.MethodDescriptor(
    '/Operator/GetMarketAddress',
    grpcWeb.MethodType.UNARY,
    operator_pb.GetMarketAddressRequest,
    operator_pb.GetMarketAddressReply,
    (request: operator_pb.GetMarketAddressRequest) => {
      return request.serializeBinary();
    },
    operator_pb.GetMarketAddressReply.deserializeBinary
  );

  getMarketAddress(
    request: operator_pb.GetMarketAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.GetMarketAddressReply>;

  getMarketAddress(
    request: operator_pb.GetMarketAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.GetMarketAddressReply) => void): grpcWeb.ClientReadableStream<operator_pb.GetMarketAddressReply>;

  getMarketAddress(
    request: operator_pb.GetMarketAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.GetMarketAddressReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/GetMarketAddress',
        request,
        metadata || {},
        this.methodDescriptorGetMarketAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/GetMarketAddress',
    request,
    metadata || {},
    this.methodDescriptorGetMarketAddress);
  }

  methodDescriptorListMarketAddresses = new grpcWeb.MethodDescriptor(
    '/Operator/ListMarketAddresses',
    grpcWeb.MethodType.UNARY,
    operator_pb.ListMarketAddressesRequest,
    operator_pb.ListMarketAddressesReply,
    (request: operator_pb.ListMarketAddressesRequest) => {
      return request.serializeBinary();
    },
    operator_pb.ListMarketAddressesReply.deserializeBinary
  );

  listMarketAddresses(
    request: operator_pb.ListMarketAddressesRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.ListMarketAddressesReply>;

  listMarketAddresses(
    request: operator_pb.ListMarketAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.ListMarketAddressesReply) => void): grpcWeb.ClientReadableStream<operator_pb.ListMarketAddressesReply>;

  listMarketAddresses(
    request: operator_pb.ListMarketAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.ListMarketAddressesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ListMarketAddresses',
        request,
        metadata || {},
        this.methodDescriptorListMarketAddresses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ListMarketAddresses',
    request,
    metadata || {},
    this.methodDescriptorListMarketAddresses);
  }

  methodDescriptorGetMarketBalance = new grpcWeb.MethodDescriptor(
    '/Operator/GetMarketBalance',
    grpcWeb.MethodType.UNARY,
    operator_pb.GetMarketBalanceRequest,
    operator_pb.GetMarketBalanceReply,
    (request: operator_pb.GetMarketBalanceRequest) => {
      return request.serializeBinary();
    },
    operator_pb.GetMarketBalanceReply.deserializeBinary
  );

  getMarketBalance(
    request: operator_pb.GetMarketBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.GetMarketBalanceReply>;

  getMarketBalance(
    request: operator_pb.GetMarketBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.GetMarketBalanceReply) => void): grpcWeb.ClientReadableStream<operator_pb.GetMarketBalanceReply>;

  getMarketBalance(
    request: operator_pb.GetMarketBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.GetMarketBalanceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/GetMarketBalance',
        request,
        metadata || {},
        this.methodDescriptorGetMarketBalance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/GetMarketBalance',
    request,
    metadata || {},
    this.methodDescriptorGetMarketBalance);
  }

  methodDescriptorClaimMarketDeposits = new grpcWeb.MethodDescriptor(
    '/Operator/ClaimMarketDeposits',
    grpcWeb.MethodType.UNARY,
    operator_pb.ClaimMarketDepositsRequest,
    operator_pb.ClaimMarketDepositsReply,
    (request: operator_pb.ClaimMarketDepositsRequest) => {
      return request.serializeBinary();
    },
    operator_pb.ClaimMarketDepositsReply.deserializeBinary
  );

  claimMarketDeposits(
    request: operator_pb.ClaimMarketDepositsRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.ClaimMarketDepositsReply>;

  claimMarketDeposits(
    request: operator_pb.ClaimMarketDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.ClaimMarketDepositsReply) => void): grpcWeb.ClientReadableStream<operator_pb.ClaimMarketDepositsReply>;

  claimMarketDeposits(
    request: operator_pb.ClaimMarketDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.ClaimMarketDepositsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ClaimMarketDeposits',
        request,
        metadata || {},
        this.methodDescriptorClaimMarketDeposits,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ClaimMarketDeposits',
    request,
    metadata || {},
    this.methodDescriptorClaimMarketDeposits);
  }

  methodDescriptorOpenMarket = new grpcWeb.MethodDescriptor(
    '/Operator/OpenMarket',
    grpcWeb.MethodType.UNARY,
    operator_pb.OpenMarketRequest,
    operator_pb.OpenMarketReply,
    (request: operator_pb.OpenMarketRequest) => {
      return request.serializeBinary();
    },
    operator_pb.OpenMarketReply.deserializeBinary
  );

  openMarket(
    request: operator_pb.OpenMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.OpenMarketReply>;

  openMarket(
    request: operator_pb.OpenMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.OpenMarketReply) => void): grpcWeb.ClientReadableStream<operator_pb.OpenMarketReply>;

  openMarket(
    request: operator_pb.OpenMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.OpenMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/OpenMarket',
        request,
        metadata || {},
        this.methodDescriptorOpenMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/OpenMarket',
    request,
    metadata || {},
    this.methodDescriptorOpenMarket);
  }

  methodDescriptorCloseMarket = new grpcWeb.MethodDescriptor(
    '/Operator/CloseMarket',
    grpcWeb.MethodType.UNARY,
    operator_pb.CloseMarketRequest,
    operator_pb.CloseMarketReply,
    (request: operator_pb.CloseMarketRequest) => {
      return request.serializeBinary();
    },
    operator_pb.CloseMarketReply.deserializeBinary
  );

  closeMarket(
    request: operator_pb.CloseMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.CloseMarketReply>;

  closeMarket(
    request: operator_pb.CloseMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.CloseMarketReply) => void): grpcWeb.ClientReadableStream<operator_pb.CloseMarketReply>;

  closeMarket(
    request: operator_pb.CloseMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.CloseMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/CloseMarket',
        request,
        metadata || {},
        this.methodDescriptorCloseMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/CloseMarket',
    request,
    metadata || {},
    this.methodDescriptorCloseMarket);
  }

  methodDescriptorDropMarket = new grpcWeb.MethodDescriptor(
    '/Operator/DropMarket',
    grpcWeb.MethodType.UNARY,
    operator_pb.DropMarketRequest,
    operator_pb.DropMarketReply,
    (request: operator_pb.DropMarketRequest) => {
      return request.serializeBinary();
    },
    operator_pb.DropMarketReply.deserializeBinary
  );

  dropMarket(
    request: operator_pb.DropMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.DropMarketReply>;

  dropMarket(
    request: operator_pb.DropMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.DropMarketReply) => void): grpcWeb.ClientReadableStream<operator_pb.DropMarketReply>;

  dropMarket(
    request: operator_pb.DropMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.DropMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/DropMarket',
        request,
        metadata || {},
        this.methodDescriptorDropMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/DropMarket',
    request,
    metadata || {},
    this.methodDescriptorDropMarket);
  }

  methodDescriptorGetMarketCollectedSwapFees = new grpcWeb.MethodDescriptor(
    '/Operator/GetMarketCollectedSwapFees',
    grpcWeb.MethodType.UNARY,
    operator_pb.GetMarketCollectedSwapFeesRequest,
    operator_pb.GetMarketCollectedSwapFeesReply,
    (request: operator_pb.GetMarketCollectedSwapFeesRequest) => {
      return request.serializeBinary();
    },
    operator_pb.GetMarketCollectedSwapFeesReply.deserializeBinary
  );

  getMarketCollectedSwapFees(
    request: operator_pb.GetMarketCollectedSwapFeesRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.GetMarketCollectedSwapFeesReply>;

  getMarketCollectedSwapFees(
    request: operator_pb.GetMarketCollectedSwapFeesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.GetMarketCollectedSwapFeesReply) => void): grpcWeb.ClientReadableStream<operator_pb.GetMarketCollectedSwapFeesReply>;

  getMarketCollectedSwapFees(
    request: operator_pb.GetMarketCollectedSwapFeesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.GetMarketCollectedSwapFeesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/GetMarketCollectedSwapFees',
        request,
        metadata || {},
        this.methodDescriptorGetMarketCollectedSwapFees,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/GetMarketCollectedSwapFees',
    request,
    metadata || {},
    this.methodDescriptorGetMarketCollectedSwapFees);
  }

  methodDescriptorWithdrawMarket = new grpcWeb.MethodDescriptor(
    '/Operator/WithdrawMarket',
    grpcWeb.MethodType.UNARY,
    operator_pb.WithdrawMarketRequest,
    operator_pb.WithdrawMarketReply,
    (request: operator_pb.WithdrawMarketRequest) => {
      return request.serializeBinary();
    },
    operator_pb.WithdrawMarketReply.deserializeBinary
  );

  withdrawMarket(
    request: operator_pb.WithdrawMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.WithdrawMarketReply>;

  withdrawMarket(
    request: operator_pb.WithdrawMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.WithdrawMarketReply) => void): grpcWeb.ClientReadableStream<operator_pb.WithdrawMarketReply>;

  withdrawMarket(
    request: operator_pb.WithdrawMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.WithdrawMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/WithdrawMarket',
        request,
        metadata || {},
        this.methodDescriptorWithdrawMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/WithdrawMarket',
    request,
    metadata || {},
    this.methodDescriptorWithdrawMarket);
  }

  methodDescriptorUpdateMarketPercentageFee = new grpcWeb.MethodDescriptor(
    '/Operator/UpdateMarketPercentageFee',
    grpcWeb.MethodType.UNARY,
    operator_pb.UpdateMarketPercentageFeeRequest,
    operator_pb.UpdateMarketFeeReply,
    (request: operator_pb.UpdateMarketPercentageFeeRequest) => {
      return request.serializeBinary();
    },
    operator_pb.UpdateMarketFeeReply.deserializeBinary
  );

  updateMarketPercentageFee(
    request: operator_pb.UpdateMarketPercentageFeeRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.UpdateMarketFeeReply>;

  updateMarketPercentageFee(
    request: operator_pb.UpdateMarketPercentageFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.UpdateMarketFeeReply) => void): grpcWeb.ClientReadableStream<operator_pb.UpdateMarketFeeReply>;

  updateMarketPercentageFee(
    request: operator_pb.UpdateMarketPercentageFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.UpdateMarketFeeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/UpdateMarketPercentageFee',
        request,
        metadata || {},
        this.methodDescriptorUpdateMarketPercentageFee,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/UpdateMarketPercentageFee',
    request,
    metadata || {},
    this.methodDescriptorUpdateMarketPercentageFee);
  }

  methodDescriptorUpdateMarketFixedFee = new grpcWeb.MethodDescriptor(
    '/Operator/UpdateMarketFixedFee',
    grpcWeb.MethodType.UNARY,
    operator_pb.UpdateMarketFixedFeeRequest,
    operator_pb.UpdateMarketFeeReply,
    (request: operator_pb.UpdateMarketFixedFeeRequest) => {
      return request.serializeBinary();
    },
    operator_pb.UpdateMarketFeeReply.deserializeBinary
  );

  updateMarketFixedFee(
    request: operator_pb.UpdateMarketFixedFeeRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.UpdateMarketFeeReply>;

  updateMarketFixedFee(
    request: operator_pb.UpdateMarketFixedFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.UpdateMarketFeeReply) => void): grpcWeb.ClientReadableStream<operator_pb.UpdateMarketFeeReply>;

  updateMarketFixedFee(
    request: operator_pb.UpdateMarketFixedFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.UpdateMarketFeeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/UpdateMarketFixedFee',
        request,
        metadata || {},
        this.methodDescriptorUpdateMarketFixedFee,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/UpdateMarketFixedFee',
    request,
    metadata || {},
    this.methodDescriptorUpdateMarketFixedFee);
  }

  methodDescriptorUpdateMarketPrice = new grpcWeb.MethodDescriptor(
    '/Operator/UpdateMarketPrice',
    grpcWeb.MethodType.UNARY,
    operator_pb.UpdateMarketPriceRequest,
    operator_pb.UpdateMarketPriceReply,
    (request: operator_pb.UpdateMarketPriceRequest) => {
      return request.serializeBinary();
    },
    operator_pb.UpdateMarketPriceReply.deserializeBinary
  );

  updateMarketPrice(
    request: operator_pb.UpdateMarketPriceRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.UpdateMarketPriceReply>;

  updateMarketPrice(
    request: operator_pb.UpdateMarketPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.UpdateMarketPriceReply) => void): grpcWeb.ClientReadableStream<operator_pb.UpdateMarketPriceReply>;

  updateMarketPrice(
    request: operator_pb.UpdateMarketPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.UpdateMarketPriceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/UpdateMarketPrice',
        request,
        metadata || {},
        this.methodDescriptorUpdateMarketPrice,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/UpdateMarketPrice',
    request,
    metadata || {},
    this.methodDescriptorUpdateMarketPrice);
  }

  methodDescriptorUpdateMarketStrategy = new grpcWeb.MethodDescriptor(
    '/Operator/UpdateMarketStrategy',
    grpcWeb.MethodType.UNARY,
    operator_pb.UpdateMarketStrategyRequest,
    operator_pb.UpdateMarketStrategyReply,
    (request: operator_pb.UpdateMarketStrategyRequest) => {
      return request.serializeBinary();
    },
    operator_pb.UpdateMarketStrategyReply.deserializeBinary
  );

  updateMarketStrategy(
    request: operator_pb.UpdateMarketStrategyRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.UpdateMarketStrategyReply>;

  updateMarketStrategy(
    request: operator_pb.UpdateMarketStrategyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.UpdateMarketStrategyReply) => void): grpcWeb.ClientReadableStream<operator_pb.UpdateMarketStrategyReply>;

  updateMarketStrategy(
    request: operator_pb.UpdateMarketStrategyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.UpdateMarketStrategyReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/UpdateMarketStrategy',
        request,
        metadata || {},
        this.methodDescriptorUpdateMarketStrategy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/UpdateMarketStrategy',
    request,
    metadata || {},
    this.methodDescriptorUpdateMarketStrategy);
  }

  methodDescriptorGetFeeFragmenterAddress = new grpcWeb.MethodDescriptor(
    '/Operator/GetFeeFragmenterAddress',
    grpcWeb.MethodType.UNARY,
    operator_pb.GetFeeFragmenterAddressRequest,
    operator_pb.GetFeeFragmenterAddressReply,
    (request: operator_pb.GetFeeFragmenterAddressRequest) => {
      return request.serializeBinary();
    },
    operator_pb.GetFeeFragmenterAddressReply.deserializeBinary
  );

  getFeeFragmenterAddress(
    request: operator_pb.GetFeeFragmenterAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.GetFeeFragmenterAddressReply>;

  getFeeFragmenterAddress(
    request: operator_pb.GetFeeFragmenterAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.GetFeeFragmenterAddressReply) => void): grpcWeb.ClientReadableStream<operator_pb.GetFeeFragmenterAddressReply>;

  getFeeFragmenterAddress(
    request: operator_pb.GetFeeFragmenterAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.GetFeeFragmenterAddressReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/GetFeeFragmenterAddress',
        request,
        metadata || {},
        this.methodDescriptorGetFeeFragmenterAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/GetFeeFragmenterAddress',
    request,
    metadata || {},
    this.methodDescriptorGetFeeFragmenterAddress);
  }

  methodDescriptorListFeeFragmenterAddresses = new grpcWeb.MethodDescriptor(
    '/Operator/ListFeeFragmenterAddresses',
    grpcWeb.MethodType.UNARY,
    operator_pb.ListFeeFragmenterAddressesRequest,
    operator_pb.ListFeeFragmenterAddressesReply,
    (request: operator_pb.ListFeeFragmenterAddressesRequest) => {
      return request.serializeBinary();
    },
    operator_pb.ListFeeFragmenterAddressesReply.deserializeBinary
  );

  listFeeFragmenterAddresses(
    request: operator_pb.ListFeeFragmenterAddressesRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.ListFeeFragmenterAddressesReply>;

  listFeeFragmenterAddresses(
    request: operator_pb.ListFeeFragmenterAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.ListFeeFragmenterAddressesReply) => void): grpcWeb.ClientReadableStream<operator_pb.ListFeeFragmenterAddressesReply>;

  listFeeFragmenterAddresses(
    request: operator_pb.ListFeeFragmenterAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.ListFeeFragmenterAddressesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ListFeeFragmenterAddresses',
        request,
        metadata || {},
        this.methodDescriptorListFeeFragmenterAddresses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ListFeeFragmenterAddresses',
    request,
    metadata || {},
    this.methodDescriptorListFeeFragmenterAddresses);
  }

  methodDescriptorGetFeeFragmenterBalance = new grpcWeb.MethodDescriptor(
    '/Operator/GetFeeFragmenterBalance',
    grpcWeb.MethodType.UNARY,
    operator_pb.GetFeeFragmenterBalanceRequest,
    operator_pb.GetFeeFragmenterBalanceReply,
    (request: operator_pb.GetFeeFragmenterBalanceRequest) => {
      return request.serializeBinary();
    },
    operator_pb.GetFeeFragmenterBalanceReply.deserializeBinary
  );

  getFeeFragmenterBalance(
    request: operator_pb.GetFeeFragmenterBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.GetFeeFragmenterBalanceReply>;

  getFeeFragmenterBalance(
    request: operator_pb.GetFeeFragmenterBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.GetFeeFragmenterBalanceReply) => void): grpcWeb.ClientReadableStream<operator_pb.GetFeeFragmenterBalanceReply>;

  getFeeFragmenterBalance(
    request: operator_pb.GetFeeFragmenterBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.GetFeeFragmenterBalanceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/GetFeeFragmenterBalance',
        request,
        metadata || {},
        this.methodDescriptorGetFeeFragmenterBalance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/GetFeeFragmenterBalance',
    request,
    metadata || {},
    this.methodDescriptorGetFeeFragmenterBalance);
  }

  methodDescriptorFeeFragmenterSplitFunds = new grpcWeb.MethodDescriptor(
    '/Operator/FeeFragmenterSplitFunds',
    grpcWeb.MethodType.SERVER_STREAMING,
    operator_pb.FeeFragmenterSplitFundsRequest,
    operator_pb.FragmenterSplitFundsReply,
    (request: operator_pb.FeeFragmenterSplitFundsRequest) => {
      return request.serializeBinary();
    },
    operator_pb.FragmenterSplitFundsReply.deserializeBinary
  );

  feeFragmenterSplitFunds(
    request: operator_pb.FeeFragmenterSplitFundsRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<operator_pb.FragmenterSplitFundsReply> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/Operator/FeeFragmenterSplitFunds',
      request,
      metadata || {},
      this.methodDescriptorFeeFragmenterSplitFunds);
  }

  methodDescriptorWithdrawFeeFragmenter = new grpcWeb.MethodDescriptor(
    '/Operator/WithdrawFeeFragmenter',
    grpcWeb.MethodType.UNARY,
    operator_pb.WithdrawFeeFragmenterRequest,
    operator_pb.WithdrawFeeFragmenterReply,
    (request: operator_pb.WithdrawFeeFragmenterRequest) => {
      return request.serializeBinary();
    },
    operator_pb.WithdrawFeeFragmenterReply.deserializeBinary
  );

  withdrawFeeFragmenter(
    request: operator_pb.WithdrawFeeFragmenterRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.WithdrawFeeFragmenterReply>;

  withdrawFeeFragmenter(
    request: operator_pb.WithdrawFeeFragmenterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.WithdrawFeeFragmenterReply) => void): grpcWeb.ClientReadableStream<operator_pb.WithdrawFeeFragmenterReply>;

  withdrawFeeFragmenter(
    request: operator_pb.WithdrawFeeFragmenterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.WithdrawFeeFragmenterReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/WithdrawFeeFragmenter',
        request,
        metadata || {},
        this.methodDescriptorWithdrawFeeFragmenter,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/WithdrawFeeFragmenter',
    request,
    metadata || {},
    this.methodDescriptorWithdrawFeeFragmenter);
  }

  methodDescriptorGetMarketFragmenterAddress = new grpcWeb.MethodDescriptor(
    '/Operator/GetMarketFragmenterAddress',
    grpcWeb.MethodType.UNARY,
    operator_pb.GetMarketFragmenterAddressRequest,
    operator_pb.GetMarketFragmenterAddressReply,
    (request: operator_pb.GetMarketFragmenterAddressRequest) => {
      return request.serializeBinary();
    },
    operator_pb.GetMarketFragmenterAddressReply.deserializeBinary
  );

  getMarketFragmenterAddress(
    request: operator_pb.GetMarketFragmenterAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.GetMarketFragmenterAddressReply>;

  getMarketFragmenterAddress(
    request: operator_pb.GetMarketFragmenterAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.GetMarketFragmenterAddressReply) => void): grpcWeb.ClientReadableStream<operator_pb.GetMarketFragmenterAddressReply>;

  getMarketFragmenterAddress(
    request: operator_pb.GetMarketFragmenterAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.GetMarketFragmenterAddressReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/GetMarketFragmenterAddress',
        request,
        metadata || {},
        this.methodDescriptorGetMarketFragmenterAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/GetMarketFragmenterAddress',
    request,
    metadata || {},
    this.methodDescriptorGetMarketFragmenterAddress);
  }

  methodDescriptorListMarketFragmenterAddresses = new grpcWeb.MethodDescriptor(
    '/Operator/ListMarketFragmenterAddresses',
    grpcWeb.MethodType.UNARY,
    operator_pb.ListMarketFragmenterAddressesRequest,
    operator_pb.ListMarketFragmenterAddressesReply,
    (request: operator_pb.ListMarketFragmenterAddressesRequest) => {
      return request.serializeBinary();
    },
    operator_pb.ListMarketFragmenterAddressesReply.deserializeBinary
  );

  listMarketFragmenterAddresses(
    request: operator_pb.ListMarketFragmenterAddressesRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.ListMarketFragmenterAddressesReply>;

  listMarketFragmenterAddresses(
    request: operator_pb.ListMarketFragmenterAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.ListMarketFragmenterAddressesReply) => void): grpcWeb.ClientReadableStream<operator_pb.ListMarketFragmenterAddressesReply>;

  listMarketFragmenterAddresses(
    request: operator_pb.ListMarketFragmenterAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.ListMarketFragmenterAddressesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ListMarketFragmenterAddresses',
        request,
        metadata || {},
        this.methodDescriptorListMarketFragmenterAddresses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ListMarketFragmenterAddresses',
    request,
    metadata || {},
    this.methodDescriptorListMarketFragmenterAddresses);
  }

  methodDescriptorGetMarketFragmenterBalance = new grpcWeb.MethodDescriptor(
    '/Operator/GetMarketFragmenterBalance',
    grpcWeb.MethodType.UNARY,
    operator_pb.GetMarketFragmenterBalanceRequest,
    operator_pb.GetMarketFragmenterBalanceReply,
    (request: operator_pb.GetMarketFragmenterBalanceRequest) => {
      return request.serializeBinary();
    },
    operator_pb.GetMarketFragmenterBalanceReply.deserializeBinary
  );

  getMarketFragmenterBalance(
    request: operator_pb.GetMarketFragmenterBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.GetMarketFragmenterBalanceReply>;

  getMarketFragmenterBalance(
    request: operator_pb.GetMarketFragmenterBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.GetMarketFragmenterBalanceReply) => void): grpcWeb.ClientReadableStream<operator_pb.GetMarketFragmenterBalanceReply>;

  getMarketFragmenterBalance(
    request: operator_pb.GetMarketFragmenterBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.GetMarketFragmenterBalanceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/GetMarketFragmenterBalance',
        request,
        metadata || {},
        this.methodDescriptorGetMarketFragmenterBalance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/GetMarketFragmenterBalance',
    request,
    metadata || {},
    this.methodDescriptorGetMarketFragmenterBalance);
  }

  methodDescriptorMarketFragmenterSplitFunds = new grpcWeb.MethodDescriptor(
    '/Operator/MarketFragmenterSplitFunds',
    grpcWeb.MethodType.SERVER_STREAMING,
    operator_pb.MarketFragmenterSplitFundsRequest,
    operator_pb.FragmenterSplitFundsReply,
    (request: operator_pb.MarketFragmenterSplitFundsRequest) => {
      return request.serializeBinary();
    },
    operator_pb.FragmenterSplitFundsReply.deserializeBinary
  );

  marketFragmenterSplitFunds(
    request: operator_pb.MarketFragmenterSplitFundsRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<operator_pb.FragmenterSplitFundsReply> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/Operator/MarketFragmenterSplitFunds',
      request,
      metadata || {},
      this.methodDescriptorMarketFragmenterSplitFunds);
  }

  methodDescriptorWithdrawMarketFragmenter = new grpcWeb.MethodDescriptor(
    '/Operator/WithdrawMarketFragmenter',
    grpcWeb.MethodType.UNARY,
    operator_pb.WithdrawMarketFragmenterRequest,
    operator_pb.WithdrawMarketFragmenterReply,
    (request: operator_pb.WithdrawMarketFragmenterRequest) => {
      return request.serializeBinary();
    },
    operator_pb.WithdrawMarketFragmenterReply.deserializeBinary
  );

  withdrawMarketFragmenter(
    request: operator_pb.WithdrawMarketFragmenterRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.WithdrawMarketFragmenterReply>;

  withdrawMarketFragmenter(
    request: operator_pb.WithdrawMarketFragmenterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.WithdrawMarketFragmenterReply) => void): grpcWeb.ClientReadableStream<operator_pb.WithdrawMarketFragmenterReply>;

  withdrawMarketFragmenter(
    request: operator_pb.WithdrawMarketFragmenterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.WithdrawMarketFragmenterReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/WithdrawMarketFragmenter',
        request,
        metadata || {},
        this.methodDescriptorWithdrawMarketFragmenter,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/WithdrawMarketFragmenter',
    request,
    metadata || {},
    this.methodDescriptorWithdrawMarketFragmenter);
  }

  methodDescriptorListMarkets = new grpcWeb.MethodDescriptor(
    '/Operator/ListMarkets',
    grpcWeb.MethodType.UNARY,
    operator_pb.ListMarketsRequest,
    operator_pb.ListMarketsReply,
    (request: operator_pb.ListMarketsRequest) => {
      return request.serializeBinary();
    },
    operator_pb.ListMarketsReply.deserializeBinary
  );

  listMarkets(
    request: operator_pb.ListMarketsRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.ListMarketsReply>;

  listMarkets(
    request: operator_pb.ListMarketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.ListMarketsReply) => void): grpcWeb.ClientReadableStream<operator_pb.ListMarketsReply>;

  listMarkets(
    request: operator_pb.ListMarketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.ListMarketsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ListMarkets',
        request,
        metadata || {},
        this.methodDescriptorListMarkets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ListMarkets',
    request,
    metadata || {},
    this.methodDescriptorListMarkets);
  }

  methodDescriptorListTrades = new grpcWeb.MethodDescriptor(
    '/Operator/ListTrades',
    grpcWeb.MethodType.UNARY,
    operator_pb.ListTradesRequest,
    operator_pb.ListTradesReply,
    (request: operator_pb.ListTradesRequest) => {
      return request.serializeBinary();
    },
    operator_pb.ListTradesReply.deserializeBinary
  );

  listTrades(
    request: operator_pb.ListTradesRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.ListTradesReply>;

  listTrades(
    request: operator_pb.ListTradesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.ListTradesReply) => void): grpcWeb.ClientReadableStream<operator_pb.ListTradesReply>;

  listTrades(
    request: operator_pb.ListTradesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.ListTradesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ListTrades',
        request,
        metadata || {},
        this.methodDescriptorListTrades,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ListTrades',
    request,
    metadata || {},
    this.methodDescriptorListTrades);
  }

  methodDescriptorReloadUtxos = new grpcWeb.MethodDescriptor(
    '/Operator/ReloadUtxos',
    grpcWeb.MethodType.UNARY,
    operator_pb.ReloadUtxosRequest,
    operator_pb.ReloadUtxosReply,
    (request: operator_pb.ReloadUtxosRequest) => {
      return request.serializeBinary();
    },
    operator_pb.ReloadUtxosReply.deserializeBinary
  );

  reloadUtxos(
    request: operator_pb.ReloadUtxosRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.ReloadUtxosReply>;

  reloadUtxos(
    request: operator_pb.ReloadUtxosRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.ReloadUtxosReply) => void): grpcWeb.ClientReadableStream<operator_pb.ReloadUtxosReply>;

  reloadUtxos(
    request: operator_pb.ReloadUtxosRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.ReloadUtxosReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ReloadUtxos',
        request,
        metadata || {},
        this.methodDescriptorReloadUtxos,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ReloadUtxos',
    request,
    metadata || {},
    this.methodDescriptorReloadUtxos);
  }

  methodDescriptorListUtxos = new grpcWeb.MethodDescriptor(
    '/Operator/ListUtxos',
    grpcWeb.MethodType.UNARY,
    operator_pb.ListUtxosRequest,
    operator_pb.ListUtxosReply,
    (request: operator_pb.ListUtxosRequest) => {
      return request.serializeBinary();
    },
    operator_pb.ListUtxosReply.deserializeBinary
  );

  listUtxos(
    request: operator_pb.ListUtxosRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.ListUtxosReply>;

  listUtxos(
    request: operator_pb.ListUtxosRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.ListUtxosReply) => void): grpcWeb.ClientReadableStream<operator_pb.ListUtxosReply>;

  listUtxos(
    request: operator_pb.ListUtxosRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.ListUtxosReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ListUtxos',
        request,
        metadata || {},
        this.methodDescriptorListUtxos,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ListUtxos',
    request,
    metadata || {},
    this.methodDescriptorListUtxos);
  }

  methodDescriptorAddWebhook = new grpcWeb.MethodDescriptor(
    '/Operator/AddWebhook',
    grpcWeb.MethodType.UNARY,
    operator_pb.AddWebhookRequest,
    operator_pb.AddWebhookReply,
    (request: operator_pb.AddWebhookRequest) => {
      return request.serializeBinary();
    },
    operator_pb.AddWebhookReply.deserializeBinary
  );

  addWebhook(
    request: operator_pb.AddWebhookRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.AddWebhookReply>;

  addWebhook(
    request: operator_pb.AddWebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.AddWebhookReply) => void): grpcWeb.ClientReadableStream<operator_pb.AddWebhookReply>;

  addWebhook(
    request: operator_pb.AddWebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.AddWebhookReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/AddWebhook',
        request,
        metadata || {},
        this.methodDescriptorAddWebhook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/AddWebhook',
    request,
    metadata || {},
    this.methodDescriptorAddWebhook);
  }

  methodDescriptorRemoveWebhook = new grpcWeb.MethodDescriptor(
    '/Operator/RemoveWebhook',
    grpcWeb.MethodType.UNARY,
    operator_pb.RemoveWebhookRequest,
    operator_pb.RemoveWebhookReply,
    (request: operator_pb.RemoveWebhookRequest) => {
      return request.serializeBinary();
    },
    operator_pb.RemoveWebhookReply.deserializeBinary
  );

  removeWebhook(
    request: operator_pb.RemoveWebhookRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.RemoveWebhookReply>;

  removeWebhook(
    request: operator_pb.RemoveWebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.RemoveWebhookReply) => void): grpcWeb.ClientReadableStream<operator_pb.RemoveWebhookReply>;

  removeWebhook(
    request: operator_pb.RemoveWebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.RemoveWebhookReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/RemoveWebhook',
        request,
        metadata || {},
        this.methodDescriptorRemoveWebhook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/RemoveWebhook',
    request,
    metadata || {},
    this.methodDescriptorRemoveWebhook);
  }

  methodDescriptorListWebhooks = new grpcWeb.MethodDescriptor(
    '/Operator/ListWebhooks',
    grpcWeb.MethodType.UNARY,
    operator_pb.ListWebhooksRequest,
    operator_pb.ListWebhooksReply,
    (request: operator_pb.ListWebhooksRequest) => {
      return request.serializeBinary();
    },
    operator_pb.ListWebhooksReply.deserializeBinary
  );

  listWebhooks(
    request: operator_pb.ListWebhooksRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.ListWebhooksReply>;

  listWebhooks(
    request: operator_pb.ListWebhooksRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.ListWebhooksReply) => void): grpcWeb.ClientReadableStream<operator_pb.ListWebhooksReply>;

  listWebhooks(
    request: operator_pb.ListWebhooksRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.ListWebhooksReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ListWebhooks',
        request,
        metadata || {},
        this.methodDescriptorListWebhooks,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ListWebhooks',
    request,
    metadata || {},
    this.methodDescriptorListWebhooks);
  }

  methodDescriptorListDeposits = new grpcWeb.MethodDescriptor(
    '/Operator/ListDeposits',
    grpcWeb.MethodType.UNARY,
    operator_pb.ListDepositsRequest,
    operator_pb.ListDepositsReply,
    (request: operator_pb.ListDepositsRequest) => {
      return request.serializeBinary();
    },
    operator_pb.ListDepositsReply.deserializeBinary
  );

  listDeposits(
    request: operator_pb.ListDepositsRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.ListDepositsReply>;

  listDeposits(
    request: operator_pb.ListDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.ListDepositsReply) => void): grpcWeb.ClientReadableStream<operator_pb.ListDepositsReply>;

  listDeposits(
    request: operator_pb.ListDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.ListDepositsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ListDeposits',
        request,
        metadata || {},
        this.methodDescriptorListDeposits,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ListDeposits',
    request,
    metadata || {},
    this.methodDescriptorListDeposits);
  }

  methodDescriptorListWithdrawals = new grpcWeb.MethodDescriptor(
    '/Operator/ListWithdrawals',
    grpcWeb.MethodType.UNARY,
    operator_pb.ListWithdrawalsRequest,
    operator_pb.ListWithdrawalsReply,
    (request: operator_pb.ListWithdrawalsRequest) => {
      return request.serializeBinary();
    },
    operator_pb.ListWithdrawalsReply.deserializeBinary
  );

  listWithdrawals(
    request: operator_pb.ListWithdrawalsRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.ListWithdrawalsReply>;

  listWithdrawals(
    request: operator_pb.ListWithdrawalsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: operator_pb.ListWithdrawalsReply) => void): grpcWeb.ClientReadableStream<operator_pb.ListWithdrawalsReply>;

  listWithdrawals(
    request: operator_pb.ListWithdrawalsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: operator_pb.ListWithdrawalsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ListWithdrawals',
        request,
        metadata || {},
        this.methodDescriptorListWithdrawals,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ListWithdrawals',
    request,
    metadata || {},
    this.methodDescriptorListWithdrawals);
  }

}

