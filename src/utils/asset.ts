import type { MarketInfo } from '../api-spec/protobuf/gen/js/tdex-daemon/v1/types_pb';
import type { Asset } from '../domain/asset';
import type { NetworkString } from '../domain/misc';

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

export const getAllAssetIdsFromMarkets = (marketsList: MarketInfo[]): string[] => {
  return filterUndef(
    Array.from(
      new Set(
        marketsList.flatMap((marketInfo) => [marketInfo.market?.baseAsset, marketInfo.market?.quoteAsset])
      )
    )
  );
};

/**
 * Get asset data from asset id, including formattedTicker
 * @param assetId
 * @param assets
 * @param lbtcUnit
 */
export const getAssetDataFromRegistry = (
  assetId: string,
  assets: Asset[],
  lbtcUnit: LbtcUnit
): Asset | undefined => {
  const asset = assets.find((a: Asset) => a.asset_id === assetId);
  if (!asset) {
    return undefined;
  } else {
    // LBTC unit or asset ticker
    const formattedTicker = isLbtcTicker(asset?.ticker)
      ? lbtcUnit
      : asset?.ticker ?? assetId.substring(0, 4).toUpperCase();
    return Object.assign({}, asset, { formattedTicker });
  }
};
