import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Big from 'big.js';

import type { Currency } from '../domain/currency';

import { CURRENCIES, LBTC_COINGECKOID, USDT_COINGECKOID } from './../utils/constants';

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
export const calculateLCAD = (
  prices: CoinGeckoPriceResult | undefined
): Record<Currency['value'], number> => {
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

export const { useLatestPriceFeedFromCoinGeckoQuery } = ratesApi;
