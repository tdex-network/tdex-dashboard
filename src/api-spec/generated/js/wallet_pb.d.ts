import * as jspb from "google-protobuf"

export class SendToManyRequest extends jspb.Message {
  getOutputsList(): Array<TxOut>;
  setOutputsList(value: Array<TxOut>): SendToManyRequest;
  clearOutputsList(): SendToManyRequest;
  addOutputs(value?: TxOut, index?: number): TxOut;

  getMillisatPerByte(): number;
  setMillisatPerByte(value: number): SendToManyRequest;

  getPush(): boolean;
  setPush(value: boolean): SendToManyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendToManyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendToManyRequest): SendToManyRequest.AsObject;
  static serializeBinaryToWriter(message: SendToManyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendToManyRequest;
  static deserializeBinaryFromReader(message: SendToManyRequest, reader: jspb.BinaryReader): SendToManyRequest;
}

export namespace SendToManyRequest {
  export type AsObject = {
    outputsList: Array<TxOut.AsObject>,
    millisatPerByte: number,
    push: boolean,
  }
}

export class SendToManyReply extends jspb.Message {
  getRawTx(): Uint8Array | string;
  getRawTx_asU8(): Uint8Array;
  getRawTx_asB64(): string;
  setRawTx(value: Uint8Array | string): SendToManyReply;

  getTxid(): Uint8Array | string;
  getTxid_asU8(): Uint8Array;
  getTxid_asB64(): string;
  setTxid(value: Uint8Array | string): SendToManyReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendToManyReply.AsObject;
  static toObject(includeInstance: boolean, msg: SendToManyReply): SendToManyReply.AsObject;
  static serializeBinaryToWriter(message: SendToManyReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendToManyReply;
  static deserializeBinaryFromReader(message: SendToManyReply, reader: jspb.BinaryReader): SendToManyReply;
}

export namespace SendToManyReply {
  export type AsObject = {
    rawTx: Uint8Array | string,
    txid: Uint8Array | string,
  }
}

export class WalletAddressRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WalletAddressRequest): WalletAddressRequest.AsObject;
  static serializeBinaryToWriter(message: WalletAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalletAddressRequest;
  static deserializeBinaryFromReader(message: WalletAddressRequest, reader: jspb.BinaryReader): WalletAddressRequest;
}

export namespace WalletAddressRequest {
  export type AsObject = {
  }
}

export class WalletAddressReply extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): WalletAddressReply;

  getBlinding(): string;
  setBlinding(value: string): WalletAddressReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletAddressReply.AsObject;
  static toObject(includeInstance: boolean, msg: WalletAddressReply): WalletAddressReply.AsObject;
  static serializeBinaryToWriter(message: WalletAddressReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalletAddressReply;
  static deserializeBinaryFromReader(message: WalletAddressReply, reader: jspb.BinaryReader): WalletAddressReply;
}

export namespace WalletAddressReply {
  export type AsObject = {
    address: string,
    blinding: string,
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

export class WalletBalanceRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WalletBalanceRequest): WalletBalanceRequest.AsObject;
  static serializeBinaryToWriter(message: WalletBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalletBalanceRequest;
  static deserializeBinaryFromReader(message: WalletBalanceRequest, reader: jspb.BinaryReader): WalletBalanceRequest;
}

export namespace WalletBalanceRequest {
  export type AsObject = {
  }
}

export class WalletBalanceReply extends jspb.Message {
  getBalanceMap(): jspb.Map<string, BalanceInfo>;
  clearBalanceMap(): WalletBalanceReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletBalanceReply.AsObject;
  static toObject(includeInstance: boolean, msg: WalletBalanceReply): WalletBalanceReply.AsObject;
  static serializeBinaryToWriter(message: WalletBalanceReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalletBalanceReply;
  static deserializeBinaryFromReader(message: WalletBalanceReply, reader: jspb.BinaryReader): WalletBalanceReply;
}

export namespace WalletBalanceReply {
  export type AsObject = {
    balanceMap: Array<[string, BalanceInfo.AsObject]>,
  }
}

export class TxOut extends jspb.Message {
  getAsset(): string;
  setAsset(value: string): TxOut;

  getValue(): number;
  setValue(value: number): TxOut;

  getAddress(): string;
  setAddress(value: string): TxOut;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxOut.AsObject;
  static toObject(includeInstance: boolean, msg: TxOut): TxOut.AsObject;
  static serializeBinaryToWriter(message: TxOut, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxOut;
  static deserializeBinaryFromReader(message: TxOut, reader: jspb.BinaryReader): TxOut;
}

export namespace TxOut {
  export type AsObject = {
    asset: string,
    value: number,
    address: string,
  }
}

