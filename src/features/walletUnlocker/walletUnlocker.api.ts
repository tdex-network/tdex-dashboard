import type { RpcOutputStream, RpcStatus } from '@protobuf-ts/runtime-rpc';

import type {
  InitWalletResponse,
  ChangePasswordResponse,
  UnlockWalletResponse,
  IsReadyResponse,
} from '../../api-spec/protobuf/gen/js/tdex-daemon/v1/walletunlocker_pb';
import {
  ChangePasswordRequest,
  GenSeedRequest,
  InitWalletRequest,
  IsReadyRequest,
  UnlockWalletRequest,
} from '../../api-spec/protobuf/gen/js/tdex-daemon/v1/walletunlocker_pb';
import type { RootState } from '../../app/store';
import { interceptors } from '../../grpcDevTool';
import { retryRtkRequest } from '../../utils';
import { selectMacaroonCreds, selectWalletUnlockerClient } from '../settings/settingsSlice';
import { tdexApi } from '../tdex.api';

export const walletUnlockerApi = tdexApi.injectEndpoints({
  endpoints: (build) => ({
    genSeed: build.query<string[], void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletUnlockerClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.genSeed(GenSeedRequest.create(), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return { data: call.response.seedMnemonic };
        });
      },
    }),
    initWallet: build.mutation<
      { responses: RpcOutputStream<InitWalletResponse>; status: Promise<RpcStatus> },
      InitWalletRequest
    >({
      queryFn: ({ restore, walletPassword, seedMnemonic }, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletUnlockerClient(state.settings.baseUrl);
        const call = client.initWallet(
          InitWalletRequest.create({
            restore,
            walletPassword,
            seedMnemonic,
          })
        );
        return {
          data: { responses: call.responses, status: call.status },
        };
      },
      invalidatesTags: ['isReady'],
    }),
    unlockWallet: build.mutation<UnlockWalletResponse, UnlockWalletRequest>({
      queryFn: async ({ walletPassword }, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletUnlockerClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.unlockWallet(UnlockWalletRequest.create({ walletPassword }), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return { data: call.response };
        });
      },
      invalidatesTags: ['isReady', 'Market', 'MarketUTXOs', 'Fee', 'FeeUTXOs', 'Trade', 'Webhook'],
    }),
    changePassword: build.mutation<ChangePasswordResponse, ChangePasswordRequest>({
      queryFn: async ({ currentPassword, newPassword }, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletUnlockerClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.changePassword(
            ChangePasswordRequest.create({ currentPassword, newPassword }),
            { meta: macaroon ? { macaroon } : undefined, interceptors }
          );
          return { data: call.response };
        });
      },
      invalidatesTags: ['isReady'],
    }),
    isReady: build.query<IsReadyResponse, void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletUnlockerClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.isReady(IsReadyRequest.create(), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return { data: call.response };
        });
      },
      providesTags: ['isReady'],
    }),
  }),
});

export const {
  useGenSeedQuery,
  useInitWalletMutation,
  useUnlockWalletMutation,
  useChangePasswordMutation,
  useIsReadyQuery,
} = walletUnlockerApi;
