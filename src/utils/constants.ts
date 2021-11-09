import { network } from '../app/config';
import type { Asset } from '../domain/asset';

export const defaultPrecision = 8;

export const LBTC_TICKER = 'L-BTC';
export const USDT_TICKER = 'USDt';
export const LCAD_TICKER = 'LCAD';
export const BTSE_TICKER = 'BTSE';
// Blockstream Jade voucher
export const BJDE_TICKER = 'B-JDE';

export const LBTC_COINGECKOID = 'bitcoin';
export const USDT_COINGECKOID = 'tether';

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

export const featuredAssets: Asset[] = [
  LBTC_ASSET,
  {
    coinGeckoID: USDT_COINGECKOID,
    ticker: USDT_TICKER,
    asset_id: 'ce091c998b83c78bb71a632313ba3760f1763d9cfcffae02258ffa9865a37bd2',
    precision: 8,
    name: 'Tether USD',
  },
  {
    ticker: LCAD_TICKER,
    asset_id: '0e99c1a6da379d1f4151fb9df90449d40d0608f6cb33a5bcbfc8c265f42bab0a',
    precision: 8,
    name: 'Liquid CAD',
  },
];
