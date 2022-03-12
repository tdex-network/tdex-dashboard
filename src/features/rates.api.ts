import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ratesApi = createApi({
  reducerPath: 'ratesApi',
  baseQuery: fakeBaseQuery<string>(),
  endpoints: (build) => ({
    getPriceFromCoinGecko: builder.query<any, any>({
      queryFn: async (currencies) => {
        console.log('ratesApi')
      },
    }),
  }),
})

export const { getPriceFromCoinGecko } = ratesApi