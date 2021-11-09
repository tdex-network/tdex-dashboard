export type Asset = {
  asset_id: string;
  chain?: 'liquid' | 'regtest';
  coinGeckoID?: string;
  name: string;
  precision: number;
  ticker: string;
};
