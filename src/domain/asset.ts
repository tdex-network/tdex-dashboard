export type Asset = {
  ticker: string;
  asset_id: string;
  name: string;
  precision: number;
  chain?: 'liquid' | 'regtest';
  coinGeckoID?: string;
};
