import * as jspb from 'google-protobuf'



export class GenSeedRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenSeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenSeedRequest): GenSeedRequest.AsObject;
  static serializeBinaryToWriter(message: GenSeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenSeedRequest;
  static deserializeBinaryFromReader(message: GenSeedRequest, reader: jspb.BinaryReader): GenSeedRequest;
}

export namespace GenSeedRequest {
  export type AsObject = {
  }
}

export class GenSeedResponse extends jspb.Message {
  getSeedMnemonicList(): Array<string>;
  setSeedMnemonicList(value: Array<string>): GenSeedResponse;
  clearSeedMnemonicList(): GenSeedResponse;
  addSeedMnemonic(value: string, index?: number): GenSeedResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenSeedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenSeedResponse): GenSeedResponse.AsObject;
  static serializeBinaryToWriter(message: GenSeedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenSeedResponse;
  static deserializeBinaryFromReader(message: GenSeedResponse, reader: jspb.BinaryReader): GenSeedResponse;
}

export namespace GenSeedResponse {
  export type AsObject = {
    seedMnemonicList: Array<string>,
  }
}

export class InitWalletRequest extends jspb.Message {
  getWalletPassword(): Uint8Array | string;
  getWalletPassword_asU8(): Uint8Array;
  getWalletPassword_asB64(): string;
  setWalletPassword(value: Uint8Array | string): InitWalletRequest;

  getSeedMnemonicList(): Array<string>;
  setSeedMnemonicList(value: Array<string>): InitWalletRequest;
  clearSeedMnemonicList(): InitWalletRequest;
  addSeedMnemonic(value: string, index?: number): InitWalletRequest;

  getRestore(): boolean;
  setRestore(value: boolean): InitWalletRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitWalletRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitWalletRequest): InitWalletRequest.AsObject;
  static serializeBinaryToWriter(message: InitWalletRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitWalletRequest;
  static deserializeBinaryFromReader(message: InitWalletRequest, reader: jspb.BinaryReader): InitWalletRequest;
}

export namespace InitWalletRequest {
  export type AsObject = {
    walletPassword: Uint8Array | string,
    seedMnemonicList: Array<string>,
    restore: boolean,
  }
}

export class InitWalletResponse extends jspb.Message {
  getAccount(): number;
  setAccount(value: number): InitWalletResponse;

  getStatus(): InitWalletResponse.Status;
  setStatus(value: InitWalletResponse.Status): InitWalletResponse;

  getData(): string;
  setData(value: string): InitWalletResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitWalletResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitWalletResponse): InitWalletResponse.AsObject;
  static serializeBinaryToWriter(message: InitWalletResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitWalletResponse;
  static deserializeBinaryFromReader(message: InitWalletResponse, reader: jspb.BinaryReader): InitWalletResponse;
}

export namespace InitWalletResponse {
  export type AsObject = {
    account: number,
    status: InitWalletResponse.Status,
    data: string,
  }

  export enum Status { 
    STATUS_PROCESSING = 0,
    STATUS_DONE = 1,
  }
}

export class UnlockWalletRequest extends jspb.Message {
  getWalletPassword(): Uint8Array | string;
  getWalletPassword_asU8(): Uint8Array;
  getWalletPassword_asB64(): string;
  setWalletPassword(value: Uint8Array | string): UnlockWalletRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockWalletRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnlockWalletRequest): UnlockWalletRequest.AsObject;
  static serializeBinaryToWriter(message: UnlockWalletRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockWalletRequest;
  static deserializeBinaryFromReader(message: UnlockWalletRequest, reader: jspb.BinaryReader): UnlockWalletRequest;
}

export namespace UnlockWalletRequest {
  export type AsObject = {
    walletPassword: Uint8Array | string,
  }
}

export class UnlockWalletResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockWalletResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnlockWalletResponse): UnlockWalletResponse.AsObject;
  static serializeBinaryToWriter(message: UnlockWalletResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockWalletResponse;
  static deserializeBinaryFromReader(message: UnlockWalletResponse, reader: jspb.BinaryReader): UnlockWalletResponse;
}

export namespace UnlockWalletResponse {
  export type AsObject = {
  }
}

export class ChangePasswordRequest extends jspb.Message {
  getCurrentPassword(): Uint8Array | string;
  getCurrentPassword_asU8(): Uint8Array;
  getCurrentPassword_asB64(): string;
  setCurrentPassword(value: Uint8Array | string): ChangePasswordRequest;

  getNewPassword(): Uint8Array | string;
  getNewPassword_asU8(): Uint8Array;
  getNewPassword_asB64(): string;
  setNewPassword(value: Uint8Array | string): ChangePasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordRequest): ChangePasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ChangePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordRequest;
  static deserializeBinaryFromReader(message: ChangePasswordRequest, reader: jspb.BinaryReader): ChangePasswordRequest;
}

export namespace ChangePasswordRequest {
  export type AsObject = {
    currentPassword: Uint8Array | string,
    newPassword: Uint8Array | string,
  }
}

export class ChangePasswordResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordResponse): ChangePasswordResponse.AsObject;
  static serializeBinaryToWriter(message: ChangePasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordResponse;
  static deserializeBinaryFromReader(message: ChangePasswordResponse, reader: jspb.BinaryReader): ChangePasswordResponse;
}

export namespace ChangePasswordResponse {
  export type AsObject = {
  }
}

export class IsReadyRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsReadyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsReadyRequest): IsReadyRequest.AsObject;
  static serializeBinaryToWriter(message: IsReadyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsReadyRequest;
  static deserializeBinaryFromReader(message: IsReadyRequest, reader: jspb.BinaryReader): IsReadyRequest;
}

export namespace IsReadyRequest {
  export type AsObject = {
  }
}

export class IsReadyResponse extends jspb.Message {
  getInitialized(): boolean;
  setInitialized(value: boolean): IsReadyResponse;

  getUnlocked(): boolean;
  setUnlocked(value: boolean): IsReadyResponse;

  getSynced(): boolean;
  setSynced(value: boolean): IsReadyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsReadyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IsReadyResponse): IsReadyResponse.AsObject;
  static serializeBinaryToWriter(message: IsReadyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsReadyResponse;
  static deserializeBinaryFromReader(message: IsReadyResponse, reader: jspb.BinaryReader): IsReadyResponse;
}

export namespace IsReadyResponse {
  export type AsObject = {
    initialized: boolean,
    unlocked: boolean,
    synced: boolean,
  }
}

