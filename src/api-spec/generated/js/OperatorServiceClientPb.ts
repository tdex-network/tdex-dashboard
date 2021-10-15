/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as types_pb from './types_pb';

import {
  AddWebhookReply,
  AddWebhookRequest,
  ClaimFeeDepositsReply,
  ClaimFeeDepositsRequest,
  ClaimMarketDepositsReply,
  ClaimMarketDepositsRequest,
  CloseMarketReply,
  CloseMarketRequest,
  DropMarketReply,
  DropMarketRequest,
  GetFeeAddressReply,
  GetFeeAddressRequest,
  GetFeeBalanceReply,
  GetFeeBalanceRequest,
  GetInfoReply,
  GetInfoRequest,
  GetMarketAddressReply,
  GetMarketAddressRequest,
  GetMarketBalanceReply,
  GetMarketBalanceRequest,
  GetMarketCollectedSwapFeesReply,
  GetMarketCollectedSwapFeesRequest,
  ListDepositsReply,
  ListDepositsRequest,
  ListFeeAddressesReply,
  ListFeeAddressesRequest,
  ListMarketAddressesReply,
  ListMarketAddressesRequest,
  ListMarketsReply,
  ListMarketsRequest,
  ListTradesReply,
  ListTradesRequest,
  ListUtxosReply,
  ListUtxosRequest,
  ListWebhooksReply,
  ListWebhooksRequest,
  ListWithdrawalsReply,
  ListWithdrawalsRequest,
  NewMarketReply,
  NewMarketRequest,
  OpenMarketReply,
  OpenMarketRequest,
  ReloadUtxosReply,
  ReloadUtxosRequest,
  RemoveWebhookReply,
  RemoveWebhookRequest,
  UpdateMarketFeeReply,
  UpdateMarketFixedFeeRequest,
  UpdateMarketPercentageFeeRequest,
  UpdateMarketPriceReply,
  UpdateMarketPriceRequest,
  UpdateMarketStrategyReply,
  UpdateMarketStrategyRequest,
  WithdrawFeeReply,
  WithdrawFeeRequest,
  WithdrawMarketReply,
  WithdrawMarketRequest} from './operator_pb';

export class OperatorClient {
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

  methodInfoGetInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    GetInfoReply,
    (request: GetInfoRequest) => {
      return request.serializeBinary();
    },
    GetInfoReply.deserializeBinary
  );

  getInfo(
    request: GetInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetInfoReply>;

  getInfo(
    request: GetInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetInfoReply) => void): grpcWeb.ClientReadableStream<GetInfoReply>;

  getInfo(
    request: GetInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetInfoReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/GetInfo', this.hostname_).toString(),
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
    GetFeeAddressReply,
    (request: GetFeeAddressRequest) => {
      return request.serializeBinary();
    },
    GetFeeAddressReply.deserializeBinary
  );

  getFeeAddress(
    request: GetFeeAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetFeeAddressReply>;

  getFeeAddress(
    request: GetFeeAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetFeeAddressReply) => void): grpcWeb.ClientReadableStream<GetFeeAddressReply>;

  getFeeAddress(
    request: GetFeeAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetFeeAddressReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/GetFeeAddress', this.hostname_).toString(),
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
    ListFeeAddressesReply,
    (request: ListFeeAddressesRequest) => {
      return request.serializeBinary();
    },
    ListFeeAddressesReply.deserializeBinary
  );

  listFeeAddresses(
    request: ListFeeAddressesRequest,
    metadata: grpcWeb.Metadata | null): Promise<ListFeeAddressesReply>;

  listFeeAddresses(
    request: ListFeeAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListFeeAddressesReply) => void): grpcWeb.ClientReadableStream<ListFeeAddressesReply>;

  listFeeAddresses(
    request: ListFeeAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ListFeeAddressesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/ListFeeAddresses', this.hostname_).toString(),
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
    GetFeeBalanceReply,
    (request: GetFeeBalanceRequest) => {
      return request.serializeBinary();
    },
    GetFeeBalanceReply.deserializeBinary
  );

  getFeeBalance(
    request: GetFeeBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetFeeBalanceReply>;

  getFeeBalance(
    request: GetFeeBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetFeeBalanceReply) => void): grpcWeb.ClientReadableStream<GetFeeBalanceReply>;

  getFeeBalance(
    request: GetFeeBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetFeeBalanceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/GetFeeBalance', this.hostname_).toString(),
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
    ClaimFeeDepositsReply,
    (request: ClaimFeeDepositsRequest) => {
      return request.serializeBinary();
    },
    ClaimFeeDepositsReply.deserializeBinary
  );

  claimFeeDeposits(
    request: ClaimFeeDepositsRequest,
    metadata: grpcWeb.Metadata | null): Promise<ClaimFeeDepositsReply>;

  claimFeeDeposits(
    request: ClaimFeeDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ClaimFeeDepositsReply) => void): grpcWeb.ClientReadableStream<ClaimFeeDepositsReply>;

  claimFeeDeposits(
    request: ClaimFeeDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ClaimFeeDepositsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/ClaimFeeDeposits', this.hostname_).toString(),
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
    WithdrawFeeReply,
    (request: WithdrawFeeRequest) => {
      return request.serializeBinary();
    },
    WithdrawFeeReply.deserializeBinary
  );

  withdrawFee(
    request: WithdrawFeeRequest,
    metadata: grpcWeb.Metadata | null): Promise<WithdrawFeeReply>;

  withdrawFee(
    request: WithdrawFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: WithdrawFeeReply) => void): grpcWeb.ClientReadableStream<WithdrawFeeReply>;

  withdrawFee(
    request: WithdrawFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: WithdrawFeeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/WithdrawFee', this.hostname_).toString(),
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
    NewMarketReply,
    (request: NewMarketRequest) => {
      return request.serializeBinary();
    },
    NewMarketReply.deserializeBinary
  );

  newMarket(
    request: NewMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<NewMarketReply>;

  newMarket(
    request: NewMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: NewMarketReply) => void): grpcWeb.ClientReadableStream<NewMarketReply>;

  newMarket(
    request: NewMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: NewMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/NewMarket', this.hostname_).toString(),
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
    GetMarketAddressReply,
    (request: GetMarketAddressRequest) => {
      return request.serializeBinary();
    },
    GetMarketAddressReply.deserializeBinary
  );

  getMarketAddress(
    request: GetMarketAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetMarketAddressReply>;

  getMarketAddress(
    request: GetMarketAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetMarketAddressReply) => void): grpcWeb.ClientReadableStream<GetMarketAddressReply>;

  getMarketAddress(
    request: GetMarketAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetMarketAddressReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/GetMarketAddress', this.hostname_).toString(),
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
    ListMarketAddressesReply,
    (request: ListMarketAddressesRequest) => {
      return request.serializeBinary();
    },
    ListMarketAddressesReply.deserializeBinary
  );

  listMarketAddresses(
    request: ListMarketAddressesRequest,
    metadata: grpcWeb.Metadata | null): Promise<ListMarketAddressesReply>;

  listMarketAddresses(
    request: ListMarketAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListMarketAddressesReply) => void): grpcWeb.ClientReadableStream<ListMarketAddressesReply>;

  listMarketAddresses(
    request: ListMarketAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ListMarketAddressesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/ListMarketAddresses', this.hostname_).toString(),
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
    GetMarketBalanceReply,
    (request: GetMarketBalanceRequest) => {
      return request.serializeBinary();
    },
    GetMarketBalanceReply.deserializeBinary
  );

  getMarketBalance(
    request: GetMarketBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetMarketBalanceReply>;

  getMarketBalance(
    request: GetMarketBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetMarketBalanceReply) => void): grpcWeb.ClientReadableStream<GetMarketBalanceReply>;

  getMarketBalance(
    request: GetMarketBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetMarketBalanceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/GetMarketBalance', this.hostname_).toString(),
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
    ClaimMarketDepositsReply,
    (request: ClaimMarketDepositsRequest) => {
      return request.serializeBinary();
    },
    ClaimMarketDepositsReply.deserializeBinary
  );

  claimMarketDeposits(
    request: ClaimMarketDepositsRequest,
    metadata: grpcWeb.Metadata | null): Promise<ClaimMarketDepositsReply>;

  claimMarketDeposits(
    request: ClaimMarketDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ClaimMarketDepositsReply) => void): grpcWeb.ClientReadableStream<ClaimMarketDepositsReply>;

  claimMarketDeposits(
    request: ClaimMarketDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ClaimMarketDepositsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/ClaimMarketDeposits', this.hostname_).toString(),
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
    OpenMarketReply,
    (request: OpenMarketRequest) => {
      return request.serializeBinary();
    },
    OpenMarketReply.deserializeBinary
  );

  openMarket(
    request: OpenMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<OpenMarketReply>;

  openMarket(
    request: OpenMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: OpenMarketReply) => void): grpcWeb.ClientReadableStream<OpenMarketReply>;

  openMarket(
    request: OpenMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: OpenMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/OpenMarket', this.hostname_).toString(),
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
    CloseMarketReply,
    (request: CloseMarketRequest) => {
      return request.serializeBinary();
    },
    CloseMarketReply.deserializeBinary
  );

  closeMarket(
    request: CloseMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<CloseMarketReply>;

  closeMarket(
    request: CloseMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CloseMarketReply) => void): grpcWeb.ClientReadableStream<CloseMarketReply>;

  closeMarket(
    request: CloseMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: CloseMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/CloseMarket', this.hostname_).toString(),
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
    DropMarketReply,
    (request: DropMarketRequest) => {
      return request.serializeBinary();
    },
    DropMarketReply.deserializeBinary
  );

  dropMarket(
    request: DropMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<DropMarketReply>;

  dropMarket(
    request: DropMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DropMarketReply) => void): grpcWeb.ClientReadableStream<DropMarketReply>;

  dropMarket(
    request: DropMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: DropMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/DropMarket', this.hostname_).toString(),
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
    GetMarketCollectedSwapFeesReply,
    (request: GetMarketCollectedSwapFeesRequest) => {
      return request.serializeBinary();
    },
    GetMarketCollectedSwapFeesReply.deserializeBinary
  );

  getMarketCollectedSwapFees(
    request: GetMarketCollectedSwapFeesRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetMarketCollectedSwapFeesReply>;

  getMarketCollectedSwapFees(
    request: GetMarketCollectedSwapFeesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetMarketCollectedSwapFeesReply) => void): grpcWeb.ClientReadableStream<GetMarketCollectedSwapFeesReply>;

  getMarketCollectedSwapFees(
    request: GetMarketCollectedSwapFeesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetMarketCollectedSwapFeesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/GetMarketCollectedSwapFees', this.hostname_).toString(),
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
    WithdrawMarketReply,
    (request: WithdrawMarketRequest) => {
      return request.serializeBinary();
    },
    WithdrawMarketReply.deserializeBinary
  );

  withdrawMarket(
    request: WithdrawMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<WithdrawMarketReply>;

  withdrawMarket(
    request: WithdrawMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: WithdrawMarketReply) => void): grpcWeb.ClientReadableStream<WithdrawMarketReply>;

  withdrawMarket(
    request: WithdrawMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: WithdrawMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/WithdrawMarket', this.hostname_).toString(),
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
    UpdateMarketFeeReply,
    (request: UpdateMarketPercentageFeeRequest) => {
      return request.serializeBinary();
    },
    UpdateMarketFeeReply.deserializeBinary
  );

  updateMarketPercentageFee(
    request: UpdateMarketPercentageFeeRequest,
    metadata: grpcWeb.Metadata | null): Promise<UpdateMarketFeeReply>;

  updateMarketPercentageFee(
    request: UpdateMarketPercentageFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateMarketFeeReply) => void): grpcWeb.ClientReadableStream<UpdateMarketFeeReply>;

  updateMarketPercentageFee(
    request: UpdateMarketPercentageFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: UpdateMarketFeeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/UpdateMarketPercentageFee', this.hostname_).toString(),
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
    UpdateMarketFeeReply,
    (request: UpdateMarketFixedFeeRequest) => {
      return request.serializeBinary();
    },
    UpdateMarketFeeReply.deserializeBinary
  );

  updateMarketFixedFee(
    request: UpdateMarketFixedFeeRequest,
    metadata: grpcWeb.Metadata | null): Promise<UpdateMarketFeeReply>;

  updateMarketFixedFee(
    request: UpdateMarketFixedFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateMarketFeeReply) => void): grpcWeb.ClientReadableStream<UpdateMarketFeeReply>;

  updateMarketFixedFee(
    request: UpdateMarketFixedFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: UpdateMarketFeeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/UpdateMarketFixedFee', this.hostname_).toString(),
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
    UpdateMarketPriceReply,
    (request: UpdateMarketPriceRequest) => {
      return request.serializeBinary();
    },
    UpdateMarketPriceReply.deserializeBinary
  );

  updateMarketPrice(
    request: UpdateMarketPriceRequest,
    metadata: grpcWeb.Metadata | null): Promise<UpdateMarketPriceReply>;

  updateMarketPrice(
    request: UpdateMarketPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateMarketPriceReply) => void): grpcWeb.ClientReadableStream<UpdateMarketPriceReply>;

  updateMarketPrice(
    request: UpdateMarketPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: UpdateMarketPriceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/UpdateMarketPrice', this.hostname_).toString(),
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
    UpdateMarketStrategyReply,
    (request: UpdateMarketStrategyRequest) => {
      return request.serializeBinary();
    },
    UpdateMarketStrategyReply.deserializeBinary
  );

  updateMarketStrategy(
    request: UpdateMarketStrategyRequest,
    metadata: grpcWeb.Metadata | null): Promise<UpdateMarketStrategyReply>;

  updateMarketStrategy(
    request: UpdateMarketStrategyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateMarketStrategyReply) => void): grpcWeb.ClientReadableStream<UpdateMarketStrategyReply>;

  updateMarketStrategy(
    request: UpdateMarketStrategyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: UpdateMarketStrategyReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/UpdateMarketStrategy', this.hostname_).toString(),
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
    ListMarketsReply,
    (request: ListMarketsRequest) => {
      return request.serializeBinary();
    },
    ListMarketsReply.deserializeBinary
  );

  listMarkets(
    request: ListMarketsRequest,
    metadata: grpcWeb.Metadata | null): Promise<ListMarketsReply>;

  listMarkets(
    request: ListMarketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListMarketsReply) => void): grpcWeb.ClientReadableStream<ListMarketsReply>;

  listMarkets(
    request: ListMarketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ListMarketsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/ListMarkets', this.hostname_).toString(),
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
    ListTradesReply,
    (request: ListTradesRequest) => {
      return request.serializeBinary();
    },
    ListTradesReply.deserializeBinary
  );

  listTrades(
    request: ListTradesRequest,
    metadata: grpcWeb.Metadata | null): Promise<ListTradesReply>;

  listTrades(
    request: ListTradesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListTradesReply) => void): grpcWeb.ClientReadableStream<ListTradesReply>;

  listTrades(
    request: ListTradesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ListTradesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/ListTrades', this.hostname_).toString(),
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
    ReloadUtxosReply,
    (request: ReloadUtxosRequest) => {
      return request.serializeBinary();
    },
    ReloadUtxosReply.deserializeBinary
  );

  reloadUtxos(
    request: ReloadUtxosRequest,
    metadata: grpcWeb.Metadata | null): Promise<ReloadUtxosReply>;

  reloadUtxos(
    request: ReloadUtxosRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ReloadUtxosReply) => void): grpcWeb.ClientReadableStream<ReloadUtxosReply>;

  reloadUtxos(
    request: ReloadUtxosRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ReloadUtxosReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/ReloadUtxos', this.hostname_).toString(),
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
    ListUtxosReply,
    (request: ListUtxosRequest) => {
      return request.serializeBinary();
    },
    ListUtxosReply.deserializeBinary
  );

  listUtxos(
    request: ListUtxosRequest,
    metadata: grpcWeb.Metadata | null): Promise<ListUtxosReply>;

  listUtxos(
    request: ListUtxosRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListUtxosReply) => void): grpcWeb.ClientReadableStream<ListUtxosReply>;

  listUtxos(
    request: ListUtxosRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ListUtxosReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/ListUtxos', this.hostname_).toString(),
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
    AddWebhookReply,
    (request: AddWebhookRequest) => {
      return request.serializeBinary();
    },
    AddWebhookReply.deserializeBinary
  );

  addWebhook(
    request: AddWebhookRequest,
    metadata: grpcWeb.Metadata | null): Promise<AddWebhookReply>;

  addWebhook(
    request: AddWebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AddWebhookReply) => void): grpcWeb.ClientReadableStream<AddWebhookReply>;

  addWebhook(
    request: AddWebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: AddWebhookReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/AddWebhook', this.hostname_).toString(),
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
    RemoveWebhookReply,
    (request: RemoveWebhookRequest) => {
      return request.serializeBinary();
    },
    RemoveWebhookReply.deserializeBinary
  );

  removeWebhook(
    request: RemoveWebhookRequest,
    metadata: grpcWeb.Metadata | null): Promise<RemoveWebhookReply>;

  removeWebhook(
    request: RemoveWebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RemoveWebhookReply) => void): grpcWeb.ClientReadableStream<RemoveWebhookReply>;

  removeWebhook(
    request: RemoveWebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: RemoveWebhookReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/RemoveWebhook', this.hostname_).toString(),
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
    ListWebhooksReply,
    (request: ListWebhooksRequest) => {
      return request.serializeBinary();
    },
    ListWebhooksReply.deserializeBinary
  );

  listWebhooks(
    request: ListWebhooksRequest,
    metadata: grpcWeb.Metadata | null): Promise<ListWebhooksReply>;

  listWebhooks(
    request: ListWebhooksRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListWebhooksReply) => void): grpcWeb.ClientReadableStream<ListWebhooksReply>;

  listWebhooks(
    request: ListWebhooksRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ListWebhooksReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/ListWebhooks', this.hostname_).toString(),
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
    ListDepositsReply,
    (request: ListDepositsRequest) => {
      return request.serializeBinary();
    },
    ListDepositsReply.deserializeBinary
  );

  listDeposits(
    request: ListDepositsRequest,
    metadata: grpcWeb.Metadata | null): Promise<ListDepositsReply>;

  listDeposits(
    request: ListDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListDepositsReply) => void): grpcWeb.ClientReadableStream<ListDepositsReply>;

  listDeposits(
    request: ListDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ListDepositsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/ListDeposits', this.hostname_).toString(),
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
    ListWithdrawalsReply,
    (request: ListWithdrawalsRequest) => {
      return request.serializeBinary();
    },
    ListWithdrawalsReply.deserializeBinary
  );

  listWithdrawals(
    request: ListWithdrawalsRequest,
    metadata: grpcWeb.Metadata | null): Promise<ListWithdrawalsReply>;

  listWithdrawals(
    request: ListWithdrawalsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListWithdrawalsReply) => void): grpcWeb.ClientReadableStream<ListWithdrawalsReply>;

  listWithdrawals(
    request: ListWithdrawalsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ListWithdrawalsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/ListWithdrawals', this.hostname_).toString(),
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

