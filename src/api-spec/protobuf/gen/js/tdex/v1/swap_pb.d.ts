import * as jspb from 'google-protobuf'



export class SwapRequest extends jspb.Message {
  getId(): string;
  setId(value: string): SwapRequest;

  getAmountP(): number;
  setAmountP(value: number): SwapRequest;

  getAssetP(): string;
  setAssetP(value: string): SwapRequest;

  getAmountR(): number;
  setAmountR(value: number): SwapRequest;

  getAssetR(): string;
  setAssetR(value: string): SwapRequest;

  getTransaction(): string;
  setTransaction(value: string): SwapRequest;

  getInputBlindingKeyMap(): jspb.Map<string, Uint8Array | string>;
  clearInputBlindingKeyMap(): SwapRequest;

  getOutputBlindingKeyMap(): jspb.Map<string, Uint8Array | string>;
  clearOutputBlindingKeyMap(): SwapRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SwapRequest): SwapRequest.AsObject;
  static serializeBinaryToWriter(message: SwapRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapRequest;
  static deserializeBinaryFromReader(message: SwapRequest, reader: jspb.BinaryReader): SwapRequest;
}

export namespace SwapRequest {
  export type AsObject = {
    id: string,
    amountP: number,
    assetP: string,
    amountR: number,
    assetR: string,
    transaction: string,
    inputBlindingKeyMap: Array<[string, Uint8Array | string]>,
    outputBlindingKeyMap: Array<[string, Uint8Array | string]>,
  }
}

export class SwapAccept extends jspb.Message {
  getId(): string;
  setId(value: string): SwapAccept;

  getRequestId(): string;
  setRequestId(value: string): SwapAccept;

  getTransaction(): string;
  setTransaction(value: string): SwapAccept;

  getInputBlindingKeyMap(): jspb.Map<string, Uint8Array | string>;
  clearInputBlindingKeyMap(): SwapAccept;

  getOutputBlindingKeyMap(): jspb.Map<string, Uint8Array | string>;
  clearOutputBlindingKeyMap(): SwapAccept;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapAccept.AsObject;
  static toObject(includeInstance: boolean, msg: SwapAccept): SwapAccept.AsObject;
  static serializeBinaryToWriter(message: SwapAccept, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapAccept;
  static deserializeBinaryFromReader(message: SwapAccept, reader: jspb.BinaryReader): SwapAccept;
}

export namespace SwapAccept {
  export type AsObject = {
    id: string,
    requestId: string,
    transaction: string,
    inputBlindingKeyMap: Array<[string, Uint8Array | string]>,
    outputBlindingKeyMap: Array<[string, Uint8Array | string]>,
  }
}

export class SwapComplete extends jspb.Message {
  getId(): string;
  setId(value: string): SwapComplete;

  getAcceptId(): string;
  setAcceptId(value: string): SwapComplete;

  getTransaction(): string;
  setTransaction(value: string): SwapComplete;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapComplete.AsObject;
  static toObject(includeInstance: boolean, msg: SwapComplete): SwapComplete.AsObject;
  static serializeBinaryToWriter(message: SwapComplete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapComplete;
  static deserializeBinaryFromReader(message: SwapComplete, reader: jspb.BinaryReader): SwapComplete;
}

export namespace SwapComplete {
  export type AsObject = {
    id: string,
    acceptId: string,
    transaction: string,
  }
}

export class SwapFail extends jspb.Message {
  getId(): string;
  setId(value: string): SwapFail;

  getMessageId(): string;
  setMessageId(value: string): SwapFail;

  getFailureCode(): number;
  setFailureCode(value: number): SwapFail;

  getFailureMessage(): string;
  setFailureMessage(value: string): SwapFail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapFail.AsObject;
  static toObject(includeInstance: boolean, msg: SwapFail): SwapFail.AsObject;
  static serializeBinaryToWriter(message: SwapFail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapFail;
  static deserializeBinaryFromReader(message: SwapFail, reader: jspb.BinaryReader): SwapFail;
}

export namespace SwapFail {
  export type AsObject = {
    id: string,
    messageId: string,
    failureCode: number,
    failureMessage: string,
  }
}

