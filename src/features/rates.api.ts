import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Big from 'big.js';
import type { NetworkString } from 'ldk';

import type { Currency } from '../domain/currency';
import {
  isLbtcAssetId,
  fromSatsToUnitOrFractional,
  formatLbtcUnitToSats,
  LBTC_TICKER,
  USDT_TICKER,
  LCAD_TICKER,
  CURRENCIES,
  LBTC_COINGECKOID,
  USDT_COINGECKOID,
} from '../utils';

export type CoinGeckoPriceResult = Record<string, Record<Currency['value'], number>>;

export interface PriceFeedQueryResult {
  data?: CoinGeckoPriceResult;
  isLoading: boolean;
  isError: boolean;
}

export const ratesApi = createApi({
  reducerPath: 'ratesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coingecko.com/api/v3',
  }),
  endpoints: (build) => ({
    // returns the USDT and L-BTC prices for all values inside the CURRENCIES array (usd, eur, cad)
    latestPriceFeedFromCoinGecko: build.query<CoinGeckoPriceResult, void>({
      query: () => {
        const ids = [LBTC_COINGECKOID, USDT_COINGECKOID].join(',');
        const vs_currencies = CURRENCIES.map((currency) => currency.value).join(',');
        return {
          url: `/simple/price`,
          params: { ids, vs_currencies },
        };
      },
    }),
  }),
});

// COINGECKO does not have a ticker for LCAD
// We have to manually calculate the rates
export const calculateLCAD = (prices?: CoinGeckoPriceResult): Record<Currency['value'], number> => {
  const BTC_CAD_RATE = prices?.[LBTC_COINGECKOID]?.['cad'] || 1;
  const CAD_BTC_RATE = Big(1).div(BTC_CAD_RATE);

  // CAD -> USD
  const USD_CAD_RATE = prices?.[USDT_COINGECKOID]?.['cad'] || 1;
  const CAD_USD_RATE = Big(1).div(USD_CAD_RATE);

  // CAD -> EUR == CAD -> USD -> EUR
  const USD_EUR_RATE = prices?.[USDT_COINGECKOID]?.['eur'] || 1;
  const CAD_EUR_RATE = CAD_USD_RATE.times(USD_EUR_RATE);

  return {
    usd: CAD_USD_RATE.toNumber(),
    cad: 1,
    eur: CAD_EUR_RATE.toNumber(),
    btc: CAD_BTC_RATE.toNumber(),
  };
};

// TODO: Create interface for convertAssetToCurrency
/*
  asset?: Asset, 
  amount: string, 
  network: NetworkString, 
  preferredCurrency: Currency, 
  preferredLbtcUnit: LbtcUnit, 
  prices?: CoinGeckoPriceResult, 
*/
export const convertAssetToCurrency = (args: any): string => {
  const { asset, amount, network, preferredCurrency, preferredLbtcUnit, prices } = args;
  let assetAmount = Big(0);
  try {
    assetAmount = Big(amount);
  } catch {
    // ignore user typos, just leave the amount as 0
  }

  if (asset === undefined || prices === undefined) {
    return '';
  }

  const assetId = asset?.asset_id || '';
  const assetTicker = asset?.ticker || 'unknown';
  const assetPrecision = asset?.precision ?? defaultPrecision;

  let currencyAmount = Big(1);
  if (isLbtcAssetId(assetId, network)) {
    currencyAmount = Big(
      fromSatsToUnitOrFractional(
        Number(formatLbtcUnitToSats(assetAmount.toNumber(), preferredLbtcUnit)),
        assetPrecision,
        true,
        'L-BTC'
      )
    );
  } else {
    currencyAmount = assetAmount;
  }

  let rateMultiplier = 1;
  if (assetTicker === LBTC_TICKER[network as NetworkString]) {
    rateMultiplier = prices?.[LBTC_COINGECKOID]?.[preferredCurrency.value] || 1;
    currencyAmount = Big(currencyAmount).times(rateMultiplier);
  } else if (assetTicker === USDT_TICKER) {
    rateMultiplier = prices?.[USDT_COINGECKOID]?.[preferredCurrency.value] || 1;
    currencyAmount = Big(currencyAmount).times(rateMultiplier);
  } else if (assetTicker === LCAD_TICKER) {
    rateMultiplier =
      calculateLCAD(prices as CoinGeckoPriceResult)[preferredCurrency.value as Currency['value']] || 1;
    currencyAmount = Big(currencyAmount).times(rateMultiplier);
  } else {
    return '';
  }

  if (preferredCurrency.value === 'btc') {
    return `${currencyAmount.toFixed(8)} L-BTC`;
  } else {
    return `${currencyAmount.toFixed(2)} ${preferredCurrency.value.toLocaleUpperCase()}`;
  }
};

export const { useLatestPriceFeedFromCoinGeckoQuery } = ratesApi;
