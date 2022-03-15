import type { NetworkString } from 'ldk';

import type { MarketInfo } from '../api-spec/generated/js/operator_pb';
import type { Market } from '../api-spec/generated/js/types_pb';
import type { Asset } from '../domain/asset';

import type { LbtcUnit } from './constants';
import { LBTC_ASSET, LBTC_TICKER, LCAD_ASSET, LCAD_TICKER, USDT_ASSET, USDT_TICKER } from './constants';
import { filterUndef } from './snippets';

export const assetIdToTicker = (assetId: string, assets: Asset[]): string => {
  const asset = assets.find((a: Asset) => a.asset_id === assetId);
  return asset?.ticker || assetId.substring(0, 4).toUpperCase();
};

export const isLbtcTicker = (ticker?: string): boolean => {
  return ticker === LBTC_TICKER['liquid'] || ticker === LBTC_TICKER['testnet'];
};
export const isLbtcAssetId = (assetId: string, network: NetworkString): boolean =>
  assetId === LBTC_ASSET[network].asset_id;

export const isUsdtTicker = (ticker?: string): boolean => {
  return ticker === USDT_TICKER;
};
export const isUsdtAssetId = (assetId: string, network: NetworkString): boolean =>
  assetId === USDT_ASSET[network].asset_id;

export const isLcadTicker = (ticker?: string): boolean => {
  return ticker === LCAD_TICKER;
};
export const isLcadAssetId = (assetId: string, network: NetworkString): boolean =>
  assetId === LCAD_ASSET[network].asset_id;

export const getAllAssetIdsFromMarkets = (marketsList: MarketInfo.AsObject[]): string[] => {
  return filterUndef(
    Array.from(
      new Set(
        marketsList.flatMap((marketInfo) => [marketInfo.market?.baseAsset, marketInfo.market?.quoteAsset])
      )
    )
  );
};

export const getTickers = (
  market: Market.AsObject = { baseAsset: '', quoteAsset: '' },
  savedAssets: Asset[],
  lbtcUnit: LbtcUnit
): {
  baseAssetTicker: string;
  quoteAssetTicker: string;
  baseAssetTickerFormatted: string;
  quoteAssetTickerFormatted: string;
} => {
  const baseAssetTicker = assetIdToTicker(market?.baseAsset || '', savedAssets);
  const quoteAssetTicker = assetIdToTicker(market?.quoteAsset || '', savedAssets);
  const baseAssetTickerFormatted = isLbtcTicker(baseAssetTicker) ? lbtcUnit : baseAssetTicker;
  const quoteAssetTickerFormatted = isLbtcTicker(quoteAssetTicker) ? lbtcUnit : quoteAssetTicker;
  return { baseAssetTicker, quoteAssetTicker, baseAssetTickerFormatted, quoteAssetTickerFormatted };
};
