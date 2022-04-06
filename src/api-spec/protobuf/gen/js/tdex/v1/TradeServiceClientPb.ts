/**
 * @fileoverview gRPC-Web generated client stub for tdex.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

import * as grpcWeb from 'grpc-web';

import * as tdex_v1_trade_pb from './trade_pb';

export class TradeClient {
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

  methodDescriptorMarkets = new grpcWeb.MethodDescriptor(
    '/tdex.v1.Trade/Markets',
    grpcWeb.MethodType.UNARY,
    tdex_v1_trade_pb.MarketsRequest,
    tdex_v1_trade_pb.MarketsReply,
    (request: tdex_v1_trade_pb.MarketsRequest) => {
      return request.serializeBinary();
    },
    tdex_v1_trade_pb.MarketsReply.deserializeBinary
  );

  markets(
    request: tdex_v1_trade_pb.MarketsRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<tdex_v1_trade_pb.MarketsReply>;

  markets(
    request: tdex_v1_trade_pb.MarketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError, response: tdex_v1_trade_pb.MarketsReply) => void
  ): grpcWeb.ClientReadableStream<tdex_v1_trade_pb.MarketsReply>;

  markets(
    request: tdex_v1_trade_pb.MarketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError, response: tdex_v1_trade_pb.MarketsReply) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + '/tdex.v1.Trade/Markets',
        request,
        metadata || {},
        this.methodDescriptorMarkets,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + '/tdex.v1.Trade/Markets',
      request,
      metadata || {},
      this.methodDescriptorMarkets
    );
  }

  methodDescriptorBalances = new grpcWeb.MethodDescriptor(
    '/tdex.v1.Trade/Balances',
    grpcWeb.MethodType.UNARY,
    tdex_v1_trade_pb.BalancesRequest,
    tdex_v1_trade_pb.BalancesReply,
    (request: tdex_v1_trade_pb.BalancesRequest) => {
      return request.serializeBinary();
    },
    tdex_v1_trade_pb.BalancesReply.deserializeBinary
  );

  balances(
    request: tdex_v1_trade_pb.BalancesRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<tdex_v1_trade_pb.BalancesReply>;

  balances(
    request: tdex_v1_trade_pb.BalancesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError, response: tdex_v1_trade_pb.BalancesReply) => void
  ): grpcWeb.ClientReadableStream<tdex_v1_trade_pb.BalancesReply>;

  balances(
    request: tdex_v1_trade_pb.BalancesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError, response: tdex_v1_trade_pb.BalancesReply) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + '/tdex.v1.Trade/Balances',
        request,
        metadata || {},
        this.methodDescriptorBalances,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + '/tdex.v1.Trade/Balances',
      request,
      metadata || {},
      this.methodDescriptorBalances
    );
  }

  methodDescriptorMarketPrice = new grpcWeb.MethodDescriptor(
    '/tdex.v1.Trade/MarketPrice',
    grpcWeb.MethodType.UNARY,
    tdex_v1_trade_pb.MarketPriceRequest,
    tdex_v1_trade_pb.MarketPriceReply,
    (request: tdex_v1_trade_pb.MarketPriceRequest) => {
      return request.serializeBinary();
    },
    tdex_v1_trade_pb.MarketPriceReply.deserializeBinary
  );

  marketPrice(
    request: tdex_v1_trade_pb.MarketPriceRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<tdex_v1_trade_pb.MarketPriceReply>;

  marketPrice(
    request: tdex_v1_trade_pb.MarketPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError, response: tdex_v1_trade_pb.MarketPriceReply) => void
  ): grpcWeb.ClientReadableStream<tdex_v1_trade_pb.MarketPriceReply>;

  marketPrice(
    request: tdex_v1_trade_pb.MarketPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError, response: tdex_v1_trade_pb.MarketPriceReply) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + '/tdex.v1.Trade/MarketPrice',
        request,
        metadata || {},
        this.methodDescriptorMarketPrice,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + '/tdex.v1.Trade/MarketPrice',
      request,
      metadata || {},
      this.methodDescriptorMarketPrice
    );
  }

  methodDescriptorTradePropose = new grpcWeb.MethodDescriptor(
    '/tdex.v1.Trade/TradePropose',
    grpcWeb.MethodType.SERVER_STREAMING,
    tdex_v1_trade_pb.TradeProposeRequest,
    tdex_v1_trade_pb.TradeProposeReply,
    (request: tdex_v1_trade_pb.TradeProposeRequest) => {
      return request.serializeBinary();
    },
    tdex_v1_trade_pb.TradeProposeReply.deserializeBinary
  );

  tradePropose(
    request: tdex_v1_trade_pb.TradeProposeRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<tdex_v1_trade_pb.TradeProposeReply> {
    return this.client_.serverStreaming(
      this.hostname_ + '/tdex.v1.Trade/TradePropose',
      request,
      metadata || {},
      this.methodDescriptorTradePropose
    );
  }

  methodDescriptorProposeTrade = new grpcWeb.MethodDescriptor(
    '/tdex.v1.Trade/ProposeTrade',
    grpcWeb.MethodType.UNARY,
    tdex_v1_trade_pb.ProposeTradeRequest,
    tdex_v1_trade_pb.ProposeTradeReply,
    (request: tdex_v1_trade_pb.ProposeTradeRequest) => {
      return request.serializeBinary();
    },
    tdex_v1_trade_pb.ProposeTradeReply.deserializeBinary
  );

  proposeTrade(
    request: tdex_v1_trade_pb.ProposeTradeRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<tdex_v1_trade_pb.ProposeTradeReply>;

  proposeTrade(
    request: tdex_v1_trade_pb.ProposeTradeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError, response: tdex_v1_trade_pb.ProposeTradeReply) => void
  ): grpcWeb.ClientReadableStream<tdex_v1_trade_pb.ProposeTradeReply>;

  proposeTrade(
    request: tdex_v1_trade_pb.ProposeTradeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError, response: tdex_v1_trade_pb.ProposeTradeReply) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + '/tdex.v1.Trade/ProposeTrade',
        request,
        metadata || {},
        this.methodDescriptorProposeTrade,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + '/tdex.v1.Trade/ProposeTrade',
      request,
      metadata || {},
      this.methodDescriptorProposeTrade
    );
  }

  methodDescriptorTradeComplete = new grpcWeb.MethodDescriptor(
    '/tdex.v1.Trade/TradeComplete',
    grpcWeb.MethodType.SERVER_STREAMING,
    tdex_v1_trade_pb.TradeCompleteRequest,
    tdex_v1_trade_pb.TradeCompleteReply,
    (request: tdex_v1_trade_pb.TradeCompleteRequest) => {
      return request.serializeBinary();
    },
    tdex_v1_trade_pb.TradeCompleteReply.deserializeBinary
  );

  tradeComplete(
    request: tdex_v1_trade_pb.TradeCompleteRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<tdex_v1_trade_pb.TradeCompleteReply> {
    return this.client_.serverStreaming(
      this.hostname_ + '/tdex.v1.Trade/TradeComplete',
      request,
      metadata || {},
      this.methodDescriptorTradeComplete
    );
  }

  methodDescriptorCompleteTrade = new grpcWeb.MethodDescriptor(
    '/tdex.v1.Trade/CompleteTrade',
    grpcWeb.MethodType.UNARY,
    tdex_v1_trade_pb.CompleteTradeRequest,
    tdex_v1_trade_pb.CompleteTradeReply,
    (request: tdex_v1_trade_pb.CompleteTradeRequest) => {
      return request.serializeBinary();
    },
    tdex_v1_trade_pb.CompleteTradeReply.deserializeBinary
  );

  completeTrade(
    request: tdex_v1_trade_pb.CompleteTradeRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<tdex_v1_trade_pb.CompleteTradeReply>;

  completeTrade(
    request: tdex_v1_trade_pb.CompleteTradeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError, response: tdex_v1_trade_pb.CompleteTradeReply) => void
  ): grpcWeb.ClientReadableStream<tdex_v1_trade_pb.CompleteTradeReply>;

  completeTrade(
    request: tdex_v1_trade_pb.CompleteTradeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError, response: tdex_v1_trade_pb.CompleteTradeReply) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + '/tdex.v1.Trade/CompleteTrade',
        request,
        metadata || {},
        this.methodDescriptorCompleteTrade,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + '/tdex.v1.Trade/CompleteTrade',
      request,
      metadata || {},
      this.methodDescriptorCompleteTrade
    );
  }
}
