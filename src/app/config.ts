// eslint-disable-next-line import/no-mutable-exports
let network: any;

if (process.env.NODE_ENV === 'production') {
  network = {
    chain: 'liquid',
    explorerLiquidAPI: 'https://blockstream.info/liquid/api',
  };
} else {
  network = {
    chain: 'regtest',
    explorerLiquidAPI: 'http://localhost:3001',
  };
}

export { network };
