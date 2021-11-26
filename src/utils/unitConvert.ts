import Big from 'big.js';

import type { LbtcUnit } from './constants';
import { isAssetBitcoin, LBTC_ASSET } from './constants';

export function formatSatsToUnit(sats: number, unit: LbtcUnit, asset?: string): string {
  const val = new Big(sats);
  const exp = val.e;
  // If asset is not bitcoin format with precision 8
  if (!isAssetBitcoin(asset || LBTC_ASSET.asset_id)) {
    val.e = exp - 8;
    return val.toFixed(8).replace(/(\.0*|(?<=(\..*))0*)$/, '');
  }
  switch (unit) {
    case 'btc':
      val.e = exp - 8;
      return val.toFixed(8).replace(/(\.0*|(?<=(\..*))0*)$/, '');
    case 'mBtc':
      val.e = exp - 5;
      return val.toFixed(8).replace(/(\.0*|(?<=(\..*))0*)$/, '');
    case 'bits':
      val.e = exp - 2;
      return val.toFixed(8).replace(/(\.0*|(?<=(\..*))0*)$/, '');
    case 'sats':
      return sats.toFixed(8).replace(/(\.0*|(?<=(\..*))0*)$/, '');
    default:
      return sats.toFixed(8).replace(/(\.0*|(?<=(\..*))0*)$/, '');
  }
}
