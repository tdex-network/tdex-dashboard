import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { RootState } from '../app/store';
import type { Asset } from '../domain/asset';
import { isLbtcAssetId, isLcadAssetId, isUsdtAssetId, LBTC_ASSET, LCAD_ASSET, USDT_ASSET } from '../utils';

const dynamicBaseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  WebApi,
  extraOptions
) => {
  const baseUrl = (WebApi.getState() as RootState).settings.explorerLiquidAPI;
  const rawBaseQuery = fetchBaseQuery({ baseUrl });
  return rawBaseQuery(args, WebApi, extraOptions);
};

const liquidApi = createApi({
  reducerPath: 'liquidApi',
  baseQuery: dynamicBaseQuery,
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
          const { settings } = api.getState() as RootState;
          if (isLbtcAssetId(arg, settings.network)) return { data: LBTC_ASSET[settings.network] };
          if (isUsdtAssetId(arg, settings.network)) return { data: USDT_ASSET[settings.network] };
          if (isLcadAssetId(arg, settings.network)) return { data: LCAD_ASSET[settings.network] };
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

export default liquidApi;
export const {
  useGetUtxosByAddressQuery,
  useGetAssetDataQuery,
  useGetLastBlockHeightQuery,
  useGetTransactionByIdQuery,
} = liquidApi;
