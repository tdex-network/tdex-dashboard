export type Asset = {
  ticker: string;
  asset_id: string;
  name: string;
  precision: number;
  coinGeckoID?: string;
  // Used when we want to display either the asset ticker or LBTC unit
  // Used in fromSatoshiToUnitOrFractional() to determine if asset is LBTC or not
  unitOrTicker?: string;
};
