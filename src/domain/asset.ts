export type Asset = {
  asset_id: string;
  chain?: 'liquid' | 'regtest';
  name: string;
  precision: number;
  ticker: string;
};
