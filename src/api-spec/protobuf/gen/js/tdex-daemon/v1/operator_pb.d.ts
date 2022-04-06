import * as jspb from 'google-protobuf';

import type * as tdex_v1_types_pb from '../../tdex/v1/types_pb';

import type * as tdex$daemon_v1_wallet_pb from './wallet_pb';

export class GetInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInfoRequest): GetInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInfoRequest;
  static deserializeBinaryFromReader(message: GetInfoRequest, reader: jspb.BinaryReader): GetInfoRequest;
}

export namespace GetInfoRequest {
  export type AsObject = {};
}

export class GetInfoReply extends jspb.Message {
  getRootPath(): string;
  setRootPath(value: string): GetInfoReply;

  getMasterBlindingKey(): string;
  setMasterBlindingKey(value: string): GetInfoReply;

  getAccountInfoList(): AccountInfo[];
  setAccountInfoList(value: AccountInfo[]): GetInfoReply;
  clearAccountInfoList(): GetInfoReply;
  addAccountInfo(value?: AccountInfo, index?: number): AccountInfo;

  getNetwork(): string;
  setNetwork(value: string): GetInfoReply;

  getBuildData(): BuildInfo | undefined;
  setBuildData(value?: BuildInfo): GetInfoReply;
  hasBuildData(): boolean;
  clearBuildData(): GetInfoReply;

  getFixedBaseAsset(): string;
  setFixedBaseAsset(value: string): GetInfoReply;

  getFixedQuoteAsset(): string;
  setFixedQuoteAsset(value: string): GetInfoReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInfoReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetInfoReply): GetInfoReply.AsObject;
  static serializeBinaryToWriter(message: GetInfoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInfoReply;
  static deserializeBinaryFromReader(message: GetInfoReply, reader: jspb.BinaryReader): GetInfoReply;
}

export namespace GetInfoReply {
  export type AsObject = {
    rootPath: string;
    masterBlindingKey: string;
    accountInfoList: AccountInfo.AsObject[];
    network: string;
    buildData?: BuildInfo.AsObject;
    fixedBaseAsset: string;
    fixedQuoteAsset: string;
  };
}

export class BuildInfo extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): BuildInfo;

  getCommit(): string;
  setCommit(value: string): BuildInfo;

  getDate(): string;
  setDate(value: string): BuildInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BuildInfo): BuildInfo.AsObject;
  static serializeBinaryToWriter(message: BuildInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildInfo;
  static deserializeBinaryFromReader(message: BuildInfo, reader: jspb.BinaryReader): BuildInfo;
}

export namespace BuildInfo {
  export type AsObject = {
    version: string;
    commit: string;
    date: string;
  };
}

export class GetFeeAddressRequest extends jspb.Message {
  getNumOfAddresses(): number;
  setNumOfAddresses(value: number): GetFeeAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeeAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeeAddressRequest): GetFeeAddressRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeeAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeeAddressRequest;
  static deserializeBinaryFromReader(
    message: GetFeeAddressRequest,
    reader: jspb.BinaryReader
  ): GetFeeAddressRequest;
}

export namespace GetFeeAddressRequest {
  export type AsObject = {
    numOfAddresses: number;
  };
}

export class GetFeeAddressReply extends jspb.Message {
  getAddressWithBlindingKeyList(): tdex_v1_types_pb.AddressWithBlindingKey[];
  setAddressWithBlindingKeyList(value: tdex_v1_types_pb.AddressWithBlindingKey[]): GetFeeAddressReply;
  clearAddressWithBlindingKeyList(): GetFeeAddressReply;
  addAddressWithBlindingKey(
    value?: tdex_v1_types_pb.AddressWithBlindingKey,
    index?: number
  ): tdex_v1_types_pb.AddressWithBlindingKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeeAddressReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeeAddressReply): GetFeeAddressReply.AsObject;
  static serializeBinaryToWriter(message: GetFeeAddressReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeeAddressReply;
  static deserializeBinaryFromReader(
    message: GetFeeAddressReply,
    reader: jspb.BinaryReader
  ): GetFeeAddressReply;
}

export namespace GetFeeAddressReply {
  export type AsObject = {
    addressWithBlindingKeyList: tdex_v1_types_pb.AddressWithBlindingKey.AsObject[];
  };
}

export class ListFeeAddressesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeeAddressesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeeAddressesRequest): ListFeeAddressesRequest.AsObject;
  static serializeBinaryToWriter(message: ListFeeAddressesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeeAddressesRequest;
  static deserializeBinaryFromReader(
    message: ListFeeAddressesRequest,
    reader: jspb.BinaryReader
  ): ListFeeAddressesRequest;
}

export namespace ListFeeAddressesRequest {
  export type AsObject = {};
}

export class ListFeeAddressesReply extends jspb.Message {
  getAddressWithBlindingKeyList(): tdex_v1_types_pb.AddressWithBlindingKey[];
  setAddressWithBlindingKeyList(value: tdex_v1_types_pb.AddressWithBlindingKey[]): ListFeeAddressesReply;
  clearAddressWithBlindingKeyList(): ListFeeAddressesReply;
  addAddressWithBlindingKey(
    value?: tdex_v1_types_pb.AddressWithBlindingKey,
    index?: number
  ): tdex_v1_types_pb.AddressWithBlindingKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeeAddressesReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeeAddressesReply): ListFeeAddressesReply.AsObject;
  static serializeBinaryToWriter(message: ListFeeAddressesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeeAddressesReply;
  static deserializeBinaryFromReader(
    message: ListFeeAddressesReply,
    reader: jspb.BinaryReader
  ): ListFeeAddressesReply;
}

export namespace ListFeeAddressesReply {
  export type AsObject = {
    addressWithBlindingKeyList: tdex_v1_types_pb.AddressWithBlindingKey.AsObject[];
  };
}

export class GetFeeBalanceRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeeBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeeBalanceRequest): GetFeeBalanceRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeeBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeeBalanceRequest;
  static deserializeBinaryFromReader(
    message: GetFeeBalanceRequest,
    reader: jspb.BinaryReader
  ): GetFeeBalanceRequest;
}

export namespace GetFeeBalanceRequest {
  export type AsObject = {};
}

export class GetFeeBalanceReply extends jspb.Message {
  getAvailableBalance(): number;
  setAvailableBalance(value: number): GetFeeBalanceReply;

  getTotalBalance(): number;
  setTotalBalance(value: number): GetFeeBalanceReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeeBalanceReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeeBalanceReply): GetFeeBalanceReply.AsObject;
  static serializeBinaryToWriter(message: GetFeeBalanceReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeeBalanceReply;
  static deserializeBinaryFromReader(
    message: GetFeeBalanceReply,
    reader: jspb.BinaryReader
  ): GetFeeBalanceReply;
}

export namespace GetFeeBalanceReply {
  export type AsObject = {
    availableBalance: number;
    totalBalance: number;
  };
}

export class ClaimFeeDepositsRequest extends jspb.Message {
  getOutpointsList(): TxOutpoint[];
  setOutpointsList(value: TxOutpoint[]): ClaimFeeDepositsRequest;
  clearOutpointsList(): ClaimFeeDepositsRequest;
  addOutpoints(value?: TxOutpoint, index?: number): TxOutpoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimFeeDepositsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimFeeDepositsRequest): ClaimFeeDepositsRequest.AsObject;
  static serializeBinaryToWriter(message: ClaimFeeDepositsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimFeeDepositsRequest;
  static deserializeBinaryFromReader(
    message: ClaimFeeDepositsRequest,
    reader: jspb.BinaryReader
  ): ClaimFeeDepositsRequest;
}

export namespace ClaimFeeDepositsRequest {
  export type AsObject = {
    outpointsList: TxOutpoint.AsObject[];
  };
}

export class ClaimFeeDepositsReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimFeeDepositsReply.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimFeeDepositsReply): ClaimFeeDepositsReply.AsObject;
  static serializeBinaryToWriter(message: ClaimFeeDepositsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimFeeDepositsReply;
  static deserializeBinaryFromReader(
    message: ClaimFeeDepositsReply,
    reader: jspb.BinaryReader
  ): ClaimFeeDepositsReply;
}

export namespace ClaimFeeDepositsReply {
  export type AsObject = {};
}

export class WithdrawFeeRequest extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): WithdrawFeeRequest;

  getMillisatsPerByte(): number;
  setMillisatsPerByte(value: number): WithdrawFeeRequest;

  getAddress(): string;
  setAddress(value: string): WithdrawFeeRequest;

  getAsset(): string;
  setAsset(value: string): WithdrawFeeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawFeeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawFeeRequest): WithdrawFeeRequest.AsObject;
  static serializeBinaryToWriter(message: WithdrawFeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawFeeRequest;
  static deserializeBinaryFromReader(
    message: WithdrawFeeRequest,
    reader: jspb.BinaryReader
  ): WithdrawFeeRequest;
}

export namespace WithdrawFeeRequest {
  export type AsObject = {
    amount: number;
    millisatsPerByte: number;
    address: string;
    asset: string;
  };
}

export class WithdrawFeeReply extends jspb.Message {
  getTxid(): string;
  setTxid(value: string): WithdrawFeeReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawFeeReply.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawFeeReply): WithdrawFeeReply.AsObject;
  static serializeBinaryToWriter(message: WithdrawFeeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawFeeReply;
  static deserializeBinaryFromReader(message: WithdrawFeeReply, reader: jspb.BinaryReader): WithdrawFeeReply;
}

export namespace WithdrawFeeReply {
  export type AsObject = {
    txid: string;
  };
}

export class NewMarketRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): NewMarketRequest;
  hasMarket(): boolean;
  clearMarket(): NewMarketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewMarketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewMarketRequest): NewMarketRequest.AsObject;
  static serializeBinaryToWriter(message: NewMarketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewMarketRequest;
  static deserializeBinaryFromReader(message: NewMarketRequest, reader: jspb.BinaryReader): NewMarketRequest;
}

export namespace NewMarketRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject;
  };
}

export class NewMarketReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewMarketReply.AsObject;
  static toObject(includeInstance: boolean, msg: NewMarketReply): NewMarketReply.AsObject;
  static serializeBinaryToWriter(message: NewMarketReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewMarketReply;
  static deserializeBinaryFromReader(message: NewMarketReply, reader: jspb.BinaryReader): NewMarketReply;
}

export namespace NewMarketReply {
  export type AsObject = {};
}

export class GetMarketInfoRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): GetMarketInfoRequest;
  hasMarket(): boolean;
  clearMarket(): GetMarketInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketInfoRequest): GetMarketInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetMarketInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketInfoRequest;
  static deserializeBinaryFromReader(
    message: GetMarketInfoRequest,
    reader: jspb.BinaryReader
  ): GetMarketInfoRequest;
}

export namespace GetMarketInfoRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject;
  };
}

export class GetMarketInfoReply extends jspb.Message {
  getInfo(): MarketInfo | undefined;
  setInfo(value?: MarketInfo): GetMarketInfoReply;
  hasInfo(): boolean;
  clearInfo(): GetMarketInfoReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketInfoReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketInfoReply): GetMarketInfoReply.AsObject;
  static serializeBinaryToWriter(message: GetMarketInfoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketInfoReply;
  static deserializeBinaryFromReader(
    message: GetMarketInfoReply,
    reader: jspb.BinaryReader
  ): GetMarketInfoReply;
}

export namespace GetMarketInfoReply {
  export type AsObject = {
    info?: MarketInfo.AsObject;
  };
}

export class GetMarketAddressRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): GetMarketAddressRequest;
  hasMarket(): boolean;
  clearMarket(): GetMarketAddressRequest;

  getNumOfAddresses(): number;
  setNumOfAddresses(value: number): GetMarketAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketAddressRequest): GetMarketAddressRequest.AsObject;
  static serializeBinaryToWriter(message: GetMarketAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketAddressRequest;
  static deserializeBinaryFromReader(
    message: GetMarketAddressRequest,
    reader: jspb.BinaryReader
  ): GetMarketAddressRequest;
}

export namespace GetMarketAddressRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject;
    numOfAddresses: number;
  };
}

export class GetMarketAddressReply extends jspb.Message {
  getAddressWithBlindingKeyList(): tdex_v1_types_pb.AddressWithBlindingKey[];
  setAddressWithBlindingKeyList(value: tdex_v1_types_pb.AddressWithBlindingKey[]): GetMarketAddressReply;
  clearAddressWithBlindingKeyList(): GetMarketAddressReply;
  addAddressWithBlindingKey(
    value?: tdex_v1_types_pb.AddressWithBlindingKey,
    index?: number
  ): tdex_v1_types_pb.AddressWithBlindingKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketAddressReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketAddressReply): GetMarketAddressReply.AsObject;
  static serializeBinaryToWriter(message: GetMarketAddressReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketAddressReply;
  static deserializeBinaryFromReader(
    message: GetMarketAddressReply,
    reader: jspb.BinaryReader
  ): GetMarketAddressReply;
}

export namespace GetMarketAddressReply {
  export type AsObject = {
    addressWithBlindingKeyList: tdex_v1_types_pb.AddressWithBlindingKey.AsObject[];
  };
}

export class ListMarketAddressesRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): ListMarketAddressesRequest;
  hasMarket(): boolean;
  clearMarket(): ListMarketAddressesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMarketAddressesRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListMarketAddressesRequest
  ): ListMarketAddressesRequest.AsObject;
  static serializeBinaryToWriter(message: ListMarketAddressesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMarketAddressesRequest;
  static deserializeBinaryFromReader(
    message: ListMarketAddressesRequest,
    reader: jspb.BinaryReader
  ): ListMarketAddressesRequest;
}

export namespace ListMarketAddressesRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject;
  };
}

export class ListMarketAddressesReply extends jspb.Message {
  getAddressWithBlindingKeyList(): tdex_v1_types_pb.AddressWithBlindingKey[];
  setAddressWithBlindingKeyList(value: tdex_v1_types_pb.AddressWithBlindingKey[]): ListMarketAddressesReply;
  clearAddressWithBlindingKeyList(): ListMarketAddressesReply;
  addAddressWithBlindingKey(
    value?: tdex_v1_types_pb.AddressWithBlindingKey,
    index?: number
  ): tdex_v1_types_pb.AddressWithBlindingKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMarketAddressesReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListMarketAddressesReply): ListMarketAddressesReply.AsObject;
  static serializeBinaryToWriter(message: ListMarketAddressesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMarketAddressesReply;
  static deserializeBinaryFromReader(
    message: ListMarketAddressesReply,
    reader: jspb.BinaryReader
  ): ListMarketAddressesReply;
}

export namespace ListMarketAddressesReply {
  export type AsObject = {
    addressWithBlindingKeyList: tdex_v1_types_pb.AddressWithBlindingKey.AsObject[];
  };
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
  static deserializeBinaryFromReader(
    message: GetMarketBalanceRequest,
    reader: jspb.BinaryReader
  ): GetMarketBalanceRequest;
}

export namespace GetMarketBalanceRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject;
  };
}

export class GetMarketBalanceReply extends jspb.Message {
  getAvailableBalance(): tdex_v1_types_pb.Balance | undefined;
  setAvailableBalance(value?: tdex_v1_types_pb.Balance): GetMarketBalanceReply;
  hasAvailableBalance(): boolean;
  clearAvailableBalance(): GetMarketBalanceReply;

  getTotalBalance(): tdex_v1_types_pb.Balance | undefined;
  setTotalBalance(value?: tdex_v1_types_pb.Balance): GetMarketBalanceReply;
  hasTotalBalance(): boolean;
  clearTotalBalance(): GetMarketBalanceReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketBalanceReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketBalanceReply): GetMarketBalanceReply.AsObject;
  static serializeBinaryToWriter(message: GetMarketBalanceReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketBalanceReply;
  static deserializeBinaryFromReader(
    message: GetMarketBalanceReply,
    reader: jspb.BinaryReader
  ): GetMarketBalanceReply;
}

export namespace GetMarketBalanceReply {
  export type AsObject = {
    availableBalance?: tdex_v1_types_pb.Balance.AsObject;
    totalBalance?: tdex_v1_types_pb.Balance.AsObject;
  };
}

export class ClaimMarketDepositsRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): ClaimMarketDepositsRequest;
  hasMarket(): boolean;
  clearMarket(): ClaimMarketDepositsRequest;

  getOutpointsList(): TxOutpoint[];
  setOutpointsList(value: TxOutpoint[]): ClaimMarketDepositsRequest;
  clearOutpointsList(): ClaimMarketDepositsRequest;
  addOutpoints(value?: TxOutpoint, index?: number): TxOutpoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimMarketDepositsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ClaimMarketDepositsRequest
  ): ClaimMarketDepositsRequest.AsObject;
  static serializeBinaryToWriter(message: ClaimMarketDepositsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimMarketDepositsRequest;
  static deserializeBinaryFromReader(
    message: ClaimMarketDepositsRequest,
    reader: jspb.BinaryReader
  ): ClaimMarketDepositsRequest;
}

export namespace ClaimMarketDepositsRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject;
    outpointsList: TxOutpoint.AsObject[];
  };
}

export class ClaimMarketDepositsReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimMarketDepositsReply.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimMarketDepositsReply): ClaimMarketDepositsReply.AsObject;
  static serializeBinaryToWriter(message: ClaimMarketDepositsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimMarketDepositsReply;
  static deserializeBinaryFromReader(
    message: ClaimMarketDepositsReply,
    reader: jspb.BinaryReader
  ): ClaimMarketDepositsReply;
}

export namespace ClaimMarketDepositsReply {
  export type AsObject = {};
}

export class OpenMarketRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): OpenMarketRequest;
  hasMarket(): boolean;
  clearMarket(): OpenMarketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenMarketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenMarketRequest): OpenMarketRequest.AsObject;
  static serializeBinaryToWriter(message: OpenMarketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenMarketRequest;
  static deserializeBinaryFromReader(
    message: OpenMarketRequest,
    reader: jspb.BinaryReader
  ): OpenMarketRequest;
}

export namespace OpenMarketRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject;
  };
}

export class OpenMarketReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenMarketReply.AsObject;
  static toObject(includeInstance: boolean, msg: OpenMarketReply): OpenMarketReply.AsObject;
  static serializeBinaryToWriter(message: OpenMarketReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenMarketReply;
  static deserializeBinaryFromReader(message: OpenMarketReply, reader: jspb.BinaryReader): OpenMarketReply;
}

export namespace OpenMarketReply {
  export type AsObject = {};
}

export class CloseMarketRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): CloseMarketRequest;
  hasMarket(): boolean;
  clearMarket(): CloseMarketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseMarketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CloseMarketRequest): CloseMarketRequest.AsObject;
  static serializeBinaryToWriter(message: CloseMarketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseMarketRequest;
  static deserializeBinaryFromReader(
    message: CloseMarketRequest,
    reader: jspb.BinaryReader
  ): CloseMarketRequest;
}

export namespace CloseMarketRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject;
  };
}

export class CloseMarketReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseMarketReply.AsObject;
  static toObject(includeInstance: boolean, msg: CloseMarketReply): CloseMarketReply.AsObject;
  static serializeBinaryToWriter(message: CloseMarketReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseMarketReply;
  static deserializeBinaryFromReader(message: CloseMarketReply, reader: jspb.BinaryReader): CloseMarketReply;
}

export namespace CloseMarketReply {
  export type AsObject = {};
}

export class ListMarketsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMarketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMarketsRequest): ListMarketsRequest.AsObject;
  static serializeBinaryToWriter(message: ListMarketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMarketsRequest;
  static deserializeBinaryFromReader(
    message: ListMarketsRequest,
    reader: jspb.BinaryReader
  ): ListMarketsRequest;
}

export namespace ListMarketsRequest {
  export type AsObject = {};
}

export class ListMarketsReply extends jspb.Message {
  getMarketsList(): MarketInfo[];
  setMarketsList(value: MarketInfo[]): ListMarketsReply;
  clearMarketsList(): ListMarketsReply;
  addMarkets(value?: MarketInfo, index?: number): MarketInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMarketsReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListMarketsReply): ListMarketsReply.AsObject;
  static serializeBinaryToWriter(message: ListMarketsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMarketsReply;
  static deserializeBinaryFromReader(message: ListMarketsReply, reader: jspb.BinaryReader): ListMarketsReply;
}

export namespace ListMarketsReply {
  export type AsObject = {
    marketsList: MarketInfo.AsObject[];
  };
}

export class DropMarketRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): DropMarketRequest;
  hasMarket(): boolean;
  clearMarket(): DropMarketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropMarketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DropMarketRequest): DropMarketRequest.AsObject;
  static serializeBinaryToWriter(message: DropMarketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropMarketRequest;
  static deserializeBinaryFromReader(
    message: DropMarketRequest,
    reader: jspb.BinaryReader
  ): DropMarketRequest;
}

export namespace DropMarketRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject;
  };
}

export class DropMarketReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropMarketReply.AsObject;
  static toObject(includeInstance: boolean, msg: DropMarketReply): DropMarketReply.AsObject;
  static serializeBinaryToWriter(message: DropMarketReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropMarketReply;
  static deserializeBinaryFromReader(message: DropMarketReply, reader: jspb.BinaryReader): DropMarketReply;
}

export namespace DropMarketReply {
  export type AsObject = {};
}

export class GetMarketCollectedSwapFeesRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): GetMarketCollectedSwapFeesRequest;
  hasMarket(): boolean;
  clearMarket(): GetMarketCollectedSwapFeesRequest;

  getPage(): Page | undefined;
  setPage(value?: Page): GetMarketCollectedSwapFeesRequest;
  hasPage(): boolean;
  clearPage(): GetMarketCollectedSwapFeesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketCollectedSwapFeesRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetMarketCollectedSwapFeesRequest
  ): GetMarketCollectedSwapFeesRequest.AsObject;
  static serializeBinaryToWriter(message: GetMarketCollectedSwapFeesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketCollectedSwapFeesRequest;
  static deserializeBinaryFromReader(
    message: GetMarketCollectedSwapFeesRequest,
    reader: jspb.BinaryReader
  ): GetMarketCollectedSwapFeesRequest;
}

export namespace GetMarketCollectedSwapFeesRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject;
    page?: Page.AsObject;
  };
}

export class GetMarketCollectedSwapFeesReply extends jspb.Message {
  getCollectedFeesList(): FeeInfo[];
  setCollectedFeesList(value: FeeInfo[]): GetMarketCollectedSwapFeesReply;
  clearCollectedFeesList(): GetMarketCollectedSwapFeesReply;
  addCollectedFees(value?: FeeInfo, index?: number): FeeInfo;

  getTotalCollectedFeesPerAssetMap(): jspb.Map<string, number>;
  clearTotalCollectedFeesPerAssetMap(): GetMarketCollectedSwapFeesReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketCollectedSwapFeesReply.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetMarketCollectedSwapFeesReply
  ): GetMarketCollectedSwapFeesReply.AsObject;
  static serializeBinaryToWriter(message: GetMarketCollectedSwapFeesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketCollectedSwapFeesReply;
  static deserializeBinaryFromReader(
    message: GetMarketCollectedSwapFeesReply,
    reader: jspb.BinaryReader
  ): GetMarketCollectedSwapFeesReply;
}

export namespace GetMarketCollectedSwapFeesReply {
  export type AsObject = {
    collectedFeesList: FeeInfo.AsObject[];
    totalCollectedFeesPerAssetMap: [string, number][];
  };
}

export class WithdrawMarketRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): WithdrawMarketRequest;
  hasMarket(): boolean;
  clearMarket(): WithdrawMarketRequest;

  getBalanceToWithdraw(): tdex_v1_types_pb.Balance | undefined;
  setBalanceToWithdraw(value?: tdex_v1_types_pb.Balance): WithdrawMarketRequest;
  hasBalanceToWithdraw(): boolean;
  clearBalanceToWithdraw(): WithdrawMarketRequest;

  getMillisatsPerByte(): number;
  setMillisatsPerByte(value: number): WithdrawMarketRequest;

  getAddress(): string;
  setAddress(value: string): WithdrawMarketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawMarketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawMarketRequest): WithdrawMarketRequest.AsObject;
  static serializeBinaryToWriter(message: WithdrawMarketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawMarketRequest;
  static deserializeBinaryFromReader(
    message: WithdrawMarketRequest,
    reader: jspb.BinaryReader
  ): WithdrawMarketRequest;
}

export namespace WithdrawMarketRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject;
    balanceToWithdraw?: tdex_v1_types_pb.Balance.AsObject;
    millisatsPerByte: number;
    address: string;
  };
}

export class WithdrawMarketReply extends jspb.Message {
  getTxid(): string;
  setTxid(value: string): WithdrawMarketReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawMarketReply.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawMarketReply): WithdrawMarketReply.AsObject;
  static serializeBinaryToWriter(message: WithdrawMarketReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawMarketReply;
  static deserializeBinaryFromReader(
    message: WithdrawMarketReply,
    reader: jspb.BinaryReader
  ): WithdrawMarketReply;
}

export namespace WithdrawMarketReply {
  export type AsObject = {
    txid: string;
  };
}

export class UpdateMarketPercentageFeeRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): UpdateMarketPercentageFeeRequest;
  hasMarket(): boolean;
  clearMarket(): UpdateMarketPercentageFeeRequest;

  getBasisPoint(): number;
  setBasisPoint(value: number): UpdateMarketPercentageFeeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMarketPercentageFeeRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateMarketPercentageFeeRequest
  ): UpdateMarketPercentageFeeRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMarketPercentageFeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMarketPercentageFeeRequest;
  static deserializeBinaryFromReader(
    message: UpdateMarketPercentageFeeRequest,
    reader: jspb.BinaryReader
  ): UpdateMarketPercentageFeeRequest;
}

export namespace UpdateMarketPercentageFeeRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject;
    basisPoint: number;
  };
}

export class UpdateMarketFixedFeeRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): UpdateMarketFixedFeeRequest;
  hasMarket(): boolean;
  clearMarket(): UpdateMarketFixedFeeRequest;

  getFixed(): tdex_v1_types_pb.Fixed | undefined;
  setFixed(value?: tdex_v1_types_pb.Fixed): UpdateMarketFixedFeeRequest;
  hasFixed(): boolean;
  clearFixed(): UpdateMarketFixedFeeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMarketFixedFeeRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateMarketFixedFeeRequest
  ): UpdateMarketFixedFeeRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMarketFixedFeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMarketFixedFeeRequest;
  static deserializeBinaryFromReader(
    message: UpdateMarketFixedFeeRequest,
    reader: jspb.BinaryReader
  ): UpdateMarketFixedFeeRequest;
}

export namespace UpdateMarketFixedFeeRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject;
    fixed?: tdex_v1_types_pb.Fixed.AsObject;
  };
}

export class UpdateMarketFeeReply extends jspb.Message {
  getMarketWithFee(): tdex_v1_types_pb.MarketWithFee | undefined;
  setMarketWithFee(value?: tdex_v1_types_pb.MarketWithFee): UpdateMarketFeeReply;
  hasMarketWithFee(): boolean;
  clearMarketWithFee(): UpdateMarketFeeReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMarketFeeReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMarketFeeReply): UpdateMarketFeeReply.AsObject;
  static serializeBinaryToWriter(message: UpdateMarketFeeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMarketFeeReply;
  static deserializeBinaryFromReader(
    message: UpdateMarketFeeReply,
    reader: jspb.BinaryReader
  ): UpdateMarketFeeReply;
}

export namespace UpdateMarketFeeReply {
  export type AsObject = {
    marketWithFee?: tdex_v1_types_pb.MarketWithFee.AsObject;
  };
}

export class UpdateMarketPriceRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): UpdateMarketPriceRequest;
  hasMarket(): boolean;
  clearMarket(): UpdateMarketPriceRequest;

  getPrice(): tdex_v1_types_pb.Price | undefined;
  setPrice(value?: tdex_v1_types_pb.Price): UpdateMarketPriceRequest;
  hasPrice(): boolean;
  clearPrice(): UpdateMarketPriceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMarketPriceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMarketPriceRequest): UpdateMarketPriceRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMarketPriceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMarketPriceRequest;
  static deserializeBinaryFromReader(
    message: UpdateMarketPriceRequest,
    reader: jspb.BinaryReader
  ): UpdateMarketPriceRequest;
}

export namespace UpdateMarketPriceRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject;
    price?: tdex_v1_types_pb.Price.AsObject;
  };
}

export class UpdateMarketPriceReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMarketPriceReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMarketPriceReply): UpdateMarketPriceReply.AsObject;
  static serializeBinaryToWriter(message: UpdateMarketPriceReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMarketPriceReply;
  static deserializeBinaryFromReader(
    message: UpdateMarketPriceReply,
    reader: jspb.BinaryReader
  ): UpdateMarketPriceReply;
}

export namespace UpdateMarketPriceReply {
  export type AsObject = {};
}

export class UpdateMarketStrategyRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): UpdateMarketStrategyRequest;
  hasMarket(): boolean;
  clearMarket(): UpdateMarketStrategyRequest;

  getStrategyType(): StrategyType;
  setStrategyType(value: StrategyType): UpdateMarketStrategyRequest;

  getMetadata(): string;
  setMetadata(value: string): UpdateMarketStrategyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMarketStrategyRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateMarketStrategyRequest
  ): UpdateMarketStrategyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMarketStrategyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMarketStrategyRequest;
  static deserializeBinaryFromReader(
    message: UpdateMarketStrategyRequest,
    reader: jspb.BinaryReader
  ): UpdateMarketStrategyRequest;
}

export namespace UpdateMarketStrategyRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject;
    strategyType: StrategyType;
    metadata: string;
  };
}

export class UpdateMarketStrategyReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMarketStrategyReply.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateMarketStrategyReply
  ): UpdateMarketStrategyReply.AsObject;
  static serializeBinaryToWriter(message: UpdateMarketStrategyReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMarketStrategyReply;
  static deserializeBinaryFromReader(
    message: UpdateMarketStrategyReply,
    reader: jspb.BinaryReader
  ): UpdateMarketStrategyReply;
}

export namespace UpdateMarketStrategyReply {
  export type AsObject = {};
}

export class GetFeeFragmenterAddressRequest extends jspb.Message {
  getNumOfAddresses(): number;
  setNumOfAddresses(value: number): GetFeeFragmenterAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeeFragmenterAddressRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetFeeFragmenterAddressRequest
  ): GetFeeFragmenterAddressRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeeFragmenterAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeeFragmenterAddressRequest;
  static deserializeBinaryFromReader(
    message: GetFeeFragmenterAddressRequest,
    reader: jspb.BinaryReader
  ): GetFeeFragmenterAddressRequest;
}

export namespace GetFeeFragmenterAddressRequest {
  export type AsObject = {
    numOfAddresses: number;
  };
}

export class GetFeeFragmenterAddressReply extends jspb.Message {
  getAddressWithBlindingKeyList(): tdex_v1_types_pb.AddressWithBlindingKey[];
  setAddressWithBlindingKeyList(
    value: tdex_v1_types_pb.AddressWithBlindingKey[]
  ): GetFeeFragmenterAddressReply;
  clearAddressWithBlindingKeyList(): GetFeeFragmenterAddressReply;
  addAddressWithBlindingKey(
    value?: tdex_v1_types_pb.AddressWithBlindingKey,
    index?: number
  ): tdex_v1_types_pb.AddressWithBlindingKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeeFragmenterAddressReply.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetFeeFragmenterAddressReply
  ): GetFeeFragmenterAddressReply.AsObject;
  static serializeBinaryToWriter(message: GetFeeFragmenterAddressReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeeFragmenterAddressReply;
  static deserializeBinaryFromReader(
    message: GetFeeFragmenterAddressReply,
    reader: jspb.BinaryReader
  ): GetFeeFragmenterAddressReply;
}

export namespace GetFeeFragmenterAddressReply {
  export type AsObject = {
    addressWithBlindingKeyList: tdex_v1_types_pb.AddressWithBlindingKey.AsObject[];
  };
}

export class ListFeeFragmenterAddressesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeeFragmenterAddressesRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListFeeFragmenterAddressesRequest
  ): ListFeeFragmenterAddressesRequest.AsObject;
  static serializeBinaryToWriter(message: ListFeeFragmenterAddressesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeeFragmenterAddressesRequest;
  static deserializeBinaryFromReader(
    message: ListFeeFragmenterAddressesRequest,
    reader: jspb.BinaryReader
  ): ListFeeFragmenterAddressesRequest;
}

export namespace ListFeeFragmenterAddressesRequest {
  export type AsObject = {};
}

export class ListFeeFragmenterAddressesReply extends jspb.Message {
  getAddressWithBlindingKeyList(): tdex_v1_types_pb.AddressWithBlindingKey[];
  setAddressWithBlindingKeyList(
    value: tdex_v1_types_pb.AddressWithBlindingKey[]
  ): ListFeeFragmenterAddressesReply;
  clearAddressWithBlindingKeyList(): ListFeeFragmenterAddressesReply;
  addAddressWithBlindingKey(
    value?: tdex_v1_types_pb.AddressWithBlindingKey,
    index?: number
  ): tdex_v1_types_pb.AddressWithBlindingKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeeFragmenterAddressesReply.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListFeeFragmenterAddressesReply
  ): ListFeeFragmenterAddressesReply.AsObject;
  static serializeBinaryToWriter(message: ListFeeFragmenterAddressesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeeFragmenterAddressesReply;
  static deserializeBinaryFromReader(
    message: ListFeeFragmenterAddressesReply,
    reader: jspb.BinaryReader
  ): ListFeeFragmenterAddressesReply;
}

export namespace ListFeeFragmenterAddressesReply {
  export type AsObject = {
    addressWithBlindingKeyList: tdex_v1_types_pb.AddressWithBlindingKey.AsObject[];
  };
}

export class GetFeeFragmenterBalanceRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeeFragmenterBalanceRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetFeeFragmenterBalanceRequest
  ): GetFeeFragmenterBalanceRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeeFragmenterBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeeFragmenterBalanceRequest;
  static deserializeBinaryFromReader(
    message: GetFeeFragmenterBalanceRequest,
    reader: jspb.BinaryReader
  ): GetFeeFragmenterBalanceRequest;
}

export namespace GetFeeFragmenterBalanceRequest {
  export type AsObject = {};
}

export class GetFeeFragmenterBalanceReply extends jspb.Message {
  getBalanceMap(): jspb.Map<string, tdex$daemon_v1_wallet_pb.BalanceInfo>;
  clearBalanceMap(): GetFeeFragmenterBalanceReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeeFragmenterBalanceReply.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetFeeFragmenterBalanceReply
  ): GetFeeFragmenterBalanceReply.AsObject;
  static serializeBinaryToWriter(message: GetFeeFragmenterBalanceReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeeFragmenterBalanceReply;
  static deserializeBinaryFromReader(
    message: GetFeeFragmenterBalanceReply,
    reader: jspb.BinaryReader
  ): GetFeeFragmenterBalanceReply;
}

export namespace GetFeeFragmenterBalanceReply {
  export type AsObject = {
    balanceMap: [string, tdex$daemon_v1_wallet_pb.BalanceInfo.AsObject][];
  };
}

export class FeeFragmenterSplitFundsRequest extends jspb.Message {
  getMaxFragments(): number;
  setMaxFragments(value: number): FeeFragmenterSplitFundsRequest;

  getMillisatsPerByte(): number;
  setMillisatsPerByte(value: number): FeeFragmenterSplitFundsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeFragmenterSplitFundsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: FeeFragmenterSplitFundsRequest
  ): FeeFragmenterSplitFundsRequest.AsObject;
  static serializeBinaryToWriter(message: FeeFragmenterSplitFundsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeFragmenterSplitFundsRequest;
  static deserializeBinaryFromReader(
    message: FeeFragmenterSplitFundsRequest,
    reader: jspb.BinaryReader
  ): FeeFragmenterSplitFundsRequest;
}

export namespace FeeFragmenterSplitFundsRequest {
  export type AsObject = {
    maxFragments: number;
    millisatsPerByte: number;
  };
}

export class FragmenterSplitFundsReply extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): FragmenterSplitFundsReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FragmenterSplitFundsReply.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: FragmenterSplitFundsReply
  ): FragmenterSplitFundsReply.AsObject;
  static serializeBinaryToWriter(message: FragmenterSplitFundsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FragmenterSplitFundsReply;
  static deserializeBinaryFromReader(
    message: FragmenterSplitFundsReply,
    reader: jspb.BinaryReader
  ): FragmenterSplitFundsReply;
}

export namespace FragmenterSplitFundsReply {
  export type AsObject = {
    message: string;
  };
}

export class WithdrawFeeFragmenterRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): WithdrawFeeFragmenterRequest;

  getMillisatsPerByte(): number;
  setMillisatsPerByte(value: number): WithdrawFeeFragmenterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawFeeFragmenterRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: WithdrawFeeFragmenterRequest
  ): WithdrawFeeFragmenterRequest.AsObject;
  static serializeBinaryToWriter(message: WithdrawFeeFragmenterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawFeeFragmenterRequest;
  static deserializeBinaryFromReader(
    message: WithdrawFeeFragmenterRequest,
    reader: jspb.BinaryReader
  ): WithdrawFeeFragmenterRequest;
}

export namespace WithdrawFeeFragmenterRequest {
  export type AsObject = {
    address: string;
    millisatsPerByte: number;
  };
}

export class WithdrawFeeFragmenterReply extends jspb.Message {
  getTxid(): string;
  setTxid(value: string): WithdrawFeeFragmenterReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawFeeFragmenterReply.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: WithdrawFeeFragmenterReply
  ): WithdrawFeeFragmenterReply.AsObject;
  static serializeBinaryToWriter(message: WithdrawFeeFragmenterReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawFeeFragmenterReply;
  static deserializeBinaryFromReader(
    message: WithdrawFeeFragmenterReply,
    reader: jspb.BinaryReader
  ): WithdrawFeeFragmenterReply;
}

export namespace WithdrawFeeFragmenterReply {
  export type AsObject = {
    txid: string;
  };
}

export class GetMarketFragmenterAddressRequest extends jspb.Message {
  getNumOfAddresses(): number;
  setNumOfAddresses(value: number): GetMarketFragmenterAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketFragmenterAddressRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetMarketFragmenterAddressRequest
  ): GetMarketFragmenterAddressRequest.AsObject;
  static serializeBinaryToWriter(message: GetMarketFragmenterAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketFragmenterAddressRequest;
  static deserializeBinaryFromReader(
    message: GetMarketFragmenterAddressRequest,
    reader: jspb.BinaryReader
  ): GetMarketFragmenterAddressRequest;
}

export namespace GetMarketFragmenterAddressRequest {
  export type AsObject = {
    numOfAddresses: number;
  };
}

export class GetMarketFragmenterAddressReply extends jspb.Message {
  getAddressWithBlindingKeyList(): tdex_v1_types_pb.AddressWithBlindingKey[];
  setAddressWithBlindingKeyList(
    value: tdex_v1_types_pb.AddressWithBlindingKey[]
  ): GetMarketFragmenterAddressReply;
  clearAddressWithBlindingKeyList(): GetMarketFragmenterAddressReply;
  addAddressWithBlindingKey(
    value?: tdex_v1_types_pb.AddressWithBlindingKey,
    index?: number
  ): tdex_v1_types_pb.AddressWithBlindingKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketFragmenterAddressReply.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetMarketFragmenterAddressReply
  ): GetMarketFragmenterAddressReply.AsObject;
  static serializeBinaryToWriter(message: GetMarketFragmenterAddressReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketFragmenterAddressReply;
  static deserializeBinaryFromReader(
    message: GetMarketFragmenterAddressReply,
    reader: jspb.BinaryReader
  ): GetMarketFragmenterAddressReply;
}

export namespace GetMarketFragmenterAddressReply {
  export type AsObject = {
    addressWithBlindingKeyList: tdex_v1_types_pb.AddressWithBlindingKey.AsObject[];
  };
}

export class ListMarketFragmenterAddressesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMarketFragmenterAddressesRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListMarketFragmenterAddressesRequest
  ): ListMarketFragmenterAddressesRequest.AsObject;
  static serializeBinaryToWriter(
    message: ListMarketFragmenterAddressesRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListMarketFragmenterAddressesRequest;
  static deserializeBinaryFromReader(
    message: ListMarketFragmenterAddressesRequest,
    reader: jspb.BinaryReader
  ): ListMarketFragmenterAddressesRequest;
}

export namespace ListMarketFragmenterAddressesRequest {
  export type AsObject = {};
}

export class ListMarketFragmenterAddressesReply extends jspb.Message {
  getAddressWithBlindingKeyList(): tdex_v1_types_pb.AddressWithBlindingKey[];
  setAddressWithBlindingKeyList(
    value: tdex_v1_types_pb.AddressWithBlindingKey[]
  ): ListMarketFragmenterAddressesReply;
  clearAddressWithBlindingKeyList(): ListMarketFragmenterAddressesReply;
  addAddressWithBlindingKey(
    value?: tdex_v1_types_pb.AddressWithBlindingKey,
    index?: number
  ): tdex_v1_types_pb.AddressWithBlindingKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMarketFragmenterAddressesReply.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListMarketFragmenterAddressesReply
  ): ListMarketFragmenterAddressesReply.AsObject;
  static serializeBinaryToWriter(
    message: ListMarketFragmenterAddressesReply,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListMarketFragmenterAddressesReply;
  static deserializeBinaryFromReader(
    message: ListMarketFragmenterAddressesReply,
    reader: jspb.BinaryReader
  ): ListMarketFragmenterAddressesReply;
}

export namespace ListMarketFragmenterAddressesReply {
  export type AsObject = {
    addressWithBlindingKeyList: tdex_v1_types_pb.AddressWithBlindingKey.AsObject[];
  };
}

export class GetMarketFragmenterBalanceRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketFragmenterBalanceRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetMarketFragmenterBalanceRequest
  ): GetMarketFragmenterBalanceRequest.AsObject;
  static serializeBinaryToWriter(message: GetMarketFragmenterBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketFragmenterBalanceRequest;
  static deserializeBinaryFromReader(
    message: GetMarketFragmenterBalanceRequest,
    reader: jspb.BinaryReader
  ): GetMarketFragmenterBalanceRequest;
}

export namespace GetMarketFragmenterBalanceRequest {
  export type AsObject = {};
}

export class GetMarketFragmenterBalanceReply extends jspb.Message {
  getBalanceMap(): jspb.Map<string, tdex$daemon_v1_wallet_pb.BalanceInfo>;
  clearBalanceMap(): GetMarketFragmenterBalanceReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketFragmenterBalanceReply.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetMarketFragmenterBalanceReply
  ): GetMarketFragmenterBalanceReply.AsObject;
  static serializeBinaryToWriter(message: GetMarketFragmenterBalanceReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketFragmenterBalanceReply;
  static deserializeBinaryFromReader(
    message: GetMarketFragmenterBalanceReply,
    reader: jspb.BinaryReader
  ): GetMarketFragmenterBalanceReply;
}

export namespace GetMarketFragmenterBalanceReply {
  export type AsObject = {
    balanceMap: [string, tdex$daemon_v1_wallet_pb.BalanceInfo.AsObject][];
  };
}

export class MarketFragmenterSplitFundsRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): MarketFragmenterSplitFundsRequest;
  hasMarket(): boolean;
  clearMarket(): MarketFragmenterSplitFundsRequest;

  getMillisatsPerByte(): number;
  setMillisatsPerByte(value: number): MarketFragmenterSplitFundsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketFragmenterSplitFundsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MarketFragmenterSplitFundsRequest
  ): MarketFragmenterSplitFundsRequest.AsObject;
  static serializeBinaryToWriter(message: MarketFragmenterSplitFundsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketFragmenterSplitFundsRequest;
  static deserializeBinaryFromReader(
    message: MarketFragmenterSplitFundsRequest,
    reader: jspb.BinaryReader
  ): MarketFragmenterSplitFundsRequest;
}

export namespace MarketFragmenterSplitFundsRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject;
    millisatsPerByte: number;
  };
}

export class WithdrawMarketFragmenterRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): WithdrawMarketFragmenterRequest;

  getMillisatsPerByte(): number;
  setMillisatsPerByte(value: number): WithdrawMarketFragmenterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawMarketFragmenterRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: WithdrawMarketFragmenterRequest
  ): WithdrawMarketFragmenterRequest.AsObject;
  static serializeBinaryToWriter(message: WithdrawMarketFragmenterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawMarketFragmenterRequest;
  static deserializeBinaryFromReader(
    message: WithdrawMarketFragmenterRequest,
    reader: jspb.BinaryReader
  ): WithdrawMarketFragmenterRequest;
}

export namespace WithdrawMarketFragmenterRequest {
  export type AsObject = {
    address: string;
    millisatsPerByte: number;
  };
}

export class WithdrawMarketFragmenterReply extends jspb.Message {
  getTxid(): string;
  setTxid(value: string): WithdrawMarketFragmenterReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawMarketFragmenterReply.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: WithdrawMarketFragmenterReply
  ): WithdrawMarketFragmenterReply.AsObject;
  static serializeBinaryToWriter(message: WithdrawMarketFragmenterReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawMarketFragmenterReply;
  static deserializeBinaryFromReader(
    message: WithdrawMarketFragmenterReply,
    reader: jspb.BinaryReader
  ): WithdrawMarketFragmenterReply;
}

export namespace WithdrawMarketFragmenterReply {
  export type AsObject = {
    txid: string;
  };
}

export class ListTradesRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): ListTradesRequest;
  hasMarket(): boolean;
  clearMarket(): ListTradesRequest;

  getPage(): Page | undefined;
  setPage(value?: Page): ListTradesRequest;
  hasPage(): boolean;
  clearPage(): ListTradesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTradesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTradesRequest): ListTradesRequest.AsObject;
  static serializeBinaryToWriter(message: ListTradesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTradesRequest;
  static deserializeBinaryFromReader(
    message: ListTradesRequest,
    reader: jspb.BinaryReader
  ): ListTradesRequest;
}

export namespace ListTradesRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject;
    page?: Page.AsObject;
  };
}

export class ListTradesReply extends jspb.Message {
  getTradesList(): TradeInfo[];
  setTradesList(value: TradeInfo[]): ListTradesReply;
  clearTradesList(): ListTradesReply;
  addTrades(value?: TradeInfo, index?: number): TradeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTradesReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListTradesReply): ListTradesReply.AsObject;
  static serializeBinaryToWriter(message: ListTradesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTradesReply;
  static deserializeBinaryFromReader(message: ListTradesReply, reader: jspb.BinaryReader): ListTradesReply;
}

export namespace ListTradesReply {
  export type AsObject = {
    tradesList: TradeInfo.AsObject[];
  };
}

export class ReloadUtxosRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReloadUtxosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReloadUtxosRequest): ReloadUtxosRequest.AsObject;
  static serializeBinaryToWriter(message: ReloadUtxosRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReloadUtxosRequest;
  static deserializeBinaryFromReader(
    message: ReloadUtxosRequest,
    reader: jspb.BinaryReader
  ): ReloadUtxosRequest;
}

export namespace ReloadUtxosRequest {
  export type AsObject = {};
}

export class ReloadUtxosReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReloadUtxosReply.AsObject;
  static toObject(includeInstance: boolean, msg: ReloadUtxosReply): ReloadUtxosReply.AsObject;
  static serializeBinaryToWriter(message: ReloadUtxosReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReloadUtxosReply;
  static deserializeBinaryFromReader(message: ReloadUtxosReply, reader: jspb.BinaryReader): ReloadUtxosReply;
}

export namespace ReloadUtxosReply {
  export type AsObject = {};
}

export class ListUtxosRequest extends jspb.Message {
  getAccountIndex(): number;
  setAccountIndex(value: number): ListUtxosRequest;

  getPage(): Page | undefined;
  setPage(value?: Page): ListUtxosRequest;
  hasPage(): boolean;
  clearPage(): ListUtxosRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUtxosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUtxosRequest): ListUtxosRequest.AsObject;
  static serializeBinaryToWriter(message: ListUtxosRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUtxosRequest;
  static deserializeBinaryFromReader(message: ListUtxosRequest, reader: jspb.BinaryReader): ListUtxosRequest;
}

export namespace ListUtxosRequest {
  export type AsObject = {
    accountIndex: number;
    page?: Page.AsObject;
  };
}

export class ListUtxosReply extends jspb.Message {
  getUnspentsList(): UtxoInfo[];
  setUnspentsList(value: UtxoInfo[]): ListUtxosReply;
  clearUnspentsList(): ListUtxosReply;
  addUnspents(value?: UtxoInfo, index?: number): UtxoInfo;

  getSpentsList(): UtxoInfo[];
  setSpentsList(value: UtxoInfo[]): ListUtxosReply;
  clearSpentsList(): ListUtxosReply;
  addSpents(value?: UtxoInfo, index?: number): UtxoInfo;

  getLocksList(): UtxoInfo[];
  setLocksList(value: UtxoInfo[]): ListUtxosReply;
  clearLocksList(): ListUtxosReply;
  addLocks(value?: UtxoInfo, index?: number): UtxoInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUtxosReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListUtxosReply): ListUtxosReply.AsObject;
  static serializeBinaryToWriter(message: ListUtxosReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUtxosReply;
  static deserializeBinaryFromReader(message: ListUtxosReply, reader: jspb.BinaryReader): ListUtxosReply;
}

export namespace ListUtxosReply {
  export type AsObject = {
    unspentsList: UtxoInfo.AsObject[];
    spentsList: UtxoInfo.AsObject[];
    locksList: UtxoInfo.AsObject[];
  };
}

export class AddWebhookRequest extends jspb.Message {
  getEndpoint(): string;
  setEndpoint(value: string): AddWebhookRequest;

  getAction(): ActionType;
  setAction(value: ActionType): AddWebhookRequest;

  getSecret(): string;
  setSecret(value: string): AddWebhookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddWebhookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddWebhookRequest): AddWebhookRequest.AsObject;
  static serializeBinaryToWriter(message: AddWebhookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddWebhookRequest;
  static deserializeBinaryFromReader(
    message: AddWebhookRequest,
    reader: jspb.BinaryReader
  ): AddWebhookRequest;
}

export namespace AddWebhookRequest {
  export type AsObject = {
    endpoint: string;
    action: ActionType;
    secret: string;
  };
}

export class AddWebhookReply extends jspb.Message {
  getId(): string;
  setId(value: string): AddWebhookReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddWebhookReply.AsObject;
  static toObject(includeInstance: boolean, msg: AddWebhookReply): AddWebhookReply.AsObject;
  static serializeBinaryToWriter(message: AddWebhookReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddWebhookReply;
  static deserializeBinaryFromReader(message: AddWebhookReply, reader: jspb.BinaryReader): AddWebhookReply;
}

export namespace AddWebhookReply {
  export type AsObject = {
    id: string;
  };
}

export class RemoveWebhookRequest extends jspb.Message {
  getId(): string;
  setId(value: string): RemoveWebhookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveWebhookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveWebhookRequest): RemoveWebhookRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveWebhookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveWebhookRequest;
  static deserializeBinaryFromReader(
    message: RemoveWebhookRequest,
    reader: jspb.BinaryReader
  ): RemoveWebhookRequest;
}

export namespace RemoveWebhookRequest {
  export type AsObject = {
    id: string;
  };
}

export class RemoveWebhookReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveWebhookReply.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveWebhookReply): RemoveWebhookReply.AsObject;
  static serializeBinaryToWriter(message: RemoveWebhookReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveWebhookReply;
  static deserializeBinaryFromReader(
    message: RemoveWebhookReply,
    reader: jspb.BinaryReader
  ): RemoveWebhookReply;
}

export namespace RemoveWebhookReply {
  export type AsObject = {};
}

export class ListWebhooksRequest extends jspb.Message {
  getAction(): ActionType;
  setAction(value: ActionType): ListWebhooksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebhooksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebhooksRequest): ListWebhooksRequest.AsObject;
  static serializeBinaryToWriter(message: ListWebhooksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebhooksRequest;
  static deserializeBinaryFromReader(
    message: ListWebhooksRequest,
    reader: jspb.BinaryReader
  ): ListWebhooksRequest;
}

export namespace ListWebhooksRequest {
  export type AsObject = {
    action: ActionType;
  };
}

export class ListWebhooksReply extends jspb.Message {
  getWebhookInfoList(): WebhookInfo[];
  setWebhookInfoList(value: WebhookInfo[]): ListWebhooksReply;
  clearWebhookInfoList(): ListWebhooksReply;
  addWebhookInfo(value?: WebhookInfo, index?: number): WebhookInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebhooksReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebhooksReply): ListWebhooksReply.AsObject;
  static serializeBinaryToWriter(message: ListWebhooksReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebhooksReply;
  static deserializeBinaryFromReader(
    message: ListWebhooksReply,
    reader: jspb.BinaryReader
  ): ListWebhooksReply;
}

export namespace ListWebhooksReply {
  export type AsObject = {
    webhookInfoList: WebhookInfo.AsObject[];
  };
}

export class ListDepositsRequest extends jspb.Message {
  getAccountIndex(): number;
  setAccountIndex(value: number): ListDepositsRequest;

  getPage(): Page | undefined;
  setPage(value?: Page): ListDepositsRequest;
  hasPage(): boolean;
  clearPage(): ListDepositsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDepositsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDepositsRequest): ListDepositsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDepositsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDepositsRequest;
  static deserializeBinaryFromReader(
    message: ListDepositsRequest,
    reader: jspb.BinaryReader
  ): ListDepositsRequest;
}

export namespace ListDepositsRequest {
  export type AsObject = {
    accountIndex: number;
    page?: Page.AsObject;
  };
}

export class ListDepositsReply extends jspb.Message {
  getAccountIndex(): number;
  setAccountIndex(value: number): ListDepositsReply;

  getDepositsList(): Deposit[];
  setDepositsList(value: Deposit[]): ListDepositsReply;
  clearDepositsList(): ListDepositsReply;
  addDeposits(value?: Deposit, index?: number): Deposit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDepositsReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListDepositsReply): ListDepositsReply.AsObject;
  static serializeBinaryToWriter(message: ListDepositsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDepositsReply;
  static deserializeBinaryFromReader(
    message: ListDepositsReply,
    reader: jspb.BinaryReader
  ): ListDepositsReply;
}

export namespace ListDepositsReply {
  export type AsObject = {
    accountIndex: number;
    depositsList: Deposit.AsObject[];
  };
}

export class ListWithdrawalsRequest extends jspb.Message {
  getAccountIndex(): number;
  setAccountIndex(value: number): ListWithdrawalsRequest;

  getPage(): Page | undefined;
  setPage(value?: Page): ListWithdrawalsRequest;
  hasPage(): boolean;
  clearPage(): ListWithdrawalsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWithdrawalsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWithdrawalsRequest): ListWithdrawalsRequest.AsObject;
  static serializeBinaryToWriter(message: ListWithdrawalsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWithdrawalsRequest;
  static deserializeBinaryFromReader(
    message: ListWithdrawalsRequest,
    reader: jspb.BinaryReader
  ): ListWithdrawalsRequest;
}

export namespace ListWithdrawalsRequest {
  export type AsObject = {
    accountIndex: number;
    page?: Page.AsObject;
  };
}

export class ListWithdrawalsReply extends jspb.Message {
  getAccountIndex(): number;
  setAccountIndex(value: number): ListWithdrawalsReply;

  getWithdrawalsList(): Withdrawal[];
  setWithdrawalsList(value: Withdrawal[]): ListWithdrawalsReply;
  clearWithdrawalsList(): ListWithdrawalsReply;
  addWithdrawals(value?: Withdrawal, index?: number): Withdrawal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWithdrawalsReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListWithdrawalsReply): ListWithdrawalsReply.AsObject;
  static serializeBinaryToWriter(message: ListWithdrawalsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWithdrawalsReply;
  static deserializeBinaryFromReader(
    message: ListWithdrawalsReply,
    reader: jspb.BinaryReader
  ): ListWithdrawalsReply;
}

export namespace ListWithdrawalsReply {
  export type AsObject = {
    accountIndex: number;
    withdrawalsList: Withdrawal.AsObject[];
  };
}

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
    accountIndex: number;
    derivationPath: string;
    xpub: string;
    lastExternalDerived: number;
    lastInternalDerived: number;
  };
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
    market?: tdex_v1_types_pb.Market.AsObject;
    fee?: tdex_v1_types_pb.Fee.AsObject;
    tradable: boolean;
    strategyType: StrategyType;
    accountIndex: number;
    price?: tdex_v1_types_pb.Price.AsObject;
    balance?: tdex_v1_types_pb.Balance.AsObject;
  };
}

export class UtxoInfo extends jspb.Message {
  getOutpoint(): TxOutpoint | undefined;
  setOutpoint(value?: TxOutpoint): UtxoInfo;
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
    outpoint?: TxOutpoint.AsObject;
    value: number;
    asset: string;
  };
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
    status: TradeStatus;
    failed: boolean;
  };
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
    amountP: number;
    assetP: string;
    amountR: number;
    assetR: string;
  };
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
    failureCode: number;
    failureMessage: string;
  };
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
    tradeId: string;
    status?: TradeStatusInfo.AsObject;
    swapInfo?: SwapInfo.AsObject;
    failInfo?: SwapFailInfo.AsObject;
    marketWithFee?: tdex_v1_types_pb.MarketWithFee.AsObject;
    price?: TradePrice.AsObject;
    txUrl: string;
    requestTimeUnix: number;
    acceptTimeUnix: number;
    completeTimeUnix: number;
    settleTimeUnix: number;
    expiryTimeUnix: number;
    requestTimeUtc: string;
    acceptTimeUtc: string;
    completeTimeUtc: string;
    settleTimeUtc: string;
    expiryTimeUtc: string;
  };
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
    tradeId: string;
    basisPoint: number;
    asset: string;
    percentageFeeAmount: number;
    fixedFeeAmount: number;
    marketPrice: number;
  };
}

export class TxOutpoint extends jspb.Message {
  getHash(): string;
  setHash(value: string): TxOutpoint;

  getIndex(): number;
  setIndex(value: number): TxOutpoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxOutpoint.AsObject;
  static toObject(includeInstance: boolean, msg: TxOutpoint): TxOutpoint.AsObject;
  static serializeBinaryToWriter(message: TxOutpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxOutpoint;
  static deserializeBinaryFromReader(message: TxOutpoint, reader: jspb.BinaryReader): TxOutpoint;
}

export namespace TxOutpoint {
  export type AsObject = {
    hash: string;
    index: number;
  };
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
    basePrice: number;
    quotePrice: number;
  };
}

export class WebhookInfo extends jspb.Message {
  getId(): string;
  setId(value: string): WebhookInfo;

  getEndpoint(): string;
  setEndpoint(value: string): WebhookInfo;

  getIsSecured(): boolean;
  setIsSecured(value: boolean): WebhookInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebhookInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WebhookInfo): WebhookInfo.AsObject;
  static serializeBinaryToWriter(message: WebhookInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebhookInfo;
  static deserializeBinaryFromReader(message: WebhookInfo, reader: jspb.BinaryReader): WebhookInfo;
}

export namespace WebhookInfo {
  export type AsObject = {
    id: string;
    endpoint: string;
    isSecured: boolean;
  };
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
    utxo?: UtxoInfo.AsObject;
    timestampUnix: number;
    timestampUtc: string;
  };
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
    txId: string;
    balance?: tdex_v1_types_pb.Balance.AsObject;
    address: string;
    timestampUnix: number;
    timestampUtc: string;
  };
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
    pageNumber: number;
    pageSize: number;
  };
}

export class GetMarketReportRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): GetMarketReportRequest;
  hasMarket(): boolean;
  clearMarket(): GetMarketReportRequest;

  getTimeRange(): TimeRange | undefined;
  setTimeRange(value?: TimeRange): GetMarketReportRequest;
  hasTimeRange(): boolean;
  clearTimeRange(): GetMarketReportRequest;

  getTimeFrame(): TimeFrame;
  setTimeFrame(value: TimeFrame): GetMarketReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketReportRequest): GetMarketReportRequest.AsObject;
  static serializeBinaryToWriter(message: GetMarketReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketReportRequest;
  static deserializeBinaryFromReader(
    message: GetMarketReportRequest,
    reader: jspb.BinaryReader
  ): GetMarketReportRequest;
}

export namespace GetMarketReportRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject;
    timeRange?: TimeRange.AsObject;
    timeFrame: TimeFrame;
  };
}

export class GetMarketReportReply extends jspb.Message {
  getReport(): MarketReport | undefined;
  setReport(value?: MarketReport): GetMarketReportReply;
  hasReport(): boolean;
  clearReport(): GetMarketReportReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketReportReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketReportReply): GetMarketReportReply.AsObject;
  static serializeBinaryToWriter(message: GetMarketReportReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketReportReply;
  static deserializeBinaryFromReader(
    message: GetMarketReportReply,
    reader: jspb.BinaryReader
  ): GetMarketReportReply;
}

export namespace GetMarketReportReply {
  export type AsObject = {
    report?: MarketReport.AsObject;
  };
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

  getGroupedVolumeList(): MarketVolume[];
  setGroupedVolumeList(value: MarketVolume[]): MarketReport;
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
    totalCollectedFees?: MarketCollectedFees.AsObject;
    totalVolume?: MarketVolume.AsObject;
    groupedVolumeList: MarketVolume.AsObject[];
  };
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
  static deserializeBinaryFromReader(
    message: MarketCollectedFees,
    reader: jspb.BinaryReader
  ): MarketCollectedFees;
}

export namespace MarketCollectedFees {
  export type AsObject = {
    baseAmount: number;
    quoteAmount: number;
    startDate: string;
    endDate: string;
  };
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
    baseVolume: number;
    quoteVolume: number;
    startDate: string;
    endDate: string;
  };
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
    predefinedPeriod: PredefinedPeriod;
    customPeriod?: CustomPeriod.AsObject;
  };
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
    startDate: string;
    endDate: string;
  };
}

export enum StrategyType {
  PLUGGABLE = 0,
  BALANCED = 1,
  UNBALANCED = 2,
}
export enum TradeStatus {
  UNDEFINED = 0,
  REQUEST = 1,
  ACCEPT = 2,
  COMPLETE = 3,
  SETTLED = 4,
  EXPIRED = 5,
}
export enum ActionType {
  TRADE_SETTLED = 0,
  ACCOUNT_LOW_BALANCE = 1,
  ACCOUNT_WITHDRAW = 2,
  ALL_ACTIONS = 3,
}
export enum PredefinedPeriod {
  NULL = 0,
  LAST_HOUR = 1,
  LAST_DAY = 2,
  LAST_WEEK = 3,
  LAST_MONTH = 4,
  LAST_THREE_MONTHS = 5,
  YEAR_TO_DATE = 6,
  ALL = 7,
  LAST_YEAR = 8,
}
export enum TimeFrame {
  HOUR = 0,
  FOUR_HOURS = 1,
  DAY = 2,
  WEEK = 3,
  MONTH = 4,
}
