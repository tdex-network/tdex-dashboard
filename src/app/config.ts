import type { NetworkString } from '../domain/misc';

// eslint-disable-next-line import/no-mutable-exports
let config: {
  chain: NetworkString;
  explorerLiquidAPI: string;
  explorerBitcoinAPI: string;
  explorerLiquidUI: string;
  explorerBitcoinUI: string;
};

export const configProduction: typeof config = {
  chain: 'liquid',
  explorerLiquidAPI: 'https://blockstream.info/liquid/api',
  explorerBitcoinAPI: 'https://blockstream.info/api',
  explorerLiquidUI: 'https://blockstream.info/liquid',
  explorerBitcoinUI: 'https://blockstream.info',
};

export const configTestnet: typeof config = {
  chain: 'testnet',
  explorerLiquidAPI: 'https://blockstream.info/liquidtestnet/api',
  explorerBitcoinAPI: 'https://blockstream.info/testnet/api',
  explorerLiquidUI: 'https://blockstream.info/liquidtestnet',
  explorerBitcoinUI: 'https://blockstream.info/testnet',
};

export const configRegtest: typeof config = {
  chain: 'regtest',
  explorerLiquidAPI: 'http://localhost:3001',
  explorerBitcoinAPI: 'http://localhost:3000',
  explorerLiquidUI: 'http://localhost:5001',
  explorerBitcoinUI: 'http://localhost:5000',
};

export const configRecord: Record<NetworkString, typeof config> = {
  liquid: configProduction,
  testnet: configTestnet,
  regtest: configRegtest,
};

if (process.env.NODE_ENV === 'production') {
  config = configProduction;
} else if (process.env.REACT_APP_CHAIN === 'testnet') {
  config = configTestnet;
} else {
  config = configRegtest;
}

export { config };
