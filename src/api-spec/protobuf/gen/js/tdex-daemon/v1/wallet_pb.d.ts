import * as jspb from 'google-protobuf'

import * as tdex$daemon_v1_types_pb from '../../tdex-daemon/v1/types_pb';


export class SendToManyRequest extends jspb.Message {
  getOutputsList(): Array<tdex$daemon_v1_types_pb.TxOutput>;
  setOutputsList(value: Array<tdex$daemon_v1_types_pb.TxOutput>): SendToManyRequest;
  clearOutputsList(): SendToManyRequest;
  addOutputs(value?: tdex$daemon_v1_types_pb.TxOutput, index?: number): tdex$daemon_v1_types_pb.TxOutput;

  getMillisatPerByte(): number;
  setMillisatPerByte(value: number): SendToManyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendToManyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendToManyRequest): SendToManyRequest.AsObject;
  static serializeBinaryToWriter(message: SendToManyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendToManyRequest;
  static deserializeBinaryFromReader(message: SendToManyRequest, reader: jspb.BinaryReader): SendToManyRequest;
}

export namespace SendToManyRequest {
  export type AsObject = {
    outputsList: Array<tdex$daemon_v1_types_pb.TxOutput.AsObject>,
    millisatPerByte: number,
  }
}

export class SendToManyResponse extends jspb.Message {
  getRawTx(): Uint8Array | string;
  getRawTx_asU8(): Uint8Array;
  getRawTx_asB64(): string;
  setRawTx(value: Uint8Array | string): SendToManyResponse;

  getTxid(): Uint8Array | string;
  getTxid_asU8(): Uint8Array;
  getTxid_asB64(): string;
  setTxid(value: Uint8Array | string): SendToManyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendToManyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendToManyResponse): SendToManyResponse.AsObject;
  static serializeBinaryToWriter(message: SendToManyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendToManyResponse;
  static deserializeBinaryFromReader(message: SendToManyResponse, reader: jspb.BinaryReader): SendToManyResponse;
}

export namespace SendToManyResponse {
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

export class WalletAddressResponse extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): WalletAddressResponse;

  getBlinding(): string;
  setBlinding(value: string): WalletAddressResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WalletAddressResponse): WalletAddressResponse.AsObject;
  static serializeBinaryToWriter(message: WalletAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalletAddressResponse;
  static deserializeBinaryFromReader(message: WalletAddressResponse, reader: jspb.BinaryReader): WalletAddressResponse;
}

export namespace WalletAddressResponse {
  export type AsObject = {
    address: string,
    blinding: string,
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

export class WalletBalanceResponse extends jspb.Message {
  getBalanceMap(): jspb.Map<string, tdex$daemon_v1_types_pb.BalanceInfo>;
  clearBalanceMap(): WalletBalanceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WalletBalanceResponse): WalletBalanceResponse.AsObject;
  static serializeBinaryToWriter(message: WalletBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalletBalanceResponse;
  static deserializeBinaryFromReader(message: WalletBalanceResponse, reader: jspb.BinaryReader): WalletBalanceResponse;
}

export namespace WalletBalanceResponse {
  export type AsObject = {
    balanceMap: Array<[string, tdex$daemon_v1_types_pb.BalanceInfo.AsObject]>,
  }
}

