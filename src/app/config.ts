// eslint-disable-next-line import/no-mutable-exports
let network: any;

if (process.env.NODE_ENV === 'production') {
  network = {
    chain: 'liquid',
    explorerLiquidAPI: 'https://blockstream.info/liquid/api',
    explorerBitcoinAPI: 'https://blockstream.info/api',
    explorerLiquidUI: 'https://blockstream.info/liquid',
    explorerBitcoinUI: 'https://blockstream.info',
    tdexdBaseUrl: 'https://localhost:9000',
  };
} else if (process.env.NODE_ENV === 'development' && process.env.REACT_APP_CHAIN === 'testnet') {
  network = {
    chain: 'testnet',
    explorerLiquidAPI: 'https://blockstream.info/liquidtestnet/api',
    explorerBitcoinAPI: 'https://blockstream.info/testnet/api',
    explorerLiquidUI: 'blockstream.info/liquidtestnet',
    explorerBitcoinUI: 'blockstream.info/testnet',
    tdexdBaseUrl: 'https://localhost:9000',
  };
} else {
  network = {
    chain: 'regtest',
    explorerLiquidAPI: 'http://localhost:3001',
    explorerBitcoinAPI: 'http://localhost:3000',
    explorerLiquidUI: 'http://localhost:5001',
    explorerBitcoinUI: 'http://localhost:5000',
    tdexdBaseUrl: 'https://localhost:9000',
  };
}

export { network };
