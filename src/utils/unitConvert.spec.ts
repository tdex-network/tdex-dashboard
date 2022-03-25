import { fromSatsToUnitOrFractional, fromUnitToUnit } from './unitConvert';

// Note: Jest toBe() can compare numbers and strings, but for floats we need to use toBeCloseTo()
// https://jestjs.io/docs/expect#tobeclosetonumber-numdigits

describe('unit conversion', () => {
  it('should convert liquid bitcoin from unit to unit', async () => {
    expect(fromUnitToUnit(1, 'L-BTC', 'L-sats')).toBe('100000000');
    expect(fromUnitToUnit(1, 'L-BTC', 'L-bits')).toBe('1000000');
    expect(fromUnitToUnit(1, 'L-BTC', 'L-mBTC')).toBe('1000');
    expect(fromUnitToUnit(1, 'L-BTC', 'L-BTC')).toBe('1');
    //
    expect(fromUnitToUnit(1, 'L-mBTC', 'L-sats')).toBe('100000');
    expect(fromUnitToUnit(1, 'L-mBTC', 'L-bits')).toBe('1000');
    expect(fromUnitToUnit(1, 'L-mBTC', 'L-mBTC')).toBe('1');
    expect(fromUnitToUnit(1, 'L-mBTC', 'L-BTC')).toBe('0.001');
    //
    expect(fromUnitToUnit(1, 'L-bits', 'L-sats')).toBe('100');
    expect(fromUnitToUnit(1, 'L-bits', 'L-bits')).toBe('1');
    expect(fromUnitToUnit(1, 'L-bits', 'L-mBTC')).toBe('0.001');
    expect(fromUnitToUnit(1, 'L-bits', 'L-BTC')).toBe('0.000001');
    //
    expect(fromUnitToUnit(1, 'L-sats', 'L-sats')).toBe('1');
    expect(fromUnitToUnit(1, 'L-sats', 'L-bits')).toBe('0.01');
    expect(fromUnitToUnit(1, 'L-sats', 'L-mBTC')).toBe('0.00001');
    expect(fromUnitToUnit(1, 'L-sats', 'L-BTC')).toBe('0.00000001');
    ////
    expect(fromUnitToUnit(5.56789512, 'L-BTC', 'L-sats')).toBe('556789512');
    expect(fromUnitToUnit(5.56789512, 'L-BTC', 'L-bits')).toBe('5567895.12');
    expect(fromUnitToUnit(5.56789512, 'L-BTC', 'L-mBTC')).toBe('5567.89512');
    expect(fromUnitToUnit(5.56789512, 'L-BTC', 'L-BTC')).toBe('5.56789512');
    //
    expect(fromUnitToUnit(5.56789, 'L-mBTC', 'L-sats')).toBe('556789');
    expect(fromUnitToUnit(5.56789, 'L-mBTC', 'L-bits')).toBe('5567.89');
    expect(fromUnitToUnit(5.56789, 'L-mBTC', 'L-mBTC')).toBe('5.56789');
    expect(fromUnitToUnit(5.56789, 'L-mBTC', 'L-BTC')).toBe('0.00556789');
    //
    expect(fromUnitToUnit(5.56, 'L-bits', 'L-sats')).toBe('556');
    expect(fromUnitToUnit(5.56, 'L-bits', 'L-bits')).toBe('5.56');
    expect(fromUnitToUnit(5.56, 'L-bits', 'L-mBTC')).toBe('0.00556');
    expect(fromUnitToUnit(5.56, 'L-bits', 'L-BTC')).toBe('0.00000556');
    //
    expect(fromUnitToUnit(556, 'L-sats', 'L-sats')).toBe('556');
    expect(fromUnitToUnit(556, 'L-sats', 'L-bits')).toBe('5.56');
    expect(fromUnitToUnit(556, 'L-sats', 'L-mBTC')).toBe('0.00556');
    expect(fromUnitToUnit(556, 'L-sats', 'L-BTC')).toBe('0.00000556');
  });

  it('should throw with "Invalid amount: too many decimal places"', async () => {
    expect(() => fromUnitToUnit(5.56789, 'L-bits', 'L-BTC')).toThrow(
      'Invalid amount: too many decimal places'
    );
    expect(() => fromUnitToUnit(5.56789, 'L-sats', 'L-BTC')).toThrow(
      'Invalid amount: too many decimal places'
    );
  });

  it('should convert liquid bitcoin from sats to unit', async () => {
    expect(fromSatsToUnitOrFractional(556, 8, true, 'L-sats')).toBe('556');
    expect(fromSatsToUnitOrFractional(556, 8, true, 'L-bits')).toBe('5.56');
    expect(fromSatsToUnitOrFractional(556, 8, true, 'L-mBTC')).toBe('0.00556');
    expect(fromSatsToUnitOrFractional(556, 8, true, 'L-BTC')).toBe('0.00000556');
  });

  it('should convert non-btc asset from sats to fractional (precision 8)', async () => {
    expect(fromSatsToUnitOrFractional(556, 8, false)).toBe('0.00000556');
    expect(fromSatsToUnitOrFractional(55678912345, 8, false)).toBe('556.78912345');
    // LBTC unit is just ignored
    expect(fromSatsToUnitOrFractional(55678912345, 8, false, 'L-mBTC')).toBe('556.78912345');
    expect(fromSatsToUnitOrFractional(55678912345, 8, false, 'L-BTC')).toBe('556.78912345');
  });

  it('should convert non-btc asset from sats to fractional (precision 5)', async () => {
    expect(fromSatsToUnitOrFractional(55678912345, 5, false)).toBe('556789.12345');
  });

  it('should convert non-btc asset from sats to fractional (precision 0)', async () => {
    expect(fromSatsToUnitOrFractional(55678912345, 0, false)).toBe('55678912345');
  });
});
