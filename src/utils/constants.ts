import { network } from '../app/config';
import type { Asset } from '../domain/asset';

export const defaultPrecision = 8;

export const LBTC_TICKER = 'L-BTC';
export const USDT_TICKER = 'USDt';
export const LCAD_TICKER = 'LCAD';
export const BTSE_TICKER = 'BTSE';
// Blockstream Jade voucher
export const BJDE_TICKER = 'B-JDE';

export const LBTC_ASSET: Asset =
  network.chain === 'regtest'
    ? {
        ticker: LBTC_TICKER,
        asset_id: '5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225',
        precision: 8,
        chain: 'regtest',
        name: 'Liquid Bitcoin',
      }
    : {
        ticker: LBTC_TICKER,
        asset_id: '6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d',
        precision: 8,
        chain: 'liquid',
        name: 'Liquid Bitcoin',
      };
