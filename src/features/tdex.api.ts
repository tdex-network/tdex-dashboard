import { fakeBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { createApi } from '@reduxjs/toolkit/query/react';

// https://redux-toolkit.js.org/rtk-query/usage/code-splitting
export const tdexApi = createApi({
  reducerPath: 'tdexService',
  baseQuery: fakeBaseQuery<string>(),
  tagTypes: ['isReady', 'Market', 'MarketUTXOs', 'Fee', 'FeeUTXOs', 'Trade', 'Webhook'],
  endpoints: () => ({}),
});
