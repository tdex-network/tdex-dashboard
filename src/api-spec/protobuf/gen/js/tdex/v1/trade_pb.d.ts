import * as jspb from 'google-protobuf';

import * as google_api_annotations_pb from '../../google/api/annotations_pb';

import type * as tdex_v1_swap_pb from './swap_pb';
import type * as tdex_v1_types_pb from './types_pb';

export class MarketsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketsRequest): MarketsRequest.AsObject;
  static serializeBinaryToWriter(message: MarketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketsRequest;
  static deserializeBinaryFromReader(message: MarketsRequest, reader: jspb.BinaryReader): MarketsRequest;
}

export namespace MarketsRequest {
  export type AsObject = {};
}

export class MarketsReply extends jspb.Message {
  getMarketsList(): tdex_v1_types_pb.MarketWithFee[];
  setMarketsList(value: tdex_v1_types_pb.MarketWithFee[]): MarketsReply;
  clearMarketsList(): MarketsReply;
  addMarkets(value?: tdex_v1_types_pb.MarketWithFee, index?: number): tdex_v1_types_pb.MarketWithFee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketsReply.AsObject;
  static toObject(includeInstance: boolean, msg: MarketsReply): MarketsReply.AsObject;
  static serializeBinaryToWriter(message: MarketsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketsReply;
  static deserializeBinaryFromReader(message: MarketsReply, reader: jspb.BinaryReader): MarketsReply;
}

export namespace MarketsReply {
  export type AsObject = {
    marketsList: tdex_v1_types_pb.MarketWithFee.AsObject[];
  };
}

export class BalancesRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): BalancesRequest;
  hasMarket(): boolean;
  clearMarket(): BalancesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalancesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BalancesRequest): BalancesRequest.AsObject;
  static serializeBinaryToWriter(message: BalancesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalancesRequest;
  static deserializeBinaryFromReader(message: BalancesRequest, reader: jspb.BinaryReader): BalancesRequest;
}

export namespace BalancesRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject;
  };
}

export class BalancesReply extends jspb.Message {
  getBalancesList(): tdex_v1_types_pb.BalanceWithFee[];
  setBalancesList(value: tdex_v1_types_pb.BalanceWithFee[]): BalancesReply;
  clearBalancesList(): BalancesReply;
  addBalances(value?: tdex_v1_types_pb.BalanceWithFee, index?: number): tdex_v1_types_pb.BalanceWithFee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalancesReply.AsObject;
  static toObject(includeInstance: boolean, msg: BalancesReply): BalancesReply.AsObject;
  static serializeBinaryToWriter(message: BalancesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalancesReply;
  static deserializeBinaryFromReader(message: BalancesReply, reader: jspb.BinaryReader): BalancesReply;
}

export namespace BalancesReply {
  export type AsObject = {
    balancesList: tdex_v1_types_pb.BalanceWithFee.AsObject[];
  };
}

export class MarketPriceRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): MarketPriceRequest;
  hasMarket(): boolean;
  clearMarket(): MarketPriceRequest;

  getType(): TradeType;
  setType(value: TradeType): MarketPriceRequest;

  getAmount(): number;
  setAmount(value: number): MarketPriceRequest;

  getAsset(): string;
  setAsset(value: string): MarketPriceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketPriceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketPriceRequest): MarketPriceRequest.AsObject;
  static serializeBinaryToWriter(message: MarketPriceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketPriceRequest;
  static deserializeBinaryFromReader(
    message: MarketPriceRequest,
    reader: jspb.BinaryReader
  ): MarketPriceRequest;
}

export namespace MarketPriceRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject;
    type: TradeType;
    amount: number;
    asset: string;
  };
}

export class MarketPriceReply extends jspb.Message {
  getPricesList(): tdex_v1_types_pb.PriceWithFee[];
  setPricesList(value: tdex_v1_types_pb.PriceWithFee[]): MarketPriceReply;
  clearPricesList(): MarketPriceReply;
  addPrices(value?: tdex_v1_types_pb.PriceWithFee, index?: number): tdex_v1_types_pb.PriceWithFee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketPriceReply.AsObject;
  static toObject(includeInstance: boolean, msg: MarketPriceReply): MarketPriceReply.AsObject;
  static serializeBinaryToWriter(message: MarketPriceReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketPriceReply;
  static deserializeBinaryFromReader(message: MarketPriceReply, reader: jspb.BinaryReader): MarketPriceReply;
}

export namespace MarketPriceReply {
  export type AsObject = {
    pricesList: tdex_v1_types_pb.PriceWithFee.AsObject[];
  };
}

export class TradeProposeRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): TradeProposeRequest;
  hasMarket(): boolean;
  clearMarket(): TradeProposeRequest;

  getType(): TradeType;
  setType(value: TradeType): TradeProposeRequest;

  getSwapRequest(): tdex_v1_swap_pb.SwapRequest | undefined;
  setSwapRequest(value?: tdex_v1_swap_pb.SwapRequest): TradeProposeRequest;
  hasSwapRequest(): boolean;
  clearSwapRequest(): TradeProposeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeProposeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TradeProposeRequest): TradeProposeRequest.AsObject;
  static serializeBinaryToWriter(message: TradeProposeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeProposeRequest;
  static deserializeBinaryFromReader(
    message: TradeProposeRequest,
    reader: jspb.BinaryReader
  ): TradeProposeRequest;
}

export namespace TradeProposeRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject;
    type: TradeType;
    swapRequest?: tdex_v1_swap_pb.SwapRequest.AsObject;
  };
}

export class TradeProposeReply extends jspb.Message {
  getSwapAccept(): tdex_v1_swap_pb.SwapAccept | undefined;
  setSwapAccept(value?: tdex_v1_swap_pb.SwapAccept): TradeProposeReply;
  hasSwapAccept(): boolean;
  clearSwapAccept(): TradeProposeReply;

  getSwapFail(): tdex_v1_swap_pb.SwapFail | undefined;
  setSwapFail(value?: tdex_v1_swap_pb.SwapFail): TradeProposeReply;
  hasSwapFail(): boolean;
  clearSwapFail(): TradeProposeReply;

  getExpiryTimeUnix(): number;
  setExpiryTimeUnix(value: number): TradeProposeReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeProposeReply.AsObject;
  static toObject(includeInstance: boolean, msg: TradeProposeReply): TradeProposeReply.AsObject;
  static serializeBinaryToWriter(message: TradeProposeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeProposeReply;
  static deserializeBinaryFromReader(
    message: TradeProposeReply,
    reader: jspb.BinaryReader
  ): TradeProposeReply;
}

export namespace TradeProposeReply {
  export type AsObject = {
    swapAccept?: tdex_v1_swap_pb.SwapAccept.AsObject;
    swapFail?: tdex_v1_swap_pb.SwapFail.AsObject;
    expiryTimeUnix: number;
  };
}

export class TradeCompleteRequest extends jspb.Message {
  getSwapComplete(): tdex_v1_swap_pb.SwapComplete | undefined;
  setSwapComplete(value?: tdex_v1_swap_pb.SwapComplete): TradeCompleteRequest;
  hasSwapComplete(): boolean;
  clearSwapComplete(): TradeCompleteRequest;

  getSwapFail(): tdex_v1_swap_pb.SwapFail | undefined;
  setSwapFail(value?: tdex_v1_swap_pb.SwapFail): TradeCompleteRequest;
  hasSwapFail(): boolean;
  clearSwapFail(): TradeCompleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeCompleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TradeCompleteRequest): TradeCompleteRequest.AsObject;
  static serializeBinaryToWriter(message: TradeCompleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeCompleteRequest;
  static deserializeBinaryFromReader(
    message: TradeCompleteRequest,
    reader: jspb.BinaryReader
  ): TradeCompleteRequest;
}

export namespace TradeCompleteRequest {
  export type AsObject = {
    swapComplete?: tdex_v1_swap_pb.SwapComplete.AsObject;
    swapFail?: tdex_v1_swap_pb.SwapFail.AsObject;
  };
}

export class TradeCompleteReply extends jspb.Message {
  getTxid(): string;
  setTxid(value: string): TradeCompleteReply;

  getSwapFail(): tdex_v1_swap_pb.SwapFail | undefined;
  setSwapFail(value?: tdex_v1_swap_pb.SwapFail): TradeCompleteReply;
  hasSwapFail(): boolean;
  clearSwapFail(): TradeCompleteReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeCompleteReply.AsObject;
  static toObject(includeInstance: boolean, msg: TradeCompleteReply): TradeCompleteReply.AsObject;
  static serializeBinaryToWriter(message: TradeCompleteReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeCompleteReply;
  static deserializeBinaryFromReader(
    message: TradeCompleteReply,
    reader: jspb.BinaryReader
  ): TradeCompleteReply;
}

export namespace TradeCompleteReply {
  export type AsObject = {
    txid: string;
    swapFail?: tdex_v1_swap_pb.SwapFail.AsObject;
  };
}

export class ProposeTradeRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): ProposeTradeRequest;
  hasMarket(): boolean;
  clearMarket(): ProposeTradeRequest;

  getType(): TradeType;
  setType(value: TradeType): ProposeTradeRequest;

  getSwapRequest(): tdex_v1_swap_pb.SwapRequest | undefined;
  setSwapRequest(value?: tdex_v1_swap_pb.SwapRequest): ProposeTradeRequest;
  hasSwapRequest(): boolean;
  clearSwapRequest(): ProposeTradeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProposeTradeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProposeTradeRequest): ProposeTradeRequest.AsObject;
  static serializeBinaryToWriter(message: ProposeTradeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProposeTradeRequest;
  static deserializeBinaryFromReader(
    message: ProposeTradeRequest,
    reader: jspb.BinaryReader
  ): ProposeTradeRequest;
}

export namespace ProposeTradeRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject;
    type: TradeType;
    swapRequest?: tdex_v1_swap_pb.SwapRequest.AsObject;
  };
}

export class ProposeTradeReply extends jspb.Message {
  getSwapAccept(): tdex_v1_swap_pb.SwapAccept | undefined;
  setSwapAccept(value?: tdex_v1_swap_pb.SwapAccept): ProposeTradeReply;
  hasSwapAccept(): boolean;
  clearSwapAccept(): ProposeTradeReply;

  getSwapFail(): tdex_v1_swap_pb.SwapFail | undefined;
  setSwapFail(value?: tdex_v1_swap_pb.SwapFail): ProposeTradeReply;
  hasSwapFail(): boolean;
  clearSwapFail(): ProposeTradeReply;

  getExpiryTimeUnix(): number;
  setExpiryTimeUnix(value: number): ProposeTradeReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProposeTradeReply.AsObject;
  static toObject(includeInstance: boolean, msg: ProposeTradeReply): ProposeTradeReply.AsObject;
  static serializeBinaryToWriter(message: ProposeTradeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProposeTradeReply;
  static deserializeBinaryFromReader(
    message: ProposeTradeReply,
    reader: jspb.BinaryReader
  ): ProposeTradeReply;
}

export namespace ProposeTradeReply {
  export type AsObject = {
    swapAccept?: tdex_v1_swap_pb.SwapAccept.AsObject;
    swapFail?: tdex_v1_swap_pb.SwapFail.AsObject;
    expiryTimeUnix: number;
  };
}

export class CompleteTradeRequest extends jspb.Message {
  getSwapComplete(): tdex_v1_swap_pb.SwapComplete | undefined;
  setSwapComplete(value?: tdex_v1_swap_pb.SwapComplete): CompleteTradeRequest;
  hasSwapComplete(): boolean;
  clearSwapComplete(): CompleteTradeRequest;

  getSwapFail(): tdex_v1_swap_pb.SwapFail | undefined;
  setSwapFail(value?: tdex_v1_swap_pb.SwapFail): CompleteTradeRequest;
  hasSwapFail(): boolean;
  clearSwapFail(): CompleteTradeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteTradeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteTradeRequest): CompleteTradeRequest.AsObject;
  static serializeBinaryToWriter(message: CompleteTradeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteTradeRequest;
  static deserializeBinaryFromReader(
    message: CompleteTradeRequest,
    reader: jspb.BinaryReader
  ): CompleteTradeRequest;
}

export namespace CompleteTradeRequest {
  export type AsObject = {
    swapComplete?: tdex_v1_swap_pb.SwapComplete.AsObject;
    swapFail?: tdex_v1_swap_pb.SwapFail.AsObject;
  };
}

export class CompleteTradeReply extends jspb.Message {
  getTxid(): string;
  setTxid(value: string): CompleteTradeReply;

  getSwapFail(): tdex_v1_swap_pb.SwapFail | undefined;
  setSwapFail(value?: tdex_v1_swap_pb.SwapFail): CompleteTradeReply;
  hasSwapFail(): boolean;
  clearSwapFail(): CompleteTradeReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteTradeReply.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteTradeReply): CompleteTradeReply.AsObject;
  static serializeBinaryToWriter(message: CompleteTradeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteTradeReply;
  static deserializeBinaryFromReader(
    message: CompleteTradeReply,
    reader: jspb.BinaryReader
  ): CompleteTradeReply;
}

export namespace CompleteTradeReply {
  export type AsObject = {
    txid: string;
    swapFail?: tdex_v1_swap_pb.SwapFail.AsObject;
  };
}

export enum TradeType {
  BUY = 0,
  SELL = 1,
}
