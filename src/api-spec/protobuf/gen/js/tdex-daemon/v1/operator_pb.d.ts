import * as jspb from 'google-protobuf'

import * as tdex$daemon_v1_types_pb from '../../tdex-daemon/v1/types_pb';
import * as tdex_v1_types_pb from '../../tdex/v1/types_pb';


export class GetInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInfoRequest): GetInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInfoRequest;
  static deserializeBinaryFromReader(message: GetInfoRequest, reader: jspb.BinaryReader): GetInfoRequest;
}

export namespace GetInfoRequest {
  export type AsObject = {
  }
}

export class GetInfoResponse extends jspb.Message {
  getRootPath(): string;
  setRootPath(value: string): GetInfoResponse;

  getMasterBlindingKey(): string;
  setMasterBlindingKey(value: string): GetInfoResponse;

  getAccountInfoList(): Array<tdex$daemon_v1_types_pb.AccountInfo>;
  setAccountInfoList(value: Array<tdex$daemon_v1_types_pb.AccountInfo>): GetInfoResponse;
  clearAccountInfoList(): GetInfoResponse;
  addAccountInfo(value?: tdex$daemon_v1_types_pb.AccountInfo, index?: number): tdex$daemon_v1_types_pb.AccountInfo;

  getNetwork(): string;
  setNetwork(value: string): GetInfoResponse;

  getBuildData(): BuildInfo | undefined;
  setBuildData(value?: BuildInfo): GetInfoResponse;
  hasBuildData(): boolean;
  clearBuildData(): GetInfoResponse;

  getFixedBaseAsset(): string;
  setFixedBaseAsset(value: string): GetInfoResponse;

  getFixedQuoteAsset(): string;
  setFixedQuoteAsset(value: string): GetInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInfoResponse): GetInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInfoResponse;
  static deserializeBinaryFromReader(message: GetInfoResponse, reader: jspb.BinaryReader): GetInfoResponse;
}

export namespace GetInfoResponse {
  export type AsObject = {
    rootPath: string,
    masterBlindingKey: string,
    accountInfoList: Array<tdex$daemon_v1_types_pb.AccountInfo.AsObject>,
    network: string,
    buildData?: BuildInfo.AsObject,
    fixedBaseAsset: string,
    fixedQuoteAsset: string,
  }
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
    version: string,
    commit: string,
    date: string,
  }
}

export class GetFeeAddressRequest extends jspb.Message {
  getNumOfAddresses(): number;
  setNumOfAddresses(value: number): GetFeeAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeeAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeeAddressRequest): GetFeeAddressRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeeAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeeAddressRequest;
  static deserializeBinaryFromReader(message: GetFeeAddressRequest, reader: jspb.BinaryReader): GetFeeAddressRequest;
}

export namespace GetFeeAddressRequest {
  export type AsObject = {
    numOfAddresses: number,
  }
}

export class GetFeeAddressResponse extends jspb.Message {
  getAddressWithBlindingKeyList(): Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey>;
  setAddressWithBlindingKeyList(value: Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey>): GetFeeAddressResponse;
  clearAddressWithBlindingKeyList(): GetFeeAddressResponse;
  addAddressWithBlindingKey(value?: tdex$daemon_v1_types_pb.AddressWithBlindingKey, index?: number): tdex$daemon_v1_types_pb.AddressWithBlindingKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeeAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeeAddressResponse): GetFeeAddressResponse.AsObject;
  static serializeBinaryToWriter(message: GetFeeAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeeAddressResponse;
  static deserializeBinaryFromReader(message: GetFeeAddressResponse, reader: jspb.BinaryReader): GetFeeAddressResponse;
}

export namespace GetFeeAddressResponse {
  export type AsObject = {
    addressWithBlindingKeyList: Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey.AsObject>,
  }
}

export class ListFeeAddressesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeeAddressesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeeAddressesRequest): ListFeeAddressesRequest.AsObject;
  static serializeBinaryToWriter(message: ListFeeAddressesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeeAddressesRequest;
  static deserializeBinaryFromReader(message: ListFeeAddressesRequest, reader: jspb.BinaryReader): ListFeeAddressesRequest;
}

export namespace ListFeeAddressesRequest {
  export type AsObject = {
  }
}

export class ListFeeAddressesResponse extends jspb.Message {
  getAddressWithBlindingKeyList(): Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey>;
  setAddressWithBlindingKeyList(value: Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey>): ListFeeAddressesResponse;
  clearAddressWithBlindingKeyList(): ListFeeAddressesResponse;
  addAddressWithBlindingKey(value?: tdex$daemon_v1_types_pb.AddressWithBlindingKey, index?: number): tdex$daemon_v1_types_pb.AddressWithBlindingKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeeAddressesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeeAddressesResponse): ListFeeAddressesResponse.AsObject;
  static serializeBinaryToWriter(message: ListFeeAddressesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeeAddressesResponse;
  static deserializeBinaryFromReader(message: ListFeeAddressesResponse, reader: jspb.BinaryReader): ListFeeAddressesResponse;
}

export namespace ListFeeAddressesResponse {
  export type AsObject = {
    addressWithBlindingKeyList: Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey.AsObject>,
  }
}

export class GetFeeBalanceRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeeBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeeBalanceRequest): GetFeeBalanceRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeeBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeeBalanceRequest;
  static deserializeBinaryFromReader(message: GetFeeBalanceRequest, reader: jspb.BinaryReader): GetFeeBalanceRequest;
}

export namespace GetFeeBalanceRequest {
  export type AsObject = {
  }
}

export class GetFeeBalanceResponse extends jspb.Message {
  getAvailableBalance(): number;
  setAvailableBalance(value: number): GetFeeBalanceResponse;

  getTotalBalance(): number;
  setTotalBalance(value: number): GetFeeBalanceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeeBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeeBalanceResponse): GetFeeBalanceResponse.AsObject;
  static serializeBinaryToWriter(message: GetFeeBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeeBalanceResponse;
  static deserializeBinaryFromReader(message: GetFeeBalanceResponse, reader: jspb.BinaryReader): GetFeeBalanceResponse;
}

export namespace GetFeeBalanceResponse {
  export type AsObject = {
    availableBalance: number,
    totalBalance: number,
  }
}

export class ClaimFeeDepositsRequest extends jspb.Message {
  getOutpointsList(): Array<tdex$daemon_v1_types_pb.Outpoint>;
  setOutpointsList(value: Array<tdex$daemon_v1_types_pb.Outpoint>): ClaimFeeDepositsRequest;
  clearOutpointsList(): ClaimFeeDepositsRequest;
  addOutpoints(value?: tdex$daemon_v1_types_pb.Outpoint, index?: number): tdex$daemon_v1_types_pb.Outpoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimFeeDepositsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimFeeDepositsRequest): ClaimFeeDepositsRequest.AsObject;
  static serializeBinaryToWriter(message: ClaimFeeDepositsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimFeeDepositsRequest;
  static deserializeBinaryFromReader(message: ClaimFeeDepositsRequest, reader: jspb.BinaryReader): ClaimFeeDepositsRequest;
}

export namespace ClaimFeeDepositsRequest {
  export type AsObject = {
    outpointsList: Array<tdex$daemon_v1_types_pb.Outpoint.AsObject>,
  }
}

export class ClaimFeeDepositsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimFeeDepositsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimFeeDepositsResponse): ClaimFeeDepositsResponse.AsObject;
  static serializeBinaryToWriter(message: ClaimFeeDepositsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimFeeDepositsResponse;
  static deserializeBinaryFromReader(message: ClaimFeeDepositsResponse, reader: jspb.BinaryReader): ClaimFeeDepositsResponse;
}

export namespace ClaimFeeDepositsResponse {
  export type AsObject = {
  }
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
  static deserializeBinaryFromReader(message: WithdrawFeeRequest, reader: jspb.BinaryReader): WithdrawFeeRequest;
}

export namespace WithdrawFeeRequest {
  export type AsObject = {
    amount: number,
    millisatsPerByte: number,
    address: string,
    asset: string,
  }
}

export class WithdrawFeeResponse extends jspb.Message {
  getTxid(): string;
  setTxid(value: string): WithdrawFeeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawFeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawFeeResponse): WithdrawFeeResponse.AsObject;
  static serializeBinaryToWriter(message: WithdrawFeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawFeeResponse;
  static deserializeBinaryFromReader(message: WithdrawFeeResponse, reader: jspb.BinaryReader): WithdrawFeeResponse;
}

export namespace WithdrawFeeResponse {
  export type AsObject = {
    txid: string,
  }
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
    market?: tdex_v1_types_pb.Market.AsObject,
  }
}

export class NewMarketResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewMarketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NewMarketResponse): NewMarketResponse.AsObject;
  static serializeBinaryToWriter(message: NewMarketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewMarketResponse;
  static deserializeBinaryFromReader(message: NewMarketResponse, reader: jspb.BinaryReader): NewMarketResponse;
}

export namespace NewMarketResponse {
  export type AsObject = {
  }
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
  static deserializeBinaryFromReader(message: GetMarketInfoRequest, reader: jspb.BinaryReader): GetMarketInfoRequest;
}

export namespace GetMarketInfoRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject,
  }
}

export class GetMarketInfoResponse extends jspb.Message {
  getInfo(): tdex$daemon_v1_types_pb.MarketInfo | undefined;
  setInfo(value?: tdex$daemon_v1_types_pb.MarketInfo): GetMarketInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetMarketInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketInfoResponse): GetMarketInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetMarketInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketInfoResponse;
  static deserializeBinaryFromReader(message: GetMarketInfoResponse, reader: jspb.BinaryReader): GetMarketInfoResponse;
}

export namespace GetMarketInfoResponse {
  export type AsObject = {
    info?: tdex$daemon_v1_types_pb.MarketInfo.AsObject,
  }
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
  static deserializeBinaryFromReader(message: GetMarketAddressRequest, reader: jspb.BinaryReader): GetMarketAddressRequest;
}

export namespace GetMarketAddressRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject,
    numOfAddresses: number,
  }
}

export class GetMarketAddressResponse extends jspb.Message {
  getAddressWithBlindingKeyList(): Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey>;
  setAddressWithBlindingKeyList(value: Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey>): GetMarketAddressResponse;
  clearAddressWithBlindingKeyList(): GetMarketAddressResponse;
  addAddressWithBlindingKey(value?: tdex$daemon_v1_types_pb.AddressWithBlindingKey, index?: number): tdex$daemon_v1_types_pb.AddressWithBlindingKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketAddressResponse): GetMarketAddressResponse.AsObject;
  static serializeBinaryToWriter(message: GetMarketAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketAddressResponse;
  static deserializeBinaryFromReader(message: GetMarketAddressResponse, reader: jspb.BinaryReader): GetMarketAddressResponse;
}

export namespace GetMarketAddressResponse {
  export type AsObject = {
    addressWithBlindingKeyList: Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey.AsObject>,
  }
}

export class ListMarketAddressesRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): ListMarketAddressesRequest;
  hasMarket(): boolean;
  clearMarket(): ListMarketAddressesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMarketAddressesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMarketAddressesRequest): ListMarketAddressesRequest.AsObject;
  static serializeBinaryToWriter(message: ListMarketAddressesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMarketAddressesRequest;
  static deserializeBinaryFromReader(message: ListMarketAddressesRequest, reader: jspb.BinaryReader): ListMarketAddressesRequest;
}

export namespace ListMarketAddressesRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject,
  }
}

export class ListMarketAddressesResponse extends jspb.Message {
  getAddressWithBlindingKeyList(): Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey>;
  setAddressWithBlindingKeyList(value: Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey>): ListMarketAddressesResponse;
  clearAddressWithBlindingKeyList(): ListMarketAddressesResponse;
  addAddressWithBlindingKey(value?: tdex$daemon_v1_types_pb.AddressWithBlindingKey, index?: number): tdex$daemon_v1_types_pb.AddressWithBlindingKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMarketAddressesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMarketAddressesResponse): ListMarketAddressesResponse.AsObject;
  static serializeBinaryToWriter(message: ListMarketAddressesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMarketAddressesResponse;
  static deserializeBinaryFromReader(message: ListMarketAddressesResponse, reader: jspb.BinaryReader): ListMarketAddressesResponse;
}

export namespace ListMarketAddressesResponse {
  export type AsObject = {
    addressWithBlindingKeyList: Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey.AsObject>,
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
  getAvailableBalance(): tdex_v1_types_pb.Balance | undefined;
  setAvailableBalance(value?: tdex_v1_types_pb.Balance): GetMarketBalanceResponse;
  hasAvailableBalance(): boolean;
  clearAvailableBalance(): GetMarketBalanceResponse;

  getTotalBalance(): tdex_v1_types_pb.Balance | undefined;
  setTotalBalance(value?: tdex_v1_types_pb.Balance): GetMarketBalanceResponse;
  hasTotalBalance(): boolean;
  clearTotalBalance(): GetMarketBalanceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketBalanceResponse): GetMarketBalanceResponse.AsObject;
  static serializeBinaryToWriter(message: GetMarketBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketBalanceResponse;
  static deserializeBinaryFromReader(message: GetMarketBalanceResponse, reader: jspb.BinaryReader): GetMarketBalanceResponse;
}

export namespace GetMarketBalanceResponse {
  export type AsObject = {
    availableBalance?: tdex_v1_types_pb.Balance.AsObject,
    totalBalance?: tdex_v1_types_pb.Balance.AsObject,
  }
}

export class ClaimMarketDepositsRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): ClaimMarketDepositsRequest;
  hasMarket(): boolean;
  clearMarket(): ClaimMarketDepositsRequest;

  getOutpointsList(): Array<tdex$daemon_v1_types_pb.Outpoint>;
  setOutpointsList(value: Array<tdex$daemon_v1_types_pb.Outpoint>): ClaimMarketDepositsRequest;
  clearOutpointsList(): ClaimMarketDepositsRequest;
  addOutpoints(value?: tdex$daemon_v1_types_pb.Outpoint, index?: number): tdex$daemon_v1_types_pb.Outpoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimMarketDepositsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimMarketDepositsRequest): ClaimMarketDepositsRequest.AsObject;
  static serializeBinaryToWriter(message: ClaimMarketDepositsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimMarketDepositsRequest;
  static deserializeBinaryFromReader(message: ClaimMarketDepositsRequest, reader: jspb.BinaryReader): ClaimMarketDepositsRequest;
}

export namespace ClaimMarketDepositsRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject,
    outpointsList: Array<tdex$daemon_v1_types_pb.Outpoint.AsObject>,
  }
}

export class ClaimMarketDepositsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimMarketDepositsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimMarketDepositsResponse): ClaimMarketDepositsResponse.AsObject;
  static serializeBinaryToWriter(message: ClaimMarketDepositsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimMarketDepositsResponse;
  static deserializeBinaryFromReader(message: ClaimMarketDepositsResponse, reader: jspb.BinaryReader): ClaimMarketDepositsResponse;
}

export namespace ClaimMarketDepositsResponse {
  export type AsObject = {
  }
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
  static deserializeBinaryFromReader(message: OpenMarketRequest, reader: jspb.BinaryReader): OpenMarketRequest;
}

export namespace OpenMarketRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject,
  }
}

export class OpenMarketResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenMarketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OpenMarketResponse): OpenMarketResponse.AsObject;
  static serializeBinaryToWriter(message: OpenMarketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenMarketResponse;
  static deserializeBinaryFromReader(message: OpenMarketResponse, reader: jspb.BinaryReader): OpenMarketResponse;
}

export namespace OpenMarketResponse {
  export type AsObject = {
  }
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
  static deserializeBinaryFromReader(message: CloseMarketRequest, reader: jspb.BinaryReader): CloseMarketRequest;
}

export namespace CloseMarketRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject,
  }
}

export class CloseMarketResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseMarketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CloseMarketResponse): CloseMarketResponse.AsObject;
  static serializeBinaryToWriter(message: CloseMarketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseMarketResponse;
  static deserializeBinaryFromReader(message: CloseMarketResponse, reader: jspb.BinaryReader): CloseMarketResponse;
}

export namespace CloseMarketResponse {
  export type AsObject = {
  }
}

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
  getMarketsList(): Array<tdex$daemon_v1_types_pb.MarketInfo>;
  setMarketsList(value: Array<tdex$daemon_v1_types_pb.MarketInfo>): ListMarketsResponse;
  clearMarketsList(): ListMarketsResponse;
  addMarkets(value?: tdex$daemon_v1_types_pb.MarketInfo, index?: number): tdex$daemon_v1_types_pb.MarketInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMarketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMarketsResponse): ListMarketsResponse.AsObject;
  static serializeBinaryToWriter(message: ListMarketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMarketsResponse;
  static deserializeBinaryFromReader(message: ListMarketsResponse, reader: jspb.BinaryReader): ListMarketsResponse;
}

export namespace ListMarketsResponse {
  export type AsObject = {
    marketsList: Array<tdex$daemon_v1_types_pb.MarketInfo.AsObject>,
  }
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
  static deserializeBinaryFromReader(message: DropMarketRequest, reader: jspb.BinaryReader): DropMarketRequest;
}

export namespace DropMarketRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject,
  }
}

export class DropMarketResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropMarketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DropMarketResponse): DropMarketResponse.AsObject;
  static serializeBinaryToWriter(message: DropMarketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropMarketResponse;
  static deserializeBinaryFromReader(message: DropMarketResponse, reader: jspb.BinaryReader): DropMarketResponse;
}

export namespace DropMarketResponse {
  export type AsObject = {
  }
}

export class GetMarketCollectedSwapFeesRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): GetMarketCollectedSwapFeesRequest;
  hasMarket(): boolean;
  clearMarket(): GetMarketCollectedSwapFeesRequest;

  getPage(): tdex$daemon_v1_types_pb.Page | undefined;
  setPage(value?: tdex$daemon_v1_types_pb.Page): GetMarketCollectedSwapFeesRequest;
  hasPage(): boolean;
  clearPage(): GetMarketCollectedSwapFeesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketCollectedSwapFeesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketCollectedSwapFeesRequest): GetMarketCollectedSwapFeesRequest.AsObject;
  static serializeBinaryToWriter(message: GetMarketCollectedSwapFeesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketCollectedSwapFeesRequest;
  static deserializeBinaryFromReader(message: GetMarketCollectedSwapFeesRequest, reader: jspb.BinaryReader): GetMarketCollectedSwapFeesRequest;
}

export namespace GetMarketCollectedSwapFeesRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject,
    page?: tdex$daemon_v1_types_pb.Page.AsObject,
  }
}

export class GetMarketCollectedSwapFeesResponse extends jspb.Message {
  getCollectedFeesList(): Array<tdex$daemon_v1_types_pb.FeeInfo>;
  setCollectedFeesList(value: Array<tdex$daemon_v1_types_pb.FeeInfo>): GetMarketCollectedSwapFeesResponse;
  clearCollectedFeesList(): GetMarketCollectedSwapFeesResponse;
  addCollectedFees(value?: tdex$daemon_v1_types_pb.FeeInfo, index?: number): tdex$daemon_v1_types_pb.FeeInfo;

  getTotalCollectedFeesPerAssetMap(): jspb.Map<string, number>;
  clearTotalCollectedFeesPerAssetMap(): GetMarketCollectedSwapFeesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketCollectedSwapFeesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketCollectedSwapFeesResponse): GetMarketCollectedSwapFeesResponse.AsObject;
  static serializeBinaryToWriter(message: GetMarketCollectedSwapFeesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketCollectedSwapFeesResponse;
  static deserializeBinaryFromReader(message: GetMarketCollectedSwapFeesResponse, reader: jspb.BinaryReader): GetMarketCollectedSwapFeesResponse;
}

export namespace GetMarketCollectedSwapFeesResponse {
  export type AsObject = {
    collectedFeesList: Array<tdex$daemon_v1_types_pb.FeeInfo.AsObject>,
    totalCollectedFeesPerAssetMap: Array<[string, number]>,
  }
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
  static deserializeBinaryFromReader(message: WithdrawMarketRequest, reader: jspb.BinaryReader): WithdrawMarketRequest;
}

export namespace WithdrawMarketRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject,
    balanceToWithdraw?: tdex_v1_types_pb.Balance.AsObject,
    millisatsPerByte: number,
    address: string,
  }
}

export class WithdrawMarketResponse extends jspb.Message {
  getTxid(): string;
  setTxid(value: string): WithdrawMarketResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawMarketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawMarketResponse): WithdrawMarketResponse.AsObject;
  static serializeBinaryToWriter(message: WithdrawMarketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawMarketResponse;
  static deserializeBinaryFromReader(message: WithdrawMarketResponse, reader: jspb.BinaryReader): WithdrawMarketResponse;
}

export namespace WithdrawMarketResponse {
  export type AsObject = {
    txid: string,
  }
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
  static toObject(includeInstance: boolean, msg: UpdateMarketPercentageFeeRequest): UpdateMarketPercentageFeeRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMarketPercentageFeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMarketPercentageFeeRequest;
  static deserializeBinaryFromReader(message: UpdateMarketPercentageFeeRequest, reader: jspb.BinaryReader): UpdateMarketPercentageFeeRequest;
}

export namespace UpdateMarketPercentageFeeRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject,
    basisPoint: number,
  }
}

export class UpdateMarketPercentageFeeResponse extends jspb.Message {
  getMarketWithFee(): tdex_v1_types_pb.MarketWithFee | undefined;
  setMarketWithFee(value?: tdex_v1_types_pb.MarketWithFee): UpdateMarketPercentageFeeResponse;
  hasMarketWithFee(): boolean;
  clearMarketWithFee(): UpdateMarketPercentageFeeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMarketPercentageFeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMarketPercentageFeeResponse): UpdateMarketPercentageFeeResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateMarketPercentageFeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMarketPercentageFeeResponse;
  static deserializeBinaryFromReader(message: UpdateMarketPercentageFeeResponse, reader: jspb.BinaryReader): UpdateMarketPercentageFeeResponse;
}

export namespace UpdateMarketPercentageFeeResponse {
  export type AsObject = {
    marketWithFee?: tdex_v1_types_pb.MarketWithFee.AsObject,
  }
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
  static toObject(includeInstance: boolean, msg: UpdateMarketFixedFeeRequest): UpdateMarketFixedFeeRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMarketFixedFeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMarketFixedFeeRequest;
  static deserializeBinaryFromReader(message: UpdateMarketFixedFeeRequest, reader: jspb.BinaryReader): UpdateMarketFixedFeeRequest;
}

export namespace UpdateMarketFixedFeeRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject,
    fixed?: tdex_v1_types_pb.Fixed.AsObject,
  }
}

export class UpdateMarketFixedFeeResponse extends jspb.Message {
  getMarketWithFee(): tdex_v1_types_pb.MarketWithFee | undefined;
  setMarketWithFee(value?: tdex_v1_types_pb.MarketWithFee): UpdateMarketFixedFeeResponse;
  hasMarketWithFee(): boolean;
  clearMarketWithFee(): UpdateMarketFixedFeeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMarketFixedFeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMarketFixedFeeResponse): UpdateMarketFixedFeeResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateMarketFixedFeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMarketFixedFeeResponse;
  static deserializeBinaryFromReader(message: UpdateMarketFixedFeeResponse, reader: jspb.BinaryReader): UpdateMarketFixedFeeResponse;
}

export namespace UpdateMarketFixedFeeResponse {
  export type AsObject = {
    marketWithFee?: tdex_v1_types_pb.MarketWithFee.AsObject,
  }
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
  static deserializeBinaryFromReader(message: UpdateMarketPriceRequest, reader: jspb.BinaryReader): UpdateMarketPriceRequest;
}

export namespace UpdateMarketPriceRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject,
    price?: tdex_v1_types_pb.Price.AsObject,
  }
}

export class UpdateMarketPriceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMarketPriceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMarketPriceResponse): UpdateMarketPriceResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateMarketPriceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMarketPriceResponse;
  static deserializeBinaryFromReader(message: UpdateMarketPriceResponse, reader: jspb.BinaryReader): UpdateMarketPriceResponse;
}

export namespace UpdateMarketPriceResponse {
  export type AsObject = {
  }
}

export class UpdateMarketStrategyRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): UpdateMarketStrategyRequest;
  hasMarket(): boolean;
  clearMarket(): UpdateMarketStrategyRequest;

  getStrategyType(): tdex$daemon_v1_types_pb.StrategyType;
  setStrategyType(value: tdex$daemon_v1_types_pb.StrategyType): UpdateMarketStrategyRequest;

  getMetadata(): string;
  setMetadata(value: string): UpdateMarketStrategyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMarketStrategyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMarketStrategyRequest): UpdateMarketStrategyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMarketStrategyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMarketStrategyRequest;
  static deserializeBinaryFromReader(message: UpdateMarketStrategyRequest, reader: jspb.BinaryReader): UpdateMarketStrategyRequest;
}

export namespace UpdateMarketStrategyRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject,
    strategyType: tdex$daemon_v1_types_pb.StrategyType,
    metadata: string,
  }
}

export class UpdateMarketStrategyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMarketStrategyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMarketStrategyResponse): UpdateMarketStrategyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateMarketStrategyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMarketStrategyResponse;
  static deserializeBinaryFromReader(message: UpdateMarketStrategyResponse, reader: jspb.BinaryReader): UpdateMarketStrategyResponse;
}

export namespace UpdateMarketStrategyResponse {
  export type AsObject = {
  }
}

export class GetFeeFragmenterAddressRequest extends jspb.Message {
  getNumOfAddresses(): number;
  setNumOfAddresses(value: number): GetFeeFragmenterAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeeFragmenterAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeeFragmenterAddressRequest): GetFeeFragmenterAddressRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeeFragmenterAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeeFragmenterAddressRequest;
  static deserializeBinaryFromReader(message: GetFeeFragmenterAddressRequest, reader: jspb.BinaryReader): GetFeeFragmenterAddressRequest;
}

export namespace GetFeeFragmenterAddressRequest {
  export type AsObject = {
    numOfAddresses: number,
  }
}

export class GetFeeFragmenterAddressResponse extends jspb.Message {
  getAddressWithBlindingKeyList(): Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey>;
  setAddressWithBlindingKeyList(value: Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey>): GetFeeFragmenterAddressResponse;
  clearAddressWithBlindingKeyList(): GetFeeFragmenterAddressResponse;
  addAddressWithBlindingKey(value?: tdex$daemon_v1_types_pb.AddressWithBlindingKey, index?: number): tdex$daemon_v1_types_pb.AddressWithBlindingKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeeFragmenterAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeeFragmenterAddressResponse): GetFeeFragmenterAddressResponse.AsObject;
  static serializeBinaryToWriter(message: GetFeeFragmenterAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeeFragmenterAddressResponse;
  static deserializeBinaryFromReader(message: GetFeeFragmenterAddressResponse, reader: jspb.BinaryReader): GetFeeFragmenterAddressResponse;
}

export namespace GetFeeFragmenterAddressResponse {
  export type AsObject = {
    addressWithBlindingKeyList: Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey.AsObject>,
  }
}

export class ListFeeFragmenterAddressesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeeFragmenterAddressesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeeFragmenterAddressesRequest): ListFeeFragmenterAddressesRequest.AsObject;
  static serializeBinaryToWriter(message: ListFeeFragmenterAddressesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeeFragmenterAddressesRequest;
  static deserializeBinaryFromReader(message: ListFeeFragmenterAddressesRequest, reader: jspb.BinaryReader): ListFeeFragmenterAddressesRequest;
}

export namespace ListFeeFragmenterAddressesRequest {
  export type AsObject = {
  }
}

export class ListFeeFragmenterAddressesResponse extends jspb.Message {
  getAddressWithBlindingKeyList(): Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey>;
  setAddressWithBlindingKeyList(value: Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey>): ListFeeFragmenterAddressesResponse;
  clearAddressWithBlindingKeyList(): ListFeeFragmenterAddressesResponse;
  addAddressWithBlindingKey(value?: tdex$daemon_v1_types_pb.AddressWithBlindingKey, index?: number): tdex$daemon_v1_types_pb.AddressWithBlindingKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeeFragmenterAddressesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeeFragmenterAddressesResponse): ListFeeFragmenterAddressesResponse.AsObject;
  static serializeBinaryToWriter(message: ListFeeFragmenterAddressesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeeFragmenterAddressesResponse;
  static deserializeBinaryFromReader(message: ListFeeFragmenterAddressesResponse, reader: jspb.BinaryReader): ListFeeFragmenterAddressesResponse;
}

export namespace ListFeeFragmenterAddressesResponse {
  export type AsObject = {
    addressWithBlindingKeyList: Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey.AsObject>,
  }
}

export class GetFeeFragmenterBalanceRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeeFragmenterBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeeFragmenterBalanceRequest): GetFeeFragmenterBalanceRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeeFragmenterBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeeFragmenterBalanceRequest;
  static deserializeBinaryFromReader(message: GetFeeFragmenterBalanceRequest, reader: jspb.BinaryReader): GetFeeFragmenterBalanceRequest;
}

export namespace GetFeeFragmenterBalanceRequest {
  export type AsObject = {
  }
}

export class GetFeeFragmenterBalanceResponse extends jspb.Message {
  getBalanceMap(): jspb.Map<string, tdex$daemon_v1_types_pb.BalanceInfo>;
  clearBalanceMap(): GetFeeFragmenterBalanceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeeFragmenterBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeeFragmenterBalanceResponse): GetFeeFragmenterBalanceResponse.AsObject;
  static serializeBinaryToWriter(message: GetFeeFragmenterBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeeFragmenterBalanceResponse;
  static deserializeBinaryFromReader(message: GetFeeFragmenterBalanceResponse, reader: jspb.BinaryReader): GetFeeFragmenterBalanceResponse;
}

export namespace GetFeeFragmenterBalanceResponse {
  export type AsObject = {
    balanceMap: Array<[string, tdex$daemon_v1_types_pb.BalanceInfo.AsObject]>,
  }
}

export class FeeFragmenterSplitFundsRequest extends jspb.Message {
  getMaxFragments(): number;
  setMaxFragments(value: number): FeeFragmenterSplitFundsRequest;

  getMillisatsPerByte(): number;
  setMillisatsPerByte(value: number): FeeFragmenterSplitFundsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeFragmenterSplitFundsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FeeFragmenterSplitFundsRequest): FeeFragmenterSplitFundsRequest.AsObject;
  static serializeBinaryToWriter(message: FeeFragmenterSplitFundsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeFragmenterSplitFundsRequest;
  static deserializeBinaryFromReader(message: FeeFragmenterSplitFundsRequest, reader: jspb.BinaryReader): FeeFragmenterSplitFundsRequest;
}

export namespace FeeFragmenterSplitFundsRequest {
  export type AsObject = {
    maxFragments: number,
    millisatsPerByte: number,
  }
}

export class FeeFragmenterSplitFundsResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): FeeFragmenterSplitFundsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeFragmenterSplitFundsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FeeFragmenterSplitFundsResponse): FeeFragmenterSplitFundsResponse.AsObject;
  static serializeBinaryToWriter(message: FeeFragmenterSplitFundsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeFragmenterSplitFundsResponse;
  static deserializeBinaryFromReader(message: FeeFragmenterSplitFundsResponse, reader: jspb.BinaryReader): FeeFragmenterSplitFundsResponse;
}

export namespace FeeFragmenterSplitFundsResponse {
  export type AsObject = {
    message: string,
  }
}

export class WithdrawFeeFragmenterRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): WithdrawFeeFragmenterRequest;

  getMillisatsPerByte(): number;
  setMillisatsPerByte(value: number): WithdrawFeeFragmenterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawFeeFragmenterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawFeeFragmenterRequest): WithdrawFeeFragmenterRequest.AsObject;
  static serializeBinaryToWriter(message: WithdrawFeeFragmenterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawFeeFragmenterRequest;
  static deserializeBinaryFromReader(message: WithdrawFeeFragmenterRequest, reader: jspb.BinaryReader): WithdrawFeeFragmenterRequest;
}

export namespace WithdrawFeeFragmenterRequest {
  export type AsObject = {
    address: string,
    millisatsPerByte: number,
  }
}

export class WithdrawFeeFragmenterResponse extends jspb.Message {
  getTxid(): string;
  setTxid(value: string): WithdrawFeeFragmenterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawFeeFragmenterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawFeeFragmenterResponse): WithdrawFeeFragmenterResponse.AsObject;
  static serializeBinaryToWriter(message: WithdrawFeeFragmenterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawFeeFragmenterResponse;
  static deserializeBinaryFromReader(message: WithdrawFeeFragmenterResponse, reader: jspb.BinaryReader): WithdrawFeeFragmenterResponse;
}

export namespace WithdrawFeeFragmenterResponse {
  export type AsObject = {
    txid: string,
  }
}

export class GetMarketFragmenterAddressRequest extends jspb.Message {
  getNumOfAddresses(): number;
  setNumOfAddresses(value: number): GetMarketFragmenterAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketFragmenterAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketFragmenterAddressRequest): GetMarketFragmenterAddressRequest.AsObject;
  static serializeBinaryToWriter(message: GetMarketFragmenterAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketFragmenterAddressRequest;
  static deserializeBinaryFromReader(message: GetMarketFragmenterAddressRequest, reader: jspb.BinaryReader): GetMarketFragmenterAddressRequest;
}

export namespace GetMarketFragmenterAddressRequest {
  export type AsObject = {
    numOfAddresses: number,
  }
}

export class GetMarketFragmenterAddressResponse extends jspb.Message {
  getAddressWithBlindingKeyList(): Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey>;
  setAddressWithBlindingKeyList(value: Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey>): GetMarketFragmenterAddressResponse;
  clearAddressWithBlindingKeyList(): GetMarketFragmenterAddressResponse;
  addAddressWithBlindingKey(value?: tdex$daemon_v1_types_pb.AddressWithBlindingKey, index?: number): tdex$daemon_v1_types_pb.AddressWithBlindingKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketFragmenterAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketFragmenterAddressResponse): GetMarketFragmenterAddressResponse.AsObject;
  static serializeBinaryToWriter(message: GetMarketFragmenterAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketFragmenterAddressResponse;
  static deserializeBinaryFromReader(message: GetMarketFragmenterAddressResponse, reader: jspb.BinaryReader): GetMarketFragmenterAddressResponse;
}

export namespace GetMarketFragmenterAddressResponse {
  export type AsObject = {
    addressWithBlindingKeyList: Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey.AsObject>,
  }
}

export class ListMarketFragmenterAddressesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMarketFragmenterAddressesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMarketFragmenterAddressesRequest): ListMarketFragmenterAddressesRequest.AsObject;
  static serializeBinaryToWriter(message: ListMarketFragmenterAddressesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMarketFragmenterAddressesRequest;
  static deserializeBinaryFromReader(message: ListMarketFragmenterAddressesRequest, reader: jspb.BinaryReader): ListMarketFragmenterAddressesRequest;
}

export namespace ListMarketFragmenterAddressesRequest {
  export type AsObject = {
  }
}

export class ListMarketFragmenterAddressesResponse extends jspb.Message {
  getAddressWithBlindingKeyList(): Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey>;
  setAddressWithBlindingKeyList(value: Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey>): ListMarketFragmenterAddressesResponse;
  clearAddressWithBlindingKeyList(): ListMarketFragmenterAddressesResponse;
  addAddressWithBlindingKey(value?: tdex$daemon_v1_types_pb.AddressWithBlindingKey, index?: number): tdex$daemon_v1_types_pb.AddressWithBlindingKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMarketFragmenterAddressesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMarketFragmenterAddressesResponse): ListMarketFragmenterAddressesResponse.AsObject;
  static serializeBinaryToWriter(message: ListMarketFragmenterAddressesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMarketFragmenterAddressesResponse;
  static deserializeBinaryFromReader(message: ListMarketFragmenterAddressesResponse, reader: jspb.BinaryReader): ListMarketFragmenterAddressesResponse;
}

export namespace ListMarketFragmenterAddressesResponse {
  export type AsObject = {
    addressWithBlindingKeyList: Array<tdex$daemon_v1_types_pb.AddressWithBlindingKey.AsObject>,
  }
}

export class GetMarketFragmenterBalanceRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketFragmenterBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketFragmenterBalanceRequest): GetMarketFragmenterBalanceRequest.AsObject;
  static serializeBinaryToWriter(message: GetMarketFragmenterBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketFragmenterBalanceRequest;
  static deserializeBinaryFromReader(message: GetMarketFragmenterBalanceRequest, reader: jspb.BinaryReader): GetMarketFragmenterBalanceRequest;
}

export namespace GetMarketFragmenterBalanceRequest {
  export type AsObject = {
  }
}

export class GetMarketFragmenterBalanceResponse extends jspb.Message {
  getBalanceMap(): jspb.Map<string, tdex$daemon_v1_types_pb.BalanceInfo>;
  clearBalanceMap(): GetMarketFragmenterBalanceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketFragmenterBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketFragmenterBalanceResponse): GetMarketFragmenterBalanceResponse.AsObject;
  static serializeBinaryToWriter(message: GetMarketFragmenterBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketFragmenterBalanceResponse;
  static deserializeBinaryFromReader(message: GetMarketFragmenterBalanceResponse, reader: jspb.BinaryReader): GetMarketFragmenterBalanceResponse;
}

export namespace GetMarketFragmenterBalanceResponse {
  export type AsObject = {
    balanceMap: Array<[string, tdex$daemon_v1_types_pb.BalanceInfo.AsObject]>,
  }
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
  static toObject(includeInstance: boolean, msg: MarketFragmenterSplitFundsRequest): MarketFragmenterSplitFundsRequest.AsObject;
  static serializeBinaryToWriter(message: MarketFragmenterSplitFundsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketFragmenterSplitFundsRequest;
  static deserializeBinaryFromReader(message: MarketFragmenterSplitFundsRequest, reader: jspb.BinaryReader): MarketFragmenterSplitFundsRequest;
}

export namespace MarketFragmenterSplitFundsRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject,
    millisatsPerByte: number,
  }
}

export class MarketFragmenterSplitFundsResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): MarketFragmenterSplitFundsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketFragmenterSplitFundsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarketFragmenterSplitFundsResponse): MarketFragmenterSplitFundsResponse.AsObject;
  static serializeBinaryToWriter(message: MarketFragmenterSplitFundsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketFragmenterSplitFundsResponse;
  static deserializeBinaryFromReader(message: MarketFragmenterSplitFundsResponse, reader: jspb.BinaryReader): MarketFragmenterSplitFundsResponse;
}

export namespace MarketFragmenterSplitFundsResponse {
  export type AsObject = {
    message: string,
  }
}

export class WithdrawMarketFragmenterRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): WithdrawMarketFragmenterRequest;

  getMillisatsPerByte(): number;
  setMillisatsPerByte(value: number): WithdrawMarketFragmenterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawMarketFragmenterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawMarketFragmenterRequest): WithdrawMarketFragmenterRequest.AsObject;
  static serializeBinaryToWriter(message: WithdrawMarketFragmenterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawMarketFragmenterRequest;
  static deserializeBinaryFromReader(message: WithdrawMarketFragmenterRequest, reader: jspb.BinaryReader): WithdrawMarketFragmenterRequest;
}

export namespace WithdrawMarketFragmenterRequest {
  export type AsObject = {
    address: string,
    millisatsPerByte: number,
  }
}

export class WithdrawMarketFragmenterResponse extends jspb.Message {
  getTxid(): string;
  setTxid(value: string): WithdrawMarketFragmenterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawMarketFragmenterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawMarketFragmenterResponse): WithdrawMarketFragmenterResponse.AsObject;
  static serializeBinaryToWriter(message: WithdrawMarketFragmenterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawMarketFragmenterResponse;
  static deserializeBinaryFromReader(message: WithdrawMarketFragmenterResponse, reader: jspb.BinaryReader): WithdrawMarketFragmenterResponse;
}

export namespace WithdrawMarketFragmenterResponse {
  export type AsObject = {
    txid: string,
  }
}

export class ListTradesRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): ListTradesRequest;
  hasMarket(): boolean;
  clearMarket(): ListTradesRequest;

  getPage(): tdex$daemon_v1_types_pb.Page | undefined;
  setPage(value?: tdex$daemon_v1_types_pb.Page): ListTradesRequest;
  hasPage(): boolean;
  clearPage(): ListTradesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTradesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTradesRequest): ListTradesRequest.AsObject;
  static serializeBinaryToWriter(message: ListTradesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTradesRequest;
  static deserializeBinaryFromReader(message: ListTradesRequest, reader: jspb.BinaryReader): ListTradesRequest;
}

export namespace ListTradesRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject,
    page?: tdex$daemon_v1_types_pb.Page.AsObject,
  }
}

export class ListTradesResponse extends jspb.Message {
  getTradesList(): Array<tdex$daemon_v1_types_pb.TradeInfo>;
  setTradesList(value: Array<tdex$daemon_v1_types_pb.TradeInfo>): ListTradesResponse;
  clearTradesList(): ListTradesResponse;
  addTrades(value?: tdex$daemon_v1_types_pb.TradeInfo, index?: number): tdex$daemon_v1_types_pb.TradeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTradesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTradesResponse): ListTradesResponse.AsObject;
  static serializeBinaryToWriter(message: ListTradesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTradesResponse;
  static deserializeBinaryFromReader(message: ListTradesResponse, reader: jspb.BinaryReader): ListTradesResponse;
}

export namespace ListTradesResponse {
  export type AsObject = {
    tradesList: Array<tdex$daemon_v1_types_pb.TradeInfo.AsObject>,
  }
}

export class ReloadUtxosRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReloadUtxosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReloadUtxosRequest): ReloadUtxosRequest.AsObject;
  static serializeBinaryToWriter(message: ReloadUtxosRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReloadUtxosRequest;
  static deserializeBinaryFromReader(message: ReloadUtxosRequest, reader: jspb.BinaryReader): ReloadUtxosRequest;
}

export namespace ReloadUtxosRequest {
  export type AsObject = {
  }
}

export class ReloadUtxosResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReloadUtxosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReloadUtxosResponse): ReloadUtxosResponse.AsObject;
  static serializeBinaryToWriter(message: ReloadUtxosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReloadUtxosResponse;
  static deserializeBinaryFromReader(message: ReloadUtxosResponse, reader: jspb.BinaryReader): ReloadUtxosResponse;
}

export namespace ReloadUtxosResponse {
  export type AsObject = {
  }
}

export class ListUtxosRequest extends jspb.Message {
  getAccountIndex(): number;
  setAccountIndex(value: number): ListUtxosRequest;

  getPage(): tdex$daemon_v1_types_pb.Page | undefined;
  setPage(value?: tdex$daemon_v1_types_pb.Page): ListUtxosRequest;
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
    accountIndex: number,
    page?: tdex$daemon_v1_types_pb.Page.AsObject,
  }
}

export class ListUtxosResponse extends jspb.Message {
  getUnspentsList(): Array<tdex$daemon_v1_types_pb.UtxoInfo>;
  setUnspentsList(value: Array<tdex$daemon_v1_types_pb.UtxoInfo>): ListUtxosResponse;
  clearUnspentsList(): ListUtxosResponse;
  addUnspents(value?: tdex$daemon_v1_types_pb.UtxoInfo, index?: number): tdex$daemon_v1_types_pb.UtxoInfo;

  getSpentsList(): Array<tdex$daemon_v1_types_pb.UtxoInfo>;
  setSpentsList(value: Array<tdex$daemon_v1_types_pb.UtxoInfo>): ListUtxosResponse;
  clearSpentsList(): ListUtxosResponse;
  addSpents(value?: tdex$daemon_v1_types_pb.UtxoInfo, index?: number): tdex$daemon_v1_types_pb.UtxoInfo;

  getLocksList(): Array<tdex$daemon_v1_types_pb.UtxoInfo>;
  setLocksList(value: Array<tdex$daemon_v1_types_pb.UtxoInfo>): ListUtxosResponse;
  clearLocksList(): ListUtxosResponse;
  addLocks(value?: tdex$daemon_v1_types_pb.UtxoInfo, index?: number): tdex$daemon_v1_types_pb.UtxoInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUtxosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUtxosResponse): ListUtxosResponse.AsObject;
  static serializeBinaryToWriter(message: ListUtxosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUtxosResponse;
  static deserializeBinaryFromReader(message: ListUtxosResponse, reader: jspb.BinaryReader): ListUtxosResponse;
}

export namespace ListUtxosResponse {
  export type AsObject = {
    unspentsList: Array<tdex$daemon_v1_types_pb.UtxoInfo.AsObject>,
    spentsList: Array<tdex$daemon_v1_types_pb.UtxoInfo.AsObject>,
    locksList: Array<tdex$daemon_v1_types_pb.UtxoInfo.AsObject>,
  }
}

export class AddWebhookRequest extends jspb.Message {
  getEndpoint(): string;
  setEndpoint(value: string): AddWebhookRequest;

  getAction(): tdex$daemon_v1_types_pb.ActionType;
  setAction(value: tdex$daemon_v1_types_pb.ActionType): AddWebhookRequest;

  getSecret(): string;
  setSecret(value: string): AddWebhookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddWebhookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddWebhookRequest): AddWebhookRequest.AsObject;
  static serializeBinaryToWriter(message: AddWebhookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddWebhookRequest;
  static deserializeBinaryFromReader(message: AddWebhookRequest, reader: jspb.BinaryReader): AddWebhookRequest;
}

export namespace AddWebhookRequest {
  export type AsObject = {
    endpoint: string,
    action: tdex$daemon_v1_types_pb.ActionType,
    secret: string,
  }
}

export class AddWebhookResponse extends jspb.Message {
  getId(): string;
  setId(value: string): AddWebhookResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddWebhookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddWebhookResponse): AddWebhookResponse.AsObject;
  static serializeBinaryToWriter(message: AddWebhookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddWebhookResponse;
  static deserializeBinaryFromReader(message: AddWebhookResponse, reader: jspb.BinaryReader): AddWebhookResponse;
}

export namespace AddWebhookResponse {
  export type AsObject = {
    id: string,
  }
}

export class RemoveWebhookRequest extends jspb.Message {
  getId(): string;
  setId(value: string): RemoveWebhookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveWebhookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveWebhookRequest): RemoveWebhookRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveWebhookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveWebhookRequest;
  static deserializeBinaryFromReader(message: RemoveWebhookRequest, reader: jspb.BinaryReader): RemoveWebhookRequest;
}

export namespace RemoveWebhookRequest {
  export type AsObject = {
    id: string,
  }
}

export class RemoveWebhookResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveWebhookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveWebhookResponse): RemoveWebhookResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveWebhookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveWebhookResponse;
  static deserializeBinaryFromReader(message: RemoveWebhookResponse, reader: jspb.BinaryReader): RemoveWebhookResponse;
}

export namespace RemoveWebhookResponse {
  export type AsObject = {
  }
}

export class ListWebhooksRequest extends jspb.Message {
  getAction(): tdex$daemon_v1_types_pb.ActionType;
  setAction(value: tdex$daemon_v1_types_pb.ActionType): ListWebhooksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebhooksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebhooksRequest): ListWebhooksRequest.AsObject;
  static serializeBinaryToWriter(message: ListWebhooksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebhooksRequest;
  static deserializeBinaryFromReader(message: ListWebhooksRequest, reader: jspb.BinaryReader): ListWebhooksRequest;
}

export namespace ListWebhooksRequest {
  export type AsObject = {
    action: tdex$daemon_v1_types_pb.ActionType,
  }
}

export class ListWebhooksResponse extends jspb.Message {
  getWebhookInfoList(): Array<tdex$daemon_v1_types_pb.WebhookInfo>;
  setWebhookInfoList(value: Array<tdex$daemon_v1_types_pb.WebhookInfo>): ListWebhooksResponse;
  clearWebhookInfoList(): ListWebhooksResponse;
  addWebhookInfo(value?: tdex$daemon_v1_types_pb.WebhookInfo, index?: number): tdex$daemon_v1_types_pb.WebhookInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebhooksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebhooksResponse): ListWebhooksResponse.AsObject;
  static serializeBinaryToWriter(message: ListWebhooksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebhooksResponse;
  static deserializeBinaryFromReader(message: ListWebhooksResponse, reader: jspb.BinaryReader): ListWebhooksResponse;
}

export namespace ListWebhooksResponse {
  export type AsObject = {
    webhookInfoList: Array<tdex$daemon_v1_types_pb.WebhookInfo.AsObject>,
  }
}

export class ListDepositsRequest extends jspb.Message {
  getAccountIndex(): number;
  setAccountIndex(value: number): ListDepositsRequest;

  getPage(): tdex$daemon_v1_types_pb.Page | undefined;
  setPage(value?: tdex$daemon_v1_types_pb.Page): ListDepositsRequest;
  hasPage(): boolean;
  clearPage(): ListDepositsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDepositsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDepositsRequest): ListDepositsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDepositsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDepositsRequest;
  static deserializeBinaryFromReader(message: ListDepositsRequest, reader: jspb.BinaryReader): ListDepositsRequest;
}

export namespace ListDepositsRequest {
  export type AsObject = {
    accountIndex: number,
    page?: tdex$daemon_v1_types_pb.Page.AsObject,
  }
}

export class ListDepositsResponse extends jspb.Message {
  getAccountIndex(): number;
  setAccountIndex(value: number): ListDepositsResponse;

  getDepositsList(): Array<tdex$daemon_v1_types_pb.Deposit>;
  setDepositsList(value: Array<tdex$daemon_v1_types_pb.Deposit>): ListDepositsResponse;
  clearDepositsList(): ListDepositsResponse;
  addDeposits(value?: tdex$daemon_v1_types_pb.Deposit, index?: number): tdex$daemon_v1_types_pb.Deposit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDepositsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDepositsResponse): ListDepositsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDepositsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDepositsResponse;
  static deserializeBinaryFromReader(message: ListDepositsResponse, reader: jspb.BinaryReader): ListDepositsResponse;
}

export namespace ListDepositsResponse {
  export type AsObject = {
    accountIndex: number,
    depositsList: Array<tdex$daemon_v1_types_pb.Deposit.AsObject>,
  }
}

export class ListWithdrawalsRequest extends jspb.Message {
  getAccountIndex(): number;
  setAccountIndex(value: number): ListWithdrawalsRequest;

  getPage(): tdex$daemon_v1_types_pb.Page | undefined;
  setPage(value?: tdex$daemon_v1_types_pb.Page): ListWithdrawalsRequest;
  hasPage(): boolean;
  clearPage(): ListWithdrawalsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWithdrawalsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWithdrawalsRequest): ListWithdrawalsRequest.AsObject;
  static serializeBinaryToWriter(message: ListWithdrawalsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWithdrawalsRequest;
  static deserializeBinaryFromReader(message: ListWithdrawalsRequest, reader: jspb.BinaryReader): ListWithdrawalsRequest;
}

export namespace ListWithdrawalsRequest {
  export type AsObject = {
    accountIndex: number,
    page?: tdex$daemon_v1_types_pb.Page.AsObject,
  }
}

export class ListWithdrawalsResponse extends jspb.Message {
  getAccountIndex(): number;
  setAccountIndex(value: number): ListWithdrawalsResponse;

  getWithdrawalsList(): Array<tdex$daemon_v1_types_pb.Withdrawal>;
  setWithdrawalsList(value: Array<tdex$daemon_v1_types_pb.Withdrawal>): ListWithdrawalsResponse;
  clearWithdrawalsList(): ListWithdrawalsResponse;
  addWithdrawals(value?: tdex$daemon_v1_types_pb.Withdrawal, index?: number): tdex$daemon_v1_types_pb.Withdrawal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWithdrawalsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWithdrawalsResponse): ListWithdrawalsResponse.AsObject;
  static serializeBinaryToWriter(message: ListWithdrawalsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWithdrawalsResponse;
  static deserializeBinaryFromReader(message: ListWithdrawalsResponse, reader: jspb.BinaryReader): ListWithdrawalsResponse;
}

export namespace ListWithdrawalsResponse {
  export type AsObject = {
    accountIndex: number,
    withdrawalsList: Array<tdex$daemon_v1_types_pb.Withdrawal.AsObject>,
  }
}

export class GetMarketReportRequest extends jspb.Message {
  getMarket(): tdex_v1_types_pb.Market | undefined;
  setMarket(value?: tdex_v1_types_pb.Market): GetMarketReportRequest;
  hasMarket(): boolean;
  clearMarket(): GetMarketReportRequest;

  getTimeRange(): tdex$daemon_v1_types_pb.TimeRange | undefined;
  setTimeRange(value?: tdex$daemon_v1_types_pb.TimeRange): GetMarketReportRequest;
  hasTimeRange(): boolean;
  clearTimeRange(): GetMarketReportRequest;

  getTimeFrame(): tdex$daemon_v1_types_pb.TimeFrame;
  setTimeFrame(value: tdex$daemon_v1_types_pb.TimeFrame): GetMarketReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketReportRequest): GetMarketReportRequest.AsObject;
  static serializeBinaryToWriter(message: GetMarketReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketReportRequest;
  static deserializeBinaryFromReader(message: GetMarketReportRequest, reader: jspb.BinaryReader): GetMarketReportRequest;
}

export namespace GetMarketReportRequest {
  export type AsObject = {
    market?: tdex_v1_types_pb.Market.AsObject,
    timeRange?: tdex$daemon_v1_types_pb.TimeRange.AsObject,
    timeFrame: tdex$daemon_v1_types_pb.TimeFrame,
  }
}

export class GetMarketReportResponse extends jspb.Message {
  getReport(): tdex$daemon_v1_types_pb.MarketReport | undefined;
  setReport(value?: tdex$daemon_v1_types_pb.MarketReport): GetMarketReportResponse;
  hasReport(): boolean;
  clearReport(): GetMarketReportResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketReportResponse): GetMarketReportResponse.AsObject;
  static serializeBinaryToWriter(message: GetMarketReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketReportResponse;
  static deserializeBinaryFromReader(message: GetMarketReportResponse, reader: jspb.BinaryReader): GetMarketReportResponse;
}

export namespace GetMarketReportResponse {
  export type AsObject = {
    report?: tdex$daemon_v1_types_pb.MarketReport.AsObject,
  }
}

