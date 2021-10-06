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

  methodInfoGetInfo = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.GetInfoReply) => void): grpcWeb.ClientReadableStream<operator_pb.GetInfoReply>;

  getInfo(
    request: operator_pb.GetInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.GetInfoReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/GetInfo',
        request,
        metadata || {},
        this.methodInfoGetInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/GetInfo',
    request,
    metadata || {},
    this.methodInfoGetInfo);
  }

  methodInfoGetFeeAddress = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.GetFeeAddressReply) => void): grpcWeb.ClientReadableStream<operator_pb.GetFeeAddressReply>;

  getFeeAddress(
    request: operator_pb.GetFeeAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.GetFeeAddressReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/GetFeeAddress',
        request,
        metadata || {},
        this.methodInfoGetFeeAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/GetFeeAddress',
    request,
    metadata || {},
    this.methodInfoGetFeeAddress);
  }

  methodInfoListFeeAddresses = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.ListFeeAddressesReply) => void): grpcWeb.ClientReadableStream<operator_pb.ListFeeAddressesReply>;

  listFeeAddresses(
    request: operator_pb.ListFeeAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.ListFeeAddressesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ListFeeAddresses',
        request,
        metadata || {},
        this.methodInfoListFeeAddresses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ListFeeAddresses',
    request,
    metadata || {},
    this.methodInfoListFeeAddresses);
  }

  methodInfoGetFeeBalance = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.GetFeeBalanceReply) => void): grpcWeb.ClientReadableStream<operator_pb.GetFeeBalanceReply>;

  getFeeBalance(
    request: operator_pb.GetFeeBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.GetFeeBalanceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/GetFeeBalance',
        request,
        metadata || {},
        this.methodInfoGetFeeBalance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/GetFeeBalance',
    request,
    metadata || {},
    this.methodInfoGetFeeBalance);
  }

  methodInfoClaimFeeDeposits = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.ClaimFeeDepositsReply) => void): grpcWeb.ClientReadableStream<operator_pb.ClaimFeeDepositsReply>;

  claimFeeDeposits(
    request: operator_pb.ClaimFeeDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.ClaimFeeDepositsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ClaimFeeDeposits',
        request,
        metadata || {},
        this.methodInfoClaimFeeDeposits,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ClaimFeeDeposits',
    request,
    metadata || {},
    this.methodInfoClaimFeeDeposits);
  }

  methodInfoWithdrawFee = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.WithdrawFeeReply) => void): grpcWeb.ClientReadableStream<operator_pb.WithdrawFeeReply>;

  withdrawFee(
    request: operator_pb.WithdrawFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.WithdrawFeeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/WithdrawFee',
        request,
        metadata || {},
        this.methodInfoWithdrawFee,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/WithdrawFee',
    request,
    metadata || {},
    this.methodInfoWithdrawFee);
  }

  methodInfoNewMarket = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.NewMarketReply) => void): grpcWeb.ClientReadableStream<operator_pb.NewMarketReply>;

  newMarket(
    request: operator_pb.NewMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.NewMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/NewMarket',
        request,
        metadata || {},
        this.methodInfoNewMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/NewMarket',
    request,
    metadata || {},
    this.methodInfoNewMarket);
  }

  methodInfoGetMarketAddress = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.GetMarketAddressReply) => void): grpcWeb.ClientReadableStream<operator_pb.GetMarketAddressReply>;

  getMarketAddress(
    request: operator_pb.GetMarketAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.GetMarketAddressReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/GetMarketAddress',
        request,
        metadata || {},
        this.methodInfoGetMarketAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/GetMarketAddress',
    request,
    metadata || {},
    this.methodInfoGetMarketAddress);
  }

  methodInfoListMarketAddresses = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.ListMarketAddressesReply) => void): grpcWeb.ClientReadableStream<operator_pb.ListMarketAddressesReply>;

  listMarketAddresses(
    request: operator_pb.ListMarketAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.ListMarketAddressesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ListMarketAddresses',
        request,
        metadata || {},
        this.methodInfoListMarketAddresses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ListMarketAddresses',
    request,
    metadata || {},
    this.methodInfoListMarketAddresses);
  }

  methodInfoGetMarketBalance = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.GetMarketBalanceReply) => void): grpcWeb.ClientReadableStream<operator_pb.GetMarketBalanceReply>;

  getMarketBalance(
    request: operator_pb.GetMarketBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.GetMarketBalanceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/GetMarketBalance',
        request,
        metadata || {},
        this.methodInfoGetMarketBalance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/GetMarketBalance',
    request,
    metadata || {},
    this.methodInfoGetMarketBalance);
  }

  methodInfoClaimMarketDeposits = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.ClaimMarketDepositsReply) => void): grpcWeb.ClientReadableStream<operator_pb.ClaimMarketDepositsReply>;

  claimMarketDeposits(
    request: operator_pb.ClaimMarketDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.ClaimMarketDepositsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ClaimMarketDeposits',
        request,
        metadata || {},
        this.methodInfoClaimMarketDeposits,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ClaimMarketDeposits',
    request,
    metadata || {},
    this.methodInfoClaimMarketDeposits);
  }

  methodInfoOpenMarket = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.OpenMarketReply) => void): grpcWeb.ClientReadableStream<operator_pb.OpenMarketReply>;

  openMarket(
    request: operator_pb.OpenMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.OpenMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/OpenMarket',
        request,
        metadata || {},
        this.methodInfoOpenMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/OpenMarket',
    request,
    metadata || {},
    this.methodInfoOpenMarket);
  }

  methodInfoCloseMarket = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.CloseMarketReply) => void): grpcWeb.ClientReadableStream<operator_pb.CloseMarketReply>;

  closeMarket(
    request: operator_pb.CloseMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.CloseMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/CloseMarket',
        request,
        metadata || {},
        this.methodInfoCloseMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/CloseMarket',
    request,
    metadata || {},
    this.methodInfoCloseMarket);
  }

  methodInfoDropMarket = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.DropMarketReply) => void): grpcWeb.ClientReadableStream<operator_pb.DropMarketReply>;

  dropMarket(
    request: operator_pb.DropMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.DropMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/DropMarket',
        request,
        metadata || {},
        this.methodInfoDropMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/DropMarket',
    request,
    metadata || {},
    this.methodInfoDropMarket);
  }

  methodInfoGetMarketCollectedSwapFees = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.GetMarketCollectedSwapFeesReply) => void): grpcWeb.ClientReadableStream<operator_pb.GetMarketCollectedSwapFeesReply>;

  getMarketCollectedSwapFees(
    request: operator_pb.GetMarketCollectedSwapFeesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.GetMarketCollectedSwapFeesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/GetMarketCollectedSwapFees',
        request,
        metadata || {},
        this.methodInfoGetMarketCollectedSwapFees,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/GetMarketCollectedSwapFees',
    request,
    metadata || {},
    this.methodInfoGetMarketCollectedSwapFees);
  }

  methodInfoWithdrawMarket = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.WithdrawMarketReply) => void): grpcWeb.ClientReadableStream<operator_pb.WithdrawMarketReply>;

  withdrawMarket(
    request: operator_pb.WithdrawMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.WithdrawMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/WithdrawMarket',
        request,
        metadata || {},
        this.methodInfoWithdrawMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/WithdrawMarket',
    request,
    metadata || {},
    this.methodInfoWithdrawMarket);
  }

  methodInfoUpdateMarketPercentageFee = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.UpdateMarketFeeReply) => void): grpcWeb.ClientReadableStream<operator_pb.UpdateMarketFeeReply>;

  updateMarketPercentageFee(
    request: operator_pb.UpdateMarketPercentageFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.UpdateMarketFeeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/UpdateMarketPercentageFee',
        request,
        metadata || {},
        this.methodInfoUpdateMarketPercentageFee,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/UpdateMarketPercentageFee',
    request,
    metadata || {},
    this.methodInfoUpdateMarketPercentageFee);
  }

  methodInfoUpdateMarketFixedFee = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.UpdateMarketFeeReply) => void): grpcWeb.ClientReadableStream<operator_pb.UpdateMarketFeeReply>;

  updateMarketFixedFee(
    request: operator_pb.UpdateMarketFixedFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.UpdateMarketFeeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/UpdateMarketFixedFee',
        request,
        metadata || {},
        this.methodInfoUpdateMarketFixedFee,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/UpdateMarketFixedFee',
    request,
    metadata || {},
    this.methodInfoUpdateMarketFixedFee);
  }

  methodInfoUpdateMarketPrice = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.UpdateMarketPriceReply) => void): grpcWeb.ClientReadableStream<operator_pb.UpdateMarketPriceReply>;

  updateMarketPrice(
    request: operator_pb.UpdateMarketPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.UpdateMarketPriceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/UpdateMarketPrice',
        request,
        metadata || {},
        this.methodInfoUpdateMarketPrice,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/UpdateMarketPrice',
    request,
    metadata || {},
    this.methodInfoUpdateMarketPrice);
  }

  methodInfoUpdateMarketStrategy = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.UpdateMarketStrategyReply) => void): grpcWeb.ClientReadableStream<operator_pb.UpdateMarketStrategyReply>;

  updateMarketStrategy(
    request: operator_pb.UpdateMarketStrategyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.UpdateMarketStrategyReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/UpdateMarketStrategy',
        request,
        metadata || {},
        this.methodInfoUpdateMarketStrategy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/UpdateMarketStrategy',
    request,
    metadata || {},
    this.methodInfoUpdateMarketStrategy);
  }

  methodInfoListMarkets = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.ListMarketsReply) => void): grpcWeb.ClientReadableStream<operator_pb.ListMarketsReply>;

  listMarkets(
    request: operator_pb.ListMarketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.ListMarketsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ListMarkets',
        request,
        metadata || {},
        this.methodInfoListMarkets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ListMarkets',
    request,
    metadata || {},
    this.methodInfoListMarkets);
  }

  methodInfoListTrades = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.ListTradesReply) => void): grpcWeb.ClientReadableStream<operator_pb.ListTradesReply>;

  listTrades(
    request: operator_pb.ListTradesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.ListTradesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ListTrades',
        request,
        metadata || {},
        this.methodInfoListTrades,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ListTrades',
    request,
    metadata || {},
    this.methodInfoListTrades);
  }

  methodInfoReloadUtxos = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.ReloadUtxosReply) => void): grpcWeb.ClientReadableStream<operator_pb.ReloadUtxosReply>;

  reloadUtxos(
    request: operator_pb.ReloadUtxosRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.ReloadUtxosReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ReloadUtxos',
        request,
        metadata || {},
        this.methodInfoReloadUtxos,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ReloadUtxos',
    request,
    metadata || {},
    this.methodInfoReloadUtxos);
  }

  methodInfoListUtxos = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.ListUtxosReply) => void): grpcWeb.ClientReadableStream<operator_pb.ListUtxosReply>;

  listUtxos(
    request: operator_pb.ListUtxosRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.ListUtxosReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ListUtxos',
        request,
        metadata || {},
        this.methodInfoListUtxos,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ListUtxos',
    request,
    metadata || {},
    this.methodInfoListUtxos);
  }

  methodInfoAddWebhook = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.AddWebhookReply) => void): grpcWeb.ClientReadableStream<operator_pb.AddWebhookReply>;

  addWebhook(
    request: operator_pb.AddWebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.AddWebhookReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/AddWebhook',
        request,
        metadata || {},
        this.methodInfoAddWebhook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/AddWebhook',
    request,
    metadata || {},
    this.methodInfoAddWebhook);
  }

  methodInfoRemoveWebhook = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.RemoveWebhookReply) => void): grpcWeb.ClientReadableStream<operator_pb.RemoveWebhookReply>;

  removeWebhook(
    request: operator_pb.RemoveWebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.RemoveWebhookReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/RemoveWebhook',
        request,
        metadata || {},
        this.methodInfoRemoveWebhook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/RemoveWebhook',
    request,
    metadata || {},
    this.methodInfoRemoveWebhook);
  }

  methodInfoListWebhooks = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.ListWebhooksReply) => void): grpcWeb.ClientReadableStream<operator_pb.ListWebhooksReply>;

  listWebhooks(
    request: operator_pb.ListWebhooksRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.ListWebhooksReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ListWebhooks',
        request,
        metadata || {},
        this.methodInfoListWebhooks,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ListWebhooks',
    request,
    metadata || {},
    this.methodInfoListWebhooks);
  }

  methodInfoListDeposits = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.ListDepositsReply) => void): grpcWeb.ClientReadableStream<operator_pb.ListDepositsReply>;

  listDeposits(
    request: operator_pb.ListDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.ListDepositsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ListDeposits',
        request,
        metadata || {},
        this.methodInfoListDeposits,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ListDeposits',
    request,
    metadata || {},
    this.methodInfoListDeposits);
  }

  methodInfoListWithdrawals = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: operator_pb.ListWithdrawalsReply) => void): grpcWeb.ClientReadableStream<operator_pb.ListWithdrawalsReply>;

  listWithdrawals(
    request: operator_pb.ListWithdrawalsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.ListWithdrawalsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ListWithdrawals',
        request,
        metadata || {},
        this.methodInfoListWithdrawals,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ListWithdrawals',
    request,
    metadata || {},
    this.methodInfoListWithdrawals);
  }

}

