export type Asset = {
  ticker: string;
  // Either LBTC unit or asset ticker
  formattedTicker?: string;
  asset_id: string;
  name: string;
  precision: number;
  coinGeckoID?: string;
};
