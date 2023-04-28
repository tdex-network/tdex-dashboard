import { Market } from '../../api-spec/protobuf/gen/js/tdex/v2/types_pb';
import type {
  AddPriceFeedResponse,
  GetPriceFeedResponse,
  ListPriceFeedsResponse,
  ListSupportedPriceSourcesResponse,
  RemovePriceFeedResponse,
  StartPriceFeedResponse,
  StopPriceFeedResponse,
  UpdatePriceFeedResponse,
} from '../../api-spec/protobuf/gen/js/tdex-daemon/v2/feeder_pb';
import {
  AddPriceFeedRequest,
  StartPriceFeedRequest,
  StopPriceFeedRequest,
  UpdatePriceFeedRequest,
  RemovePriceFeedRequest,
  GetPriceFeedRequest,
  ListPriceFeedsRequest,
  ListSupportedPriceSourcesRequest,
} from '../../api-spec/protobuf/gen/js/tdex-daemon/v2/feeder_pb';
import type { RootState } from '../../app/store';
import { interceptors } from '../../grpcDevTool';
import { retryRtkRequest } from '../../utils';
import { selectFeederClient, selectMacaroonCreds } from '../settings/settingsSlice';
import { tdexApi } from '../tdex.api';

export const feederApi = tdexApi.injectEndpoints({
  endpoints: (build) => ({
    addPriceFeed: build.mutation<AddPriceFeedResponse['id'], AddPriceFeedRequest>({
      queryFn: async ({ market, ticker, source }, { getState }) => {
        const state = getState() as RootState;
        const client = selectFeederClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        const newMarket = Market.create(market);
        return retryRtkRequest(async () => {
          const call = await client.addPriceFeed(
            AddPriceFeedRequest.create({ market: newMarket, ticker, source }),
            {
              meta: { macaroon },
              interceptors,
            }
          );
          return {
            data: call.response.id,
          };
        });
      },
    }),
    startPriceFeed: build.mutation<StartPriceFeedResponse, StartPriceFeedRequest>({
      queryFn: async ({ id }, { getState }) => {
        const state = getState() as RootState;
        const client = selectFeederClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.startPriceFeed(StartPriceFeedRequest.create({ id }), {
            meta: { macaroon },
            interceptors,
          });
          return {
            data: call.response,
          };
        });
      },
    }),
    stopPriceFeed: build.mutation<StopPriceFeedResponse, StopPriceFeedRequest>({
      queryFn: async ({ id }, { getState }) => {
        const state = getState() as RootState;
        const client = selectFeederClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.stopPriceFeed(StopPriceFeedRequest.create({ id }), {
            meta: { macaroon },
            interceptors,
          });
          return {
            data: call.response,
          };
        });
      },
    }),
    updatePriceFeed: build.mutation<UpdatePriceFeedResponse, UpdatePriceFeedRequest>({
      queryFn: async ({ id, ticker, source }, { getState }) => {
        const state = getState() as RootState;
        const client = selectFeederClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.updatePriceFeed(UpdatePriceFeedRequest.create({ id, ticker, source }), {
            meta: { macaroon },
            interceptors,
          });
          return {
            data: call.response,
          };
        });
      },
    }),
    removePriceFeed: build.mutation<RemovePriceFeedResponse, RemovePriceFeedRequest>({
      queryFn: async ({ id }, { getState }) => {
        const state = getState() as RootState;
        const client = selectFeederClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.removePriceFeed(RemovePriceFeedRequest.create({ id }), {
            meta: { macaroon },
            interceptors,
          });
          return {
            data: call.response,
          };
        });
      },
    }),
    getPriceFeed: build.query<GetPriceFeedResponse['feed'], GetPriceFeedRequest>({
      queryFn: async ({ id }, { getState }) => {
        const state = getState() as RootState;
        const client = selectFeederClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.getPriceFeed(GetPriceFeedRequest.create({ id }), {
            meta: { macaroon },
            interceptors,
          });
          return {
            data: call.response.feed,
          };
        });
      },
    }),
    listPriceFeeds: build.query<ListPriceFeedsResponse, void>({
      queryFn: async (_, { getState }) => {
        const state = getState() as RootState;
        const client = selectFeederClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.listPriceFeeds(ListPriceFeedsRequest.create(), {
            meta: { macaroon },
            interceptors,
          });
          return {
            data: call.response,
          };
        });
      },
    }),
    listSupportedPriceSources: build.query<ListSupportedPriceSourcesResponse['sources'], void>({
      queryFn: async (_, { getState }) => {
        const state = getState() as RootState;
        const client = selectFeederClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.listSupportedPriceSources(ListSupportedPriceSourcesRequest.create(), {
            meta: { macaroon },
            interceptors,
          });
          return {
            data: call.response.sources,
          };
        });
      },
    }),
  }),
});
