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

export const LBTC_ASSET: Asset = (network.chain === 'regtest' && {
  ticker: LBTC_TICKER,
  asset_id: '5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225',
  precision: 8,
  chain: 'regtest',
  name: 'Liquid Bitcoin',
}) ||
  (network.chain === 'testnet' && {
    ticker: 'tL-BTC',
    asset_id: '144c654344aa716d6f3abcc1ca90e5641e4e2a7f633bc09fe3baf64585819a49',
    precision: 8,
    chain: 'testnet',
    name: 'Testnet Liquid Bitcoin',
  }) ||
  (network.chain === 'liquid' && {
    ticker: LBTC_TICKER,
    asset_id: '6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d',
    precision: 8,
    chain: 'liquid',
    name: 'Liquid Bitcoin',
  }) || {
    ticker: LBTC_TICKER,
    asset_id: '5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225',
    precision: 8,
    chain: 'regtest',
    name: 'Liquid Bitcoin',
  };

export const featuredAssets: Asset[] = [
  LBTC_ASSET,
  {
    coinGeckoID: USDT_COINGECKOID,
    ticker: USDT_TICKER,
    asset_id: 'b612eb46313a2cd6ebabd8b7a8eed5696e29898b87a43bff41c94f51acef9d73',
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

export const isAssetBitcoin = (asset: string): boolean => asset === LBTC_ASSET.asset_id;

export const LBTC_UNITS = ['btc', 'mBtc', 'bits', 'sats'] as const;
export type LbtcUnit = typeof LBTC_UNITS[number];
