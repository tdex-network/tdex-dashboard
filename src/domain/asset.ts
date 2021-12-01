import type { NetworkString } from 'ldk';

export type Asset = {
  ticker: string;
  asset_id: string;
  name: string;
  precision: number;
  chain?: NetworkString;
  coinGeckoID?: string;
};
