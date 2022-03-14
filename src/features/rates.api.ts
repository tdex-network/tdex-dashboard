import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { CURRENCIES } from './../utils/constants';
import type { CurrencyInterface } from './settings/settingsSlice';

export type CoinGeckoPriceResult = Record<string, Record<CurrencyInterface['value'], number>>;
export const LBTC_COINGECKOID = 'bitcoin';
export const USDT_COINGECKOID = 'tether';

export const ratesApi = createApi({
  reducerPath: 'ratesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coingecko.com/api/v3',
  }),
  endpoints: (build) => ({
    latestPriceFromCoinGecko: build.query<CoinGeckoPriceResult, void>({
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

export const { useLatestPriceFromCoinGeckoQuery } = ratesApi;
