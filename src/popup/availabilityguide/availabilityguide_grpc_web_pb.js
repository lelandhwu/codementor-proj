/**
 * @fileoverview gRPC-Web generated client stub for availabilityguide
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.availabilityguide = require('./availabilityguide_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.availabilityguide.AvailabilityGuideClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.availabilityguide.AvailabilityGuidePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.availabilityguide.AuthCode,
 *   !proto.availabilityguide.Token>}
 */
const methodDescriptor_AvailabilityGuide_Authenticate = new grpc.web.MethodDescriptor(
  '/availabilityguide.AvailabilityGuide/Authenticate',
  grpc.web.MethodType.UNARY,
  proto.availabilityguide.AuthCode,
  proto.availabilityguide.Token,
  /**
   * @param {!proto.availabilityguide.AuthCode} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.availabilityguide.Token.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.availabilityguide.AuthCode,
 *   !proto.availabilityguide.Token>}
 */
const methodInfo_AvailabilityGuide_Authenticate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.availabilityguide.Token,
  /**
   * @param {!proto.availabilityguide.AuthCode} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.availabilityguide.Token.deserializeBinary
);


/**
 * @param {!proto.availabilityguide.AuthCode} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.availabilityguide.Token)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.availabilityguide.Token>|undefined}
 *     The XHR Node Readable Stream
 */
proto.availabilityguide.AvailabilityGuideClient.prototype.authenticate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/availabilityguide.AvailabilityGuide/Authenticate',
      request,
      metadata || {},
      methodDescriptor_AvailabilityGuide_Authenticate,
      callback);
};


/**
 * @param {!proto.availabilityguide.AuthCode} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.availabilityguide.Token>}
 *     A native promise that resolves to the response
 */
proto.availabilityguide.AvailabilityGuidePromiseClient.prototype.authenticate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/availabilityguide.AvailabilityGuide/Authenticate',
      request,
      metadata || {},
      methodDescriptor_AvailabilityGuide_Authenticate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.availabilityguide.CalendarRequest,
 *   !proto.availabilityguide.CalendarResponse>}
 */
const methodDescriptor_AvailabilityGuide_List = new grpc.web.MethodDescriptor(
  '/availabilityguide.AvailabilityGuide/List',
  grpc.web.MethodType.UNARY,
  proto.availabilityguide.CalendarRequest,
  proto.availabilityguide.CalendarResponse,
  /**
   * @param {!proto.availabilityguide.CalendarRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.availabilityguide.CalendarResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.availabilityguide.CalendarRequest,
 *   !proto.availabilityguide.CalendarResponse>}
 */
const methodInfo_AvailabilityGuide_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.availabilityguide.CalendarResponse,
  /**
   * @param {!proto.availabilityguide.CalendarRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.availabilityguide.CalendarResponse.deserializeBinary
);


/**
 * @param {!proto.availabilityguide.CalendarRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.availabilityguide.CalendarResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.availabilityguide.CalendarResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.availabilityguide.AvailabilityGuideClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/availabilityguide.AvailabilityGuide/List',
      request,
      metadata || {},
      methodDescriptor_AvailabilityGuide_List,
      callback);
};


/**
 * @param {!proto.availabilityguide.CalendarRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.availabilityguide.CalendarResponse>}
 *     A native promise that resolves to the response
 */
proto.availabilityguide.AvailabilityGuidePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/availabilityguide.AvailabilityGuide/List',
      request,
      metadata || {},
      methodDescriptor_AvailabilityGuide_List);
};


module.exports = proto.availabilityguide;

