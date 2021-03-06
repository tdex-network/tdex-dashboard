import * as jspb from 'google-protobuf'



export class Fee extends jspb.Message {
  getBasisPoint(): number;
  setBasisPoint(value: number): Fee;

  getFixed(): Fixed | undefined;
  setFixed(value?: Fixed): Fee;
  hasFixed(): boolean;
  clearFixed(): Fee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fee.AsObject;
  static toObject(includeInstance: boolean, msg: Fee): Fee.AsObject;
  static serializeBinaryToWriter(message: Fee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fee;
  static deserializeBinaryFromReader(message: Fee, reader: jspb.BinaryReader): Fee;
}

export namespace Fee {
  export type AsObject = {
    basisPoint: number,
    fixed?: Fixed.AsObject,
  }
}

export class Fixed extends jspb.Message {
  getBaseFee(): number;
  setBaseFee(value: number): Fixed;

  getQuoteFee(): number;
  setQuoteFee(value: number): Fixed;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fixed.AsObject;
  static toObject(includeInstance: boolean, msg: Fixed): Fixed.AsObject;
  static serializeBinaryToWriter(message: Fixed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fixed;
  static deserializeBinaryFromReader(message: Fixed, reader: jspb.BinaryReader): Fixed;
}

export namespace Fixed {
  export type AsObject = {
    baseFee: number,
    quoteFee: number,
  }
}

export class Balance extends jspb.Message {
  getBaseAmount(): number;
  setBaseAmount(value: number): Balance;

  getQuoteAmount(): number;
  setQuoteAmount(value: number): Balance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Balance.AsObject;
  static toObject(includeInstance: boolean, msg: Balance): Balance.AsObject;
  static serializeBinaryToWriter(message: Balance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Balance;
  static deserializeBinaryFromReader(message: Balance, reader: jspb.BinaryReader): Balance;
}

export namespace Balance {
  export type AsObject = {
    baseAmount: number,
    quoteAmount: number,
  }
}

export class BalanceWithFee extends jspb.Message {
  getBalance(): Balance | undefined;
  setBalance(value?: Balance): BalanceWithFee;
  hasBalance(): boolean;
  clearBalance(): BalanceWithFee;

  getFee(): Fee | undefined;
  setFee(value?: Fee): BalanceWithFee;
  hasFee(): boolean;
  clearFee(): BalanceWithFee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalanceWithFee.AsObject;
  static toObject(includeInstance: boolean, msg: BalanceWithFee): BalanceWithFee.AsObject;
  static serializeBinaryToWriter(message: BalanceWithFee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalanceWithFee;
  static deserializeBinaryFromReader(message: BalanceWithFee, reader: jspb.BinaryReader): BalanceWithFee;
}

export namespace BalanceWithFee {
  export type AsObject = {
    balance?: Balance.AsObject,
    fee?: Fee.AsObject,
  }
}

export class Market extends jspb.Message {
  getBaseAsset(): string;
  setBaseAsset(value: string): Market;

  getQuoteAsset(): string;
  setQuoteAsset(value: string): Market;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Market.AsObject;
  static toObject(includeInstance: boolean, msg: Market): Market.AsObject;
  static serializeBinaryToWriter(message: Market, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Market;
  static deserializeBinaryFromReader(message: Market, reader: jspb.BinaryReader): Market;
}

export namespace Market {
  export type AsObject = {
    baseAsset: string,
    quoteAsset: string,
  }
}

export class MarketWithFee extends jspb.Message {
  getMarket(): Market | undefined;
  setMarket(value?: Market): MarketWithFee;
  hasMarket(): boolean;
  clearMarket(): MarketWithFee;

  getFee(): Fee | undefined;
  setFee(value?: Fee): MarketWithFee;
  hasFee(): boolean;
  clearFee(): MarketWithFee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketWithFee.AsObject;
  static toObject(includeInstance: boolean, msg: MarketWithFee): MarketWithFee.AsObject;
  static serializeBinaryToWriter(message: MarketWithFee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketWithFee;
  static deserializeBinaryFromReader(message: MarketWithFee, reader: jspb.BinaryReader): MarketWithFee;
}

export namespace MarketWithFee {
  export type AsObject = {
    market?: Market.AsObject,
    fee?: Fee.AsObject,
  }
}

export class Price extends jspb.Message {
  getBasePrice(): number;
  setBasePrice(value: number): Price;

  getQuotePrice(): number;
  setQuotePrice(value: number): Price;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Price.AsObject;
  static toObject(includeInstance: boolean, msg: Price): Price.AsObject;
  static serializeBinaryToWriter(message: Price, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Price;
  static deserializeBinaryFromReader(message: Price, reader: jspb.BinaryReader): Price;
}

export namespace Price {
  export type AsObject = {
    basePrice: number,
    quotePrice: number,
  }
}

export class Preview extends jspb.Message {
  getPrice(): Price | undefined;
  setPrice(value?: Price): Preview;
  hasPrice(): boolean;
  clearPrice(): Preview;

  getFee(): Fee | undefined;
  setFee(value?: Fee): Preview;
  hasFee(): boolean;
  clearFee(): Preview;

  getAmount(): number;
  setAmount(value: number): Preview;

  getAsset(): string;
  setAsset(value: string): Preview;

  getBalance(): Balance | undefined;
  setBalance(value?: Balance): Preview;
  hasBalance(): boolean;
  clearBalance(): Preview;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Preview.AsObject;
  static toObject(includeInstance: boolean, msg: Preview): Preview.AsObject;
  static serializeBinaryToWriter(message: Preview, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Preview;
  static deserializeBinaryFromReader(message: Preview, reader: jspb.BinaryReader): Preview;
}

export namespace Preview {
  export type AsObject = {
    price?: Price.AsObject,
    fee?: Fee.AsObject,
    amount: number,
    asset: string,
    balance?: Balance.AsObject,
  }
}

export enum TradeType { 
  TRADE_TYPE_BUY = 0,
  TRADE_TYPE_SELL = 1,
}
