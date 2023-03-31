import type { RpcOutputStream, RpcStatus } from '@protobuf-ts/runtime-rpc';

import type {
  GetInfoResponse,
  ChangePasswordResponse,
  InitWalletResponse,
  UnlockWalletResponse,
  GetStatusResponse,
} from '../../api-spec/protobuf/gen/js/tdex-daemon/v2/wallet_pb';
import {
  ChangePasswordRequest,
  GenSeedRequest,
  GetInfoRequest,
  InitWalletRequest,
  UnlockWalletRequest,
  GetStatusRequest,
} from '../../api-spec/protobuf/gen/js/tdex-daemon/v2/wallet_pb';
import type { RootState } from '../../app/store';
import { interceptors } from '../../grpcDevTool';
import { retryRtkRequest } from '../../utils';
import { selectMacaroonCreds, selectWalletClient } from '../settings/settingsSlice';
import { tdexApi } from '../tdex.api';

export const walletApi = tdexApi.injectEndpoints({
  endpoints: (build) => ({
    getInfo: build.query<GetInfoResponse, void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.getInfo(GetInfoRequest.create(), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return { data: call.response };
        });
      },
      providesTags: ['market', 'trade'],
    }),
    getStatus: build.query<GetStatusResponse, void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.getStatus(GetStatusRequest.create(), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return { data: call.response };
        });
      },
      providesTags: ['status'],
    }),
    genSeed: build.query<string[], void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletClient(state.settings.baseUrl);
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
      queryFn: ({ restore, password, seedMnemonic }, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletClient(state.settings.baseUrl);
        const call = client.initWallet(
          InitWalletRequest.create({
            restore,
            password,
            seedMnemonic,
          })
        );
        return {
          data: { responses: call.responses, status: call.status },
        };
      },
      invalidatesTags: ['status'],
    }),
    unlockWallet: build.mutation<UnlockWalletResponse, UnlockWalletRequest>({
      queryFn: async ({ password }, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.unlockWallet(UnlockWalletRequest.create({ password }), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return { data: call.response };
        });
      },
      invalidatesTags: ['status', 'market', 'market_utxos', 'fee_account_utxos', 'trade', 'webhook'],
    }),
    changePassword: build.mutation<ChangePasswordResponse, ChangePasswordRequest>({
      queryFn: async ({ currentPassword, newPassword }, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.changePassword(
            ChangePasswordRequest.create({ currentPassword, newPassword }),
            { meta: macaroon ? { macaroon } : undefined, interceptors }
          );
          return { data: call.response };
        });
      },
      invalidatesTags: ['status'],
    }),
  }),
});

export const {
  useGetInfoQuery,
  useGetStatusQuery,
  useChangePasswordMutation,
  useInitWalletMutation,
  useGenSeedQuery,
  useUnlockWalletMutation,
} = walletApi;
