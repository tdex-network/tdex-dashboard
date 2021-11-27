import Big from 'big.js';

import type { LbtcUnit } from './constants';
import { isAssetBitcoin, LBTC_ASSET } from './constants';

const rxLeadingZeros = /^[\s0]{2,}/;
const rxEndingZeros = /[\s0]+$/;
const removeInsignificant = (str: string) => {
  str = str.replace(rxLeadingZeros, '');
  const ary = str.split('.');
  if (ary.length > 1) {
    ary[1] = ary[1].replace(rxEndingZeros, '');
    if (ary[1].length === 0) {
      return ary[0];
    } else {
      return ary[0] + '.' + ary[1];
    }
  }
  return str;
};

export function formatSatsToUnit(sats: number, unit: LbtcUnit, asset?: string): string {
  const val = new Big(sats);
  const exp = val.e;
  // If asset is not bitcoin format with precision 8
  if (!isAssetBitcoin(asset || LBTC_ASSET.asset_id)) {
    val.e = exp - 8;
    return removeInsignificant(val.toFixed(8));
  }
  switch (unit) {
    case 'btc':
      val.e = exp - 8;
      return removeInsignificant(val.toFixed(8));
    case 'mBtc':
      val.e = exp - 5;
      return removeInsignificant(val.toFixed(8));
    case 'bits':
      val.e = exp - 2;
      return removeInsignificant(val.toFixed(8));
    case 'sats':
      return removeInsignificant(sats.toFixed(8));
    default:
      return removeInsignificant(sats.toFixed(8));
  }
}
