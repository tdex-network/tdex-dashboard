import type { ClientReadableStream } from 'grpc-web';

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
import { retryRtkRequest } from '../../utils';
import { selectMacaroonCreds, selectWalletUnlockerClient } from '../settings/settingsSlice';
import { tdexApi } from '../tdex.api';

export const walletUnlockerApi = tdexApi.injectEndpoints({
  endpoints: (build) => ({
    genSeed: build.query<string[], void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletUnlockerClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const genSeedResponse = await client.genSeed(new GenSeedRequest(), metadata);
          return { data: genSeedResponse.getSeedMnemonicList() };
        });
      },
    }),
    initWallet: build.mutation<
      ClientReadableStream<InitWalletResponse>,
      {
        isRestore: boolean;
        password: string | Uint8Array;
        mnemonic: string[];
      }
    >({
      queryFn: async ({ isRestore, password, mnemonic }, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletUnlockerClient(state);
        return retryRtkRequest(async () => {
          const clientReadableStream = client.initWallet(
            new InitWalletRequest()
              .setRestore(isRestore)
              .setWalletPassword(password)
              .setSeedMnemonicList(mnemonic)
          );
          return {
            data: clientReadableStream,
          };
        });
      },
      invalidatesTags: ['isReady'],
    }),
    unlockWallet: build.mutation<
      UnlockWalletResponse.AsObject,
      {
        password: string | Uint8Array;
      }
    >({
      queryFn: async ({ password }, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletUnlockerClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const unlockWalletResponse = await client.unlockWallet(
            new UnlockWalletRequest().setWalletPassword(password),
            metadata
          );
          return {
            data: unlockWalletResponse.toObject(false),
          };
        });
      },
      invalidatesTags: ['isReady', 'Market', 'MarketUTXOs', 'Fee', 'FeeUTXOs', 'Trade', 'Webhook'],
    }),
    changePassword: build.mutation<
      ChangePasswordResponse,
      {
        currentPassword: string | Uint8Array;
        newPassword: string | Uint8Array;
      }
    >({
      queryFn: async ({ currentPassword, newPassword }, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletUnlockerClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const changePasswordResponse = await client.changePassword(
            new ChangePasswordRequest().setCurrentPassword(currentPassword).setNewPassword(newPassword),
            metadata
          );
          return { data: changePasswordResponse };
        });
      },
      invalidatesTags: ['isReady'],
    }),
    isReady: build.query<IsReadyResponse.AsObject, void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletUnlockerClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const isReadyResponse = await client.isReady(new IsReadyRequest(), metadata);
          return {
            data: isReadyResponse.toObject(false),
          };
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
