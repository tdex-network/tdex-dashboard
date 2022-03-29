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
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var tdex$daemon_v1_wallet_pb = require('../../tdex-daemon/v1/wallet_pb.js');
goog.object.extend(proto, tdex$daemon_v1_wallet_pb);
var tdex_v1_types_pb = require('../../tdex/v1/types_pb.js');
goog.object.extend(proto, tdex_v1_types_pb);
goog.exportSymbol('proto.tdex.daemon.v1.AccountInfo', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ActionType', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.AddWebhookReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.AddWebhookRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.BuildInfo', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ClaimFeeDepositsReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ClaimFeeDepositsRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ClaimMarketDepositsReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ClaimMarketDepositsRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.CloseMarketReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.CloseMarketRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.CustomPeriod', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.Deposit', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.DropMarketReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.DropMarketRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.FeeInfo', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.FragmenterSplitFundsReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetFeeAddressReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetFeeAddressRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetFeeBalanceReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetFeeBalanceRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetFeeFragmenterAddressReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetFeeFragmenterAddressRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetFeeFragmenterBalanceReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetFeeFragmenterBalanceRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetInfoReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetInfoRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetMarketAddressReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetMarketAddressRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetMarketBalanceReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetMarketBalanceRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetMarketFragmenterAddressReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetMarketFragmenterAddressRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetMarketFragmenterBalanceReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetMarketFragmenterBalanceRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetMarketInfoReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetMarketInfoRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetMarketReportReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.GetMarketReportRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ListDepositsReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ListDepositsRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ListFeeAddressesReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ListFeeAddressesRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ListFeeFragmenterAddressesRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ListMarketAddressesReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ListMarketAddressesRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ListMarketFragmenterAddressesRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ListMarketsReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ListMarketsRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ListTradesReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ListTradesRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ListUtxosReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ListUtxosRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ListWebhooksReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ListWebhooksRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ListWithdrawalsReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ListWithdrawalsRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.MarketCollectedFees', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.MarketInfo', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.MarketReport', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.MarketVolume', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.NewMarketReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.NewMarketRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.OpenMarketReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.OpenMarketRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.Page', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.PredefinedPeriod', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ReloadUtxosReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.ReloadUtxosRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.RemoveWebhookReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.RemoveWebhookRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.StrategyType', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.SwapFailInfo', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.SwapInfo', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.TimeFrame', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.TimeRange', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.TradeInfo', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.TradePrice', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.TradeStatus', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.TradeStatusInfo', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.TxOutpoint', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.UpdateMarketFeeReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.UpdateMarketPriceReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.UpdateMarketPriceRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.UpdateMarketStrategyReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.UpdateMarketStrategyRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.UtxoInfo', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.WebhookInfo', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.WithdrawFeeFragmenterReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.WithdrawFeeReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.WithdrawFeeRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.WithdrawMarketFragmenterReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.WithdrawMarketReply', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.WithdrawMarketRequest', null, global);
goog.exportSymbol('proto.tdex.daemon.v1.Withdrawal', null, global);
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
proto.tdex.daemon.v1.GetInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.GetInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetInfoRequest.displayName = 'proto.tdex.daemon.v1.GetInfoRequest';
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
proto.tdex.daemon.v1.GetInfoReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex.daemon.v1.GetInfoReply.repeatedFields_, null);
};
goog.inherits(proto.tdex.daemon.v1.GetInfoReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetInfoReply.displayName = 'proto.tdex.daemon.v1.GetInfoReply';
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
proto.tdex.daemon.v1.BuildInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.BuildInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.BuildInfo.displayName = 'proto.tdex.daemon.v1.BuildInfo';
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
proto.tdex.daemon.v1.GetFeeAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.GetFeeAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetFeeAddressRequest.displayName = 'proto.tdex.daemon.v1.GetFeeAddressRequest';
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
proto.tdex.daemon.v1.GetFeeAddressReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex.daemon.v1.GetFeeAddressReply.repeatedFields_, null);
};
goog.inherits(proto.tdex.daemon.v1.GetFeeAddressReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetFeeAddressReply.displayName = 'proto.tdex.daemon.v1.GetFeeAddressReply';
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
proto.tdex.daemon.v1.ListFeeAddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.ListFeeAddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ListFeeAddressesRequest.displayName = 'proto.tdex.daemon.v1.ListFeeAddressesRequest';
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
proto.tdex.daemon.v1.ListFeeAddressesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex.daemon.v1.ListFeeAddressesReply.repeatedFields_, null);
};
goog.inherits(proto.tdex.daemon.v1.ListFeeAddressesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ListFeeAddressesReply.displayName = 'proto.tdex.daemon.v1.ListFeeAddressesReply';
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
proto.tdex.daemon.v1.GetFeeBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.GetFeeBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetFeeBalanceRequest.displayName = 'proto.tdex.daemon.v1.GetFeeBalanceRequest';
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
proto.tdex.daemon.v1.GetFeeBalanceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.GetFeeBalanceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetFeeBalanceReply.displayName = 'proto.tdex.daemon.v1.GetFeeBalanceReply';
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
proto.tdex.daemon.v1.ClaimFeeDepositsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex.daemon.v1.ClaimFeeDepositsRequest.repeatedFields_, null);
};
goog.inherits(proto.tdex.daemon.v1.ClaimFeeDepositsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ClaimFeeDepositsRequest.displayName = 'proto.tdex.daemon.v1.ClaimFeeDepositsRequest';
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
proto.tdex.daemon.v1.ClaimFeeDepositsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.ClaimFeeDepositsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ClaimFeeDepositsReply.displayName = 'proto.tdex.daemon.v1.ClaimFeeDepositsReply';
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
proto.tdex.daemon.v1.WithdrawFeeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.WithdrawFeeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.WithdrawFeeRequest.displayName = 'proto.tdex.daemon.v1.WithdrawFeeRequest';
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
proto.tdex.daemon.v1.WithdrawFeeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.WithdrawFeeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.WithdrawFeeReply.displayName = 'proto.tdex.daemon.v1.WithdrawFeeReply';
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
proto.tdex.daemon.v1.NewMarketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.NewMarketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.NewMarketRequest.displayName = 'proto.tdex.daemon.v1.NewMarketRequest';
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
proto.tdex.daemon.v1.NewMarketReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.NewMarketReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.NewMarketReply.displayName = 'proto.tdex.daemon.v1.NewMarketReply';
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
proto.tdex.daemon.v1.GetMarketInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.GetMarketInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetMarketInfoRequest.displayName = 'proto.tdex.daemon.v1.GetMarketInfoRequest';
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
proto.tdex.daemon.v1.GetMarketInfoReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.GetMarketInfoReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetMarketInfoReply.displayName = 'proto.tdex.daemon.v1.GetMarketInfoReply';
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
proto.tdex.daemon.v1.GetMarketAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.GetMarketAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetMarketAddressRequest.displayName = 'proto.tdex.daemon.v1.GetMarketAddressRequest';
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
proto.tdex.daemon.v1.GetMarketAddressReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex.daemon.v1.GetMarketAddressReply.repeatedFields_, null);
};
goog.inherits(proto.tdex.daemon.v1.GetMarketAddressReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetMarketAddressReply.displayName = 'proto.tdex.daemon.v1.GetMarketAddressReply';
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
proto.tdex.daemon.v1.ListMarketAddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.ListMarketAddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ListMarketAddressesRequest.displayName = 'proto.tdex.daemon.v1.ListMarketAddressesRequest';
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
proto.tdex.daemon.v1.ListMarketAddressesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex.daemon.v1.ListMarketAddressesReply.repeatedFields_, null);
};
goog.inherits(proto.tdex.daemon.v1.ListMarketAddressesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ListMarketAddressesReply.displayName = 'proto.tdex.daemon.v1.ListMarketAddressesReply';
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
proto.tdex.daemon.v1.GetMarketBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.GetMarketBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetMarketBalanceRequest.displayName = 'proto.tdex.daemon.v1.GetMarketBalanceRequest';
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
proto.tdex.daemon.v1.GetMarketBalanceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.GetMarketBalanceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetMarketBalanceReply.displayName = 'proto.tdex.daemon.v1.GetMarketBalanceReply';
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
proto.tdex.daemon.v1.ClaimMarketDepositsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex.daemon.v1.ClaimMarketDepositsRequest.repeatedFields_, null);
};
goog.inherits(proto.tdex.daemon.v1.ClaimMarketDepositsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ClaimMarketDepositsRequest.displayName = 'proto.tdex.daemon.v1.ClaimMarketDepositsRequest';
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
proto.tdex.daemon.v1.ClaimMarketDepositsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.ClaimMarketDepositsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ClaimMarketDepositsReply.displayName = 'proto.tdex.daemon.v1.ClaimMarketDepositsReply';
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
proto.tdex.daemon.v1.OpenMarketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.OpenMarketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.OpenMarketRequest.displayName = 'proto.tdex.daemon.v1.OpenMarketRequest';
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
proto.tdex.daemon.v1.OpenMarketReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.OpenMarketReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.OpenMarketReply.displayName = 'proto.tdex.daemon.v1.OpenMarketReply';
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
proto.tdex.daemon.v1.CloseMarketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.CloseMarketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.CloseMarketRequest.displayName = 'proto.tdex.daemon.v1.CloseMarketRequest';
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
proto.tdex.daemon.v1.CloseMarketReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.CloseMarketReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.CloseMarketReply.displayName = 'proto.tdex.daemon.v1.CloseMarketReply';
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
proto.tdex.daemon.v1.ListMarketsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.ListMarketsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ListMarketsRequest.displayName = 'proto.tdex.daemon.v1.ListMarketsRequest';
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
proto.tdex.daemon.v1.ListMarketsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex.daemon.v1.ListMarketsReply.repeatedFields_, null);
};
goog.inherits(proto.tdex.daemon.v1.ListMarketsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ListMarketsReply.displayName = 'proto.tdex.daemon.v1.ListMarketsReply';
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
proto.tdex.daemon.v1.DropMarketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.DropMarketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.DropMarketRequest.displayName = 'proto.tdex.daemon.v1.DropMarketRequest';
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
proto.tdex.daemon.v1.DropMarketReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.DropMarketReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.DropMarketReply.displayName = 'proto.tdex.daemon.v1.DropMarketReply';
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
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest.displayName = 'proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest';
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
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply.repeatedFields_, null);
};
goog.inherits(proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply.displayName = 'proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply';
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
proto.tdex.daemon.v1.WithdrawMarketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.WithdrawMarketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.WithdrawMarketRequest.displayName = 'proto.tdex.daemon.v1.WithdrawMarketRequest';
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
proto.tdex.daemon.v1.WithdrawMarketReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.WithdrawMarketReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.WithdrawMarketReply.displayName = 'proto.tdex.daemon.v1.WithdrawMarketReply';
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
proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest.displayName = 'proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest';
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
proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest.displayName = 'proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest';
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
proto.tdex.daemon.v1.UpdateMarketFeeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.UpdateMarketFeeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.UpdateMarketFeeReply.displayName = 'proto.tdex.daemon.v1.UpdateMarketFeeReply';
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
proto.tdex.daemon.v1.UpdateMarketPriceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.UpdateMarketPriceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.UpdateMarketPriceRequest.displayName = 'proto.tdex.daemon.v1.UpdateMarketPriceRequest';
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
proto.tdex.daemon.v1.UpdateMarketPriceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.UpdateMarketPriceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.UpdateMarketPriceReply.displayName = 'proto.tdex.daemon.v1.UpdateMarketPriceReply';
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
proto.tdex.daemon.v1.UpdateMarketStrategyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.UpdateMarketStrategyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.UpdateMarketStrategyRequest.displayName = 'proto.tdex.daemon.v1.UpdateMarketStrategyRequest';
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
proto.tdex.daemon.v1.UpdateMarketStrategyReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.UpdateMarketStrategyReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.UpdateMarketStrategyReply.displayName = 'proto.tdex.daemon.v1.UpdateMarketStrategyReply';
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
proto.tdex.daemon.v1.GetFeeFragmenterAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.GetFeeFragmenterAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetFeeFragmenterAddressRequest.displayName = 'proto.tdex.daemon.v1.GetFeeFragmenterAddressRequest';
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
proto.tdex.daemon.v1.GetFeeFragmenterAddressReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex.daemon.v1.GetFeeFragmenterAddressReply.repeatedFields_, null);
};
goog.inherits(proto.tdex.daemon.v1.GetFeeFragmenterAddressReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetFeeFragmenterAddressReply.displayName = 'proto.tdex.daemon.v1.GetFeeFragmenterAddressReply';
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
proto.tdex.daemon.v1.ListFeeFragmenterAddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.ListFeeFragmenterAddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ListFeeFragmenterAddressesRequest.displayName = 'proto.tdex.daemon.v1.ListFeeFragmenterAddressesRequest';
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
proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply.repeatedFields_, null);
};
goog.inherits(proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply.displayName = 'proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply';
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
proto.tdex.daemon.v1.GetFeeFragmenterBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.GetFeeFragmenterBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetFeeFragmenterBalanceRequest.displayName = 'proto.tdex.daemon.v1.GetFeeFragmenterBalanceRequest';
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
proto.tdex.daemon.v1.GetFeeFragmenterBalanceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.GetFeeFragmenterBalanceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetFeeFragmenterBalanceReply.displayName = 'proto.tdex.daemon.v1.GetFeeFragmenterBalanceReply';
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
proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest.displayName = 'proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest';
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
proto.tdex.daemon.v1.FragmenterSplitFundsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.FragmenterSplitFundsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.FragmenterSplitFundsReply.displayName = 'proto.tdex.daemon.v1.FragmenterSplitFundsReply';
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
proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest.displayName = 'proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest';
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
proto.tdex.daemon.v1.WithdrawFeeFragmenterReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.WithdrawFeeFragmenterReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.WithdrawFeeFragmenterReply.displayName = 'proto.tdex.daemon.v1.WithdrawFeeFragmenterReply';
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
proto.tdex.daemon.v1.GetMarketFragmenterAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.GetMarketFragmenterAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetMarketFragmenterAddressRequest.displayName = 'proto.tdex.daemon.v1.GetMarketFragmenterAddressRequest';
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
proto.tdex.daemon.v1.GetMarketFragmenterAddressReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex.daemon.v1.GetMarketFragmenterAddressReply.repeatedFields_, null);
};
goog.inherits(proto.tdex.daemon.v1.GetMarketFragmenterAddressReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetMarketFragmenterAddressReply.displayName = 'proto.tdex.daemon.v1.GetMarketFragmenterAddressReply';
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
proto.tdex.daemon.v1.ListMarketFragmenterAddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.ListMarketFragmenterAddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ListMarketFragmenterAddressesRequest.displayName = 'proto.tdex.daemon.v1.ListMarketFragmenterAddressesRequest';
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
proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply.repeatedFields_, null);
};
goog.inherits(proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply.displayName = 'proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply';
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
proto.tdex.daemon.v1.GetMarketFragmenterBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.GetMarketFragmenterBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetMarketFragmenterBalanceRequest.displayName = 'proto.tdex.daemon.v1.GetMarketFragmenterBalanceRequest';
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
proto.tdex.daemon.v1.GetMarketFragmenterBalanceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.GetMarketFragmenterBalanceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetMarketFragmenterBalanceReply.displayName = 'proto.tdex.daemon.v1.GetMarketFragmenterBalanceReply';
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
proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest.displayName = 'proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest';
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
proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest.displayName = 'proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest';
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
proto.tdex.daemon.v1.WithdrawMarketFragmenterReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.WithdrawMarketFragmenterReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.WithdrawMarketFragmenterReply.displayName = 'proto.tdex.daemon.v1.WithdrawMarketFragmenterReply';
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
proto.tdex.daemon.v1.ListTradesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.ListTradesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ListTradesRequest.displayName = 'proto.tdex.daemon.v1.ListTradesRequest';
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
proto.tdex.daemon.v1.ListTradesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex.daemon.v1.ListTradesReply.repeatedFields_, null);
};
goog.inherits(proto.tdex.daemon.v1.ListTradesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ListTradesReply.displayName = 'proto.tdex.daemon.v1.ListTradesReply';
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
proto.tdex.daemon.v1.ReloadUtxosRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.ReloadUtxosRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ReloadUtxosRequest.displayName = 'proto.tdex.daemon.v1.ReloadUtxosRequest';
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
proto.tdex.daemon.v1.ReloadUtxosReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.ReloadUtxosReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ReloadUtxosReply.displayName = 'proto.tdex.daemon.v1.ReloadUtxosReply';
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
proto.tdex.daemon.v1.ListUtxosRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.ListUtxosRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ListUtxosRequest.displayName = 'proto.tdex.daemon.v1.ListUtxosRequest';
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
proto.tdex.daemon.v1.ListUtxosReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex.daemon.v1.ListUtxosReply.repeatedFields_, null);
};
goog.inherits(proto.tdex.daemon.v1.ListUtxosReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ListUtxosReply.displayName = 'proto.tdex.daemon.v1.ListUtxosReply';
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
proto.tdex.daemon.v1.AddWebhookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.AddWebhookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.AddWebhookRequest.displayName = 'proto.tdex.daemon.v1.AddWebhookRequest';
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
proto.tdex.daemon.v1.AddWebhookReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.AddWebhookReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.AddWebhookReply.displayName = 'proto.tdex.daemon.v1.AddWebhookReply';
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
proto.tdex.daemon.v1.RemoveWebhookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.RemoveWebhookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.RemoveWebhookRequest.displayName = 'proto.tdex.daemon.v1.RemoveWebhookRequest';
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
proto.tdex.daemon.v1.RemoveWebhookReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.RemoveWebhookReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.RemoveWebhookReply.displayName = 'proto.tdex.daemon.v1.RemoveWebhookReply';
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
proto.tdex.daemon.v1.ListWebhooksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.ListWebhooksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ListWebhooksRequest.displayName = 'proto.tdex.daemon.v1.ListWebhooksRequest';
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
proto.tdex.daemon.v1.ListWebhooksReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex.daemon.v1.ListWebhooksReply.repeatedFields_, null);
};
goog.inherits(proto.tdex.daemon.v1.ListWebhooksReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ListWebhooksReply.displayName = 'proto.tdex.daemon.v1.ListWebhooksReply';
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
proto.tdex.daemon.v1.ListDepositsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.ListDepositsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ListDepositsRequest.displayName = 'proto.tdex.daemon.v1.ListDepositsRequest';
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
proto.tdex.daemon.v1.ListDepositsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex.daemon.v1.ListDepositsReply.repeatedFields_, null);
};
goog.inherits(proto.tdex.daemon.v1.ListDepositsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ListDepositsReply.displayName = 'proto.tdex.daemon.v1.ListDepositsReply';
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
proto.tdex.daemon.v1.ListWithdrawalsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.ListWithdrawalsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ListWithdrawalsRequest.displayName = 'proto.tdex.daemon.v1.ListWithdrawalsRequest';
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
proto.tdex.daemon.v1.ListWithdrawalsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex.daemon.v1.ListWithdrawalsReply.repeatedFields_, null);
};
goog.inherits(proto.tdex.daemon.v1.ListWithdrawalsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.ListWithdrawalsReply.displayName = 'proto.tdex.daemon.v1.ListWithdrawalsReply';
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
proto.tdex.daemon.v1.AccountInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.AccountInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.AccountInfo.displayName = 'proto.tdex.daemon.v1.AccountInfo';
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
proto.tdex.daemon.v1.MarketInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.MarketInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.MarketInfo.displayName = 'proto.tdex.daemon.v1.MarketInfo';
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
proto.tdex.daemon.v1.UtxoInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.UtxoInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.UtxoInfo.displayName = 'proto.tdex.daemon.v1.UtxoInfo';
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
proto.tdex.daemon.v1.TradeStatusInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.TradeStatusInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.TradeStatusInfo.displayName = 'proto.tdex.daemon.v1.TradeStatusInfo';
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
proto.tdex.daemon.v1.SwapInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.SwapInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.SwapInfo.displayName = 'proto.tdex.daemon.v1.SwapInfo';
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
proto.tdex.daemon.v1.SwapFailInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.SwapFailInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.SwapFailInfo.displayName = 'proto.tdex.daemon.v1.SwapFailInfo';
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
proto.tdex.daemon.v1.TradeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.TradeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.TradeInfo.displayName = 'proto.tdex.daemon.v1.TradeInfo';
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
proto.tdex.daemon.v1.FeeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.FeeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.FeeInfo.displayName = 'proto.tdex.daemon.v1.FeeInfo';
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
proto.tdex.daemon.v1.TxOutpoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.TxOutpoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.TxOutpoint.displayName = 'proto.tdex.daemon.v1.TxOutpoint';
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
proto.tdex.daemon.v1.TradePrice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.TradePrice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.TradePrice.displayName = 'proto.tdex.daemon.v1.TradePrice';
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
proto.tdex.daemon.v1.WebhookInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.WebhookInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.WebhookInfo.displayName = 'proto.tdex.daemon.v1.WebhookInfo';
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
proto.tdex.daemon.v1.Deposit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.Deposit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.Deposit.displayName = 'proto.tdex.daemon.v1.Deposit';
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
proto.tdex.daemon.v1.Withdrawal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.Withdrawal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.Withdrawal.displayName = 'proto.tdex.daemon.v1.Withdrawal';
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
proto.tdex.daemon.v1.Page = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.Page, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.Page.displayName = 'proto.tdex.daemon.v1.Page';
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
proto.tdex.daemon.v1.GetMarketReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.GetMarketReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetMarketReportRequest.displayName = 'proto.tdex.daemon.v1.GetMarketReportRequest';
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
proto.tdex.daemon.v1.GetMarketReportReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.GetMarketReportReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.GetMarketReportReply.displayName = 'proto.tdex.daemon.v1.GetMarketReportReply';
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
proto.tdex.daemon.v1.MarketReport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tdex.daemon.v1.MarketReport.repeatedFields_, null);
};
goog.inherits(proto.tdex.daemon.v1.MarketReport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.MarketReport.displayName = 'proto.tdex.daemon.v1.MarketReport';
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
proto.tdex.daemon.v1.MarketCollectedFees = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.MarketCollectedFees, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.MarketCollectedFees.displayName = 'proto.tdex.daemon.v1.MarketCollectedFees';
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
proto.tdex.daemon.v1.MarketVolume = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.MarketVolume, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.MarketVolume.displayName = 'proto.tdex.daemon.v1.MarketVolume';
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
proto.tdex.daemon.v1.TimeRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.TimeRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.TimeRange.displayName = 'proto.tdex.daemon.v1.TimeRange';
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
proto.tdex.daemon.v1.CustomPeriod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tdex.daemon.v1.CustomPeriod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tdex.daemon.v1.CustomPeriod.displayName = 'proto.tdex.daemon.v1.CustomPeriod';
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
proto.tdex.daemon.v1.GetInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetInfoRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.GetInfoRequest}
 */
proto.tdex.daemon.v1.GetInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetInfoRequest;
  return proto.tdex.daemon.v1.GetInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetInfoRequest}
 */
proto.tdex.daemon.v1.GetInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.GetInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex.daemon.v1.GetInfoReply.repeatedFields_ = [3];



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
proto.tdex.daemon.v1.GetInfoReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetInfoReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetInfoReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetInfoReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    rootPath: jspb.Message.getFieldWithDefault(msg, 1, ""),
    masterBlindingKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    accountInfoList: jspb.Message.toObjectList(msg.getAccountInfoList(),
    proto.tdex.daemon.v1.AccountInfo.toObject, includeInstance),
    network: jspb.Message.getFieldWithDefault(msg, 4, ""),
    buildData: (f = msg.getBuildData()) && proto.tdex.daemon.v1.BuildInfo.toObject(includeInstance, f),
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
 * @return {!proto.tdex.daemon.v1.GetInfoReply}
 */
proto.tdex.daemon.v1.GetInfoReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetInfoReply;
  return proto.tdex.daemon.v1.GetInfoReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetInfoReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetInfoReply}
 */
proto.tdex.daemon.v1.GetInfoReply.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tdex.daemon.v1.AccountInfo;
      reader.readMessage(value,proto.tdex.daemon.v1.AccountInfo.deserializeBinaryFromReader);
      msg.addAccountInfo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetwork(value);
      break;
    case 5:
      var value = new proto.tdex.daemon.v1.BuildInfo;
      reader.readMessage(value,proto.tdex.daemon.v1.BuildInfo.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.GetInfoReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetInfoReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetInfoReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetInfoReply.serializeBinaryToWriter = function(message, writer) {
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
      proto.tdex.daemon.v1.AccountInfo.serializeBinaryToWriter
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
      proto.tdex.daemon.v1.BuildInfo.serializeBinaryToWriter
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
proto.tdex.daemon.v1.GetInfoReply.prototype.getRootPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.GetInfoReply} returns this
 */
proto.tdex.daemon.v1.GetInfoReply.prototype.setRootPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string master_blinding_key = 2;
 * @return {string}
 */
proto.tdex.daemon.v1.GetInfoReply.prototype.getMasterBlindingKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.GetInfoReply} returns this
 */
proto.tdex.daemon.v1.GetInfoReply.prototype.setMasterBlindingKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated AccountInfo account_info = 3;
 * @return {!Array<!proto.tdex.daemon.v1.AccountInfo>}
 */
proto.tdex.daemon.v1.GetInfoReply.prototype.getAccountInfoList = function() {
  return /** @type{!Array<!proto.tdex.daemon.v1.AccountInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tdex.daemon.v1.AccountInfo, 3));
};


/**
 * @param {!Array<!proto.tdex.daemon.v1.AccountInfo>} value
 * @return {!proto.tdex.daemon.v1.GetInfoReply} returns this
*/
proto.tdex.daemon.v1.GetInfoReply.prototype.setAccountInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.tdex.daemon.v1.AccountInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex.daemon.v1.AccountInfo}
 */
proto.tdex.daemon.v1.GetInfoReply.prototype.addAccountInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.tdex.daemon.v1.AccountInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex.daemon.v1.GetInfoReply} returns this
 */
proto.tdex.daemon.v1.GetInfoReply.prototype.clearAccountInfoList = function() {
  return this.setAccountInfoList([]);
};


/**
 * optional string network = 4;
 * @return {string}
 */
proto.tdex.daemon.v1.GetInfoReply.prototype.getNetwork = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.GetInfoReply} returns this
 */
proto.tdex.daemon.v1.GetInfoReply.prototype.setNetwork = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional BuildInfo build_data = 5;
 * @return {?proto.tdex.daemon.v1.BuildInfo}
 */
proto.tdex.daemon.v1.GetInfoReply.prototype.getBuildData = function() {
  return /** @type{?proto.tdex.daemon.v1.BuildInfo} */ (
    jspb.Message.getWrapperField(this, proto.tdex.daemon.v1.BuildInfo, 5));
};


/**
 * @param {?proto.tdex.daemon.v1.BuildInfo|undefined} value
 * @return {!proto.tdex.daemon.v1.GetInfoReply} returns this
*/
proto.tdex.daemon.v1.GetInfoReply.prototype.setBuildData = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.GetInfoReply} returns this
 */
proto.tdex.daemon.v1.GetInfoReply.prototype.clearBuildData = function() {
  return this.setBuildData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.GetInfoReply.prototype.hasBuildData = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string fixed_base_asset = 6;
 * @return {string}
 */
proto.tdex.daemon.v1.GetInfoReply.prototype.getFixedBaseAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.GetInfoReply} returns this
 */
proto.tdex.daemon.v1.GetInfoReply.prototype.setFixedBaseAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string fixed_quote_asset = 7;
 * @return {string}
 */
proto.tdex.daemon.v1.GetInfoReply.prototype.getFixedQuoteAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.GetInfoReply} returns this
 */
proto.tdex.daemon.v1.GetInfoReply.prototype.setFixedQuoteAsset = function(value) {
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
proto.tdex.daemon.v1.BuildInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.BuildInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.BuildInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.BuildInfo.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.BuildInfo}
 */
proto.tdex.daemon.v1.BuildInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.BuildInfo;
  return proto.tdex.daemon.v1.BuildInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.BuildInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.BuildInfo}
 */
proto.tdex.daemon.v1.BuildInfo.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.BuildInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.BuildInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.BuildInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.BuildInfo.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.BuildInfo.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.BuildInfo} returns this
 */
proto.tdex.daemon.v1.BuildInfo.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string commit = 2;
 * @return {string}
 */
proto.tdex.daemon.v1.BuildInfo.prototype.getCommit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.BuildInfo} returns this
 */
proto.tdex.daemon.v1.BuildInfo.prototype.setCommit = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string date = 3;
 * @return {string}
 */
proto.tdex.daemon.v1.BuildInfo.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.BuildInfo} returns this
 */
proto.tdex.daemon.v1.BuildInfo.prototype.setDate = function(value) {
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
proto.tdex.daemon.v1.GetFeeAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetFeeAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetFeeAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetFeeAddressRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.GetFeeAddressRequest}
 */
proto.tdex.daemon.v1.GetFeeAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetFeeAddressRequest;
  return proto.tdex.daemon.v1.GetFeeAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetFeeAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetFeeAddressRequest}
 */
proto.tdex.daemon.v1.GetFeeAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.GetFeeAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetFeeAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetFeeAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetFeeAddressRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.GetFeeAddressRequest.prototype.getNumOfAddresses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.GetFeeAddressRequest} returns this
 */
proto.tdex.daemon.v1.GetFeeAddressRequest.prototype.setNumOfAddresses = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex.daemon.v1.GetFeeAddressReply.repeatedFields_ = [1];



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
proto.tdex.daemon.v1.GetFeeAddressReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetFeeAddressReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetFeeAddressReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetFeeAddressReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    tdex_v1_types_pb.AddressWithBlindingKey.toObject, includeInstance)
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
 * @return {!proto.tdex.daemon.v1.GetFeeAddressReply}
 */
proto.tdex.daemon.v1.GetFeeAddressReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetFeeAddressReply;
  return proto.tdex.daemon.v1.GetFeeAddressReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetFeeAddressReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetFeeAddressReply}
 */
proto.tdex.daemon.v1.GetFeeAddressReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.AddressWithBlindingKey;
      reader.readMessage(value,tdex_v1_types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.GetFeeAddressReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetFeeAddressReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetFeeAddressReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetFeeAddressReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tdex_v1_types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated tdex.v1.AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.tdex.v1.AddressWithBlindingKey>}
 */
proto.tdex.daemon.v1.GetFeeAddressReply.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.tdex.v1.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex_v1_types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.tdex.v1.AddressWithBlindingKey>} value
 * @return {!proto.tdex.daemon.v1.GetFeeAddressReply} returns this
*/
proto.tdex.daemon.v1.GetFeeAddressReply.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex.v1.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex.v1.AddressWithBlindingKey}
 */
proto.tdex.daemon.v1.GetFeeAddressReply.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex.v1.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex.daemon.v1.GetFeeAddressReply} returns this
 */
proto.tdex.daemon.v1.GetFeeAddressReply.prototype.clearAddressWithBlindingKeyList = function() {
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
proto.tdex.daemon.v1.ListFeeAddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ListFeeAddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ListFeeAddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListFeeAddressesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.ListFeeAddressesRequest}
 */
proto.tdex.daemon.v1.ListFeeAddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ListFeeAddressesRequest;
  return proto.tdex.daemon.v1.ListFeeAddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ListFeeAddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ListFeeAddressesRequest}
 */
proto.tdex.daemon.v1.ListFeeAddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.ListFeeAddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ListFeeAddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ListFeeAddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListFeeAddressesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex.daemon.v1.ListFeeAddressesReply.repeatedFields_ = [1];



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
proto.tdex.daemon.v1.ListFeeAddressesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ListFeeAddressesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ListFeeAddressesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListFeeAddressesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    tdex_v1_types_pb.AddressWithBlindingKey.toObject, includeInstance)
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
 * @return {!proto.tdex.daemon.v1.ListFeeAddressesReply}
 */
proto.tdex.daemon.v1.ListFeeAddressesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ListFeeAddressesReply;
  return proto.tdex.daemon.v1.ListFeeAddressesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ListFeeAddressesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ListFeeAddressesReply}
 */
proto.tdex.daemon.v1.ListFeeAddressesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.AddressWithBlindingKey;
      reader.readMessage(value,tdex_v1_types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.ListFeeAddressesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ListFeeAddressesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ListFeeAddressesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListFeeAddressesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tdex_v1_types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated tdex.v1.AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.tdex.v1.AddressWithBlindingKey>}
 */
proto.tdex.daemon.v1.ListFeeAddressesReply.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.tdex.v1.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex_v1_types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.tdex.v1.AddressWithBlindingKey>} value
 * @return {!proto.tdex.daemon.v1.ListFeeAddressesReply} returns this
*/
proto.tdex.daemon.v1.ListFeeAddressesReply.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex.v1.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex.v1.AddressWithBlindingKey}
 */
proto.tdex.daemon.v1.ListFeeAddressesReply.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex.v1.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex.daemon.v1.ListFeeAddressesReply} returns this
 */
proto.tdex.daemon.v1.ListFeeAddressesReply.prototype.clearAddressWithBlindingKeyList = function() {
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
proto.tdex.daemon.v1.GetFeeBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetFeeBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetFeeBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetFeeBalanceRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.GetFeeBalanceRequest}
 */
proto.tdex.daemon.v1.GetFeeBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetFeeBalanceRequest;
  return proto.tdex.daemon.v1.GetFeeBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetFeeBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetFeeBalanceRequest}
 */
proto.tdex.daemon.v1.GetFeeBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.GetFeeBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetFeeBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetFeeBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetFeeBalanceRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.GetFeeBalanceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetFeeBalanceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetFeeBalanceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetFeeBalanceReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.GetFeeBalanceReply}
 */
proto.tdex.daemon.v1.GetFeeBalanceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetFeeBalanceReply;
  return proto.tdex.daemon.v1.GetFeeBalanceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetFeeBalanceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetFeeBalanceReply}
 */
proto.tdex.daemon.v1.GetFeeBalanceReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.GetFeeBalanceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetFeeBalanceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetFeeBalanceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetFeeBalanceReply.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.GetFeeBalanceReply.prototype.getAvailableBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.GetFeeBalanceReply} returns this
 */
proto.tdex.daemon.v1.GetFeeBalanceReply.prototype.setAvailableBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 total_balance = 2;
 * @return {number}
 */
proto.tdex.daemon.v1.GetFeeBalanceReply.prototype.getTotalBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.GetFeeBalanceReply} returns this
 */
proto.tdex.daemon.v1.GetFeeBalanceReply.prototype.setTotalBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex.daemon.v1.ClaimFeeDepositsRequest.repeatedFields_ = [1];



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
proto.tdex.daemon.v1.ClaimFeeDepositsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ClaimFeeDepositsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ClaimFeeDepositsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ClaimFeeDepositsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    outpointsList: jspb.Message.toObjectList(msg.getOutpointsList(),
    proto.tdex.daemon.v1.TxOutpoint.toObject, includeInstance)
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
 * @return {!proto.tdex.daemon.v1.ClaimFeeDepositsRequest}
 */
proto.tdex.daemon.v1.ClaimFeeDepositsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ClaimFeeDepositsRequest;
  return proto.tdex.daemon.v1.ClaimFeeDepositsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ClaimFeeDepositsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ClaimFeeDepositsRequest}
 */
proto.tdex.daemon.v1.ClaimFeeDepositsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tdex.daemon.v1.TxOutpoint;
      reader.readMessage(value,proto.tdex.daemon.v1.TxOutpoint.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.ClaimFeeDepositsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ClaimFeeDepositsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ClaimFeeDepositsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ClaimFeeDepositsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutpointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tdex.daemon.v1.TxOutpoint.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TxOutpoint outpoints = 1;
 * @return {!Array<!proto.tdex.daemon.v1.TxOutpoint>}
 */
proto.tdex.daemon.v1.ClaimFeeDepositsRequest.prototype.getOutpointsList = function() {
  return /** @type{!Array<!proto.tdex.daemon.v1.TxOutpoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tdex.daemon.v1.TxOutpoint, 1));
};


/**
 * @param {!Array<!proto.tdex.daemon.v1.TxOutpoint>} value
 * @return {!proto.tdex.daemon.v1.ClaimFeeDepositsRequest} returns this
*/
proto.tdex.daemon.v1.ClaimFeeDepositsRequest.prototype.setOutpointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex.daemon.v1.TxOutpoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex.daemon.v1.TxOutpoint}
 */
proto.tdex.daemon.v1.ClaimFeeDepositsRequest.prototype.addOutpoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex.daemon.v1.TxOutpoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex.daemon.v1.ClaimFeeDepositsRequest} returns this
 */
proto.tdex.daemon.v1.ClaimFeeDepositsRequest.prototype.clearOutpointsList = function() {
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
proto.tdex.daemon.v1.ClaimFeeDepositsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ClaimFeeDepositsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ClaimFeeDepositsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ClaimFeeDepositsReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.ClaimFeeDepositsReply}
 */
proto.tdex.daemon.v1.ClaimFeeDepositsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ClaimFeeDepositsReply;
  return proto.tdex.daemon.v1.ClaimFeeDepositsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ClaimFeeDepositsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ClaimFeeDepositsReply}
 */
proto.tdex.daemon.v1.ClaimFeeDepositsReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.ClaimFeeDepositsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ClaimFeeDepositsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ClaimFeeDepositsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ClaimFeeDepositsReply.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.WithdrawFeeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.WithdrawFeeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.WithdrawFeeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.WithdrawFeeRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.WithdrawFeeRequest}
 */
proto.tdex.daemon.v1.WithdrawFeeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.WithdrawFeeRequest;
  return proto.tdex.daemon.v1.WithdrawFeeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.WithdrawFeeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.WithdrawFeeRequest}
 */
proto.tdex.daemon.v1.WithdrawFeeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.WithdrawFeeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.WithdrawFeeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.WithdrawFeeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.WithdrawFeeRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.WithdrawFeeRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.WithdrawFeeRequest} returns this
 */
proto.tdex.daemon.v1.WithdrawFeeRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 millisats_per_byte = 2;
 * @return {number}
 */
proto.tdex.daemon.v1.WithdrawFeeRequest.prototype.getMillisatsPerByte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.WithdrawFeeRequest} returns this
 */
proto.tdex.daemon.v1.WithdrawFeeRequest.prototype.setMillisatsPerByte = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.tdex.daemon.v1.WithdrawFeeRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.WithdrawFeeRequest} returns this
 */
proto.tdex.daemon.v1.WithdrawFeeRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string asset = 4;
 * @return {string}
 */
proto.tdex.daemon.v1.WithdrawFeeRequest.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.WithdrawFeeRequest} returns this
 */
proto.tdex.daemon.v1.WithdrawFeeRequest.prototype.setAsset = function(value) {
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
proto.tdex.daemon.v1.WithdrawFeeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.WithdrawFeeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.WithdrawFeeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.WithdrawFeeReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.WithdrawFeeReply}
 */
proto.tdex.daemon.v1.WithdrawFeeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.WithdrawFeeReply;
  return proto.tdex.daemon.v1.WithdrawFeeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.WithdrawFeeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.WithdrawFeeReply}
 */
proto.tdex.daemon.v1.WithdrawFeeReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.WithdrawFeeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.WithdrawFeeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.WithdrawFeeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.WithdrawFeeReply.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.WithdrawFeeReply.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.WithdrawFeeReply} returns this
 */
proto.tdex.daemon.v1.WithdrawFeeReply.prototype.setTxid = function(value) {
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
proto.tdex.daemon.v1.NewMarketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.NewMarketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.NewMarketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.NewMarketRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.NewMarketRequest}
 */
proto.tdex.daemon.v1.NewMarketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.NewMarketRequest;
  return proto.tdex.daemon.v1.NewMarketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.NewMarketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.NewMarketRequest}
 */
proto.tdex.daemon.v1.NewMarketRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.NewMarketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.NewMarketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.NewMarketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.NewMarketRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.NewMarketRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex.daemon.v1.NewMarketRequest} returns this
*/
proto.tdex.daemon.v1.NewMarketRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.NewMarketRequest} returns this
 */
proto.tdex.daemon.v1.NewMarketRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.NewMarketRequest.prototype.hasMarket = function() {
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
proto.tdex.daemon.v1.NewMarketReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.NewMarketReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.NewMarketReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.NewMarketReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.NewMarketReply}
 */
proto.tdex.daemon.v1.NewMarketReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.NewMarketReply;
  return proto.tdex.daemon.v1.NewMarketReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.NewMarketReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.NewMarketReply}
 */
proto.tdex.daemon.v1.NewMarketReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.NewMarketReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.NewMarketReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.NewMarketReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.NewMarketReply.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.GetMarketInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetMarketInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetMarketInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketInfoRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.GetMarketInfoRequest}
 */
proto.tdex.daemon.v1.GetMarketInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetMarketInfoRequest;
  return proto.tdex.daemon.v1.GetMarketInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetMarketInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetMarketInfoRequest}
 */
proto.tdex.daemon.v1.GetMarketInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.GetMarketInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetMarketInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetMarketInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketInfoRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.GetMarketInfoRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex.daemon.v1.GetMarketInfoRequest} returns this
*/
proto.tdex.daemon.v1.GetMarketInfoRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.GetMarketInfoRequest} returns this
 */
proto.tdex.daemon.v1.GetMarketInfoRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.GetMarketInfoRequest.prototype.hasMarket = function() {
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
proto.tdex.daemon.v1.GetMarketInfoReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetMarketInfoReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetMarketInfoReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketInfoReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && proto.tdex.daemon.v1.MarketInfo.toObject(includeInstance, f)
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
 * @return {!proto.tdex.daemon.v1.GetMarketInfoReply}
 */
proto.tdex.daemon.v1.GetMarketInfoReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetMarketInfoReply;
  return proto.tdex.daemon.v1.GetMarketInfoReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetMarketInfoReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetMarketInfoReply}
 */
proto.tdex.daemon.v1.GetMarketInfoReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tdex.daemon.v1.MarketInfo;
      reader.readMessage(value,proto.tdex.daemon.v1.MarketInfo.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.GetMarketInfoReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetMarketInfoReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetMarketInfoReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketInfoReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tdex.daemon.v1.MarketInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional MarketInfo info = 1;
 * @return {?proto.tdex.daemon.v1.MarketInfo}
 */
proto.tdex.daemon.v1.GetMarketInfoReply.prototype.getInfo = function() {
  return /** @type{?proto.tdex.daemon.v1.MarketInfo} */ (
    jspb.Message.getWrapperField(this, proto.tdex.daemon.v1.MarketInfo, 1));
};


/**
 * @param {?proto.tdex.daemon.v1.MarketInfo|undefined} value
 * @return {!proto.tdex.daemon.v1.GetMarketInfoReply} returns this
*/
proto.tdex.daemon.v1.GetMarketInfoReply.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.GetMarketInfoReply} returns this
 */
proto.tdex.daemon.v1.GetMarketInfoReply.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.GetMarketInfoReply.prototype.hasInfo = function() {
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
proto.tdex.daemon.v1.GetMarketAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetMarketAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetMarketAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketAddressRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.GetMarketAddressRequest}
 */
proto.tdex.daemon.v1.GetMarketAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetMarketAddressRequest;
  return proto.tdex.daemon.v1.GetMarketAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetMarketAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetMarketAddressRequest}
 */
proto.tdex.daemon.v1.GetMarketAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.GetMarketAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetMarketAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetMarketAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketAddressRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.GetMarketAddressRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex.daemon.v1.GetMarketAddressRequest} returns this
*/
proto.tdex.daemon.v1.GetMarketAddressRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.GetMarketAddressRequest} returns this
 */
proto.tdex.daemon.v1.GetMarketAddressRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.GetMarketAddressRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 num_of_addresses = 2;
 * @return {number}
 */
proto.tdex.daemon.v1.GetMarketAddressRequest.prototype.getNumOfAddresses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.GetMarketAddressRequest} returns this
 */
proto.tdex.daemon.v1.GetMarketAddressRequest.prototype.setNumOfAddresses = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex.daemon.v1.GetMarketAddressReply.repeatedFields_ = [1];



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
proto.tdex.daemon.v1.GetMarketAddressReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetMarketAddressReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetMarketAddressReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketAddressReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    tdex_v1_types_pb.AddressWithBlindingKey.toObject, includeInstance)
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
 * @return {!proto.tdex.daemon.v1.GetMarketAddressReply}
 */
proto.tdex.daemon.v1.GetMarketAddressReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetMarketAddressReply;
  return proto.tdex.daemon.v1.GetMarketAddressReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetMarketAddressReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetMarketAddressReply}
 */
proto.tdex.daemon.v1.GetMarketAddressReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.AddressWithBlindingKey;
      reader.readMessage(value,tdex_v1_types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.GetMarketAddressReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetMarketAddressReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetMarketAddressReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketAddressReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tdex_v1_types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated tdex.v1.AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.tdex.v1.AddressWithBlindingKey>}
 */
proto.tdex.daemon.v1.GetMarketAddressReply.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.tdex.v1.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex_v1_types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.tdex.v1.AddressWithBlindingKey>} value
 * @return {!proto.tdex.daemon.v1.GetMarketAddressReply} returns this
*/
proto.tdex.daemon.v1.GetMarketAddressReply.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex.v1.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex.v1.AddressWithBlindingKey}
 */
proto.tdex.daemon.v1.GetMarketAddressReply.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex.v1.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex.daemon.v1.GetMarketAddressReply} returns this
 */
proto.tdex.daemon.v1.GetMarketAddressReply.prototype.clearAddressWithBlindingKeyList = function() {
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
proto.tdex.daemon.v1.ListMarketAddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ListMarketAddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ListMarketAddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListMarketAddressesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.ListMarketAddressesRequest}
 */
proto.tdex.daemon.v1.ListMarketAddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ListMarketAddressesRequest;
  return proto.tdex.daemon.v1.ListMarketAddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ListMarketAddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ListMarketAddressesRequest}
 */
proto.tdex.daemon.v1.ListMarketAddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.ListMarketAddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ListMarketAddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ListMarketAddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListMarketAddressesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.ListMarketAddressesRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex.daemon.v1.ListMarketAddressesRequest} returns this
*/
proto.tdex.daemon.v1.ListMarketAddressesRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.ListMarketAddressesRequest} returns this
 */
proto.tdex.daemon.v1.ListMarketAddressesRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.ListMarketAddressesRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex.daemon.v1.ListMarketAddressesReply.repeatedFields_ = [1];



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
proto.tdex.daemon.v1.ListMarketAddressesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ListMarketAddressesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ListMarketAddressesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListMarketAddressesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    tdex_v1_types_pb.AddressWithBlindingKey.toObject, includeInstance)
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
 * @return {!proto.tdex.daemon.v1.ListMarketAddressesReply}
 */
proto.tdex.daemon.v1.ListMarketAddressesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ListMarketAddressesReply;
  return proto.tdex.daemon.v1.ListMarketAddressesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ListMarketAddressesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ListMarketAddressesReply}
 */
proto.tdex.daemon.v1.ListMarketAddressesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.AddressWithBlindingKey;
      reader.readMessage(value,tdex_v1_types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.ListMarketAddressesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ListMarketAddressesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ListMarketAddressesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListMarketAddressesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tdex_v1_types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated tdex.v1.AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.tdex.v1.AddressWithBlindingKey>}
 */
proto.tdex.daemon.v1.ListMarketAddressesReply.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.tdex.v1.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex_v1_types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.tdex.v1.AddressWithBlindingKey>} value
 * @return {!proto.tdex.daemon.v1.ListMarketAddressesReply} returns this
*/
proto.tdex.daemon.v1.ListMarketAddressesReply.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex.v1.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex.v1.AddressWithBlindingKey}
 */
proto.tdex.daemon.v1.ListMarketAddressesReply.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex.v1.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex.daemon.v1.ListMarketAddressesReply} returns this
 */
proto.tdex.daemon.v1.ListMarketAddressesReply.prototype.clearAddressWithBlindingKeyList = function() {
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
proto.tdex.daemon.v1.GetMarketBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetMarketBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetMarketBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketBalanceRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.GetMarketBalanceRequest}
 */
proto.tdex.daemon.v1.GetMarketBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetMarketBalanceRequest;
  return proto.tdex.daemon.v1.GetMarketBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetMarketBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetMarketBalanceRequest}
 */
proto.tdex.daemon.v1.GetMarketBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.GetMarketBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetMarketBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetMarketBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketBalanceRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.GetMarketBalanceRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex.daemon.v1.GetMarketBalanceRequest} returns this
*/
proto.tdex.daemon.v1.GetMarketBalanceRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.GetMarketBalanceRequest} returns this
 */
proto.tdex.daemon.v1.GetMarketBalanceRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.GetMarketBalanceRequest.prototype.hasMarket = function() {
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
proto.tdex.daemon.v1.GetMarketBalanceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetMarketBalanceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetMarketBalanceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketBalanceReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.GetMarketBalanceReply}
 */
proto.tdex.daemon.v1.GetMarketBalanceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetMarketBalanceReply;
  return proto.tdex.daemon.v1.GetMarketBalanceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetMarketBalanceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetMarketBalanceReply}
 */
proto.tdex.daemon.v1.GetMarketBalanceReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.GetMarketBalanceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetMarketBalanceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetMarketBalanceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketBalanceReply.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.GetMarketBalanceReply.prototype.getAvailableBalance = function() {
  return /** @type{?proto.tdex.v1.Balance} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Balance, 1));
};


/**
 * @param {?proto.tdex.v1.Balance|undefined} value
 * @return {!proto.tdex.daemon.v1.GetMarketBalanceReply} returns this
*/
proto.tdex.daemon.v1.GetMarketBalanceReply.prototype.setAvailableBalance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.GetMarketBalanceReply} returns this
 */
proto.tdex.daemon.v1.GetMarketBalanceReply.prototype.clearAvailableBalance = function() {
  return this.setAvailableBalance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.GetMarketBalanceReply.prototype.hasAvailableBalance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional tdex.v1.Balance total_balance = 2;
 * @return {?proto.tdex.v1.Balance}
 */
proto.tdex.daemon.v1.GetMarketBalanceReply.prototype.getTotalBalance = function() {
  return /** @type{?proto.tdex.v1.Balance} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Balance, 2));
};


/**
 * @param {?proto.tdex.v1.Balance|undefined} value
 * @return {!proto.tdex.daemon.v1.GetMarketBalanceReply} returns this
*/
proto.tdex.daemon.v1.GetMarketBalanceReply.prototype.setTotalBalance = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.GetMarketBalanceReply} returns this
 */
proto.tdex.daemon.v1.GetMarketBalanceReply.prototype.clearTotalBalance = function() {
  return this.setTotalBalance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.GetMarketBalanceReply.prototype.hasTotalBalance = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex.daemon.v1.ClaimMarketDepositsRequest.repeatedFields_ = [2];



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
proto.tdex.daemon.v1.ClaimMarketDepositsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ClaimMarketDepositsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ClaimMarketDepositsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ClaimMarketDepositsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && tdex_v1_types_pb.Market.toObject(includeInstance, f),
    outpointsList: jspb.Message.toObjectList(msg.getOutpointsList(),
    proto.tdex.daemon.v1.TxOutpoint.toObject, includeInstance)
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
 * @return {!proto.tdex.daemon.v1.ClaimMarketDepositsRequest}
 */
proto.tdex.daemon.v1.ClaimMarketDepositsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ClaimMarketDepositsRequest;
  return proto.tdex.daemon.v1.ClaimMarketDepositsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ClaimMarketDepositsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ClaimMarketDepositsRequest}
 */
proto.tdex.daemon.v1.ClaimMarketDepositsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tdex.daemon.v1.TxOutpoint;
      reader.readMessage(value,proto.tdex.daemon.v1.TxOutpoint.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.ClaimMarketDepositsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ClaimMarketDepositsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ClaimMarketDepositsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ClaimMarketDepositsRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.tdex.daemon.v1.TxOutpoint.serializeBinaryToWriter
    );
  }
};


/**
 * optional tdex.v1.Market market = 1;
 * @return {?proto.tdex.v1.Market}
 */
proto.tdex.daemon.v1.ClaimMarketDepositsRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex.daemon.v1.ClaimMarketDepositsRequest} returns this
*/
proto.tdex.daemon.v1.ClaimMarketDepositsRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.ClaimMarketDepositsRequest} returns this
 */
proto.tdex.daemon.v1.ClaimMarketDepositsRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.ClaimMarketDepositsRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated TxOutpoint outpoints = 2;
 * @return {!Array<!proto.tdex.daemon.v1.TxOutpoint>}
 */
proto.tdex.daemon.v1.ClaimMarketDepositsRequest.prototype.getOutpointsList = function() {
  return /** @type{!Array<!proto.tdex.daemon.v1.TxOutpoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tdex.daemon.v1.TxOutpoint, 2));
};


/**
 * @param {!Array<!proto.tdex.daemon.v1.TxOutpoint>} value
 * @return {!proto.tdex.daemon.v1.ClaimMarketDepositsRequest} returns this
*/
proto.tdex.daemon.v1.ClaimMarketDepositsRequest.prototype.setOutpointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tdex.daemon.v1.TxOutpoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex.daemon.v1.TxOutpoint}
 */
proto.tdex.daemon.v1.ClaimMarketDepositsRequest.prototype.addOutpoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tdex.daemon.v1.TxOutpoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex.daemon.v1.ClaimMarketDepositsRequest} returns this
 */
proto.tdex.daemon.v1.ClaimMarketDepositsRequest.prototype.clearOutpointsList = function() {
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
proto.tdex.daemon.v1.ClaimMarketDepositsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ClaimMarketDepositsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ClaimMarketDepositsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ClaimMarketDepositsReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.ClaimMarketDepositsReply}
 */
proto.tdex.daemon.v1.ClaimMarketDepositsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ClaimMarketDepositsReply;
  return proto.tdex.daemon.v1.ClaimMarketDepositsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ClaimMarketDepositsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ClaimMarketDepositsReply}
 */
proto.tdex.daemon.v1.ClaimMarketDepositsReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.ClaimMarketDepositsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ClaimMarketDepositsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ClaimMarketDepositsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ClaimMarketDepositsReply.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.OpenMarketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.OpenMarketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.OpenMarketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.OpenMarketRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.OpenMarketRequest}
 */
proto.tdex.daemon.v1.OpenMarketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.OpenMarketRequest;
  return proto.tdex.daemon.v1.OpenMarketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.OpenMarketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.OpenMarketRequest}
 */
proto.tdex.daemon.v1.OpenMarketRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.OpenMarketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.OpenMarketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.OpenMarketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.OpenMarketRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.OpenMarketRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex.daemon.v1.OpenMarketRequest} returns this
*/
proto.tdex.daemon.v1.OpenMarketRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.OpenMarketRequest} returns this
 */
proto.tdex.daemon.v1.OpenMarketRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.OpenMarketRequest.prototype.hasMarket = function() {
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
proto.tdex.daemon.v1.OpenMarketReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.OpenMarketReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.OpenMarketReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.OpenMarketReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.OpenMarketReply}
 */
proto.tdex.daemon.v1.OpenMarketReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.OpenMarketReply;
  return proto.tdex.daemon.v1.OpenMarketReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.OpenMarketReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.OpenMarketReply}
 */
proto.tdex.daemon.v1.OpenMarketReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.OpenMarketReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.OpenMarketReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.OpenMarketReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.OpenMarketReply.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.CloseMarketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.CloseMarketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.CloseMarketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.CloseMarketRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.CloseMarketRequest}
 */
proto.tdex.daemon.v1.CloseMarketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.CloseMarketRequest;
  return proto.tdex.daemon.v1.CloseMarketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.CloseMarketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.CloseMarketRequest}
 */
proto.tdex.daemon.v1.CloseMarketRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.CloseMarketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.CloseMarketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.CloseMarketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.CloseMarketRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.CloseMarketRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex.daemon.v1.CloseMarketRequest} returns this
*/
proto.tdex.daemon.v1.CloseMarketRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.CloseMarketRequest} returns this
 */
proto.tdex.daemon.v1.CloseMarketRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.CloseMarketRequest.prototype.hasMarket = function() {
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
proto.tdex.daemon.v1.CloseMarketReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.CloseMarketReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.CloseMarketReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.CloseMarketReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.CloseMarketReply}
 */
proto.tdex.daemon.v1.CloseMarketReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.CloseMarketReply;
  return proto.tdex.daemon.v1.CloseMarketReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.CloseMarketReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.CloseMarketReply}
 */
proto.tdex.daemon.v1.CloseMarketReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.CloseMarketReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.CloseMarketReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.CloseMarketReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.CloseMarketReply.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.ListMarketsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ListMarketsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ListMarketsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListMarketsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.ListMarketsRequest}
 */
proto.tdex.daemon.v1.ListMarketsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ListMarketsRequest;
  return proto.tdex.daemon.v1.ListMarketsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ListMarketsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ListMarketsRequest}
 */
proto.tdex.daemon.v1.ListMarketsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.ListMarketsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ListMarketsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ListMarketsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListMarketsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex.daemon.v1.ListMarketsReply.repeatedFields_ = [1];



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
proto.tdex.daemon.v1.ListMarketsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ListMarketsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ListMarketsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListMarketsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketsList: jspb.Message.toObjectList(msg.getMarketsList(),
    proto.tdex.daemon.v1.MarketInfo.toObject, includeInstance)
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
 * @return {!proto.tdex.daemon.v1.ListMarketsReply}
 */
proto.tdex.daemon.v1.ListMarketsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ListMarketsReply;
  return proto.tdex.daemon.v1.ListMarketsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ListMarketsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ListMarketsReply}
 */
proto.tdex.daemon.v1.ListMarketsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tdex.daemon.v1.MarketInfo;
      reader.readMessage(value,proto.tdex.daemon.v1.MarketInfo.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.ListMarketsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ListMarketsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ListMarketsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListMarketsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tdex.daemon.v1.MarketInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MarketInfo markets = 1;
 * @return {!Array<!proto.tdex.daemon.v1.MarketInfo>}
 */
proto.tdex.daemon.v1.ListMarketsReply.prototype.getMarketsList = function() {
  return /** @type{!Array<!proto.tdex.daemon.v1.MarketInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tdex.daemon.v1.MarketInfo, 1));
};


/**
 * @param {!Array<!proto.tdex.daemon.v1.MarketInfo>} value
 * @return {!proto.tdex.daemon.v1.ListMarketsReply} returns this
*/
proto.tdex.daemon.v1.ListMarketsReply.prototype.setMarketsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex.daemon.v1.MarketInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex.daemon.v1.MarketInfo}
 */
proto.tdex.daemon.v1.ListMarketsReply.prototype.addMarkets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex.daemon.v1.MarketInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex.daemon.v1.ListMarketsReply} returns this
 */
proto.tdex.daemon.v1.ListMarketsReply.prototype.clearMarketsList = function() {
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
proto.tdex.daemon.v1.DropMarketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.DropMarketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.DropMarketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.DropMarketRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.DropMarketRequest}
 */
proto.tdex.daemon.v1.DropMarketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.DropMarketRequest;
  return proto.tdex.daemon.v1.DropMarketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.DropMarketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.DropMarketRequest}
 */
proto.tdex.daemon.v1.DropMarketRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.DropMarketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.DropMarketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.DropMarketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.DropMarketRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.DropMarketRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex.daemon.v1.DropMarketRequest} returns this
*/
proto.tdex.daemon.v1.DropMarketRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.DropMarketRequest} returns this
 */
proto.tdex.daemon.v1.DropMarketRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.DropMarketRequest.prototype.hasMarket = function() {
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
proto.tdex.daemon.v1.DropMarketReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.DropMarketReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.DropMarketReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.DropMarketReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.DropMarketReply}
 */
proto.tdex.daemon.v1.DropMarketReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.DropMarketReply;
  return proto.tdex.daemon.v1.DropMarketReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.DropMarketReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.DropMarketReply}
 */
proto.tdex.daemon.v1.DropMarketReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.DropMarketReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.DropMarketReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.DropMarketReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.DropMarketReply.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && tdex_v1_types_pb.Market.toObject(includeInstance, f),
    page: (f = msg.getPage()) && proto.tdex.daemon.v1.Page.toObject(includeInstance, f)
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
 * @return {!proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest}
 */
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest;
  return proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest}
 */
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tdex.daemon.v1.Page;
      reader.readMessage(value,proto.tdex.daemon.v1.Page.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.tdex.daemon.v1.Page.serializeBinaryToWriter
    );
  }
};


/**
 * optional tdex.v1.Market market = 1;
 * @return {?proto.tdex.v1.Market}
 */
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest} returns this
*/
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest} returns this
 */
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Page page = 2;
 * @return {?proto.tdex.daemon.v1.Page}
 */
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest.prototype.getPage = function() {
  return /** @type{?proto.tdex.daemon.v1.Page} */ (
    jspb.Message.getWrapperField(this, proto.tdex.daemon.v1.Page, 2));
};


/**
 * @param {?proto.tdex.daemon.v1.Page|undefined} value
 * @return {!proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest} returns this
*/
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest} returns this
 */
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply.repeatedFields_ = [1];



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
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    collectedFeesList: jspb.Message.toObjectList(msg.getCollectedFeesList(),
    proto.tdex.daemon.v1.FeeInfo.toObject, includeInstance),
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
 * @return {!proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply}
 */
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply;
  return proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply}
 */
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tdex.daemon.v1.FeeInfo;
      reader.readMessage(value,proto.tdex.daemon.v1.FeeInfo.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCollectedFeesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tdex.daemon.v1.FeeInfo.serializeBinaryToWriter
    );
  }
  f = message.getTotalCollectedFeesPerAssetMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt64);
  }
};


/**
 * repeated FeeInfo collected_fees = 1;
 * @return {!Array<!proto.tdex.daemon.v1.FeeInfo>}
 */
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply.prototype.getCollectedFeesList = function() {
  return /** @type{!Array<!proto.tdex.daemon.v1.FeeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tdex.daemon.v1.FeeInfo, 1));
};


/**
 * @param {!Array<!proto.tdex.daemon.v1.FeeInfo>} value
 * @return {!proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply} returns this
*/
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply.prototype.setCollectedFeesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex.daemon.v1.FeeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex.daemon.v1.FeeInfo}
 */
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply.prototype.addCollectedFees = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex.daemon.v1.FeeInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply} returns this
 */
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply.prototype.clearCollectedFeesList = function() {
  return this.setCollectedFeesList([]);
};


/**
 * map<string, int64> total_collected_fees_per_asset = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply.prototype.getTotalCollectedFeesPerAssetMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply} returns this
 */
proto.tdex.daemon.v1.GetMarketCollectedSwapFeesReply.prototype.clearTotalCollectedFeesPerAssetMap = function() {
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
proto.tdex.daemon.v1.WithdrawMarketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.WithdrawMarketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.WithdrawMarketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.WithdrawMarketRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.WithdrawMarketRequest}
 */
proto.tdex.daemon.v1.WithdrawMarketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.WithdrawMarketRequest;
  return proto.tdex.daemon.v1.WithdrawMarketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.WithdrawMarketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.WithdrawMarketRequest}
 */
proto.tdex.daemon.v1.WithdrawMarketRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.WithdrawMarketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.WithdrawMarketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.WithdrawMarketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.WithdrawMarketRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.WithdrawMarketRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex.daemon.v1.WithdrawMarketRequest} returns this
*/
proto.tdex.daemon.v1.WithdrawMarketRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.WithdrawMarketRequest} returns this
 */
proto.tdex.daemon.v1.WithdrawMarketRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.WithdrawMarketRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional tdex.v1.Balance balance_to_withdraw = 2;
 * @return {?proto.tdex.v1.Balance}
 */
proto.tdex.daemon.v1.WithdrawMarketRequest.prototype.getBalanceToWithdraw = function() {
  return /** @type{?proto.tdex.v1.Balance} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Balance, 2));
};


/**
 * @param {?proto.tdex.v1.Balance|undefined} value
 * @return {!proto.tdex.daemon.v1.WithdrawMarketRequest} returns this
*/
proto.tdex.daemon.v1.WithdrawMarketRequest.prototype.setBalanceToWithdraw = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.WithdrawMarketRequest} returns this
 */
proto.tdex.daemon.v1.WithdrawMarketRequest.prototype.clearBalanceToWithdraw = function() {
  return this.setBalanceToWithdraw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.WithdrawMarketRequest.prototype.hasBalanceToWithdraw = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 millisats_per_byte = 3;
 * @return {number}
 */
proto.tdex.daemon.v1.WithdrawMarketRequest.prototype.getMillisatsPerByte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.WithdrawMarketRequest} returns this
 */
proto.tdex.daemon.v1.WithdrawMarketRequest.prototype.setMillisatsPerByte = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string address = 4;
 * @return {string}
 */
proto.tdex.daemon.v1.WithdrawMarketRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.WithdrawMarketRequest} returns this
 */
proto.tdex.daemon.v1.WithdrawMarketRequest.prototype.setAddress = function(value) {
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
proto.tdex.daemon.v1.WithdrawMarketReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.WithdrawMarketReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.WithdrawMarketReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.WithdrawMarketReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.WithdrawMarketReply}
 */
proto.tdex.daemon.v1.WithdrawMarketReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.WithdrawMarketReply;
  return proto.tdex.daemon.v1.WithdrawMarketReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.WithdrawMarketReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.WithdrawMarketReply}
 */
proto.tdex.daemon.v1.WithdrawMarketReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.WithdrawMarketReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.WithdrawMarketReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.WithdrawMarketReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.WithdrawMarketReply.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.WithdrawMarketReply.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.WithdrawMarketReply} returns this
 */
proto.tdex.daemon.v1.WithdrawMarketReply.prototype.setTxid = function(value) {
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
proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest}
 */
proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest;
  return proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest}
 */
proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest} returns this
*/
proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest} returns this
 */
proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 basis_point = 2;
 * @return {number}
 */
proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest.prototype.getBasisPoint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest} returns this
 */
proto.tdex.daemon.v1.UpdateMarketPercentageFeeRequest.prototype.setBasisPoint = function(value) {
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
proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest}
 */
proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest;
  return proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest}
 */
proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest} returns this
*/
proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest} returns this
 */
proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional tdex.v1.Fixed fixed = 2;
 * @return {?proto.tdex.v1.Fixed}
 */
proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest.prototype.getFixed = function() {
  return /** @type{?proto.tdex.v1.Fixed} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Fixed, 2));
};


/**
 * @param {?proto.tdex.v1.Fixed|undefined} value
 * @return {!proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest} returns this
*/
proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest.prototype.setFixed = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest} returns this
 */
proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest.prototype.clearFixed = function() {
  return this.setFixed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.UpdateMarketFixedFeeRequest.prototype.hasFixed = function() {
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
proto.tdex.daemon.v1.UpdateMarketFeeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.UpdateMarketFeeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.UpdateMarketFeeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.UpdateMarketFeeReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.UpdateMarketFeeReply}
 */
proto.tdex.daemon.v1.UpdateMarketFeeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.UpdateMarketFeeReply;
  return proto.tdex.daemon.v1.UpdateMarketFeeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.UpdateMarketFeeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.UpdateMarketFeeReply}
 */
proto.tdex.daemon.v1.UpdateMarketFeeReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.UpdateMarketFeeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.UpdateMarketFeeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.UpdateMarketFeeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.UpdateMarketFeeReply.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.UpdateMarketFeeReply.prototype.getMarketWithFee = function() {
  return /** @type{?proto.tdex.v1.MarketWithFee} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.MarketWithFee, 1));
};


/**
 * @param {?proto.tdex.v1.MarketWithFee|undefined} value
 * @return {!proto.tdex.daemon.v1.UpdateMarketFeeReply} returns this
*/
proto.tdex.daemon.v1.UpdateMarketFeeReply.prototype.setMarketWithFee = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.UpdateMarketFeeReply} returns this
 */
proto.tdex.daemon.v1.UpdateMarketFeeReply.prototype.clearMarketWithFee = function() {
  return this.setMarketWithFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.UpdateMarketFeeReply.prototype.hasMarketWithFee = function() {
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
proto.tdex.daemon.v1.UpdateMarketPriceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.UpdateMarketPriceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.UpdateMarketPriceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.UpdateMarketPriceRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.UpdateMarketPriceRequest}
 */
proto.tdex.daemon.v1.UpdateMarketPriceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.UpdateMarketPriceRequest;
  return proto.tdex.daemon.v1.UpdateMarketPriceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.UpdateMarketPriceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.UpdateMarketPriceRequest}
 */
proto.tdex.daemon.v1.UpdateMarketPriceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.UpdateMarketPriceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.UpdateMarketPriceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.UpdateMarketPriceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.UpdateMarketPriceRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.UpdateMarketPriceRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex.daemon.v1.UpdateMarketPriceRequest} returns this
*/
proto.tdex.daemon.v1.UpdateMarketPriceRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.UpdateMarketPriceRequest} returns this
 */
proto.tdex.daemon.v1.UpdateMarketPriceRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.UpdateMarketPriceRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional tdex.v1.Price price = 2;
 * @return {?proto.tdex.v1.Price}
 */
proto.tdex.daemon.v1.UpdateMarketPriceRequest.prototype.getPrice = function() {
  return /** @type{?proto.tdex.v1.Price} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Price, 2));
};


/**
 * @param {?proto.tdex.v1.Price|undefined} value
 * @return {!proto.tdex.daemon.v1.UpdateMarketPriceRequest} returns this
*/
proto.tdex.daemon.v1.UpdateMarketPriceRequest.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.UpdateMarketPriceRequest} returns this
 */
proto.tdex.daemon.v1.UpdateMarketPriceRequest.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.UpdateMarketPriceRequest.prototype.hasPrice = function() {
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
proto.tdex.daemon.v1.UpdateMarketPriceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.UpdateMarketPriceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.UpdateMarketPriceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.UpdateMarketPriceReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.UpdateMarketPriceReply}
 */
proto.tdex.daemon.v1.UpdateMarketPriceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.UpdateMarketPriceReply;
  return proto.tdex.daemon.v1.UpdateMarketPriceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.UpdateMarketPriceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.UpdateMarketPriceReply}
 */
proto.tdex.daemon.v1.UpdateMarketPriceReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.UpdateMarketPriceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.UpdateMarketPriceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.UpdateMarketPriceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.UpdateMarketPriceReply.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.UpdateMarketStrategyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.UpdateMarketStrategyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.UpdateMarketStrategyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.UpdateMarketStrategyRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.UpdateMarketStrategyRequest}
 */
proto.tdex.daemon.v1.UpdateMarketStrategyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.UpdateMarketStrategyRequest;
  return proto.tdex.daemon.v1.UpdateMarketStrategyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.UpdateMarketStrategyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.UpdateMarketStrategyRequest}
 */
proto.tdex.daemon.v1.UpdateMarketStrategyRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.tdex.daemon.v1.StrategyType} */ (reader.readEnum());
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
proto.tdex.daemon.v1.UpdateMarketStrategyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.UpdateMarketStrategyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.UpdateMarketStrategyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.UpdateMarketStrategyRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.UpdateMarketStrategyRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex.daemon.v1.UpdateMarketStrategyRequest} returns this
*/
proto.tdex.daemon.v1.UpdateMarketStrategyRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.UpdateMarketStrategyRequest} returns this
 */
proto.tdex.daemon.v1.UpdateMarketStrategyRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.UpdateMarketStrategyRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional StrategyType strategy_type = 2;
 * @return {!proto.tdex.daemon.v1.StrategyType}
 */
proto.tdex.daemon.v1.UpdateMarketStrategyRequest.prototype.getStrategyType = function() {
  return /** @type {!proto.tdex.daemon.v1.StrategyType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.tdex.daemon.v1.StrategyType} value
 * @return {!proto.tdex.daemon.v1.UpdateMarketStrategyRequest} returns this
 */
proto.tdex.daemon.v1.UpdateMarketStrategyRequest.prototype.setStrategyType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string metadata = 3;
 * @return {string}
 */
proto.tdex.daemon.v1.UpdateMarketStrategyRequest.prototype.getMetadata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.UpdateMarketStrategyRequest} returns this
 */
proto.tdex.daemon.v1.UpdateMarketStrategyRequest.prototype.setMetadata = function(value) {
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
proto.tdex.daemon.v1.UpdateMarketStrategyReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.UpdateMarketStrategyReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.UpdateMarketStrategyReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.UpdateMarketStrategyReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.UpdateMarketStrategyReply}
 */
proto.tdex.daemon.v1.UpdateMarketStrategyReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.UpdateMarketStrategyReply;
  return proto.tdex.daemon.v1.UpdateMarketStrategyReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.UpdateMarketStrategyReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.UpdateMarketStrategyReply}
 */
proto.tdex.daemon.v1.UpdateMarketStrategyReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.UpdateMarketStrategyReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.UpdateMarketStrategyReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.UpdateMarketStrategyReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.UpdateMarketStrategyReply.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.GetFeeFragmenterAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetFeeFragmenterAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetFeeFragmenterAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetFeeFragmenterAddressRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.GetFeeFragmenterAddressRequest}
 */
proto.tdex.daemon.v1.GetFeeFragmenterAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetFeeFragmenterAddressRequest;
  return proto.tdex.daemon.v1.GetFeeFragmenterAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetFeeFragmenterAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetFeeFragmenterAddressRequest}
 */
proto.tdex.daemon.v1.GetFeeFragmenterAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.GetFeeFragmenterAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetFeeFragmenterAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetFeeFragmenterAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetFeeFragmenterAddressRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.GetFeeFragmenterAddressRequest.prototype.getNumOfAddresses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.GetFeeFragmenterAddressRequest} returns this
 */
proto.tdex.daemon.v1.GetFeeFragmenterAddressRequest.prototype.setNumOfAddresses = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex.daemon.v1.GetFeeFragmenterAddressReply.repeatedFields_ = [1];



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
proto.tdex.daemon.v1.GetFeeFragmenterAddressReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetFeeFragmenterAddressReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetFeeFragmenterAddressReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetFeeFragmenterAddressReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    tdex_v1_types_pb.AddressWithBlindingKey.toObject, includeInstance)
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
 * @return {!proto.tdex.daemon.v1.GetFeeFragmenterAddressReply}
 */
proto.tdex.daemon.v1.GetFeeFragmenterAddressReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetFeeFragmenterAddressReply;
  return proto.tdex.daemon.v1.GetFeeFragmenterAddressReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetFeeFragmenterAddressReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetFeeFragmenterAddressReply}
 */
proto.tdex.daemon.v1.GetFeeFragmenterAddressReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.AddressWithBlindingKey;
      reader.readMessage(value,tdex_v1_types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.GetFeeFragmenterAddressReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetFeeFragmenterAddressReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetFeeFragmenterAddressReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetFeeFragmenterAddressReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tdex_v1_types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated tdex.v1.AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.tdex.v1.AddressWithBlindingKey>}
 */
proto.tdex.daemon.v1.GetFeeFragmenterAddressReply.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.tdex.v1.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex_v1_types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.tdex.v1.AddressWithBlindingKey>} value
 * @return {!proto.tdex.daemon.v1.GetFeeFragmenterAddressReply} returns this
*/
proto.tdex.daemon.v1.GetFeeFragmenterAddressReply.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex.v1.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex.v1.AddressWithBlindingKey}
 */
proto.tdex.daemon.v1.GetFeeFragmenterAddressReply.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex.v1.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex.daemon.v1.GetFeeFragmenterAddressReply} returns this
 */
proto.tdex.daemon.v1.GetFeeFragmenterAddressReply.prototype.clearAddressWithBlindingKeyList = function() {
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
proto.tdex.daemon.v1.ListFeeFragmenterAddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ListFeeFragmenterAddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ListFeeFragmenterAddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListFeeFragmenterAddressesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.ListFeeFragmenterAddressesRequest}
 */
proto.tdex.daemon.v1.ListFeeFragmenterAddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ListFeeFragmenterAddressesRequest;
  return proto.tdex.daemon.v1.ListFeeFragmenterAddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ListFeeFragmenterAddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ListFeeFragmenterAddressesRequest}
 */
proto.tdex.daemon.v1.ListFeeFragmenterAddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.ListFeeFragmenterAddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ListFeeFragmenterAddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ListFeeFragmenterAddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListFeeFragmenterAddressesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply.repeatedFields_ = [1];



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
proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    tdex_v1_types_pb.AddressWithBlindingKey.toObject, includeInstance)
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
 * @return {!proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply}
 */
proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply;
  return proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply}
 */
proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.AddressWithBlindingKey;
      reader.readMessage(value,tdex_v1_types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tdex_v1_types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated tdex.v1.AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.tdex.v1.AddressWithBlindingKey>}
 */
proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.tdex.v1.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex_v1_types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.tdex.v1.AddressWithBlindingKey>} value
 * @return {!proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply} returns this
*/
proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex.v1.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex.v1.AddressWithBlindingKey}
 */
proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex.v1.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply} returns this
 */
proto.tdex.daemon.v1.ListFeeFragmenterAddressesReply.prototype.clearAddressWithBlindingKeyList = function() {
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
proto.tdex.daemon.v1.GetFeeFragmenterBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetFeeFragmenterBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetFeeFragmenterBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetFeeFragmenterBalanceRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.GetFeeFragmenterBalanceRequest}
 */
proto.tdex.daemon.v1.GetFeeFragmenterBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetFeeFragmenterBalanceRequest;
  return proto.tdex.daemon.v1.GetFeeFragmenterBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetFeeFragmenterBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetFeeFragmenterBalanceRequest}
 */
proto.tdex.daemon.v1.GetFeeFragmenterBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.GetFeeFragmenterBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetFeeFragmenterBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetFeeFragmenterBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetFeeFragmenterBalanceRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.GetFeeFragmenterBalanceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetFeeFragmenterBalanceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetFeeFragmenterBalanceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetFeeFragmenterBalanceReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    balanceMap: (f = msg.getBalanceMap()) ? f.toObject(includeInstance, proto.tdex.daemon.v1.BalanceInfo.toObject) : []
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
 * @return {!proto.tdex.daemon.v1.GetFeeFragmenterBalanceReply}
 */
proto.tdex.daemon.v1.GetFeeFragmenterBalanceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetFeeFragmenterBalanceReply;
  return proto.tdex.daemon.v1.GetFeeFragmenterBalanceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetFeeFragmenterBalanceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetFeeFragmenterBalanceReply}
 */
proto.tdex.daemon.v1.GetFeeFragmenterBalanceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getBalanceMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.tdex.daemon.v1.BalanceInfo.deserializeBinaryFromReader, "", new proto.tdex.daemon.v1.BalanceInfo());
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
proto.tdex.daemon.v1.GetFeeFragmenterBalanceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetFeeFragmenterBalanceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetFeeFragmenterBalanceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetFeeFragmenterBalanceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalanceMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.tdex.daemon.v1.BalanceInfo.serializeBinaryToWriter);
  }
};


/**
 * map<string, BalanceInfo> balance = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.tdex.daemon.v1.BalanceInfo>}
 */
proto.tdex.daemon.v1.GetFeeFragmenterBalanceReply.prototype.getBalanceMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.tdex.daemon.v1.BalanceInfo>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.tdex.daemon.v1.BalanceInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.tdex.daemon.v1.GetFeeFragmenterBalanceReply} returns this
 */
proto.tdex.daemon.v1.GetFeeFragmenterBalanceReply.prototype.clearBalanceMap = function() {
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
proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest}
 */
proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest;
  return proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest}
 */
proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest.prototype.getMaxFragments = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest} returns this
 */
proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest.prototype.setMaxFragments = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 millisats_per_byte = 2;
 * @return {number}
 */
proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest.prototype.getMillisatsPerByte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest} returns this
 */
proto.tdex.daemon.v1.FeeFragmenterSplitFundsRequest.prototype.setMillisatsPerByte = function(value) {
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
proto.tdex.daemon.v1.FragmenterSplitFundsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.FragmenterSplitFundsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.FragmenterSplitFundsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.FragmenterSplitFundsReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.FragmenterSplitFundsReply}
 */
proto.tdex.daemon.v1.FragmenterSplitFundsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.FragmenterSplitFundsReply;
  return proto.tdex.daemon.v1.FragmenterSplitFundsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.FragmenterSplitFundsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.FragmenterSplitFundsReply}
 */
proto.tdex.daemon.v1.FragmenterSplitFundsReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.FragmenterSplitFundsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.FragmenterSplitFundsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.FragmenterSplitFundsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.FragmenterSplitFundsReply.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.FragmenterSplitFundsReply.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.FragmenterSplitFundsReply} returns this
 */
proto.tdex.daemon.v1.FragmenterSplitFundsReply.prototype.setMessage = function(value) {
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
proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest}
 */
proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest;
  return proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest}
 */
proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest} returns this
 */
proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 millisats_per_byte = 2;
 * @return {number}
 */
proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest.prototype.getMillisatsPerByte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest} returns this
 */
proto.tdex.daemon.v1.WithdrawFeeFragmenterRequest.prototype.setMillisatsPerByte = function(value) {
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
proto.tdex.daemon.v1.WithdrawFeeFragmenterReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.WithdrawFeeFragmenterReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.WithdrawFeeFragmenterReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.WithdrawFeeFragmenterReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.WithdrawFeeFragmenterReply}
 */
proto.tdex.daemon.v1.WithdrawFeeFragmenterReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.WithdrawFeeFragmenterReply;
  return proto.tdex.daemon.v1.WithdrawFeeFragmenterReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.WithdrawFeeFragmenterReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.WithdrawFeeFragmenterReply}
 */
proto.tdex.daemon.v1.WithdrawFeeFragmenterReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.WithdrawFeeFragmenterReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.WithdrawFeeFragmenterReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.WithdrawFeeFragmenterReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.WithdrawFeeFragmenterReply.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.WithdrawFeeFragmenterReply.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.WithdrawFeeFragmenterReply} returns this
 */
proto.tdex.daemon.v1.WithdrawFeeFragmenterReply.prototype.setTxid = function(value) {
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
proto.tdex.daemon.v1.GetMarketFragmenterAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetMarketFragmenterAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetMarketFragmenterAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketFragmenterAddressRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.GetMarketFragmenterAddressRequest}
 */
proto.tdex.daemon.v1.GetMarketFragmenterAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetMarketFragmenterAddressRequest;
  return proto.tdex.daemon.v1.GetMarketFragmenterAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetMarketFragmenterAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetMarketFragmenterAddressRequest}
 */
proto.tdex.daemon.v1.GetMarketFragmenterAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.GetMarketFragmenterAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetMarketFragmenterAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetMarketFragmenterAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketFragmenterAddressRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.GetMarketFragmenterAddressRequest.prototype.getNumOfAddresses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.GetMarketFragmenterAddressRequest} returns this
 */
proto.tdex.daemon.v1.GetMarketFragmenterAddressRequest.prototype.setNumOfAddresses = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex.daemon.v1.GetMarketFragmenterAddressReply.repeatedFields_ = [1];



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
proto.tdex.daemon.v1.GetMarketFragmenterAddressReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetMarketFragmenterAddressReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetMarketFragmenterAddressReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketFragmenterAddressReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    tdex_v1_types_pb.AddressWithBlindingKey.toObject, includeInstance)
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
 * @return {!proto.tdex.daemon.v1.GetMarketFragmenterAddressReply}
 */
proto.tdex.daemon.v1.GetMarketFragmenterAddressReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetMarketFragmenterAddressReply;
  return proto.tdex.daemon.v1.GetMarketFragmenterAddressReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetMarketFragmenterAddressReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetMarketFragmenterAddressReply}
 */
proto.tdex.daemon.v1.GetMarketFragmenterAddressReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.AddressWithBlindingKey;
      reader.readMessage(value,tdex_v1_types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.GetMarketFragmenterAddressReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetMarketFragmenterAddressReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetMarketFragmenterAddressReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketFragmenterAddressReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tdex_v1_types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated tdex.v1.AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.tdex.v1.AddressWithBlindingKey>}
 */
proto.tdex.daemon.v1.GetMarketFragmenterAddressReply.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.tdex.v1.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex_v1_types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.tdex.v1.AddressWithBlindingKey>} value
 * @return {!proto.tdex.daemon.v1.GetMarketFragmenterAddressReply} returns this
*/
proto.tdex.daemon.v1.GetMarketFragmenterAddressReply.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex.v1.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex.v1.AddressWithBlindingKey}
 */
proto.tdex.daemon.v1.GetMarketFragmenterAddressReply.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex.v1.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex.daemon.v1.GetMarketFragmenterAddressReply} returns this
 */
proto.tdex.daemon.v1.GetMarketFragmenterAddressReply.prototype.clearAddressWithBlindingKeyList = function() {
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
proto.tdex.daemon.v1.ListMarketFragmenterAddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ListMarketFragmenterAddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ListMarketFragmenterAddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListMarketFragmenterAddressesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.ListMarketFragmenterAddressesRequest}
 */
proto.tdex.daemon.v1.ListMarketFragmenterAddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ListMarketFragmenterAddressesRequest;
  return proto.tdex.daemon.v1.ListMarketFragmenterAddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ListMarketFragmenterAddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ListMarketFragmenterAddressesRequest}
 */
proto.tdex.daemon.v1.ListMarketFragmenterAddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.ListMarketFragmenterAddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ListMarketFragmenterAddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ListMarketFragmenterAddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListMarketFragmenterAddressesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply.repeatedFields_ = [1];



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
proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    tdex_v1_types_pb.AddressWithBlindingKey.toObject, includeInstance)
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
 * @return {!proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply}
 */
proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply;
  return proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply}
 */
proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tdex_v1_types_pb.AddressWithBlindingKey;
      reader.readMessage(value,tdex_v1_types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tdex_v1_types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated tdex.v1.AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.tdex.v1.AddressWithBlindingKey>}
 */
proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.tdex.v1.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, tdex_v1_types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.tdex.v1.AddressWithBlindingKey>} value
 * @return {!proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply} returns this
*/
proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex.v1.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex.v1.AddressWithBlindingKey}
 */
proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex.v1.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply} returns this
 */
proto.tdex.daemon.v1.ListMarketFragmenterAddressesReply.prototype.clearAddressWithBlindingKeyList = function() {
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
proto.tdex.daemon.v1.GetMarketFragmenterBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetMarketFragmenterBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetMarketFragmenterBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketFragmenterBalanceRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.GetMarketFragmenterBalanceRequest}
 */
proto.tdex.daemon.v1.GetMarketFragmenterBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetMarketFragmenterBalanceRequest;
  return proto.tdex.daemon.v1.GetMarketFragmenterBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetMarketFragmenterBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetMarketFragmenterBalanceRequest}
 */
proto.tdex.daemon.v1.GetMarketFragmenterBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.GetMarketFragmenterBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetMarketFragmenterBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetMarketFragmenterBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketFragmenterBalanceRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.GetMarketFragmenterBalanceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetMarketFragmenterBalanceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetMarketFragmenterBalanceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketFragmenterBalanceReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    balanceMap: (f = msg.getBalanceMap()) ? f.toObject(includeInstance, proto.tdex.daemon.v1.BalanceInfo.toObject) : []
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
 * @return {!proto.tdex.daemon.v1.GetMarketFragmenterBalanceReply}
 */
proto.tdex.daemon.v1.GetMarketFragmenterBalanceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetMarketFragmenterBalanceReply;
  return proto.tdex.daemon.v1.GetMarketFragmenterBalanceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetMarketFragmenterBalanceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetMarketFragmenterBalanceReply}
 */
proto.tdex.daemon.v1.GetMarketFragmenterBalanceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getBalanceMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.tdex.daemon.v1.BalanceInfo.deserializeBinaryFromReader, "", new proto.tdex.daemon.v1.BalanceInfo());
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
proto.tdex.daemon.v1.GetMarketFragmenterBalanceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetMarketFragmenterBalanceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetMarketFragmenterBalanceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketFragmenterBalanceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalanceMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.tdex.daemon.v1.BalanceInfo.serializeBinaryToWriter);
  }
};


/**
 * map<string, BalanceInfo> balance = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.tdex.daemon.v1.BalanceInfo>}
 */
proto.tdex.daemon.v1.GetMarketFragmenterBalanceReply.prototype.getBalanceMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.tdex.daemon.v1.BalanceInfo>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.tdex.daemon.v1.BalanceInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.tdex.daemon.v1.GetMarketFragmenterBalanceReply} returns this
 */
proto.tdex.daemon.v1.GetMarketFragmenterBalanceReply.prototype.clearBalanceMap = function() {
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
proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest}
 */
proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest;
  return proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest}
 */
proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest} returns this
*/
proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest} returns this
 */
proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 millisats_per_byte = 2;
 * @return {number}
 */
proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest.prototype.getMillisatsPerByte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest} returns this
 */
proto.tdex.daemon.v1.MarketFragmenterSplitFundsRequest.prototype.setMillisatsPerByte = function(value) {
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
proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest}
 */
proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest;
  return proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest}
 */
proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest} returns this
 */
proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 millisats_per_byte = 2;
 * @return {number}
 */
proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest.prototype.getMillisatsPerByte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest} returns this
 */
proto.tdex.daemon.v1.WithdrawMarketFragmenterRequest.prototype.setMillisatsPerByte = function(value) {
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
proto.tdex.daemon.v1.WithdrawMarketFragmenterReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.WithdrawMarketFragmenterReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.WithdrawMarketFragmenterReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.WithdrawMarketFragmenterReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.WithdrawMarketFragmenterReply}
 */
proto.tdex.daemon.v1.WithdrawMarketFragmenterReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.WithdrawMarketFragmenterReply;
  return proto.tdex.daemon.v1.WithdrawMarketFragmenterReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.WithdrawMarketFragmenterReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.WithdrawMarketFragmenterReply}
 */
proto.tdex.daemon.v1.WithdrawMarketFragmenterReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.WithdrawMarketFragmenterReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.WithdrawMarketFragmenterReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.WithdrawMarketFragmenterReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.WithdrawMarketFragmenterReply.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.WithdrawMarketFragmenterReply.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.WithdrawMarketFragmenterReply} returns this
 */
proto.tdex.daemon.v1.WithdrawMarketFragmenterReply.prototype.setTxid = function(value) {
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
proto.tdex.daemon.v1.ListTradesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ListTradesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ListTradesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListTradesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && tdex_v1_types_pb.Market.toObject(includeInstance, f),
    page: (f = msg.getPage()) && proto.tdex.daemon.v1.Page.toObject(includeInstance, f)
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
 * @return {!proto.tdex.daemon.v1.ListTradesRequest}
 */
proto.tdex.daemon.v1.ListTradesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ListTradesRequest;
  return proto.tdex.daemon.v1.ListTradesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ListTradesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ListTradesRequest}
 */
proto.tdex.daemon.v1.ListTradesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tdex.daemon.v1.Page;
      reader.readMessage(value,proto.tdex.daemon.v1.Page.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.ListTradesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ListTradesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ListTradesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListTradesRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.tdex.daemon.v1.Page.serializeBinaryToWriter
    );
  }
};


/**
 * optional tdex.v1.Market market = 1;
 * @return {?proto.tdex.v1.Market}
 */
proto.tdex.daemon.v1.ListTradesRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex.daemon.v1.ListTradesRequest} returns this
*/
proto.tdex.daemon.v1.ListTradesRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.ListTradesRequest} returns this
 */
proto.tdex.daemon.v1.ListTradesRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.ListTradesRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Page page = 2;
 * @return {?proto.tdex.daemon.v1.Page}
 */
proto.tdex.daemon.v1.ListTradesRequest.prototype.getPage = function() {
  return /** @type{?proto.tdex.daemon.v1.Page} */ (
    jspb.Message.getWrapperField(this, proto.tdex.daemon.v1.Page, 2));
};


/**
 * @param {?proto.tdex.daemon.v1.Page|undefined} value
 * @return {!proto.tdex.daemon.v1.ListTradesRequest} returns this
*/
proto.tdex.daemon.v1.ListTradesRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.ListTradesRequest} returns this
 */
proto.tdex.daemon.v1.ListTradesRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.ListTradesRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex.daemon.v1.ListTradesReply.repeatedFields_ = [1];



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
proto.tdex.daemon.v1.ListTradesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ListTradesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ListTradesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListTradesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    proto.tdex.daemon.v1.TradeInfo.toObject, includeInstance)
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
 * @return {!proto.tdex.daemon.v1.ListTradesReply}
 */
proto.tdex.daemon.v1.ListTradesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ListTradesReply;
  return proto.tdex.daemon.v1.ListTradesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ListTradesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ListTradesReply}
 */
proto.tdex.daemon.v1.ListTradesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tdex.daemon.v1.TradeInfo;
      reader.readMessage(value,proto.tdex.daemon.v1.TradeInfo.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.ListTradesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ListTradesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ListTradesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListTradesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tdex.daemon.v1.TradeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TradeInfo trades = 1;
 * @return {!Array<!proto.tdex.daemon.v1.TradeInfo>}
 */
proto.tdex.daemon.v1.ListTradesReply.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.tdex.daemon.v1.TradeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tdex.daemon.v1.TradeInfo, 1));
};


/**
 * @param {!Array<!proto.tdex.daemon.v1.TradeInfo>} value
 * @return {!proto.tdex.daemon.v1.ListTradesReply} returns this
*/
proto.tdex.daemon.v1.ListTradesReply.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex.daemon.v1.TradeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex.daemon.v1.TradeInfo}
 */
proto.tdex.daemon.v1.ListTradesReply.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex.daemon.v1.TradeInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex.daemon.v1.ListTradesReply} returns this
 */
proto.tdex.daemon.v1.ListTradesReply.prototype.clearTradesList = function() {
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
proto.tdex.daemon.v1.ReloadUtxosRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ReloadUtxosRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ReloadUtxosRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ReloadUtxosRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.ReloadUtxosRequest}
 */
proto.tdex.daemon.v1.ReloadUtxosRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ReloadUtxosRequest;
  return proto.tdex.daemon.v1.ReloadUtxosRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ReloadUtxosRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ReloadUtxosRequest}
 */
proto.tdex.daemon.v1.ReloadUtxosRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.ReloadUtxosRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ReloadUtxosRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ReloadUtxosRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ReloadUtxosRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.ReloadUtxosReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ReloadUtxosReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ReloadUtxosReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ReloadUtxosReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.ReloadUtxosReply}
 */
proto.tdex.daemon.v1.ReloadUtxosReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ReloadUtxosReply;
  return proto.tdex.daemon.v1.ReloadUtxosReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ReloadUtxosReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ReloadUtxosReply}
 */
proto.tdex.daemon.v1.ReloadUtxosReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.ReloadUtxosReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ReloadUtxosReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ReloadUtxosReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ReloadUtxosReply.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.ListUtxosRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ListUtxosRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ListUtxosRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListUtxosRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    page: (f = msg.getPage()) && proto.tdex.daemon.v1.Page.toObject(includeInstance, f)
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
 * @return {!proto.tdex.daemon.v1.ListUtxosRequest}
 */
proto.tdex.daemon.v1.ListUtxosRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ListUtxosRequest;
  return proto.tdex.daemon.v1.ListUtxosRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ListUtxosRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ListUtxosRequest}
 */
proto.tdex.daemon.v1.ListUtxosRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tdex.daemon.v1.Page;
      reader.readMessage(value,proto.tdex.daemon.v1.Page.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.ListUtxosRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ListUtxosRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ListUtxosRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListUtxosRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.tdex.daemon.v1.Page.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 account_index = 1;
 * @return {number}
 */
proto.tdex.daemon.v1.ListUtxosRequest.prototype.getAccountIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.ListUtxosRequest} returns this
 */
proto.tdex.daemon.v1.ListUtxosRequest.prototype.setAccountIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Page page = 2;
 * @return {?proto.tdex.daemon.v1.Page}
 */
proto.tdex.daemon.v1.ListUtxosRequest.prototype.getPage = function() {
  return /** @type{?proto.tdex.daemon.v1.Page} */ (
    jspb.Message.getWrapperField(this, proto.tdex.daemon.v1.Page, 2));
};


/**
 * @param {?proto.tdex.daemon.v1.Page|undefined} value
 * @return {!proto.tdex.daemon.v1.ListUtxosRequest} returns this
*/
proto.tdex.daemon.v1.ListUtxosRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.ListUtxosRequest} returns this
 */
proto.tdex.daemon.v1.ListUtxosRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.ListUtxosRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex.daemon.v1.ListUtxosReply.repeatedFields_ = [1,2,3];



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
proto.tdex.daemon.v1.ListUtxosReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ListUtxosReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ListUtxosReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListUtxosReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    unspentsList: jspb.Message.toObjectList(msg.getUnspentsList(),
    proto.tdex.daemon.v1.UtxoInfo.toObject, includeInstance),
    spentsList: jspb.Message.toObjectList(msg.getSpentsList(),
    proto.tdex.daemon.v1.UtxoInfo.toObject, includeInstance),
    locksList: jspb.Message.toObjectList(msg.getLocksList(),
    proto.tdex.daemon.v1.UtxoInfo.toObject, includeInstance)
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
 * @return {!proto.tdex.daemon.v1.ListUtxosReply}
 */
proto.tdex.daemon.v1.ListUtxosReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ListUtxosReply;
  return proto.tdex.daemon.v1.ListUtxosReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ListUtxosReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ListUtxosReply}
 */
proto.tdex.daemon.v1.ListUtxosReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tdex.daemon.v1.UtxoInfo;
      reader.readMessage(value,proto.tdex.daemon.v1.UtxoInfo.deserializeBinaryFromReader);
      msg.addUnspents(value);
      break;
    case 2:
      var value = new proto.tdex.daemon.v1.UtxoInfo;
      reader.readMessage(value,proto.tdex.daemon.v1.UtxoInfo.deserializeBinaryFromReader);
      msg.addSpents(value);
      break;
    case 3:
      var value = new proto.tdex.daemon.v1.UtxoInfo;
      reader.readMessage(value,proto.tdex.daemon.v1.UtxoInfo.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.ListUtxosReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ListUtxosReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ListUtxosReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListUtxosReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnspentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tdex.daemon.v1.UtxoInfo.serializeBinaryToWriter
    );
  }
  f = message.getSpentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tdex.daemon.v1.UtxoInfo.serializeBinaryToWriter
    );
  }
  f = message.getLocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.tdex.daemon.v1.UtxoInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated UtxoInfo unspents = 1;
 * @return {!Array<!proto.tdex.daemon.v1.UtxoInfo>}
 */
proto.tdex.daemon.v1.ListUtxosReply.prototype.getUnspentsList = function() {
  return /** @type{!Array<!proto.tdex.daemon.v1.UtxoInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tdex.daemon.v1.UtxoInfo, 1));
};


/**
 * @param {!Array<!proto.tdex.daemon.v1.UtxoInfo>} value
 * @return {!proto.tdex.daemon.v1.ListUtxosReply} returns this
*/
proto.tdex.daemon.v1.ListUtxosReply.prototype.setUnspentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex.daemon.v1.UtxoInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex.daemon.v1.UtxoInfo}
 */
proto.tdex.daemon.v1.ListUtxosReply.prototype.addUnspents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex.daemon.v1.UtxoInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex.daemon.v1.ListUtxosReply} returns this
 */
proto.tdex.daemon.v1.ListUtxosReply.prototype.clearUnspentsList = function() {
  return this.setUnspentsList([]);
};


/**
 * repeated UtxoInfo spents = 2;
 * @return {!Array<!proto.tdex.daemon.v1.UtxoInfo>}
 */
proto.tdex.daemon.v1.ListUtxosReply.prototype.getSpentsList = function() {
  return /** @type{!Array<!proto.tdex.daemon.v1.UtxoInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tdex.daemon.v1.UtxoInfo, 2));
};


/**
 * @param {!Array<!proto.tdex.daemon.v1.UtxoInfo>} value
 * @return {!proto.tdex.daemon.v1.ListUtxosReply} returns this
*/
proto.tdex.daemon.v1.ListUtxosReply.prototype.setSpentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tdex.daemon.v1.UtxoInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex.daemon.v1.UtxoInfo}
 */
proto.tdex.daemon.v1.ListUtxosReply.prototype.addSpents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tdex.daemon.v1.UtxoInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex.daemon.v1.ListUtxosReply} returns this
 */
proto.tdex.daemon.v1.ListUtxosReply.prototype.clearSpentsList = function() {
  return this.setSpentsList([]);
};


/**
 * repeated UtxoInfo locks = 3;
 * @return {!Array<!proto.tdex.daemon.v1.UtxoInfo>}
 */
proto.tdex.daemon.v1.ListUtxosReply.prototype.getLocksList = function() {
  return /** @type{!Array<!proto.tdex.daemon.v1.UtxoInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tdex.daemon.v1.UtxoInfo, 3));
};


/**
 * @param {!Array<!proto.tdex.daemon.v1.UtxoInfo>} value
 * @return {!proto.tdex.daemon.v1.ListUtxosReply} returns this
*/
proto.tdex.daemon.v1.ListUtxosReply.prototype.setLocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.tdex.daemon.v1.UtxoInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex.daemon.v1.UtxoInfo}
 */
proto.tdex.daemon.v1.ListUtxosReply.prototype.addLocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.tdex.daemon.v1.UtxoInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex.daemon.v1.ListUtxosReply} returns this
 */
proto.tdex.daemon.v1.ListUtxosReply.prototype.clearLocksList = function() {
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
proto.tdex.daemon.v1.AddWebhookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.AddWebhookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.AddWebhookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.AddWebhookRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.AddWebhookRequest}
 */
proto.tdex.daemon.v1.AddWebhookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.AddWebhookRequest;
  return proto.tdex.daemon.v1.AddWebhookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.AddWebhookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.AddWebhookRequest}
 */
proto.tdex.daemon.v1.AddWebhookRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.tdex.daemon.v1.ActionType} */ (reader.readEnum());
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
proto.tdex.daemon.v1.AddWebhookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.AddWebhookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.AddWebhookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.AddWebhookRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.AddWebhookRequest.prototype.getEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.AddWebhookRequest} returns this
 */
proto.tdex.daemon.v1.AddWebhookRequest.prototype.setEndpoint = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ActionType action = 2;
 * @return {!proto.tdex.daemon.v1.ActionType}
 */
proto.tdex.daemon.v1.AddWebhookRequest.prototype.getAction = function() {
  return /** @type {!proto.tdex.daemon.v1.ActionType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.tdex.daemon.v1.ActionType} value
 * @return {!proto.tdex.daemon.v1.AddWebhookRequest} returns this
 */
proto.tdex.daemon.v1.AddWebhookRequest.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string secret = 3;
 * @return {string}
 */
proto.tdex.daemon.v1.AddWebhookRequest.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.AddWebhookRequest} returns this
 */
proto.tdex.daemon.v1.AddWebhookRequest.prototype.setSecret = function(value) {
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
proto.tdex.daemon.v1.AddWebhookReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.AddWebhookReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.AddWebhookReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.AddWebhookReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.AddWebhookReply}
 */
proto.tdex.daemon.v1.AddWebhookReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.AddWebhookReply;
  return proto.tdex.daemon.v1.AddWebhookReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.AddWebhookReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.AddWebhookReply}
 */
proto.tdex.daemon.v1.AddWebhookReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.AddWebhookReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.AddWebhookReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.AddWebhookReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.AddWebhookReply.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.AddWebhookReply.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.AddWebhookReply} returns this
 */
proto.tdex.daemon.v1.AddWebhookReply.prototype.setId = function(value) {
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
proto.tdex.daemon.v1.RemoveWebhookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.RemoveWebhookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.RemoveWebhookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.RemoveWebhookRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.RemoveWebhookRequest}
 */
proto.tdex.daemon.v1.RemoveWebhookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.RemoveWebhookRequest;
  return proto.tdex.daemon.v1.RemoveWebhookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.RemoveWebhookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.RemoveWebhookRequest}
 */
proto.tdex.daemon.v1.RemoveWebhookRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.RemoveWebhookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.RemoveWebhookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.RemoveWebhookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.RemoveWebhookRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.RemoveWebhookRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.RemoveWebhookRequest} returns this
 */
proto.tdex.daemon.v1.RemoveWebhookRequest.prototype.setId = function(value) {
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
proto.tdex.daemon.v1.RemoveWebhookReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.RemoveWebhookReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.RemoveWebhookReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.RemoveWebhookReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.RemoveWebhookReply}
 */
proto.tdex.daemon.v1.RemoveWebhookReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.RemoveWebhookReply;
  return proto.tdex.daemon.v1.RemoveWebhookReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.RemoveWebhookReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.RemoveWebhookReply}
 */
proto.tdex.daemon.v1.RemoveWebhookReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tdex.daemon.v1.RemoveWebhookReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.RemoveWebhookReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.RemoveWebhookReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.RemoveWebhookReply.serializeBinaryToWriter = function(message, writer) {
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
proto.tdex.daemon.v1.ListWebhooksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ListWebhooksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ListWebhooksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListWebhooksRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tdex.daemon.v1.ListWebhooksRequest}
 */
proto.tdex.daemon.v1.ListWebhooksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ListWebhooksRequest;
  return proto.tdex.daemon.v1.ListWebhooksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ListWebhooksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ListWebhooksRequest}
 */
proto.tdex.daemon.v1.ListWebhooksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.tdex.daemon.v1.ActionType} */ (reader.readEnum());
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
proto.tdex.daemon.v1.ListWebhooksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ListWebhooksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ListWebhooksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListWebhooksRequest.serializeBinaryToWriter = function(message, writer) {
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
 * @return {!proto.tdex.daemon.v1.ActionType}
 */
proto.tdex.daemon.v1.ListWebhooksRequest.prototype.getAction = function() {
  return /** @type {!proto.tdex.daemon.v1.ActionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.tdex.daemon.v1.ActionType} value
 * @return {!proto.tdex.daemon.v1.ListWebhooksRequest} returns this
 */
proto.tdex.daemon.v1.ListWebhooksRequest.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex.daemon.v1.ListWebhooksReply.repeatedFields_ = [1];



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
proto.tdex.daemon.v1.ListWebhooksReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ListWebhooksReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ListWebhooksReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListWebhooksReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    webhookInfoList: jspb.Message.toObjectList(msg.getWebhookInfoList(),
    proto.tdex.daemon.v1.WebhookInfo.toObject, includeInstance)
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
 * @return {!proto.tdex.daemon.v1.ListWebhooksReply}
 */
proto.tdex.daemon.v1.ListWebhooksReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ListWebhooksReply;
  return proto.tdex.daemon.v1.ListWebhooksReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ListWebhooksReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ListWebhooksReply}
 */
proto.tdex.daemon.v1.ListWebhooksReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tdex.daemon.v1.WebhookInfo;
      reader.readMessage(value,proto.tdex.daemon.v1.WebhookInfo.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.ListWebhooksReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ListWebhooksReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ListWebhooksReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListWebhooksReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWebhookInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tdex.daemon.v1.WebhookInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WebhookInfo webhook_info = 1;
 * @return {!Array<!proto.tdex.daemon.v1.WebhookInfo>}
 */
proto.tdex.daemon.v1.ListWebhooksReply.prototype.getWebhookInfoList = function() {
  return /** @type{!Array<!proto.tdex.daemon.v1.WebhookInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tdex.daemon.v1.WebhookInfo, 1));
};


/**
 * @param {!Array<!proto.tdex.daemon.v1.WebhookInfo>} value
 * @return {!proto.tdex.daemon.v1.ListWebhooksReply} returns this
*/
proto.tdex.daemon.v1.ListWebhooksReply.prototype.setWebhookInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tdex.daemon.v1.WebhookInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex.daemon.v1.WebhookInfo}
 */
proto.tdex.daemon.v1.ListWebhooksReply.prototype.addWebhookInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tdex.daemon.v1.WebhookInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex.daemon.v1.ListWebhooksReply} returns this
 */
proto.tdex.daemon.v1.ListWebhooksReply.prototype.clearWebhookInfoList = function() {
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
proto.tdex.daemon.v1.ListDepositsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ListDepositsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ListDepositsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListDepositsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    page: (f = msg.getPage()) && proto.tdex.daemon.v1.Page.toObject(includeInstance, f)
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
 * @return {!proto.tdex.daemon.v1.ListDepositsRequest}
 */
proto.tdex.daemon.v1.ListDepositsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ListDepositsRequest;
  return proto.tdex.daemon.v1.ListDepositsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ListDepositsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ListDepositsRequest}
 */
proto.tdex.daemon.v1.ListDepositsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tdex.daemon.v1.Page;
      reader.readMessage(value,proto.tdex.daemon.v1.Page.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.ListDepositsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ListDepositsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ListDepositsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListDepositsRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.tdex.daemon.v1.Page.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 account_index = 1;
 * @return {number}
 */
proto.tdex.daemon.v1.ListDepositsRequest.prototype.getAccountIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.ListDepositsRequest} returns this
 */
proto.tdex.daemon.v1.ListDepositsRequest.prototype.setAccountIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Page page = 2;
 * @return {?proto.tdex.daemon.v1.Page}
 */
proto.tdex.daemon.v1.ListDepositsRequest.prototype.getPage = function() {
  return /** @type{?proto.tdex.daemon.v1.Page} */ (
    jspb.Message.getWrapperField(this, proto.tdex.daemon.v1.Page, 2));
};


/**
 * @param {?proto.tdex.daemon.v1.Page|undefined} value
 * @return {!proto.tdex.daemon.v1.ListDepositsRequest} returns this
*/
proto.tdex.daemon.v1.ListDepositsRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.ListDepositsRequest} returns this
 */
proto.tdex.daemon.v1.ListDepositsRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.ListDepositsRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex.daemon.v1.ListDepositsReply.repeatedFields_ = [2];



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
proto.tdex.daemon.v1.ListDepositsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ListDepositsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ListDepositsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListDepositsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    depositsList: jspb.Message.toObjectList(msg.getDepositsList(),
    proto.tdex.daemon.v1.Deposit.toObject, includeInstance)
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
 * @return {!proto.tdex.daemon.v1.ListDepositsReply}
 */
proto.tdex.daemon.v1.ListDepositsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ListDepositsReply;
  return proto.tdex.daemon.v1.ListDepositsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ListDepositsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ListDepositsReply}
 */
proto.tdex.daemon.v1.ListDepositsReply.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tdex.daemon.v1.Deposit;
      reader.readMessage(value,proto.tdex.daemon.v1.Deposit.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.ListDepositsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ListDepositsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ListDepositsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListDepositsReply.serializeBinaryToWriter = function(message, writer) {
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
      proto.tdex.daemon.v1.Deposit.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 account_index = 1;
 * @return {number}
 */
proto.tdex.daemon.v1.ListDepositsReply.prototype.getAccountIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.ListDepositsReply} returns this
 */
proto.tdex.daemon.v1.ListDepositsReply.prototype.setAccountIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Deposit deposits = 2;
 * @return {!Array<!proto.tdex.daemon.v1.Deposit>}
 */
proto.tdex.daemon.v1.ListDepositsReply.prototype.getDepositsList = function() {
  return /** @type{!Array<!proto.tdex.daemon.v1.Deposit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tdex.daemon.v1.Deposit, 2));
};


/**
 * @param {!Array<!proto.tdex.daemon.v1.Deposit>} value
 * @return {!proto.tdex.daemon.v1.ListDepositsReply} returns this
*/
proto.tdex.daemon.v1.ListDepositsReply.prototype.setDepositsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tdex.daemon.v1.Deposit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex.daemon.v1.Deposit}
 */
proto.tdex.daemon.v1.ListDepositsReply.prototype.addDeposits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tdex.daemon.v1.Deposit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex.daemon.v1.ListDepositsReply} returns this
 */
proto.tdex.daemon.v1.ListDepositsReply.prototype.clearDepositsList = function() {
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
proto.tdex.daemon.v1.ListWithdrawalsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ListWithdrawalsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ListWithdrawalsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListWithdrawalsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    page: (f = msg.getPage()) && proto.tdex.daemon.v1.Page.toObject(includeInstance, f)
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
 * @return {!proto.tdex.daemon.v1.ListWithdrawalsRequest}
 */
proto.tdex.daemon.v1.ListWithdrawalsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ListWithdrawalsRequest;
  return proto.tdex.daemon.v1.ListWithdrawalsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ListWithdrawalsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ListWithdrawalsRequest}
 */
proto.tdex.daemon.v1.ListWithdrawalsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tdex.daemon.v1.Page;
      reader.readMessage(value,proto.tdex.daemon.v1.Page.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.ListWithdrawalsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ListWithdrawalsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ListWithdrawalsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListWithdrawalsRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.tdex.daemon.v1.Page.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 account_index = 1;
 * @return {number}
 */
proto.tdex.daemon.v1.ListWithdrawalsRequest.prototype.getAccountIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.ListWithdrawalsRequest} returns this
 */
proto.tdex.daemon.v1.ListWithdrawalsRequest.prototype.setAccountIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Page page = 2;
 * @return {?proto.tdex.daemon.v1.Page}
 */
proto.tdex.daemon.v1.ListWithdrawalsRequest.prototype.getPage = function() {
  return /** @type{?proto.tdex.daemon.v1.Page} */ (
    jspb.Message.getWrapperField(this, proto.tdex.daemon.v1.Page, 2));
};


/**
 * @param {?proto.tdex.daemon.v1.Page|undefined} value
 * @return {!proto.tdex.daemon.v1.ListWithdrawalsRequest} returns this
*/
proto.tdex.daemon.v1.ListWithdrawalsRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.ListWithdrawalsRequest} returns this
 */
proto.tdex.daemon.v1.ListWithdrawalsRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.ListWithdrawalsRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex.daemon.v1.ListWithdrawalsReply.repeatedFields_ = [2];



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
proto.tdex.daemon.v1.ListWithdrawalsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.ListWithdrawalsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.ListWithdrawalsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListWithdrawalsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    withdrawalsList: jspb.Message.toObjectList(msg.getWithdrawalsList(),
    proto.tdex.daemon.v1.Withdrawal.toObject, includeInstance)
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
 * @return {!proto.tdex.daemon.v1.ListWithdrawalsReply}
 */
proto.tdex.daemon.v1.ListWithdrawalsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.ListWithdrawalsReply;
  return proto.tdex.daemon.v1.ListWithdrawalsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.ListWithdrawalsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.ListWithdrawalsReply}
 */
proto.tdex.daemon.v1.ListWithdrawalsReply.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tdex.daemon.v1.Withdrawal;
      reader.readMessage(value,proto.tdex.daemon.v1.Withdrawal.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.ListWithdrawalsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.ListWithdrawalsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.ListWithdrawalsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.ListWithdrawalsReply.serializeBinaryToWriter = function(message, writer) {
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
      proto.tdex.daemon.v1.Withdrawal.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 account_index = 1;
 * @return {number}
 */
proto.tdex.daemon.v1.ListWithdrawalsReply.prototype.getAccountIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.ListWithdrawalsReply} returns this
 */
proto.tdex.daemon.v1.ListWithdrawalsReply.prototype.setAccountIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Withdrawal withdrawals = 2;
 * @return {!Array<!proto.tdex.daemon.v1.Withdrawal>}
 */
proto.tdex.daemon.v1.ListWithdrawalsReply.prototype.getWithdrawalsList = function() {
  return /** @type{!Array<!proto.tdex.daemon.v1.Withdrawal>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tdex.daemon.v1.Withdrawal, 2));
};


/**
 * @param {!Array<!proto.tdex.daemon.v1.Withdrawal>} value
 * @return {!proto.tdex.daemon.v1.ListWithdrawalsReply} returns this
*/
proto.tdex.daemon.v1.ListWithdrawalsReply.prototype.setWithdrawalsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tdex.daemon.v1.Withdrawal=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex.daemon.v1.Withdrawal}
 */
proto.tdex.daemon.v1.ListWithdrawalsReply.prototype.addWithdrawals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tdex.daemon.v1.Withdrawal, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex.daemon.v1.ListWithdrawalsReply} returns this
 */
proto.tdex.daemon.v1.ListWithdrawalsReply.prototype.clearWithdrawalsList = function() {
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
proto.tdex.daemon.v1.AccountInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.AccountInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.AccountInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.AccountInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    derivationPath: jspb.Message.getFieldWithDefault(msg, 2, ""),
    xpub: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lastExternalDerived: jspb.Message.getFieldWithDefault(msg, 4, 0),
    lastInternalDerived: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.tdex.daemon.v1.AccountInfo}
 */
proto.tdex.daemon.v1.AccountInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.AccountInfo;
  return proto.tdex.daemon.v1.AccountInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.AccountInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.AccountInfo}
 */
proto.tdex.daemon.v1.AccountInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAccountIndex(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDerivationPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setXpub(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLastExternalDerived(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLastInternalDerived(value);
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
proto.tdex.daemon.v1.AccountInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.AccountInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.AccountInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.AccountInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getDerivationPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getXpub();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLastExternalDerived();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getLastInternalDerived();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional uint32 account_index = 1;
 * @return {number}
 */
proto.tdex.daemon.v1.AccountInfo.prototype.getAccountIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.AccountInfo} returns this
 */
proto.tdex.daemon.v1.AccountInfo.prototype.setAccountIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string derivation_path = 2;
 * @return {string}
 */
proto.tdex.daemon.v1.AccountInfo.prototype.getDerivationPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.AccountInfo} returns this
 */
proto.tdex.daemon.v1.AccountInfo.prototype.setDerivationPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string xpub = 3;
 * @return {string}
 */
proto.tdex.daemon.v1.AccountInfo.prototype.getXpub = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.AccountInfo} returns this
 */
proto.tdex.daemon.v1.AccountInfo.prototype.setXpub = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 last_external_derived = 4;
 * @return {number}
 */
proto.tdex.daemon.v1.AccountInfo.prototype.getLastExternalDerived = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.AccountInfo} returns this
 */
proto.tdex.daemon.v1.AccountInfo.prototype.setLastExternalDerived = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 last_internal_derived = 5;
 * @return {number}
 */
proto.tdex.daemon.v1.AccountInfo.prototype.getLastInternalDerived = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.AccountInfo} returns this
 */
proto.tdex.daemon.v1.AccountInfo.prototype.setLastInternalDerived = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
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
proto.tdex.daemon.v1.MarketInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.MarketInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.MarketInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.MarketInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && tdex_v1_types_pb.Market.toObject(includeInstance, f),
    fee: (f = msg.getFee()) && tdex_v1_types_pb.Fee.toObject(includeInstance, f),
    tradable: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    strategyType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    accountIndex: jspb.Message.getFieldWithDefault(msg, 5, 0),
    price: (f = msg.getPrice()) && tdex_v1_types_pb.Price.toObject(includeInstance, f),
    balance: (f = msg.getBalance()) && tdex_v1_types_pb.Balance.toObject(includeInstance, f)
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
 * @return {!proto.tdex.daemon.v1.MarketInfo}
 */
proto.tdex.daemon.v1.MarketInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.MarketInfo;
  return proto.tdex.daemon.v1.MarketInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.MarketInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.MarketInfo}
 */
proto.tdex.daemon.v1.MarketInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new tdex_v1_types_pb.Fee;
      reader.readMessage(value,tdex_v1_types_pb.Fee.deserializeBinaryFromReader);
      msg.setFee(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTradable(value);
      break;
    case 4:
      var value = /** @type {!proto.tdex.daemon.v1.StrategyType} */ (reader.readEnum());
      msg.setStrategyType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAccountIndex(value);
      break;
    case 6:
      var value = new tdex_v1_types_pb.Price;
      reader.readMessage(value,tdex_v1_types_pb.Price.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 7:
      var value = new tdex_v1_types_pb.Balance;
      reader.readMessage(value,tdex_v1_types_pb.Balance.deserializeBinaryFromReader);
      msg.setBalance(value);
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
proto.tdex.daemon.v1.MarketInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.MarketInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.MarketInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.MarketInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tdex_v1_types_pb.Market.serializeBinaryToWriter
    );
  }
  f = message.getFee();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tdex_v1_types_pb.Fee.serializeBinaryToWriter
    );
  }
  f = message.getTradable();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getStrategyType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getAccountIndex();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      tdex_v1_types_pb.Price.serializeBinaryToWriter
    );
  }
  f = message.getBalance();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      tdex_v1_types_pb.Balance.serializeBinaryToWriter
    );
  }
};


/**
 * optional tdex.v1.Market market = 1;
 * @return {?proto.tdex.v1.Market}
 */
proto.tdex.daemon.v1.MarketInfo.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex.daemon.v1.MarketInfo} returns this
*/
proto.tdex.daemon.v1.MarketInfo.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.MarketInfo} returns this
 */
proto.tdex.daemon.v1.MarketInfo.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.MarketInfo.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional tdex.v1.Fee fee = 2;
 * @return {?proto.tdex.v1.Fee}
 */
proto.tdex.daemon.v1.MarketInfo.prototype.getFee = function() {
  return /** @type{?proto.tdex.v1.Fee} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Fee, 2));
};


/**
 * @param {?proto.tdex.v1.Fee|undefined} value
 * @return {!proto.tdex.daemon.v1.MarketInfo} returns this
*/
proto.tdex.daemon.v1.MarketInfo.prototype.setFee = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.MarketInfo} returns this
 */
proto.tdex.daemon.v1.MarketInfo.prototype.clearFee = function() {
  return this.setFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.MarketInfo.prototype.hasFee = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool tradable = 3;
 * @return {boolean}
 */
proto.tdex.daemon.v1.MarketInfo.prototype.getTradable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tdex.daemon.v1.MarketInfo} returns this
 */
proto.tdex.daemon.v1.MarketInfo.prototype.setTradable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional StrategyType strategy_type = 4;
 * @return {!proto.tdex.daemon.v1.StrategyType}
 */
proto.tdex.daemon.v1.MarketInfo.prototype.getStrategyType = function() {
  return /** @type {!proto.tdex.daemon.v1.StrategyType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.tdex.daemon.v1.StrategyType} value
 * @return {!proto.tdex.daemon.v1.MarketInfo} returns this
 */
proto.tdex.daemon.v1.MarketInfo.prototype.setStrategyType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional uint64 account_index = 5;
 * @return {number}
 */
proto.tdex.daemon.v1.MarketInfo.prototype.getAccountIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.MarketInfo} returns this
 */
proto.tdex.daemon.v1.MarketInfo.prototype.setAccountIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional tdex.v1.Price price = 6;
 * @return {?proto.tdex.v1.Price}
 */
proto.tdex.daemon.v1.MarketInfo.prototype.getPrice = function() {
  return /** @type{?proto.tdex.v1.Price} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Price, 6));
};


/**
 * @param {?proto.tdex.v1.Price|undefined} value
 * @return {!proto.tdex.daemon.v1.MarketInfo} returns this
*/
proto.tdex.daemon.v1.MarketInfo.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.MarketInfo} returns this
 */
proto.tdex.daemon.v1.MarketInfo.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.MarketInfo.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional tdex.v1.Balance balance = 7;
 * @return {?proto.tdex.v1.Balance}
 */
proto.tdex.daemon.v1.MarketInfo.prototype.getBalance = function() {
  return /** @type{?proto.tdex.v1.Balance} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Balance, 7));
};


/**
 * @param {?proto.tdex.v1.Balance|undefined} value
 * @return {!proto.tdex.daemon.v1.MarketInfo} returns this
*/
proto.tdex.daemon.v1.MarketInfo.prototype.setBalance = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.MarketInfo} returns this
 */
proto.tdex.daemon.v1.MarketInfo.prototype.clearBalance = function() {
  return this.setBalance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.MarketInfo.prototype.hasBalance = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.tdex.daemon.v1.UtxoInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.UtxoInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.UtxoInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.UtxoInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    outpoint: (f = msg.getOutpoint()) && proto.tdex.daemon.v1.TxOutpoint.toObject(includeInstance, f),
    value: jspb.Message.getFieldWithDefault(msg, 2, 0),
    asset: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.tdex.daemon.v1.UtxoInfo}
 */
proto.tdex.daemon.v1.UtxoInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.UtxoInfo;
  return proto.tdex.daemon.v1.UtxoInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.UtxoInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.UtxoInfo}
 */
proto.tdex.daemon.v1.UtxoInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tdex.daemon.v1.TxOutpoint;
      reader.readMessage(value,proto.tdex.daemon.v1.TxOutpoint.deserializeBinaryFromReader);
      msg.setOutpoint(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setValue(value);
      break;
    case 3:
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
proto.tdex.daemon.v1.UtxoInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.UtxoInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.UtxoInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.UtxoInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutpoint();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tdex.daemon.v1.TxOutpoint.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional TxOutpoint outpoint = 1;
 * @return {?proto.tdex.daemon.v1.TxOutpoint}
 */
proto.tdex.daemon.v1.UtxoInfo.prototype.getOutpoint = function() {
  return /** @type{?proto.tdex.daemon.v1.TxOutpoint} */ (
    jspb.Message.getWrapperField(this, proto.tdex.daemon.v1.TxOutpoint, 1));
};


/**
 * @param {?proto.tdex.daemon.v1.TxOutpoint|undefined} value
 * @return {!proto.tdex.daemon.v1.UtxoInfo} returns this
*/
proto.tdex.daemon.v1.UtxoInfo.prototype.setOutpoint = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.UtxoInfo} returns this
 */
proto.tdex.daemon.v1.UtxoInfo.prototype.clearOutpoint = function() {
  return this.setOutpoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.UtxoInfo.prototype.hasOutpoint = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 value = 2;
 * @return {number}
 */
proto.tdex.daemon.v1.UtxoInfo.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.UtxoInfo} returns this
 */
proto.tdex.daemon.v1.UtxoInfo.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string asset = 3;
 * @return {string}
 */
proto.tdex.daemon.v1.UtxoInfo.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.UtxoInfo} returns this
 */
proto.tdex.daemon.v1.UtxoInfo.prototype.setAsset = function(value) {
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
proto.tdex.daemon.v1.TradeStatusInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.TradeStatusInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.TradeStatusInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.TradeStatusInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    failed: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.tdex.daemon.v1.TradeStatusInfo}
 */
proto.tdex.daemon.v1.TradeStatusInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.TradeStatusInfo;
  return proto.tdex.daemon.v1.TradeStatusInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.TradeStatusInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.TradeStatusInfo}
 */
proto.tdex.daemon.v1.TradeStatusInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.tdex.daemon.v1.TradeStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFailed(value);
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
proto.tdex.daemon.v1.TradeStatusInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.TradeStatusInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.TradeStatusInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.TradeStatusInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getFailed();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional TradeStatus status = 1;
 * @return {!proto.tdex.daemon.v1.TradeStatus}
 */
proto.tdex.daemon.v1.TradeStatusInfo.prototype.getStatus = function() {
  return /** @type {!proto.tdex.daemon.v1.TradeStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.tdex.daemon.v1.TradeStatus} value
 * @return {!proto.tdex.daemon.v1.TradeStatusInfo} returns this
 */
proto.tdex.daemon.v1.TradeStatusInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool failed = 2;
 * @return {boolean}
 */
proto.tdex.daemon.v1.TradeStatusInfo.prototype.getFailed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tdex.daemon.v1.TradeStatusInfo} returns this
 */
proto.tdex.daemon.v1.TradeStatusInfo.prototype.setFailed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.tdex.daemon.v1.SwapInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.SwapInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.SwapInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.SwapInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    amountP: jspb.Message.getFieldWithDefault(msg, 1, 0),
    assetP: jspb.Message.getFieldWithDefault(msg, 2, ""),
    amountR: jspb.Message.getFieldWithDefault(msg, 3, 0),
    assetR: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.tdex.daemon.v1.SwapInfo}
 */
proto.tdex.daemon.v1.SwapInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.SwapInfo;
  return proto.tdex.daemon.v1.SwapInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.SwapInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.SwapInfo}
 */
proto.tdex.daemon.v1.SwapInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmountP(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssetP(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmountR(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssetR(value);
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
proto.tdex.daemon.v1.SwapInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.SwapInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.SwapInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.SwapInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmountP();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getAssetP();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAmountR();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getAssetR();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint64 amount_p = 1;
 * @return {number}
 */
proto.tdex.daemon.v1.SwapInfo.prototype.getAmountP = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.SwapInfo} returns this
 */
proto.tdex.daemon.v1.SwapInfo.prototype.setAmountP = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string asset_p = 2;
 * @return {string}
 */
proto.tdex.daemon.v1.SwapInfo.prototype.getAssetP = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.SwapInfo} returns this
 */
proto.tdex.daemon.v1.SwapInfo.prototype.setAssetP = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 amount_r = 3;
 * @return {number}
 */
proto.tdex.daemon.v1.SwapInfo.prototype.getAmountR = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.SwapInfo} returns this
 */
proto.tdex.daemon.v1.SwapInfo.prototype.setAmountR = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string asset_r = 4;
 * @return {string}
 */
proto.tdex.daemon.v1.SwapInfo.prototype.getAssetR = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.SwapInfo} returns this
 */
proto.tdex.daemon.v1.SwapInfo.prototype.setAssetR = function(value) {
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
proto.tdex.daemon.v1.SwapFailInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.SwapFailInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.SwapFailInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.SwapFailInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    failureCode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    failureMessage: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.tdex.daemon.v1.SwapFailInfo}
 */
proto.tdex.daemon.v1.SwapFailInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.SwapFailInfo;
  return proto.tdex.daemon.v1.SwapFailInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.SwapFailInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.SwapFailInfo}
 */
proto.tdex.daemon.v1.SwapFailInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFailureCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailureMessage(value);
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
proto.tdex.daemon.v1.SwapFailInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.SwapFailInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.SwapFailInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.SwapFailInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFailureCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getFailureMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 failure_code = 1;
 * @return {number}
 */
proto.tdex.daemon.v1.SwapFailInfo.prototype.getFailureCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.SwapFailInfo} returns this
 */
proto.tdex.daemon.v1.SwapFailInfo.prototype.setFailureCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string failure_message = 2;
 * @return {string}
 */
proto.tdex.daemon.v1.SwapFailInfo.prototype.getFailureMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.SwapFailInfo} returns this
 */
proto.tdex.daemon.v1.SwapFailInfo.prototype.setFailureMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.tdex.daemon.v1.TradeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.TradeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.TradeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.TradeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: (f = msg.getStatus()) && proto.tdex.daemon.v1.TradeStatusInfo.toObject(includeInstance, f),
    swapInfo: (f = msg.getSwapInfo()) && proto.tdex.daemon.v1.SwapInfo.toObject(includeInstance, f),
    failInfo: (f = msg.getFailInfo()) && proto.tdex.daemon.v1.SwapFailInfo.toObject(includeInstance, f),
    marketWithFee: (f = msg.getMarketWithFee()) && tdex_v1_types_pb.MarketWithFee.toObject(includeInstance, f),
    price: (f = msg.getPrice()) && proto.tdex.daemon.v1.TradePrice.toObject(includeInstance, f),
    txUrl: jspb.Message.getFieldWithDefault(msg, 7, ""),
    requestTimeUnix: jspb.Message.getFieldWithDefault(msg, 8, 0),
    acceptTimeUnix: jspb.Message.getFieldWithDefault(msg, 9, 0),
    completeTimeUnix: jspb.Message.getFieldWithDefault(msg, 10, 0),
    settleTimeUnix: jspb.Message.getFieldWithDefault(msg, 11, 0),
    expiryTimeUnix: jspb.Message.getFieldWithDefault(msg, 12, 0),
    requestTimeUtc: jspb.Message.getFieldWithDefault(msg, 13, ""),
    acceptTimeUtc: jspb.Message.getFieldWithDefault(msg, 14, ""),
    completeTimeUtc: jspb.Message.getFieldWithDefault(msg, 15, ""),
    settleTimeUtc: jspb.Message.getFieldWithDefault(msg, 16, ""),
    expiryTimeUtc: jspb.Message.getFieldWithDefault(msg, 17, "")
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
 * @return {!proto.tdex.daemon.v1.TradeInfo}
 */
proto.tdex.daemon.v1.TradeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.TradeInfo;
  return proto.tdex.daemon.v1.TradeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.TradeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.TradeInfo}
 */
proto.tdex.daemon.v1.TradeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    case 2:
      var value = new proto.tdex.daemon.v1.TradeStatusInfo;
      reader.readMessage(value,proto.tdex.daemon.v1.TradeStatusInfo.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 3:
      var value = new proto.tdex.daemon.v1.SwapInfo;
      reader.readMessage(value,proto.tdex.daemon.v1.SwapInfo.deserializeBinaryFromReader);
      msg.setSwapInfo(value);
      break;
    case 4:
      var value = new proto.tdex.daemon.v1.SwapFailInfo;
      reader.readMessage(value,proto.tdex.daemon.v1.SwapFailInfo.deserializeBinaryFromReader);
      msg.setFailInfo(value);
      break;
    case 5:
      var value = new tdex_v1_types_pb.MarketWithFee;
      reader.readMessage(value,tdex_v1_types_pb.MarketWithFee.deserializeBinaryFromReader);
      msg.setMarketWithFee(value);
      break;
    case 6:
      var value = new proto.tdex.daemon.v1.TradePrice;
      reader.readMessage(value,proto.tdex.daemon.v1.TradePrice.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxUrl(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRequestTimeUnix(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAcceptTimeUnix(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCompleteTimeUnix(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSettleTimeUnix(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setExpiryTimeUnix(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestTimeUtc(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setAcceptTimeUtc(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompleteTimeUtc(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setSettleTimeUtc(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpiryTimeUtc(value);
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
proto.tdex.daemon.v1.TradeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.TradeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.TradeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.TradeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tdex.daemon.v1.TradeStatusInfo.serializeBinaryToWriter
    );
  }
  f = message.getSwapInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tdex.daemon.v1.SwapInfo.serializeBinaryToWriter
    );
  }
  f = message.getFailInfo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tdex.daemon.v1.SwapFailInfo.serializeBinaryToWriter
    );
  }
  f = message.getMarketWithFee();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      tdex_v1_types_pb.MarketWithFee.serializeBinaryToWriter
    );
  }
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.tdex.daemon.v1.TradePrice.serializeBinaryToWriter
    );
  }
  f = message.getTxUrl();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getRequestTimeUnix();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getAcceptTimeUnix();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getCompleteTimeUnix();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getSettleTimeUnix();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getExpiryTimeUnix();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
  f = message.getRequestTimeUtc();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getAcceptTimeUtc();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getCompleteTimeUtc();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getSettleTimeUtc();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getExpiryTimeUtc();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.tdex.daemon.v1.TradeInfo.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.TradeInfo} returns this
 */
proto.tdex.daemon.v1.TradeInfo.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TradeStatusInfo status = 2;
 * @return {?proto.tdex.daemon.v1.TradeStatusInfo}
 */
proto.tdex.daemon.v1.TradeInfo.prototype.getStatus = function() {
  return /** @type{?proto.tdex.daemon.v1.TradeStatusInfo} */ (
    jspb.Message.getWrapperField(this, proto.tdex.daemon.v1.TradeStatusInfo, 2));
};


/**
 * @param {?proto.tdex.daemon.v1.TradeStatusInfo|undefined} value
 * @return {!proto.tdex.daemon.v1.TradeInfo} returns this
*/
proto.tdex.daemon.v1.TradeInfo.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.TradeInfo} returns this
 */
proto.tdex.daemon.v1.TradeInfo.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.TradeInfo.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SwapInfo swap_info = 3;
 * @return {?proto.tdex.daemon.v1.SwapInfo}
 */
proto.tdex.daemon.v1.TradeInfo.prototype.getSwapInfo = function() {
  return /** @type{?proto.tdex.daemon.v1.SwapInfo} */ (
    jspb.Message.getWrapperField(this, proto.tdex.daemon.v1.SwapInfo, 3));
};


/**
 * @param {?proto.tdex.daemon.v1.SwapInfo|undefined} value
 * @return {!proto.tdex.daemon.v1.TradeInfo} returns this
*/
proto.tdex.daemon.v1.TradeInfo.prototype.setSwapInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.TradeInfo} returns this
 */
proto.tdex.daemon.v1.TradeInfo.prototype.clearSwapInfo = function() {
  return this.setSwapInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.TradeInfo.prototype.hasSwapInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SwapFailInfo fail_info = 4;
 * @return {?proto.tdex.daemon.v1.SwapFailInfo}
 */
proto.tdex.daemon.v1.TradeInfo.prototype.getFailInfo = function() {
  return /** @type{?proto.tdex.daemon.v1.SwapFailInfo} */ (
    jspb.Message.getWrapperField(this, proto.tdex.daemon.v1.SwapFailInfo, 4));
};


/**
 * @param {?proto.tdex.daemon.v1.SwapFailInfo|undefined} value
 * @return {!proto.tdex.daemon.v1.TradeInfo} returns this
*/
proto.tdex.daemon.v1.TradeInfo.prototype.setFailInfo = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.TradeInfo} returns this
 */
proto.tdex.daemon.v1.TradeInfo.prototype.clearFailInfo = function() {
  return this.setFailInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.TradeInfo.prototype.hasFailInfo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional tdex.v1.MarketWithFee market_with_fee = 5;
 * @return {?proto.tdex.v1.MarketWithFee}
 */
proto.tdex.daemon.v1.TradeInfo.prototype.getMarketWithFee = function() {
  return /** @type{?proto.tdex.v1.MarketWithFee} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.MarketWithFee, 5));
};


/**
 * @param {?proto.tdex.v1.MarketWithFee|undefined} value
 * @return {!proto.tdex.daemon.v1.TradeInfo} returns this
*/
proto.tdex.daemon.v1.TradeInfo.prototype.setMarketWithFee = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.TradeInfo} returns this
 */
proto.tdex.daemon.v1.TradeInfo.prototype.clearMarketWithFee = function() {
  return this.setMarketWithFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.TradeInfo.prototype.hasMarketWithFee = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional TradePrice price = 6;
 * @return {?proto.tdex.daemon.v1.TradePrice}
 */
proto.tdex.daemon.v1.TradeInfo.prototype.getPrice = function() {
  return /** @type{?proto.tdex.daemon.v1.TradePrice} */ (
    jspb.Message.getWrapperField(this, proto.tdex.daemon.v1.TradePrice, 6));
};


/**
 * @param {?proto.tdex.daemon.v1.TradePrice|undefined} value
 * @return {!proto.tdex.daemon.v1.TradeInfo} returns this
*/
proto.tdex.daemon.v1.TradeInfo.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.TradeInfo} returns this
 */
proto.tdex.daemon.v1.TradeInfo.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.TradeInfo.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string tx_url = 7;
 * @return {string}
 */
proto.tdex.daemon.v1.TradeInfo.prototype.getTxUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.TradeInfo} returns this
 */
proto.tdex.daemon.v1.TradeInfo.prototype.setTxUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional uint64 request_time_unix = 8;
 * @return {number}
 */
proto.tdex.daemon.v1.TradeInfo.prototype.getRequestTimeUnix = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.TradeInfo} returns this
 */
proto.tdex.daemon.v1.TradeInfo.prototype.setRequestTimeUnix = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 accept_time_unix = 9;
 * @return {number}
 */
proto.tdex.daemon.v1.TradeInfo.prototype.getAcceptTimeUnix = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.TradeInfo} returns this
 */
proto.tdex.daemon.v1.TradeInfo.prototype.setAcceptTimeUnix = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint64 complete_time_unix = 10;
 * @return {number}
 */
proto.tdex.daemon.v1.TradeInfo.prototype.getCompleteTimeUnix = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.TradeInfo} returns this
 */
proto.tdex.daemon.v1.TradeInfo.prototype.setCompleteTimeUnix = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint64 settle_time_unix = 11;
 * @return {number}
 */
proto.tdex.daemon.v1.TradeInfo.prototype.getSettleTimeUnix = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.TradeInfo} returns this
 */
proto.tdex.daemon.v1.TradeInfo.prototype.setSettleTimeUnix = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint64 expiry_time_unix = 12;
 * @return {number}
 */
proto.tdex.daemon.v1.TradeInfo.prototype.getExpiryTimeUnix = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.TradeInfo} returns this
 */
proto.tdex.daemon.v1.TradeInfo.prototype.setExpiryTimeUnix = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string request_time_utc = 13;
 * @return {string}
 */
proto.tdex.daemon.v1.TradeInfo.prototype.getRequestTimeUtc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.TradeInfo} returns this
 */
proto.tdex.daemon.v1.TradeInfo.prototype.setRequestTimeUtc = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string accept_time_utc = 14;
 * @return {string}
 */
proto.tdex.daemon.v1.TradeInfo.prototype.getAcceptTimeUtc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.TradeInfo} returns this
 */
proto.tdex.daemon.v1.TradeInfo.prototype.setAcceptTimeUtc = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string complete_time_utc = 15;
 * @return {string}
 */
proto.tdex.daemon.v1.TradeInfo.prototype.getCompleteTimeUtc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.TradeInfo} returns this
 */
proto.tdex.daemon.v1.TradeInfo.prototype.setCompleteTimeUtc = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string settle_time_utc = 16;
 * @return {string}
 */
proto.tdex.daemon.v1.TradeInfo.prototype.getSettleTimeUtc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.TradeInfo} returns this
 */
proto.tdex.daemon.v1.TradeInfo.prototype.setSettleTimeUtc = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string expiry_time_utc = 17;
 * @return {string}
 */
proto.tdex.daemon.v1.TradeInfo.prototype.getExpiryTimeUtc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.TradeInfo} returns this
 */
proto.tdex.daemon.v1.TradeInfo.prototype.setExpiryTimeUtc = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
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
proto.tdex.daemon.v1.FeeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.FeeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.FeeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.FeeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    basisPoint: jspb.Message.getFieldWithDefault(msg, 2, 0),
    asset: jspb.Message.getFieldWithDefault(msg, 3, ""),
    percentageFeeAmount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    fixedFeeAmount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    marketPrice: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0)
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
 * @return {!proto.tdex.daemon.v1.FeeInfo}
 */
proto.tdex.daemon.v1.FeeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.FeeInfo;
  return proto.tdex.daemon.v1.FeeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.FeeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.FeeInfo}
 */
proto.tdex.daemon.v1.FeeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBasisPoint(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPercentageFeeAmount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFixedFeeAmount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMarketPrice(value);
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
proto.tdex.daemon.v1.FeeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.FeeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.FeeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.FeeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBasisPoint();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPercentageFeeAmount();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getFixedFeeAmount();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getMarketPrice();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.tdex.daemon.v1.FeeInfo.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.FeeInfo} returns this
 */
proto.tdex.daemon.v1.FeeInfo.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 basis_point = 2;
 * @return {number}
 */
proto.tdex.daemon.v1.FeeInfo.prototype.getBasisPoint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.FeeInfo} returns this
 */
proto.tdex.daemon.v1.FeeInfo.prototype.setBasisPoint = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string asset = 3;
 * @return {string}
 */
proto.tdex.daemon.v1.FeeInfo.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.FeeInfo} returns this
 */
proto.tdex.daemon.v1.FeeInfo.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 percentage_fee_amount = 4;
 * @return {number}
 */
proto.tdex.daemon.v1.FeeInfo.prototype.getPercentageFeeAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.FeeInfo} returns this
 */
proto.tdex.daemon.v1.FeeInfo.prototype.setPercentageFeeAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 fixed_fee_amount = 5;
 * @return {number}
 */
proto.tdex.daemon.v1.FeeInfo.prototype.getFixedFeeAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.FeeInfo} returns this
 */
proto.tdex.daemon.v1.FeeInfo.prototype.setFixedFeeAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional float market_price = 6;
 * @return {number}
 */
proto.tdex.daemon.v1.FeeInfo.prototype.getMarketPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.FeeInfo} returns this
 */
proto.tdex.daemon.v1.FeeInfo.prototype.setMarketPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
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
proto.tdex.daemon.v1.TxOutpoint.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.TxOutpoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.TxOutpoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.TxOutpoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    index: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.tdex.daemon.v1.TxOutpoint}
 */
proto.tdex.daemon.v1.TxOutpoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.TxOutpoint;
  return proto.tdex.daemon.v1.TxOutpoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.TxOutpoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.TxOutpoint}
 */
proto.tdex.daemon.v1.TxOutpoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIndex(value);
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
proto.tdex.daemon.v1.TxOutpoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.TxOutpoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.TxOutpoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.TxOutpoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string hash = 1;
 * @return {string}
 */
proto.tdex.daemon.v1.TxOutpoint.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.TxOutpoint} returns this
 */
proto.tdex.daemon.v1.TxOutpoint.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 index = 2;
 * @return {number}
 */
proto.tdex.daemon.v1.TxOutpoint.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.TxOutpoint} returns this
 */
proto.tdex.daemon.v1.TxOutpoint.prototype.setIndex = function(value) {
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
proto.tdex.daemon.v1.TradePrice.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.TradePrice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.TradePrice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.TradePrice.toObject = function(includeInstance, msg) {
  var f, obj = {
    basePrice: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    quotePrice: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.tdex.daemon.v1.TradePrice}
 */
proto.tdex.daemon.v1.TradePrice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.TradePrice;
  return proto.tdex.daemon.v1.TradePrice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.TradePrice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.TradePrice}
 */
proto.tdex.daemon.v1.TradePrice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBasePrice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setQuotePrice(value);
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
proto.tdex.daemon.v1.TradePrice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.TradePrice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.TradePrice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.TradePrice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBasePrice();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getQuotePrice();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double base_price = 1;
 * @return {number}
 */
proto.tdex.daemon.v1.TradePrice.prototype.getBasePrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.TradePrice} returns this
 */
proto.tdex.daemon.v1.TradePrice.prototype.setBasePrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double quote_price = 2;
 * @return {number}
 */
proto.tdex.daemon.v1.TradePrice.prototype.getQuotePrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.TradePrice} returns this
 */
proto.tdex.daemon.v1.TradePrice.prototype.setQuotePrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
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
proto.tdex.daemon.v1.WebhookInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.WebhookInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.WebhookInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.WebhookInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    endpoint: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isSecured: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.tdex.daemon.v1.WebhookInfo}
 */
proto.tdex.daemon.v1.WebhookInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.WebhookInfo;
  return proto.tdex.daemon.v1.WebhookInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.WebhookInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.WebhookInfo}
 */
proto.tdex.daemon.v1.WebhookInfo.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndpoint(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSecured(value);
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
proto.tdex.daemon.v1.WebhookInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.WebhookInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.WebhookInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.WebhookInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEndpoint();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsSecured();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.tdex.daemon.v1.WebhookInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.WebhookInfo} returns this
 */
proto.tdex.daemon.v1.WebhookInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string endpoint = 2;
 * @return {string}
 */
proto.tdex.daemon.v1.WebhookInfo.prototype.getEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.WebhookInfo} returns this
 */
proto.tdex.daemon.v1.WebhookInfo.prototype.setEndpoint = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_secured = 3;
 * @return {boolean}
 */
proto.tdex.daemon.v1.WebhookInfo.prototype.getIsSecured = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tdex.daemon.v1.WebhookInfo} returns this
 */
proto.tdex.daemon.v1.WebhookInfo.prototype.setIsSecured = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
proto.tdex.daemon.v1.Deposit.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.Deposit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.Deposit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.Deposit.toObject = function(includeInstance, msg) {
  var f, obj = {
    utxo: (f = msg.getUtxo()) && proto.tdex.daemon.v1.UtxoInfo.toObject(includeInstance, f),
    timestampUnix: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timestampUtc: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.tdex.daemon.v1.Deposit}
 */
proto.tdex.daemon.v1.Deposit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.Deposit;
  return proto.tdex.daemon.v1.Deposit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.Deposit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.Deposit}
 */
proto.tdex.daemon.v1.Deposit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tdex.daemon.v1.UtxoInfo;
      reader.readMessage(value,proto.tdex.daemon.v1.UtxoInfo.deserializeBinaryFromReader);
      msg.setUtxo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestampUnix(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimestampUtc(value);
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
proto.tdex.daemon.v1.Deposit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.Deposit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.Deposit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.Deposit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUtxo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tdex.daemon.v1.UtxoInfo.serializeBinaryToWriter
    );
  }
  f = message.getTimestampUnix();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTimestampUtc();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional UtxoInfo utxo = 1;
 * @return {?proto.tdex.daemon.v1.UtxoInfo}
 */
proto.tdex.daemon.v1.Deposit.prototype.getUtxo = function() {
  return /** @type{?proto.tdex.daemon.v1.UtxoInfo} */ (
    jspb.Message.getWrapperField(this, proto.tdex.daemon.v1.UtxoInfo, 1));
};


/**
 * @param {?proto.tdex.daemon.v1.UtxoInfo|undefined} value
 * @return {!proto.tdex.daemon.v1.Deposit} returns this
*/
proto.tdex.daemon.v1.Deposit.prototype.setUtxo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.Deposit} returns this
 */
proto.tdex.daemon.v1.Deposit.prototype.clearUtxo = function() {
  return this.setUtxo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.Deposit.prototype.hasUtxo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 timestamp_unix = 2;
 * @return {number}
 */
proto.tdex.daemon.v1.Deposit.prototype.getTimestampUnix = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.Deposit} returns this
 */
proto.tdex.daemon.v1.Deposit.prototype.setTimestampUnix = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string timestamp_utc = 5;
 * @return {string}
 */
proto.tdex.daemon.v1.Deposit.prototype.getTimestampUtc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.Deposit} returns this
 */
proto.tdex.daemon.v1.Deposit.prototype.setTimestampUtc = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.tdex.daemon.v1.Withdrawal.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.Withdrawal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.Withdrawal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.Withdrawal.toObject = function(includeInstance, msg) {
  var f, obj = {
    txId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    balance: (f = msg.getBalance()) && tdex_v1_types_pb.Balance.toObject(includeInstance, f),
    address: jspb.Message.getFieldWithDefault(msg, 3, ""),
    timestampUnix: jspb.Message.getFieldWithDefault(msg, 4, 0),
    timestampUtc: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.tdex.daemon.v1.Withdrawal}
 */
proto.tdex.daemon.v1.Withdrawal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.Withdrawal;
  return proto.tdex.daemon.v1.Withdrawal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.Withdrawal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.Withdrawal}
 */
proto.tdex.daemon.v1.Withdrawal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxId(value);
      break;
    case 2:
      var value = new tdex_v1_types_pb.Balance;
      reader.readMessage(value,tdex_v1_types_pb.Balance.deserializeBinaryFromReader);
      msg.setBalance(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestampUnix(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimestampUtc(value);
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
proto.tdex.daemon.v1.Withdrawal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.Withdrawal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.Withdrawal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.Withdrawal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBalance();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tdex_v1_types_pb.Balance.serializeBinaryToWriter
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTimestampUnix();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getTimestampUtc();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string tx_id = 1;
 * @return {string}
 */
proto.tdex.daemon.v1.Withdrawal.prototype.getTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.Withdrawal} returns this
 */
proto.tdex.daemon.v1.Withdrawal.prototype.setTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional tdex.v1.Balance balance = 2;
 * @return {?proto.tdex.v1.Balance}
 */
proto.tdex.daemon.v1.Withdrawal.prototype.getBalance = function() {
  return /** @type{?proto.tdex.v1.Balance} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Balance, 2));
};


/**
 * @param {?proto.tdex.v1.Balance|undefined} value
 * @return {!proto.tdex.daemon.v1.Withdrawal} returns this
*/
proto.tdex.daemon.v1.Withdrawal.prototype.setBalance = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.Withdrawal} returns this
 */
proto.tdex.daemon.v1.Withdrawal.prototype.clearBalance = function() {
  return this.setBalance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.Withdrawal.prototype.hasBalance = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.tdex.daemon.v1.Withdrawal.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.Withdrawal} returns this
 */
proto.tdex.daemon.v1.Withdrawal.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 timestamp_unix = 4;
 * @return {number}
 */
proto.tdex.daemon.v1.Withdrawal.prototype.getTimestampUnix = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.Withdrawal} returns this
 */
proto.tdex.daemon.v1.Withdrawal.prototype.setTimestampUnix = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string timestamp_utc = 5;
 * @return {string}
 */
proto.tdex.daemon.v1.Withdrawal.prototype.getTimestampUtc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.Withdrawal} returns this
 */
proto.tdex.daemon.v1.Withdrawal.prototype.setTimestampUtc = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.tdex.daemon.v1.Page.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.Page.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.Page} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.Page.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageNumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.tdex.daemon.v1.Page}
 */
proto.tdex.daemon.v1.Page.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.Page;
  return proto.tdex.daemon.v1.Page.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.Page} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.Page}
 */
proto.tdex.daemon.v1.Page.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageNumber(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageSize(value);
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
proto.tdex.daemon.v1.Page.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.Page.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.Page} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.Page.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageNumber();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 page_number = 1;
 * @return {number}
 */
proto.tdex.daemon.v1.Page.prototype.getPageNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.Page} returns this
 */
proto.tdex.daemon.v1.Page.prototype.setPageNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.tdex.daemon.v1.Page.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.Page} returns this
 */
proto.tdex.daemon.v1.Page.prototype.setPageSize = function(value) {
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
proto.tdex.daemon.v1.GetMarketReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetMarketReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetMarketReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && tdex_v1_types_pb.Market.toObject(includeInstance, f),
    timeRange: (f = msg.getTimeRange()) && proto.tdex.daemon.v1.TimeRange.toObject(includeInstance, f),
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
 * @return {!proto.tdex.daemon.v1.GetMarketReportRequest}
 */
proto.tdex.daemon.v1.GetMarketReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetMarketReportRequest;
  return proto.tdex.daemon.v1.GetMarketReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetMarketReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetMarketReportRequest}
 */
proto.tdex.daemon.v1.GetMarketReportRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tdex.daemon.v1.TimeRange;
      reader.readMessage(value,proto.tdex.daemon.v1.TimeRange.deserializeBinaryFromReader);
      msg.setTimeRange(value);
      break;
    case 3:
      var value = /** @type {!proto.tdex.daemon.v1.TimeFrame} */ (reader.readEnum());
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
proto.tdex.daemon.v1.GetMarketReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetMarketReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetMarketReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketReportRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.tdex.daemon.v1.TimeRange.serializeBinaryToWriter
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
proto.tdex.daemon.v1.GetMarketReportRequest.prototype.getMarket = function() {
  return /** @type{?proto.tdex.v1.Market} */ (
    jspb.Message.getWrapperField(this, tdex_v1_types_pb.Market, 1));
};


/**
 * @param {?proto.tdex.v1.Market|undefined} value
 * @return {!proto.tdex.daemon.v1.GetMarketReportRequest} returns this
*/
proto.tdex.daemon.v1.GetMarketReportRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.GetMarketReportRequest} returns this
 */
proto.tdex.daemon.v1.GetMarketReportRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.GetMarketReportRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TimeRange time_range = 2;
 * @return {?proto.tdex.daemon.v1.TimeRange}
 */
proto.tdex.daemon.v1.GetMarketReportRequest.prototype.getTimeRange = function() {
  return /** @type{?proto.tdex.daemon.v1.TimeRange} */ (
    jspb.Message.getWrapperField(this, proto.tdex.daemon.v1.TimeRange, 2));
};


/**
 * @param {?proto.tdex.daemon.v1.TimeRange|undefined} value
 * @return {!proto.tdex.daemon.v1.GetMarketReportRequest} returns this
*/
proto.tdex.daemon.v1.GetMarketReportRequest.prototype.setTimeRange = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.GetMarketReportRequest} returns this
 */
proto.tdex.daemon.v1.GetMarketReportRequest.prototype.clearTimeRange = function() {
  return this.setTimeRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.GetMarketReportRequest.prototype.hasTimeRange = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TimeFrame time_frame = 3;
 * @return {!proto.tdex.daemon.v1.TimeFrame}
 */
proto.tdex.daemon.v1.GetMarketReportRequest.prototype.getTimeFrame = function() {
  return /** @type {!proto.tdex.daemon.v1.TimeFrame} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.tdex.daemon.v1.TimeFrame} value
 * @return {!proto.tdex.daemon.v1.GetMarketReportRequest} returns this
 */
proto.tdex.daemon.v1.GetMarketReportRequest.prototype.setTimeFrame = function(value) {
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
proto.tdex.daemon.v1.GetMarketReportReply.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.GetMarketReportReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.GetMarketReportReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketReportReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    report: (f = msg.getReport()) && proto.tdex.daemon.v1.MarketReport.toObject(includeInstance, f)
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
 * @return {!proto.tdex.daemon.v1.GetMarketReportReply}
 */
proto.tdex.daemon.v1.GetMarketReportReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.GetMarketReportReply;
  return proto.tdex.daemon.v1.GetMarketReportReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.GetMarketReportReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.GetMarketReportReply}
 */
proto.tdex.daemon.v1.GetMarketReportReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tdex.daemon.v1.MarketReport;
      reader.readMessage(value,proto.tdex.daemon.v1.MarketReport.deserializeBinaryFromReader);
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
proto.tdex.daemon.v1.GetMarketReportReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.GetMarketReportReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.GetMarketReportReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.GetMarketReportReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tdex.daemon.v1.MarketReport.serializeBinaryToWriter
    );
  }
};


/**
 * optional MarketReport report = 1;
 * @return {?proto.tdex.daemon.v1.MarketReport}
 */
proto.tdex.daemon.v1.GetMarketReportReply.prototype.getReport = function() {
  return /** @type{?proto.tdex.daemon.v1.MarketReport} */ (
    jspb.Message.getWrapperField(this, proto.tdex.daemon.v1.MarketReport, 1));
};


/**
 * @param {?proto.tdex.daemon.v1.MarketReport|undefined} value
 * @return {!proto.tdex.daemon.v1.GetMarketReportReply} returns this
*/
proto.tdex.daemon.v1.GetMarketReportReply.prototype.setReport = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.GetMarketReportReply} returns this
 */
proto.tdex.daemon.v1.GetMarketReportReply.prototype.clearReport = function() {
  return this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.GetMarketReportReply.prototype.hasReport = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tdex.daemon.v1.MarketReport.repeatedFields_ = [3];



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
proto.tdex.daemon.v1.MarketReport.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.MarketReport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.MarketReport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.MarketReport.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalCollectedFees: (f = msg.getTotalCollectedFees()) && proto.tdex.daemon.v1.MarketCollectedFees.toObject(includeInstance, f),
    totalVolume: (f = msg.getTotalVolume()) && proto.tdex.daemon.v1.MarketVolume.toObject(includeInstance, f),
    groupedVolumeList: jspb.Message.toObjectList(msg.getGroupedVolumeList(),
    proto.tdex.daemon.v1.MarketVolume.toObject, includeInstance)
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
 * @return {!proto.tdex.daemon.v1.MarketReport}
 */
proto.tdex.daemon.v1.MarketReport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.MarketReport;
  return proto.tdex.daemon.v1.MarketReport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.MarketReport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.MarketReport}
 */
proto.tdex.daemon.v1.MarketReport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tdex.daemon.v1.MarketCollectedFees;
      reader.readMessage(value,proto.tdex.daemon.v1.MarketCollectedFees.deserializeBinaryFromReader);
      msg.setTotalCollectedFees(value);
      break;
    case 2:
      var value = new proto.tdex.daemon.v1.MarketVolume;
      reader.readMessage(value,proto.tdex.daemon.v1.MarketVolume.deserializeBinaryFromReader);
      msg.setTotalVolume(value);
      break;
    case 3:
      var value = new proto.tdex.daemon.v1.MarketVolume;
      reader.readMessage(value,proto.tdex.daemon.v1.MarketVolume.deserializeBinaryFromReader);
      msg.addGroupedVolume(value);
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
proto.tdex.daemon.v1.MarketReport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.MarketReport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.MarketReport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.MarketReport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalCollectedFees();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tdex.daemon.v1.MarketCollectedFees.serializeBinaryToWriter
    );
  }
  f = message.getTotalVolume();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tdex.daemon.v1.MarketVolume.serializeBinaryToWriter
    );
  }
  f = message.getGroupedVolumeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.tdex.daemon.v1.MarketVolume.serializeBinaryToWriter
    );
  }
};


/**
 * optional MarketCollectedFees total_collected_fees = 1;
 * @return {?proto.tdex.daemon.v1.MarketCollectedFees}
 */
proto.tdex.daemon.v1.MarketReport.prototype.getTotalCollectedFees = function() {
  return /** @type{?proto.tdex.daemon.v1.MarketCollectedFees} */ (
    jspb.Message.getWrapperField(this, proto.tdex.daemon.v1.MarketCollectedFees, 1));
};


/**
 * @param {?proto.tdex.daemon.v1.MarketCollectedFees|undefined} value
 * @return {!proto.tdex.daemon.v1.MarketReport} returns this
*/
proto.tdex.daemon.v1.MarketReport.prototype.setTotalCollectedFees = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.MarketReport} returns this
 */
proto.tdex.daemon.v1.MarketReport.prototype.clearTotalCollectedFees = function() {
  return this.setTotalCollectedFees(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.MarketReport.prototype.hasTotalCollectedFees = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MarketVolume total_volume = 2;
 * @return {?proto.tdex.daemon.v1.MarketVolume}
 */
proto.tdex.daemon.v1.MarketReport.prototype.getTotalVolume = function() {
  return /** @type{?proto.tdex.daemon.v1.MarketVolume} */ (
    jspb.Message.getWrapperField(this, proto.tdex.daemon.v1.MarketVolume, 2));
};


/**
 * @param {?proto.tdex.daemon.v1.MarketVolume|undefined} value
 * @return {!proto.tdex.daemon.v1.MarketReport} returns this
*/
proto.tdex.daemon.v1.MarketReport.prototype.setTotalVolume = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.MarketReport} returns this
 */
proto.tdex.daemon.v1.MarketReport.prototype.clearTotalVolume = function() {
  return this.setTotalVolume(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.MarketReport.prototype.hasTotalVolume = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated MarketVolume grouped_volume = 3;
 * @return {!Array<!proto.tdex.daemon.v1.MarketVolume>}
 */
proto.tdex.daemon.v1.MarketReport.prototype.getGroupedVolumeList = function() {
  return /** @type{!Array<!proto.tdex.daemon.v1.MarketVolume>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tdex.daemon.v1.MarketVolume, 3));
};


/**
 * @param {!Array<!proto.tdex.daemon.v1.MarketVolume>} value
 * @return {!proto.tdex.daemon.v1.MarketReport} returns this
*/
proto.tdex.daemon.v1.MarketReport.prototype.setGroupedVolumeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.tdex.daemon.v1.MarketVolume=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tdex.daemon.v1.MarketVolume}
 */
proto.tdex.daemon.v1.MarketReport.prototype.addGroupedVolume = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.tdex.daemon.v1.MarketVolume, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tdex.daemon.v1.MarketReport} returns this
 */
proto.tdex.daemon.v1.MarketReport.prototype.clearGroupedVolumeList = function() {
  return this.setGroupedVolumeList([]);
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
proto.tdex.daemon.v1.MarketCollectedFees.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.MarketCollectedFees.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.MarketCollectedFees} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.MarketCollectedFees.toObject = function(includeInstance, msg) {
  var f, obj = {
    baseAmount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    quoteAmount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    startDate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    endDate: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.tdex.daemon.v1.MarketCollectedFees}
 */
proto.tdex.daemon.v1.MarketCollectedFees.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.MarketCollectedFees;
  return proto.tdex.daemon.v1.MarketCollectedFees.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.MarketCollectedFees} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.MarketCollectedFees}
 */
proto.tdex.daemon.v1.MarketCollectedFees.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBaseAmount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setQuoteAmount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartDate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndDate(value);
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
proto.tdex.daemon.v1.MarketCollectedFees.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.MarketCollectedFees.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.MarketCollectedFees} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.MarketCollectedFees.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBaseAmount();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getQuoteAmount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getStartDate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEndDate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint64 base_amount = 1;
 * @return {number}
 */
proto.tdex.daemon.v1.MarketCollectedFees.prototype.getBaseAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.MarketCollectedFees} returns this
 */
proto.tdex.daemon.v1.MarketCollectedFees.prototype.setBaseAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 quote_amount = 2;
 * @return {number}
 */
proto.tdex.daemon.v1.MarketCollectedFees.prototype.getQuoteAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.MarketCollectedFees} returns this
 */
proto.tdex.daemon.v1.MarketCollectedFees.prototype.setQuoteAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string start_date = 3;
 * @return {string}
 */
proto.tdex.daemon.v1.MarketCollectedFees.prototype.getStartDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.MarketCollectedFees} returns this
 */
proto.tdex.daemon.v1.MarketCollectedFees.prototype.setStartDate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string end_date = 4;
 * @return {string}
 */
proto.tdex.daemon.v1.MarketCollectedFees.prototype.getEndDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.MarketCollectedFees} returns this
 */
proto.tdex.daemon.v1.MarketCollectedFees.prototype.setEndDate = function(value) {
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
proto.tdex.daemon.v1.MarketVolume.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.MarketVolume.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.MarketVolume} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.MarketVolume.toObject = function(includeInstance, msg) {
  var f, obj = {
    baseVolume: jspb.Message.getFieldWithDefault(msg, 1, 0),
    quoteVolume: jspb.Message.getFieldWithDefault(msg, 2, 0),
    startDate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    endDate: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.tdex.daemon.v1.MarketVolume}
 */
proto.tdex.daemon.v1.MarketVolume.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.MarketVolume;
  return proto.tdex.daemon.v1.MarketVolume.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.MarketVolume} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.MarketVolume}
 */
proto.tdex.daemon.v1.MarketVolume.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBaseVolume(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setQuoteVolume(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartDate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndDate(value);
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
proto.tdex.daemon.v1.MarketVolume.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.MarketVolume.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.MarketVolume} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.MarketVolume.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBaseVolume();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getQuoteVolume();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getStartDate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEndDate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint64 base_volume = 1;
 * @return {number}
 */
proto.tdex.daemon.v1.MarketVolume.prototype.getBaseVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.MarketVolume} returns this
 */
proto.tdex.daemon.v1.MarketVolume.prototype.setBaseVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 quote_volume = 2;
 * @return {number}
 */
proto.tdex.daemon.v1.MarketVolume.prototype.getQuoteVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tdex.daemon.v1.MarketVolume} returns this
 */
proto.tdex.daemon.v1.MarketVolume.prototype.setQuoteVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string start_date = 3;
 * @return {string}
 */
proto.tdex.daemon.v1.MarketVolume.prototype.getStartDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.MarketVolume} returns this
 */
proto.tdex.daemon.v1.MarketVolume.prototype.setStartDate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string end_date = 4;
 * @return {string}
 */
proto.tdex.daemon.v1.MarketVolume.prototype.getEndDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.MarketVolume} returns this
 */
proto.tdex.daemon.v1.MarketVolume.prototype.setEndDate = function(value) {
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
proto.tdex.daemon.v1.TimeRange.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.TimeRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.TimeRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.TimeRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    predefinedPeriod: jspb.Message.getFieldWithDefault(msg, 1, 0),
    customPeriod: (f = msg.getCustomPeriod()) && proto.tdex.daemon.v1.CustomPeriod.toObject(includeInstance, f)
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
 * @return {!proto.tdex.daemon.v1.TimeRange}
 */
proto.tdex.daemon.v1.TimeRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.TimeRange;
  return proto.tdex.daemon.v1.TimeRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.TimeRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.TimeRange}
 */
proto.tdex.daemon.v1.TimeRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.tdex.daemon.v1.PredefinedPeriod} */ (reader.readEnum());
      msg.setPredefinedPeriod(value);
      break;
    case 2:
      var value = new proto.tdex.daemon.v1.CustomPeriod;
      reader.readMessage(value,proto.tdex.daemon.v1.CustomPeriod.deserializeBinaryFromReader);
      msg.setCustomPeriod(value);
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
proto.tdex.daemon.v1.TimeRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.TimeRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.TimeRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.TimeRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPredefinedPeriod();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCustomPeriod();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tdex.daemon.v1.CustomPeriod.serializeBinaryToWriter
    );
  }
};


/**
 * optional PredefinedPeriod predefined_period = 1;
 * @return {!proto.tdex.daemon.v1.PredefinedPeriod}
 */
proto.tdex.daemon.v1.TimeRange.prototype.getPredefinedPeriod = function() {
  return /** @type {!proto.tdex.daemon.v1.PredefinedPeriod} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.tdex.daemon.v1.PredefinedPeriod} value
 * @return {!proto.tdex.daemon.v1.TimeRange} returns this
 */
proto.tdex.daemon.v1.TimeRange.prototype.setPredefinedPeriod = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional CustomPeriod custom_period = 2;
 * @return {?proto.tdex.daemon.v1.CustomPeriod}
 */
proto.tdex.daemon.v1.TimeRange.prototype.getCustomPeriod = function() {
  return /** @type{?proto.tdex.daemon.v1.CustomPeriod} */ (
    jspb.Message.getWrapperField(this, proto.tdex.daemon.v1.CustomPeriod, 2));
};


/**
 * @param {?proto.tdex.daemon.v1.CustomPeriod|undefined} value
 * @return {!proto.tdex.daemon.v1.TimeRange} returns this
*/
proto.tdex.daemon.v1.TimeRange.prototype.setCustomPeriod = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tdex.daemon.v1.TimeRange} returns this
 */
proto.tdex.daemon.v1.TimeRange.prototype.clearCustomPeriod = function() {
  return this.setCustomPeriod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tdex.daemon.v1.TimeRange.prototype.hasCustomPeriod = function() {
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
proto.tdex.daemon.v1.CustomPeriod.prototype.toObject = function(opt_includeInstance) {
  return proto.tdex.daemon.v1.CustomPeriod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tdex.daemon.v1.CustomPeriod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.CustomPeriod.toObject = function(includeInstance, msg) {
  var f, obj = {
    startDate: jspb.Message.getFieldWithDefault(msg, 1, ""),
    endDate: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.tdex.daemon.v1.CustomPeriod}
 */
proto.tdex.daemon.v1.CustomPeriod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tdex.daemon.v1.CustomPeriod;
  return proto.tdex.daemon.v1.CustomPeriod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tdex.daemon.v1.CustomPeriod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tdex.daemon.v1.CustomPeriod}
 */
proto.tdex.daemon.v1.CustomPeriod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartDate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndDate(value);
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
proto.tdex.daemon.v1.CustomPeriod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tdex.daemon.v1.CustomPeriod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tdex.daemon.v1.CustomPeriod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tdex.daemon.v1.CustomPeriod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartDate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEndDate();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string start_date = 1;
 * @return {string}
 */
proto.tdex.daemon.v1.CustomPeriod.prototype.getStartDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.CustomPeriod} returns this
 */
proto.tdex.daemon.v1.CustomPeriod.prototype.setStartDate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string end_date = 2;
 * @return {string}
 */
proto.tdex.daemon.v1.CustomPeriod.prototype.getEndDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tdex.daemon.v1.CustomPeriod} returns this
 */
proto.tdex.daemon.v1.CustomPeriod.prototype.setEndDate = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.tdex.daemon.v1.StrategyType = {
  PLUGGABLE: 0,
  BALANCED: 1,
  UNBALANCED: 2
};

/**
 * @enum {number}
 */
proto.tdex.daemon.v1.TradeStatus = {
  UNDEFINED: 0,
  REQUEST: 1,
  ACCEPT: 2,
  COMPLETE: 3,
  SETTLED: 4,
  EXPIRED: 5
};

/**
 * @enum {number}
 */
proto.tdex.daemon.v1.ActionType = {
  TRADE_SETTLED: 0,
  ACCOUNT_LOW_BALANCE: 1,
  ACCOUNT_WITHDRAW: 2,
  ALL_ACTIONS: 3
};

/**
 * @enum {number}
 */
proto.tdex.daemon.v1.PredefinedPeriod = {
  NULL: 0,
  LAST_HOUR: 1,
  LAST_DAY: 2,
  LAST_WEEK: 3,
  LAST_MONTH: 4,
  LAST_THREE_MONTHS: 5,
  YEAR_TO_DATE: 6,
  ALL: 7,
  LAST_YEAR: 8
};

/**
 * @enum {number}
 */
proto.tdex.daemon.v1.TimeFrame = {
  HOUR: 0,
  FOUR_HOURS: 1,
  DAY: 2,
  WEEK: 3,
  MONTH: 4
};

goog.object.extend(exports, proto.tdex.daemon.v1);
