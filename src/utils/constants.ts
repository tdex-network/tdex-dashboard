import type { NetworkString } from 'ldk';

import type { Asset } from '../domain/asset';
import type { Currency } from '../domain/currency';

export const defaultPrecision = 8;

export const LBTC_TICKER: Record<NetworkString, 'L-BTC' | 'tL-BTC'> = {
  liquid: 'L-BTC',
  testnet: 'tL-BTC',
  regtest: 'L-BTC',
};
export const USDT_TICKER = 'USDt';
export const LCAD_TICKER = 'LCAD';
export const BTSE_TICKER = 'BTSE';
// Blockstream Jade voucher
export const BJDE_TICKER = 'B-JDE';

export const LBTC_COINGECKOID = 'bitcoin';
export const USDT_COINGECKOID = 'tether';

export const LBTC_ASSET: Record<NetworkString, Asset> = {
  liquid: {
    asset_id: '6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d',
    name: 'Liquid Bitcoin',
    precision: 8,
    ticker: LBTC_TICKER['liquid'],
    coinGeckoID: LBTC_COINGECKOID,
  },
  testnet: {
    asset_id: '144c654344aa716d6f3abcc1ca90e5641e4e2a7f633bc09fe3baf64585819a49',
    name: 'Testnet Liquid Bitcoin',
    precision: 8,
    ticker: LBTC_TICKER['testnet'],
    coinGeckoID: LBTC_COINGECKOID,
  },
  regtest: {
    asset_id: '5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225',
    name: 'Liquid Bitcoin',
    precision: 8,
    ticker: LBTC_TICKER['regtest'],
    coinGeckoID: LBTC_COINGECKOID,
  },
};

export const USDT_ASSET: Record<NetworkString, Asset> = {
  liquid: {
    asset_id: 'ce091c998b83c78bb71a632313ba3760f1763d9cfcffae02258ffa9865a37bd2',
    name: 'Tether USD',
    precision: 8,
    ticker: USDT_TICKER,
    coinGeckoID: USDT_COINGECKOID,
  },
  testnet: {
    asset_id: 'f3d1ec678811398cd2ae277cbe3849c6f6dbd72c74bc542f7c4b11ff0e820958',
    name: 'Tether USD',
    precision: 8,
    ticker: USDT_TICKER,
    coinGeckoID: USDT_COINGECKOID,
  },
  regtest: {
    asset_id: 'ce091c998b83c78bb71a632313ba3760f1763d9cfcffae02258ffa9865a37bd2',
    name: 'Tether USD',
    precision: 8,
    ticker: USDT_TICKER,
    coinGeckoID: USDT_COINGECKOID,
  },
};

export const LCAD_ASSET: Record<NetworkString, Asset> = {
  liquid: {
    asset_id: '0e99c1a6da379d1f4151fb9df90449d40d0608f6cb33a5bcbfc8c265f42bab0a',
    name: 'Liquid CAD',
    precision: 8,
    ticker: LCAD_TICKER,
  },
  testnet: {
    asset_id: 'ac3e0ff248c5051ffd61e00155b7122e5ebc04fd397a0ecbdd4f4e4a56232926',
    name: 'Liquid CAD',
    precision: 8,
    ticker: LCAD_TICKER,
  },
  regtest: {
    asset_id: '1ad48d8c8c6f86b05ffdba5938bacde697f74281ff19eb552815697ad5047f74',
    name: 'Liquid CAD',
    precision: 8,
    ticker: LCAD_TICKER,
  },
};

export const featuredAssets: Record<NetworkString, Asset[]> = {
  liquid: [LBTC_ASSET['liquid'], USDT_ASSET['liquid'], LCAD_ASSET['liquid']],
  testnet: [LBTC_ASSET['testnet'], USDT_ASSET['testnet'], LCAD_ASSET['testnet']],
  regtest: [LBTC_ASSET['regtest'], USDT_ASSET['regtest'], LCAD_ASSET['regtest']],
};

export const LBTC_UNITS = ['L-BTC', 'L-mBTC', 'L-bits', 'L-sats'] as const;
export type LbtcUnit = typeof LBTC_UNITS[number];

export const CURRENCIES: Currency[] = [
  {
    name: 'US Dollar',
    symbol: '$',
    value: 'usd',
  },
  {
    name: 'Euro',
    symbol: '€',
    value: 'eur',
  },
  {
    name: 'Canadian Dollar',
    symbol: 'C$',
    value: 'cad',
  },
  {
    name: 'Bitcoin',
    symbol: '',
    value: 'btc',
  },
];
