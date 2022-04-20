// source: tdex-daemon/v1/operator.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var tdex$daemon_v1_types_pb = require('../../tdex-daemon/v1/types_pb.js');
goog.object.extend(proto, tdex$daemon_v1_types_pb);
var tdex_v1_types_pb = require('../../tdex/v1/types_pb.js');
goog.object.extend(proto, tdex_v1_types_pb);
goog.exportSymbol('proto.tdex_daemon.v1.AddWebhookRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.AddWebhookResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.BuildInfo', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ClaimFeeDepositsRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ClaimFeeDepositsResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ClaimMarketDepositsRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ClaimMarketDepositsResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.CloseMarketRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.CloseMarketResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.DropMarketRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.DropMarketResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.FeeFragmenterSplitFundsResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetFeeAddressRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetFeeAddressResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetFeeBalanceRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetFeeBalanceResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetFeeFragmenterAddressRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetFeeFragmenterBalanceRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetFeeFragmenterBalanceResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetInfoRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetInfoResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetMarketAddressRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetMarketAddressResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetMarketBalanceRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetMarketBalanceResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetMarketFragmenterAddressRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetMarketFragmenterBalanceRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetMarketFragmenterBalanceResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetMarketInfoRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetMarketInfoResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetMarketReportRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.GetMarketReportResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ListDepositsRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ListDepositsResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ListFeeAddressesRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ListFeeAddressesResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ListFeeFragmenterAddressesRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ListMarketAddressesRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ListMarketAddressesResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ListMarketFragmenterAddressesRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ListMarketsRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ListMarketsResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ListTradesRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ListTradesResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ListUtxosRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ListUtxosResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ListWebhooksRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ListWebhooksResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ListWithdrawalsRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ListWithdrawalsResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.MarketFragmenterSplitFundsResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.NewMarketRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.NewMarketResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.OpenMarketRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.OpenMarketResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ReloadUtxosRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.ReloadUtxosResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.RemoveWebhookRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.RemoveWebhookResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.UpdateMarketPriceRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.UpdateMarketPriceResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.UpdateMarketStrategyRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.UpdateMarketStrategyResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.WithdrawFeeFragmenterResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.WithdrawFeeRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.WithdrawFeeResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.WithdrawMarketFragmenterResponse', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.WithdrawMarketRequest', null, global);
goog.exportSymbol('proto.tdex_daemon.v1.WithdrawMarketResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.GetInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetInfoRequest.displayName = 'proto.tdex_daemon.v1.GetInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex_daemon.v1.GetInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.tdex_daemon.v1.GetInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetInfoResponse.displayName = 'proto.tdex_daemon.v1.GetInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.BuildInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.BuildInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.BuildInfo.displayName = 'proto.tdex_daemon.v1.BuildInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetFeeAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.GetFeeAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetFeeAddressRequest.displayName = 'proto.tdex_daemon.v1.GetFeeAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetFeeAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex_daemon.v1.GetFeeAddressResponse.repeatedFields_, null);
};
goog.inherits(proto.tdex_daemon.v1.GetFeeAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetFeeAddressResponse.displayName = 'proto.tdex_daemon.v1.GetFeeAddressResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ListFeeAddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.ListFeeAddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ListFeeAddressesRequest.displayName = 'proto.tdex_daemon.v1.ListFeeAddressesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ListFeeAddressesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex_daemon.v1.ListFeeAddressesResponse.repeatedFields_, null);
};
goog.inherits(proto.tdex_daemon.v1.ListFeeAddressesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ListFeeAddressesResponse.displayName = 'proto.tdex_daemon.v1.ListFeeAddressesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetFeeBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.GetFeeBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetFeeBalanceRequest.displayName = 'proto.tdex_daemon.v1.GetFeeBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetFeeBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.GetFeeBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetFeeBalanceResponse.displayName = 'proto.tdex_daemon.v1.GetFeeBalanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ClaimFeeDepositsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex_daemon.v1.ClaimFeeDepositsRequest.repeatedFields_, null);
};
goog.inherits(proto.tdex_daemon.v1.ClaimFeeDepositsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ClaimFeeDepositsRequest.displayName = 'proto.tdex_daemon.v1.ClaimFeeDepositsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ClaimFeeDepositsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.ClaimFeeDepositsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ClaimFeeDepositsResponse.displayName = 'proto.tdex_daemon.v1.ClaimFeeDepositsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.WithdrawFeeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.WithdrawFeeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.WithdrawFeeRequest.displayName = 'proto.tdex_daemon.v1.WithdrawFeeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.WithdrawFeeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.WithdrawFeeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.WithdrawFeeResponse.displayName = 'proto.tdex_daemon.v1.WithdrawFeeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.NewMarketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.NewMarketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.NewMarketRequest.displayName = 'proto.tdex_daemon.v1.NewMarketRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.NewMarketResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.NewMarketResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.NewMarketResponse.displayName = 'proto.tdex_daemon.v1.NewMarketResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetMarketInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.GetMarketInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetMarketInfoRequest.displayName = 'proto.tdex_daemon.v1.GetMarketInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetMarketInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.GetMarketInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetMarketInfoResponse.displayName = 'proto.tdex_daemon.v1.GetMarketInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetMarketAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.GetMarketAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetMarketAddressRequest.displayName = 'proto.tdex_daemon.v1.GetMarketAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetMarketAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex_daemon.v1.GetMarketAddressResponse.repeatedFields_, null);
};
goog.inherits(proto.tdex_daemon.v1.GetMarketAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetMarketAddressResponse.displayName = 'proto.tdex_daemon.v1.GetMarketAddressResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ListMarketAddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.ListMarketAddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ListMarketAddressesRequest.displayName = 'proto.tdex_daemon.v1.ListMarketAddressesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ListMarketAddressesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex_daemon.v1.ListMarketAddressesResponse.repeatedFields_, null);
};
goog.inherits(proto.tdex_daemon.v1.ListMarketAddressesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ListMarketAddressesResponse.displayName = 'proto.tdex_daemon.v1.ListMarketAddressesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetMarketBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.GetMarketBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetMarketBalanceRequest.displayName = 'proto.tdex_daemon.v1.GetMarketBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetMarketBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.GetMarketBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetMarketBalanceResponse.displayName = 'proto.tdex_daemon.v1.GetMarketBalanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ClaimMarketDepositsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex_daemon.v1.ClaimMarketDepositsRequest.repeatedFields_, null);
};
goog.inherits(proto.tdex_daemon.v1.ClaimMarketDepositsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ClaimMarketDepositsRequest.displayName = 'proto.tdex_daemon.v1.ClaimMarketDepositsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ClaimMarketDepositsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.ClaimMarketDepositsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ClaimMarketDepositsResponse.displayName = 'proto.tdex_daemon.v1.ClaimMarketDepositsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.OpenMarketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.OpenMarketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.OpenMarketRequest.displayName = 'proto.tdex_daemon.v1.OpenMarketRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.OpenMarketResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.OpenMarketResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.OpenMarketResponse.displayName = 'proto.tdex_daemon.v1.OpenMarketResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.CloseMarketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.CloseMarketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.CloseMarketRequest.displayName = 'proto.tdex_daemon.v1.CloseMarketRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.CloseMarketResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.CloseMarketResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.CloseMarketResponse.displayName = 'proto.tdex_daemon.v1.CloseMarketResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ListMarketsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.ListMarketsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ListMarketsRequest.displayName = 'proto.tdex_daemon.v1.ListMarketsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ListMarketsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex_daemon.v1.ListMarketsResponse.repeatedFields_, null);
};
goog.inherits(proto.tdex_daemon.v1.ListMarketsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ListMarketsResponse.displayName = 'proto.tdex_daemon.v1.ListMarketsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.DropMarketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.DropMarketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.DropMarketRequest.displayName = 'proto.tdex_daemon.v1.DropMarketRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.DropMarketResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.DropMarketResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.DropMarketResponse.displayName = 'proto.tdex_daemon.v1.DropMarketResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest.displayName = 'proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse.repeatedFields_, null);
};
goog.inherits(proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse.displayName = 'proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.WithdrawMarketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.WithdrawMarketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.WithdrawMarketRequest.displayName = 'proto.tdex_daemon.v1.WithdrawMarketRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.WithdrawMarketResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.WithdrawMarketResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.WithdrawMarketResponse.displayName = 'proto.tdex_daemon.v1.WithdrawMarketResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest.displayName = 'proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse.displayName = 'proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest.displayName = 'proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse.displayName = 'proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.UpdateMarketPriceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.UpdateMarketPriceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.UpdateMarketPriceRequest.displayName = 'proto.tdex_daemon.v1.UpdateMarketPriceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.UpdateMarketPriceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.UpdateMarketPriceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.UpdateMarketPriceResponse.displayName = 'proto.tdex_daemon.v1.UpdateMarketPriceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.UpdateMarketStrategyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.UpdateMarketStrategyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.UpdateMarketStrategyRequest.displayName = 'proto.tdex_daemon.v1.UpdateMarketStrategyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.UpdateMarketStrategyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.UpdateMarketStrategyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.UpdateMarketStrategyResponse.displayName = 'proto.tdex_daemon.v1.UpdateMarketStrategyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetFeeFragmenterAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.GetFeeFragmenterAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetFeeFragmenterAddressRequest.displayName = 'proto.tdex_daemon.v1.GetFeeFragmenterAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse.repeatedFields_, null);
};
goog.inherits(proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse.displayName = 'proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ListFeeFragmenterAddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.ListFeeFragmenterAddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ListFeeFragmenterAddressesRequest.displayName = 'proto.tdex_daemon.v1.ListFeeFragmenterAddressesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse.repeatedFields_, null);
};
goog.inherits(proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse.displayName = 'proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetFeeFragmenterBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.GetFeeFragmenterBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetFeeFragmenterBalanceRequest.displayName = 'proto.tdex_daemon.v1.GetFeeFragmenterBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetFeeFragmenterBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.GetFeeFragmenterBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetFeeFragmenterBalanceResponse.displayName = 'proto.tdex_daemon.v1.GetFeeFragmenterBalanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest.displayName = 'proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.FeeFragmenterSplitFundsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.FeeFragmenterSplitFundsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.FeeFragmenterSplitFundsResponse.displayName = 'proto.tdex_daemon.v1.FeeFragmenterSplitFundsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest.displayName = 'proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.WithdrawFeeFragmenterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.WithdrawFeeFragmenterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.WithdrawFeeFragmenterResponse.displayName = 'proto.tdex_daemon.v1.WithdrawFeeFragmenterResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetMarketFragmenterAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.GetMarketFragmenterAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetMarketFragmenterAddressRequest.displayName = 'proto.tdex_daemon.v1.GetMarketFragmenterAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse.repeatedFields_, null);
};
goog.inherits(proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse.displayName = 'proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ListMarketFragmenterAddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.ListMarketFragmenterAddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ListMarketFragmenterAddressesRequest.displayName = 'proto.tdex_daemon.v1.ListMarketFragmenterAddressesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse.repeatedFields_, null);
};
goog.inherits(proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse.displayName = 'proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetMarketFragmenterBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.GetMarketFragmenterBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetMarketFragmenterBalanceRequest.displayName = 'proto.tdex_daemon.v1.GetMarketFragmenterBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetMarketFragmenterBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.GetMarketFragmenterBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetMarketFragmenterBalanceResponse.displayName = 'proto.tdex_daemon.v1.GetMarketFragmenterBalanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest.displayName = 'proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.MarketFragmenterSplitFundsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.MarketFragmenterSplitFundsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.MarketFragmenterSplitFundsResponse.displayName = 'proto.tdex_daemon.v1.MarketFragmenterSplitFundsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest.displayName = 'proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.WithdrawMarketFragmenterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.WithdrawMarketFragmenterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.WithdrawMarketFragmenterResponse.displayName = 'proto.tdex_daemon.v1.WithdrawMarketFragmenterResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ListTradesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.ListTradesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ListTradesRequest.displayName = 'proto.tdex_daemon.v1.ListTradesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ListTradesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex_daemon.v1.ListTradesResponse.repeatedFields_, null);
};
goog.inherits(proto.tdex_daemon.v1.ListTradesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ListTradesResponse.displayName = 'proto.tdex_daemon.v1.ListTradesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ReloadUtxosRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.ReloadUtxosRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ReloadUtxosRequest.displayName = 'proto.tdex_daemon.v1.ReloadUtxosRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ReloadUtxosResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.ReloadUtxosResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ReloadUtxosResponse.displayName = 'proto.tdex_daemon.v1.ReloadUtxosResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ListUtxosRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.ListUtxosRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ListUtxosRequest.displayName = 'proto.tdex_daemon.v1.ListUtxosRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ListUtxosResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex_daemon.v1.ListUtxosResponse.repeatedFields_, null);
};
goog.inherits(proto.tdex_daemon.v1.ListUtxosResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ListUtxosResponse.displayName = 'proto.tdex_daemon.v1.ListUtxosResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.AddWebhookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.AddWebhookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.AddWebhookRequest.displayName = 'proto.tdex_daemon.v1.AddWebhookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.AddWebhookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.AddWebhookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.AddWebhookResponse.displayName = 'proto.tdex_daemon.v1.AddWebhookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.RemoveWebhookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.RemoveWebhookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.RemoveWebhookRequest.displayName = 'proto.tdex_daemon.v1.RemoveWebhookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.RemoveWebhookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.RemoveWebhookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.RemoveWebhookResponse.displayName = 'proto.tdex_daemon.v1.RemoveWebhookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ListWebhooksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.ListWebhooksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ListWebhooksRequest.displayName = 'proto.tdex_daemon.v1.ListWebhooksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ListWebhooksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex_daemon.v1.ListWebhooksResponse.repeatedFields_, null);
};
goog.inherits(proto.tdex_daemon.v1.ListWebhooksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ListWebhooksResponse.displayName = 'proto.tdex_daemon.v1.ListWebhooksResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ListDepositsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.ListDepositsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ListDepositsRequest.displayName = 'proto.tdex_daemon.v1.ListDepositsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ListDepositsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex_daemon.v1.ListDepositsResponse.repeatedFields_, null);
};
goog.inherits(proto.tdex_daemon.v1.ListDepositsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ListDepositsResponse.displayName = 'proto.tdex_daemon.v1.ListDepositsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ListWithdrawalsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.ListWithdrawalsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ListWithdrawalsRequest.displayName = 'proto.tdex_daemon.v1.ListWithdrawalsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.ListWithdrawalsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex_daemon.v1.ListWithdrawalsResponse.repeatedFields_, null);
};
goog.inherits(proto.tdex_daemon.v1.ListWithdrawalsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.ListWithdrawalsResponse.displayName = 'proto.tdex_daemon.v1.ListWithdrawalsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetMarketReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.GetMarketReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetMarketReportRequest.displayName = 'proto.tdex_daemon.v1.GetMarketReportRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tdex_daemon.v1.GetMarketReportResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex_daemon.v1.GetMarketReportResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex_daemon.v1.GetMarketReportResponse.displayName = 'proto.tdex_daemon.v1.GetMarketReportResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetInfoRequest}
 */
proto.tdex_daemon.v1.GetInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetInfoRequest;
  return proto.tdex_daemon.v1.GetInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetInfoRequest}
 */
proto.tdex_daemon.v1.GetInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex_daemon.v1.GetInfoResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rootPath: jspb.Message.getFieldWithDefault(msg, 1, ""),
    masterBlindingKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    accountInfoList: jspb.Message.toObjectList(msg.getAccountInfoList(),
    tdex$daemon_v1_types_pb.AccountInfo.toObject, includeInstance),
    network: jspb.Message.getFieldWithDefault(msg, 4, ""),
    buildData: (f = msg.getBuildData()) && proto.tdex_daemon.v1.BuildInfo.toObject(includeInstance, f),
    fixedBaseAsset: jspb.Message.getFieldWithDefault(msg, 6, ""),
    fixedQuoteAsset: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetInfoResponse}
 */
proto.tdex_daemon.v1.GetInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetInfoResponse;
  return proto.tdex_daemon.v1.GetInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetInfoResponse}
 */
proto.tdex_daemon.v1.GetInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRootPath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMasterBlindingKey(value);
      break;
    case 3:
      var value = new tdex$daemon_v1_types_pb.AccountInfo;
      reader.readMessage(value,tdex$daemon_v1_types_pb.AccountInfo.deserializeBinaryFromReader);
      msg.addAccountInfo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetwork(value);
      break;
    case 5:
      var value = new proto.tdex_daemon.v1.BuildInfo;
      reader.readMessage(value,proto.tdex_daemon.v1.BuildInfo.deserializeBinaryFromReader);
      msg.setBuildData(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFixedBaseAsset(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFixedQuoteAsset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRootPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMasterBlindingKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAccountInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      tdex$daemon_v1_types_pb.AccountInfo.serializeBinaryToWriter
    );
  }
  f = message.getNetwork();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBuildData();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tdex_daemon.v1.BuildInfo.serializeBinaryToWriter
    );
  }
  f = message.getFixedBaseAsset();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getFixedQuoteAsset();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string root_path = 1;
 * @return {string}
 */
proto.tdex_daemon.v1.GetInfoResponse.prototype.getRootPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.GetInfoResponse} returns this
 */
proto.tdex_daemon.v1.GetInfoResponse.prototype.setRootPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string master_blinding_key = 2;
 * @return {string}
 */
proto.tdex_daemon.v1.GetInfoResponse.prototype.getMasterBlindingKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.GetInfoResponse} returns this
 */
proto.tdex_daemon.v1.GetInfoResponse.prototype.setMasterBlindingKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated AccountInfo account_info = 3;
 * @return {!Array<!proto.tdex_daemon.v1.AccountInfo>}
 */
proto.tdex_daemon.v1.GetInfoResponse.prototype.getAccountInfoList = function() {
  return /** @type{!Array<!proto.tdex_daemon.v1.AccountInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex$daemon_v1_types_pb.AccountInfo, 3));
};


/**
 * @param {!Array<!proto.tdex_daemon.v1.AccountInfo>} value
 * @return {!proto.tdex_daemon.v1.GetInfoResponse} returns this
*/
proto.tdex_daemon.v1.GetInfoResponse.prototype.setAccountInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.tdex_daemon.v1.AccountInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex_daemon.v1.AccountInfo}
 */
proto.tdex_daemon.v1.GetInfoResponse.prototype.addAccountInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.tdex_daemon.v1.AccountInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex_daemon.v1.GetInfoResponse} returns this
 */
proto.tdex_daemon.v1.GetInfoResponse.prototype.clearAccountInfoList = function() {
  return this.setAccountInfoList([]);
};


/**
 * optional string network = 4;
 * @return {string}
 */
proto.tdex_daemon.v1.GetInfoResponse.prototype.getNetwork = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.GetInfoResponse} returns this
 */
proto.tdex_daemon.v1.GetInfoResponse.prototype.setNetwork = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional BuildInfo build_data = 5;
 * @return {?proto.tdex_daemon.v1.BuildInfo}
 */
proto.tdex_daemon.v1.GetInfoResponse.prototype.getBuildData = function() {
  return /** @type{?proto.tdex_daemon.v1.BuildInfo} */ (
    jspb.Message.getWrapperField(this, proto.tdex_daemon.v1.BuildInfo, 5));
};


/**
 * @param {?proto.tdex_daemon.v1.BuildInfo|undefined} value
 * @return {!proto.tdex_daemon.v1.GetInfoResponse} returns this
*/
proto.tdex_daemon.v1.GetInfoResponse.prototype.setBuildData = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.GetInfoResponse} returns this
 */
proto.tdex_daemon.v1.GetInfoResponse.prototype.clearBuildData = function() {
  return this.setBuildData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.GetInfoResponse.prototype.hasBuildData = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string fixed_base_asset = 6;
 * @return {string}
 */
proto.tdex_daemon.v1.GetInfoResponse.prototype.getFixedBaseAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.GetInfoResponse} returns this
 */
proto.tdex_daemon.v1.GetInfoResponse.prototype.setFixedBaseAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string fixed_quote_asset = 7;
 * @return {string}
 */
proto.tdex_daemon.v1.GetInfoResponse.prototype.getFixedQuoteAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.GetInfoResponse} returns this
 */
proto.tdex_daemon.v1.GetInfoResponse.prototype.setFixedQuoteAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.BuildInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.BuildInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.BuildInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.BuildInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, ""),
    commit: jspb.Message.getFieldWithDefault(msg, 2, ""),
    date: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.BuildInfo}
 */
proto.tdex_daemon.v1.BuildInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.BuildInfo;
  return proto.tdex_daemon.v1.BuildInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.BuildInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.BuildInfo}
 */
proto.tdex_daemon.v1.BuildInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommit(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.BuildInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.BuildInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.BuildInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.BuildInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommit();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.tdex_daemon.v1.BuildInfo.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.BuildInfo} returns this
 */
proto.tdex_daemon.v1.BuildInfo.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string commit = 2;
 * @return {string}
 */
proto.tdex_daemon.v1.BuildInfo.prototype.getCommit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.BuildInfo} returns this
 */
proto.tdex_daemon.v1.BuildInfo.prototype.setCommit = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string date = 3;
 * @return {string}
 */
proto.tdex_daemon.v1.BuildInfo.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.BuildInfo} returns this
 */
proto.tdex_daemon.v1.BuildInfo.prototype.setDate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetFeeAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetFeeAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetFeeAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetFeeAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    numOfAddresses: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetFeeAddressRequest}
 */
proto.tdex_daemon.v1.GetFeeAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetFeeAddressRequest;
  return proto.tdex_daemon.v1.GetFeeAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetFeeAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetFeeAddressRequest}
 */
proto.tdex_daemon.v1.GetFeeAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumOfAddresses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetFeeAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetFeeAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetFeeAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetFeeAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumOfAddresses();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 num_of_addresses = 1;
 * @return {number}
 */
proto.tdex_daemon.v1.GetFeeAddressRequest.prototype.getNumOfAddresses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex_daemon.v1.GetFeeAddressRequest} returns this
 */
proto.tdex_daemon.v1.GetFeeAddressRequest.prototype.setNumOfAddresses = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex_daemon.v1.GetFeeAddressResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetFeeAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetFeeAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetFeeAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetFeeAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    tdex$daemon_v1_types_pb.AddressWithBlindingKey.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetFeeAddressResponse}
 */
proto.tdex_daemon.v1.GetFeeAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetFeeAddressResponse;
  return proto.tdex_daemon.v1.GetFeeAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetFeeAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetFeeAddressResponse}
 */
proto.tdex_daemon.v1.GetFeeAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex$daemon_v1_types_pb.AddressWithBlindingKey;
      reader.readMessage(value,tdex$daemon_v1_types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
      msg.addAddressWithBlindingKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetFeeAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetFeeAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetFeeAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetFeeAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tdex$daemon_v1_types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>}
 */
proto.tdex_daemon.v1.GetFeeAddressResponse.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex$daemon_v1_types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>} value
 * @return {!proto.tdex_daemon.v1.GetFeeAddressResponse} returns this
*/
proto.tdex_daemon.v1.GetFeeAddressResponse.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex_daemon.v1.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex_daemon.v1.AddressWithBlindingKey}
 */
proto.tdex_daemon.v1.GetFeeAddressResponse.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex_daemon.v1.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex_daemon.v1.GetFeeAddressResponse} returns this
 */
proto.tdex_daemon.v1.GetFeeAddressResponse.prototype.clearAddressWithBlindingKeyList = function() {
  return this.setAddressWithBlindingKeyList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ListFeeAddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ListFeeAddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ListFeeAddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListFeeAddressesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ListFeeAddressesRequest}
 */
proto.tdex_daemon.v1.ListFeeAddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ListFeeAddressesRequest;
  return proto.tdex_daemon.v1.ListFeeAddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ListFeeAddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ListFeeAddressesRequest}
 */
proto.tdex_daemon.v1.ListFeeAddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ListFeeAddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ListFeeAddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ListFeeAddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListFeeAddressesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex_daemon.v1.ListFeeAddressesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ListFeeAddressesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ListFeeAddressesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ListFeeAddressesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListFeeAddressesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    tdex$daemon_v1_types_pb.AddressWithBlindingKey.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ListFeeAddressesResponse}
 */
proto.tdex_daemon.v1.ListFeeAddressesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ListFeeAddressesResponse;
  return proto.tdex_daemon.v1.ListFeeAddressesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ListFeeAddressesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ListFeeAddressesResponse}
 */
proto.tdex_daemon.v1.ListFeeAddressesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex$daemon_v1_types_pb.AddressWithBlindingKey;
      reader.readMessage(value,tdex$daemon_v1_types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
      msg.addAddressWithBlindingKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ListFeeAddressesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ListFeeAddressesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ListFeeAddressesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListFeeAddressesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tdex$daemon_v1_types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>}
 */
proto.tdex_daemon.v1.ListFeeAddressesResponse.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex$daemon_v1_types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>} value
 * @return {!proto.tdex_daemon.v1.ListFeeAddressesResponse} returns this
*/
proto.tdex_daemon.v1.ListFeeAddressesResponse.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex_daemon.v1.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex_daemon.v1.AddressWithBlindingKey}
 */
proto.tdex_daemon.v1.ListFeeAddressesResponse.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex_daemon.v1.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex_daemon.v1.ListFeeAddressesResponse} returns this
 */
proto.tdex_daemon.v1.ListFeeAddressesResponse.prototype.clearAddressWithBlindingKeyList = function() {
  return this.setAddressWithBlindingKeyList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetFeeBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetFeeBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetFeeBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetFeeBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetFeeBalanceRequest}
 */
proto.tdex_daemon.v1.GetFeeBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetFeeBalanceRequest;
  return proto.tdex_daemon.v1.GetFeeBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetFeeBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetFeeBalanceRequest}
 */
proto.tdex_daemon.v1.GetFeeBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetFeeBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetFeeBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetFeeBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetFeeBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetFeeBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetFeeBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetFeeBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetFeeBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    availableBalance: jspb.Message.getFieldWithDefault(msg, 1, 0),
    totalBalance: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetFeeBalanceResponse}
 */
proto.tdex_daemon.v1.GetFeeBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetFeeBalanceResponse;
  return proto.tdex_daemon.v1.GetFeeBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetFeeBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetFeeBalanceResponse}
 */
proto.tdex_daemon.v1.GetFeeBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAvailableBalance(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetFeeBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetFeeBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetFeeBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetFeeBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailableBalance();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getTotalBalance();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 available_balance = 1;
 * @return {number}
 */
proto.tdex_daemon.v1.GetFeeBalanceResponse.prototype.getAvailableBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex_daemon.v1.GetFeeBalanceResponse} returns this
 */
proto.tdex_daemon.v1.GetFeeBalanceResponse.prototype.setAvailableBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 total_balance = 2;
 * @return {number}
 */
proto.tdex_daemon.v1.GetFeeBalanceResponse.prototype.getTotalBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex_daemon.v1.GetFeeBalanceResponse} returns this
 */
proto.tdex_daemon.v1.GetFeeBalanceResponse.prototype.setTotalBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex_daemon.v1.ClaimFeeDepositsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ClaimFeeDepositsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ClaimFeeDepositsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ClaimFeeDepositsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ClaimFeeDepositsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    outpointsList: jspb.Message.toObjectList(msg.getOutpointsList(),
    tdex$daemon_v1_types_pb.Outpoint.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ClaimFeeDepositsRequest}
 */
proto.tdex_daemon.v1.ClaimFeeDepositsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ClaimFeeDepositsRequest;
  return proto.tdex_daemon.v1.ClaimFeeDepositsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ClaimFeeDepositsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ClaimFeeDepositsRequest}
 */
proto.tdex_daemon.v1.ClaimFeeDepositsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex$daemon_v1_types_pb.Outpoint;
      reader.readMessage(value,tdex$daemon_v1_types_pb.Outpoint.deserializeBinaryFromReader);
      msg.addOutpoints(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ClaimFeeDepositsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ClaimFeeDepositsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ClaimFeeDepositsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ClaimFeeDepositsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutpointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tdex$daemon_v1_types_pb.Outpoint.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Outpoint outpoints = 1;
 * @return {!Array<!proto.tdex_daemon.v1.Outpoint>}
 */
proto.tdex_daemon.v1.ClaimFeeDepositsRequest.prototype.getOutpointsList = function() {
  return /** @type{!Array<!proto.tdex_daemon.v1.Outpoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex$daemon_v1_types_pb.Outpoint, 1));
};


/**
 * @param {!Array<!proto.tdex_daemon.v1.Outpoint>} value
 * @return {!proto.tdex_daemon.v1.ClaimFeeDepositsRequest} returns this
*/
proto.tdex_daemon.v1.ClaimFeeDepositsRequest.prototype.setOutpointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex_daemon.v1.Outpoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex_daemon.v1.Outpoint}
 */
proto.tdex_daemon.v1.ClaimFeeDepositsRequest.prototype.addOutpoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex_daemon.v1.Outpoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex_daemon.v1.ClaimFeeDepositsRequest} returns this
 */
proto.tdex_daemon.v1.ClaimFeeDepositsRequest.prototype.clearOutpointsList = function() {
  return this.setOutpointsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ClaimFeeDepositsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ClaimFeeDepositsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ClaimFeeDepositsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ClaimFeeDepositsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ClaimFeeDepositsResponse}
 */
proto.tdex_daemon.v1.ClaimFeeDepositsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ClaimFeeDepositsResponse;
  return proto.tdex_daemon.v1.ClaimFeeDepositsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ClaimFeeDepositsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ClaimFeeDepositsResponse}
 */
proto.tdex_daemon.v1.ClaimFeeDepositsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ClaimFeeDepositsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ClaimFeeDepositsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ClaimFeeDepositsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ClaimFeeDepositsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.WithdrawFeeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.WithdrawFeeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.WithdrawFeeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.WithdrawFeeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    millisatsPerByte: jspb.Message.getFieldWithDefault(msg, 2, 0),
    address: jspb.Message.getFieldWithDefault(msg, 3, ""),
    asset: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.WithdrawFeeRequest}
 */
proto.tdex_daemon.v1.WithdrawFeeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.WithdrawFeeRequest;
  return proto.tdex_daemon.v1.WithdrawFeeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.WithdrawFeeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.WithdrawFeeRequest}
 */
proto.tdex_daemon.v1.WithdrawFeeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMillisatsPerByte(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.WithdrawFeeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.WithdrawFeeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.WithdrawFeeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.WithdrawFeeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMillisatsPerByte();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint64 amount = 1;
 * @return {number}
 */
proto.tdex_daemon.v1.WithdrawFeeRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex_daemon.v1.WithdrawFeeRequest} returns this
 */
proto.tdex_daemon.v1.WithdrawFeeRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 millisats_per_byte = 2;
 * @return {number}
 */
proto.tdex_daemon.v1.WithdrawFeeRequest.prototype.getMillisatsPerByte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex_daemon.v1.WithdrawFeeRequest} returns this
 */
proto.tdex_daemon.v1.WithdrawFeeRequest.prototype.setMillisatsPerByte = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.tdex_daemon.v1.WithdrawFeeRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.WithdrawFeeRequest} returns this
 */
proto.tdex_daemon.v1.WithdrawFeeRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string asset = 4;
 * @return {string}
 */
proto.tdex_daemon.v1.WithdrawFeeRequest.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.WithdrawFeeRequest} returns this
 */
proto.tdex_daemon.v1.WithdrawFeeRequest.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.WithdrawFeeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.WithdrawFeeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.WithdrawFeeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.WithdrawFeeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    txid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.WithdrawFeeResponse}
 */
proto.tdex_daemon.v1.WithdrawFeeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.WithdrawFeeResponse;
  return proto.tdex_daemon.v1.WithdrawFeeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.WithdrawFeeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.WithdrawFeeResponse}
 */
proto.tdex_daemon.v1.WithdrawFeeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.WithdrawFeeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.WithdrawFeeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.WithdrawFeeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.WithdrawFeeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string txid = 1;
 * @return {string}
 */
proto.tdex_daemon.v1.WithdrawFeeResponse.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.WithdrawFeeResponse} returns this
 */
proto.tdex_daemon.v1.WithdrawFeeResponse.prototype.setTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.NewMarketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.NewMarketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.NewMarketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.NewMarketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && tdex_v1_types_pb.Market.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.NewMarketRequest}
 */
proto.tdex_daemon.v1.NewMarketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.NewMarketRequest;
  return proto.tdex_daemon.v1.NewMarketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.NewMarketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.NewMarketRequest}
 */
proto.tdex_daemon.v1.NewMarketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.Market;
      reader.readMessage(value,tdex_v1_types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.NewMarketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.NewMarketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.NewMarketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.NewMarketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex_v1_types_pb.Market.serializeBinaryToWriter
    );
  }
};


/**
 * optional tdex.v1.Market market = 1;
 * @return {?proto.tdex.v1.Market}
 */
proto.tdex_daemon.v1.NewMarketRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex_daemon.v1.NewMarketRequest} returns this
*/
proto.tdex_daemon.v1.NewMarketRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.NewMarketRequest} returns this
 */
proto.tdex_daemon.v1.NewMarketRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.NewMarketRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.NewMarketResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.NewMarketResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.NewMarketResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.NewMarketResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.NewMarketResponse}
 */
proto.tdex_daemon.v1.NewMarketResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.NewMarketResponse;
  return proto.tdex_daemon.v1.NewMarketResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.NewMarketResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.NewMarketResponse}
 */
proto.tdex_daemon.v1.NewMarketResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.NewMarketResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.NewMarketResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.NewMarketResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.NewMarketResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetMarketInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetMarketInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetMarketInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && tdex_v1_types_pb.Market.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetMarketInfoRequest}
 */
proto.tdex_daemon.v1.GetMarketInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetMarketInfoRequest;
  return proto.tdex_daemon.v1.GetMarketInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetMarketInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetMarketInfoRequest}
 */
proto.tdex_daemon.v1.GetMarketInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.Market;
      reader.readMessage(value,tdex_v1_types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetMarketInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetMarketInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetMarketInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex_v1_types_pb.Market.serializeBinaryToWriter
    );
  }
};


/**
 * optional tdex.v1.Market market = 1;
 * @return {?proto.tdex.v1.Market}
 */
proto.tdex_daemon.v1.GetMarketInfoRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex_daemon.v1.GetMarketInfoRequest} returns this
*/
proto.tdex_daemon.v1.GetMarketInfoRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.GetMarketInfoRequest} returns this
 */
proto.tdex_daemon.v1.GetMarketInfoRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.GetMarketInfoRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetMarketInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetMarketInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetMarketInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && tdex$daemon_v1_types_pb.MarketInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetMarketInfoResponse}
 */
proto.tdex_daemon.v1.GetMarketInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetMarketInfoResponse;
  return proto.tdex_daemon.v1.GetMarketInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetMarketInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetMarketInfoResponse}
 */
proto.tdex_daemon.v1.GetMarketInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex$daemon_v1_types_pb.MarketInfo;
      reader.readMessage(value,tdex$daemon_v1_types_pb.MarketInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetMarketInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetMarketInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetMarketInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex$daemon_v1_types_pb.MarketInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional MarketInfo info = 1;
 * @return {?proto.tdex_daemon.v1.MarketInfo}
 */
proto.tdex_daemon.v1.GetMarketInfoResponse.prototype.getInfo = function() {
  return /** @type{?proto.tdex_daemon.v1.MarketInfo} */ (
    jspb.Message.getWrapperField(this, tdex$daemon_v1_types_pb.MarketInfo, 1));
};


/**
 * @param {?proto.tdex_daemon.v1.MarketInfo|undefined} value
 * @return {!proto.tdex_daemon.v1.GetMarketInfoResponse} returns this
*/
proto.tdex_daemon.v1.GetMarketInfoResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.GetMarketInfoResponse} returns this
 */
proto.tdex_daemon.v1.GetMarketInfoResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.GetMarketInfoResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetMarketAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetMarketAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetMarketAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && tdex_v1_types_pb.Market.toObject(includeInstance, f),
    numOfAddresses: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetMarketAddressRequest}
 */
proto.tdex_daemon.v1.GetMarketAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetMarketAddressRequest;
  return proto.tdex_daemon.v1.GetMarketAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetMarketAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetMarketAddressRequest}
 */
proto.tdex_daemon.v1.GetMarketAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.Market;
      reader.readMessage(value,tdex_v1_types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumOfAddresses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetMarketAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetMarketAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetMarketAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex_v1_types_pb.Market.serializeBinaryToWriter
    );
  }
  f = message.getNumOfAddresses();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional tdex.v1.Market market = 1;
 * @return {?proto.tdex.v1.Market}
 */
proto.tdex_daemon.v1.GetMarketAddressRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex_daemon.v1.GetMarketAddressRequest} returns this
*/
proto.tdex_daemon.v1.GetMarketAddressRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.GetMarketAddressRequest} returns this
 */
proto.tdex_daemon.v1.GetMarketAddressRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.GetMarketAddressRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 num_of_addresses = 2;
 * @return {number}
 */
proto.tdex_daemon.v1.GetMarketAddressRequest.prototype.getNumOfAddresses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex_daemon.v1.GetMarketAddressRequest} returns this
 */
proto.tdex_daemon.v1.GetMarketAddressRequest.prototype.setNumOfAddresses = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex_daemon.v1.GetMarketAddressResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetMarketAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetMarketAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetMarketAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    tdex$daemon_v1_types_pb.AddressWithBlindingKey.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetMarketAddressResponse}
 */
proto.tdex_daemon.v1.GetMarketAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetMarketAddressResponse;
  return proto.tdex_daemon.v1.GetMarketAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetMarketAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetMarketAddressResponse}
 */
proto.tdex_daemon.v1.GetMarketAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex$daemon_v1_types_pb.AddressWithBlindingKey;
      reader.readMessage(value,tdex$daemon_v1_types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
      msg.addAddressWithBlindingKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetMarketAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetMarketAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetMarketAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tdex$daemon_v1_types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>}
 */
proto.tdex_daemon.v1.GetMarketAddressResponse.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex$daemon_v1_types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>} value
 * @return {!proto.tdex_daemon.v1.GetMarketAddressResponse} returns this
*/
proto.tdex_daemon.v1.GetMarketAddressResponse.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex_daemon.v1.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex_daemon.v1.AddressWithBlindingKey}
 */
proto.tdex_daemon.v1.GetMarketAddressResponse.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex_daemon.v1.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex_daemon.v1.GetMarketAddressResponse} returns this
 */
proto.tdex_daemon.v1.GetMarketAddressResponse.prototype.clearAddressWithBlindingKeyList = function() {
  return this.setAddressWithBlindingKeyList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ListMarketAddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ListMarketAddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ListMarketAddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListMarketAddressesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && tdex_v1_types_pb.Market.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ListMarketAddressesRequest}
 */
proto.tdex_daemon.v1.ListMarketAddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ListMarketAddressesRequest;
  return proto.tdex_daemon.v1.ListMarketAddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ListMarketAddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ListMarketAddressesRequest}
 */
proto.tdex_daemon.v1.ListMarketAddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.Market;
      reader.readMessage(value,tdex_v1_types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ListMarketAddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ListMarketAddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ListMarketAddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListMarketAddressesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex_v1_types_pb.Market.serializeBinaryToWriter
    );
  }
};


/**
 * optional tdex.v1.Market market = 1;
 * @return {?proto.tdex.v1.Market}
 */
proto.tdex_daemon.v1.ListMarketAddressesRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex_daemon.v1.ListMarketAddressesRequest} returns this
*/
proto.tdex_daemon.v1.ListMarketAddressesRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.ListMarketAddressesRequest} returns this
 */
proto.tdex_daemon.v1.ListMarketAddressesRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.ListMarketAddressesRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex_daemon.v1.ListMarketAddressesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ListMarketAddressesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ListMarketAddressesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ListMarketAddressesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListMarketAddressesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    tdex$daemon_v1_types_pb.AddressWithBlindingKey.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ListMarketAddressesResponse}
 */
proto.tdex_daemon.v1.ListMarketAddressesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ListMarketAddressesResponse;
  return proto.tdex_daemon.v1.ListMarketAddressesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ListMarketAddressesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ListMarketAddressesResponse}
 */
proto.tdex_daemon.v1.ListMarketAddressesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex$daemon_v1_types_pb.AddressWithBlindingKey;
      reader.readMessage(value,tdex$daemon_v1_types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
      msg.addAddressWithBlindingKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ListMarketAddressesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ListMarketAddressesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ListMarketAddressesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListMarketAddressesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tdex$daemon_v1_types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>}
 */
proto.tdex_daemon.v1.ListMarketAddressesResponse.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex$daemon_v1_types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>} value
 * @return {!proto.tdex_daemon.v1.ListMarketAddressesResponse} returns this
*/
proto.tdex_daemon.v1.ListMarketAddressesResponse.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex_daemon.v1.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex_daemon.v1.AddressWithBlindingKey}
 */
proto.tdex_daemon.v1.ListMarketAddressesResponse.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex_daemon.v1.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex_daemon.v1.ListMarketAddressesResponse} returns this
 */
proto.tdex_daemon.v1.ListMarketAddressesResponse.prototype.clearAddressWithBlindingKeyList = function() {
  return this.setAddressWithBlindingKeyList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetMarketBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetMarketBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetMarketBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && tdex_v1_types_pb.Market.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetMarketBalanceRequest}
 */
proto.tdex_daemon.v1.GetMarketBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetMarketBalanceRequest;
  return proto.tdex_daemon.v1.GetMarketBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetMarketBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetMarketBalanceRequest}
 */
proto.tdex_daemon.v1.GetMarketBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.Market;
      reader.readMessage(value,tdex_v1_types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetMarketBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetMarketBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetMarketBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex_v1_types_pb.Market.serializeBinaryToWriter
    );
  }
};


/**
 * optional tdex.v1.Market market = 1;
 * @return {?proto.tdex.v1.Market}
 */
proto.tdex_daemon.v1.GetMarketBalanceRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex_daemon.v1.GetMarketBalanceRequest} returns this
*/
proto.tdex_daemon.v1.GetMarketBalanceRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.GetMarketBalanceRequest} returns this
 */
proto.tdex_daemon.v1.GetMarketBalanceRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.GetMarketBalanceRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetMarketBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetMarketBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetMarketBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    availableBalance: (f = msg.getAvailableBalance()) && tdex_v1_types_pb.Balance.toObject(includeInstance, f),
    totalBalance: (f = msg.getTotalBalance()) && tdex_v1_types_pb.Balance.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetMarketBalanceResponse}
 */
proto.tdex_daemon.v1.GetMarketBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetMarketBalanceResponse;
  return proto.tdex_daemon.v1.GetMarketBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetMarketBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetMarketBalanceResponse}
 */
proto.tdex_daemon.v1.GetMarketBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.Balance;
      reader.readMessage(value,tdex_v1_types_pb.Balance.deserializeBinaryFromReader);
      msg.setAvailableBalance(value);
      break;
    case 2:
      var value = new tdex_v1_types_pb.Balance;
      reader.readMessage(value,tdex_v1_types_pb.Balance.deserializeBinaryFromReader);
      msg.setTotalBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetMarketBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetMarketBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetMarketBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailableBalance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex_v1_types_pb.Balance.serializeBinaryToWriter
    );
  }
  f = message.getTotalBalance();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tdex_v1_types_pb.Balance.serializeBinaryToWriter
    );
  }
};


/**
 * optional tdex.v1.Balance available_balance = 1;
 * @return {?proto.tdex.v1.Balance}
 */
proto.tdex_daemon.v1.GetMarketBalanceResponse.prototype.getAvailableBalance = function() {
  return /** @type{?proto.tdex.v1.Balance} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Balance, 1));
};


/**
 * @param {?proto.tdex.v1.Balance|undefined} value
 * @return {!proto.tdex_daemon.v1.GetMarketBalanceResponse} returns this
*/
proto.tdex_daemon.v1.GetMarketBalanceResponse.prototype.setAvailableBalance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.GetMarketBalanceResponse} returns this
 */
proto.tdex_daemon.v1.GetMarketBalanceResponse.prototype.clearAvailableBalance = function() {
  return this.setAvailableBalance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.GetMarketBalanceResponse.prototype.hasAvailableBalance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional tdex.v1.Balance total_balance = 2;
 * @return {?proto.tdex.v1.Balance}
 */
proto.tdex_daemon.v1.GetMarketBalanceResponse.prototype.getTotalBalance = function() {
  return /** @type{?proto.tdex.v1.Balance} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Balance, 2));
};


/**
 * @param {?proto.tdex.v1.Balance|undefined} value
 * @return {!proto.tdex_daemon.v1.GetMarketBalanceResponse} returns this
*/
proto.tdex_daemon.v1.GetMarketBalanceResponse.prototype.setTotalBalance = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.GetMarketBalanceResponse} returns this
 */
proto.tdex_daemon.v1.GetMarketBalanceResponse.prototype.clearTotalBalance = function() {
  return this.setTotalBalance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.GetMarketBalanceResponse.prototype.hasTotalBalance = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex_daemon.v1.ClaimMarketDepositsRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ClaimMarketDepositsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ClaimMarketDepositsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ClaimMarketDepositsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ClaimMarketDepositsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && tdex_v1_types_pb.Market.toObject(includeInstance, f),
    outpointsList: jspb.Message.toObjectList(msg.getOutpointsList(),
    tdex$daemon_v1_types_pb.Outpoint.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ClaimMarketDepositsRequest}
 */
proto.tdex_daemon.v1.ClaimMarketDepositsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ClaimMarketDepositsRequest;
  return proto.tdex_daemon.v1.ClaimMarketDepositsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ClaimMarketDepositsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ClaimMarketDepositsRequest}
 */
proto.tdex_daemon.v1.ClaimMarketDepositsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.Market;
      reader.readMessage(value,tdex_v1_types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 2:
      var value = new tdex$daemon_v1_types_pb.Outpoint;
      reader.readMessage(value,tdex$daemon_v1_types_pb.Outpoint.deserializeBinaryFromReader);
      msg.addOutpoints(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ClaimMarketDepositsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ClaimMarketDepositsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ClaimMarketDepositsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ClaimMarketDepositsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex_v1_types_pb.Market.serializeBinaryToWriter
    );
  }
  f = message.getOutpointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      tdex$daemon_v1_types_pb.Outpoint.serializeBinaryToWriter
    );
  }
};


/**
 * optional tdex.v1.Market market = 1;
 * @return {?proto.tdex.v1.Market}
 */
proto.tdex_daemon.v1.ClaimMarketDepositsRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex_daemon.v1.ClaimMarketDepositsRequest} returns this
*/
proto.tdex_daemon.v1.ClaimMarketDepositsRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.ClaimMarketDepositsRequest} returns this
 */
proto.tdex_daemon.v1.ClaimMarketDepositsRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.ClaimMarketDepositsRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Outpoint outpoints = 2;
 * @return {!Array<!proto.tdex_daemon.v1.Outpoint>}
 */
proto.tdex_daemon.v1.ClaimMarketDepositsRequest.prototype.getOutpointsList = function() {
  return /** @type{!Array<!proto.tdex_daemon.v1.Outpoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex$daemon_v1_types_pb.Outpoint, 2));
};


/**
 * @param {!Array<!proto.tdex_daemon.v1.Outpoint>} value
 * @return {!proto.tdex_daemon.v1.ClaimMarketDepositsRequest} returns this
*/
proto.tdex_daemon.v1.ClaimMarketDepositsRequest.prototype.setOutpointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tdex_daemon.v1.Outpoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex_daemon.v1.Outpoint}
 */
proto.tdex_daemon.v1.ClaimMarketDepositsRequest.prototype.addOutpoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tdex_daemon.v1.Outpoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex_daemon.v1.ClaimMarketDepositsRequest} returns this
 */
proto.tdex_daemon.v1.ClaimMarketDepositsRequest.prototype.clearOutpointsList = function() {
  return this.setOutpointsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ClaimMarketDepositsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ClaimMarketDepositsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ClaimMarketDepositsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ClaimMarketDepositsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ClaimMarketDepositsResponse}
 */
proto.tdex_daemon.v1.ClaimMarketDepositsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ClaimMarketDepositsResponse;
  return proto.tdex_daemon.v1.ClaimMarketDepositsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ClaimMarketDepositsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ClaimMarketDepositsResponse}
 */
proto.tdex_daemon.v1.ClaimMarketDepositsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ClaimMarketDepositsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ClaimMarketDepositsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ClaimMarketDepositsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ClaimMarketDepositsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.OpenMarketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.OpenMarketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.OpenMarketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.OpenMarketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && tdex_v1_types_pb.Market.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.OpenMarketRequest}
 */
proto.tdex_daemon.v1.OpenMarketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.OpenMarketRequest;
  return proto.tdex_daemon.v1.OpenMarketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.OpenMarketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.OpenMarketRequest}
 */
proto.tdex_daemon.v1.OpenMarketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.Market;
      reader.readMessage(value,tdex_v1_types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.OpenMarketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.OpenMarketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.OpenMarketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.OpenMarketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex_v1_types_pb.Market.serializeBinaryToWriter
    );
  }
};


/**
 * optional tdex.v1.Market market = 1;
 * @return {?proto.tdex.v1.Market}
 */
proto.tdex_daemon.v1.OpenMarketRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex_daemon.v1.OpenMarketRequest} returns this
*/
proto.tdex_daemon.v1.OpenMarketRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.OpenMarketRequest} returns this
 */
proto.tdex_daemon.v1.OpenMarketRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.OpenMarketRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.OpenMarketResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.OpenMarketResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.OpenMarketResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.OpenMarketResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.OpenMarketResponse}
 */
proto.tdex_daemon.v1.OpenMarketResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.OpenMarketResponse;
  return proto.tdex_daemon.v1.OpenMarketResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.OpenMarketResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.OpenMarketResponse}
 */
proto.tdex_daemon.v1.OpenMarketResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.OpenMarketResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.OpenMarketResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.OpenMarketResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.OpenMarketResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.CloseMarketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.CloseMarketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.CloseMarketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.CloseMarketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && tdex_v1_types_pb.Market.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.CloseMarketRequest}
 */
proto.tdex_daemon.v1.CloseMarketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.CloseMarketRequest;
  return proto.tdex_daemon.v1.CloseMarketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.CloseMarketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.CloseMarketRequest}
 */
proto.tdex_daemon.v1.CloseMarketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.Market;
      reader.readMessage(value,tdex_v1_types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.CloseMarketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.CloseMarketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.CloseMarketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.CloseMarketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex_v1_types_pb.Market.serializeBinaryToWriter
    );
  }
};


/**
 * optional tdex.v1.Market market = 1;
 * @return {?proto.tdex.v1.Market}
 */
proto.tdex_daemon.v1.CloseMarketRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex_daemon.v1.CloseMarketRequest} returns this
*/
proto.tdex_daemon.v1.CloseMarketRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.CloseMarketRequest} returns this
 */
proto.tdex_daemon.v1.CloseMarketRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.CloseMarketRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.CloseMarketResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.CloseMarketResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.CloseMarketResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.CloseMarketResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.CloseMarketResponse}
 */
proto.tdex_daemon.v1.CloseMarketResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.CloseMarketResponse;
  return proto.tdex_daemon.v1.CloseMarketResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.CloseMarketResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.CloseMarketResponse}
 */
proto.tdex_daemon.v1.CloseMarketResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.CloseMarketResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.CloseMarketResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.CloseMarketResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.CloseMarketResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ListMarketsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ListMarketsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ListMarketsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListMarketsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ListMarketsRequest}
 */
proto.tdex_daemon.v1.ListMarketsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ListMarketsRequest;
  return proto.tdex_daemon.v1.ListMarketsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ListMarketsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ListMarketsRequest}
 */
proto.tdex_daemon.v1.ListMarketsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ListMarketsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ListMarketsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ListMarketsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListMarketsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex_daemon.v1.ListMarketsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ListMarketsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ListMarketsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ListMarketsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListMarketsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketsList: jspb.Message.toObjectList(msg.getMarketsList(),
    tdex$daemon_v1_types_pb.MarketInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ListMarketsResponse}
 */
proto.tdex_daemon.v1.ListMarketsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ListMarketsResponse;
  return proto.tdex_daemon.v1.ListMarketsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ListMarketsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ListMarketsResponse}
 */
proto.tdex_daemon.v1.ListMarketsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex$daemon_v1_types_pb.MarketInfo;
      reader.readMessage(value,tdex$daemon_v1_types_pb.MarketInfo.deserializeBinaryFromReader);
      msg.addMarkets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ListMarketsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ListMarketsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ListMarketsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListMarketsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tdex$daemon_v1_types_pb.MarketInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MarketInfo markets = 1;
 * @return {!Array<!proto.tdex_daemon.v1.MarketInfo>}
 */
proto.tdex_daemon.v1.ListMarketsResponse.prototype.getMarketsList = function() {
  return /** @type{!Array<!proto.tdex_daemon.v1.MarketInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex$daemon_v1_types_pb.MarketInfo, 1));
};


/**
 * @param {!Array<!proto.tdex_daemon.v1.MarketInfo>} value
 * @return {!proto.tdex_daemon.v1.ListMarketsResponse} returns this
*/
proto.tdex_daemon.v1.ListMarketsResponse.prototype.setMarketsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex_daemon.v1.MarketInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex_daemon.v1.MarketInfo}
 */
proto.tdex_daemon.v1.ListMarketsResponse.prototype.addMarkets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex_daemon.v1.MarketInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex_daemon.v1.ListMarketsResponse} returns this
 */
proto.tdex_daemon.v1.ListMarketsResponse.prototype.clearMarketsList = function() {
  return this.setMarketsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.DropMarketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.DropMarketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.DropMarketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.DropMarketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && tdex_v1_types_pb.Market.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.DropMarketRequest}
 */
proto.tdex_daemon.v1.DropMarketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.DropMarketRequest;
  return proto.tdex_daemon.v1.DropMarketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.DropMarketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.DropMarketRequest}
 */
proto.tdex_daemon.v1.DropMarketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.Market;
      reader.readMessage(value,tdex_v1_types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.DropMarketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.DropMarketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.DropMarketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.DropMarketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex_v1_types_pb.Market.serializeBinaryToWriter
    );
  }
};


/**
 * optional tdex.v1.Market market = 1;
 * @return {?proto.tdex.v1.Market}
 */
proto.tdex_daemon.v1.DropMarketRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex_daemon.v1.DropMarketRequest} returns this
*/
proto.tdex_daemon.v1.DropMarketRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.DropMarketRequest} returns this
 */
proto.tdex_daemon.v1.DropMarketRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.DropMarketRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.DropMarketResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.DropMarketResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.DropMarketResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.DropMarketResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.DropMarketResponse}
 */
proto.tdex_daemon.v1.DropMarketResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.DropMarketResponse;
  return proto.tdex_daemon.v1.DropMarketResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.DropMarketResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.DropMarketResponse}
 */
proto.tdex_daemon.v1.DropMarketResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.DropMarketResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.DropMarketResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.DropMarketResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.DropMarketResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && tdex_v1_types_pb.Market.toObject(includeInstance, f),
    page: (f = msg.getPage()) && tdex$daemon_v1_types_pb.Page.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest}
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest;
  return proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest}
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.Market;
      reader.readMessage(value,tdex_v1_types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 2:
      var value = new tdex$daemon_v1_types_pb.Page;
      reader.readMessage(value,tdex$daemon_v1_types_pb.Page.deserializeBinaryFromReader);
      msg.setPage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex_v1_types_pb.Market.serializeBinaryToWriter
    );
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tdex$daemon_v1_types_pb.Page.serializeBinaryToWriter
    );
  }
};


/**
 * optional tdex.v1.Market market = 1;
 * @return {?proto.tdex.v1.Market}
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest} returns this
*/
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest} returns this
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Page page = 2;
 * @return {?proto.tdex_daemon.v1.Page}
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest.prototype.getPage = function() {
  return /** @type{?proto.tdex_daemon.v1.Page} */ (
    jspb.Message.getWrapperField(this, tdex$daemon_v1_types_pb.Page, 2));
};


/**
 * @param {?proto.tdex_daemon.v1.Page|undefined} value
 * @return {!proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest} returns this
*/
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest} returns this
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    collectedFeesList: jspb.Message.toObjectList(msg.getCollectedFeesList(),
    tdex$daemon_v1_types_pb.FeeInfo.toObject, includeInstance),
    totalCollectedFeesPerAssetMap: (f = msg.getTotalCollectedFeesPerAssetMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse}
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse;
  return proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse}
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex$daemon_v1_types_pb.FeeInfo;
      reader.readMessage(value,tdex$daemon_v1_types_pb.FeeInfo.deserializeBinaryFromReader);
      msg.addCollectedFees(value);
      break;
    case 2:
      var value = msg.getTotalCollectedFeesPerAssetMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt64, null, "", 0);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCollectedFeesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tdex$daemon_v1_types_pb.FeeInfo.serializeBinaryToWriter
    );
  }
  f = message.getTotalCollectedFeesPerAssetMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt64);
  }
};


/**
 * repeated FeeInfo collected_fees = 1;
 * @return {!Array<!proto.tdex_daemon.v1.FeeInfo>}
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse.prototype.getCollectedFeesList = function() {
  return /** @type{!Array<!proto.tdex_daemon.v1.FeeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex$daemon_v1_types_pb.FeeInfo, 1));
};


/**
 * @param {!Array<!proto.tdex_daemon.v1.FeeInfo>} value
 * @return {!proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse} returns this
*/
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse.prototype.setCollectedFeesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex_daemon.v1.FeeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex_daemon.v1.FeeInfo}
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse.prototype.addCollectedFees = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex_daemon.v1.FeeInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse} returns this
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse.prototype.clearCollectedFeesList = function() {
  return this.setCollectedFeesList([]);
};


/**
 * map<string, int64> total_collected_fees_per_asset = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse.prototype.getTotalCollectedFeesPerAssetMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse} returns this
 */
proto.tdex_daemon.v1.GetMarketCollectedSwapFeesResponse.prototype.clearTotalCollectedFeesPerAssetMap = function() {
  this.getTotalCollectedFeesPerAssetMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.WithdrawMarketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.WithdrawMarketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.WithdrawMarketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.WithdrawMarketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && tdex_v1_types_pb.Market.toObject(includeInstance, f),
    balanceToWithdraw: (f = msg.getBalanceToWithdraw()) && tdex_v1_types_pb.Balance.toObject(includeInstance, f),
    millisatsPerByte: jspb.Message.getFieldWithDefault(msg, 3, 0),
    address: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.WithdrawMarketRequest}
 */
proto.tdex_daemon.v1.WithdrawMarketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.WithdrawMarketRequest;
  return proto.tdex_daemon.v1.WithdrawMarketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.WithdrawMarketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.WithdrawMarketRequest}
 */
proto.tdex_daemon.v1.WithdrawMarketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.Market;
      reader.readMessage(value,tdex_v1_types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 2:
      var value = new tdex_v1_types_pb.Balance;
      reader.readMessage(value,tdex_v1_types_pb.Balance.deserializeBinaryFromReader);
      msg.setBalanceToWithdraw(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMillisatsPerByte(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.WithdrawMarketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.WithdrawMarketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.WithdrawMarketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.WithdrawMarketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex_v1_types_pb.Market.serializeBinaryToWriter
    );
  }
  f = message.getBalanceToWithdraw();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tdex_v1_types_pb.Balance.serializeBinaryToWriter
    );
  }
  f = message.getMillisatsPerByte();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional tdex.v1.Market market = 1;
 * @return {?proto.tdex.v1.Market}
 */
proto.tdex_daemon.v1.WithdrawMarketRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex_daemon.v1.WithdrawMarketRequest} returns this
*/
proto.tdex_daemon.v1.WithdrawMarketRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.WithdrawMarketRequest} returns this
 */
proto.tdex_daemon.v1.WithdrawMarketRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.WithdrawMarketRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional tdex.v1.Balance balance_to_withdraw = 2;
 * @return {?proto.tdex.v1.Balance}
 */
proto.tdex_daemon.v1.WithdrawMarketRequest.prototype.getBalanceToWithdraw = function() {
  return /** @type{?proto.tdex.v1.Balance} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Balance, 2));
};


/**
 * @param {?proto.tdex.v1.Balance|undefined} value
 * @return {!proto.tdex_daemon.v1.WithdrawMarketRequest} returns this
*/
proto.tdex_daemon.v1.WithdrawMarketRequest.prototype.setBalanceToWithdraw = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.WithdrawMarketRequest} returns this
 */
proto.tdex_daemon.v1.WithdrawMarketRequest.prototype.clearBalanceToWithdraw = function() {
  return this.setBalanceToWithdraw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.WithdrawMarketRequest.prototype.hasBalanceToWithdraw = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 millisats_per_byte = 3;
 * @return {number}
 */
proto.tdex_daemon.v1.WithdrawMarketRequest.prototype.getMillisatsPerByte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex_daemon.v1.WithdrawMarketRequest} returns this
 */
proto.tdex_daemon.v1.WithdrawMarketRequest.prototype.setMillisatsPerByte = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string address = 4;
 * @return {string}
 */
proto.tdex_daemon.v1.WithdrawMarketRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.WithdrawMarketRequest} returns this
 */
proto.tdex_daemon.v1.WithdrawMarketRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.WithdrawMarketResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.WithdrawMarketResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.WithdrawMarketResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.WithdrawMarketResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    txid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.WithdrawMarketResponse}
 */
proto.tdex_daemon.v1.WithdrawMarketResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.WithdrawMarketResponse;
  return proto.tdex_daemon.v1.WithdrawMarketResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.WithdrawMarketResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.WithdrawMarketResponse}
 */
proto.tdex_daemon.v1.WithdrawMarketResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.WithdrawMarketResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.WithdrawMarketResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.WithdrawMarketResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.WithdrawMarketResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string txid = 1;
 * @return {string}
 */
proto.tdex_daemon.v1.WithdrawMarketResponse.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.WithdrawMarketResponse} returns this
 */
proto.tdex_daemon.v1.WithdrawMarketResponse.prototype.setTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && tdex_v1_types_pb.Market.toObject(includeInstance, f),
    basisPoint: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest}
 */
proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest;
  return proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest}
 */
proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.Market;
      reader.readMessage(value,tdex_v1_types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBasisPoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex_v1_types_pb.Market.serializeBinaryToWriter
    );
  }
  f = message.getBasisPoint();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional tdex.v1.Market market = 1;
 * @return {?proto.tdex.v1.Market}
 */
proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest} returns this
*/
proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest} returns this
 */
proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 basis_point = 2;
 * @return {number}
 */
proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest.prototype.getBasisPoint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest} returns this
 */
proto.tdex_daemon.v1.UpdateMarketPercentageFeeRequest.prototype.setBasisPoint = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketWithFee: (f = msg.getMarketWithFee()) && tdex_v1_types_pb.MarketWithFee.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse}
 */
proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse;
  return proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse}
 */
proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.MarketWithFee;
      reader.readMessage(value,tdex_v1_types_pb.MarketWithFee.deserializeBinaryFromReader);
      msg.setMarketWithFee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketWithFee();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex_v1_types_pb.MarketWithFee.serializeBinaryToWriter
    );
  }
};


/**
 * optional tdex.v1.MarketWithFee market_with_fee = 1;
 * @return {?proto.tdex.v1.MarketWithFee}
 */
proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse.prototype.getMarketWithFee = function() {
  return /** @type{?proto.tdex.v1.MarketWithFee} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.MarketWithFee, 1));
};


/**
 * @param {?proto.tdex.v1.MarketWithFee|undefined} value
 * @return {!proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse} returns this
*/
proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse.prototype.setMarketWithFee = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse} returns this
 */
proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse.prototype.clearMarketWithFee = function() {
  return this.setMarketWithFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.UpdateMarketPercentageFeeResponse.prototype.hasMarketWithFee = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && tdex_v1_types_pb.Market.toObject(includeInstance, f),
    fixed: (f = msg.getFixed()) && tdex_v1_types_pb.Fixed.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest}
 */
proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest;
  return proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest}
 */
proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.Market;
      reader.readMessage(value,tdex_v1_types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 2:
      var value = new tdex_v1_types_pb.Fixed;
      reader.readMessage(value,tdex_v1_types_pb.Fixed.deserializeBinaryFromReader);
      msg.setFixed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex_v1_types_pb.Market.serializeBinaryToWriter
    );
  }
  f = message.getFixed();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tdex_v1_types_pb.Fixed.serializeBinaryToWriter
    );
  }
};


/**
 * optional tdex.v1.Market market = 1;
 * @return {?proto.tdex.v1.Market}
 */
proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest} returns this
*/
proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest} returns this
 */
proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional tdex.v1.Fixed fixed = 2;
 * @return {?proto.tdex.v1.Fixed}
 */
proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest.prototype.getFixed = function() {
  return /** @type{?proto.tdex.v1.Fixed} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Fixed, 2));
};


/**
 * @param {?proto.tdex.v1.Fixed|undefined} value
 * @return {!proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest} returns this
*/
proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest.prototype.setFixed = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest} returns this
 */
proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest.prototype.clearFixed = function() {
  return this.setFixed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.UpdateMarketFixedFeeRequest.prototype.hasFixed = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketWithFee: (f = msg.getMarketWithFee()) && tdex_v1_types_pb.MarketWithFee.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse}
 */
proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse;
  return proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse}
 */
proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.MarketWithFee;
      reader.readMessage(value,tdex_v1_types_pb.MarketWithFee.deserializeBinaryFromReader);
      msg.setMarketWithFee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketWithFee();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex_v1_types_pb.MarketWithFee.serializeBinaryToWriter
    );
  }
};


/**
 * optional tdex.v1.MarketWithFee market_with_fee = 1;
 * @return {?proto.tdex.v1.MarketWithFee}
 */
proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse.prototype.getMarketWithFee = function() {
  return /** @type{?proto.tdex.v1.MarketWithFee} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.MarketWithFee, 1));
};


/**
 * @param {?proto.tdex.v1.MarketWithFee|undefined} value
 * @return {!proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse} returns this
*/
proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse.prototype.setMarketWithFee = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse} returns this
 */
proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse.prototype.clearMarketWithFee = function() {
  return this.setMarketWithFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.UpdateMarketFixedFeeResponse.prototype.hasMarketWithFee = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.UpdateMarketPriceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.UpdateMarketPriceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.UpdateMarketPriceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.UpdateMarketPriceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && tdex_v1_types_pb.Market.toObject(includeInstance, f),
    price: (f = msg.getPrice()) && tdex_v1_types_pb.Price.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.UpdateMarketPriceRequest}
 */
proto.tdex_daemon.v1.UpdateMarketPriceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.UpdateMarketPriceRequest;
  return proto.tdex_daemon.v1.UpdateMarketPriceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.UpdateMarketPriceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.UpdateMarketPriceRequest}
 */
proto.tdex_daemon.v1.UpdateMarketPriceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.Market;
      reader.readMessage(value,tdex_v1_types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 2:
      var value = new tdex_v1_types_pb.Price;
      reader.readMessage(value,tdex_v1_types_pb.Price.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.UpdateMarketPriceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.UpdateMarketPriceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.UpdateMarketPriceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.UpdateMarketPriceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex_v1_types_pb.Market.serializeBinaryToWriter
    );
  }
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tdex_v1_types_pb.Price.serializeBinaryToWriter
    );
  }
};


/**
 * optional tdex.v1.Market market = 1;
 * @return {?proto.tdex.v1.Market}
 */
proto.tdex_daemon.v1.UpdateMarketPriceRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex_daemon.v1.UpdateMarketPriceRequest} returns this
*/
proto.tdex_daemon.v1.UpdateMarketPriceRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.UpdateMarketPriceRequest} returns this
 */
proto.tdex_daemon.v1.UpdateMarketPriceRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.UpdateMarketPriceRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional tdex.v1.Price price = 2;
 * @return {?proto.tdex.v1.Price}
 */
proto.tdex_daemon.v1.UpdateMarketPriceRequest.prototype.getPrice = function() {
  return /** @type{?proto.tdex.v1.Price} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Price, 2));
};


/**
 * @param {?proto.tdex.v1.Price|undefined} value
 * @return {!proto.tdex_daemon.v1.UpdateMarketPriceRequest} returns this
*/
proto.tdex_daemon.v1.UpdateMarketPriceRequest.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.UpdateMarketPriceRequest} returns this
 */
proto.tdex_daemon.v1.UpdateMarketPriceRequest.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.UpdateMarketPriceRequest.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.UpdateMarketPriceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.UpdateMarketPriceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.UpdateMarketPriceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.UpdateMarketPriceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.UpdateMarketPriceResponse}
 */
proto.tdex_daemon.v1.UpdateMarketPriceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.UpdateMarketPriceResponse;
  return proto.tdex_daemon.v1.UpdateMarketPriceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.UpdateMarketPriceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.UpdateMarketPriceResponse}
 */
proto.tdex_daemon.v1.UpdateMarketPriceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.UpdateMarketPriceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.UpdateMarketPriceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.UpdateMarketPriceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.UpdateMarketPriceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.UpdateMarketStrategyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.UpdateMarketStrategyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.UpdateMarketStrategyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.UpdateMarketStrategyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && tdex_v1_types_pb.Market.toObject(includeInstance, f),
    strategyType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    metadata: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.UpdateMarketStrategyRequest}
 */
proto.tdex_daemon.v1.UpdateMarketStrategyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.UpdateMarketStrategyRequest;
  return proto.tdex_daemon.v1.UpdateMarketStrategyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.UpdateMarketStrategyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.UpdateMarketStrategyRequest}
 */
proto.tdex_daemon.v1.UpdateMarketStrategyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.Market;
      reader.readMessage(value,tdex_v1_types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {!proto.tdex_daemon.v1.StrategyType} */ (reader.readEnum());
      msg.setStrategyType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.UpdateMarketStrategyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.UpdateMarketStrategyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.UpdateMarketStrategyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.UpdateMarketStrategyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex_v1_types_pb.Market.serializeBinaryToWriter
    );
  }
  f = message.getStrategyType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMetadata();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional tdex.v1.Market market = 1;
 * @return {?proto.tdex.v1.Market}
 */
proto.tdex_daemon.v1.UpdateMarketStrategyRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex_daemon.v1.UpdateMarketStrategyRequest} returns this
*/
proto.tdex_daemon.v1.UpdateMarketStrategyRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.UpdateMarketStrategyRequest} returns this
 */
proto.tdex_daemon.v1.UpdateMarketStrategyRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.UpdateMarketStrategyRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional StrategyType strategy_type = 2;
 * @return {!proto.tdex_daemon.v1.StrategyType}
 */
proto.tdex_daemon.v1.UpdateMarketStrategyRequest.prototype.getStrategyType = function() {
  return /** @type {!proto.tdex_daemon.v1.StrategyType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.tdex_daemon.v1.StrategyType} value
 * @return {!proto.tdex_daemon.v1.UpdateMarketStrategyRequest} returns this
 */
proto.tdex_daemon.v1.UpdateMarketStrategyRequest.prototype.setStrategyType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string metadata = 3;
 * @return {string}
 */
proto.tdex_daemon.v1.UpdateMarketStrategyRequest.prototype.getMetadata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.UpdateMarketStrategyRequest} returns this
 */
proto.tdex_daemon.v1.UpdateMarketStrategyRequest.prototype.setMetadata = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.UpdateMarketStrategyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.UpdateMarketStrategyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.UpdateMarketStrategyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.UpdateMarketStrategyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.UpdateMarketStrategyResponse}
 */
proto.tdex_daemon.v1.UpdateMarketStrategyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.UpdateMarketStrategyResponse;
  return proto.tdex_daemon.v1.UpdateMarketStrategyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.UpdateMarketStrategyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.UpdateMarketStrategyResponse}
 */
proto.tdex_daemon.v1.UpdateMarketStrategyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.UpdateMarketStrategyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.UpdateMarketStrategyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.UpdateMarketStrategyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.UpdateMarketStrategyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetFeeFragmenterAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetFeeFragmenterAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetFeeFragmenterAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetFeeFragmenterAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    numOfAddresses: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetFeeFragmenterAddressRequest}
 */
proto.tdex_daemon.v1.GetFeeFragmenterAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetFeeFragmenterAddressRequest;
  return proto.tdex_daemon.v1.GetFeeFragmenterAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetFeeFragmenterAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetFeeFragmenterAddressRequest}
 */
proto.tdex_daemon.v1.GetFeeFragmenterAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumOfAddresses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetFeeFragmenterAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetFeeFragmenterAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetFeeFragmenterAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetFeeFragmenterAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumOfAddresses();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 num_of_addresses = 1;
 * @return {number}
 */
proto.tdex_daemon.v1.GetFeeFragmenterAddressRequest.prototype.getNumOfAddresses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex_daemon.v1.GetFeeFragmenterAddressRequest} returns this
 */
proto.tdex_daemon.v1.GetFeeFragmenterAddressRequest.prototype.setNumOfAddresses = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    tdex$daemon_v1_types_pb.AddressWithBlindingKey.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse}
 */
proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse;
  return proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse}
 */
proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex$daemon_v1_types_pb.AddressWithBlindingKey;
      reader.readMessage(value,tdex$daemon_v1_types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
      msg.addAddressWithBlindingKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tdex$daemon_v1_types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>}
 */
proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex$daemon_v1_types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>} value
 * @return {!proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse} returns this
*/
proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex_daemon.v1.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex_daemon.v1.AddressWithBlindingKey}
 */
proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex_daemon.v1.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse} returns this
 */
proto.tdex_daemon.v1.GetFeeFragmenterAddressResponse.prototype.clearAddressWithBlindingKeyList = function() {
  return this.setAddressWithBlindingKeyList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ListFeeFragmenterAddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ListFeeFragmenterAddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ListFeeFragmenterAddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListFeeFragmenterAddressesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ListFeeFragmenterAddressesRequest}
 */
proto.tdex_daemon.v1.ListFeeFragmenterAddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ListFeeFragmenterAddressesRequest;
  return proto.tdex_daemon.v1.ListFeeFragmenterAddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ListFeeFragmenterAddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ListFeeFragmenterAddressesRequest}
 */
proto.tdex_daemon.v1.ListFeeFragmenterAddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ListFeeFragmenterAddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ListFeeFragmenterAddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ListFeeFragmenterAddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListFeeFragmenterAddressesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    tdex$daemon_v1_types_pb.AddressWithBlindingKey.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse}
 */
proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse;
  return proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse}
 */
proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex$daemon_v1_types_pb.AddressWithBlindingKey;
      reader.readMessage(value,tdex$daemon_v1_types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
      msg.addAddressWithBlindingKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tdex$daemon_v1_types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>}
 */
proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex$daemon_v1_types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>} value
 * @return {!proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse} returns this
*/
proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex_daemon.v1.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex_daemon.v1.AddressWithBlindingKey}
 */
proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex_daemon.v1.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse} returns this
 */
proto.tdex_daemon.v1.ListFeeFragmenterAddressesResponse.prototype.clearAddressWithBlindingKeyList = function() {
  return this.setAddressWithBlindingKeyList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetFeeFragmenterBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetFeeFragmenterBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetFeeFragmenterBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetFeeFragmenterBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetFeeFragmenterBalanceRequest}
 */
proto.tdex_daemon.v1.GetFeeFragmenterBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetFeeFragmenterBalanceRequest;
  return proto.tdex_daemon.v1.GetFeeFragmenterBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetFeeFragmenterBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetFeeFragmenterBalanceRequest}
 */
proto.tdex_daemon.v1.GetFeeFragmenterBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetFeeFragmenterBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetFeeFragmenterBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetFeeFragmenterBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetFeeFragmenterBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetFeeFragmenterBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetFeeFragmenterBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetFeeFragmenterBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetFeeFragmenterBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    balanceMap: (f = msg.getBalanceMap()) ? f.toObject(includeInstance, proto.tdex_daemon.v1.BalanceInfo.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetFeeFragmenterBalanceResponse}
 */
proto.tdex_daemon.v1.GetFeeFragmenterBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetFeeFragmenterBalanceResponse;
  return proto.tdex_daemon.v1.GetFeeFragmenterBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetFeeFragmenterBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetFeeFragmenterBalanceResponse}
 */
proto.tdex_daemon.v1.GetFeeFragmenterBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getBalanceMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.tdex_daemon.v1.BalanceInfo.deserializeBinaryFromReader, "", new proto.tdex_daemon.v1.BalanceInfo());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetFeeFragmenterBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetFeeFragmenterBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetFeeFragmenterBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetFeeFragmenterBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalanceMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.tdex_daemon.v1.BalanceInfo.serializeBinaryToWriter);
  }
};


/**
 * map<string, BalanceInfo> balance = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.tdex_daemon.v1.BalanceInfo>}
 */
proto.tdex_daemon.v1.GetFeeFragmenterBalanceResponse.prototype.getBalanceMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.tdex_daemon.v1.BalanceInfo>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.tdex_daemon.v1.BalanceInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.tdex_daemon.v1.GetFeeFragmenterBalanceResponse} returns this
 */
proto.tdex_daemon.v1.GetFeeFragmenterBalanceResponse.prototype.clearBalanceMap = function() {
  this.getBalanceMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxFragments: jspb.Message.getFieldWithDefault(msg, 1, 0),
    millisatsPerByte: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest}
 */
proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest;
  return proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest}
 */
proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxFragments(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMillisatsPerByte(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxFragments();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getMillisatsPerByte();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint32 max_fragments = 1;
 * @return {number}
 */
proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest.prototype.getMaxFragments = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest} returns this
 */
proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest.prototype.setMaxFragments = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 millisats_per_byte = 2;
 * @return {number}
 */
proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest.prototype.getMillisatsPerByte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest} returns this
 */
proto.tdex_daemon.v1.FeeFragmenterSplitFundsRequest.prototype.setMillisatsPerByte = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.FeeFragmenterSplitFundsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.FeeFragmenterSplitFundsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.FeeFragmenterSplitFundsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.FeeFragmenterSplitFundsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.FeeFragmenterSplitFundsResponse}
 */
proto.tdex_daemon.v1.FeeFragmenterSplitFundsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.FeeFragmenterSplitFundsResponse;
  return proto.tdex_daemon.v1.FeeFragmenterSplitFundsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.FeeFragmenterSplitFundsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.FeeFragmenterSplitFundsResponse}
 */
proto.tdex_daemon.v1.FeeFragmenterSplitFundsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.FeeFragmenterSplitFundsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.FeeFragmenterSplitFundsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.FeeFragmenterSplitFundsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.FeeFragmenterSplitFundsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.tdex_daemon.v1.FeeFragmenterSplitFundsResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.FeeFragmenterSplitFundsResponse} returns this
 */
proto.tdex_daemon.v1.FeeFragmenterSplitFundsResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    millisatsPerByte: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest}
 */
proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest;
  return proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest}
 */
proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMillisatsPerByte(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMillisatsPerByte();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest} returns this
 */
proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 millisats_per_byte = 2;
 * @return {number}
 */
proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest.prototype.getMillisatsPerByte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest} returns this
 */
proto.tdex_daemon.v1.WithdrawFeeFragmenterRequest.prototype.setMillisatsPerByte = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.WithdrawFeeFragmenterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.WithdrawFeeFragmenterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.WithdrawFeeFragmenterResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.WithdrawFeeFragmenterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    txid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.WithdrawFeeFragmenterResponse}
 */
proto.tdex_daemon.v1.WithdrawFeeFragmenterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.WithdrawFeeFragmenterResponse;
  return proto.tdex_daemon.v1.WithdrawFeeFragmenterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.WithdrawFeeFragmenterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.WithdrawFeeFragmenterResponse}
 */
proto.tdex_daemon.v1.WithdrawFeeFragmenterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.WithdrawFeeFragmenterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.WithdrawFeeFragmenterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.WithdrawFeeFragmenterResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.WithdrawFeeFragmenterResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string txid = 1;
 * @return {string}
 */
proto.tdex_daemon.v1.WithdrawFeeFragmenterResponse.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.WithdrawFeeFragmenterResponse} returns this
 */
proto.tdex_daemon.v1.WithdrawFeeFragmenterResponse.prototype.setTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetMarketFragmenterAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetMarketFragmenterAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetMarketFragmenterAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketFragmenterAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    numOfAddresses: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetMarketFragmenterAddressRequest}
 */
proto.tdex_daemon.v1.GetMarketFragmenterAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetMarketFragmenterAddressRequest;
  return proto.tdex_daemon.v1.GetMarketFragmenterAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetMarketFragmenterAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetMarketFragmenterAddressRequest}
 */
proto.tdex_daemon.v1.GetMarketFragmenterAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumOfAddresses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetMarketFragmenterAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetMarketFragmenterAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetMarketFragmenterAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketFragmenterAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumOfAddresses();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 num_of_addresses = 1;
 * @return {number}
 */
proto.tdex_daemon.v1.GetMarketFragmenterAddressRequest.prototype.getNumOfAddresses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex_daemon.v1.GetMarketFragmenterAddressRequest} returns this
 */
proto.tdex_daemon.v1.GetMarketFragmenterAddressRequest.prototype.setNumOfAddresses = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    tdex$daemon_v1_types_pb.AddressWithBlindingKey.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse}
 */
proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse;
  return proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse}
 */
proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex$daemon_v1_types_pb.AddressWithBlindingKey;
      reader.readMessage(value,tdex$daemon_v1_types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
      msg.addAddressWithBlindingKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tdex$daemon_v1_types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>}
 */
proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex$daemon_v1_types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>} value
 * @return {!proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse} returns this
*/
proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex_daemon.v1.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex_daemon.v1.AddressWithBlindingKey}
 */
proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex_daemon.v1.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse} returns this
 */
proto.tdex_daemon.v1.GetMarketFragmenterAddressResponse.prototype.clearAddressWithBlindingKeyList = function() {
  return this.setAddressWithBlindingKeyList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ListMarketFragmenterAddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ListMarketFragmenterAddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ListMarketFragmenterAddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListMarketFragmenterAddressesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ListMarketFragmenterAddressesRequest}
 */
proto.tdex_daemon.v1.ListMarketFragmenterAddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ListMarketFragmenterAddressesRequest;
  return proto.tdex_daemon.v1.ListMarketFragmenterAddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ListMarketFragmenterAddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ListMarketFragmenterAddressesRequest}
 */
proto.tdex_daemon.v1.ListMarketFragmenterAddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ListMarketFragmenterAddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ListMarketFragmenterAddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ListMarketFragmenterAddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListMarketFragmenterAddressesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    tdex$daemon_v1_types_pb.AddressWithBlindingKey.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse}
 */
proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse;
  return proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse}
 */
proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex$daemon_v1_types_pb.AddressWithBlindingKey;
      reader.readMessage(value,tdex$daemon_v1_types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
      msg.addAddressWithBlindingKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tdex$daemon_v1_types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>}
 */
proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex$daemon_v1_types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.tdex_daemon.v1.AddressWithBlindingKey>} value
 * @return {!proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse} returns this
*/
proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex_daemon.v1.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex_daemon.v1.AddressWithBlindingKey}
 */
proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex_daemon.v1.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse} returns this
 */
proto.tdex_daemon.v1.ListMarketFragmenterAddressesResponse.prototype.clearAddressWithBlindingKeyList = function() {
  return this.setAddressWithBlindingKeyList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetMarketFragmenterBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetMarketFragmenterBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetMarketFragmenterBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketFragmenterBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetMarketFragmenterBalanceRequest}
 */
proto.tdex_daemon.v1.GetMarketFragmenterBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetMarketFragmenterBalanceRequest;
  return proto.tdex_daemon.v1.GetMarketFragmenterBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetMarketFragmenterBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetMarketFragmenterBalanceRequest}
 */
proto.tdex_daemon.v1.GetMarketFragmenterBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetMarketFragmenterBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetMarketFragmenterBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetMarketFragmenterBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketFragmenterBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetMarketFragmenterBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetMarketFragmenterBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetMarketFragmenterBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketFragmenterBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    balanceMap: (f = msg.getBalanceMap()) ? f.toObject(includeInstance, proto.tdex_daemon.v1.BalanceInfo.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetMarketFragmenterBalanceResponse}
 */
proto.tdex_daemon.v1.GetMarketFragmenterBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetMarketFragmenterBalanceResponse;
  return proto.tdex_daemon.v1.GetMarketFragmenterBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetMarketFragmenterBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetMarketFragmenterBalanceResponse}
 */
proto.tdex_daemon.v1.GetMarketFragmenterBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getBalanceMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.tdex_daemon.v1.BalanceInfo.deserializeBinaryFromReader, "", new proto.tdex_daemon.v1.BalanceInfo());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetMarketFragmenterBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetMarketFragmenterBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetMarketFragmenterBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketFragmenterBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalanceMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.tdex_daemon.v1.BalanceInfo.serializeBinaryToWriter);
  }
};


/**
 * map<string, BalanceInfo> balance = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.tdex_daemon.v1.BalanceInfo>}
 */
proto.tdex_daemon.v1.GetMarketFragmenterBalanceResponse.prototype.getBalanceMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.tdex_daemon.v1.BalanceInfo>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.tdex_daemon.v1.BalanceInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.tdex_daemon.v1.GetMarketFragmenterBalanceResponse} returns this
 */
proto.tdex_daemon.v1.GetMarketFragmenterBalanceResponse.prototype.clearBalanceMap = function() {
  this.getBalanceMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && tdex_v1_types_pb.Market.toObject(includeInstance, f),
    millisatsPerByte: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest}
 */
proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest;
  return proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest}
 */
proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.Market;
      reader.readMessage(value,tdex_v1_types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMillisatsPerByte(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex_v1_types_pb.Market.serializeBinaryToWriter
    );
  }
  f = message.getMillisatsPerByte();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional tdex.v1.Market market = 1;
 * @return {?proto.tdex.v1.Market}
 */
proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest} returns this
*/
proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest} returns this
 */
proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 millisats_per_byte = 2;
 * @return {number}
 */
proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest.prototype.getMillisatsPerByte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest} returns this
 */
proto.tdex_daemon.v1.MarketFragmenterSplitFundsRequest.prototype.setMillisatsPerByte = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.MarketFragmenterSplitFundsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.MarketFragmenterSplitFundsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.MarketFragmenterSplitFundsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.MarketFragmenterSplitFundsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.MarketFragmenterSplitFundsResponse}
 */
proto.tdex_daemon.v1.MarketFragmenterSplitFundsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.MarketFragmenterSplitFundsResponse;
  return proto.tdex_daemon.v1.MarketFragmenterSplitFundsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.MarketFragmenterSplitFundsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.MarketFragmenterSplitFundsResponse}
 */
proto.tdex_daemon.v1.MarketFragmenterSplitFundsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.MarketFragmenterSplitFundsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.MarketFragmenterSplitFundsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.MarketFragmenterSplitFundsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.MarketFragmenterSplitFundsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.tdex_daemon.v1.MarketFragmenterSplitFundsResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.MarketFragmenterSplitFundsResponse} returns this
 */
proto.tdex_daemon.v1.MarketFragmenterSplitFundsResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    millisatsPerByte: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest}
 */
proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest;
  return proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest}
 */
proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMillisatsPerByte(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMillisatsPerByte();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest} returns this
 */
proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 millisats_per_byte = 2;
 * @return {number}
 */
proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest.prototype.getMillisatsPerByte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest} returns this
 */
proto.tdex_daemon.v1.WithdrawMarketFragmenterRequest.prototype.setMillisatsPerByte = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.WithdrawMarketFragmenterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.WithdrawMarketFragmenterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.WithdrawMarketFragmenterResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.WithdrawMarketFragmenterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    txid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.WithdrawMarketFragmenterResponse}
 */
proto.tdex_daemon.v1.WithdrawMarketFragmenterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.WithdrawMarketFragmenterResponse;
  return proto.tdex_daemon.v1.WithdrawMarketFragmenterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.WithdrawMarketFragmenterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.WithdrawMarketFragmenterResponse}
 */
proto.tdex_daemon.v1.WithdrawMarketFragmenterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.WithdrawMarketFragmenterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.WithdrawMarketFragmenterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.WithdrawMarketFragmenterResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.WithdrawMarketFragmenterResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string txid = 1;
 * @return {string}
 */
proto.tdex_daemon.v1.WithdrawMarketFragmenterResponse.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.WithdrawMarketFragmenterResponse} returns this
 */
proto.tdex_daemon.v1.WithdrawMarketFragmenterResponse.prototype.setTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ListTradesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ListTradesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ListTradesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListTradesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && tdex_v1_types_pb.Market.toObject(includeInstance, f),
    page: (f = msg.getPage()) && tdex$daemon_v1_types_pb.Page.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ListTradesRequest}
 */
proto.tdex_daemon.v1.ListTradesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ListTradesRequest;
  return proto.tdex_daemon.v1.ListTradesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ListTradesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ListTradesRequest}
 */
proto.tdex_daemon.v1.ListTradesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.Market;
      reader.readMessage(value,tdex_v1_types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 2:
      var value = new tdex$daemon_v1_types_pb.Page;
      reader.readMessage(value,tdex$daemon_v1_types_pb.Page.deserializeBinaryFromReader);
      msg.setPage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ListTradesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ListTradesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ListTradesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListTradesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex_v1_types_pb.Market.serializeBinaryToWriter
    );
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tdex$daemon_v1_types_pb.Page.serializeBinaryToWriter
    );
  }
};


/**
 * optional tdex.v1.Market market = 1;
 * @return {?proto.tdex.v1.Market}
 */
proto.tdex_daemon.v1.ListTradesRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex_daemon.v1.ListTradesRequest} returns this
*/
proto.tdex_daemon.v1.ListTradesRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.ListTradesRequest} returns this
 */
proto.tdex_daemon.v1.ListTradesRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.ListTradesRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Page page = 2;
 * @return {?proto.tdex_daemon.v1.Page}
 */
proto.tdex_daemon.v1.ListTradesRequest.prototype.getPage = function() {
  return /** @type{?proto.tdex_daemon.v1.Page} */ (
    jspb.Message.getWrapperField(this, tdex$daemon_v1_types_pb.Page, 2));
};


/**
 * @param {?proto.tdex_daemon.v1.Page|undefined} value
 * @return {!proto.tdex_daemon.v1.ListTradesRequest} returns this
*/
proto.tdex_daemon.v1.ListTradesRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.ListTradesRequest} returns this
 */
proto.tdex_daemon.v1.ListTradesRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.ListTradesRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex_daemon.v1.ListTradesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ListTradesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ListTradesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ListTradesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListTradesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    tdex$daemon_v1_types_pb.TradeInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ListTradesResponse}
 */
proto.tdex_daemon.v1.ListTradesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ListTradesResponse;
  return proto.tdex_daemon.v1.ListTradesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ListTradesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ListTradesResponse}
 */
proto.tdex_daemon.v1.ListTradesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex$daemon_v1_types_pb.TradeInfo;
      reader.readMessage(value,tdex$daemon_v1_types_pb.TradeInfo.deserializeBinaryFromReader);
      msg.addTrades(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ListTradesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ListTradesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ListTradesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListTradesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tdex$daemon_v1_types_pb.TradeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TradeInfo trades = 1;
 * @return {!Array<!proto.tdex_daemon.v1.TradeInfo>}
 */
proto.tdex_daemon.v1.ListTradesResponse.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.tdex_daemon.v1.TradeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex$daemon_v1_types_pb.TradeInfo, 1));
};


/**
 * @param {!Array<!proto.tdex_daemon.v1.TradeInfo>} value
 * @return {!proto.tdex_daemon.v1.ListTradesResponse} returns this
*/
proto.tdex_daemon.v1.ListTradesResponse.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex_daemon.v1.TradeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex_daemon.v1.TradeInfo}
 */
proto.tdex_daemon.v1.ListTradesResponse.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex_daemon.v1.TradeInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex_daemon.v1.ListTradesResponse} returns this
 */
proto.tdex_daemon.v1.ListTradesResponse.prototype.clearTradesList = function() {
  return this.setTradesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ReloadUtxosRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ReloadUtxosRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ReloadUtxosRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ReloadUtxosRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ReloadUtxosRequest}
 */
proto.tdex_daemon.v1.ReloadUtxosRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ReloadUtxosRequest;
  return proto.tdex_daemon.v1.ReloadUtxosRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ReloadUtxosRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ReloadUtxosRequest}
 */
proto.tdex_daemon.v1.ReloadUtxosRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ReloadUtxosRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ReloadUtxosRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ReloadUtxosRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ReloadUtxosRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ReloadUtxosResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ReloadUtxosResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ReloadUtxosResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ReloadUtxosResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ReloadUtxosResponse}
 */
proto.tdex_daemon.v1.ReloadUtxosResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ReloadUtxosResponse;
  return proto.tdex_daemon.v1.ReloadUtxosResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ReloadUtxosResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ReloadUtxosResponse}
 */
proto.tdex_daemon.v1.ReloadUtxosResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ReloadUtxosResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ReloadUtxosResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ReloadUtxosResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ReloadUtxosResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ListUtxosRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ListUtxosRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ListUtxosRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListUtxosRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    page: (f = msg.getPage()) && tdex$daemon_v1_types_pb.Page.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ListUtxosRequest}
 */
proto.tdex_daemon.v1.ListUtxosRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ListUtxosRequest;
  return proto.tdex_daemon.v1.ListUtxosRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ListUtxosRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ListUtxosRequest}
 */
proto.tdex_daemon.v1.ListUtxosRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAccountIndex(value);
      break;
    case 2:
      var value = new tdex$daemon_v1_types_pb.Page;
      reader.readMessage(value,tdex$daemon_v1_types_pb.Page.deserializeBinaryFromReader);
      msg.setPage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ListUtxosRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ListUtxosRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ListUtxosRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListUtxosRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountIndex();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tdex$daemon_v1_types_pb.Page.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 account_index = 1;
 * @return {number}
 */
proto.tdex_daemon.v1.ListUtxosRequest.prototype.getAccountIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex_daemon.v1.ListUtxosRequest} returns this
 */
proto.tdex_daemon.v1.ListUtxosRequest.prototype.setAccountIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Page page = 2;
 * @return {?proto.tdex_daemon.v1.Page}
 */
proto.tdex_daemon.v1.ListUtxosRequest.prototype.getPage = function() {
  return /** @type{?proto.tdex_daemon.v1.Page} */ (
    jspb.Message.getWrapperField(this, tdex$daemon_v1_types_pb.Page, 2));
};


/**
 * @param {?proto.tdex_daemon.v1.Page|undefined} value
 * @return {!proto.tdex_daemon.v1.ListUtxosRequest} returns this
*/
proto.tdex_daemon.v1.ListUtxosRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.ListUtxosRequest} returns this
 */
proto.tdex_daemon.v1.ListUtxosRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.ListUtxosRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex_daemon.v1.ListUtxosResponse.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ListUtxosResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ListUtxosResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ListUtxosResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListUtxosResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    unspentsList: jspb.Message.toObjectList(msg.getUnspentsList(),
    tdex$daemon_v1_types_pb.UtxoInfo.toObject, includeInstance),
    spentsList: jspb.Message.toObjectList(msg.getSpentsList(),
    tdex$daemon_v1_types_pb.UtxoInfo.toObject, includeInstance),
    locksList: jspb.Message.toObjectList(msg.getLocksList(),
    tdex$daemon_v1_types_pb.UtxoInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ListUtxosResponse}
 */
proto.tdex_daemon.v1.ListUtxosResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ListUtxosResponse;
  return proto.tdex_daemon.v1.ListUtxosResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ListUtxosResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ListUtxosResponse}
 */
proto.tdex_daemon.v1.ListUtxosResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex$daemon_v1_types_pb.UtxoInfo;
      reader.readMessage(value,tdex$daemon_v1_types_pb.UtxoInfo.deserializeBinaryFromReader);
      msg.addUnspents(value);
      break;
    case 2:
      var value = new tdex$daemon_v1_types_pb.UtxoInfo;
      reader.readMessage(value,tdex$daemon_v1_types_pb.UtxoInfo.deserializeBinaryFromReader);
      msg.addSpents(value);
      break;
    case 3:
      var value = new tdex$daemon_v1_types_pb.UtxoInfo;
      reader.readMessage(value,tdex$daemon_v1_types_pb.UtxoInfo.deserializeBinaryFromReader);
      msg.addLocks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ListUtxosResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ListUtxosResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ListUtxosResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListUtxosResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnspentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tdex$daemon_v1_types_pb.UtxoInfo.serializeBinaryToWriter
    );
  }
  f = message.getSpentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      tdex$daemon_v1_types_pb.UtxoInfo.serializeBinaryToWriter
    );
  }
  f = message.getLocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      tdex$daemon_v1_types_pb.UtxoInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated UtxoInfo unspents = 1;
 * @return {!Array<!proto.tdex_daemon.v1.UtxoInfo>}
 */
proto.tdex_daemon.v1.ListUtxosResponse.prototype.getUnspentsList = function() {
  return /** @type{!Array<!proto.tdex_daemon.v1.UtxoInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex$daemon_v1_types_pb.UtxoInfo, 1));
};


/**
 * @param {!Array<!proto.tdex_daemon.v1.UtxoInfo>} value
 * @return {!proto.tdex_daemon.v1.ListUtxosResponse} returns this
*/
proto.tdex_daemon.v1.ListUtxosResponse.prototype.setUnspentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex_daemon.v1.UtxoInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex_daemon.v1.UtxoInfo}
 */
proto.tdex_daemon.v1.ListUtxosResponse.prototype.addUnspents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex_daemon.v1.UtxoInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex_daemon.v1.ListUtxosResponse} returns this
 */
proto.tdex_daemon.v1.ListUtxosResponse.prototype.clearUnspentsList = function() {
  return this.setUnspentsList([]);
};


/**
 * repeated UtxoInfo spents = 2;
 * @return {!Array<!proto.tdex_daemon.v1.UtxoInfo>}
 */
proto.tdex_daemon.v1.ListUtxosResponse.prototype.getSpentsList = function() {
  return /** @type{!Array<!proto.tdex_daemon.v1.UtxoInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex$daemon_v1_types_pb.UtxoInfo, 2));
};


/**
 * @param {!Array<!proto.tdex_daemon.v1.UtxoInfo>} value
 * @return {!proto.tdex_daemon.v1.ListUtxosResponse} returns this
*/
proto.tdex_daemon.v1.ListUtxosResponse.prototype.setSpentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tdex_daemon.v1.UtxoInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex_daemon.v1.UtxoInfo}
 */
proto.tdex_daemon.v1.ListUtxosResponse.prototype.addSpents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tdex_daemon.v1.UtxoInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex_daemon.v1.ListUtxosResponse} returns this
 */
proto.tdex_daemon.v1.ListUtxosResponse.prototype.clearSpentsList = function() {
  return this.setSpentsList([]);
};


/**
 * repeated UtxoInfo locks = 3;
 * @return {!Array<!proto.tdex_daemon.v1.UtxoInfo>}
 */
proto.tdex_daemon.v1.ListUtxosResponse.prototype.getLocksList = function() {
  return /** @type{!Array<!proto.tdex_daemon.v1.UtxoInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex$daemon_v1_types_pb.UtxoInfo, 3));
};


/**
 * @param {!Array<!proto.tdex_daemon.v1.UtxoInfo>} value
 * @return {!proto.tdex_daemon.v1.ListUtxosResponse} returns this
*/
proto.tdex_daemon.v1.ListUtxosResponse.prototype.setLocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.tdex_daemon.v1.UtxoInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex_daemon.v1.UtxoInfo}
 */
proto.tdex_daemon.v1.ListUtxosResponse.prototype.addLocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.tdex_daemon.v1.UtxoInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex_daemon.v1.ListUtxosResponse} returns this
 */
proto.tdex_daemon.v1.ListUtxosResponse.prototype.clearLocksList = function() {
  return this.setLocksList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.AddWebhookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.AddWebhookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.AddWebhookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.AddWebhookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    endpoint: jspb.Message.getFieldWithDefault(msg, 1, ""),
    action: jspb.Message.getFieldWithDefault(msg, 2, 0),
    secret: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.AddWebhookRequest}
 */
proto.tdex_daemon.v1.AddWebhookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.AddWebhookRequest;
  return proto.tdex_daemon.v1.AddWebhookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.AddWebhookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.AddWebhookRequest}
 */
proto.tdex_daemon.v1.AddWebhookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndpoint(value);
      break;
    case 2:
      var value = /** @type {!proto.tdex_daemon.v1.ActionType} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.AddWebhookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.AddWebhookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.AddWebhookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.AddWebhookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndpoint();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSecret();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string endpoint = 1;
 * @return {string}
 */
proto.tdex_daemon.v1.AddWebhookRequest.prototype.getEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.AddWebhookRequest} returns this
 */
proto.tdex_daemon.v1.AddWebhookRequest.prototype.setEndpoint = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ActionType action = 2;
 * @return {!proto.tdex_daemon.v1.ActionType}
 */
proto.tdex_daemon.v1.AddWebhookRequest.prototype.getAction = function() {
  return /** @type {!proto.tdex_daemon.v1.ActionType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.tdex_daemon.v1.ActionType} value
 * @return {!proto.tdex_daemon.v1.AddWebhookRequest} returns this
 */
proto.tdex_daemon.v1.AddWebhookRequest.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string secret = 3;
 * @return {string}
 */
proto.tdex_daemon.v1.AddWebhookRequest.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.AddWebhookRequest} returns this
 */
proto.tdex_daemon.v1.AddWebhookRequest.prototype.setSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.AddWebhookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.AddWebhookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.AddWebhookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.AddWebhookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.AddWebhookResponse}
 */
proto.tdex_daemon.v1.AddWebhookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.AddWebhookResponse;
  return proto.tdex_daemon.v1.AddWebhookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.AddWebhookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.AddWebhookResponse}
 */
proto.tdex_daemon.v1.AddWebhookResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.AddWebhookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.AddWebhookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.AddWebhookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.AddWebhookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.tdex_daemon.v1.AddWebhookResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.AddWebhookResponse} returns this
 */
proto.tdex_daemon.v1.AddWebhookResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.RemoveWebhookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.RemoveWebhookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.RemoveWebhookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.RemoveWebhookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.RemoveWebhookRequest}
 */
proto.tdex_daemon.v1.RemoveWebhookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.RemoveWebhookRequest;
  return proto.tdex_daemon.v1.RemoveWebhookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.RemoveWebhookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.RemoveWebhookRequest}
 */
proto.tdex_daemon.v1.RemoveWebhookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.RemoveWebhookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.RemoveWebhookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.RemoveWebhookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.RemoveWebhookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.tdex_daemon.v1.RemoveWebhookRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex_daemon.v1.RemoveWebhookRequest} returns this
 */
proto.tdex_daemon.v1.RemoveWebhookRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.RemoveWebhookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.RemoveWebhookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.RemoveWebhookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.RemoveWebhookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.RemoveWebhookResponse}
 */
proto.tdex_daemon.v1.RemoveWebhookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.RemoveWebhookResponse;
  return proto.tdex_daemon.v1.RemoveWebhookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.RemoveWebhookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.RemoveWebhookResponse}
 */
proto.tdex_daemon.v1.RemoveWebhookResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.RemoveWebhookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.RemoveWebhookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.RemoveWebhookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.RemoveWebhookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ListWebhooksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ListWebhooksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ListWebhooksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListWebhooksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ListWebhooksRequest}
 */
proto.tdex_daemon.v1.ListWebhooksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ListWebhooksRequest;
  return proto.tdex_daemon.v1.ListWebhooksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ListWebhooksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ListWebhooksRequest}
 */
proto.tdex_daemon.v1.ListWebhooksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.tdex_daemon.v1.ActionType} */ (reader.readEnum());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ListWebhooksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ListWebhooksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ListWebhooksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListWebhooksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional ActionType action = 1;
 * @return {!proto.tdex_daemon.v1.ActionType}
 */
proto.tdex_daemon.v1.ListWebhooksRequest.prototype.getAction = function() {
  return /** @type {!proto.tdex_daemon.v1.ActionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.tdex_daemon.v1.ActionType} value
 * @return {!proto.tdex_daemon.v1.ListWebhooksRequest} returns this
 */
proto.tdex_daemon.v1.ListWebhooksRequest.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex_daemon.v1.ListWebhooksResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ListWebhooksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ListWebhooksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ListWebhooksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListWebhooksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    webhookInfoList: jspb.Message.toObjectList(msg.getWebhookInfoList(),
    tdex$daemon_v1_types_pb.WebhookInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ListWebhooksResponse}
 */
proto.tdex_daemon.v1.ListWebhooksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ListWebhooksResponse;
  return proto.tdex_daemon.v1.ListWebhooksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ListWebhooksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ListWebhooksResponse}
 */
proto.tdex_daemon.v1.ListWebhooksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex$daemon_v1_types_pb.WebhookInfo;
      reader.readMessage(value,tdex$daemon_v1_types_pb.WebhookInfo.deserializeBinaryFromReader);
      msg.addWebhookInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ListWebhooksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ListWebhooksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ListWebhooksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListWebhooksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWebhookInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tdex$daemon_v1_types_pb.WebhookInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WebhookInfo webhook_info = 1;
 * @return {!Array<!proto.tdex_daemon.v1.WebhookInfo>}
 */
proto.tdex_daemon.v1.ListWebhooksResponse.prototype.getWebhookInfoList = function() {
  return /** @type{!Array<!proto.tdex_daemon.v1.WebhookInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex$daemon_v1_types_pb.WebhookInfo, 1));
};


/**
 * @param {!Array<!proto.tdex_daemon.v1.WebhookInfo>} value
 * @return {!proto.tdex_daemon.v1.ListWebhooksResponse} returns this
*/
proto.tdex_daemon.v1.ListWebhooksResponse.prototype.setWebhookInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex_daemon.v1.WebhookInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex_daemon.v1.WebhookInfo}
 */
proto.tdex_daemon.v1.ListWebhooksResponse.prototype.addWebhookInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex_daemon.v1.WebhookInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex_daemon.v1.ListWebhooksResponse} returns this
 */
proto.tdex_daemon.v1.ListWebhooksResponse.prototype.clearWebhookInfoList = function() {
  return this.setWebhookInfoList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ListDepositsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ListDepositsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ListDepositsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListDepositsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    page: (f = msg.getPage()) && tdex$daemon_v1_types_pb.Page.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ListDepositsRequest}
 */
proto.tdex_daemon.v1.ListDepositsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ListDepositsRequest;
  return proto.tdex_daemon.v1.ListDepositsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ListDepositsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ListDepositsRequest}
 */
proto.tdex_daemon.v1.ListDepositsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAccountIndex(value);
      break;
    case 2:
      var value = new tdex$daemon_v1_types_pb.Page;
      reader.readMessage(value,tdex$daemon_v1_types_pb.Page.deserializeBinaryFromReader);
      msg.setPage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ListDepositsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ListDepositsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ListDepositsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListDepositsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountIndex();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tdex$daemon_v1_types_pb.Page.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 account_index = 1;
 * @return {number}
 */
proto.tdex_daemon.v1.ListDepositsRequest.prototype.getAccountIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex_daemon.v1.ListDepositsRequest} returns this
 */
proto.tdex_daemon.v1.ListDepositsRequest.prototype.setAccountIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Page page = 2;
 * @return {?proto.tdex_daemon.v1.Page}
 */
proto.tdex_daemon.v1.ListDepositsRequest.prototype.getPage = function() {
  return /** @type{?proto.tdex_daemon.v1.Page} */ (
    jspb.Message.getWrapperField(this, tdex$daemon_v1_types_pb.Page, 2));
};


/**
 * @param {?proto.tdex_daemon.v1.Page|undefined} value
 * @return {!proto.tdex_daemon.v1.ListDepositsRequest} returns this
*/
proto.tdex_daemon.v1.ListDepositsRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.ListDepositsRequest} returns this
 */
proto.tdex_daemon.v1.ListDepositsRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.ListDepositsRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex_daemon.v1.ListDepositsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ListDepositsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ListDepositsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ListDepositsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListDepositsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    depositsList: jspb.Message.toObjectList(msg.getDepositsList(),
    tdex$daemon_v1_types_pb.Deposit.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ListDepositsResponse}
 */
proto.tdex_daemon.v1.ListDepositsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ListDepositsResponse;
  return proto.tdex_daemon.v1.ListDepositsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ListDepositsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ListDepositsResponse}
 */
proto.tdex_daemon.v1.ListDepositsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAccountIndex(value);
      break;
    case 2:
      var value = new tdex$daemon_v1_types_pb.Deposit;
      reader.readMessage(value,tdex$daemon_v1_types_pb.Deposit.deserializeBinaryFromReader);
      msg.addDeposits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ListDepositsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ListDepositsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ListDepositsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListDepositsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountIndex();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDepositsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      tdex$daemon_v1_types_pb.Deposit.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 account_index = 1;
 * @return {number}
 */
proto.tdex_daemon.v1.ListDepositsResponse.prototype.getAccountIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex_daemon.v1.ListDepositsResponse} returns this
 */
proto.tdex_daemon.v1.ListDepositsResponse.prototype.setAccountIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Deposit deposits = 2;
 * @return {!Array<!proto.tdex_daemon.v1.Deposit>}
 */
proto.tdex_daemon.v1.ListDepositsResponse.prototype.getDepositsList = function() {
  return /** @type{!Array<!proto.tdex_daemon.v1.Deposit>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex$daemon_v1_types_pb.Deposit, 2));
};


/**
 * @param {!Array<!proto.tdex_daemon.v1.Deposit>} value
 * @return {!proto.tdex_daemon.v1.ListDepositsResponse} returns this
*/
proto.tdex_daemon.v1.ListDepositsResponse.prototype.setDepositsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tdex_daemon.v1.Deposit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex_daemon.v1.Deposit}
 */
proto.tdex_daemon.v1.ListDepositsResponse.prototype.addDeposits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tdex_daemon.v1.Deposit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex_daemon.v1.ListDepositsResponse} returns this
 */
proto.tdex_daemon.v1.ListDepositsResponse.prototype.clearDepositsList = function() {
  return this.setDepositsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ListWithdrawalsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ListWithdrawalsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ListWithdrawalsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListWithdrawalsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    page: (f = msg.getPage()) && tdex$daemon_v1_types_pb.Page.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ListWithdrawalsRequest}
 */
proto.tdex_daemon.v1.ListWithdrawalsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ListWithdrawalsRequest;
  return proto.tdex_daemon.v1.ListWithdrawalsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ListWithdrawalsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ListWithdrawalsRequest}
 */
proto.tdex_daemon.v1.ListWithdrawalsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAccountIndex(value);
      break;
    case 2:
      var value = new tdex$daemon_v1_types_pb.Page;
      reader.readMessage(value,tdex$daemon_v1_types_pb.Page.deserializeBinaryFromReader);
      msg.setPage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ListWithdrawalsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ListWithdrawalsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ListWithdrawalsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListWithdrawalsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountIndex();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tdex$daemon_v1_types_pb.Page.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 account_index = 1;
 * @return {number}
 */
proto.tdex_daemon.v1.ListWithdrawalsRequest.prototype.getAccountIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex_daemon.v1.ListWithdrawalsRequest} returns this
 */
proto.tdex_daemon.v1.ListWithdrawalsRequest.prototype.setAccountIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Page page = 2;
 * @return {?proto.tdex_daemon.v1.Page}
 */
proto.tdex_daemon.v1.ListWithdrawalsRequest.prototype.getPage = function() {
  return /** @type{?proto.tdex_daemon.v1.Page} */ (
    jspb.Message.getWrapperField(this, tdex$daemon_v1_types_pb.Page, 2));
};


/**
 * @param {?proto.tdex_daemon.v1.Page|undefined} value
 * @return {!proto.tdex_daemon.v1.ListWithdrawalsRequest} returns this
*/
proto.tdex_daemon.v1.ListWithdrawalsRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.ListWithdrawalsRequest} returns this
 */
proto.tdex_daemon.v1.ListWithdrawalsRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.ListWithdrawalsRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex_daemon.v1.ListWithdrawalsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.ListWithdrawalsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.ListWithdrawalsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.ListWithdrawalsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListWithdrawalsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    withdrawalsList: jspb.Message.toObjectList(msg.getWithdrawalsList(),
    tdex$daemon_v1_types_pb.Withdrawal.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.ListWithdrawalsResponse}
 */
proto.tdex_daemon.v1.ListWithdrawalsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.ListWithdrawalsResponse;
  return proto.tdex_daemon.v1.ListWithdrawalsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.ListWithdrawalsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.ListWithdrawalsResponse}
 */
proto.tdex_daemon.v1.ListWithdrawalsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAccountIndex(value);
      break;
    case 2:
      var value = new tdex$daemon_v1_types_pb.Withdrawal;
      reader.readMessage(value,tdex$daemon_v1_types_pb.Withdrawal.deserializeBinaryFromReader);
      msg.addWithdrawals(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.ListWithdrawalsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.ListWithdrawalsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.ListWithdrawalsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.ListWithdrawalsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountIndex();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getWithdrawalsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      tdex$daemon_v1_types_pb.Withdrawal.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 account_index = 1;
 * @return {number}
 */
proto.tdex_daemon.v1.ListWithdrawalsResponse.prototype.getAccountIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex_daemon.v1.ListWithdrawalsResponse} returns this
 */
proto.tdex_daemon.v1.ListWithdrawalsResponse.prototype.setAccountIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Withdrawal withdrawals = 2;
 * @return {!Array<!proto.tdex_daemon.v1.Withdrawal>}
 */
proto.tdex_daemon.v1.ListWithdrawalsResponse.prototype.getWithdrawalsList = function() {
  return /** @type{!Array<!proto.tdex_daemon.v1.Withdrawal>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex$daemon_v1_types_pb.Withdrawal, 2));
};


/**
 * @param {!Array<!proto.tdex_daemon.v1.Withdrawal>} value
 * @return {!proto.tdex_daemon.v1.ListWithdrawalsResponse} returns this
*/
proto.tdex_daemon.v1.ListWithdrawalsResponse.prototype.setWithdrawalsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tdex_daemon.v1.Withdrawal=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex_daemon.v1.Withdrawal}
 */
proto.tdex_daemon.v1.ListWithdrawalsResponse.prototype.addWithdrawals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tdex_daemon.v1.Withdrawal, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex_daemon.v1.ListWithdrawalsResponse} returns this
 */
proto.tdex_daemon.v1.ListWithdrawalsResponse.prototype.clearWithdrawalsList = function() {
  return this.setWithdrawalsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetMarketReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetMarketReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetMarketReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && tdex_v1_types_pb.Market.toObject(includeInstance, f),
    timeRange: (f = msg.getTimeRange()) && tdex$daemon_v1_types_pb.TimeRange.toObject(includeInstance, f),
    timeFrame: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetMarketReportRequest}
 */
proto.tdex_daemon.v1.GetMarketReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetMarketReportRequest;
  return proto.tdex_daemon.v1.GetMarketReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetMarketReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetMarketReportRequest}
 */
proto.tdex_daemon.v1.GetMarketReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.Market;
      reader.readMessage(value,tdex_v1_types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 2:
      var value = new tdex$daemon_v1_types_pb.TimeRange;
      reader.readMessage(value,tdex$daemon_v1_types_pb.TimeRange.deserializeBinaryFromReader);
      msg.setTimeRange(value);
      break;
    case 3:
      var value = /** @type {!proto.tdex_daemon.v1.TimeFrame} */ (reader.readEnum());
      msg.setTimeFrame(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetMarketReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetMarketReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetMarketReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex_v1_types_pb.Market.serializeBinaryToWriter
    );
  }
  f = message.getTimeRange();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tdex$daemon_v1_types_pb.TimeRange.serializeBinaryToWriter
    );
  }
  f = message.getTimeFrame();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional tdex.v1.Market market = 1;
 * @return {?proto.tdex.v1.Market}
 */
proto.tdex_daemon.v1.GetMarketReportRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex_daemon.v1.GetMarketReportRequest} returns this
*/
proto.tdex_daemon.v1.GetMarketReportRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.GetMarketReportRequest} returns this
 */
proto.tdex_daemon.v1.GetMarketReportRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.GetMarketReportRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TimeRange time_range = 2;
 * @return {?proto.tdex_daemon.v1.TimeRange}
 */
proto.tdex_daemon.v1.GetMarketReportRequest.prototype.getTimeRange = function() {
  return /** @type{?proto.tdex_daemon.v1.TimeRange} */ (
    jspb.Message.getWrapperField(this, tdex$daemon_v1_types_pb.TimeRange, 2));
};


/**
 * @param {?proto.tdex_daemon.v1.TimeRange|undefined} value
 * @return {!proto.tdex_daemon.v1.GetMarketReportRequest} returns this
*/
proto.tdex_daemon.v1.GetMarketReportRequest.prototype.setTimeRange = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.GetMarketReportRequest} returns this
 */
proto.tdex_daemon.v1.GetMarketReportRequest.prototype.clearTimeRange = function() {
  return this.setTimeRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.GetMarketReportRequest.prototype.hasTimeRange = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TimeFrame time_frame = 3;
 * @return {!proto.tdex_daemon.v1.TimeFrame}
 */
proto.tdex_daemon.v1.GetMarketReportRequest.prototype.getTimeFrame = function() {
  return /** @type {!proto.tdex_daemon.v1.TimeFrame} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.tdex_daemon.v1.TimeFrame} value
 * @return {!proto.tdex_daemon.v1.GetMarketReportRequest} returns this
 */
proto.tdex_daemon.v1.GetMarketReportRequest.prototype.setTimeFrame = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tdex_daemon.v1.GetMarketReportResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex_daemon.v1.GetMarketReportResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex_daemon.v1.GetMarketReportResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketReportResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    report: (f = msg.getReport()) && tdex$daemon_v1_types_pb.MarketReport.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tdex_daemon.v1.GetMarketReportResponse}
 */
proto.tdex_daemon.v1.GetMarketReportResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex_daemon.v1.GetMarketReportResponse;
  return proto.tdex_daemon.v1.GetMarketReportResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex_daemon.v1.GetMarketReportResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex_daemon.v1.GetMarketReportResponse}
 */
proto.tdex_daemon.v1.GetMarketReportResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex$daemon_v1_types_pb.MarketReport;
      reader.readMessage(value,tdex$daemon_v1_types_pb.MarketReport.deserializeBinaryFromReader);
      msg.setReport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tdex_daemon.v1.GetMarketReportResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex_daemon.v1.GetMarketReportResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex_daemon.v1.GetMarketReportResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex_daemon.v1.GetMarketReportResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex$daemon_v1_types_pb.MarketReport.serializeBinaryToWriter
    );
  }
};


/**
 * optional MarketReport report = 1;
 * @return {?proto.tdex_daemon.v1.MarketReport}
 */
proto.tdex_daemon.v1.GetMarketReportResponse.prototype.getReport = function() {
  return /** @type{?proto.tdex_daemon.v1.MarketReport} */ (
    jspb.Message.getWrapperField(this, tdex$daemon_v1_types_pb.MarketReport, 1));
};


/**
 * @param {?proto.tdex_daemon.v1.MarketReport|undefined} value
 * @return {!proto.tdex_daemon.v1.GetMarketReportResponse} returns this
*/
proto.tdex_daemon.v1.GetMarketReportResponse.prototype.setReport = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex_daemon.v1.GetMarketReportResponse} returns this
 */
proto.tdex_daemon.v1.GetMarketReportResponse.prototype.clearReport = function() {
  return this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex_daemon.v1.GetMarketReportResponse.prototype.hasReport = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.tdex_daemon.v1);
