import assert from 'assert';

import { fromSatsToUnitOrFractional, fromUnitToUnit } from './unitConvert';

describe('unit conversion', () => {
  it('should convert liquid bitcoin from unit to unit', async () => {
    assert.strictEqual(fromUnitToUnit(1, 'L-BTC', 'L-sats'), '100000000');
    assert.strictEqual(fromUnitToUnit(1, 'L-BTC', 'L-bits'), '1000000');
    assert.strictEqual(fromUnitToUnit(1, 'L-BTC', 'L-mBTC'), '1000');
    assert.strictEqual(fromUnitToUnit(1, 'L-BTC', 'L-BTC'), '1');
    //
    assert.strictEqual(fromUnitToUnit(1, 'L-mBTC', 'L-sats'), '100000');
    assert.strictEqual(fromUnitToUnit(1, 'L-mBTC', 'L-bits'), '1000');
    assert.strictEqual(fromUnitToUnit(1, 'L-mBTC', 'L-mBTC'), '1');
    assert.strictEqual(fromUnitToUnit(1, 'L-mBTC', 'L-BTC'), '0.001');
    //
    assert.strictEqual(fromUnitToUnit(1, 'L-bits', 'L-sats'), '100');
    assert.strictEqual(fromUnitToUnit(1, 'L-bits', 'L-bits'), '1');
    assert.strictEqual(fromUnitToUnit(1, 'L-bits', 'L-mBTC'), '0.001');
    assert.strictEqual(fromUnitToUnit(1, 'L-bits', 'L-BTC'), '0.000001');
    //
    assert.strictEqual(fromUnitToUnit(1, 'L-sats', 'L-sats'), '1');
    assert.strictEqual(fromUnitToUnit(1, 'L-sats', 'L-bits'), '0.01');
    assert.strictEqual(fromUnitToUnit(1, 'L-sats', 'L-mBTC'), '0.00001');
    assert.strictEqual(fromUnitToUnit(1, 'L-sats', 'L-BTC'), '0.00000001');
    ////
    assert.strictEqual(fromUnitToUnit(5.56789512, 'L-BTC', 'L-sats'), '556789512');
    assert.strictEqual(fromUnitToUnit(5.56789512, 'L-BTC', 'L-bits'), '5567895.12');
    assert.strictEqual(fromUnitToUnit(5.56789512, 'L-BTC', 'L-mBTC'), '5567.89512');
    assert.strictEqual(fromUnitToUnit(5.56789512, 'L-BTC', 'L-BTC'), '5.56789512');
    //
    assert.strictEqual(fromUnitToUnit(5.56789, 'L-mBTC', 'L-sats'), '556789');
    assert.strictEqual(fromUnitToUnit(5.56789, 'L-mBTC', 'L-bits'), '5567.89');
    assert.strictEqual(fromUnitToUnit(5.56789, 'L-mBTC', 'L-mBTC'), '5.56789');
    assert.strictEqual(fromUnitToUnit(5.56789, 'L-mBTC', 'L-BTC'), '0.00556789');
    //
    assert.strictEqual(fromUnitToUnit(5.56, 'L-bits', 'L-sats'), '556');
    assert.strictEqual(fromUnitToUnit(5.56, 'L-bits', 'L-bits'), '5.56');
    assert.strictEqual(fromUnitToUnit(5.56, 'L-bits', 'L-mBTC'), '0.00556');
    assert.strictEqual(fromUnitToUnit(5.56, 'L-bits', 'L-BTC'), '0.00000556');
    //
    assert.strictEqual(fromUnitToUnit(556, 'L-sats', 'L-sats'), '556');
    assert.strictEqual(fromUnitToUnit(556, 'L-sats', 'L-bits'), '5.56');
    assert.strictEqual(fromUnitToUnit(556, 'L-sats', 'L-mBTC'), '0.00556');
    assert.strictEqual(fromUnitToUnit(556, 'L-sats', 'L-BTC'), '0.00000556');
  });

  it('should convert liquid bitcoin from sats to unit', async () => {
    assert.strictEqual(fromSatsToUnitOrFractional(556, 8, true, 'L-sats'), '556');
    assert.strictEqual(fromSatsToUnitOrFractional(556, 8, true, 'L-bits'), '5.56');
    assert.strictEqual(fromSatsToUnitOrFractional(556, 8, true, 'L-mBTC'), '0.00556');
    assert.strictEqual(fromSatsToUnitOrFractional(556, 8, true, 'L-BTC'), '0.00000556');
  });

  it('should convert non-btc asset from sats to fractional (precision 8)', async () => {
    assert.strictEqual(fromSatsToUnitOrFractional(556, 8, false), '0.00000556');
    assert.strictEqual(fromSatsToUnitOrFractional(55678912345, 8, false), '556.78912345');
    // LBTC unit is just ignored
    assert.strictEqual(fromSatsToUnitOrFractional(55678912345, 8, false, 'L-mBTC'), '556.78912345');
    assert.strictEqual(fromSatsToUnitOrFractional(55678912345, 8, false, 'L-BTC'), '556.78912345');
  });

  it('should convert non-btc asset from sats to fractional (precision 5)', async () => {
    assert.strictEqual(fromSatsToUnitOrFractional(55678912345, 5, false), '556789.12345');
  });

  it('should convert non-btc asset from sats to fractional (precision 0)', async () => {
    assert.strictEqual(fromSatsToUnitOrFractional(55678912345, 0, false), '55678912345');
  });
});
