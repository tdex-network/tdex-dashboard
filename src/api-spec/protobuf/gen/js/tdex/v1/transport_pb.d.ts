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

export class SupportedContentTypesResponse extends jspb.Message {
  getAcceptedTypesList(): Array<ContentType>;
  setAcceptedTypesList(value: Array<ContentType>): SupportedContentTypesResponse;
  clearAcceptedTypesList(): SupportedContentTypesResponse;
  addAcceptedTypes(value: ContentType, index?: number): SupportedContentTypesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupportedContentTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SupportedContentTypesResponse): SupportedContentTypesResponse.AsObject;
  static serializeBinaryToWriter(message: SupportedContentTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupportedContentTypesResponse;
  static deserializeBinaryFromReader(message: SupportedContentTypesResponse, reader: jspb.BinaryReader): SupportedContentTypesResponse;
}

export namespace SupportedContentTypesResponse {
  export type AsObject = {
    acceptedTypesList: Array<ContentType>,
  }
}

export enum ContentType { 
  CONTENT_TYPE_JSON = 0,
  CONTENT_TYPE_GRPC = 1,
  CONTENT_TYPE_GRPCWEB = 2,
  CONTENT_TYPE_GRPCWEBTEXT = 3,
}
