/* eslint-disable */
// @generated by protobuf-ts 2.9.0 with parameter add_pb_suffix,eslint_disable,ts_nocheck,keep_enum_prefix,long_type_number
// @generated from protobuf file "tdex/v1/trade.proto" (package "tdex.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { SwapComplete } from "./swap_pb";
import { SwapFail } from "./swap_pb";
import { SwapAccept } from "./swap_pb";
import { SwapRequest } from "./swap_pb";
import { Preview } from "./types_pb";
import { TradeType } from "./types_pb";
import { BalanceWithFee } from "./types_pb";
import { Market } from "./types_pb";
import { MarketWithFee } from "./types_pb";
/**
 * BOTD#4 Service's messages
 *
 * @generated from protobuf message tdex.v1.ListMarketsRequest
 */
export interface ListMarketsRequest {
}
/**
 * @generated from protobuf message tdex.v1.ListMarketsResponse
 */
export interface ListMarketsResponse {
    /**
     * @generated from protobuf field: repeated tdex.v1.MarketWithFee markets = 1;
     */
    markets: MarketWithFee[];
}
/**
 * @generated from protobuf message tdex.v1.GetMarketBalanceRequest
 */
export interface GetMarketBalanceRequest {
    /**
     * @generated from protobuf field: tdex.v1.Market market = 1;
     */
    market?: Market;
}
/**
 * @generated from protobuf message tdex.v1.GetMarketBalanceResponse
 */
export interface GetMarketBalanceResponse {
    /**
     * @generated from protobuf field: tdex.v1.BalanceWithFee balance = 1;
     */
    balance?: BalanceWithFee;
}
/**
 * @generated from protobuf message tdex.v1.GetMarketPriceRequest
 */
export interface GetMarketPriceRequest {
    /**
     * @generated from protobuf field: tdex.v1.Market market = 1;
     */
    market?: Market;
}
/**
 * @generated from protobuf message tdex.v1.GetMarketPriceResponse
 */
export interface GetMarketPriceResponse {
    /**
     * @generated from protobuf field: double spot_price = 1;
     */
    spotPrice: number;
    /**
     * @generated from protobuf field: uint64 min_tradable_amount = 2;
     */
    minTradableAmount: number;
}
/**
 * @generated from protobuf message tdex.v1.PreviewTradeRequest
 */
export interface PreviewTradeRequest {
    /**
     * @generated from protobuf field: tdex.v1.Market market = 1;
     */
    market?: Market;
    /**
     * @generated from protobuf field: tdex.v1.TradeType type = 2;
     */
    type: TradeType;
    /**
     * @generated from protobuf field: uint64 amount = 3;
     */
    amount: number;
    /**
     * @generated from protobuf field: string asset = 4;
     */
    asset: string;
}
/**
 * @generated from protobuf message tdex.v1.PreviewTradeResponse
 */
export interface PreviewTradeResponse {
    /**
     * @generated from protobuf field: repeated tdex.v1.Preview previews = 1;
     */
    previews: Preview[];
}
/**
 * @generated from protobuf message tdex.v1.ProposeTradeRequest
 */
export interface ProposeTradeRequest {
    /**
     * @generated from protobuf field: tdex.v1.Market market = 1;
     */
    market?: Market;
    /**
     * @generated from protobuf field: tdex.v1.TradeType type = 2;
     */
    type: TradeType;
    /**
     * @generated from protobuf field: tdex.v1.SwapRequest swap_request = 3;
     */
    swapRequest?: SwapRequest;
}
/**
 * @generated from protobuf message tdex.v1.ProposeTradeResponse
 */
export interface ProposeTradeResponse {
    /**
     * @generated from protobuf field: tdex.v1.SwapAccept swap_accept = 1;
     */
    swapAccept?: SwapAccept;
    /**
     * @generated from protobuf field: tdex.v1.SwapFail swap_fail = 2;
     */
    swapFail?: SwapFail;
    /**
     * @generated from protobuf field: uint64 expiry_time_unix = 3;
     */
    expiryTimeUnix: number;
}
/**
 * @generated from protobuf message tdex.v1.CompleteTradeRequest
 */
export interface CompleteTradeRequest {
    /**
     * @generated from protobuf field: tdex.v1.SwapComplete swap_complete = 1;
     */
    swapComplete?: SwapComplete;
    /**
     * @generated from protobuf field: tdex.v1.SwapFail swap_fail = 2;
     */
    swapFail?: SwapFail;
}
/**
 * @generated from protobuf message tdex.v1.CompleteTradeResponse
 */
export interface CompleteTradeResponse {
    /**
     * @generated from protobuf field: string txid = 1;
     */
    txid: string;
    /**
     * @generated from protobuf field: tdex.v1.SwapFail swap_fail = 2;
     */
    swapFail?: SwapFail;
}
// @generated message type with reflection information, may provide speed optimized methods
class ListMarketsRequest$Type extends MessageType<ListMarketsRequest> {
    constructor() {
        super("tdex.v1.ListMarketsRequest", []);
    }
    create(value?: PartialMessage<ListMarketsRequest>): ListMarketsRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ListMarketsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListMarketsRequest): ListMarketsRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ListMarketsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex.v1.ListMarketsRequest
 */
export const ListMarketsRequest = new ListMarketsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ListMarketsResponse$Type extends MessageType<ListMarketsResponse> {
    constructor() {
        super("tdex.v1.ListMarketsResponse", [
            { no: 1, name: "markets", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MarketWithFee }
        ]);
    }
    create(value?: PartialMessage<ListMarketsResponse>): ListMarketsResponse {
        const message = { markets: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ListMarketsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListMarketsResponse): ListMarketsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated tdex.v1.MarketWithFee markets */ 1:
                    message.markets.push(MarketWithFee.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ListMarketsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated tdex.v1.MarketWithFee markets = 1; */
        for (let i = 0; i < message.markets.length; i++)
            MarketWithFee.internalBinaryWrite(message.markets[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex.v1.ListMarketsResponse
 */
export const ListMarketsResponse = new ListMarketsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetMarketBalanceRequest$Type extends MessageType<GetMarketBalanceRequest> {
    constructor() {
        super("tdex.v1.GetMarketBalanceRequest", [
            { no: 1, name: "market", kind: "message", T: () => Market }
        ]);
    }
    create(value?: PartialMessage<GetMarketBalanceRequest>): GetMarketBalanceRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetMarketBalanceRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetMarketBalanceRequest): GetMarketBalanceRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* tdex.v1.Market market */ 1:
                    message.market = Market.internalBinaryRead(reader, reader.uint32(), options, message.market);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetMarketBalanceRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* tdex.v1.Market market = 1; */
        if (message.market)
            Market.internalBinaryWrite(message.market, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex.v1.GetMarketBalanceRequest
 */
export const GetMarketBalanceRequest = new GetMarketBalanceRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetMarketBalanceResponse$Type extends MessageType<GetMarketBalanceResponse> {
    constructor() {
        super("tdex.v1.GetMarketBalanceResponse", [
            { no: 1, name: "balance", kind: "message", T: () => BalanceWithFee }
        ]);
    }
    create(value?: PartialMessage<GetMarketBalanceResponse>): GetMarketBalanceResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetMarketBalanceResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetMarketBalanceResponse): GetMarketBalanceResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* tdex.v1.BalanceWithFee balance */ 1:
                    message.balance = BalanceWithFee.internalBinaryRead(reader, reader.uint32(), options, message.balance);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetMarketBalanceResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* tdex.v1.BalanceWithFee balance = 1; */
        if (message.balance)
            BalanceWithFee.internalBinaryWrite(message.balance, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex.v1.GetMarketBalanceResponse
 */
export const GetMarketBalanceResponse = new GetMarketBalanceResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetMarketPriceRequest$Type extends MessageType<GetMarketPriceRequest> {
    constructor() {
        super("tdex.v1.GetMarketPriceRequest", [
            { no: 1, name: "market", kind: "message", T: () => Market }
        ]);
    }
    create(value?: PartialMessage<GetMarketPriceRequest>): GetMarketPriceRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetMarketPriceRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetMarketPriceRequest): GetMarketPriceRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* tdex.v1.Market market */ 1:
                    message.market = Market.internalBinaryRead(reader, reader.uint32(), options, message.market);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetMarketPriceRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* tdex.v1.Market market = 1; */
        if (message.market)
            Market.internalBinaryWrite(message.market, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex.v1.GetMarketPriceRequest
 */
export const GetMarketPriceRequest = new GetMarketPriceRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetMarketPriceResponse$Type extends MessageType<GetMarketPriceResponse> {
    constructor() {
        super("tdex.v1.GetMarketPriceResponse", [
            { no: 1, name: "spot_price", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 2, name: "min_tradable_amount", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ }
        ]);
    }
    create(value?: PartialMessage<GetMarketPriceResponse>): GetMarketPriceResponse {
        const message = { spotPrice: 0, minTradableAmount: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetMarketPriceResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetMarketPriceResponse): GetMarketPriceResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* double spot_price */ 1:
                    message.spotPrice = reader.double();
                    break;
                case /* uint64 min_tradable_amount */ 2:
                    message.minTradableAmount = reader.uint64().toNumber();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetMarketPriceResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* double spot_price = 1; */
        if (message.spotPrice !== 0)
            writer.tag(1, WireType.Bit64).double(message.spotPrice);
        /* uint64 min_tradable_amount = 2; */
        if (message.minTradableAmount !== 0)
            writer.tag(2, WireType.Varint).uint64(message.minTradableAmount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex.v1.GetMarketPriceResponse
 */
export const GetMarketPriceResponse = new GetMarketPriceResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PreviewTradeRequest$Type extends MessageType<PreviewTradeRequest> {
    constructor() {
        super("tdex.v1.PreviewTradeRequest", [
            { no: 1, name: "market", kind: "message", T: () => Market },
            { no: 2, name: "type", kind: "enum", T: () => ["tdex.v1.TradeType", TradeType] },
            { no: 3, name: "amount", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 4, name: "asset", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<PreviewTradeRequest>): PreviewTradeRequest {
        const message = { type: 0, amount: 0, asset: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PreviewTradeRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreviewTradeRequest): PreviewTradeRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* tdex.v1.Market market */ 1:
                    message.market = Market.internalBinaryRead(reader, reader.uint32(), options, message.market);
                    break;
                case /* tdex.v1.TradeType type */ 2:
                    message.type = reader.int32();
                    break;
                case /* uint64 amount */ 3:
                    message.amount = reader.uint64().toNumber();
                    break;
                case /* string asset */ 4:
                    message.asset = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: PreviewTradeRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* tdex.v1.Market market = 1; */
        if (message.market)
            Market.internalBinaryWrite(message.market, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* tdex.v1.TradeType type = 2; */
        if (message.type !== 0)
            writer.tag(2, WireType.Varint).int32(message.type);
        /* uint64 amount = 3; */
        if (message.amount !== 0)
            writer.tag(3, WireType.Varint).uint64(message.amount);
        /* string asset = 4; */
        if (message.asset !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.asset);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex.v1.PreviewTradeRequest
 */
export const PreviewTradeRequest = new PreviewTradeRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PreviewTradeResponse$Type extends MessageType<PreviewTradeResponse> {
    constructor() {
        super("tdex.v1.PreviewTradeResponse", [
            { no: 1, name: "previews", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Preview }
        ]);
    }
    create(value?: PartialMessage<PreviewTradeResponse>): PreviewTradeResponse {
        const message = { previews: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PreviewTradeResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreviewTradeResponse): PreviewTradeResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated tdex.v1.Preview previews */ 1:
                    message.previews.push(Preview.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: PreviewTradeResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated tdex.v1.Preview previews = 1; */
        for (let i = 0; i < message.previews.length; i++)
            Preview.internalBinaryWrite(message.previews[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex.v1.PreviewTradeResponse
 */
export const PreviewTradeResponse = new PreviewTradeResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProposeTradeRequest$Type extends MessageType<ProposeTradeRequest> {
    constructor() {
        super("tdex.v1.ProposeTradeRequest", [
            { no: 1, name: "market", kind: "message", T: () => Market },
            { no: 2, name: "type", kind: "enum", T: () => ["tdex.v1.TradeType", TradeType] },
            { no: 3, name: "swap_request", kind: "message", T: () => SwapRequest }
        ]);
    }
    create(value?: PartialMessage<ProposeTradeRequest>): ProposeTradeRequest {
        const message = { type: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ProposeTradeRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProposeTradeRequest): ProposeTradeRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* tdex.v1.Market market */ 1:
                    message.market = Market.internalBinaryRead(reader, reader.uint32(), options, message.market);
                    break;
                case /* tdex.v1.TradeType type */ 2:
                    message.type = reader.int32();
                    break;
                case /* tdex.v1.SwapRequest swap_request */ 3:
                    message.swapRequest = SwapRequest.internalBinaryRead(reader, reader.uint32(), options, message.swapRequest);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ProposeTradeRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* tdex.v1.Market market = 1; */
        if (message.market)
            Market.internalBinaryWrite(message.market, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* tdex.v1.TradeType type = 2; */
        if (message.type !== 0)
            writer.tag(2, WireType.Varint).int32(message.type);
        /* tdex.v1.SwapRequest swap_request = 3; */
        if (message.swapRequest)
            SwapRequest.internalBinaryWrite(message.swapRequest, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex.v1.ProposeTradeRequest
 */
export const ProposeTradeRequest = new ProposeTradeRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProposeTradeResponse$Type extends MessageType<ProposeTradeResponse> {
    constructor() {
        super("tdex.v1.ProposeTradeResponse", [
            { no: 1, name: "swap_accept", kind: "message", T: () => SwapAccept },
            { no: 2, name: "swap_fail", kind: "message", T: () => SwapFail },
            { no: 3, name: "expiry_time_unix", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ }
        ]);
    }
    create(value?: PartialMessage<ProposeTradeResponse>): ProposeTradeResponse {
        const message = { expiryTimeUnix: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ProposeTradeResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProposeTradeResponse): ProposeTradeResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* tdex.v1.SwapAccept swap_accept */ 1:
                    message.swapAccept = SwapAccept.internalBinaryRead(reader, reader.uint32(), options, message.swapAccept);
                    break;
                case /* tdex.v1.SwapFail swap_fail */ 2:
                    message.swapFail = SwapFail.internalBinaryRead(reader, reader.uint32(), options, message.swapFail);
                    break;
                case /* uint64 expiry_time_unix */ 3:
                    message.expiryTimeUnix = reader.uint64().toNumber();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ProposeTradeResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* tdex.v1.SwapAccept swap_accept = 1; */
        if (message.swapAccept)
            SwapAccept.internalBinaryWrite(message.swapAccept, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* tdex.v1.SwapFail swap_fail = 2; */
        if (message.swapFail)
            SwapFail.internalBinaryWrite(message.swapFail, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* uint64 expiry_time_unix = 3; */
        if (message.expiryTimeUnix !== 0)
            writer.tag(3, WireType.Varint).uint64(message.expiryTimeUnix);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex.v1.ProposeTradeResponse
 */
export const ProposeTradeResponse = new ProposeTradeResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CompleteTradeRequest$Type extends MessageType<CompleteTradeRequest> {
    constructor() {
        super("tdex.v1.CompleteTradeRequest", [
            { no: 1, name: "swap_complete", kind: "message", T: () => SwapComplete },
            { no: 2, name: "swap_fail", kind: "message", T: () => SwapFail }
        ]);
    }
    create(value?: PartialMessage<CompleteTradeRequest>): CompleteTradeRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CompleteTradeRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CompleteTradeRequest): CompleteTradeRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* tdex.v1.SwapComplete swap_complete */ 1:
                    message.swapComplete = SwapComplete.internalBinaryRead(reader, reader.uint32(), options, message.swapComplete);
                    break;
                case /* tdex.v1.SwapFail swap_fail */ 2:
                    message.swapFail = SwapFail.internalBinaryRead(reader, reader.uint32(), options, message.swapFail);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CompleteTradeRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* tdex.v1.SwapComplete swap_complete = 1; */
        if (message.swapComplete)
            SwapComplete.internalBinaryWrite(message.swapComplete, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* tdex.v1.SwapFail swap_fail = 2; */
        if (message.swapFail)
            SwapFail.internalBinaryWrite(message.swapFail, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex.v1.CompleteTradeRequest
 */
export const CompleteTradeRequest = new CompleteTradeRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CompleteTradeResponse$Type extends MessageType<CompleteTradeResponse> {
    constructor() {
        super("tdex.v1.CompleteTradeResponse", [
            { no: 1, name: "txid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "swap_fail", kind: "message", T: () => SwapFail }
        ]);
    }
    create(value?: PartialMessage<CompleteTradeResponse>): CompleteTradeResponse {
        const message = { txid: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CompleteTradeResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CompleteTradeResponse): CompleteTradeResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string txid */ 1:
                    message.txid = reader.string();
                    break;
                case /* tdex.v1.SwapFail swap_fail */ 2:
                    message.swapFail = SwapFail.internalBinaryRead(reader, reader.uint32(), options, message.swapFail);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CompleteTradeResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string txid = 1; */
        if (message.txid !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.txid);
        /* tdex.v1.SwapFail swap_fail = 2; */
        if (message.swapFail)
            SwapFail.internalBinaryWrite(message.swapFail, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex.v1.CompleteTradeResponse
 */
export const CompleteTradeResponse = new CompleteTradeResponse$Type();
/**
 * @generated ServiceType for protobuf service tdex.v1.TradeService
 */
export const TradeService = new ServiceType("tdex.v1.TradeService", [
    { name: "ListMarkets", options: { "google.api.http": { post: "/v1/markets" } }, I: ListMarketsRequest, O: ListMarketsResponse },
    { name: "GetMarketBalance", options: { "google.api.http": { post: "/v1/market/balance", body: "*" } }, I: GetMarketBalanceRequest, O: GetMarketBalanceResponse },
    { name: "GetMarketPrice", options: { "google.api.http": { post: "/v1/market/price", body: "*" } }, I: GetMarketPriceRequest, O: GetMarketPriceResponse },
    { name: "PreviewTrade", options: { "google.api.http": { post: "/v1/trade/preview", body: "*" } }, I: PreviewTradeRequest, O: PreviewTradeResponse },
    { name: "ProposeTrade", options: { "google.api.http": { post: "/v1/trade/propose", body: "*" } }, I: ProposeTradeRequest, O: ProposeTradeResponse },
    { name: "CompleteTrade", options: { "google.api.http": { post: "/v1/trade/complete", body: "*" } }, I: CompleteTradeRequest, O: CompleteTradeResponse }
]);
