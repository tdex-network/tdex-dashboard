import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../google/api/annotations_pb';


export class SupportedContentTypesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupportedContentTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SupportedContentTypesRequest): SupportedContentTypesRequest.AsObject;
  static serializeBinaryToWriter(message: SupportedContentTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupportedContentTypesRequest;
  static deserializeBinaryFromReader(message: SupportedContentTypesRequest, reader: jspb.BinaryReader): SupportedContentTypesRequest;
}

export namespace SupportedContentTypesRequest {
  export type AsObject = {
  }
}

export class SupportedContentTypesReply extends jspb.Message {
  getAcceptedTypesList(): Array<ContentType>;
  setAcceptedTypesList(value: Array<ContentType>): SupportedContentTypesReply;
  clearAcceptedTypesList(): SupportedContentTypesReply;
  addAcceptedTypes(value: ContentType, index?: number): SupportedContentTypesReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupportedContentTypesReply.AsObject;
  static toObject(includeInstance: boolean, msg: SupportedContentTypesReply): SupportedContentTypesReply.AsObject;
  static serializeBinaryToWriter(message: SupportedContentTypesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupportedContentTypesReply;
  static deserializeBinaryFromReader(message: SupportedContentTypesReply, reader: jspb.BinaryReader): SupportedContentTypesReply;
}

export namespace SupportedContentTypesReply {
  export type AsObject = {
    acceptedTypesList: Array<ContentType>,
  }
}

export enum ContentType { 
  JSON = 0,
  GRPC = 1,
  GRPCWEB = 2,
  GRPCWEBTEXT = 3,
}
