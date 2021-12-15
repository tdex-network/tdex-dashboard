import Big from 'big.js';

import { isLbtcAssetId } from './asset';
import type { LbtcUnit } from './constants';
import { LBTC_ASSET } from './constants';

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
  try {
    const val = new Big(sats);
    const exp = val.e;
    // If asset is not bitcoin format with precision 8
    if (!isLbtcAssetId(asset || LBTC_ASSET.asset_id)) {
      val.e = exp - 8;
      return removeInsignificant(val.toFixed(8));
    }
    switch (unit) {
      case 'L-BTC':
        val.e = exp - 8;
        return removeInsignificant(val.toFixed(8));
      case 'L-mBTC':
        val.e = exp - 5;
        return removeInsignificant(val.toFixed(5));
      case 'L-bits':
        val.e = exp - 2;
        return removeInsignificant(val.toFixed(2));
      case 'L-sats':
        return removeInsignificant(val.toFixed(0));
      default:
        return removeInsignificant(val.toFixed(0));
    }
  } catch (err) {
    console.error(err);
    return 'N/A';
  }
}

/**
 * Format any lbtc unit to sats
 * @param amount
 * @param unit
 */
export function formatLbtcUnitToSats(amount: number, unit: LbtcUnit): string {
  try {
    const val = new Big(amount);
    const exp = val.e;
    switch (unit) {
      case 'L-BTC':
        val.e = exp + 8;
        return removeInsignificant(val.toFixed(8));
      case 'L-mBTC':
        val.e = exp + 5;
        return removeInsignificant(val.toFixed(5));
      case 'L-bits':
        val.e = exp + 2;
        return removeInsignificant(val.toFixed(2));
      case 'L-sats':
        return removeInsignificant(val.toFixed(0));
      default:
        return removeInsignificant(val.toFixed(0));
    }
  } catch (err) {
    console.error(err);
    return 'N/A';
  }
}

/**
 * Format fiat value to sats
 * @param val
 */
export function formatFiatToSats(val: number): string {
  try {
    const sats = new Big(val);
    const exp = sats.e;
    sats.e = exp + 8;
    return removeInsignificant(sats.toFixed(0));
  } catch (err) {
    console.error(err);
    return 'N/A';
  }
}
