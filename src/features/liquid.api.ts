import type { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Asset } from '../domain/asset';
import { LBTC_ASSET } from '../utils';

export const liquidApi = createApi({
  reducerPath: 'liquidApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://blockstream.info/liquid/api/' }),
  endpoints: (build) => ({
    getAssetData: build.query<Asset, string>({
      query: (assetHash) => `asset/${assetHash}`,
    }),
    getAssetsData: build.query<Record<string, Asset>, Record<string, string>>({
      async queryFn(
        arg,
        api,
        extraOptions,
        baseQuery
      ): Promise<{ data: Record<string, Asset> } | { error: FetchBaseQueryError }> {
        try {
          const assetRes: Record<string, Asset> = {};
          for await (const asset of Object.entries(arg).map(([assetType, assetHash]) => ({
            assetType,
            assetData: baseQuery(`asset/${assetHash}`),
          }))) {
            const assetData = await asset.assetData;
            if (assetData.error) throw assetData.error;
            const { asset_id, name, precision, ticker } = assetData.data as Asset;
            if (asset_id === LBTC_ASSET.asset_id) {
              assetRes[asset.assetType] = LBTC_ASSET;
            } else {
              assetRes[asset.assetType] = { asset_id, name, precision, ticker };
            }
          }
          return { data: assetRes };
        } catch (err) {
          return { error: err as FetchBaseQueryError };
        }
      },
    }),
  }),
});

export const { useGetAssetDataQuery, useGetAssetsDataQuery } = liquidApi;
