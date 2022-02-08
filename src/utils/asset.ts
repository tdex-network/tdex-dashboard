import type { NetworkString } from 'ldk';

import type { Asset } from '../domain/asset';

import { LBTC_ASSET, LBTC_TICKER } from './constants';

export const assetIdToTicker = (assetId: string, assets: Asset[]): string => {
  const asset = assets.find((a: Asset) => a.asset_id === assetId);
  return asset?.ticker || assetId.substring(0, 4).toUpperCase();
};

export const isLbtcTicker = (ticker?: string): boolean => {
  return ticker === LBTC_TICKER['liquid'] || ticker === LBTC_TICKER['testnet'];
};

export const isLbtcAssetId = (assetId: string, network: NetworkString): boolean =>
  assetId === LBTC_ASSET[network].asset_id;
