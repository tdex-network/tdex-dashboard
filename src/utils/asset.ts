import type { Asset } from '../domain/asset';

import { LBTC_ASSET, LBTC_TESTNET_TICKER, LBTC_TICKER } from './constants';

export const assetIdToTicker = (assetId: string, assets: Asset[]): string => {
  const asset = assets.find((a: Asset) => a.asset_id === assetId);
  return asset?.ticker || assetId.substring(0, 4).toUpperCase();
};

export const isLbtcTicker = (ticker?: string): boolean => {
  return ticker === LBTC_TICKER || ticker === LBTC_TESTNET_TICKER;
};

export const isLbtcAssetId = (asset?: string): boolean => asset === LBTC_ASSET.asset_id;
