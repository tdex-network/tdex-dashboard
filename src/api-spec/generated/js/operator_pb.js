// source: operator.proto
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

var types_pb = require('./types_pb.js');
goog.object.extend(proto, types_pb);
var wallet_pb = require('./wallet_pb.js');
goog.object.extend(proto, wallet_pb);
goog.exportSymbol('proto.AccountInfo', null, global);
goog.exportSymbol('proto.ActionType', null, global);
goog.exportSymbol('proto.AddWebhookReply', null, global);
goog.exportSymbol('proto.AddWebhookRequest', null, global);
goog.exportSymbol('proto.ClaimFeeDepositsReply', null, global);
goog.exportSymbol('proto.ClaimFeeDepositsRequest', null, global);
goog.exportSymbol('proto.ClaimMarketDepositsReply', null, global);
goog.exportSymbol('proto.ClaimMarketDepositsRequest', null, global);
goog.exportSymbol('proto.CloseMarketReply', null, global);
goog.exportSymbol('proto.CloseMarketRequest', null, global);
goog.exportSymbol('proto.Deposit', null, global);
goog.exportSymbol('proto.DropMarketReply', null, global);
goog.exportSymbol('proto.DropMarketRequest', null, global);
goog.exportSymbol('proto.FeeFragmenterSplitFundsRequest', null, global);
goog.exportSymbol('proto.FeeInfo', null, global);
goog.exportSymbol('proto.FragmenterSplitFundsReply', null, global);
goog.exportSymbol('proto.GetFeeAddressReply', null, global);
goog.exportSymbol('proto.GetFeeAddressRequest', null, global);
goog.exportSymbol('proto.GetFeeBalanceReply', null, global);
goog.exportSymbol('proto.GetFeeBalanceRequest', null, global);
goog.exportSymbol('proto.GetFeeFragmenterAddressReply', null, global);
goog.exportSymbol('proto.GetFeeFragmenterAddressRequest', null, global);
goog.exportSymbol('proto.GetFeeFragmenterBalanceReply', null, global);
goog.exportSymbol('proto.GetFeeFragmenterBalanceRequest', null, global);
goog.exportSymbol('proto.GetInfoReply', null, global);
goog.exportSymbol('proto.GetInfoRequest', null, global);
goog.exportSymbol('proto.GetMarketAddressReply', null, global);
goog.exportSymbol('proto.GetMarketAddressRequest', null, global);
goog.exportSymbol('proto.GetMarketBalanceReply', null, global);
goog.exportSymbol('proto.GetMarketBalanceRequest', null, global);
goog.exportSymbol('proto.GetMarketCollectedSwapFeesReply', null, global);
goog.exportSymbol('proto.GetMarketCollectedSwapFeesRequest', null, global);
goog.exportSymbol('proto.GetMarketFragmenterAddressReply', null, global);
goog.exportSymbol('proto.GetMarketFragmenterAddressRequest', null, global);
goog.exportSymbol('proto.GetMarketFragmenterBalanceReply', null, global);
goog.exportSymbol('proto.GetMarketFragmenterBalanceRequest', null, global);
goog.exportSymbol('proto.GetMarketInfoReply', null, global);
goog.exportSymbol('proto.GetMarketInfoRequest', null, global);
goog.exportSymbol('proto.ListDepositsReply', null, global);
goog.exportSymbol('proto.ListDepositsRequest', null, global);
goog.exportSymbol('proto.ListFeeAddressesReply', null, global);
goog.exportSymbol('proto.ListFeeAddressesRequest', null, global);
goog.exportSymbol('proto.ListFeeFragmenterAddressesReply', null, global);
goog.exportSymbol('proto.ListFeeFragmenterAddressesRequest', null, global);
goog.exportSymbol('proto.ListMarketAddressesReply', null, global);
goog.exportSymbol('proto.ListMarketAddressesRequest', null, global);
goog.exportSymbol('proto.ListMarketFragmenterAddressesReply', null, global);
goog.exportSymbol('proto.ListMarketFragmenterAddressesRequest', null, global);
goog.exportSymbol('proto.ListMarketsReply', null, global);
goog.exportSymbol('proto.ListMarketsRequest', null, global);
goog.exportSymbol('proto.ListTradesReply', null, global);
goog.exportSymbol('proto.ListTradesRequest', null, global);
goog.exportSymbol('proto.ListUtxosReply', null, global);
goog.exportSymbol('proto.ListUtxosRequest', null, global);
goog.exportSymbol('proto.ListWebhooksReply', null, global);
goog.exportSymbol('proto.ListWebhooksRequest', null, global);
goog.exportSymbol('proto.ListWithdrawalsReply', null, global);
goog.exportSymbol('proto.ListWithdrawalsRequest', null, global);
goog.exportSymbol('proto.MarketFragmenterSplitFundsRequest', null, global);
goog.exportSymbol('proto.MarketInfo', null, global);
goog.exportSymbol('proto.NewMarketReply', null, global);
goog.exportSymbol('proto.NewMarketRequest', null, global);
goog.exportSymbol('proto.OpenMarketReply', null, global);
goog.exportSymbol('proto.OpenMarketRequest', null, global);
goog.exportSymbol('proto.Page', null, global);
goog.exportSymbol('proto.ReloadUtxosReply', null, global);
goog.exportSymbol('proto.ReloadUtxosRequest', null, global);
goog.exportSymbol('proto.RemoveWebhookReply', null, global);
goog.exportSymbol('proto.RemoveWebhookRequest', null, global);
goog.exportSymbol('proto.StrategyType', null, global);
goog.exportSymbol('proto.SwapFailInfo', null, global);
goog.exportSymbol('proto.SwapInfo', null, global);
goog.exportSymbol('proto.TradeInfo', null, global);
goog.exportSymbol('proto.TradePrice', null, global);
goog.exportSymbol('proto.TradeStatus', null, global);
goog.exportSymbol('proto.TradeStatusInfo', null, global);
goog.exportSymbol('proto.TxOutpoint', null, global);
goog.exportSymbol('proto.UpdateMarketFeeReply', null, global);
goog.exportSymbol('proto.UpdateMarketFixedFeeRequest', null, global);
goog.exportSymbol('proto.UpdateMarketPercentageFeeRequest', null, global);
goog.exportSymbol('proto.UpdateMarketPriceReply', null, global);
goog.exportSymbol('proto.UpdateMarketPriceRequest', null, global);
goog.exportSymbol('proto.UpdateMarketStrategyReply', null, global);
goog.exportSymbol('proto.UpdateMarketStrategyRequest', null, global);
goog.exportSymbol('proto.UtxoInfo', null, global);
goog.exportSymbol('proto.WebhookInfo', null, global);
goog.exportSymbol('proto.WithdrawFeeFragmenterReply', null, global);
goog.exportSymbol('proto.WithdrawFeeFragmenterRequest', null, global);
goog.exportSymbol('proto.WithdrawFeeReply', null, global);
goog.exportSymbol('proto.WithdrawFeeRequest', null, global);
goog.exportSymbol('proto.WithdrawMarketFragmenterReply', null, global);
goog.exportSymbol('proto.WithdrawMarketFragmenterRequest', null, global);
goog.exportSymbol('proto.WithdrawMarketReply', null, global);
goog.exportSymbol('proto.WithdrawMarketRequest', null, global);
goog.exportSymbol('proto.Withdrawal', null, global);
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
proto.GetInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetInfoRequest.displayName = 'proto.GetInfoRequest';
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
proto.GetInfoReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GetInfoReply.repeatedFields_, null);
};
goog.inherits(proto.GetInfoReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetInfoReply.displayName = 'proto.GetInfoReply';
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
proto.GetFeeAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetFeeAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetFeeAddressRequest.displayName = 'proto.GetFeeAddressRequest';
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
proto.GetFeeAddressReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GetFeeAddressReply.repeatedFields_, null);
};
goog.inherits(proto.GetFeeAddressReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetFeeAddressReply.displayName = 'proto.GetFeeAddressReply';
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
proto.ListFeeAddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListFeeAddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListFeeAddressesRequest.displayName = 'proto.ListFeeAddressesRequest';
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
proto.ListFeeAddressesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ListFeeAddressesReply.repeatedFields_, null);
};
goog.inherits(proto.ListFeeAddressesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListFeeAddressesReply.displayName = 'proto.ListFeeAddressesReply';
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
proto.GetFeeBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetFeeBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetFeeBalanceRequest.displayName = 'proto.GetFeeBalanceRequest';
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
proto.GetFeeBalanceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetFeeBalanceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetFeeBalanceReply.displayName = 'proto.GetFeeBalanceReply';
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
proto.ClaimFeeDepositsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ClaimFeeDepositsRequest.repeatedFields_, null);
};
goog.inherits(proto.ClaimFeeDepositsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ClaimFeeDepositsRequest.displayName = 'proto.ClaimFeeDepositsRequest';
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
proto.ClaimFeeDepositsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ClaimFeeDepositsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ClaimFeeDepositsReply.displayName = 'proto.ClaimFeeDepositsReply';
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
proto.WithdrawFeeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WithdrawFeeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WithdrawFeeRequest.displayName = 'proto.WithdrawFeeRequest';
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
proto.WithdrawFeeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WithdrawFeeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WithdrawFeeReply.displayName = 'proto.WithdrawFeeReply';
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
proto.NewMarketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NewMarketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NewMarketRequest.displayName = 'proto.NewMarketRequest';
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
proto.NewMarketReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NewMarketReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NewMarketReply.displayName = 'proto.NewMarketReply';
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
proto.GetMarketInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetMarketInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetMarketInfoRequest.displayName = 'proto.GetMarketInfoRequest';
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
proto.GetMarketInfoReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetMarketInfoReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetMarketInfoReply.displayName = 'proto.GetMarketInfoReply';
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
proto.GetMarketAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetMarketAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetMarketAddressRequest.displayName = 'proto.GetMarketAddressRequest';
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
proto.GetMarketAddressReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GetMarketAddressReply.repeatedFields_, null);
};
goog.inherits(proto.GetMarketAddressReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetMarketAddressReply.displayName = 'proto.GetMarketAddressReply';
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
proto.ListMarketAddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListMarketAddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListMarketAddressesRequest.displayName = 'proto.ListMarketAddressesRequest';
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
proto.ListMarketAddressesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ListMarketAddressesReply.repeatedFields_, null);
};
goog.inherits(proto.ListMarketAddressesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListMarketAddressesReply.displayName = 'proto.ListMarketAddressesReply';
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
proto.GetMarketBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetMarketBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetMarketBalanceRequest.displayName = 'proto.GetMarketBalanceRequest';
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
proto.GetMarketBalanceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetMarketBalanceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetMarketBalanceReply.displayName = 'proto.GetMarketBalanceReply';
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
proto.ClaimMarketDepositsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ClaimMarketDepositsRequest.repeatedFields_, null);
};
goog.inherits(proto.ClaimMarketDepositsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ClaimMarketDepositsRequest.displayName = 'proto.ClaimMarketDepositsRequest';
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
proto.ClaimMarketDepositsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ClaimMarketDepositsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ClaimMarketDepositsReply.displayName = 'proto.ClaimMarketDepositsReply';
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
proto.OpenMarketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.OpenMarketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OpenMarketRequest.displayName = 'proto.OpenMarketRequest';
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
proto.OpenMarketReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.OpenMarketReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OpenMarketReply.displayName = 'proto.OpenMarketReply';
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
proto.CloseMarketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CloseMarketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CloseMarketRequest.displayName = 'proto.CloseMarketRequest';
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
proto.CloseMarketReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CloseMarketReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CloseMarketReply.displayName = 'proto.CloseMarketReply';
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
proto.ListMarketsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListMarketsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListMarketsRequest.displayName = 'proto.ListMarketsRequest';
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
proto.ListMarketsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ListMarketsReply.repeatedFields_, null);
};
goog.inherits(proto.ListMarketsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListMarketsReply.displayName = 'proto.ListMarketsReply';
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
proto.DropMarketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DropMarketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DropMarketRequest.displayName = 'proto.DropMarketRequest';
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
proto.DropMarketReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DropMarketReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DropMarketReply.displayName = 'proto.DropMarketReply';
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
proto.GetMarketCollectedSwapFeesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetMarketCollectedSwapFeesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetMarketCollectedSwapFeesRequest.displayName = 'proto.GetMarketCollectedSwapFeesRequest';
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
proto.GetMarketCollectedSwapFeesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GetMarketCollectedSwapFeesReply.repeatedFields_, null);
};
goog.inherits(proto.GetMarketCollectedSwapFeesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetMarketCollectedSwapFeesReply.displayName = 'proto.GetMarketCollectedSwapFeesReply';
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
proto.WithdrawMarketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WithdrawMarketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WithdrawMarketRequest.displayName = 'proto.WithdrawMarketRequest';
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
proto.WithdrawMarketReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WithdrawMarketReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WithdrawMarketReply.displayName = 'proto.WithdrawMarketReply';
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
proto.UpdateMarketPercentageFeeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UpdateMarketPercentageFeeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UpdateMarketPercentageFeeRequest.displayName = 'proto.UpdateMarketPercentageFeeRequest';
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
proto.UpdateMarketFixedFeeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UpdateMarketFixedFeeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UpdateMarketFixedFeeRequest.displayName = 'proto.UpdateMarketFixedFeeRequest';
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
proto.UpdateMarketFeeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UpdateMarketFeeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UpdateMarketFeeReply.displayName = 'proto.UpdateMarketFeeReply';
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
proto.UpdateMarketPriceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UpdateMarketPriceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UpdateMarketPriceRequest.displayName = 'proto.UpdateMarketPriceRequest';
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
proto.UpdateMarketPriceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UpdateMarketPriceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UpdateMarketPriceReply.displayName = 'proto.UpdateMarketPriceReply';
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
proto.UpdateMarketStrategyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UpdateMarketStrategyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UpdateMarketStrategyRequest.displayName = 'proto.UpdateMarketStrategyRequest';
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
proto.UpdateMarketStrategyReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UpdateMarketStrategyReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UpdateMarketStrategyReply.displayName = 'proto.UpdateMarketStrategyReply';
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
proto.GetFeeFragmenterAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetFeeFragmenterAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetFeeFragmenterAddressRequest.displayName = 'proto.GetFeeFragmenterAddressRequest';
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
proto.GetFeeFragmenterAddressReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GetFeeFragmenterAddressReply.repeatedFields_, null);
};
goog.inherits(proto.GetFeeFragmenterAddressReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetFeeFragmenterAddressReply.displayName = 'proto.GetFeeFragmenterAddressReply';
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
proto.ListFeeFragmenterAddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListFeeFragmenterAddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListFeeFragmenterAddressesRequest.displayName = 'proto.ListFeeFragmenterAddressesRequest';
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
proto.ListFeeFragmenterAddressesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ListFeeFragmenterAddressesReply.repeatedFields_, null);
};
goog.inherits(proto.ListFeeFragmenterAddressesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListFeeFragmenterAddressesReply.displayName = 'proto.ListFeeFragmenterAddressesReply';
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
proto.GetFeeFragmenterBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetFeeFragmenterBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetFeeFragmenterBalanceRequest.displayName = 'proto.GetFeeFragmenterBalanceRequest';
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
proto.GetFeeFragmenterBalanceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetFeeFragmenterBalanceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetFeeFragmenterBalanceReply.displayName = 'proto.GetFeeFragmenterBalanceReply';
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
proto.FeeFragmenterSplitFundsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FeeFragmenterSplitFundsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FeeFragmenterSplitFundsRequest.displayName = 'proto.FeeFragmenterSplitFundsRequest';
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
proto.FragmenterSplitFundsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FragmenterSplitFundsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FragmenterSplitFundsReply.displayName = 'proto.FragmenterSplitFundsReply';
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
proto.WithdrawFeeFragmenterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WithdrawFeeFragmenterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WithdrawFeeFragmenterRequest.displayName = 'proto.WithdrawFeeFragmenterRequest';
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
proto.WithdrawFeeFragmenterReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WithdrawFeeFragmenterReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WithdrawFeeFragmenterReply.displayName = 'proto.WithdrawFeeFragmenterReply';
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
proto.GetMarketFragmenterAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetMarketFragmenterAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetMarketFragmenterAddressRequest.displayName = 'proto.GetMarketFragmenterAddressRequest';
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
proto.GetMarketFragmenterAddressReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GetMarketFragmenterAddressReply.repeatedFields_, null);
};
goog.inherits(proto.GetMarketFragmenterAddressReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetMarketFragmenterAddressReply.displayName = 'proto.GetMarketFragmenterAddressReply';
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
proto.ListMarketFragmenterAddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListMarketFragmenterAddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListMarketFragmenterAddressesRequest.displayName = 'proto.ListMarketFragmenterAddressesRequest';
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
proto.ListMarketFragmenterAddressesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ListMarketFragmenterAddressesReply.repeatedFields_, null);
};
goog.inherits(proto.ListMarketFragmenterAddressesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListMarketFragmenterAddressesReply.displayName = 'proto.ListMarketFragmenterAddressesReply';
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
proto.GetMarketFragmenterBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetMarketFragmenterBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetMarketFragmenterBalanceRequest.displayName = 'proto.GetMarketFragmenterBalanceRequest';
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
proto.GetMarketFragmenterBalanceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetMarketFragmenterBalanceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetMarketFragmenterBalanceReply.displayName = 'proto.GetMarketFragmenterBalanceReply';
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
proto.MarketFragmenterSplitFundsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MarketFragmenterSplitFundsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MarketFragmenterSplitFundsRequest.displayName = 'proto.MarketFragmenterSplitFundsRequest';
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
proto.WithdrawMarketFragmenterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WithdrawMarketFragmenterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WithdrawMarketFragmenterRequest.displayName = 'proto.WithdrawMarketFragmenterRequest';
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
proto.WithdrawMarketFragmenterReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WithdrawMarketFragmenterReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WithdrawMarketFragmenterReply.displayName = 'proto.WithdrawMarketFragmenterReply';
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
proto.ListTradesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListTradesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListTradesRequest.displayName = 'proto.ListTradesRequest';
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
proto.ListTradesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ListTradesReply.repeatedFields_, null);
};
goog.inherits(proto.ListTradesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListTradesReply.displayName = 'proto.ListTradesReply';
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
proto.ReloadUtxosRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ReloadUtxosRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ReloadUtxosRequest.displayName = 'proto.ReloadUtxosRequest';
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
proto.ReloadUtxosReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ReloadUtxosReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ReloadUtxosReply.displayName = 'proto.ReloadUtxosReply';
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
proto.ListUtxosRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListUtxosRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListUtxosRequest.displayName = 'proto.ListUtxosRequest';
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
proto.ListUtxosReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ListUtxosReply.repeatedFields_, null);
};
goog.inherits(proto.ListUtxosReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListUtxosReply.displayName = 'proto.ListUtxosReply';
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
proto.AddWebhookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AddWebhookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AddWebhookRequest.displayName = 'proto.AddWebhookRequest';
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
proto.AddWebhookReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AddWebhookReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AddWebhookReply.displayName = 'proto.AddWebhookReply';
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
proto.RemoveWebhookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveWebhookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveWebhookRequest.displayName = 'proto.RemoveWebhookRequest';
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
proto.RemoveWebhookReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveWebhookReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveWebhookReply.displayName = 'proto.RemoveWebhookReply';
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
proto.ListWebhooksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListWebhooksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListWebhooksRequest.displayName = 'proto.ListWebhooksRequest';
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
proto.ListWebhooksReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ListWebhooksReply.repeatedFields_, null);
};
goog.inherits(proto.ListWebhooksReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListWebhooksReply.displayName = 'proto.ListWebhooksReply';
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
proto.ListDepositsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListDepositsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListDepositsRequest.displayName = 'proto.ListDepositsRequest';
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
proto.ListDepositsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ListDepositsReply.repeatedFields_, null);
};
goog.inherits(proto.ListDepositsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListDepositsReply.displayName = 'proto.ListDepositsReply';
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
proto.ListWithdrawalsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListWithdrawalsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListWithdrawalsRequest.displayName = 'proto.ListWithdrawalsRequest';
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
proto.ListWithdrawalsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ListWithdrawalsReply.repeatedFields_, null);
};
goog.inherits(proto.ListWithdrawalsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListWithdrawalsReply.displayName = 'proto.ListWithdrawalsReply';
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
proto.AccountInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AccountInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AccountInfo.displayName = 'proto.AccountInfo';
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
proto.MarketInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MarketInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MarketInfo.displayName = 'proto.MarketInfo';
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
proto.UtxoInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UtxoInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UtxoInfo.displayName = 'proto.UtxoInfo';
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
proto.TradeStatusInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TradeStatusInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TradeStatusInfo.displayName = 'proto.TradeStatusInfo';
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
proto.SwapInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SwapInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SwapInfo.displayName = 'proto.SwapInfo';
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
proto.SwapFailInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SwapFailInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SwapFailInfo.displayName = 'proto.SwapFailInfo';
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
proto.TradeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TradeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TradeInfo.displayName = 'proto.TradeInfo';
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
proto.FeeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FeeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FeeInfo.displayName = 'proto.FeeInfo';
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
proto.TxOutpoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TxOutpoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TxOutpoint.displayName = 'proto.TxOutpoint';
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
proto.TradePrice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TradePrice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TradePrice.displayName = 'proto.TradePrice';
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
proto.WebhookInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WebhookInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WebhookInfo.displayName = 'proto.WebhookInfo';
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
proto.Deposit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Deposit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Deposit.displayName = 'proto.Deposit';
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
proto.Withdrawal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Withdrawal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Withdrawal.displayName = 'proto.Withdrawal';
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
proto.Page = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Page, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Page.displayName = 'proto.Page';
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
proto.GetInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetInfoRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.GetInfoRequest}
 */
proto.GetInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetInfoRequest;
  return proto.GetInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetInfoRequest}
 */
proto.GetInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.GetInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GetInfoReply.repeatedFields_ = [3];



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
proto.GetInfoReply.prototype.toObject = function(opt_includeInstance) {
  return proto.GetInfoReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetInfoReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetInfoReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    rootPath: jspb.Message.getFieldWithDefault(msg, 1, ""),
    masterBlindingKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    accountInfoList: jspb.Message.toObjectList(msg.getAccountInfoList(),
    proto.AccountInfo.toObject, includeInstance)
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
 * @return {!proto.GetInfoReply}
 */
proto.GetInfoReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetInfoReply;
  return proto.GetInfoReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetInfoReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetInfoReply}
 */
proto.GetInfoReply.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.AccountInfo;
      reader.readMessage(value,proto.AccountInfo.deserializeBinaryFromReader);
      msg.addAccountInfo(value);
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
proto.GetInfoReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetInfoReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetInfoReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetInfoReply.serializeBinaryToWriter = function(message, writer) {
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
      proto.AccountInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string root_path = 1;
 * @return {string}
 */
proto.GetInfoReply.prototype.getRootPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetInfoReply} returns this
 */
proto.GetInfoReply.prototype.setRootPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string master_blinding_key = 2;
 * @return {string}
 */
proto.GetInfoReply.prototype.getMasterBlindingKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetInfoReply} returns this
 */
proto.GetInfoReply.prototype.setMasterBlindingKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated AccountInfo account_info = 3;
 * @return {!Array<!proto.AccountInfo>}
 */
proto.GetInfoReply.prototype.getAccountInfoList = function() {
  return /** @type{!Array<!proto.AccountInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.AccountInfo, 3));
};


/**
 * @param {!Array<!proto.AccountInfo>} value
 * @return {!proto.GetInfoReply} returns this
*/
proto.GetInfoReply.prototype.setAccountInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.AccountInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.AccountInfo}
 */
proto.GetInfoReply.prototype.addAccountInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.AccountInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.GetInfoReply} returns this
 */
proto.GetInfoReply.prototype.clearAccountInfoList = function() {
  return this.setAccountInfoList([]);
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
proto.GetFeeAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetFeeAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetFeeAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetFeeAddressRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.GetFeeAddressRequest}
 */
proto.GetFeeAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetFeeAddressRequest;
  return proto.GetFeeAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetFeeAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetFeeAddressRequest}
 */
proto.GetFeeAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.GetFeeAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetFeeAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetFeeAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetFeeAddressRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.GetFeeAddressRequest.prototype.getNumOfAddresses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.GetFeeAddressRequest} returns this
 */
proto.GetFeeAddressRequest.prototype.setNumOfAddresses = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GetFeeAddressReply.repeatedFields_ = [1];



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
proto.GetFeeAddressReply.prototype.toObject = function(opt_includeInstance) {
  return proto.GetFeeAddressReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetFeeAddressReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetFeeAddressReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    types_pb.AddressWithBlindingKey.toObject, includeInstance)
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
 * @return {!proto.GetFeeAddressReply}
 */
proto.GetFeeAddressReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetFeeAddressReply;
  return proto.GetFeeAddressReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetFeeAddressReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetFeeAddressReply}
 */
proto.GetFeeAddressReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.AddressWithBlindingKey;
      reader.readMessage(value,types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
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
proto.GetFeeAddressReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetFeeAddressReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetFeeAddressReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetFeeAddressReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.AddressWithBlindingKey>}
 */
proto.GetFeeAddressReply.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.AddressWithBlindingKey>} value
 * @return {!proto.GetFeeAddressReply} returns this
*/
proto.GetFeeAddressReply.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.AddressWithBlindingKey}
 */
proto.GetFeeAddressReply.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.GetFeeAddressReply} returns this
 */
proto.GetFeeAddressReply.prototype.clearAddressWithBlindingKeyList = function() {
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
proto.ListFeeAddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ListFeeAddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListFeeAddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListFeeAddressesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ListFeeAddressesRequest}
 */
proto.ListFeeAddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListFeeAddressesRequest;
  return proto.ListFeeAddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListFeeAddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListFeeAddressesRequest}
 */
proto.ListFeeAddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ListFeeAddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListFeeAddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListFeeAddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListFeeAddressesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ListFeeAddressesReply.repeatedFields_ = [1];



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
proto.ListFeeAddressesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ListFeeAddressesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListFeeAddressesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListFeeAddressesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    types_pb.AddressWithBlindingKey.toObject, includeInstance)
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
 * @return {!proto.ListFeeAddressesReply}
 */
proto.ListFeeAddressesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListFeeAddressesReply;
  return proto.ListFeeAddressesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListFeeAddressesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListFeeAddressesReply}
 */
proto.ListFeeAddressesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.AddressWithBlindingKey;
      reader.readMessage(value,types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
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
proto.ListFeeAddressesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListFeeAddressesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListFeeAddressesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListFeeAddressesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.AddressWithBlindingKey>}
 */
proto.ListFeeAddressesReply.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.AddressWithBlindingKey>} value
 * @return {!proto.ListFeeAddressesReply} returns this
*/
proto.ListFeeAddressesReply.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.AddressWithBlindingKey}
 */
proto.ListFeeAddressesReply.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListFeeAddressesReply} returns this
 */
proto.ListFeeAddressesReply.prototype.clearAddressWithBlindingKeyList = function() {
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
proto.GetFeeBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetFeeBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetFeeBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetFeeBalanceRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.GetFeeBalanceRequest}
 */
proto.GetFeeBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetFeeBalanceRequest;
  return proto.GetFeeBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetFeeBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetFeeBalanceRequest}
 */
proto.GetFeeBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.GetFeeBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetFeeBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetFeeBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetFeeBalanceRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.GetFeeBalanceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.GetFeeBalanceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetFeeBalanceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetFeeBalanceReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.GetFeeBalanceReply}
 */
proto.GetFeeBalanceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetFeeBalanceReply;
  return proto.GetFeeBalanceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetFeeBalanceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetFeeBalanceReply}
 */
proto.GetFeeBalanceReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.GetFeeBalanceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetFeeBalanceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetFeeBalanceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetFeeBalanceReply.serializeBinaryToWriter = function(message, writer) {
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
proto.GetFeeBalanceReply.prototype.getAvailableBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.GetFeeBalanceReply} returns this
 */
proto.GetFeeBalanceReply.prototype.setAvailableBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 total_balance = 2;
 * @return {number}
 */
proto.GetFeeBalanceReply.prototype.getTotalBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.GetFeeBalanceReply} returns this
 */
proto.GetFeeBalanceReply.prototype.setTotalBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ClaimFeeDepositsRequest.repeatedFields_ = [1];



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
proto.ClaimFeeDepositsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ClaimFeeDepositsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ClaimFeeDepositsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClaimFeeDepositsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    outpointsList: jspb.Message.toObjectList(msg.getOutpointsList(),
    proto.TxOutpoint.toObject, includeInstance)
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
 * @return {!proto.ClaimFeeDepositsRequest}
 */
proto.ClaimFeeDepositsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ClaimFeeDepositsRequest;
  return proto.ClaimFeeDepositsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClaimFeeDepositsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClaimFeeDepositsRequest}
 */
proto.ClaimFeeDepositsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.TxOutpoint;
      reader.readMessage(value,proto.TxOutpoint.deserializeBinaryFromReader);
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
proto.ClaimFeeDepositsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ClaimFeeDepositsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ClaimFeeDepositsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClaimFeeDepositsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutpointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.TxOutpoint.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TxOutpoint outpoints = 1;
 * @return {!Array<!proto.TxOutpoint>}
 */
proto.ClaimFeeDepositsRequest.prototype.getOutpointsList = function() {
  return /** @type{!Array<!proto.TxOutpoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.TxOutpoint, 1));
};


/**
 * @param {!Array<!proto.TxOutpoint>} value
 * @return {!proto.ClaimFeeDepositsRequest} returns this
*/
proto.ClaimFeeDepositsRequest.prototype.setOutpointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.TxOutpoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.TxOutpoint}
 */
proto.ClaimFeeDepositsRequest.prototype.addOutpoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.TxOutpoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ClaimFeeDepositsRequest} returns this
 */
proto.ClaimFeeDepositsRequest.prototype.clearOutpointsList = function() {
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
proto.ClaimFeeDepositsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ClaimFeeDepositsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ClaimFeeDepositsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClaimFeeDepositsReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ClaimFeeDepositsReply}
 */
proto.ClaimFeeDepositsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ClaimFeeDepositsReply;
  return proto.ClaimFeeDepositsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClaimFeeDepositsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClaimFeeDepositsReply}
 */
proto.ClaimFeeDepositsReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ClaimFeeDepositsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ClaimFeeDepositsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ClaimFeeDepositsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClaimFeeDepositsReply.serializeBinaryToWriter = function(message, writer) {
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
proto.WithdrawFeeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.WithdrawFeeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WithdrawFeeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WithdrawFeeRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.WithdrawFeeRequest}
 */
proto.WithdrawFeeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WithdrawFeeRequest;
  return proto.WithdrawFeeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WithdrawFeeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WithdrawFeeRequest}
 */
proto.WithdrawFeeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.WithdrawFeeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WithdrawFeeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WithdrawFeeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WithdrawFeeRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.WithdrawFeeRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.WithdrawFeeRequest} returns this
 */
proto.WithdrawFeeRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 millisats_per_byte = 2;
 * @return {number}
 */
proto.WithdrawFeeRequest.prototype.getMillisatsPerByte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.WithdrawFeeRequest} returns this
 */
proto.WithdrawFeeRequest.prototype.setMillisatsPerByte = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.WithdrawFeeRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.WithdrawFeeRequest} returns this
 */
proto.WithdrawFeeRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string asset = 4;
 * @return {string}
 */
proto.WithdrawFeeRequest.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.WithdrawFeeRequest} returns this
 */
proto.WithdrawFeeRequest.prototype.setAsset = function(value) {
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
proto.WithdrawFeeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.WithdrawFeeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WithdrawFeeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WithdrawFeeReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.WithdrawFeeReply}
 */
proto.WithdrawFeeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WithdrawFeeReply;
  return proto.WithdrawFeeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WithdrawFeeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WithdrawFeeReply}
 */
proto.WithdrawFeeReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.WithdrawFeeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WithdrawFeeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WithdrawFeeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WithdrawFeeReply.serializeBinaryToWriter = function(message, writer) {
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
proto.WithdrawFeeReply.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.WithdrawFeeReply} returns this
 */
proto.WithdrawFeeReply.prototype.setTxid = function(value) {
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
proto.NewMarketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.NewMarketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NewMarketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NewMarketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && types_pb.Market.toObject(includeInstance, f)
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
 * @return {!proto.NewMarketRequest}
 */
proto.NewMarketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NewMarketRequest;
  return proto.NewMarketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NewMarketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NewMarketRequest}
 */
proto.NewMarketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.Market;
      reader.readMessage(value,types_pb.Market.deserializeBinaryFromReader);
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
proto.NewMarketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NewMarketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NewMarketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NewMarketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.Market.serializeBinaryToWriter
    );
  }
};


/**
 * optional Market market = 1;
 * @return {?proto.Market}
 */
proto.NewMarketRequest.prototype.getMarket = function() {
  return /** @type{?proto.Market} */ (
    jspb.Message.getWrapperField(this, types_pb.Market, 1));
};


/**
 * @param {?proto.Market|undefined} value
 * @return {!proto.NewMarketRequest} returns this
*/
proto.NewMarketRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.NewMarketRequest} returns this
 */
proto.NewMarketRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NewMarketRequest.prototype.hasMarket = function() {
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
proto.NewMarketReply.prototype.toObject = function(opt_includeInstance) {
  return proto.NewMarketReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NewMarketReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NewMarketReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.NewMarketReply}
 */
proto.NewMarketReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NewMarketReply;
  return proto.NewMarketReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NewMarketReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NewMarketReply}
 */
proto.NewMarketReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.NewMarketReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NewMarketReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NewMarketReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NewMarketReply.serializeBinaryToWriter = function(message, writer) {
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
proto.GetMarketInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetMarketInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetMarketInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && types_pb.Market.toObject(includeInstance, f)
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
 * @return {!proto.GetMarketInfoRequest}
 */
proto.GetMarketInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetMarketInfoRequest;
  return proto.GetMarketInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetMarketInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetMarketInfoRequest}
 */
proto.GetMarketInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.Market;
      reader.readMessage(value,types_pb.Market.deserializeBinaryFromReader);
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
proto.GetMarketInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetMarketInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetMarketInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.Market.serializeBinaryToWriter
    );
  }
};


/**
 * optional Market market = 1;
 * @return {?proto.Market}
 */
proto.GetMarketInfoRequest.prototype.getMarket = function() {
  return /** @type{?proto.Market} */ (
    jspb.Message.getWrapperField(this, types_pb.Market, 1));
};


/**
 * @param {?proto.Market|undefined} value
 * @return {!proto.GetMarketInfoRequest} returns this
*/
proto.GetMarketInfoRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetMarketInfoRequest} returns this
 */
proto.GetMarketInfoRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetMarketInfoRequest.prototype.hasMarket = function() {
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
proto.GetMarketInfoReply.prototype.toObject = function(opt_includeInstance) {
  return proto.GetMarketInfoReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetMarketInfoReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketInfoReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && proto.MarketInfo.toObject(includeInstance, f)
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
 * @return {!proto.GetMarketInfoReply}
 */
proto.GetMarketInfoReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetMarketInfoReply;
  return proto.GetMarketInfoReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetMarketInfoReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetMarketInfoReply}
 */
proto.GetMarketInfoReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MarketInfo;
      reader.readMessage(value,proto.MarketInfo.deserializeBinaryFromReader);
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
proto.GetMarketInfoReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetMarketInfoReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetMarketInfoReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketInfoReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.MarketInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional MarketInfo info = 1;
 * @return {?proto.MarketInfo}
 */
proto.GetMarketInfoReply.prototype.getInfo = function() {
  return /** @type{?proto.MarketInfo} */ (
    jspb.Message.getWrapperField(this, proto.MarketInfo, 1));
};


/**
 * @param {?proto.MarketInfo|undefined} value
 * @return {!proto.GetMarketInfoReply} returns this
*/
proto.GetMarketInfoReply.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetMarketInfoReply} returns this
 */
proto.GetMarketInfoReply.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetMarketInfoReply.prototype.hasInfo = function() {
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
proto.GetMarketAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetMarketAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetMarketAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && types_pb.Market.toObject(includeInstance, f),
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
 * @return {!proto.GetMarketAddressRequest}
 */
proto.GetMarketAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetMarketAddressRequest;
  return proto.GetMarketAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetMarketAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetMarketAddressRequest}
 */
proto.GetMarketAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.Market;
      reader.readMessage(value,types_pb.Market.deserializeBinaryFromReader);
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
proto.GetMarketAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetMarketAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetMarketAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.Market.serializeBinaryToWriter
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
 * optional Market market = 1;
 * @return {?proto.Market}
 */
proto.GetMarketAddressRequest.prototype.getMarket = function() {
  return /** @type{?proto.Market} */ (
    jspb.Message.getWrapperField(this, types_pb.Market, 1));
};


/**
 * @param {?proto.Market|undefined} value
 * @return {!proto.GetMarketAddressRequest} returns this
*/
proto.GetMarketAddressRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetMarketAddressRequest} returns this
 */
proto.GetMarketAddressRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetMarketAddressRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 num_of_addresses = 2;
 * @return {number}
 */
proto.GetMarketAddressRequest.prototype.getNumOfAddresses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.GetMarketAddressRequest} returns this
 */
proto.GetMarketAddressRequest.prototype.setNumOfAddresses = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GetMarketAddressReply.repeatedFields_ = [1];



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
proto.GetMarketAddressReply.prototype.toObject = function(opt_includeInstance) {
  return proto.GetMarketAddressReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetMarketAddressReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketAddressReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    types_pb.AddressWithBlindingKey.toObject, includeInstance)
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
 * @return {!proto.GetMarketAddressReply}
 */
proto.GetMarketAddressReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetMarketAddressReply;
  return proto.GetMarketAddressReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetMarketAddressReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetMarketAddressReply}
 */
proto.GetMarketAddressReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.AddressWithBlindingKey;
      reader.readMessage(value,types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
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
proto.GetMarketAddressReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetMarketAddressReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetMarketAddressReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketAddressReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.AddressWithBlindingKey>}
 */
proto.GetMarketAddressReply.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.AddressWithBlindingKey>} value
 * @return {!proto.GetMarketAddressReply} returns this
*/
proto.GetMarketAddressReply.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.AddressWithBlindingKey}
 */
proto.GetMarketAddressReply.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.GetMarketAddressReply} returns this
 */
proto.GetMarketAddressReply.prototype.clearAddressWithBlindingKeyList = function() {
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
proto.ListMarketAddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ListMarketAddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListMarketAddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListMarketAddressesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && types_pb.Market.toObject(includeInstance, f)
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
 * @return {!proto.ListMarketAddressesRequest}
 */
proto.ListMarketAddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListMarketAddressesRequest;
  return proto.ListMarketAddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListMarketAddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListMarketAddressesRequest}
 */
proto.ListMarketAddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.Market;
      reader.readMessage(value,types_pb.Market.deserializeBinaryFromReader);
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
proto.ListMarketAddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListMarketAddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListMarketAddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListMarketAddressesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.Market.serializeBinaryToWriter
    );
  }
};


/**
 * optional Market market = 1;
 * @return {?proto.Market}
 */
proto.ListMarketAddressesRequest.prototype.getMarket = function() {
  return /** @type{?proto.Market} */ (
    jspb.Message.getWrapperField(this, types_pb.Market, 1));
};


/**
 * @param {?proto.Market|undefined} value
 * @return {!proto.ListMarketAddressesRequest} returns this
*/
proto.ListMarketAddressesRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ListMarketAddressesRequest} returns this
 */
proto.ListMarketAddressesRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ListMarketAddressesRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ListMarketAddressesReply.repeatedFields_ = [1];



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
proto.ListMarketAddressesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ListMarketAddressesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListMarketAddressesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListMarketAddressesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    types_pb.AddressWithBlindingKey.toObject, includeInstance)
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
 * @return {!proto.ListMarketAddressesReply}
 */
proto.ListMarketAddressesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListMarketAddressesReply;
  return proto.ListMarketAddressesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListMarketAddressesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListMarketAddressesReply}
 */
proto.ListMarketAddressesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.AddressWithBlindingKey;
      reader.readMessage(value,types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
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
proto.ListMarketAddressesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListMarketAddressesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListMarketAddressesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListMarketAddressesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.AddressWithBlindingKey>}
 */
proto.ListMarketAddressesReply.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.AddressWithBlindingKey>} value
 * @return {!proto.ListMarketAddressesReply} returns this
*/
proto.ListMarketAddressesReply.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.AddressWithBlindingKey}
 */
proto.ListMarketAddressesReply.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListMarketAddressesReply} returns this
 */
proto.ListMarketAddressesReply.prototype.clearAddressWithBlindingKeyList = function() {
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
proto.GetMarketBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetMarketBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetMarketBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && types_pb.Market.toObject(includeInstance, f)
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
 * @return {!proto.GetMarketBalanceRequest}
 */
proto.GetMarketBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetMarketBalanceRequest;
  return proto.GetMarketBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetMarketBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetMarketBalanceRequest}
 */
proto.GetMarketBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.Market;
      reader.readMessage(value,types_pb.Market.deserializeBinaryFromReader);
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
proto.GetMarketBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetMarketBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetMarketBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.Market.serializeBinaryToWriter
    );
  }
};


/**
 * optional Market market = 1;
 * @return {?proto.Market}
 */
proto.GetMarketBalanceRequest.prototype.getMarket = function() {
  return /** @type{?proto.Market} */ (
    jspb.Message.getWrapperField(this, types_pb.Market, 1));
};


/**
 * @param {?proto.Market|undefined} value
 * @return {!proto.GetMarketBalanceRequest} returns this
*/
proto.GetMarketBalanceRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetMarketBalanceRequest} returns this
 */
proto.GetMarketBalanceRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetMarketBalanceRequest.prototype.hasMarket = function() {
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
proto.GetMarketBalanceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.GetMarketBalanceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetMarketBalanceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketBalanceReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    availableBalance: (f = msg.getAvailableBalance()) && types_pb.Balance.toObject(includeInstance, f),
    totalBalance: (f = msg.getTotalBalance()) && types_pb.Balance.toObject(includeInstance, f)
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
 * @return {!proto.GetMarketBalanceReply}
 */
proto.GetMarketBalanceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetMarketBalanceReply;
  return proto.GetMarketBalanceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetMarketBalanceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetMarketBalanceReply}
 */
proto.GetMarketBalanceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.Balance;
      reader.readMessage(value,types_pb.Balance.deserializeBinaryFromReader);
      msg.setAvailableBalance(value);
      break;
    case 2:
      var value = new types_pb.Balance;
      reader.readMessage(value,types_pb.Balance.deserializeBinaryFromReader);
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
proto.GetMarketBalanceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetMarketBalanceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetMarketBalanceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketBalanceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailableBalance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.Balance.serializeBinaryToWriter
    );
  }
  f = message.getTotalBalance();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      types_pb.Balance.serializeBinaryToWriter
    );
  }
};


/**
 * optional Balance available_balance = 1;
 * @return {?proto.Balance}
 */
proto.GetMarketBalanceReply.prototype.getAvailableBalance = function() {
  return /** @type{?proto.Balance} */ (
    jspb.Message.getWrapperField(this, types_pb.Balance, 1));
};


/**
 * @param {?proto.Balance|undefined} value
 * @return {!proto.GetMarketBalanceReply} returns this
*/
proto.GetMarketBalanceReply.prototype.setAvailableBalance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetMarketBalanceReply} returns this
 */
proto.GetMarketBalanceReply.prototype.clearAvailableBalance = function() {
  return this.setAvailableBalance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetMarketBalanceReply.prototype.hasAvailableBalance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Balance total_balance = 2;
 * @return {?proto.Balance}
 */
proto.GetMarketBalanceReply.prototype.getTotalBalance = function() {
  return /** @type{?proto.Balance} */ (
    jspb.Message.getWrapperField(this, types_pb.Balance, 2));
};


/**
 * @param {?proto.Balance|undefined} value
 * @return {!proto.GetMarketBalanceReply} returns this
*/
proto.GetMarketBalanceReply.prototype.setTotalBalance = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetMarketBalanceReply} returns this
 */
proto.GetMarketBalanceReply.prototype.clearTotalBalance = function() {
  return this.setTotalBalance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetMarketBalanceReply.prototype.hasTotalBalance = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ClaimMarketDepositsRequest.repeatedFields_ = [2];



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
proto.ClaimMarketDepositsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ClaimMarketDepositsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ClaimMarketDepositsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClaimMarketDepositsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && types_pb.Market.toObject(includeInstance, f),
    outpointsList: jspb.Message.toObjectList(msg.getOutpointsList(),
    proto.TxOutpoint.toObject, includeInstance)
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
 * @return {!proto.ClaimMarketDepositsRequest}
 */
proto.ClaimMarketDepositsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ClaimMarketDepositsRequest;
  return proto.ClaimMarketDepositsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClaimMarketDepositsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClaimMarketDepositsRequest}
 */
proto.ClaimMarketDepositsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.Market;
      reader.readMessage(value,types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 2:
      var value = new proto.TxOutpoint;
      reader.readMessage(value,proto.TxOutpoint.deserializeBinaryFromReader);
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
proto.ClaimMarketDepositsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ClaimMarketDepositsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ClaimMarketDepositsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClaimMarketDepositsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.Market.serializeBinaryToWriter
    );
  }
  f = message.getOutpointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.TxOutpoint.serializeBinaryToWriter
    );
  }
};


/**
 * optional Market market = 1;
 * @return {?proto.Market}
 */
proto.ClaimMarketDepositsRequest.prototype.getMarket = function() {
  return /** @type{?proto.Market} */ (
    jspb.Message.getWrapperField(this, types_pb.Market, 1));
};


/**
 * @param {?proto.Market|undefined} value
 * @return {!proto.ClaimMarketDepositsRequest} returns this
*/
proto.ClaimMarketDepositsRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ClaimMarketDepositsRequest} returns this
 */
proto.ClaimMarketDepositsRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ClaimMarketDepositsRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated TxOutpoint outpoints = 2;
 * @return {!Array<!proto.TxOutpoint>}
 */
proto.ClaimMarketDepositsRequest.prototype.getOutpointsList = function() {
  return /** @type{!Array<!proto.TxOutpoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.TxOutpoint, 2));
};


/**
 * @param {!Array<!proto.TxOutpoint>} value
 * @return {!proto.ClaimMarketDepositsRequest} returns this
*/
proto.ClaimMarketDepositsRequest.prototype.setOutpointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.TxOutpoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.TxOutpoint}
 */
proto.ClaimMarketDepositsRequest.prototype.addOutpoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.TxOutpoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ClaimMarketDepositsRequest} returns this
 */
proto.ClaimMarketDepositsRequest.prototype.clearOutpointsList = function() {
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
proto.ClaimMarketDepositsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ClaimMarketDepositsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ClaimMarketDepositsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClaimMarketDepositsReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ClaimMarketDepositsReply}
 */
proto.ClaimMarketDepositsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ClaimMarketDepositsReply;
  return proto.ClaimMarketDepositsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClaimMarketDepositsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClaimMarketDepositsReply}
 */
proto.ClaimMarketDepositsReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ClaimMarketDepositsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ClaimMarketDepositsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ClaimMarketDepositsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClaimMarketDepositsReply.serializeBinaryToWriter = function(message, writer) {
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
proto.OpenMarketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.OpenMarketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OpenMarketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OpenMarketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && types_pb.Market.toObject(includeInstance, f)
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
 * @return {!proto.OpenMarketRequest}
 */
proto.OpenMarketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OpenMarketRequest;
  return proto.OpenMarketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OpenMarketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OpenMarketRequest}
 */
proto.OpenMarketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.Market;
      reader.readMessage(value,types_pb.Market.deserializeBinaryFromReader);
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
proto.OpenMarketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OpenMarketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OpenMarketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OpenMarketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.Market.serializeBinaryToWriter
    );
  }
};


/**
 * optional Market market = 1;
 * @return {?proto.Market}
 */
proto.OpenMarketRequest.prototype.getMarket = function() {
  return /** @type{?proto.Market} */ (
    jspb.Message.getWrapperField(this, types_pb.Market, 1));
};


/**
 * @param {?proto.Market|undefined} value
 * @return {!proto.OpenMarketRequest} returns this
*/
proto.OpenMarketRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.OpenMarketRequest} returns this
 */
proto.OpenMarketRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.OpenMarketRequest.prototype.hasMarket = function() {
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
proto.OpenMarketReply.prototype.toObject = function(opt_includeInstance) {
  return proto.OpenMarketReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OpenMarketReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OpenMarketReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.OpenMarketReply}
 */
proto.OpenMarketReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OpenMarketReply;
  return proto.OpenMarketReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OpenMarketReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OpenMarketReply}
 */
proto.OpenMarketReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.OpenMarketReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OpenMarketReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OpenMarketReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OpenMarketReply.serializeBinaryToWriter = function(message, writer) {
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
proto.CloseMarketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.CloseMarketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CloseMarketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CloseMarketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && types_pb.Market.toObject(includeInstance, f)
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
 * @return {!proto.CloseMarketRequest}
 */
proto.CloseMarketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CloseMarketRequest;
  return proto.CloseMarketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CloseMarketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CloseMarketRequest}
 */
proto.CloseMarketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.Market;
      reader.readMessage(value,types_pb.Market.deserializeBinaryFromReader);
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
proto.CloseMarketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CloseMarketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CloseMarketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CloseMarketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.Market.serializeBinaryToWriter
    );
  }
};


/**
 * optional Market market = 1;
 * @return {?proto.Market}
 */
proto.CloseMarketRequest.prototype.getMarket = function() {
  return /** @type{?proto.Market} */ (
    jspb.Message.getWrapperField(this, types_pb.Market, 1));
};


/**
 * @param {?proto.Market|undefined} value
 * @return {!proto.CloseMarketRequest} returns this
*/
proto.CloseMarketRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CloseMarketRequest} returns this
 */
proto.CloseMarketRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CloseMarketRequest.prototype.hasMarket = function() {
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
proto.CloseMarketReply.prototype.toObject = function(opt_includeInstance) {
  return proto.CloseMarketReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CloseMarketReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CloseMarketReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.CloseMarketReply}
 */
proto.CloseMarketReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CloseMarketReply;
  return proto.CloseMarketReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CloseMarketReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CloseMarketReply}
 */
proto.CloseMarketReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.CloseMarketReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CloseMarketReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CloseMarketReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CloseMarketReply.serializeBinaryToWriter = function(message, writer) {
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
proto.ListMarketsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ListMarketsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListMarketsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListMarketsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ListMarketsRequest}
 */
proto.ListMarketsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListMarketsRequest;
  return proto.ListMarketsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListMarketsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListMarketsRequest}
 */
proto.ListMarketsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ListMarketsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListMarketsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListMarketsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListMarketsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ListMarketsReply.repeatedFields_ = [1];



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
proto.ListMarketsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ListMarketsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListMarketsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListMarketsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketsList: jspb.Message.toObjectList(msg.getMarketsList(),
    proto.MarketInfo.toObject, includeInstance)
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
 * @return {!proto.ListMarketsReply}
 */
proto.ListMarketsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListMarketsReply;
  return proto.ListMarketsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListMarketsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListMarketsReply}
 */
proto.ListMarketsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MarketInfo;
      reader.readMessage(value,proto.MarketInfo.deserializeBinaryFromReader);
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
proto.ListMarketsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListMarketsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListMarketsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListMarketsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.MarketInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MarketInfo markets = 1;
 * @return {!Array<!proto.MarketInfo>}
 */
proto.ListMarketsReply.prototype.getMarketsList = function() {
  return /** @type{!Array<!proto.MarketInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MarketInfo, 1));
};


/**
 * @param {!Array<!proto.MarketInfo>} value
 * @return {!proto.ListMarketsReply} returns this
*/
proto.ListMarketsReply.prototype.setMarketsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.MarketInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MarketInfo}
 */
proto.ListMarketsReply.prototype.addMarkets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.MarketInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListMarketsReply} returns this
 */
proto.ListMarketsReply.prototype.clearMarketsList = function() {
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
proto.DropMarketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DropMarketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DropMarketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DropMarketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && types_pb.Market.toObject(includeInstance, f)
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
 * @return {!proto.DropMarketRequest}
 */
proto.DropMarketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DropMarketRequest;
  return proto.DropMarketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DropMarketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DropMarketRequest}
 */
proto.DropMarketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.Market;
      reader.readMessage(value,types_pb.Market.deserializeBinaryFromReader);
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
proto.DropMarketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DropMarketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DropMarketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DropMarketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.Market.serializeBinaryToWriter
    );
  }
};


/**
 * optional Market market = 1;
 * @return {?proto.Market}
 */
proto.DropMarketRequest.prototype.getMarket = function() {
  return /** @type{?proto.Market} */ (
    jspb.Message.getWrapperField(this, types_pb.Market, 1));
};


/**
 * @param {?proto.Market|undefined} value
 * @return {!proto.DropMarketRequest} returns this
*/
proto.DropMarketRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DropMarketRequest} returns this
 */
proto.DropMarketRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DropMarketRequest.prototype.hasMarket = function() {
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
proto.DropMarketReply.prototype.toObject = function(opt_includeInstance) {
  return proto.DropMarketReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DropMarketReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DropMarketReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.DropMarketReply}
 */
proto.DropMarketReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DropMarketReply;
  return proto.DropMarketReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DropMarketReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DropMarketReply}
 */
proto.DropMarketReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.DropMarketReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DropMarketReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DropMarketReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DropMarketReply.serializeBinaryToWriter = function(message, writer) {
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
proto.GetMarketCollectedSwapFeesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetMarketCollectedSwapFeesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetMarketCollectedSwapFeesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketCollectedSwapFeesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && types_pb.Market.toObject(includeInstance, f),
    page: (f = msg.getPage()) && proto.Page.toObject(includeInstance, f)
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
 * @return {!proto.GetMarketCollectedSwapFeesRequest}
 */
proto.GetMarketCollectedSwapFeesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetMarketCollectedSwapFeesRequest;
  return proto.GetMarketCollectedSwapFeesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetMarketCollectedSwapFeesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetMarketCollectedSwapFeesRequest}
 */
proto.GetMarketCollectedSwapFeesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.Market;
      reader.readMessage(value,types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 2:
      var value = new proto.Page;
      reader.readMessage(value,proto.Page.deserializeBinaryFromReader);
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
proto.GetMarketCollectedSwapFeesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetMarketCollectedSwapFeesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetMarketCollectedSwapFeesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketCollectedSwapFeesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.Market.serializeBinaryToWriter
    );
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Page.serializeBinaryToWriter
    );
  }
};


/**
 * optional Market market = 1;
 * @return {?proto.Market}
 */
proto.GetMarketCollectedSwapFeesRequest.prototype.getMarket = function() {
  return /** @type{?proto.Market} */ (
    jspb.Message.getWrapperField(this, types_pb.Market, 1));
};


/**
 * @param {?proto.Market|undefined} value
 * @return {!proto.GetMarketCollectedSwapFeesRequest} returns this
*/
proto.GetMarketCollectedSwapFeesRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetMarketCollectedSwapFeesRequest} returns this
 */
proto.GetMarketCollectedSwapFeesRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetMarketCollectedSwapFeesRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Page page = 2;
 * @return {?proto.Page}
 */
proto.GetMarketCollectedSwapFeesRequest.prototype.getPage = function() {
  return /** @type{?proto.Page} */ (
    jspb.Message.getWrapperField(this, proto.Page, 2));
};


/**
 * @param {?proto.Page|undefined} value
 * @return {!proto.GetMarketCollectedSwapFeesRequest} returns this
*/
proto.GetMarketCollectedSwapFeesRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetMarketCollectedSwapFeesRequest} returns this
 */
proto.GetMarketCollectedSwapFeesRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetMarketCollectedSwapFeesRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GetMarketCollectedSwapFeesReply.repeatedFields_ = [1];



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
proto.GetMarketCollectedSwapFeesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.GetMarketCollectedSwapFeesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetMarketCollectedSwapFeesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketCollectedSwapFeesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    collectedFeesList: jspb.Message.toObjectList(msg.getCollectedFeesList(),
    proto.FeeInfo.toObject, includeInstance),
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
 * @return {!proto.GetMarketCollectedSwapFeesReply}
 */
proto.GetMarketCollectedSwapFeesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetMarketCollectedSwapFeesReply;
  return proto.GetMarketCollectedSwapFeesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetMarketCollectedSwapFeesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetMarketCollectedSwapFeesReply}
 */
proto.GetMarketCollectedSwapFeesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.FeeInfo;
      reader.readMessage(value,proto.FeeInfo.deserializeBinaryFromReader);
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
proto.GetMarketCollectedSwapFeesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetMarketCollectedSwapFeesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetMarketCollectedSwapFeesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketCollectedSwapFeesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCollectedFeesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.FeeInfo.serializeBinaryToWriter
    );
  }
  f = message.getTotalCollectedFeesPerAssetMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt64);
  }
};


/**
 * repeated FeeInfo collected_fees = 1;
 * @return {!Array<!proto.FeeInfo>}
 */
proto.GetMarketCollectedSwapFeesReply.prototype.getCollectedFeesList = function() {
  return /** @type{!Array<!proto.FeeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.FeeInfo, 1));
};


/**
 * @param {!Array<!proto.FeeInfo>} value
 * @return {!proto.GetMarketCollectedSwapFeesReply} returns this
*/
proto.GetMarketCollectedSwapFeesReply.prototype.setCollectedFeesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.FeeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.FeeInfo}
 */
proto.GetMarketCollectedSwapFeesReply.prototype.addCollectedFees = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.FeeInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.GetMarketCollectedSwapFeesReply} returns this
 */
proto.GetMarketCollectedSwapFeesReply.prototype.clearCollectedFeesList = function() {
  return this.setCollectedFeesList([]);
};


/**
 * map<string, int64> total_collected_fees_per_asset = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.GetMarketCollectedSwapFeesReply.prototype.getTotalCollectedFeesPerAssetMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.GetMarketCollectedSwapFeesReply} returns this
 */
proto.GetMarketCollectedSwapFeesReply.prototype.clearTotalCollectedFeesPerAssetMap = function() {
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
proto.WithdrawMarketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.WithdrawMarketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WithdrawMarketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WithdrawMarketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && types_pb.Market.toObject(includeInstance, f),
    balanceToWithdraw: (f = msg.getBalanceToWithdraw()) && types_pb.Balance.toObject(includeInstance, f),
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
 * @return {!proto.WithdrawMarketRequest}
 */
proto.WithdrawMarketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WithdrawMarketRequest;
  return proto.WithdrawMarketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WithdrawMarketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WithdrawMarketRequest}
 */
proto.WithdrawMarketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.Market;
      reader.readMessage(value,types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 2:
      var value = new types_pb.Balance;
      reader.readMessage(value,types_pb.Balance.deserializeBinaryFromReader);
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
proto.WithdrawMarketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WithdrawMarketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WithdrawMarketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WithdrawMarketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.Market.serializeBinaryToWriter
    );
  }
  f = message.getBalanceToWithdraw();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      types_pb.Balance.serializeBinaryToWriter
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
 * optional Market market = 1;
 * @return {?proto.Market}
 */
proto.WithdrawMarketRequest.prototype.getMarket = function() {
  return /** @type{?proto.Market} */ (
    jspb.Message.getWrapperField(this, types_pb.Market, 1));
};


/**
 * @param {?proto.Market|undefined} value
 * @return {!proto.WithdrawMarketRequest} returns this
*/
proto.WithdrawMarketRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.WithdrawMarketRequest} returns this
 */
proto.WithdrawMarketRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WithdrawMarketRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Balance balance_to_withdraw = 2;
 * @return {?proto.Balance}
 */
proto.WithdrawMarketRequest.prototype.getBalanceToWithdraw = function() {
  return /** @type{?proto.Balance} */ (
    jspb.Message.getWrapperField(this, types_pb.Balance, 2));
};


/**
 * @param {?proto.Balance|undefined} value
 * @return {!proto.WithdrawMarketRequest} returns this
*/
proto.WithdrawMarketRequest.prototype.setBalanceToWithdraw = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.WithdrawMarketRequest} returns this
 */
proto.WithdrawMarketRequest.prototype.clearBalanceToWithdraw = function() {
  return this.setBalanceToWithdraw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WithdrawMarketRequest.prototype.hasBalanceToWithdraw = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 millisats_per_byte = 3;
 * @return {number}
 */
proto.WithdrawMarketRequest.prototype.getMillisatsPerByte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.WithdrawMarketRequest} returns this
 */
proto.WithdrawMarketRequest.prototype.setMillisatsPerByte = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string address = 4;
 * @return {string}
 */
proto.WithdrawMarketRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.WithdrawMarketRequest} returns this
 */
proto.WithdrawMarketRequest.prototype.setAddress = function(value) {
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
proto.WithdrawMarketReply.prototype.toObject = function(opt_includeInstance) {
  return proto.WithdrawMarketReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WithdrawMarketReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WithdrawMarketReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.WithdrawMarketReply}
 */
proto.WithdrawMarketReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WithdrawMarketReply;
  return proto.WithdrawMarketReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WithdrawMarketReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WithdrawMarketReply}
 */
proto.WithdrawMarketReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.WithdrawMarketReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WithdrawMarketReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WithdrawMarketReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WithdrawMarketReply.serializeBinaryToWriter = function(message, writer) {
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
proto.WithdrawMarketReply.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.WithdrawMarketReply} returns this
 */
proto.WithdrawMarketReply.prototype.setTxid = function(value) {
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
proto.UpdateMarketPercentageFeeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.UpdateMarketPercentageFeeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UpdateMarketPercentageFeeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateMarketPercentageFeeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && types_pb.Market.toObject(includeInstance, f),
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
 * @return {!proto.UpdateMarketPercentageFeeRequest}
 */
proto.UpdateMarketPercentageFeeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UpdateMarketPercentageFeeRequest;
  return proto.UpdateMarketPercentageFeeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UpdateMarketPercentageFeeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UpdateMarketPercentageFeeRequest}
 */
proto.UpdateMarketPercentageFeeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.Market;
      reader.readMessage(value,types_pb.Market.deserializeBinaryFromReader);
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
proto.UpdateMarketPercentageFeeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UpdateMarketPercentageFeeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UpdateMarketPercentageFeeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateMarketPercentageFeeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.Market.serializeBinaryToWriter
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
 * optional Market market = 1;
 * @return {?proto.Market}
 */
proto.UpdateMarketPercentageFeeRequest.prototype.getMarket = function() {
  return /** @type{?proto.Market} */ (
    jspb.Message.getWrapperField(this, types_pb.Market, 1));
};


/**
 * @param {?proto.Market|undefined} value
 * @return {!proto.UpdateMarketPercentageFeeRequest} returns this
*/
proto.UpdateMarketPercentageFeeRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.UpdateMarketPercentageFeeRequest} returns this
 */
proto.UpdateMarketPercentageFeeRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UpdateMarketPercentageFeeRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 basis_point = 2;
 * @return {number}
 */
proto.UpdateMarketPercentageFeeRequest.prototype.getBasisPoint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.UpdateMarketPercentageFeeRequest} returns this
 */
proto.UpdateMarketPercentageFeeRequest.prototype.setBasisPoint = function(value) {
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
proto.UpdateMarketFixedFeeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.UpdateMarketFixedFeeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UpdateMarketFixedFeeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateMarketFixedFeeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && types_pb.Market.toObject(includeInstance, f),
    fixed: (f = msg.getFixed()) && types_pb.Fixed.toObject(includeInstance, f)
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
 * @return {!proto.UpdateMarketFixedFeeRequest}
 */
proto.UpdateMarketFixedFeeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UpdateMarketFixedFeeRequest;
  return proto.UpdateMarketFixedFeeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UpdateMarketFixedFeeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UpdateMarketFixedFeeRequest}
 */
proto.UpdateMarketFixedFeeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.Market;
      reader.readMessage(value,types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 2:
      var value = new types_pb.Fixed;
      reader.readMessage(value,types_pb.Fixed.deserializeBinaryFromReader);
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
proto.UpdateMarketFixedFeeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UpdateMarketFixedFeeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UpdateMarketFixedFeeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateMarketFixedFeeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.Market.serializeBinaryToWriter
    );
  }
  f = message.getFixed();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      types_pb.Fixed.serializeBinaryToWriter
    );
  }
};


/**
 * optional Market market = 1;
 * @return {?proto.Market}
 */
proto.UpdateMarketFixedFeeRequest.prototype.getMarket = function() {
  return /** @type{?proto.Market} */ (
    jspb.Message.getWrapperField(this, types_pb.Market, 1));
};


/**
 * @param {?proto.Market|undefined} value
 * @return {!proto.UpdateMarketFixedFeeRequest} returns this
*/
proto.UpdateMarketFixedFeeRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.UpdateMarketFixedFeeRequest} returns this
 */
proto.UpdateMarketFixedFeeRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UpdateMarketFixedFeeRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Fixed fixed = 2;
 * @return {?proto.Fixed}
 */
proto.UpdateMarketFixedFeeRequest.prototype.getFixed = function() {
  return /** @type{?proto.Fixed} */ (
    jspb.Message.getWrapperField(this, types_pb.Fixed, 2));
};


/**
 * @param {?proto.Fixed|undefined} value
 * @return {!proto.UpdateMarketFixedFeeRequest} returns this
*/
proto.UpdateMarketFixedFeeRequest.prototype.setFixed = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.UpdateMarketFixedFeeRequest} returns this
 */
proto.UpdateMarketFixedFeeRequest.prototype.clearFixed = function() {
  return this.setFixed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UpdateMarketFixedFeeRequest.prototype.hasFixed = function() {
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
proto.UpdateMarketFeeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.UpdateMarketFeeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UpdateMarketFeeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateMarketFeeReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketWithFee: (f = msg.getMarketWithFee()) && types_pb.MarketWithFee.toObject(includeInstance, f)
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
 * @return {!proto.UpdateMarketFeeReply}
 */
proto.UpdateMarketFeeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UpdateMarketFeeReply;
  return proto.UpdateMarketFeeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UpdateMarketFeeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UpdateMarketFeeReply}
 */
proto.UpdateMarketFeeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.MarketWithFee;
      reader.readMessage(value,types_pb.MarketWithFee.deserializeBinaryFromReader);
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
proto.UpdateMarketFeeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UpdateMarketFeeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UpdateMarketFeeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateMarketFeeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketWithFee();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.MarketWithFee.serializeBinaryToWriter
    );
  }
};


/**
 * optional MarketWithFee market_with_fee = 1;
 * @return {?proto.MarketWithFee}
 */
proto.UpdateMarketFeeReply.prototype.getMarketWithFee = function() {
  return /** @type{?proto.MarketWithFee} */ (
    jspb.Message.getWrapperField(this, types_pb.MarketWithFee, 1));
};


/**
 * @param {?proto.MarketWithFee|undefined} value
 * @return {!proto.UpdateMarketFeeReply} returns this
*/
proto.UpdateMarketFeeReply.prototype.setMarketWithFee = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.UpdateMarketFeeReply} returns this
 */
proto.UpdateMarketFeeReply.prototype.clearMarketWithFee = function() {
  return this.setMarketWithFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UpdateMarketFeeReply.prototype.hasMarketWithFee = function() {
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
proto.UpdateMarketPriceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.UpdateMarketPriceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UpdateMarketPriceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateMarketPriceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && types_pb.Market.toObject(includeInstance, f),
    price: (f = msg.getPrice()) && types_pb.Price.toObject(includeInstance, f)
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
 * @return {!proto.UpdateMarketPriceRequest}
 */
proto.UpdateMarketPriceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UpdateMarketPriceRequest;
  return proto.UpdateMarketPriceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UpdateMarketPriceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UpdateMarketPriceRequest}
 */
proto.UpdateMarketPriceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.Market;
      reader.readMessage(value,types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 2:
      var value = new types_pb.Price;
      reader.readMessage(value,types_pb.Price.deserializeBinaryFromReader);
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
proto.UpdateMarketPriceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UpdateMarketPriceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UpdateMarketPriceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateMarketPriceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.Market.serializeBinaryToWriter
    );
  }
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      types_pb.Price.serializeBinaryToWriter
    );
  }
};


/**
 * optional Market market = 1;
 * @return {?proto.Market}
 */
proto.UpdateMarketPriceRequest.prototype.getMarket = function() {
  return /** @type{?proto.Market} */ (
    jspb.Message.getWrapperField(this, types_pb.Market, 1));
};


/**
 * @param {?proto.Market|undefined} value
 * @return {!proto.UpdateMarketPriceRequest} returns this
*/
proto.UpdateMarketPriceRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.UpdateMarketPriceRequest} returns this
 */
proto.UpdateMarketPriceRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UpdateMarketPriceRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Price price = 2;
 * @return {?proto.Price}
 */
proto.UpdateMarketPriceRequest.prototype.getPrice = function() {
  return /** @type{?proto.Price} */ (
    jspb.Message.getWrapperField(this, types_pb.Price, 2));
};


/**
 * @param {?proto.Price|undefined} value
 * @return {!proto.UpdateMarketPriceRequest} returns this
*/
proto.UpdateMarketPriceRequest.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.UpdateMarketPriceRequest} returns this
 */
proto.UpdateMarketPriceRequest.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UpdateMarketPriceRequest.prototype.hasPrice = function() {
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
proto.UpdateMarketPriceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.UpdateMarketPriceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UpdateMarketPriceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateMarketPriceReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.UpdateMarketPriceReply}
 */
proto.UpdateMarketPriceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UpdateMarketPriceReply;
  return proto.UpdateMarketPriceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UpdateMarketPriceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UpdateMarketPriceReply}
 */
proto.UpdateMarketPriceReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.UpdateMarketPriceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UpdateMarketPriceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UpdateMarketPriceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateMarketPriceReply.serializeBinaryToWriter = function(message, writer) {
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
proto.UpdateMarketStrategyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.UpdateMarketStrategyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UpdateMarketStrategyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateMarketStrategyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && types_pb.Market.toObject(includeInstance, f),
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
 * @return {!proto.UpdateMarketStrategyRequest}
 */
proto.UpdateMarketStrategyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UpdateMarketStrategyRequest;
  return proto.UpdateMarketStrategyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UpdateMarketStrategyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UpdateMarketStrategyRequest}
 */
proto.UpdateMarketStrategyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.Market;
      reader.readMessage(value,types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {!proto.StrategyType} */ (reader.readEnum());
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
proto.UpdateMarketStrategyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UpdateMarketStrategyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UpdateMarketStrategyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateMarketStrategyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.Market.serializeBinaryToWriter
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
 * optional Market market = 1;
 * @return {?proto.Market}
 */
proto.UpdateMarketStrategyRequest.prototype.getMarket = function() {
  return /** @type{?proto.Market} */ (
    jspb.Message.getWrapperField(this, types_pb.Market, 1));
};


/**
 * @param {?proto.Market|undefined} value
 * @return {!proto.UpdateMarketStrategyRequest} returns this
*/
proto.UpdateMarketStrategyRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.UpdateMarketStrategyRequest} returns this
 */
proto.UpdateMarketStrategyRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UpdateMarketStrategyRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional StrategyType strategy_type = 2;
 * @return {!proto.StrategyType}
 */
proto.UpdateMarketStrategyRequest.prototype.getStrategyType = function() {
  return /** @type {!proto.StrategyType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.StrategyType} value
 * @return {!proto.UpdateMarketStrategyRequest} returns this
 */
proto.UpdateMarketStrategyRequest.prototype.setStrategyType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string metadata = 3;
 * @return {string}
 */
proto.UpdateMarketStrategyRequest.prototype.getMetadata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.UpdateMarketStrategyRequest} returns this
 */
proto.UpdateMarketStrategyRequest.prototype.setMetadata = function(value) {
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
proto.UpdateMarketStrategyReply.prototype.toObject = function(opt_includeInstance) {
  return proto.UpdateMarketStrategyReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UpdateMarketStrategyReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateMarketStrategyReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.UpdateMarketStrategyReply}
 */
proto.UpdateMarketStrategyReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UpdateMarketStrategyReply;
  return proto.UpdateMarketStrategyReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UpdateMarketStrategyReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UpdateMarketStrategyReply}
 */
proto.UpdateMarketStrategyReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.UpdateMarketStrategyReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UpdateMarketStrategyReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UpdateMarketStrategyReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateMarketStrategyReply.serializeBinaryToWriter = function(message, writer) {
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
proto.GetFeeFragmenterAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetFeeFragmenterAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetFeeFragmenterAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetFeeFragmenterAddressRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.GetFeeFragmenterAddressRequest}
 */
proto.GetFeeFragmenterAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetFeeFragmenterAddressRequest;
  return proto.GetFeeFragmenterAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetFeeFragmenterAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetFeeFragmenterAddressRequest}
 */
proto.GetFeeFragmenterAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.GetFeeFragmenterAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetFeeFragmenterAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetFeeFragmenterAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetFeeFragmenterAddressRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.GetFeeFragmenterAddressRequest.prototype.getNumOfAddresses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.GetFeeFragmenterAddressRequest} returns this
 */
proto.GetFeeFragmenterAddressRequest.prototype.setNumOfAddresses = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GetFeeFragmenterAddressReply.repeatedFields_ = [1];



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
proto.GetFeeFragmenterAddressReply.prototype.toObject = function(opt_includeInstance) {
  return proto.GetFeeFragmenterAddressReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetFeeFragmenterAddressReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetFeeFragmenterAddressReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    types_pb.AddressWithBlindingKey.toObject, includeInstance)
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
 * @return {!proto.GetFeeFragmenterAddressReply}
 */
proto.GetFeeFragmenterAddressReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetFeeFragmenterAddressReply;
  return proto.GetFeeFragmenterAddressReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetFeeFragmenterAddressReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetFeeFragmenterAddressReply}
 */
proto.GetFeeFragmenterAddressReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.AddressWithBlindingKey;
      reader.readMessage(value,types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
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
proto.GetFeeFragmenterAddressReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetFeeFragmenterAddressReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetFeeFragmenterAddressReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetFeeFragmenterAddressReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.AddressWithBlindingKey>}
 */
proto.GetFeeFragmenterAddressReply.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.AddressWithBlindingKey>} value
 * @return {!proto.GetFeeFragmenterAddressReply} returns this
*/
proto.GetFeeFragmenterAddressReply.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.AddressWithBlindingKey}
 */
proto.GetFeeFragmenterAddressReply.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.GetFeeFragmenterAddressReply} returns this
 */
proto.GetFeeFragmenterAddressReply.prototype.clearAddressWithBlindingKeyList = function() {
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
proto.ListFeeFragmenterAddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ListFeeFragmenterAddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListFeeFragmenterAddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListFeeFragmenterAddressesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ListFeeFragmenterAddressesRequest}
 */
proto.ListFeeFragmenterAddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListFeeFragmenterAddressesRequest;
  return proto.ListFeeFragmenterAddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListFeeFragmenterAddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListFeeFragmenterAddressesRequest}
 */
proto.ListFeeFragmenterAddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ListFeeFragmenterAddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListFeeFragmenterAddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListFeeFragmenterAddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListFeeFragmenterAddressesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ListFeeFragmenterAddressesReply.repeatedFields_ = [1];



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
proto.ListFeeFragmenterAddressesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ListFeeFragmenterAddressesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListFeeFragmenterAddressesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListFeeFragmenterAddressesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    types_pb.AddressWithBlindingKey.toObject, includeInstance)
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
 * @return {!proto.ListFeeFragmenterAddressesReply}
 */
proto.ListFeeFragmenterAddressesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListFeeFragmenterAddressesReply;
  return proto.ListFeeFragmenterAddressesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListFeeFragmenterAddressesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListFeeFragmenterAddressesReply}
 */
proto.ListFeeFragmenterAddressesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.AddressWithBlindingKey;
      reader.readMessage(value,types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
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
proto.ListFeeFragmenterAddressesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListFeeFragmenterAddressesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListFeeFragmenterAddressesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListFeeFragmenterAddressesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.AddressWithBlindingKey>}
 */
proto.ListFeeFragmenterAddressesReply.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.AddressWithBlindingKey>} value
 * @return {!proto.ListFeeFragmenterAddressesReply} returns this
*/
proto.ListFeeFragmenterAddressesReply.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.AddressWithBlindingKey}
 */
proto.ListFeeFragmenterAddressesReply.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListFeeFragmenterAddressesReply} returns this
 */
proto.ListFeeFragmenterAddressesReply.prototype.clearAddressWithBlindingKeyList = function() {
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
proto.GetFeeFragmenterBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetFeeFragmenterBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetFeeFragmenterBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetFeeFragmenterBalanceRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.GetFeeFragmenterBalanceRequest}
 */
proto.GetFeeFragmenterBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetFeeFragmenterBalanceRequest;
  return proto.GetFeeFragmenterBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetFeeFragmenterBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetFeeFragmenterBalanceRequest}
 */
proto.GetFeeFragmenterBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.GetFeeFragmenterBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetFeeFragmenterBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetFeeFragmenterBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetFeeFragmenterBalanceRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.GetFeeFragmenterBalanceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.GetFeeFragmenterBalanceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetFeeFragmenterBalanceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetFeeFragmenterBalanceReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    balanceMap: (f = msg.getBalanceMap()) ? f.toObject(includeInstance, proto.BalanceInfo.toObject) : []
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
 * @return {!proto.GetFeeFragmenterBalanceReply}
 */
proto.GetFeeFragmenterBalanceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetFeeFragmenterBalanceReply;
  return proto.GetFeeFragmenterBalanceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetFeeFragmenterBalanceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetFeeFragmenterBalanceReply}
 */
proto.GetFeeFragmenterBalanceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getBalanceMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.BalanceInfo.deserializeBinaryFromReader, "", new proto.BalanceInfo());
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
proto.GetFeeFragmenterBalanceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetFeeFragmenterBalanceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetFeeFragmenterBalanceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetFeeFragmenterBalanceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalanceMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.BalanceInfo.serializeBinaryToWriter);
  }
};


/**
 * map<string, BalanceInfo> balance = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.BalanceInfo>}
 */
proto.GetFeeFragmenterBalanceReply.prototype.getBalanceMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.BalanceInfo>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.BalanceInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.GetFeeFragmenterBalanceReply} returns this
 */
proto.GetFeeFragmenterBalanceReply.prototype.clearBalanceMap = function() {
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
proto.FeeFragmenterSplitFundsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.FeeFragmenterSplitFundsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FeeFragmenterSplitFundsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FeeFragmenterSplitFundsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.FeeFragmenterSplitFundsRequest}
 */
proto.FeeFragmenterSplitFundsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FeeFragmenterSplitFundsRequest;
  return proto.FeeFragmenterSplitFundsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FeeFragmenterSplitFundsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FeeFragmenterSplitFundsRequest}
 */
proto.FeeFragmenterSplitFundsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.FeeFragmenterSplitFundsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FeeFragmenterSplitFundsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FeeFragmenterSplitFundsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FeeFragmenterSplitFundsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.FeeFragmenterSplitFundsRequest.prototype.getMaxFragments = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FeeFragmenterSplitFundsRequest} returns this
 */
proto.FeeFragmenterSplitFundsRequest.prototype.setMaxFragments = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 millisats_per_byte = 2;
 * @return {number}
 */
proto.FeeFragmenterSplitFundsRequest.prototype.getMillisatsPerByte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.FeeFragmenterSplitFundsRequest} returns this
 */
proto.FeeFragmenterSplitFundsRequest.prototype.setMillisatsPerByte = function(value) {
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
proto.FragmenterSplitFundsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.FragmenterSplitFundsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FragmenterSplitFundsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FragmenterSplitFundsReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.FragmenterSplitFundsReply}
 */
proto.FragmenterSplitFundsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FragmenterSplitFundsReply;
  return proto.FragmenterSplitFundsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FragmenterSplitFundsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FragmenterSplitFundsReply}
 */
proto.FragmenterSplitFundsReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.FragmenterSplitFundsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FragmenterSplitFundsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FragmenterSplitFundsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FragmenterSplitFundsReply.serializeBinaryToWriter = function(message, writer) {
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
proto.FragmenterSplitFundsReply.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.FragmenterSplitFundsReply} returns this
 */
proto.FragmenterSplitFundsReply.prototype.setMessage = function(value) {
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
proto.WithdrawFeeFragmenterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.WithdrawFeeFragmenterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WithdrawFeeFragmenterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WithdrawFeeFragmenterRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.WithdrawFeeFragmenterRequest}
 */
proto.WithdrawFeeFragmenterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WithdrawFeeFragmenterRequest;
  return proto.WithdrawFeeFragmenterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WithdrawFeeFragmenterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WithdrawFeeFragmenterRequest}
 */
proto.WithdrawFeeFragmenterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.WithdrawFeeFragmenterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WithdrawFeeFragmenterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WithdrawFeeFragmenterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WithdrawFeeFragmenterRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.WithdrawFeeFragmenterRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.WithdrawFeeFragmenterRequest} returns this
 */
proto.WithdrawFeeFragmenterRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 millisats_per_byte = 2;
 * @return {number}
 */
proto.WithdrawFeeFragmenterRequest.prototype.getMillisatsPerByte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.WithdrawFeeFragmenterRequest} returns this
 */
proto.WithdrawFeeFragmenterRequest.prototype.setMillisatsPerByte = function(value) {
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
proto.WithdrawFeeFragmenterReply.prototype.toObject = function(opt_includeInstance) {
  return proto.WithdrawFeeFragmenterReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WithdrawFeeFragmenterReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WithdrawFeeFragmenterReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.WithdrawFeeFragmenterReply}
 */
proto.WithdrawFeeFragmenterReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WithdrawFeeFragmenterReply;
  return proto.WithdrawFeeFragmenterReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WithdrawFeeFragmenterReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WithdrawFeeFragmenterReply}
 */
proto.WithdrawFeeFragmenterReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.WithdrawFeeFragmenterReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WithdrawFeeFragmenterReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WithdrawFeeFragmenterReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WithdrawFeeFragmenterReply.serializeBinaryToWriter = function(message, writer) {
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
proto.WithdrawFeeFragmenterReply.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.WithdrawFeeFragmenterReply} returns this
 */
proto.WithdrawFeeFragmenterReply.prototype.setTxid = function(value) {
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
proto.GetMarketFragmenterAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetMarketFragmenterAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetMarketFragmenterAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketFragmenterAddressRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.GetMarketFragmenterAddressRequest}
 */
proto.GetMarketFragmenterAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetMarketFragmenterAddressRequest;
  return proto.GetMarketFragmenterAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetMarketFragmenterAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetMarketFragmenterAddressRequest}
 */
proto.GetMarketFragmenterAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.GetMarketFragmenterAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetMarketFragmenterAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetMarketFragmenterAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketFragmenterAddressRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.GetMarketFragmenterAddressRequest.prototype.getNumOfAddresses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.GetMarketFragmenterAddressRequest} returns this
 */
proto.GetMarketFragmenterAddressRequest.prototype.setNumOfAddresses = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GetMarketFragmenterAddressReply.repeatedFields_ = [1];



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
proto.GetMarketFragmenterAddressReply.prototype.toObject = function(opt_includeInstance) {
  return proto.GetMarketFragmenterAddressReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetMarketFragmenterAddressReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketFragmenterAddressReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    types_pb.AddressWithBlindingKey.toObject, includeInstance)
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
 * @return {!proto.GetMarketFragmenterAddressReply}
 */
proto.GetMarketFragmenterAddressReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetMarketFragmenterAddressReply;
  return proto.GetMarketFragmenterAddressReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetMarketFragmenterAddressReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetMarketFragmenterAddressReply}
 */
proto.GetMarketFragmenterAddressReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.AddressWithBlindingKey;
      reader.readMessage(value,types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
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
proto.GetMarketFragmenterAddressReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetMarketFragmenterAddressReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetMarketFragmenterAddressReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketFragmenterAddressReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.AddressWithBlindingKey>}
 */
proto.GetMarketFragmenterAddressReply.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.AddressWithBlindingKey>} value
 * @return {!proto.GetMarketFragmenterAddressReply} returns this
*/
proto.GetMarketFragmenterAddressReply.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.AddressWithBlindingKey}
 */
proto.GetMarketFragmenterAddressReply.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.GetMarketFragmenterAddressReply} returns this
 */
proto.GetMarketFragmenterAddressReply.prototype.clearAddressWithBlindingKeyList = function() {
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
proto.ListMarketFragmenterAddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ListMarketFragmenterAddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListMarketFragmenterAddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListMarketFragmenterAddressesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ListMarketFragmenterAddressesRequest}
 */
proto.ListMarketFragmenterAddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListMarketFragmenterAddressesRequest;
  return proto.ListMarketFragmenterAddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListMarketFragmenterAddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListMarketFragmenterAddressesRequest}
 */
proto.ListMarketFragmenterAddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ListMarketFragmenterAddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListMarketFragmenterAddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListMarketFragmenterAddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListMarketFragmenterAddressesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ListMarketFragmenterAddressesReply.repeatedFields_ = [1];



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
proto.ListMarketFragmenterAddressesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ListMarketFragmenterAddressesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListMarketFragmenterAddressesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListMarketFragmenterAddressesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressWithBlindingKeyList: jspb.Message.toObjectList(msg.getAddressWithBlindingKeyList(),
    types_pb.AddressWithBlindingKey.toObject, includeInstance)
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
 * @return {!proto.ListMarketFragmenterAddressesReply}
 */
proto.ListMarketFragmenterAddressesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListMarketFragmenterAddressesReply;
  return proto.ListMarketFragmenterAddressesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListMarketFragmenterAddressesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListMarketFragmenterAddressesReply}
 */
proto.ListMarketFragmenterAddressesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.AddressWithBlindingKey;
      reader.readMessage(value,types_pb.AddressWithBlindingKey.deserializeBinaryFromReader);
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
proto.ListMarketFragmenterAddressesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListMarketFragmenterAddressesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListMarketFragmenterAddressesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListMarketFragmenterAddressesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressWithBlindingKeyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      types_pb.AddressWithBlindingKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddressWithBlindingKey address_with_blinding_key = 1;
 * @return {!Array<!proto.AddressWithBlindingKey>}
 */
proto.ListMarketFragmenterAddressesReply.prototype.getAddressWithBlindingKeyList = function() {
  return /** @type{!Array<!proto.AddressWithBlindingKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, types_pb.AddressWithBlindingKey, 1));
};


/**
 * @param {!Array<!proto.AddressWithBlindingKey>} value
 * @return {!proto.ListMarketFragmenterAddressesReply} returns this
*/
proto.ListMarketFragmenterAddressesReply.prototype.setAddressWithBlindingKeyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.AddressWithBlindingKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.AddressWithBlindingKey}
 */
proto.ListMarketFragmenterAddressesReply.prototype.addAddressWithBlindingKey = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.AddressWithBlindingKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListMarketFragmenterAddressesReply} returns this
 */
proto.ListMarketFragmenterAddressesReply.prototype.clearAddressWithBlindingKeyList = function() {
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
proto.GetMarketFragmenterBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetMarketFragmenterBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetMarketFragmenterBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketFragmenterBalanceRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.GetMarketFragmenterBalanceRequest}
 */
proto.GetMarketFragmenterBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetMarketFragmenterBalanceRequest;
  return proto.GetMarketFragmenterBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetMarketFragmenterBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetMarketFragmenterBalanceRequest}
 */
proto.GetMarketFragmenterBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.GetMarketFragmenterBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetMarketFragmenterBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetMarketFragmenterBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketFragmenterBalanceRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.GetMarketFragmenterBalanceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.GetMarketFragmenterBalanceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetMarketFragmenterBalanceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketFragmenterBalanceReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    balanceMap: (f = msg.getBalanceMap()) ? f.toObject(includeInstance, proto.BalanceInfo.toObject) : []
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
 * @return {!proto.GetMarketFragmenterBalanceReply}
 */
proto.GetMarketFragmenterBalanceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetMarketFragmenterBalanceReply;
  return proto.GetMarketFragmenterBalanceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetMarketFragmenterBalanceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetMarketFragmenterBalanceReply}
 */
proto.GetMarketFragmenterBalanceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getBalanceMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.BalanceInfo.deserializeBinaryFromReader, "", new proto.BalanceInfo());
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
proto.GetMarketFragmenterBalanceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetMarketFragmenterBalanceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetMarketFragmenterBalanceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMarketFragmenterBalanceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalanceMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.BalanceInfo.serializeBinaryToWriter);
  }
};


/**
 * map<string, BalanceInfo> balance = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.BalanceInfo>}
 */
proto.GetMarketFragmenterBalanceReply.prototype.getBalanceMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.BalanceInfo>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.BalanceInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.GetMarketFragmenterBalanceReply} returns this
 */
proto.GetMarketFragmenterBalanceReply.prototype.clearBalanceMap = function() {
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
proto.MarketFragmenterSplitFundsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.MarketFragmenterSplitFundsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MarketFragmenterSplitFundsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MarketFragmenterSplitFundsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && types_pb.Market.toObject(includeInstance, f),
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
 * @return {!proto.MarketFragmenterSplitFundsRequest}
 */
proto.MarketFragmenterSplitFundsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MarketFragmenterSplitFundsRequest;
  return proto.MarketFragmenterSplitFundsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MarketFragmenterSplitFundsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MarketFragmenterSplitFundsRequest}
 */
proto.MarketFragmenterSplitFundsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.Market;
      reader.readMessage(value,types_pb.Market.deserializeBinaryFromReader);
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
proto.MarketFragmenterSplitFundsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MarketFragmenterSplitFundsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MarketFragmenterSplitFundsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MarketFragmenterSplitFundsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.Market.serializeBinaryToWriter
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
 * optional Market market = 1;
 * @return {?proto.Market}
 */
proto.MarketFragmenterSplitFundsRequest.prototype.getMarket = function() {
  return /** @type{?proto.Market} */ (
    jspb.Message.getWrapperField(this, types_pb.Market, 1));
};


/**
 * @param {?proto.Market|undefined} value
 * @return {!proto.MarketFragmenterSplitFundsRequest} returns this
*/
proto.MarketFragmenterSplitFundsRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MarketFragmenterSplitFundsRequest} returns this
 */
proto.MarketFragmenterSplitFundsRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MarketFragmenterSplitFundsRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 millisats_per_byte = 2;
 * @return {number}
 */
proto.MarketFragmenterSplitFundsRequest.prototype.getMillisatsPerByte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.MarketFragmenterSplitFundsRequest} returns this
 */
proto.MarketFragmenterSplitFundsRequest.prototype.setMillisatsPerByte = function(value) {
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
proto.WithdrawMarketFragmenterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.WithdrawMarketFragmenterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WithdrawMarketFragmenterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WithdrawMarketFragmenterRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.WithdrawMarketFragmenterRequest}
 */
proto.WithdrawMarketFragmenterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WithdrawMarketFragmenterRequest;
  return proto.WithdrawMarketFragmenterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WithdrawMarketFragmenterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WithdrawMarketFragmenterRequest}
 */
proto.WithdrawMarketFragmenterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.WithdrawMarketFragmenterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WithdrawMarketFragmenterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WithdrawMarketFragmenterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WithdrawMarketFragmenterRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.WithdrawMarketFragmenterRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.WithdrawMarketFragmenterRequest} returns this
 */
proto.WithdrawMarketFragmenterRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 millisats_per_byte = 2;
 * @return {number}
 */
proto.WithdrawMarketFragmenterRequest.prototype.getMillisatsPerByte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.WithdrawMarketFragmenterRequest} returns this
 */
proto.WithdrawMarketFragmenterRequest.prototype.setMillisatsPerByte = function(value) {
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
proto.WithdrawMarketFragmenterReply.prototype.toObject = function(opt_includeInstance) {
  return proto.WithdrawMarketFragmenterReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WithdrawMarketFragmenterReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WithdrawMarketFragmenterReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.WithdrawMarketFragmenterReply}
 */
proto.WithdrawMarketFragmenterReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WithdrawMarketFragmenterReply;
  return proto.WithdrawMarketFragmenterReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WithdrawMarketFragmenterReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WithdrawMarketFragmenterReply}
 */
proto.WithdrawMarketFragmenterReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.WithdrawMarketFragmenterReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WithdrawMarketFragmenterReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WithdrawMarketFragmenterReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WithdrawMarketFragmenterReply.serializeBinaryToWriter = function(message, writer) {
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
proto.WithdrawMarketFragmenterReply.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.WithdrawMarketFragmenterReply} returns this
 */
proto.WithdrawMarketFragmenterReply.prototype.setTxid = function(value) {
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
proto.ListTradesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ListTradesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListTradesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListTradesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && types_pb.Market.toObject(includeInstance, f),
    page: (f = msg.getPage()) && proto.Page.toObject(includeInstance, f)
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
 * @return {!proto.ListTradesRequest}
 */
proto.ListTradesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListTradesRequest;
  return proto.ListTradesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListTradesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListTradesRequest}
 */
proto.ListTradesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.Market;
      reader.readMessage(value,types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 2:
      var value = new proto.Page;
      reader.readMessage(value,proto.Page.deserializeBinaryFromReader);
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
proto.ListTradesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListTradesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListTradesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListTradesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.Market.serializeBinaryToWriter
    );
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Page.serializeBinaryToWriter
    );
  }
};


/**
 * optional Market market = 1;
 * @return {?proto.Market}
 */
proto.ListTradesRequest.prototype.getMarket = function() {
  return /** @type{?proto.Market} */ (
    jspb.Message.getWrapperField(this, types_pb.Market, 1));
};


/**
 * @param {?proto.Market|undefined} value
 * @return {!proto.ListTradesRequest} returns this
*/
proto.ListTradesRequest.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ListTradesRequest} returns this
 */
proto.ListTradesRequest.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ListTradesRequest.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Page page = 2;
 * @return {?proto.Page}
 */
proto.ListTradesRequest.prototype.getPage = function() {
  return /** @type{?proto.Page} */ (
    jspb.Message.getWrapperField(this, proto.Page, 2));
};


/**
 * @param {?proto.Page|undefined} value
 * @return {!proto.ListTradesRequest} returns this
*/
proto.ListTradesRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ListTradesRequest} returns this
 */
proto.ListTradesRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ListTradesRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ListTradesReply.repeatedFields_ = [1];



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
proto.ListTradesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ListTradesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListTradesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListTradesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    proto.TradeInfo.toObject, includeInstance)
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
 * @return {!proto.ListTradesReply}
 */
proto.ListTradesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListTradesReply;
  return proto.ListTradesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListTradesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListTradesReply}
 */
proto.ListTradesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.TradeInfo;
      reader.readMessage(value,proto.TradeInfo.deserializeBinaryFromReader);
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
proto.ListTradesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListTradesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListTradesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListTradesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.TradeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TradeInfo trades = 1;
 * @return {!Array<!proto.TradeInfo>}
 */
proto.ListTradesReply.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.TradeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.TradeInfo, 1));
};


/**
 * @param {!Array<!proto.TradeInfo>} value
 * @return {!proto.ListTradesReply} returns this
*/
proto.ListTradesReply.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.TradeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.TradeInfo}
 */
proto.ListTradesReply.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.TradeInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListTradesReply} returns this
 */
proto.ListTradesReply.prototype.clearTradesList = function() {
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
proto.ReloadUtxosRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ReloadUtxosRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ReloadUtxosRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReloadUtxosRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ReloadUtxosRequest}
 */
proto.ReloadUtxosRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ReloadUtxosRequest;
  return proto.ReloadUtxosRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ReloadUtxosRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ReloadUtxosRequest}
 */
proto.ReloadUtxosRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ReloadUtxosRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ReloadUtxosRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ReloadUtxosRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReloadUtxosRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.ReloadUtxosReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ReloadUtxosReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ReloadUtxosReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReloadUtxosReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ReloadUtxosReply}
 */
proto.ReloadUtxosReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ReloadUtxosReply;
  return proto.ReloadUtxosReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ReloadUtxosReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ReloadUtxosReply}
 */
proto.ReloadUtxosReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ReloadUtxosReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ReloadUtxosReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ReloadUtxosReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReloadUtxosReply.serializeBinaryToWriter = function(message, writer) {
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
proto.ListUtxosRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ListUtxosRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListUtxosRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListUtxosRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    page: (f = msg.getPage()) && proto.Page.toObject(includeInstance, f)
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
 * @return {!proto.ListUtxosRequest}
 */
proto.ListUtxosRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListUtxosRequest;
  return proto.ListUtxosRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListUtxosRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListUtxosRequest}
 */
proto.ListUtxosRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.Page;
      reader.readMessage(value,proto.Page.deserializeBinaryFromReader);
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
proto.ListUtxosRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListUtxosRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListUtxosRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListUtxosRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.Page.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 account_index = 1;
 * @return {number}
 */
proto.ListUtxosRequest.prototype.getAccountIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ListUtxosRequest} returns this
 */
proto.ListUtxosRequest.prototype.setAccountIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Page page = 2;
 * @return {?proto.Page}
 */
proto.ListUtxosRequest.prototype.getPage = function() {
  return /** @type{?proto.Page} */ (
    jspb.Message.getWrapperField(this, proto.Page, 2));
};


/**
 * @param {?proto.Page|undefined} value
 * @return {!proto.ListUtxosRequest} returns this
*/
proto.ListUtxosRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ListUtxosRequest} returns this
 */
proto.ListUtxosRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ListUtxosRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ListUtxosReply.repeatedFields_ = [1,2,3];



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
proto.ListUtxosReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ListUtxosReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListUtxosReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListUtxosReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    unspentsList: jspb.Message.toObjectList(msg.getUnspentsList(),
    proto.UtxoInfo.toObject, includeInstance),
    spentsList: jspb.Message.toObjectList(msg.getSpentsList(),
    proto.UtxoInfo.toObject, includeInstance),
    locksList: jspb.Message.toObjectList(msg.getLocksList(),
    proto.UtxoInfo.toObject, includeInstance)
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
 * @return {!proto.ListUtxosReply}
 */
proto.ListUtxosReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListUtxosReply;
  return proto.ListUtxosReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListUtxosReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListUtxosReply}
 */
proto.ListUtxosReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.UtxoInfo;
      reader.readMessage(value,proto.UtxoInfo.deserializeBinaryFromReader);
      msg.addUnspents(value);
      break;
    case 2:
      var value = new proto.UtxoInfo;
      reader.readMessage(value,proto.UtxoInfo.deserializeBinaryFromReader);
      msg.addSpents(value);
      break;
    case 3:
      var value = new proto.UtxoInfo;
      reader.readMessage(value,proto.UtxoInfo.deserializeBinaryFromReader);
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
proto.ListUtxosReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListUtxosReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListUtxosReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListUtxosReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnspentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.UtxoInfo.serializeBinaryToWriter
    );
  }
  f = message.getSpentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.UtxoInfo.serializeBinaryToWriter
    );
  }
  f = message.getLocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.UtxoInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated UtxoInfo unspents = 1;
 * @return {!Array<!proto.UtxoInfo>}
 */
proto.ListUtxosReply.prototype.getUnspentsList = function() {
  return /** @type{!Array<!proto.UtxoInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.UtxoInfo, 1));
};


/**
 * @param {!Array<!proto.UtxoInfo>} value
 * @return {!proto.ListUtxosReply} returns this
*/
proto.ListUtxosReply.prototype.setUnspentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.UtxoInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.UtxoInfo}
 */
proto.ListUtxosReply.prototype.addUnspents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.UtxoInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListUtxosReply} returns this
 */
proto.ListUtxosReply.prototype.clearUnspentsList = function() {
  return this.setUnspentsList([]);
};


/**
 * repeated UtxoInfo spents = 2;
 * @return {!Array<!proto.UtxoInfo>}
 */
proto.ListUtxosReply.prototype.getSpentsList = function() {
  return /** @type{!Array<!proto.UtxoInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.UtxoInfo, 2));
};


/**
 * @param {!Array<!proto.UtxoInfo>} value
 * @return {!proto.ListUtxosReply} returns this
*/
proto.ListUtxosReply.prototype.setSpentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.UtxoInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.UtxoInfo}
 */
proto.ListUtxosReply.prototype.addSpents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.UtxoInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListUtxosReply} returns this
 */
proto.ListUtxosReply.prototype.clearSpentsList = function() {
  return this.setSpentsList([]);
};


/**
 * repeated UtxoInfo locks = 3;
 * @return {!Array<!proto.UtxoInfo>}
 */
proto.ListUtxosReply.prototype.getLocksList = function() {
  return /** @type{!Array<!proto.UtxoInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.UtxoInfo, 3));
};


/**
 * @param {!Array<!proto.UtxoInfo>} value
 * @return {!proto.ListUtxosReply} returns this
*/
proto.ListUtxosReply.prototype.setLocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.UtxoInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.UtxoInfo}
 */
proto.ListUtxosReply.prototype.addLocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.UtxoInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListUtxosReply} returns this
 */
proto.ListUtxosReply.prototype.clearLocksList = function() {
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
proto.AddWebhookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.AddWebhookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AddWebhookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AddWebhookRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.AddWebhookRequest}
 */
proto.AddWebhookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AddWebhookRequest;
  return proto.AddWebhookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AddWebhookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AddWebhookRequest}
 */
proto.AddWebhookRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.ActionType} */ (reader.readEnum());
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
proto.AddWebhookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AddWebhookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AddWebhookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AddWebhookRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.AddWebhookRequest.prototype.getEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AddWebhookRequest} returns this
 */
proto.AddWebhookRequest.prototype.setEndpoint = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ActionType action = 2;
 * @return {!proto.ActionType}
 */
proto.AddWebhookRequest.prototype.getAction = function() {
  return /** @type {!proto.ActionType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ActionType} value
 * @return {!proto.AddWebhookRequest} returns this
 */
proto.AddWebhookRequest.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string secret = 3;
 * @return {string}
 */
proto.AddWebhookRequest.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.AddWebhookRequest} returns this
 */
proto.AddWebhookRequest.prototype.setSecret = function(value) {
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
proto.AddWebhookReply.prototype.toObject = function(opt_includeInstance) {
  return proto.AddWebhookReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AddWebhookReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AddWebhookReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.AddWebhookReply}
 */
proto.AddWebhookReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AddWebhookReply;
  return proto.AddWebhookReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AddWebhookReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AddWebhookReply}
 */
proto.AddWebhookReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.AddWebhookReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AddWebhookReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AddWebhookReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AddWebhookReply.serializeBinaryToWriter = function(message, writer) {
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
proto.AddWebhookReply.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AddWebhookReply} returns this
 */
proto.AddWebhookReply.prototype.setId = function(value) {
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
proto.RemoveWebhookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveWebhookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveWebhookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveWebhookRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.RemoveWebhookRequest}
 */
proto.RemoveWebhookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveWebhookRequest;
  return proto.RemoveWebhookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveWebhookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveWebhookRequest}
 */
proto.RemoveWebhookRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.RemoveWebhookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveWebhookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveWebhookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveWebhookRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.RemoveWebhookRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RemoveWebhookRequest} returns this
 */
proto.RemoveWebhookRequest.prototype.setId = function(value) {
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
proto.RemoveWebhookReply.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveWebhookReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveWebhookReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveWebhookReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.RemoveWebhookReply}
 */
proto.RemoveWebhookReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveWebhookReply;
  return proto.RemoveWebhookReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveWebhookReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveWebhookReply}
 */
proto.RemoveWebhookReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.RemoveWebhookReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveWebhookReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveWebhookReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveWebhookReply.serializeBinaryToWriter = function(message, writer) {
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
proto.ListWebhooksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ListWebhooksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListWebhooksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListWebhooksRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ListWebhooksRequest}
 */
proto.ListWebhooksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListWebhooksRequest;
  return proto.ListWebhooksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListWebhooksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListWebhooksRequest}
 */
proto.ListWebhooksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ActionType} */ (reader.readEnum());
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
proto.ListWebhooksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListWebhooksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListWebhooksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListWebhooksRequest.serializeBinaryToWriter = function(message, writer) {
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
 * @return {!proto.ActionType}
 */
proto.ListWebhooksRequest.prototype.getAction = function() {
  return /** @type {!proto.ActionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ActionType} value
 * @return {!proto.ListWebhooksRequest} returns this
 */
proto.ListWebhooksRequest.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ListWebhooksReply.repeatedFields_ = [1];



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
proto.ListWebhooksReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ListWebhooksReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListWebhooksReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListWebhooksReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    webhookInfoList: jspb.Message.toObjectList(msg.getWebhookInfoList(),
    proto.WebhookInfo.toObject, includeInstance)
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
 * @return {!proto.ListWebhooksReply}
 */
proto.ListWebhooksReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListWebhooksReply;
  return proto.ListWebhooksReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListWebhooksReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListWebhooksReply}
 */
proto.ListWebhooksReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.WebhookInfo;
      reader.readMessage(value,proto.WebhookInfo.deserializeBinaryFromReader);
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
proto.ListWebhooksReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListWebhooksReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListWebhooksReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListWebhooksReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWebhookInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.WebhookInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WebhookInfo webhook_info = 1;
 * @return {!Array<!proto.WebhookInfo>}
 */
proto.ListWebhooksReply.prototype.getWebhookInfoList = function() {
  return /** @type{!Array<!proto.WebhookInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.WebhookInfo, 1));
};


/**
 * @param {!Array<!proto.WebhookInfo>} value
 * @return {!proto.ListWebhooksReply} returns this
*/
proto.ListWebhooksReply.prototype.setWebhookInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.WebhookInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.WebhookInfo}
 */
proto.ListWebhooksReply.prototype.addWebhookInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.WebhookInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListWebhooksReply} returns this
 */
proto.ListWebhooksReply.prototype.clearWebhookInfoList = function() {
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
proto.ListDepositsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ListDepositsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListDepositsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListDepositsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    page: (f = msg.getPage()) && proto.Page.toObject(includeInstance, f)
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
 * @return {!proto.ListDepositsRequest}
 */
proto.ListDepositsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListDepositsRequest;
  return proto.ListDepositsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListDepositsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListDepositsRequest}
 */
proto.ListDepositsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.Page;
      reader.readMessage(value,proto.Page.deserializeBinaryFromReader);
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
proto.ListDepositsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListDepositsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListDepositsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListDepositsRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.Page.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 account_index = 1;
 * @return {number}
 */
proto.ListDepositsRequest.prototype.getAccountIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ListDepositsRequest} returns this
 */
proto.ListDepositsRequest.prototype.setAccountIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Page page = 2;
 * @return {?proto.Page}
 */
proto.ListDepositsRequest.prototype.getPage = function() {
  return /** @type{?proto.Page} */ (
    jspb.Message.getWrapperField(this, proto.Page, 2));
};


/**
 * @param {?proto.Page|undefined} value
 * @return {!proto.ListDepositsRequest} returns this
*/
proto.ListDepositsRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ListDepositsRequest} returns this
 */
proto.ListDepositsRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ListDepositsRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ListDepositsReply.repeatedFields_ = [2];



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
proto.ListDepositsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ListDepositsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListDepositsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListDepositsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    depositsList: jspb.Message.toObjectList(msg.getDepositsList(),
    proto.Deposit.toObject, includeInstance)
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
 * @return {!proto.ListDepositsReply}
 */
proto.ListDepositsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListDepositsReply;
  return proto.ListDepositsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListDepositsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListDepositsReply}
 */
proto.ListDepositsReply.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.Deposit;
      reader.readMessage(value,proto.Deposit.deserializeBinaryFromReader);
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
proto.ListDepositsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListDepositsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListDepositsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListDepositsReply.serializeBinaryToWriter = function(message, writer) {
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
      proto.Deposit.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 account_index = 1;
 * @return {number}
 */
proto.ListDepositsReply.prototype.getAccountIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ListDepositsReply} returns this
 */
proto.ListDepositsReply.prototype.setAccountIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Deposit deposits = 2;
 * @return {!Array<!proto.Deposit>}
 */
proto.ListDepositsReply.prototype.getDepositsList = function() {
  return /** @type{!Array<!proto.Deposit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Deposit, 2));
};


/**
 * @param {!Array<!proto.Deposit>} value
 * @return {!proto.ListDepositsReply} returns this
*/
proto.ListDepositsReply.prototype.setDepositsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Deposit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Deposit}
 */
proto.ListDepositsReply.prototype.addDeposits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Deposit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListDepositsReply} returns this
 */
proto.ListDepositsReply.prototype.clearDepositsList = function() {
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
proto.ListWithdrawalsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ListWithdrawalsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListWithdrawalsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListWithdrawalsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    page: (f = msg.getPage()) && proto.Page.toObject(includeInstance, f)
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
 * @return {!proto.ListWithdrawalsRequest}
 */
proto.ListWithdrawalsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListWithdrawalsRequest;
  return proto.ListWithdrawalsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListWithdrawalsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListWithdrawalsRequest}
 */
proto.ListWithdrawalsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.Page;
      reader.readMessage(value,proto.Page.deserializeBinaryFromReader);
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
proto.ListWithdrawalsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListWithdrawalsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListWithdrawalsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListWithdrawalsRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.Page.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 account_index = 1;
 * @return {number}
 */
proto.ListWithdrawalsRequest.prototype.getAccountIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ListWithdrawalsRequest} returns this
 */
proto.ListWithdrawalsRequest.prototype.setAccountIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Page page = 2;
 * @return {?proto.Page}
 */
proto.ListWithdrawalsRequest.prototype.getPage = function() {
  return /** @type{?proto.Page} */ (
    jspb.Message.getWrapperField(this, proto.Page, 2));
};


/**
 * @param {?proto.Page|undefined} value
 * @return {!proto.ListWithdrawalsRequest} returns this
*/
proto.ListWithdrawalsRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ListWithdrawalsRequest} returns this
 */
proto.ListWithdrawalsRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ListWithdrawalsRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ListWithdrawalsReply.repeatedFields_ = [2];



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
proto.ListWithdrawalsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ListWithdrawalsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListWithdrawalsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListWithdrawalsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    withdrawalsList: jspb.Message.toObjectList(msg.getWithdrawalsList(),
    proto.Withdrawal.toObject, includeInstance)
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
 * @return {!proto.ListWithdrawalsReply}
 */
proto.ListWithdrawalsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListWithdrawalsReply;
  return proto.ListWithdrawalsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListWithdrawalsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListWithdrawalsReply}
 */
proto.ListWithdrawalsReply.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.Withdrawal;
      reader.readMessage(value,proto.Withdrawal.deserializeBinaryFromReader);
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
proto.ListWithdrawalsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListWithdrawalsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListWithdrawalsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListWithdrawalsReply.serializeBinaryToWriter = function(message, writer) {
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
      proto.Withdrawal.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 account_index = 1;
 * @return {number}
 */
proto.ListWithdrawalsReply.prototype.getAccountIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ListWithdrawalsReply} returns this
 */
proto.ListWithdrawalsReply.prototype.setAccountIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Withdrawal withdrawals = 2;
 * @return {!Array<!proto.Withdrawal>}
 */
proto.ListWithdrawalsReply.prototype.getWithdrawalsList = function() {
  return /** @type{!Array<!proto.Withdrawal>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Withdrawal, 2));
};


/**
 * @param {!Array<!proto.Withdrawal>} value
 * @return {!proto.ListWithdrawalsReply} returns this
*/
proto.ListWithdrawalsReply.prototype.setWithdrawalsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Withdrawal=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Withdrawal}
 */
proto.ListWithdrawalsReply.prototype.addWithdrawals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Withdrawal, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListWithdrawalsReply} returns this
 */
proto.ListWithdrawalsReply.prototype.clearWithdrawalsList = function() {
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
proto.AccountInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.AccountInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AccountInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AccountInfo.toObject = function(includeInstance, msg) {
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
 * @return {!proto.AccountInfo}
 */
proto.AccountInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AccountInfo;
  return proto.AccountInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AccountInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AccountInfo}
 */
proto.AccountInfo.deserializeBinaryFromReader = function(msg, reader) {
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
proto.AccountInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AccountInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AccountInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AccountInfo.serializeBinaryToWriter = function(message, writer) {
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
proto.AccountInfo.prototype.getAccountIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.AccountInfo} returns this
 */
proto.AccountInfo.prototype.setAccountIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string derivation_path = 2;
 * @return {string}
 */
proto.AccountInfo.prototype.getDerivationPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.AccountInfo} returns this
 */
proto.AccountInfo.prototype.setDerivationPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string xpub = 3;
 * @return {string}
 */
proto.AccountInfo.prototype.getXpub = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.AccountInfo} returns this
 */
proto.AccountInfo.prototype.setXpub = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 last_external_derived = 4;
 * @return {number}
 */
proto.AccountInfo.prototype.getLastExternalDerived = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.AccountInfo} returns this
 */
proto.AccountInfo.prototype.setLastExternalDerived = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 last_internal_derived = 5;
 * @return {number}
 */
proto.AccountInfo.prototype.getLastInternalDerived = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.AccountInfo} returns this
 */
proto.AccountInfo.prototype.setLastInternalDerived = function(value) {
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
proto.MarketInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.MarketInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MarketInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MarketInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && types_pb.Market.toObject(includeInstance, f),
    fee: (f = msg.getFee()) && types_pb.Fee.toObject(includeInstance, f),
    tradable: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    strategyType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    accountIndex: jspb.Message.getFieldWithDefault(msg, 5, 0),
    price: (f = msg.getPrice()) && types_pb.Price.toObject(includeInstance, f),
    balance: (f = msg.getBalance()) && types_pb.Balance.toObject(includeInstance, f)
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
 * @return {!proto.MarketInfo}
 */
proto.MarketInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MarketInfo;
  return proto.MarketInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MarketInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MarketInfo}
 */
proto.MarketInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.Market;
      reader.readMessage(value,types_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 2:
      var value = new types_pb.Fee;
      reader.readMessage(value,types_pb.Fee.deserializeBinaryFromReader);
      msg.setFee(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTradable(value);
      break;
    case 4:
      var value = /** @type {!proto.StrategyType} */ (reader.readEnum());
      msg.setStrategyType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAccountIndex(value);
      break;
    case 6:
      var value = new types_pb.Price;
      reader.readMessage(value,types_pb.Price.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 7:
      var value = new types_pb.Balance;
      reader.readMessage(value,types_pb.Balance.deserializeBinaryFromReader);
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
proto.MarketInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MarketInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MarketInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MarketInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.Market.serializeBinaryToWriter
    );
  }
  f = message.getFee();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      types_pb.Fee.serializeBinaryToWriter
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
      types_pb.Price.serializeBinaryToWriter
    );
  }
  f = message.getBalance();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      types_pb.Balance.serializeBinaryToWriter
    );
  }
};


/**
 * optional Market market = 1;
 * @return {?proto.Market}
 */
proto.MarketInfo.prototype.getMarket = function() {
  return /** @type{?proto.Market} */ (
    jspb.Message.getWrapperField(this, types_pb.Market, 1));
};


/**
 * @param {?proto.Market|undefined} value
 * @return {!proto.MarketInfo} returns this
*/
proto.MarketInfo.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MarketInfo} returns this
 */
proto.MarketInfo.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MarketInfo.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Fee fee = 2;
 * @return {?proto.Fee}
 */
proto.MarketInfo.prototype.getFee = function() {
  return /** @type{?proto.Fee} */ (
    jspb.Message.getWrapperField(this, types_pb.Fee, 2));
};


/**
 * @param {?proto.Fee|undefined} value
 * @return {!proto.MarketInfo} returns this
*/
proto.MarketInfo.prototype.setFee = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MarketInfo} returns this
 */
proto.MarketInfo.prototype.clearFee = function() {
  return this.setFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MarketInfo.prototype.hasFee = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool tradable = 3;
 * @return {boolean}
 */
proto.MarketInfo.prototype.getTradable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.MarketInfo} returns this
 */
proto.MarketInfo.prototype.setTradable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional StrategyType strategy_type = 4;
 * @return {!proto.StrategyType}
 */
proto.MarketInfo.prototype.getStrategyType = function() {
  return /** @type {!proto.StrategyType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.StrategyType} value
 * @return {!proto.MarketInfo} returns this
 */
proto.MarketInfo.prototype.setStrategyType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional uint64 account_index = 5;
 * @return {number}
 */
proto.MarketInfo.prototype.getAccountIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.MarketInfo} returns this
 */
proto.MarketInfo.prototype.setAccountIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional Price price = 6;
 * @return {?proto.Price}
 */
proto.MarketInfo.prototype.getPrice = function() {
  return /** @type{?proto.Price} */ (
    jspb.Message.getWrapperField(this, types_pb.Price, 6));
};


/**
 * @param {?proto.Price|undefined} value
 * @return {!proto.MarketInfo} returns this
*/
proto.MarketInfo.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MarketInfo} returns this
 */
proto.MarketInfo.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MarketInfo.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Balance balance = 7;
 * @return {?proto.Balance}
 */
proto.MarketInfo.prototype.getBalance = function() {
  return /** @type{?proto.Balance} */ (
    jspb.Message.getWrapperField(this, types_pb.Balance, 7));
};


/**
 * @param {?proto.Balance|undefined} value
 * @return {!proto.MarketInfo} returns this
*/
proto.MarketInfo.prototype.setBalance = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MarketInfo} returns this
 */
proto.MarketInfo.prototype.clearBalance = function() {
  return this.setBalance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MarketInfo.prototype.hasBalance = function() {
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
proto.UtxoInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.UtxoInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UtxoInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UtxoInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    outpoint: (f = msg.getOutpoint()) && proto.TxOutpoint.toObject(includeInstance, f),
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
 * @return {!proto.UtxoInfo}
 */
proto.UtxoInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UtxoInfo;
  return proto.UtxoInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UtxoInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UtxoInfo}
 */
proto.UtxoInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.TxOutpoint;
      reader.readMessage(value,proto.TxOutpoint.deserializeBinaryFromReader);
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
proto.UtxoInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UtxoInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UtxoInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UtxoInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutpoint();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.TxOutpoint.serializeBinaryToWriter
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
 * @return {?proto.TxOutpoint}
 */
proto.UtxoInfo.prototype.getOutpoint = function() {
  return /** @type{?proto.TxOutpoint} */ (
    jspb.Message.getWrapperField(this, proto.TxOutpoint, 1));
};


/**
 * @param {?proto.TxOutpoint|undefined} value
 * @return {!proto.UtxoInfo} returns this
*/
proto.UtxoInfo.prototype.setOutpoint = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.UtxoInfo} returns this
 */
proto.UtxoInfo.prototype.clearOutpoint = function() {
  return this.setOutpoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UtxoInfo.prototype.hasOutpoint = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 value = 2;
 * @return {number}
 */
proto.UtxoInfo.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.UtxoInfo} returns this
 */
proto.UtxoInfo.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string asset = 3;
 * @return {string}
 */
proto.UtxoInfo.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.UtxoInfo} returns this
 */
proto.UtxoInfo.prototype.setAsset = function(value) {
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
proto.TradeStatusInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.TradeStatusInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TradeStatusInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TradeStatusInfo.toObject = function(includeInstance, msg) {
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
 * @return {!proto.TradeStatusInfo}
 */
proto.TradeStatusInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TradeStatusInfo;
  return proto.TradeStatusInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TradeStatusInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TradeStatusInfo}
 */
proto.TradeStatusInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.TradeStatus} */ (reader.readEnum());
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
proto.TradeStatusInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TradeStatusInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TradeStatusInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TradeStatusInfo.serializeBinaryToWriter = function(message, writer) {
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
 * @return {!proto.TradeStatus}
 */
proto.TradeStatusInfo.prototype.getStatus = function() {
  return /** @type {!proto.TradeStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.TradeStatus} value
 * @return {!proto.TradeStatusInfo} returns this
 */
proto.TradeStatusInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool failed = 2;
 * @return {boolean}
 */
proto.TradeStatusInfo.prototype.getFailed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.TradeStatusInfo} returns this
 */
proto.TradeStatusInfo.prototype.setFailed = function(value) {
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
proto.SwapInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.SwapInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SwapInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SwapInfo.toObject = function(includeInstance, msg) {
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
 * @return {!proto.SwapInfo}
 */
proto.SwapInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SwapInfo;
  return proto.SwapInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SwapInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SwapInfo}
 */
proto.SwapInfo.deserializeBinaryFromReader = function(msg, reader) {
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
proto.SwapInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SwapInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SwapInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SwapInfo.serializeBinaryToWriter = function(message, writer) {
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
proto.SwapInfo.prototype.getAmountP = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.SwapInfo} returns this
 */
proto.SwapInfo.prototype.setAmountP = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string asset_p = 2;
 * @return {string}
 */
proto.SwapInfo.prototype.getAssetP = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.SwapInfo} returns this
 */
proto.SwapInfo.prototype.setAssetP = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 amount_r = 3;
 * @return {number}
 */
proto.SwapInfo.prototype.getAmountR = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.SwapInfo} returns this
 */
proto.SwapInfo.prototype.setAmountR = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string asset_r = 4;
 * @return {string}
 */
proto.SwapInfo.prototype.getAssetR = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.SwapInfo} returns this
 */
proto.SwapInfo.prototype.setAssetR = function(value) {
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
proto.SwapFailInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.SwapFailInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SwapFailInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SwapFailInfo.toObject = function(includeInstance, msg) {
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
 * @return {!proto.SwapFailInfo}
 */
proto.SwapFailInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SwapFailInfo;
  return proto.SwapFailInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SwapFailInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SwapFailInfo}
 */
proto.SwapFailInfo.deserializeBinaryFromReader = function(msg, reader) {
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
proto.SwapFailInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SwapFailInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SwapFailInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SwapFailInfo.serializeBinaryToWriter = function(message, writer) {
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
proto.SwapFailInfo.prototype.getFailureCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.SwapFailInfo} returns this
 */
proto.SwapFailInfo.prototype.setFailureCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string failure_message = 2;
 * @return {string}
 */
proto.SwapFailInfo.prototype.getFailureMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.SwapFailInfo} returns this
 */
proto.SwapFailInfo.prototype.setFailureMessage = function(value) {
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
proto.TradeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.TradeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TradeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TradeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: (f = msg.getStatus()) && proto.TradeStatusInfo.toObject(includeInstance, f),
    swapInfo: (f = msg.getSwapInfo()) && proto.SwapInfo.toObject(includeInstance, f),
    failInfo: (f = msg.getFailInfo()) && proto.SwapFailInfo.toObject(includeInstance, f),
    marketWithFee: (f = msg.getMarketWithFee()) && types_pb.MarketWithFee.toObject(includeInstance, f),
    price: (f = msg.getPrice()) && proto.TradePrice.toObject(includeInstance, f),
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
 * @return {!proto.TradeInfo}
 */
proto.TradeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TradeInfo;
  return proto.TradeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TradeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TradeInfo}
 */
proto.TradeInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.TradeStatusInfo;
      reader.readMessage(value,proto.TradeStatusInfo.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 3:
      var value = new proto.SwapInfo;
      reader.readMessage(value,proto.SwapInfo.deserializeBinaryFromReader);
      msg.setSwapInfo(value);
      break;
    case 4:
      var value = new proto.SwapFailInfo;
      reader.readMessage(value,proto.SwapFailInfo.deserializeBinaryFromReader);
      msg.setFailInfo(value);
      break;
    case 5:
      var value = new types_pb.MarketWithFee;
      reader.readMessage(value,types_pb.MarketWithFee.deserializeBinaryFromReader);
      msg.setMarketWithFee(value);
      break;
    case 6:
      var value = new proto.TradePrice;
      reader.readMessage(value,proto.TradePrice.deserializeBinaryFromReader);
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
proto.TradeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TradeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TradeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TradeInfo.serializeBinaryToWriter = function(message, writer) {
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
      proto.TradeStatusInfo.serializeBinaryToWriter
    );
  }
  f = message.getSwapInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.SwapInfo.serializeBinaryToWriter
    );
  }
  f = message.getFailInfo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.SwapFailInfo.serializeBinaryToWriter
    );
  }
  f = message.getMarketWithFee();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      types_pb.MarketWithFee.serializeBinaryToWriter
    );
  }
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.TradePrice.serializeBinaryToWriter
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
proto.TradeInfo.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.TradeInfo} returns this
 */
proto.TradeInfo.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TradeStatusInfo status = 2;
 * @return {?proto.TradeStatusInfo}
 */
proto.TradeInfo.prototype.getStatus = function() {
  return /** @type{?proto.TradeStatusInfo} */ (
    jspb.Message.getWrapperField(this, proto.TradeStatusInfo, 2));
};


/**
 * @param {?proto.TradeStatusInfo|undefined} value
 * @return {!proto.TradeInfo} returns this
*/
proto.TradeInfo.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.TradeInfo} returns this
 */
proto.TradeInfo.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TradeInfo.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SwapInfo swap_info = 3;
 * @return {?proto.SwapInfo}
 */
proto.TradeInfo.prototype.getSwapInfo = function() {
  return /** @type{?proto.SwapInfo} */ (
    jspb.Message.getWrapperField(this, proto.SwapInfo, 3));
};


/**
 * @param {?proto.SwapInfo|undefined} value
 * @return {!proto.TradeInfo} returns this
*/
proto.TradeInfo.prototype.setSwapInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.TradeInfo} returns this
 */
proto.TradeInfo.prototype.clearSwapInfo = function() {
  return this.setSwapInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TradeInfo.prototype.hasSwapInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SwapFailInfo fail_info = 4;
 * @return {?proto.SwapFailInfo}
 */
proto.TradeInfo.prototype.getFailInfo = function() {
  return /** @type{?proto.SwapFailInfo} */ (
    jspb.Message.getWrapperField(this, proto.SwapFailInfo, 4));
};


/**
 * @param {?proto.SwapFailInfo|undefined} value
 * @return {!proto.TradeInfo} returns this
*/
proto.TradeInfo.prototype.setFailInfo = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.TradeInfo} returns this
 */
proto.TradeInfo.prototype.clearFailInfo = function() {
  return this.setFailInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TradeInfo.prototype.hasFailInfo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MarketWithFee market_with_fee = 5;
 * @return {?proto.MarketWithFee}
 */
proto.TradeInfo.prototype.getMarketWithFee = function() {
  return /** @type{?proto.MarketWithFee} */ (
    jspb.Message.getWrapperField(this, types_pb.MarketWithFee, 5));
};


/**
 * @param {?proto.MarketWithFee|undefined} value
 * @return {!proto.TradeInfo} returns this
*/
proto.TradeInfo.prototype.setMarketWithFee = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.TradeInfo} returns this
 */
proto.TradeInfo.prototype.clearMarketWithFee = function() {
  return this.setMarketWithFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TradeInfo.prototype.hasMarketWithFee = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional TradePrice price = 6;
 * @return {?proto.TradePrice}
 */
proto.TradeInfo.prototype.getPrice = function() {
  return /** @type{?proto.TradePrice} */ (
    jspb.Message.getWrapperField(this, proto.TradePrice, 6));
};


/**
 * @param {?proto.TradePrice|undefined} value
 * @return {!proto.TradeInfo} returns this
*/
proto.TradeInfo.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.TradeInfo} returns this
 */
proto.TradeInfo.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TradeInfo.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string tx_url = 7;
 * @return {string}
 */
proto.TradeInfo.prototype.getTxUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.TradeInfo} returns this
 */
proto.TradeInfo.prototype.setTxUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional uint64 request_time_unix = 8;
 * @return {number}
 */
proto.TradeInfo.prototype.getRequestTimeUnix = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.TradeInfo} returns this
 */
proto.TradeInfo.prototype.setRequestTimeUnix = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 accept_time_unix = 9;
 * @return {number}
 */
proto.TradeInfo.prototype.getAcceptTimeUnix = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.TradeInfo} returns this
 */
proto.TradeInfo.prototype.setAcceptTimeUnix = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint64 complete_time_unix = 10;
 * @return {number}
 */
proto.TradeInfo.prototype.getCompleteTimeUnix = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.TradeInfo} returns this
 */
proto.TradeInfo.prototype.setCompleteTimeUnix = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint64 settle_time_unix = 11;
 * @return {number}
 */
proto.TradeInfo.prototype.getSettleTimeUnix = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.TradeInfo} returns this
 */
proto.TradeInfo.prototype.setSettleTimeUnix = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint64 expiry_time_unix = 12;
 * @return {number}
 */
proto.TradeInfo.prototype.getExpiryTimeUnix = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.TradeInfo} returns this
 */
proto.TradeInfo.prototype.setExpiryTimeUnix = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string request_time_utc = 13;
 * @return {string}
 */
proto.TradeInfo.prototype.getRequestTimeUtc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.TradeInfo} returns this
 */
proto.TradeInfo.prototype.setRequestTimeUtc = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string accept_time_utc = 14;
 * @return {string}
 */
proto.TradeInfo.prototype.getAcceptTimeUtc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.TradeInfo} returns this
 */
proto.TradeInfo.prototype.setAcceptTimeUtc = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string complete_time_utc = 15;
 * @return {string}
 */
proto.TradeInfo.prototype.getCompleteTimeUtc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.TradeInfo} returns this
 */
proto.TradeInfo.prototype.setCompleteTimeUtc = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string settle_time_utc = 16;
 * @return {string}
 */
proto.TradeInfo.prototype.getSettleTimeUtc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.TradeInfo} returns this
 */
proto.TradeInfo.prototype.setSettleTimeUtc = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string expiry_time_utc = 17;
 * @return {string}
 */
proto.TradeInfo.prototype.getExpiryTimeUtc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.TradeInfo} returns this
 */
proto.TradeInfo.prototype.setExpiryTimeUtc = function(value) {
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
proto.FeeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.FeeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FeeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FeeInfo.toObject = function(includeInstance, msg) {
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
 * @return {!proto.FeeInfo}
 */
proto.FeeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FeeInfo;
  return proto.FeeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FeeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FeeInfo}
 */
proto.FeeInfo.deserializeBinaryFromReader = function(msg, reader) {
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
proto.FeeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FeeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FeeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FeeInfo.serializeBinaryToWriter = function(message, writer) {
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
proto.FeeInfo.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.FeeInfo} returns this
 */
proto.FeeInfo.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 basis_point = 2;
 * @return {number}
 */
proto.FeeInfo.prototype.getBasisPoint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.FeeInfo} returns this
 */
proto.FeeInfo.prototype.setBasisPoint = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string asset = 3;
 * @return {string}
 */
proto.FeeInfo.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.FeeInfo} returns this
 */
proto.FeeInfo.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 percentage_fee_amount = 4;
 * @return {number}
 */
proto.FeeInfo.prototype.getPercentageFeeAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.FeeInfo} returns this
 */
proto.FeeInfo.prototype.setPercentageFeeAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 fixed_fee_amount = 5;
 * @return {number}
 */
proto.FeeInfo.prototype.getFixedFeeAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.FeeInfo} returns this
 */
proto.FeeInfo.prototype.setFixedFeeAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional float market_price = 6;
 * @return {number}
 */
proto.FeeInfo.prototype.getMarketPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.FeeInfo} returns this
 */
proto.FeeInfo.prototype.setMarketPrice = function(value) {
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
proto.TxOutpoint.prototype.toObject = function(opt_includeInstance) {
  return proto.TxOutpoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TxOutpoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TxOutpoint.toObject = function(includeInstance, msg) {
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
 * @return {!proto.TxOutpoint}
 */
proto.TxOutpoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TxOutpoint;
  return proto.TxOutpoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TxOutpoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TxOutpoint}
 */
proto.TxOutpoint.deserializeBinaryFromReader = function(msg, reader) {
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
proto.TxOutpoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TxOutpoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TxOutpoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TxOutpoint.serializeBinaryToWriter = function(message, writer) {
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
proto.TxOutpoint.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.TxOutpoint} returns this
 */
proto.TxOutpoint.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 index = 2;
 * @return {number}
 */
proto.TxOutpoint.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.TxOutpoint} returns this
 */
proto.TxOutpoint.prototype.setIndex = function(value) {
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
proto.TradePrice.prototype.toObject = function(opt_includeInstance) {
  return proto.TradePrice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TradePrice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TradePrice.toObject = function(includeInstance, msg) {
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
 * @return {!proto.TradePrice}
 */
proto.TradePrice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TradePrice;
  return proto.TradePrice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TradePrice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TradePrice}
 */
proto.TradePrice.deserializeBinaryFromReader = function(msg, reader) {
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
proto.TradePrice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TradePrice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TradePrice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TradePrice.serializeBinaryToWriter = function(message, writer) {
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
proto.TradePrice.prototype.getBasePrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.TradePrice} returns this
 */
proto.TradePrice.prototype.setBasePrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double quote_price = 2;
 * @return {number}
 */
proto.TradePrice.prototype.getQuotePrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.TradePrice} returns this
 */
proto.TradePrice.prototype.setQuotePrice = function(value) {
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
proto.WebhookInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.WebhookInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WebhookInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WebhookInfo.toObject = function(includeInstance, msg) {
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
 * @return {!proto.WebhookInfo}
 */
proto.WebhookInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WebhookInfo;
  return proto.WebhookInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WebhookInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WebhookInfo}
 */
proto.WebhookInfo.deserializeBinaryFromReader = function(msg, reader) {
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
proto.WebhookInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WebhookInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WebhookInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WebhookInfo.serializeBinaryToWriter = function(message, writer) {
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
proto.WebhookInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.WebhookInfo} returns this
 */
proto.WebhookInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string endpoint = 2;
 * @return {string}
 */
proto.WebhookInfo.prototype.getEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.WebhookInfo} returns this
 */
proto.WebhookInfo.prototype.setEndpoint = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_secured = 3;
 * @return {boolean}
 */
proto.WebhookInfo.prototype.getIsSecured = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.WebhookInfo} returns this
 */
proto.WebhookInfo.prototype.setIsSecured = function(value) {
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
proto.Deposit.prototype.toObject = function(opt_includeInstance) {
  return proto.Deposit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Deposit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Deposit.toObject = function(includeInstance, msg) {
  var f, obj = {
    utxo: (f = msg.getUtxo()) && proto.UtxoInfo.toObject(includeInstance, f),
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
 * @return {!proto.Deposit}
 */
proto.Deposit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Deposit;
  return proto.Deposit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Deposit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Deposit}
 */
proto.Deposit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.UtxoInfo;
      reader.readMessage(value,proto.UtxoInfo.deserializeBinaryFromReader);
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
proto.Deposit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Deposit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Deposit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Deposit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUtxo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.UtxoInfo.serializeBinaryToWriter
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
 * @return {?proto.UtxoInfo}
 */
proto.Deposit.prototype.getUtxo = function() {
  return /** @type{?proto.UtxoInfo} */ (
    jspb.Message.getWrapperField(this, proto.UtxoInfo, 1));
};


/**
 * @param {?proto.UtxoInfo|undefined} value
 * @return {!proto.Deposit} returns this
*/
proto.Deposit.prototype.setUtxo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Deposit} returns this
 */
proto.Deposit.prototype.clearUtxo = function() {
  return this.setUtxo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Deposit.prototype.hasUtxo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 timestamp_unix = 2;
 * @return {number}
 */
proto.Deposit.prototype.getTimestampUnix = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Deposit} returns this
 */
proto.Deposit.prototype.setTimestampUnix = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string timestamp_utc = 5;
 * @return {string}
 */
proto.Deposit.prototype.getTimestampUtc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.Deposit} returns this
 */
proto.Deposit.prototype.setTimestampUtc = function(value) {
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
proto.Withdrawal.prototype.toObject = function(opt_includeInstance) {
  return proto.Withdrawal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Withdrawal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Withdrawal.toObject = function(includeInstance, msg) {
  var f, obj = {
    txId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    balance: (f = msg.getBalance()) && types_pb.Balance.toObject(includeInstance, f),
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
 * @return {!proto.Withdrawal}
 */
proto.Withdrawal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Withdrawal;
  return proto.Withdrawal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Withdrawal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Withdrawal}
 */
proto.Withdrawal.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new types_pb.Balance;
      reader.readMessage(value,types_pb.Balance.deserializeBinaryFromReader);
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
proto.Withdrawal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Withdrawal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Withdrawal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Withdrawal.serializeBinaryToWriter = function(message, writer) {
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
      types_pb.Balance.serializeBinaryToWriter
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
proto.Withdrawal.prototype.getTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Withdrawal} returns this
 */
proto.Withdrawal.prototype.setTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Balance balance = 2;
 * @return {?proto.Balance}
 */
proto.Withdrawal.prototype.getBalance = function() {
  return /** @type{?proto.Balance} */ (
    jspb.Message.getWrapperField(this, types_pb.Balance, 2));
};


/**
 * @param {?proto.Balance|undefined} value
 * @return {!proto.Withdrawal} returns this
*/
proto.Withdrawal.prototype.setBalance = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Withdrawal} returns this
 */
proto.Withdrawal.prototype.clearBalance = function() {
  return this.setBalance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Withdrawal.prototype.hasBalance = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.Withdrawal.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Withdrawal} returns this
 */
proto.Withdrawal.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 timestamp_unix = 4;
 * @return {number}
 */
proto.Withdrawal.prototype.getTimestampUnix = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Withdrawal} returns this
 */
proto.Withdrawal.prototype.setTimestampUnix = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string timestamp_utc = 5;
 * @return {string}
 */
proto.Withdrawal.prototype.getTimestampUtc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.Withdrawal} returns this
 */
proto.Withdrawal.prototype.setTimestampUtc = function(value) {
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
proto.Page.prototype.toObject = function(opt_includeInstance) {
  return proto.Page.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Page} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Page.toObject = function(includeInstance, msg) {
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
 * @return {!proto.Page}
 */
proto.Page.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Page;
  return proto.Page.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Page} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Page}
 */
proto.Page.deserializeBinaryFromReader = function(msg, reader) {
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
proto.Page.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Page.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Page} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Page.serializeBinaryToWriter = function(message, writer) {
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
proto.Page.prototype.getPageNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Page} returns this
 */
proto.Page.prototype.setPageNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.Page.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Page} returns this
 */
proto.Page.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.StrategyType = {
  PLUGGABLE: 0,
  BALANCED: 1,
  UNBALANCED: 2
};

/**
 * @enum {number}
 */
proto.TradeStatus = {
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
proto.ActionType = {
  TRADE_SETTLED: 0,
  ACCOUNT_LOW_BALANCE: 1,
  ACCOUNT_WITHDRAW: 2,
  ALL_ACTIONS: 3
};

goog.object.extend(exports, proto);
