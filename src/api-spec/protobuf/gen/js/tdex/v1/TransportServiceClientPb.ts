/**
 * @fileoverview gRPC-Web generated client stub for tdex.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as tdex_v1_transport_pb from '../../tdex/v1/transport_pb';


export class TransportServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorSupportedContentTypes = new grpcWeb.MethodDescriptor(
    '/tdex.v1.TransportService/SupportedContentTypes',
    grpcWeb.MethodType.UNARY,
    tdex_v1_transport_pb.SupportedContentTypesRequest,
    tdex_v1_transport_pb.SupportedContentTypesResponse,
    (request: tdex_v1_transport_pb.SupportedContentTypesRequest) => {
      return request.serializeBinary();
    },
    tdex_v1_transport_pb.SupportedContentTypesResponse.deserializeBinary
  );

  supportedContentTypes(
    request: tdex_v1_transport_pb.SupportedContentTypesRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdex_v1_transport_pb.SupportedContentTypesResponse>;

  supportedContentTypes(
    request: tdex_v1_transport_pb.SupportedContentTypesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdex_v1_transport_pb.SupportedContentTypesResponse) => void): grpcWeb.ClientReadableStream<tdex_v1_transport_pb.SupportedContentTypesResponse>;

  supportedContentTypes(
    request: tdex_v1_transport_pb.SupportedContentTypesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdex_v1_transport_pb.SupportedContentTypesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdex.v1.TransportService/SupportedContentTypes',
        request,
        metadata || {},
        this.methodDescriptorSupportedContentTypes,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdex.v1.TransportService/SupportedContentTypes',
    request,
    metadata || {},
    this.methodDescriptorSupportedContentTypes);
  }

}

