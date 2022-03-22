import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Currency } from '../domain/currency';

import { CURRENCIES, LBTC_COINGECKOID, USDT_COINGECKOID } from './../utils/constants';

export type CoinGeckoPriceResult = Record<string, Record<Currency['value'], number>>;

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

export const { useLatestPriceFeedFromCoinGeckoQuery } = ratesApi;
