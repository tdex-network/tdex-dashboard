import * as jspb from 'google-protobuf'

import * as tdex_v1_swap_pb from '../../tdex/v1/swap_pb';
import * as tdex_v1_types_pb from '../../tdex/v1/types_pb';
import * as google_api_annotations_pb from '../../google/api/annotations_pb';


export class ListMarketsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMarketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMarketsRequest): ListMarketsRequest.AsObject;
  static serializeBinaryToWriter(message: ListMarketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMarketsRequest;
  static deserializeBinaryFromReader(message: ListMarketsRequest, reader: jspb.BinaryReader): ListMarketsRequest;
}

export namespace ListMarketsRequest {
  export type AsObject = {
  }
}

export class ListMarketsResponse extends jspb.Message {
  getMarketsList(): Array<tdex_v1_types_pb.MarketWithFee>;
  setMarketsList(value: Array<tdex_v1_types_pb.MarketWithFee>): ListMarketsResponse;
  clearMarketsList(): ListMarketsResponse;
  addMarkets(value?: tdex_v1_types_pb.MarketWithFee, index?: number): tdex_v1_types_pb.MarketWithFee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMarketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMarketsResponse): ListMarketsResponse.AsObject;
  static serializeBinaryToWriter(message: ListMarketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMarketsResponse;
  static deserializeBinaryFromReader(message: ListMarketsResponse, reader: jspb.BinaryReader): ListMarketsResponse;
}

export namespace ListMarketsResponse {
  export type AsObject = {
    marketsList: Array<tdex_v1_types_pb.MarketWithFee.AsObject>,
  }
}

export class GetMarketBalanceRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): GetMarketBalanceRequest;
  hasMarket(): boolean;
  clearMarket(): GetMarketBalanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketBalanceRequest): GetMarketBalanceRequest.AsObject;
  static serializeBinaryToWriter(message: GetMarketBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketBalanceRequest;
  static deserializeBinaryFromReader(message: GetMarketBalanceRequest, reader: jspb.BinaryReader): GetMarketBalanceRequest;
}

export namespace GetMarketBalanceRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject,
  }
}

export class GetMarketBalanceResponse extends jspb.Message {
  getBalance(): tdex_v1_types_pb.BalanceWithFee | undefined;
  setBalance(value?: tdex_v1_types_pb.BalanceWithFee): GetMarketBalanceResponse;
  hasBalance(): boolean;
  clearBalance(): GetMarketBalanceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketBalanceResponse): GetMarketBalanceResponse.AsObject;
  static serializeBinaryToWriter(message: GetMarketBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketBalanceResponse;
  static deserializeBinaryFromReader(message: GetMarketBalanceResponse, reader: jspb.BinaryReader): GetMarketBalanceResponse;
}

export namespace GetMarketBalanceResponse {
  export type AsObject = {
    balance?: tdex_v1_types_pb.BalanceWithFee.AsObject,
  }
}

export class PreviewTradeRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): PreviewTradeRequest;
  hasMarket(): boolean;
  clearMarket(): PreviewTradeRequest;

  getType(): tdex_v1_types_pb.TradeType;
  setType(value: tdex_v1_types_pb.TradeType): PreviewTradeRequest;

  getAmount(): number;
  setAmount(value: number): PreviewTradeRequest;

  getAsset(): string;
  setAsset(value: string): PreviewTradeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreviewTradeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PreviewTradeRequest): PreviewTradeRequest.AsObject;
  static serializeBinaryToWriter(message: PreviewTradeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreviewTradeRequest;
  static deserializeBinaryFromReader(message: PreviewTradeRequest, reader: jspb.BinaryReader): PreviewTradeRequest;
}

export namespace PreviewTradeRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject,
    type: tdex_v1_types_pb.TradeType,
    amount: number,
    asset: string,
  }
}

export class PreviewTradeResponse extends jspb.Message {
  getPreviewsList(): Array<tdex_v1_types_pb.Preview>;
  setPreviewsList(value: Array<tdex_v1_types_pb.Preview>): PreviewTradeResponse;
  clearPreviewsList(): PreviewTradeResponse;
  addPreviews(value?: tdex_v1_types_pb.Preview, index?: number): tdex_v1_types_pb.Preview;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreviewTradeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PreviewTradeResponse): PreviewTradeResponse.AsObject;
  static serializeBinaryToWriter(message: PreviewTradeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreviewTradeResponse;
  static deserializeBinaryFromReader(message: PreviewTradeResponse, reader: jspb.BinaryReader): PreviewTradeResponse;
}

export namespace PreviewTradeResponse {
  export type AsObject = {
    previewsList: Array<tdex_v1_types_pb.Preview.AsObject>,
  }
}

export class ProposeTradeRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): ProposeTradeRequest;
  hasMarket(): boolean;
  clearMarket(): ProposeTradeRequest;

  getType(): tdex_v1_types_pb.TradeType;
  setType(value: tdex_v1_types_pb.TradeType): ProposeTradeRequest;

  getSwapRequest(): tdex_v1_swap_pb.SwapRequest | undefined;
  setSwapRequest(value?: tdex_v1_swap_pb.SwapRequest): ProposeTradeRequest;
  hasSwapRequest(): boolean;
  clearSwapRequest(): ProposeTradeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProposeTradeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProposeTradeRequest): ProposeTradeRequest.AsObject;
  static serializeBinaryToWriter(message: ProposeTradeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProposeTradeRequest;
  static deserializeBinaryFromReader(message: ProposeTradeRequest, reader: jspb.BinaryReader): ProposeTradeRequest;
}

export namespace ProposeTradeRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject,
    type: tdex_v1_types_pb.TradeType,
    swapRequest?: tdex_v1_swap_pb.SwapRequest.AsObject,
  }
}

export class ProposeTradeResponse extends jspb.Message {
  getSwapAccept(): tdex_v1_swap_pb.SwapAccept | undefined;
  setSwapAccept(value?: tdex_v1_swap_pb.SwapAccept): ProposeTradeResponse;
  hasSwapAccept(): boolean;
  clearSwapAccept(): ProposeTradeResponse;

  getSwapFail(): tdex_v1_swap_pb.SwapFail | undefined;
  setSwapFail(value?: tdex_v1_swap_pb.SwapFail): ProposeTradeResponse;
  hasSwapFail(): boolean;
  clearSwapFail(): ProposeTradeResponse;

  getExpiryTimeUnix(): number;
  setExpiryTimeUnix(value: number): ProposeTradeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProposeTradeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProposeTradeResponse): ProposeTradeResponse.AsObject;
  static serializeBinaryToWriter(message: ProposeTradeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProposeTradeResponse;
  static deserializeBinaryFromReader(message: ProposeTradeResponse, reader: jspb.BinaryReader): ProposeTradeResponse;
}

export namespace ProposeTradeResponse {
  export type AsObject = {
    swapAccept?: tdex_v1_swap_pb.SwapAccept.AsObject,
    swapFail?: tdex_v1_swap_pb.SwapFail.AsObject,
    expiryTimeUnix: number,
  }
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
  static deserializeBinaryFromReader(message: CompleteTradeRequest, reader: jspb.BinaryReader): CompleteTradeRequest;
}

export namespace CompleteTradeRequest {
  export type AsObject = {
    swapComplete?: tdex_v1_swap_pb.SwapComplete.AsObject,
    swapFail?: tdex_v1_swap_pb.SwapFail.AsObject,
  }
}

export class CompleteTradeResponse extends jspb.Message {
  getTxid(): string;
  setTxid(value: string): CompleteTradeResponse;

  getSwapFail(): tdex_v1_swap_pb.SwapFail | undefined;
  setSwapFail(value?: tdex_v1_swap_pb.SwapFail): CompleteTradeResponse;
  hasSwapFail(): boolean;
  clearSwapFail(): CompleteTradeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteTradeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteTradeResponse): CompleteTradeResponse.AsObject;
  static serializeBinaryToWriter(message: CompleteTradeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteTradeResponse;
  static deserializeBinaryFromReader(message: CompleteTradeResponse, reader: jspb.BinaryReader): CompleteTradeResponse;
}

export namespace CompleteTradeResponse {
  export type AsObject = {
    txid: string,
    swapFail?: tdex_v1_swap_pb.SwapFail.AsObject,
  }
}

