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

export class GenSeedReply extends jspb.Message {
  getSeedMnemonicList(): Array<string>;
  setSeedMnemonicList(value: Array<string>): GenSeedReply;
  clearSeedMnemonicList(): GenSeedReply;
  addSeedMnemonic(value: string, index?: number): GenSeedReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenSeedReply.AsObject;
  static toObject(includeInstance: boolean, msg: GenSeedReply): GenSeedReply.AsObject;
  static serializeBinaryToWriter(message: GenSeedReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenSeedReply;
  static deserializeBinaryFromReader(message: GenSeedReply, reader: jspb.BinaryReader): GenSeedReply;
}

export namespace GenSeedReply {
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

export class InitWalletReply extends jspb.Message {
  getAccount(): number;
  setAccount(value: number): InitWalletReply;

  getStatus(): nitWalletReply.Status;
  setStatus(value: nitWalletReply.Status): InitWalletReply;

  getData(): string;
  setData(value: string): InitWalletReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitWalletReply.AsObject;
  static toObject(includeInstance: boolean, msg: InitWalletReply): InitWalletReply.AsObject;
  static serializeBinaryToWriter(message: InitWalletReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitWalletReply;
  static deserializeBinaryFromReader(message: InitWalletReply, reader: jspb.BinaryReader): InitWalletReply;
}

export namespace InitWalletReply {
  export type AsObject = {
    account: number,
    status: nitWalletReply.Status,
    data: string,
  }

  export enum Status { 
    PROCESSING = 0,
    DONE = 1,
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

export class UnlockWalletReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockWalletReply.AsObject;
  static toObject(includeInstance: boolean, msg: UnlockWalletReply): UnlockWalletReply.AsObject;
  static serializeBinaryToWriter(message: UnlockWalletReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockWalletReply;
  static deserializeBinaryFromReader(message: UnlockWalletReply, reader: jspb.BinaryReader): UnlockWalletReply;
}

export namespace UnlockWalletReply {
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

export class ChangePasswordReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordReply.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordReply): ChangePasswordReply.AsObject;
  static serializeBinaryToWriter(message: ChangePasswordReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordReply;
  static deserializeBinaryFromReader(message: ChangePasswordReply, reader: jspb.BinaryReader): ChangePasswordReply;
}

export namespace ChangePasswordReply {
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

export class IsReadyReply extends jspb.Message {
  getInitialized(): boolean;
  setInitialized(value: boolean): IsReadyReply;

  getUnlocked(): boolean;
  setUnlocked(value: boolean): IsReadyReply;

  getSynced(): boolean;
  setSynced(value: boolean): IsReadyReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsReadyReply.AsObject;
  static toObject(includeInstance: boolean, msg: IsReadyReply): IsReadyReply.AsObject;
  static serializeBinaryToWriter(message: IsReadyReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsReadyReply;
  static deserializeBinaryFromReader(message: IsReadyReply, reader: jspb.BinaryReader): IsReadyReply;
}

export namespace IsReadyReply {
  export type AsObject = {
    initialized: boolean,
    unlocked: boolean,
    synced: boolean,
  }
}

