import {
  AddWebhookRequest,
  ListWebhooksRequest,
  RemoveWebhookRequest,
} from '../../../api-spec/protobuf/gen/js/tdex-daemon/v2/webhook_pb';
import type {
  AddWebhookResponse,
  ListWebhooksResponse,
  RemoveWebhookResponse,
} from '../../../api-spec/protobuf/gen/js/tdex-daemon/v2/webhook_pb';
import type { RootState } from '../../../app/store';
import { interceptors } from '../../../grpcDevTool';
import { retryRtkRequest } from '../../../utils';
import { selectMacaroonCreds, selectWebhookClient } from '../../settings/settingsSlice';
import { tdexApi } from '../../tdex.api';

export const webhookApi = tdexApi.injectEndpoints({
  endpoints: (build) => ({
    addWebhook: build.mutation<AddWebhookResponse, AddWebhookRequest>({
      queryFn: async ({ event, endpoint, secret }, { getState }) => {
        const state = getState() as RootState;
        const client = selectWebhookClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.addWebhook(AddWebhookRequest.create({ event, endpoint, secret }), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return {
            data: call.response,
          };
        });
      },
      invalidatesTags: ['webhook'],
    }),
    removeWebhook: build.mutation<RemoveWebhookResponse, RemoveWebhookRequest>({
      queryFn: async ({ id }, { getState }) => {
        const state = getState() as RootState;
        const client = selectWebhookClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const removeWebhookResponse = await client.removeWebhook(RemoveWebhookRequest.create({ id }), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return {
            data: removeWebhookResponse,
          };
        });
      },
      invalidatesTags: ['webhook'],
    }),
    listWebhooks: build.query<ListWebhooksResponse['webhookInfo'], ListWebhooksRequest>({
      queryFn: async ({ event }, { getState }) => {
        const state = getState() as RootState;
        const client = selectWebhookClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.listWebhooks(ListWebhooksRequest.create({ event }), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return {
            data: call.response.webhookInfo,
          };
        });
      },
      providesTags: ['webhook'],
    }),
  }),
});

export const { useAddWebhookMutation, useRemoveWebhookMutation, useListWebhooksQuery } = webhookApi;
