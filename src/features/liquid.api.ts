import type { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { network } from '../app/config';
import type { Asset } from '../domain/asset';
import { LBTC_ASSET } from '../utils';

export const liquidApi = createApi({
  reducerPath: 'liquidApi',
  baseQuery: fetchBaseQuery({ baseUrl: network.explorerLiquidAPI }),
  endpoints: (build) => ({
    getAssetData: build.query<Asset, string>({
      async queryFn(
        arg,
        api,
        extraOptions,
        baseQuery
      ): Promise<{ data: Asset } | { error: FetchBaseQueryError }> {
        try {
          if (!arg) throw new Error('no argument provided');
          // Checking if asset is LBTC because Esplora 'asset' endpoint does not return ticker for LBTC
          if (arg === LBTC_ASSET.asset_id) return { data: LBTC_ASSET };
          const res = (await baseQuery(`asset/${arg}`)) as { data: Asset };
          // @ts-ignore
          if (res.error) throw new Error(res.error.data);
          // Use first 4 asset id chars if no ticker
          if (!res.data?.ticker) {
            res.data.ticker = res.data?.asset_id.substring(0, 4).toUpperCase();
          }
          const { ticker, asset_id, name, precision } = res.data;
          return { data: { ticker, asset_id, name, precision } };
        } catch (err) {
          return { error: err as FetchBaseQueryError };
        }
      },
    }),
    getLastBlockHeight: build.query<number, void>({ query: () => 'blocks/tip/height' }),
    getTransactionById: build.query<any, string>({ query: (txId: string) => `/tx/${txId}` }),
    getUtxosByAddress: build.query<number, string>({
      query: (address: string) => `/address/${address}/utxo`,
    }),
  }),
});

export const {
  useGetUtxosByAddressQuery,
  useGetAssetDataQuery,
  useGetLastBlockHeightQuery,
  useGetTransactionByIdQuery,
} = liquidApi;
