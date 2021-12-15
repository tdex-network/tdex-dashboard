import { network } from '../app/config';
import type { Asset } from '../domain/asset';

export const defaultPrecision = 8;

export const LBTC_TICKER = 'L-BTC';
export const LBTC_TESTNET_TICKER = 'tL-BTC';
export const USDT_TICKER = 'USDt';
export const LCAD_TICKER = 'LCAD';
export const BTSE_TICKER = 'BTSE';
// Blockstream Jade voucher
export const BJDE_TICKER = 'B-JDE';

export const LBTC_COINGECKOID = 'bitcoin';
export const USDT_COINGECKOID = 'tether';

export const LBTC_ASSET: Asset = (network.chain === 'liquid' && {
  ticker: LBTC_TICKER,
  asset_id: '6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d',
  precision: 8,
  name: 'Liquid Bitcoin',
}) ||
  (network.chain === 'testnet' && {
    ticker: 'tL-BTC',
    asset_id: '144c654344aa716d6f3abcc1ca90e5641e4e2a7f633bc09fe3baf64585819a49',
    precision: 8,
    name: 'Testnet Liquid Bitcoin',
  }) || {
    ticker: LBTC_TICKER,
    asset_id: '5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225',
    precision: 8,
    name: 'Liquid Bitcoin',
  };

export const USDT_ASSET: Asset = (network.chain === 'liquid' && {
  coinGeckoID: USDT_COINGECKOID,
  ticker: USDT_TICKER,
  asset_id: 'ce091c998b83c78bb71a632313ba3760f1763d9cfcffae02258ffa9865a37bd2',
  precision: 8,
  name: 'Tether USD',
}) ||
  (network.chain === 'testnet' && {
    coinGeckoID: USDT_COINGECKOID,
    ticker: USDT_TICKER,
    asset_id: 'f3d1ec678811398cd2ae277cbe3849c6f6dbd72c74bc542f7c4b11ff0e820958',
    precision: 8,
    name: 'Tether USD',
  }) || {
    coinGeckoID: USDT_COINGECKOID,
    ticker: USDT_TICKER,
    asset_id: '016d94449801e5f522c845e1cf1ba45fed94f6dc2f3b72f469943d35013017c8',
    precision: 8,
    name: 'Tether USD',
  };

export const LCAD_ASSET: Asset = (network.chain === 'liquid' && {
  ticker: LCAD_TICKER,
  asset_id: '0e99c1a6da379d1f4151fb9df90449d40d0608f6cb33a5bcbfc8c265f42bab0a',
  precision: 8,
  name: 'Liquid CAD',
}) ||
  (network.chain === 'testnet' && {
    ticker: LCAD_TICKER,
    asset_id: 'ac3e0ff248c5051ffd61e00155b7122e5ebc04fd397a0ecbdd4f4e4a56232926',
    precision: 8,
    name: 'Liquid CAD',
  }) || {
    ticker: LCAD_TICKER,
    asset_id: '1ad48d8c8c6f86b05ffdba5938bacde697f74281ff19eb552815697ad5047f74',
    precision: 8,
    name: 'Liquid CAD',
  };

export const featuredAssets: Asset[] = [LBTC_ASSET, USDT_ASSET, LCAD_ASSET];

export const LBTC_UNITS = ['L-BTC', 'L-mBTC', 'L-bits', 'L-sats'] as const;
export type LbtcUnit = typeof LBTC_UNITS[number];
