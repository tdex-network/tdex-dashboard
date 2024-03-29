/* eslint-disable */
// @generated by protobuf-ts 2.9.0 with parameter add_pb_suffix,eslint_disable,ts_nocheck,keep_enum_prefix,long_type_number
// @generated from protobuf file "tdex-daemon/v2/feeder.proto" (package "tdex_daemon.v2", syntax proto3)
// tslint:disable
// @ts-nocheck
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { PriceFeed } from "./types_pb";
import { Market } from "../../tdex/v2/types_pb";
/**
 * @generated from protobuf message tdex_daemon.v2.AddPriceFeedRequest
 */
export interface AddPriceFeedRequest {
    /**
     * market for which the price feed is created
     *
     * @generated from protobuf field: tdex.v2.Market market = 1;
     */
    market?: Market;
    /**
     * source is the name of the price source to use, e.g. kraken, bitfinex, coinbase etc.
     *
     * @generated from protobuf field: string source = 2;
     */
    source: string;
    /**
     * ticker is the ticker of the market, e.g. "XBT/USDT", "XBT/EUR" etc.
     *
     * @generated from protobuf field: string ticker = 3;
     */
    ticker: string;
}
/**
 * @generated from protobuf message tdex_daemon.v2.AddPriceFeedResponse
 */
export interface AddPriceFeedResponse {
    /**
     * id is the id of the price feed.
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message tdex_daemon.v2.StartPriceFeedRequest
 */
export interface StartPriceFeedRequest {
    /**
     * id is the id of the price feed.
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message tdex_daemon.v2.StartPriceFeedResponse
 */
export interface StartPriceFeedResponse {
}
/**
 * @generated from protobuf message tdex_daemon.v2.StopPriceFeedRequest
 */
export interface StopPriceFeedRequest {
    /**
     * id is the id of the price feed.
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message tdex_daemon.v2.StopPriceFeedResponse
 */
export interface StopPriceFeedResponse {
}
/**
 * @generated from protobuf message tdex_daemon.v2.UpdatePriceFeedRequest
 */
export interface UpdatePriceFeedRequest {
    /**
     * id is the id of the price feed.
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * source is the name of the price source to use.
     *
     * @generated from protobuf field: string source = 2;
     */
    source: string;
    /**
     * ticker is the ticker of the asset to use as price source.
     *
     * @generated from protobuf field: string ticker = 3;
     */
    ticker: string;
}
/**
 * @generated from protobuf message tdex_daemon.v2.UpdatePriceFeedResponse
 */
export interface UpdatePriceFeedResponse {
}
/**
 * @generated from protobuf message tdex_daemon.v2.RemovePriceFeedRequest
 */
export interface RemovePriceFeedRequest {
    /**
     * id is the id of the price feed.
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message tdex_daemon.v2.RemovePriceFeedResponse
 */
export interface RemovePriceFeedResponse {
}
/**
 * @generated from protobuf message tdex_daemon.v2.ListSupportedPriceSourcesRequest
 */
export interface ListSupportedPriceSourcesRequest {
}
/**
 * @generated from protobuf message tdex_daemon.v2.ListSupportedPriceSourcesResponse
 */
export interface ListSupportedPriceSourcesResponse {
    /**
     * sources is the list of supported price sources.
     *
     * @generated from protobuf field: repeated string sources = 1;
     */
    sources: string[];
}
/**
 * @generated from protobuf message tdex_daemon.v2.GetPriceFeedRequest
 */
export interface GetPriceFeedRequest {
    /**
     * id of the price field to get info about.
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message tdex_daemon.v2.GetPriceFeedResponse
 */
export interface GetPriceFeedResponse {
    /**
     * feed is the price feed for the given market.
     *
     * @generated from protobuf field: tdex_daemon.v2.PriceFeed feed = 1;
     */
    feed?: PriceFeed;
}
/**
 * @generated from protobuf message tdex_daemon.v2.ListPriceFeedsRequest
 */
export interface ListPriceFeedsRequest {
}
/**
 * @generated from protobuf message tdex_daemon.v2.ListPriceFeedsResponse
 */
export interface ListPriceFeedsResponse {
    /**
     * feeds is the list of price feeds.
     *
     * @generated from protobuf field: repeated tdex_daemon.v2.PriceFeed feeds = 1;
     */
    feeds: PriceFeed[];
}
// @generated message type with reflection information, may provide speed optimized methods
class AddPriceFeedRequest$Type extends MessageType<AddPriceFeedRequest> {
    constructor() {
        super("tdex_daemon.v2.AddPriceFeedRequest", [
            { no: 1, name: "market", kind: "message", T: () => Market },
            { no: 2, name: "source", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "ticker", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<AddPriceFeedRequest>): AddPriceFeedRequest {
        const message = { source: "", ticker: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AddPriceFeedRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AddPriceFeedRequest): AddPriceFeedRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* tdex.v2.Market market */ 1:
                    message.market = Market.internalBinaryRead(reader, reader.uint32(), options, message.market);
                    break;
                case /* string source */ 2:
                    message.source = reader.string();
                    break;
                case /* string ticker */ 3:
                    message.ticker = reader.string();
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
    internalBinaryWrite(message: AddPriceFeedRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* tdex.v2.Market market = 1; */
        if (message.market)
            Market.internalBinaryWrite(message.market, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string source = 2; */
        if (message.source !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.source);
        /* string ticker = 3; */
        if (message.ticker !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.ticker);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex_daemon.v2.AddPriceFeedRequest
 */
export const AddPriceFeedRequest = new AddPriceFeedRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddPriceFeedResponse$Type extends MessageType<AddPriceFeedResponse> {
    constructor() {
        super("tdex_daemon.v2.AddPriceFeedResponse", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<AddPriceFeedResponse>): AddPriceFeedResponse {
        const message = { id: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AddPriceFeedResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AddPriceFeedResponse): AddPriceFeedResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
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
    internalBinaryWrite(message: AddPriceFeedResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex_daemon.v2.AddPriceFeedResponse
 */
export const AddPriceFeedResponse = new AddPriceFeedResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StartPriceFeedRequest$Type extends MessageType<StartPriceFeedRequest> {
    constructor() {
        super("tdex_daemon.v2.StartPriceFeedRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<StartPriceFeedRequest>): StartPriceFeedRequest {
        const message = { id: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<StartPriceFeedRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StartPriceFeedRequest): StartPriceFeedRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
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
    internalBinaryWrite(message: StartPriceFeedRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex_daemon.v2.StartPriceFeedRequest
 */
export const StartPriceFeedRequest = new StartPriceFeedRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StartPriceFeedResponse$Type extends MessageType<StartPriceFeedResponse> {
    constructor() {
        super("tdex_daemon.v2.StartPriceFeedResponse", []);
    }
    create(value?: PartialMessage<StartPriceFeedResponse>): StartPriceFeedResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<StartPriceFeedResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StartPriceFeedResponse): StartPriceFeedResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: StartPriceFeedResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex_daemon.v2.StartPriceFeedResponse
 */
export const StartPriceFeedResponse = new StartPriceFeedResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StopPriceFeedRequest$Type extends MessageType<StopPriceFeedRequest> {
    constructor() {
        super("tdex_daemon.v2.StopPriceFeedRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<StopPriceFeedRequest>): StopPriceFeedRequest {
        const message = { id: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<StopPriceFeedRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StopPriceFeedRequest): StopPriceFeedRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
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
    internalBinaryWrite(message: StopPriceFeedRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex_daemon.v2.StopPriceFeedRequest
 */
export const StopPriceFeedRequest = new StopPriceFeedRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StopPriceFeedResponse$Type extends MessageType<StopPriceFeedResponse> {
    constructor() {
        super("tdex_daemon.v2.StopPriceFeedResponse", []);
    }
    create(value?: PartialMessage<StopPriceFeedResponse>): StopPriceFeedResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<StopPriceFeedResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StopPriceFeedResponse): StopPriceFeedResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: StopPriceFeedResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex_daemon.v2.StopPriceFeedResponse
 */
export const StopPriceFeedResponse = new StopPriceFeedResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdatePriceFeedRequest$Type extends MessageType<UpdatePriceFeedRequest> {
    constructor() {
        super("tdex_daemon.v2.UpdatePriceFeedRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "source", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "ticker", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<UpdatePriceFeedRequest>): UpdatePriceFeedRequest {
        const message = { id: "", source: "", ticker: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UpdatePriceFeedRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdatePriceFeedRequest): UpdatePriceFeedRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* string source */ 2:
                    message.source = reader.string();
                    break;
                case /* string ticker */ 3:
                    message.ticker = reader.string();
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
    internalBinaryWrite(message: UpdatePriceFeedRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* string source = 2; */
        if (message.source !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.source);
        /* string ticker = 3; */
        if (message.ticker !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.ticker);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex_daemon.v2.UpdatePriceFeedRequest
 */
export const UpdatePriceFeedRequest = new UpdatePriceFeedRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdatePriceFeedResponse$Type extends MessageType<UpdatePriceFeedResponse> {
    constructor() {
        super("tdex_daemon.v2.UpdatePriceFeedResponse", []);
    }
    create(value?: PartialMessage<UpdatePriceFeedResponse>): UpdatePriceFeedResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UpdatePriceFeedResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdatePriceFeedResponse): UpdatePriceFeedResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: UpdatePriceFeedResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex_daemon.v2.UpdatePriceFeedResponse
 */
export const UpdatePriceFeedResponse = new UpdatePriceFeedResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RemovePriceFeedRequest$Type extends MessageType<RemovePriceFeedRequest> {
    constructor() {
        super("tdex_daemon.v2.RemovePriceFeedRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<RemovePriceFeedRequest>): RemovePriceFeedRequest {
        const message = { id: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RemovePriceFeedRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RemovePriceFeedRequest): RemovePriceFeedRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
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
    internalBinaryWrite(message: RemovePriceFeedRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex_daemon.v2.RemovePriceFeedRequest
 */
export const RemovePriceFeedRequest = new RemovePriceFeedRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RemovePriceFeedResponse$Type extends MessageType<RemovePriceFeedResponse> {
    constructor() {
        super("tdex_daemon.v2.RemovePriceFeedResponse", []);
    }
    create(value?: PartialMessage<RemovePriceFeedResponse>): RemovePriceFeedResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RemovePriceFeedResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RemovePriceFeedResponse): RemovePriceFeedResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: RemovePriceFeedResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex_daemon.v2.RemovePriceFeedResponse
 */
export const RemovePriceFeedResponse = new RemovePriceFeedResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ListSupportedPriceSourcesRequest$Type extends MessageType<ListSupportedPriceSourcesRequest> {
    constructor() {
        super("tdex_daemon.v2.ListSupportedPriceSourcesRequest", []);
    }
    create(value?: PartialMessage<ListSupportedPriceSourcesRequest>): ListSupportedPriceSourcesRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ListSupportedPriceSourcesRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListSupportedPriceSourcesRequest): ListSupportedPriceSourcesRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ListSupportedPriceSourcesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex_daemon.v2.ListSupportedPriceSourcesRequest
 */
export const ListSupportedPriceSourcesRequest = new ListSupportedPriceSourcesRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ListSupportedPriceSourcesResponse$Type extends MessageType<ListSupportedPriceSourcesResponse> {
    constructor() {
        super("tdex_daemon.v2.ListSupportedPriceSourcesResponse", [
            { no: 1, name: "sources", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ListSupportedPriceSourcesResponse>): ListSupportedPriceSourcesResponse {
        const message = { sources: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ListSupportedPriceSourcesResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListSupportedPriceSourcesResponse): ListSupportedPriceSourcesResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string sources */ 1:
                    message.sources.push(reader.string());
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
    internalBinaryWrite(message: ListSupportedPriceSourcesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated string sources = 1; */
        for (let i = 0; i < message.sources.length; i++)
            writer.tag(1, WireType.LengthDelimited).string(message.sources[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex_daemon.v2.ListSupportedPriceSourcesResponse
 */
export const ListSupportedPriceSourcesResponse = new ListSupportedPriceSourcesResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPriceFeedRequest$Type extends MessageType<GetPriceFeedRequest> {
    constructor() {
        super("tdex_daemon.v2.GetPriceFeedRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetPriceFeedRequest>): GetPriceFeedRequest {
        const message = { id: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetPriceFeedRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetPriceFeedRequest): GetPriceFeedRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
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
    internalBinaryWrite(message: GetPriceFeedRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex_daemon.v2.GetPriceFeedRequest
 */
export const GetPriceFeedRequest = new GetPriceFeedRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPriceFeedResponse$Type extends MessageType<GetPriceFeedResponse> {
    constructor() {
        super("tdex_daemon.v2.GetPriceFeedResponse", [
            { no: 1, name: "feed", kind: "message", T: () => PriceFeed }
        ]);
    }
    create(value?: PartialMessage<GetPriceFeedResponse>): GetPriceFeedResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetPriceFeedResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetPriceFeedResponse): GetPriceFeedResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* tdex_daemon.v2.PriceFeed feed */ 1:
                    message.feed = PriceFeed.internalBinaryRead(reader, reader.uint32(), options, message.feed);
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
    internalBinaryWrite(message: GetPriceFeedResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* tdex_daemon.v2.PriceFeed feed = 1; */
        if (message.feed)
            PriceFeed.internalBinaryWrite(message.feed, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex_daemon.v2.GetPriceFeedResponse
 */
export const GetPriceFeedResponse = new GetPriceFeedResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ListPriceFeedsRequest$Type extends MessageType<ListPriceFeedsRequest> {
    constructor() {
        super("tdex_daemon.v2.ListPriceFeedsRequest", []);
    }
    create(value?: PartialMessage<ListPriceFeedsRequest>): ListPriceFeedsRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ListPriceFeedsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListPriceFeedsRequest): ListPriceFeedsRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ListPriceFeedsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex_daemon.v2.ListPriceFeedsRequest
 */
export const ListPriceFeedsRequest = new ListPriceFeedsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ListPriceFeedsResponse$Type extends MessageType<ListPriceFeedsResponse> {
    constructor() {
        super("tdex_daemon.v2.ListPriceFeedsResponse", [
            { no: 1, name: "feeds", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PriceFeed }
        ]);
    }
    create(value?: PartialMessage<ListPriceFeedsResponse>): ListPriceFeedsResponse {
        const message = { feeds: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ListPriceFeedsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListPriceFeedsResponse): ListPriceFeedsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated tdex_daemon.v2.PriceFeed feeds */ 1:
                    message.feeds.push(PriceFeed.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: ListPriceFeedsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated tdex_daemon.v2.PriceFeed feeds = 1; */
        for (let i = 0; i < message.feeds.length; i++)
            PriceFeed.internalBinaryWrite(message.feeds[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex_daemon.v2.ListPriceFeedsResponse
 */
export const ListPriceFeedsResponse = new ListPriceFeedsResponse$Type();
/**
 * @generated ServiceType for protobuf service tdex_daemon.v2.FeederService
 */
export const FeederService = new ServiceType("tdex_daemon.v2.FeederService", [
    { name: "AddPriceFeed", options: {}, I: AddPriceFeedRequest, O: AddPriceFeedResponse },
    { name: "StartPriceFeed", options: {}, I: StartPriceFeedRequest, O: StartPriceFeedResponse },
    { name: "StopPriceFeed", options: {}, I: StopPriceFeedRequest, O: StopPriceFeedResponse },
    { name: "UpdatePriceFeed", options: {}, I: UpdatePriceFeedRequest, O: UpdatePriceFeedResponse },
    { name: "RemovePriceFeed", options: {}, I: RemovePriceFeedRequest, O: RemovePriceFeedResponse },
    { name: "GetPriceFeed", options: {}, I: GetPriceFeedRequest, O: GetPriceFeedResponse },
    { name: "ListPriceFeeds", options: {}, I: ListPriceFeedsRequest, O: ListPriceFeedsResponse },
    { name: "ListSupportedPriceSources", options: {}, I: ListSupportedPriceSourcesRequest, O: ListSupportedPriceSourcesResponse }
]);
