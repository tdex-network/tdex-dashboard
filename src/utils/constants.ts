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
    asset_id: '2dcf5a8834645654911964ec3602426fd3b9b4017554d3f9c19403e7fc1411d3',
    precision: 8,
    name: 'Tether USD',
  },
  {
    ticker: LCAD_TICKER,
    asset_id: '25a9dcae7815a2590769a64847d584edc276e8218a591f14581e93e2f8c34036',
    precision: 8,
    name: 'Liquid CAD',
  },
];

export const isAssetBitcoin = (asset: string): boolean => asset === LBTC_ASSET.asset_id;

export const LBTC_UNITS = ['btc', 'mBtc', 'bits', 'sats'] as const;
export type LbtcUnit = typeof LBTC_UNITS[number];
