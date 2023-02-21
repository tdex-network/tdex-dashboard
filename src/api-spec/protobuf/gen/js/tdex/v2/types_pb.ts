/* eslint-disable */
// @generated by protobuf-ts 2.8.2 with parameter add_pb_suffix,eslint_disable,ts_nocheck,keep_enum_prefix,long_type_number
// @generated from protobuf file "tdex/v2/types.proto" (package "tdex.v2", syntax proto3)
// tslint:disable
// @ts-nocheck
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
/**
 * @generated from protobuf message tdex.v2.UnblindedInput
 */
export interface UnblindedInput {
    /**
     * Index of the transaction input of reference.
     *
     * @generated from protobuf field: uint32 index = 1;
     */
    index: number;
    /**
     * Unblinded asset.
     *
     * @generated from protobuf field: string asset = 2;
     */
    asset: string;
    /**
     * Unblinded amount.
     *
     * @generated from protobuf field: uint64 amount = 3;
     */
    amount: number;
    /**
     * Asset blinider when blinding the prevout.
     *
     * @generated from protobuf field: string asset_blinder = 4;
     */
    assetBlinder: string;
    /**
     * Amount blinider used when blinding the prevout.
     *
     * @generated from protobuf field: string amount_blinder = 5;
     */
    amountBlinder: string;
}
/**
 * @generated from protobuf message tdex.v2.Fee
 */
export interface Fee {
    /**
     * Percentage fee on both assets of the market in basis point.
     *
     * @generated from protobuf field: tdex.v2.MarketFee percentage_fee = 1;
     */
    percentageFee?: MarketFee;
    /**
     * Fixed fee on both assets of the market in satoshi.
     *
     * @generated from protobuf field: tdex.v2.MarketFee fixed_fee = 2;
     */
    fixedFee?: MarketFee;
}
/**
 * @generated from protobuf message tdex.v2.MarketFee
 */
export interface MarketFee {
    /**
     * @generated from protobuf field: int64 base_asset = 1;
     */
    baseAsset: number;
    /**
     * @generated from protobuf field: int64 quote_asset = 2;
     */
    quoteAsset: number;
}
/**
 * @generated from protobuf message tdex.v2.Balance
 */
export interface Balance {
    /**
     * @generated from protobuf field: uint64 base_amount = 1;
     */
    baseAmount: number;
    /**
     * @generated from protobuf field: uint64 quote_amount = 2;
     */
    quoteAmount: number;
}
/**
 * @generated from protobuf message tdex.v2.Market
 */
export interface Market {
    /**
     * @generated from protobuf field: string base_asset = 1;
     */
    baseAsset: string;
    /**
     * @generated from protobuf field: string quote_asset = 2;
     */
    quoteAsset: string;
}
/**
 * @generated from protobuf message tdex.v2.MarketWithFee
 */
export interface MarketWithFee {
    /**
     * @generated from protobuf field: tdex.v2.Market market = 1;
     */
    market?: Market;
    /**
     * @generated from protobuf field: tdex.v2.Fee fee = 2;
     */
    fee?: Fee;
}
/**
 * @generated from protobuf message tdex.v2.Price
 */
export interface Price {
    /**
     * @generated from protobuf field: double base_price = 1;
     */
    basePrice: number;
    /**
     * @generated from protobuf field: double quote_price = 2;
     */
    quotePrice: number;
}
/**
 * @generated from protobuf message tdex.v2.Preview
 */
export interface Preview {
    /**
     * The price of the market.
     *
     * @generated from protobuf field: tdex.v2.Price price = 1;
     */
    price?: Price;
    /**
     * The fees of the market.
     *
     * @generated from protobuf field: tdex.v2.Fee fee = 2;
     */
    fee?: Fee;
    /**
     * The previewd amount (fees excluded).
     *
     * @generated from protobuf field: uint64 amount = 3;
     */
    amount: number;
    /**
     * The asset of the previewed amount (fees excluded).
     *
     * @generated from protobuf field: string asset = 4;
     */
    asset: string;
    /**
     * The previewed fee amount,
     *
     * @generated from protobuf field: uint64 fee_amount = 5;
     */
    feeAmount: number;
    /**
     * The asset of the previewed fee amount,
     *
     * @generated from protobuf field: string fee_asset = 6;
     */
    feeAsset: string;
}
/**
 * @generated from protobuf enum tdex.v2.TradeType
 */
export enum TradeType {
    /**
     * @generated from protobuf enum value: TRADE_TYPE_BUY = 0;
     */
    TRADE_TYPE_BUY = 0,
    /**
     * @generated from protobuf enum value: TRADE_TYPE_SELL = 1;
     */
    TRADE_TYPE_SELL = 1
}
/**
 * @generated from protobuf enum tdex.v2.ContentType
 */
export enum ContentType {
    /**
     * @generated from protobuf enum value: CONTENT_TYPE_JSON = 0;
     */
    CONTENT_TYPE_JSON = 0,
    /**
     * @generated from protobuf enum value: CONTENT_TYPE_GRPC = 1;
     */
    CONTENT_TYPE_GRPC = 1,
    /**
     * @generated from protobuf enum value: CONTENT_TYPE_GRPCWEB = 2;
     */
    CONTENT_TYPE_GRPCWEB = 2,
    /**
     * @generated from protobuf enum value: CONTENT_TYPE_GRPCWEBTEXT = 3;
     */
    CONTENT_TYPE_GRPCWEBTEXT = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class UnblindedInput$Type extends MessageType<UnblindedInput> {
    constructor() {
        super("tdex.v2.UnblindedInput", [
            { no: 1, name: "index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "asset", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "amount", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 4, name: "asset_blinder", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "amount_blinder", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<UnblindedInput>): UnblindedInput {
        const message = { index: 0, asset: "", amount: 0, assetBlinder: "", amountBlinder: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UnblindedInput>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UnblindedInput): UnblindedInput {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 index */ 1:
                    message.index = reader.uint32();
                    break;
                case /* string asset */ 2:
                    message.asset = reader.string();
                    break;
                case /* uint64 amount */ 3:
                    message.amount = reader.uint64().toNumber();
                    break;
                case /* string asset_blinder */ 4:
                    message.assetBlinder = reader.string();
                    break;
                case /* string amount_blinder */ 5:
                    message.amountBlinder = reader.string();
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
    internalBinaryWrite(message: UnblindedInput, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 index = 1; */
        if (message.index !== 0)
            writer.tag(1, WireType.Varint).uint32(message.index);
        /* string asset = 2; */
        if (message.asset !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.asset);
        /* uint64 amount = 3; */
        if (message.amount !== 0)
            writer.tag(3, WireType.Varint).uint64(message.amount);
        /* string asset_blinder = 4; */
        if (message.assetBlinder !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.assetBlinder);
        /* string amount_blinder = 5; */
        if (message.amountBlinder !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.amountBlinder);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex.v2.UnblindedInput
 */
export const UnblindedInput = new UnblindedInput$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Fee$Type extends MessageType<Fee> {
    constructor() {
        super("tdex.v2.Fee", [
            { no: 1, name: "percentage_fee", kind: "message", T: () => MarketFee },
            { no: 2, name: "fixed_fee", kind: "message", T: () => MarketFee }
        ]);
    }
    create(value?: PartialMessage<Fee>): Fee {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Fee>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Fee): Fee {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* tdex.v2.MarketFee percentage_fee */ 1:
                    message.percentageFee = MarketFee.internalBinaryRead(reader, reader.uint32(), options, message.percentageFee);
                    break;
                case /* tdex.v2.MarketFee fixed_fee */ 2:
                    message.fixedFee = MarketFee.internalBinaryRead(reader, reader.uint32(), options, message.fixedFee);
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
    internalBinaryWrite(message: Fee, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* tdex.v2.MarketFee percentage_fee = 1; */
        if (message.percentageFee)
            MarketFee.internalBinaryWrite(message.percentageFee, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* tdex.v2.MarketFee fixed_fee = 2; */
        if (message.fixedFee)
            MarketFee.internalBinaryWrite(message.fixedFee, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex.v2.Fee
 */
export const Fee = new Fee$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MarketFee$Type extends MessageType<MarketFee> {
    constructor() {
        super("tdex.v2.MarketFee", [
            { no: 1, name: "base_asset", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 2, name: "quote_asset", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 2 /*LongType.NUMBER*/ }
        ]);
    }
    create(value?: PartialMessage<MarketFee>): MarketFee {
        const message = { baseAsset: 0, quoteAsset: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MarketFee>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MarketFee): MarketFee {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 base_asset */ 1:
                    message.baseAsset = reader.int64().toNumber();
                    break;
                case /* int64 quote_asset */ 2:
                    message.quoteAsset = reader.int64().toNumber();
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
    internalBinaryWrite(message: MarketFee, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int64 base_asset = 1; */
        if (message.baseAsset !== 0)
            writer.tag(1, WireType.Varint).int64(message.baseAsset);
        /* int64 quote_asset = 2; */
        if (message.quoteAsset !== 0)
            writer.tag(2, WireType.Varint).int64(message.quoteAsset);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex.v2.MarketFee
 */
export const MarketFee = new MarketFee$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Balance$Type extends MessageType<Balance> {
    constructor() {
        super("tdex.v2.Balance", [
            { no: 1, name: "base_amount", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 2, name: "quote_amount", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ }
        ]);
    }
    create(value?: PartialMessage<Balance>): Balance {
        const message = { baseAmount: 0, quoteAmount: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Balance>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Balance): Balance {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 base_amount */ 1:
                    message.baseAmount = reader.uint64().toNumber();
                    break;
                case /* uint64 quote_amount */ 2:
                    message.quoteAmount = reader.uint64().toNumber();
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
    internalBinaryWrite(message: Balance, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 base_amount = 1; */
        if (message.baseAmount !== 0)
            writer.tag(1, WireType.Varint).uint64(message.baseAmount);
        /* uint64 quote_amount = 2; */
        if (message.quoteAmount !== 0)
            writer.tag(2, WireType.Varint).uint64(message.quoteAmount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex.v2.Balance
 */
export const Balance = new Balance$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Market$Type extends MessageType<Market> {
    constructor() {
        super("tdex.v2.Market", [
            { no: 1, name: "base_asset", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "quote_asset", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Market>): Market {
        const message = { baseAsset: "", quoteAsset: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Market>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Market): Market {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string base_asset */ 1:
                    message.baseAsset = reader.string();
                    break;
                case /* string quote_asset */ 2:
                    message.quoteAsset = reader.string();
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
    internalBinaryWrite(message: Market, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string base_asset = 1; */
        if (message.baseAsset !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.baseAsset);
        /* string quote_asset = 2; */
        if (message.quoteAsset !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.quoteAsset);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex.v2.Market
 */
export const Market = new Market$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MarketWithFee$Type extends MessageType<MarketWithFee> {
    constructor() {
        super("tdex.v2.MarketWithFee", [
            { no: 1, name: "market", kind: "message", T: () => Market },
            { no: 2, name: "fee", kind: "message", T: () => Fee }
        ]);
    }
    create(value?: PartialMessage<MarketWithFee>): MarketWithFee {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MarketWithFee>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MarketWithFee): MarketWithFee {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* tdex.v2.Market market */ 1:
                    message.market = Market.internalBinaryRead(reader, reader.uint32(), options, message.market);
                    break;
                case /* tdex.v2.Fee fee */ 2:
                    message.fee = Fee.internalBinaryRead(reader, reader.uint32(), options, message.fee);
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
    internalBinaryWrite(message: MarketWithFee, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* tdex.v2.Market market = 1; */
        if (message.market)
            Market.internalBinaryWrite(message.market, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* tdex.v2.Fee fee = 2; */
        if (message.fee)
            Fee.internalBinaryWrite(message.fee, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex.v2.MarketWithFee
 */
export const MarketWithFee = new MarketWithFee$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Price$Type extends MessageType<Price> {
    constructor() {
        super("tdex.v2.Price", [
            { no: 1, name: "base_price", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 2, name: "quote_price", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value?: PartialMessage<Price>): Price {
        const message = { basePrice: 0, quotePrice: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Price>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Price): Price {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* double base_price */ 1:
                    message.basePrice = reader.double();
                    break;
                case /* double quote_price */ 2:
                    message.quotePrice = reader.double();
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
    internalBinaryWrite(message: Price, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* double base_price = 1; */
        if (message.basePrice !== 0)
            writer.tag(1, WireType.Bit64).double(message.basePrice);
        /* double quote_price = 2; */
        if (message.quotePrice !== 0)
            writer.tag(2, WireType.Bit64).double(message.quotePrice);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex.v2.Price
 */
export const Price = new Price$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Preview$Type extends MessageType<Preview> {
    constructor() {
        super("tdex.v2.Preview", [
            { no: 1, name: "price", kind: "message", T: () => Price },
            { no: 2, name: "fee", kind: "message", T: () => Fee },
            { no: 3, name: "amount", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 4, name: "asset", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "fee_amount", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 6, name: "fee_asset", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Preview>): Preview {
        const message = { amount: 0, asset: "", feeAmount: 0, feeAsset: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Preview>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Preview): Preview {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* tdex.v2.Price price */ 1:
                    message.price = Price.internalBinaryRead(reader, reader.uint32(), options, message.price);
                    break;
                case /* tdex.v2.Fee fee */ 2:
                    message.fee = Fee.internalBinaryRead(reader, reader.uint32(), options, message.fee);
                    break;
                case /* uint64 amount */ 3:
                    message.amount = reader.uint64().toNumber();
                    break;
                case /* string asset */ 4:
                    message.asset = reader.string();
                    break;
                case /* uint64 fee_amount */ 5:
                    message.feeAmount = reader.uint64().toNumber();
                    break;
                case /* string fee_asset */ 6:
                    message.feeAsset = reader.string();
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
    internalBinaryWrite(message: Preview, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* tdex.v2.Price price = 1; */
        if (message.price)
            Price.internalBinaryWrite(message.price, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* tdex.v2.Fee fee = 2; */
        if (message.fee)
            Fee.internalBinaryWrite(message.fee, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* uint64 amount = 3; */
        if (message.amount !== 0)
            writer.tag(3, WireType.Varint).uint64(message.amount);
        /* string asset = 4; */
        if (message.asset !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.asset);
        /* uint64 fee_amount = 5; */
        if (message.feeAmount !== 0)
            writer.tag(5, WireType.Varint).uint64(message.feeAmount);
        /* string fee_asset = 6; */
        if (message.feeAsset !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.feeAsset);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tdex.v2.Preview
 */
export const Preview = new Preview$Type();
