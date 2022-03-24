import Big from 'big.js';

import type { LbtcUnit } from './constants';
import { defaultPrecision, LBTC_UNITS } from './constants';
import { includes } from './snippets';

/**
 * Remove leading and trailing zeros
 */
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

/**
 * Takes sats and returns LBTC formatted to favorite unit or asset formatted to fractional value solely based on precision
 * @param sats
 * @param precision
 * @param isLbtc
 * @param lbtcUnit
 */
export function fromSatsToUnitOrFractional(
  sats: number,
  precision = defaultPrecision,
  isLbtc: boolean,
  lbtcUnit?: LbtcUnit
): string {
  try {
    const unit = isLbtc ? lbtcUnit : undefined;
    return new Big(sats)
      .div(new Big(10).pow(new Big(precision).minus(unitToExponent(unit)).toNumber()))
      .toFixed();
  } catch (err) {
    console.error(err);
    return 'N/A';
  }
}

/**
 * Takes liquid bitcoin amount in certain unit and convert it to another unit
 * @param amount
 * @param lbtcUnitFrom
 * @param lbtcUnitTo
 */
export function fromUnitToUnit(amount: number, lbtcUnitFrom: LbtcUnit, lbtcUnitTo: LbtcUnit): string {
  return new Big(amount)
    .div(new Big(10).pow(new Big(unitToExponent(lbtcUnitFrom)).minus(unitToExponent(lbtcUnitTo)).toNumber()))
    .toFixed();
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

export function formatCompact(amount: number): string {
  const formatter = Intl.NumberFormat('en', { notation: 'compact', maximumSignificantDigits: 21 });
  return formatter.format(amount);
}

/**
 * Determine number of decimal places according to unit in case of Lbtc and asset precision in case of others
 * @param unitOrTicker Either Lbtc unit string or asset ticker
 * @param precision Asset precision
 */
export function lbtcUnitOrTickerToFractionalDigits(unitOrTicker: string, precision: number): number {
  // Non-Lbtc asset returns asset precision
  if (!includes(LBTC_UNITS, unitOrTicker)) return precision;
  switch (unitOrTicker) {
    case 'L-BTC':
      return 8;
    case 'L-mBTC':
      return 5;
    case 'L-bits':
      return 2;
    case 'L-sats':
      return 0;
    default:
      return 8;
  }
}

export function unitToExponent(unit?: LbtcUnit): number {
  // Non-Lbtc asset returns 0
  switch (unit) {
    case 'L-BTC':
      return 0;
    case 'L-mBTC':
      return 3;
    case 'L-bits':
      return 6;
    case 'L-sats':
      return 8;
    default:
      return 0;
  }
}
