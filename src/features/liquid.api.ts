import type { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Asset } from '../domain/asset';
import { LBTC_ASSET } from '../utils';

export const liquidApi = createApi({
  reducerPath: 'liquidApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://blockstream.info/liquid/api/' }),
  endpoints: (build) => ({
    getAssetData: build.query<Asset, string>({
      async queryFn(
        arg,
        api,
        extraOptions,
        baseQuery
      ): Promise<{ data: Asset } | { error: FetchBaseQueryError }> {
        try {
          // Checking if asset is LBTC because Esplora 'asset' endpoint does not return ticker for LBTC
          if (arg === LBTC_ASSET.asset_id) return { data: LBTC_ASSET };
          const res = (await baseQuery(`asset/${arg}`)) as { data: Asset };
          // Use first 4 asset id chars if no ticker
          if (!res.data.ticker) {
            res.data.ticker = res.data.asset_id.substring(0, 4).toUpperCase();
          }
          return res;
        } catch (err) {
          return { error: err as FetchBaseQueryError };
        }
      },
    }),
    getLastBlockHeight: build.query<number, void>({ query: () => 'blocks/tip/height' }),
    getUtxosByAddress: build.query<number, string>({
      query: (feeDepositAddress: string) => `/address/${feeDepositAddress}/utxo`,
    }),
  }),
});

export const { useGetUtxosByAddressQuery, useGetAssetDataQuery, useGetLastBlockHeightQuery } = liquidApi;
