/**
 * @fileoverview gRPC-Web generated client stub for tdex.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as tdex_v1_trade_pb from '../../tdex/v1/trade_pb';


export class TradeServiceClient {
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

  methodDescriptorListMarkets = new grpcWeb.MethodDescriptor(
    '/tdex.v1.TradeService/ListMarkets',
    grpcWeb.MethodType.UNARY,
    tdex_v1_trade_pb.ListMarketsRequest,
    tdex_v1_trade_pb.ListMarketsResponse,
    (request: tdex_v1_trade_pb.ListMarketsRequest) => {
      return request.serializeBinary();
    },
    tdex_v1_trade_pb.ListMarketsResponse.deserializeBinary
  );

  listMarkets(
    request: tdex_v1_trade_pb.ListMarketsRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex_v1_trade_pb.ListMarketsResponse>;

  listMarkets(
    request: tdex_v1_trade_pb.ListMarketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex_v1_trade_pb.ListMarketsResponse) => void): grpcWeb.ClientReadableStream<tdex_v1_trade_pb.ListMarketsResponse>;

  listMarkets(
    request: tdex_v1_trade_pb.ListMarketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex_v1_trade_pb.ListMarketsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.v1.TradeService/ListMarkets',
        request,
        metadata || {},
        this.methodDescriptorListMarkets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.v1.TradeService/ListMarkets',
    request,
    metadata || {},
    this.methodDescriptorListMarkets);
  }

  methodDescriptorGetMarketBalance = new grpcWeb.MethodDescriptor(
    '/tdex.v1.TradeService/GetMarketBalance',
    grpcWeb.MethodType.UNARY,
    tdex_v1_trade_pb.GetMarketBalanceRequest,
    tdex_v1_trade_pb.GetMarketBalanceResponse,
    (request: tdex_v1_trade_pb.GetMarketBalanceRequest) => {
      return request.serializeBinary();
    },
    tdex_v1_trade_pb.GetMarketBalanceResponse.deserializeBinary
  );

  getMarketBalance(
    request: tdex_v1_trade_pb.GetMarketBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex_v1_trade_pb.GetMarketBalanceResponse>;

  getMarketBalance(
    request: tdex_v1_trade_pb.GetMarketBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex_v1_trade_pb.GetMarketBalanceResponse) => void): grpcWeb.ClientReadableStream<tdex_v1_trade_pb.GetMarketBalanceResponse>;

  getMarketBalance(
    request: tdex_v1_trade_pb.GetMarketBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex_v1_trade_pb.GetMarketBalanceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.v1.TradeService/GetMarketBalance',
        request,
        metadata || {},
        this.methodDescriptorGetMarketBalance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.v1.TradeService/GetMarketBalance',
    request,
    metadata || {},
    this.methodDescriptorGetMarketBalance);
  }

  methodDescriptorPreviewTrade = new grpcWeb.MethodDescriptor(
    '/tdex.v1.TradeService/PreviewTrade',
    grpcWeb.MethodType.UNARY,
    tdex_v1_trade_pb.PreviewTradeRequest,
    tdex_v1_trade_pb.PreviewTradeResponse,
    (request: tdex_v1_trade_pb.PreviewTradeRequest) => {
      return request.serializeBinary();
    },
    tdex_v1_trade_pb.PreviewTradeResponse.deserializeBinary
  );

  previewTrade(
    request: tdex_v1_trade_pb.PreviewTradeRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex_v1_trade_pb.PreviewTradeResponse>;

  previewTrade(
    request: tdex_v1_trade_pb.PreviewTradeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex_v1_trade_pb.PreviewTradeResponse) => void): grpcWeb.ClientReadableStream<tdex_v1_trade_pb.PreviewTradeResponse>;

  previewTrade(
    request: tdex_v1_trade_pb.PreviewTradeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex_v1_trade_pb.PreviewTradeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.v1.TradeService/PreviewTrade',
        request,
        metadata || {},
        this.methodDescriptorPreviewTrade,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.v1.TradeService/PreviewTrade',
    request,
    metadata || {},
    this.methodDescriptorPreviewTrade);
  }

  methodDescriptorProposeTrade = new grpcWeb.MethodDescriptor(
    '/tdex.v1.TradeService/ProposeTrade',
    grpcWeb.MethodType.UNARY,
    tdex_v1_trade_pb.ProposeTradeRequest,
    tdex_v1_trade_pb.ProposeTradeResponse,
    (request: tdex_v1_trade_pb.ProposeTradeRequest) => {
      return request.serializeBinary();
    },
    tdex_v1_trade_pb.ProposeTradeResponse.deserializeBinary
  );

  proposeTrade(
    request: tdex_v1_trade_pb.ProposeTradeRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex_v1_trade_pb.ProposeTradeResponse>;

  proposeTrade(
    request: tdex_v1_trade_pb.ProposeTradeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex_v1_trade_pb.ProposeTradeResponse) => void): grpcWeb.ClientReadableStream<tdex_v1_trade_pb.ProposeTradeResponse>;

  proposeTrade(
    request: tdex_v1_trade_pb.ProposeTradeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex_v1_trade_pb.ProposeTradeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.v1.TradeService/ProposeTrade',
        request,
        metadata || {},
        this.methodDescriptorProposeTrade,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.v1.TradeService/ProposeTrade',
    request,
    metadata || {},
    this.methodDescriptorProposeTrade);
  }

  methodDescriptorCompleteTrade = new grpcWeb.MethodDescriptor(
    '/tdex.v1.TradeService/CompleteTrade',
    grpcWeb.MethodType.UNARY,
    tdex_v1_trade_pb.CompleteTradeRequest,
    tdex_v1_trade_pb.CompleteTradeResponse,
    (request: tdex_v1_trade_pb.CompleteTradeRequest) => {
      return request.serializeBinary();
    },
    tdex_v1_trade_pb.CompleteTradeResponse.deserializeBinary
  );

  completeTrade(
    request: tdex_v1_trade_pb.CompleteTradeRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex_v1_trade_pb.CompleteTradeResponse>;

  completeTrade(
    request: tdex_v1_trade_pb.CompleteTradeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex_v1_trade_pb.CompleteTradeResponse) => void): grpcWeb.ClientReadableStream<tdex_v1_trade_pb.CompleteTradeResponse>;

  completeTrade(
    request: tdex_v1_trade_pb.CompleteTradeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex_v1_trade_pb.CompleteTradeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.v1.TradeService/CompleteTrade',
        request,
        metadata || {},
        this.methodDescriptorCompleteTrade,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.v1.TradeService/CompleteTrade',
    request,
    metadata || {},
    this.methodDescriptorCompleteTrade);
  }

}

