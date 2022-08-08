import * as jspb from 'google-protobuf'

import * as tdex_v1_types_pb from '../../tdex/v1/types_pb';


export class AccountInfo extends jspb.Message {
  getAccountIndex(): number;
  setAccountIndex(value: number): AccountInfo;

  getDerivationPath(): string;
  setDerivationPath(value: string): AccountInfo;

  getXpub(): string;
  setXpub(value: string): AccountInfo;

  getLastExternalDerived(): number;
  setLastExternalDerived(value: number): AccountInfo;

  getLastInternalDerived(): number;
  setLastInternalDerived(value: number): AccountInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AccountInfo): AccountInfo.AsObject;
  static serializeBinaryToWriter(message: AccountInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountInfo;
  static deserializeBinaryFromReader(message: AccountInfo, reader: jspb.BinaryReader): AccountInfo;
}

export namespace AccountInfo {
  export type AsObject = {
    accountIndex: number,
    derivationPath: string,
    xpub: string,
    lastExternalDerived: number,
    lastInternalDerived: number,
  }
}

export class MarketInfo extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): MarketInfo;
  hasMarket(): boolean;
  clearMarket(): MarketInfo;

  getFee(): tdex_v1_types_pb.Fee | undefined;
  setFee(value?: tdex_v1_types_pb.Fee): MarketInfo;
  hasFee(): boolean;
  clearFee(): MarketInfo;

  getTradable(): boolean;
  setTradable(value: boolean): MarketInfo;

  getStrategyType(): StrategyType;
  setStrategyType(value: StrategyType): MarketInfo;

  getAccountIndex(): number;
  setAccountIndex(value: number): MarketInfo;

  getPrice(): tdex_v1_types_pb.Price | undefined;
  setPrice(value?: tdex_v1_types_pb.Price): MarketInfo;
  hasPrice(): boolean;
  clearPrice(): MarketInfo;

  getBalance(): tdex_v1_types_pb.Balance | undefined;
  setBalance(value?: tdex_v1_types_pb.Balance): MarketInfo;
  hasBalance(): boolean;
  clearBalance(): MarketInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MarketInfo): MarketInfo.AsObject;
  static serializeBinaryToWriter(message: MarketInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketInfo;
  static deserializeBinaryFromReader(message: MarketInfo, reader: jspb.BinaryReader): MarketInfo;
}

export namespace MarketInfo {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject,
    fee?: tdex_v1_types_pb.Fee.AsObject,
    tradable: boolean,
    strategyType: StrategyType,
    accountIndex: number,
    price?: tdex_v1_types_pb.Price.AsObject,
    balance?: tdex_v1_types_pb.Balance.AsObject,
  }
}

export class UtxoInfo extends jspb.Message {
  getOutpoint(): Outpoint | undefined;
  setOutpoint(value?: Outpoint): UtxoInfo;
  hasOutpoint(): boolean;
  clearOutpoint(): UtxoInfo;

  getValue(): number;
  setValue(value: number): UtxoInfo;

  getAsset(): string;
  setAsset(value: string): UtxoInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UtxoInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UtxoInfo): UtxoInfo.AsObject;
  static serializeBinaryToWriter(message: UtxoInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UtxoInfo;
  static deserializeBinaryFromReader(message: UtxoInfo, reader: jspb.BinaryReader): UtxoInfo;
}

export namespace UtxoInfo {
  export type AsObject = {
    outpoint?: Outpoint.AsObject,
    value: number,
    asset: string,
  }
}

export class TradeStatusInfo extends jspb.Message {
  getStatus(): TradeStatus;
  setStatus(value: TradeStatus): TradeStatusInfo;

  getFailed(): boolean;
  setFailed(value: boolean): TradeStatusInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeStatusInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TradeStatusInfo): TradeStatusInfo.AsObject;
  static serializeBinaryToWriter(message: TradeStatusInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeStatusInfo;
  static deserializeBinaryFromReader(message: TradeStatusInfo, reader: jspb.BinaryReader): TradeStatusInfo;
}

export namespace TradeStatusInfo {
  export type AsObject = {
    status: TradeStatus,
    failed: boolean,
  }
}

export class SwapInfo extends jspb.Message {
  getAmountP(): number;
  setAmountP(value: number): SwapInfo;

  getAssetP(): string;
  setAssetP(value: string): SwapInfo;

  getAmountR(): number;
  setAmountR(value: number): SwapInfo;

  getAssetR(): string;
  setAssetR(value: string): SwapInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SwapInfo): SwapInfo.AsObject;
  static serializeBinaryToWriter(message: SwapInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapInfo;
  static deserializeBinaryFromReader(message: SwapInfo, reader: jspb.BinaryReader): SwapInfo;
}

export namespace SwapInfo {
  export type AsObject = {
    amountP: number,
    assetP: string,
    amountR: number,
    assetR: string,
  }
}

export class SwapFailInfo extends jspb.Message {
  getFailureCode(): number;
  setFailureCode(value: number): SwapFailInfo;

  getFailureMessage(): string;
  setFailureMessage(value: string): SwapFailInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapFailInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SwapFailInfo): SwapFailInfo.AsObject;
  static serializeBinaryToWriter(message: SwapFailInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapFailInfo;
  static deserializeBinaryFromReader(message: SwapFailInfo, reader: jspb.BinaryReader): SwapFailInfo;
}

export namespace SwapFailInfo {
  export type AsObject = {
    failureCode: number,
    failureMessage: string,
  }
}

export class TradeInfo extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): TradeInfo;

  getStatus(): TradeStatusInfo | undefined;
  setStatus(value?: TradeStatusInfo): TradeInfo;
  hasStatus(): boolean;
  clearStatus(): TradeInfo;

  getSwapInfo(): SwapInfo | undefined;
  setSwapInfo(value?: SwapInfo): TradeInfo;
  hasSwapInfo(): boolean;
  clearSwapInfo(): TradeInfo;

  getFailInfo(): SwapFailInfo | undefined;
  setFailInfo(value?: SwapFailInfo): TradeInfo;
  hasFailInfo(): boolean;
  clearFailInfo(): TradeInfo;

  getMarketWithFee(): tdex_v1_types_pb.MarketWithFee | undefined;
  setMarketWithFee(value?: tdex_v1_types_pb.MarketWithFee): TradeInfo;
  hasMarketWithFee(): boolean;
  clearMarketWithFee(): TradeInfo;

  getPrice(): TradePrice | undefined;
  setPrice(value?: TradePrice): TradeInfo;
  hasPrice(): boolean;
  clearPrice(): TradeInfo;

  getTxUrl(): string;
  setTxUrl(value: string): TradeInfo;

  getRequestTimeUnix(): number;
  setRequestTimeUnix(value: number): TradeInfo;

  getAcceptTimeUnix(): number;
  setAcceptTimeUnix(value: number): TradeInfo;

  getCompleteTimeUnix(): number;
  setCompleteTimeUnix(value: number): TradeInfo;

  getSettleTimeUnix(): number;
  setSettleTimeUnix(value: number): TradeInfo;

  getExpiryTimeUnix(): number;
  setExpiryTimeUnix(value: number): TradeInfo;

  getRequestTimeUtc(): string;
  setRequestTimeUtc(value: string): TradeInfo;

  getAcceptTimeUtc(): string;
  setAcceptTimeUtc(value: string): TradeInfo;

  getCompleteTimeUtc(): string;
  setCompleteTimeUtc(value: string): TradeInfo;

  getSettleTimeUtc(): string;
  setSettleTimeUtc(value: string): TradeInfo;

  getExpiryTimeUtc(): string;
  setExpiryTimeUtc(value: string): TradeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TradeInfo): TradeInfo.AsObject;
  static serializeBinaryToWriter(message: TradeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeInfo;
  static deserializeBinaryFromReader(message: TradeInfo, reader: jspb.BinaryReader): TradeInfo;
}

export namespace TradeInfo {
  export type AsObject = {
    tradeId: string,
    status?: TradeStatusInfo.AsObject,
    swapInfo?: SwapInfo.AsObject,
    failInfo?: SwapFailInfo.AsObject,
    marketWithFee?: tdex_v1_types_pb.MarketWithFee.AsObject,
    price?: TradePrice.AsObject,
    txUrl: string,
    requestTimeUnix: number,
    acceptTimeUnix: number,
    completeTimeUnix: number,
    settleTimeUnix: number,
    expiryTimeUnix: number,
    requestTimeUtc: string,
    acceptTimeUtc: string,
    completeTimeUtc: string,
    settleTimeUtc: string,
    expiryTimeUtc: string,
  }
}

export class FeeInfo extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): FeeInfo;

  getBasisPoint(): number;
  setBasisPoint(value: number): FeeInfo;

  getAsset(): string;
  setAsset(value: string): FeeInfo;

  getPercentageFeeAmount(): number;
  setPercentageFeeAmount(value: number): FeeInfo;

  getFixedFeeAmount(): number;
  setFixedFeeAmount(value: number): FeeInfo;

  getMarketPrice(): number;
  setMarketPrice(value: number): FeeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FeeInfo): FeeInfo.AsObject;
  static serializeBinaryToWriter(message: FeeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeInfo;
  static deserializeBinaryFromReader(message: FeeInfo, reader: jspb.BinaryReader): FeeInfo;
}

export namespace FeeInfo {
  export type AsObject = {
    tradeId: string,
    basisPoint: number,
    asset: string,
    percentageFeeAmount: number,
    fixedFeeAmount: number,
    marketPrice: number,
  }
}

export class BalanceInfo extends jspb.Message {
  getTotalBalance(): number;
  setTotalBalance(value: number): BalanceInfo;

  getConfirmedBalance(): number;
  setConfirmedBalance(value: number): BalanceInfo;

  getUnconfirmedBalance(): number;
  setUnconfirmedBalance(value: number): BalanceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalanceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BalanceInfo): BalanceInfo.AsObject;
  static serializeBinaryToWriter(message: BalanceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalanceInfo;
  static deserializeBinaryFromReader(message: BalanceInfo, reader: jspb.BinaryReader): BalanceInfo;
}

export namespace BalanceInfo {
  export type AsObject = {
    totalBalance: number,
    confirmedBalance: number,
    unconfirmedBalance: number,
  }
}

export class TxOutput extends jspb.Message {
  getAsset(): string;
  setAsset(value: string): TxOutput;

  getValue(): number;
  setValue(value: number): TxOutput;

  getAddress(): string;
  setAddress(value: string): TxOutput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxOutput.AsObject;
  static toObject(includeInstance: boolean, msg: TxOutput): TxOutput.AsObject;
  static serializeBinaryToWriter(message: TxOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxOutput;
  static deserializeBinaryFromReader(message: TxOutput, reader: jspb.BinaryReader): TxOutput;
}

export namespace TxOutput {
  export type AsObject = {
    asset: string,
    value: number,
    address: string,
  }
}

export class AddressWithBlindingKey extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): AddressWithBlindingKey;

  getBlinding(): string;
  setBlinding(value: string): AddressWithBlindingKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressWithBlindingKey.AsObject;
  static toObject(includeInstance: boolean, msg: AddressWithBlindingKey): AddressWithBlindingKey.AsObject;
  static serializeBinaryToWriter(message: AddressWithBlindingKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressWithBlindingKey;
  static deserializeBinaryFromReader(message: AddressWithBlindingKey, reader: jspb.BinaryReader): AddressWithBlindingKey;
}

export namespace AddressWithBlindingKey {
  export type AsObject = {
    address: string,
    blinding: string,
  }
}

export class Outpoint extends jspb.Message {
  getHash(): string;
  setHash(value: string): Outpoint;

  getIndex(): number;
  setIndex(value: number): Outpoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Outpoint.AsObject;
  static toObject(includeInstance: boolean, msg: Outpoint): Outpoint.AsObject;
  static serializeBinaryToWriter(message: Outpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Outpoint;
  static deserializeBinaryFromReader(message: Outpoint, reader: jspb.BinaryReader): Outpoint;
}

export namespace Outpoint {
  export type AsObject = {
    hash: string,
    index: number,
  }
}

export class TradePrice extends jspb.Message {
  getBasePrice(): number;
  setBasePrice(value: number): TradePrice;

  getQuotePrice(): number;
  setQuotePrice(value: number): TradePrice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradePrice.AsObject;
  static toObject(includeInstance: boolean, msg: TradePrice): TradePrice.AsObject;
  static serializeBinaryToWriter(message: TradePrice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradePrice;
  static deserializeBinaryFromReader(message: TradePrice, reader: jspb.BinaryReader): TradePrice;
}

export namespace TradePrice {
  export type AsObject = {
    basePrice: number,
    quotePrice: number,
  }
}

export class WebhookInfo extends jspb.Message {
  getId(): string;
  setId(value: string): WebhookInfo;

  getEndpoint(): string;
  setEndpoint(value: string): WebhookInfo;

  getIsSecured(): boolean;
  setIsSecured(value: boolean): WebhookInfo;

  getActionType(): ActionType;
  setActionType(value: ActionType): WebhookInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebhookInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WebhookInfo): WebhookInfo.AsObject;
  static serializeBinaryToWriter(message: WebhookInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebhookInfo;
  static deserializeBinaryFromReader(message: WebhookInfo, reader: jspb.BinaryReader): WebhookInfo;
}

export namespace WebhookInfo {
  export type AsObject = {
    id: string,
    endpoint: string,
    isSecured: boolean,
    actionType: ActionType,
  }
}

export class Deposit extends jspb.Message {
  getUtxo(): UtxoInfo | undefined;
  setUtxo(value?: UtxoInfo): Deposit;
  hasUtxo(): boolean;
  clearUtxo(): Deposit;

  getTimestampUnix(): number;
  setTimestampUnix(value: number): Deposit;

  getTimestampUtc(): string;
  setTimestampUtc(value: string): Deposit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Deposit.AsObject;
  static toObject(includeInstance: boolean, msg: Deposit): Deposit.AsObject;
  static serializeBinaryToWriter(message: Deposit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Deposit;
  static deserializeBinaryFromReader(message: Deposit, reader: jspb.BinaryReader): Deposit;
}

export namespace Deposit {
  export type AsObject = {
    utxo?: UtxoInfo.AsObject,
    timestampUnix: number,
    timestampUtc: string,
  }
}

export class Withdrawal extends jspb.Message {
  getTxId(): string;
  setTxId(value: string): Withdrawal;

  getBalance(): tdex_v1_types_pb.Balance | undefined;
  setBalance(value?: tdex_v1_types_pb.Balance): Withdrawal;
  hasBalance(): boolean;
  clearBalance(): Withdrawal;

  getAddress(): string;
  setAddress(value: string): Withdrawal;

  getTimestampUnix(): number;
  setTimestampUnix(value: number): Withdrawal;

  getTimestampUtc(): string;
  setTimestampUtc(value: string): Withdrawal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Withdrawal.AsObject;
  static toObject(includeInstance: boolean, msg: Withdrawal): Withdrawal.AsObject;
  static serializeBinaryToWriter(message: Withdrawal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Withdrawal;
  static deserializeBinaryFromReader(message: Withdrawal, reader: jspb.BinaryReader): Withdrawal;
}

export namespace Withdrawal {
  export type AsObject = {
    txId: string,
    balance?: tdex_v1_types_pb.Balance.AsObject,
    address: string,
    timestampUnix: number,
    timestampUtc: string,
  }
}

export class Page extends jspb.Message {
  getPageNumber(): number;
  setPageNumber(value: number): Page;

  getPageSize(): number;
  setPageSize(value: number): Page;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Page.AsObject;
  static toObject(includeInstance: boolean, msg: Page): Page.AsObject;
  static serializeBinaryToWriter(message: Page, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Page;
  static deserializeBinaryFromReader(message: Page, reader: jspb.BinaryReader): Page;
}

export namespace Page {
  export type AsObject = {
    pageNumber: number,
    pageSize: number,
  }
}

export class MarketReport extends jspb.Message {
  getTotalCollectedFees(): MarketCollectedFees | undefined;
  setTotalCollectedFees(value?: MarketCollectedFees): MarketReport;
  hasTotalCollectedFees(): boolean;
  clearTotalCollectedFees(): MarketReport;

  getTotalVolume(): MarketVolume | undefined;
  setTotalVolume(value?: MarketVolume): MarketReport;
  hasTotalVolume(): boolean;
  clearTotalVolume(): MarketReport;

  getGroupedVolumeList(): Array<MarketVolume>;
  setGroupedVolumeList(value: Array<MarketVolume>): MarketReport;
  clearGroupedVolumeList(): MarketReport;
  addGroupedVolume(value?: MarketVolume, index?: number): MarketVolume;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketReport.AsObject;
  static toObject(includeInstance: boolean, msg: MarketReport): MarketReport.AsObject;
  static serializeBinaryToWriter(message: MarketReport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketReport;
  static deserializeBinaryFromReader(message: MarketReport, reader: jspb.BinaryReader): MarketReport;
}

export namespace MarketReport {
  export type AsObject = {
    totalCollectedFees?: MarketCollectedFees.AsObject,
    totalVolume?: MarketVolume.AsObject,
    groupedVolumeList: Array<MarketVolume.AsObject>,
  }
}

export class MarketCollectedFees extends jspb.Message {
  getBaseAmount(): number;
  setBaseAmount(value: number): MarketCollectedFees;

  getQuoteAmount(): number;
  setQuoteAmount(value: number): MarketCollectedFees;

  getStartDate(): string;
  setStartDate(value: string): MarketCollectedFees;

  getEndDate(): string;
  setEndDate(value: string): MarketCollectedFees;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketCollectedFees.AsObject;
  static toObject(includeInstance: boolean, msg: MarketCollectedFees): MarketCollectedFees.AsObject;
  static serializeBinaryToWriter(message: MarketCollectedFees, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketCollectedFees;
  static deserializeBinaryFromReader(message: MarketCollectedFees, reader: jspb.BinaryReader): MarketCollectedFees;
}

export namespace MarketCollectedFees {
  export type AsObject = {
    baseAmount: number,
    quoteAmount: number,
    startDate: string,
    endDate: string,
  }
}

export class MarketVolume extends jspb.Message {
  getBaseVolume(): number;
  setBaseVolume(value: number): MarketVolume;

  getQuoteVolume(): number;
  setQuoteVolume(value: number): MarketVolume;

  getStartDate(): string;
  setStartDate(value: string): MarketVolume;

  getEndDate(): string;
  setEndDate(value: string): MarketVolume;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketVolume.AsObject;
  static toObject(includeInstance: boolean, msg: MarketVolume): MarketVolume.AsObject;
  static serializeBinaryToWriter(message: MarketVolume, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketVolume;
  static deserializeBinaryFromReader(message: MarketVolume, reader: jspb.BinaryReader): MarketVolume;
}

export namespace MarketVolume {
  export type AsObject = {
    baseVolume: number,
    quoteVolume: number,
    startDate: string,
    endDate: string,
  }
}

export class TimeRange extends jspb.Message {
  getPredefinedPeriod(): PredefinedPeriod;
  setPredefinedPeriod(value: PredefinedPeriod): TimeRange;

  getCustomPeriod(): CustomPeriod | undefined;
  setCustomPeriod(value?: CustomPeriod): TimeRange;
  hasCustomPeriod(): boolean;
  clearCustomPeriod(): TimeRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeRange.AsObject;
  static toObject(includeInstance: boolean, msg: TimeRange): TimeRange.AsObject;
  static serializeBinaryToWriter(message: TimeRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeRange;
  static deserializeBinaryFromReader(message: TimeRange, reader: jspb.BinaryReader): TimeRange;
}

export namespace TimeRange {
  export type AsObject = {
    predefinedPeriod: PredefinedPeriod,
    customPeriod?: CustomPeriod.AsObject,
  }
}

export class CustomPeriod extends jspb.Message {
  getStartDate(): string;
  setStartDate(value: string): CustomPeriod;

  getEndDate(): string;
  setEndDate(value: string): CustomPeriod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomPeriod.AsObject;
  static toObject(includeInstance: boolean, msg: CustomPeriod): CustomPeriod.AsObject;
  static serializeBinaryToWriter(message: CustomPeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomPeriod;
  static deserializeBinaryFromReader(message: CustomPeriod, reader: jspb.BinaryReader): CustomPeriod;
}

export namespace CustomPeriod {
  export type AsObject = {
    startDate: string,
    endDate: string,
  }
}

export enum StrategyType { 
  STRATEGY_TYPE_PLUGGABLE = 0,
  STRATEGY_TYPE_BALANCED = 1,
  STRATEGY_TYPE_UNBALANCED = 2,
}
export enum TradeStatus { 
  TRADE_STATUS_UNDEFINED = 0,
  TRADE_STATUS_REQUEST = 1,
  TRADE_STATUS_ACCEPT = 2,
  TRADE_STATUS_COMPLETE = 3,
  TRADE_STATUS_SETTLED = 4,
  TRADE_STATUS_EXPIRED = 5,
}
export enum ActionType { 
  ACTION_TYPE_TRADE_SETTLED = 0,
  ACTION_TYPE_ACCOUNT_LOW_BALANCE = 1,
  ACTION_TYPE_ACCOUNT_WITHDRAW = 2,
  ACTION_TYPE_ALL_ACTIONS = 3,
}
export enum PredefinedPeriod { 
  PREDEFINED_PERIOD_UNSPECIFIED = 0,
  PREDEFINED_PERIOD_LAST_HOUR = 1,
  PREDEFINED_PERIOD_LAST_DAY = 2,
  PREDEFINED_PERIOD_LAST_WEEK = 3,
  PREDEFINED_PERIOD_LAST_MONTH = 4,
  PREDEFINED_PERIOD_LAST_THREE_MONTHS = 5,
  PREDEFINED_PERIOD_YEAR_TO_DATE = 6,
  PREDEFINED_PERIOD_LAST_YEAR = 7,
  PREDEFINED_PERIOD_ALL = 8,
}
export enum TimeFrame { 
  TIME_FRAME_HOUR = 0,
  TIME_FRAME_FOUR_HOURS = 1,
  TIME_FRAME_DAY = 2,
  TIME_FRAME_WEEK = 3,
  TIME_FRAME_MONTH = 4,
}
