import type { ClientReadableStream } from 'grpc-web';

import type {
  InitWalletReply,
  ChangePasswordReply,
  UnlockWalletReply,
  IsReadyReply,
} from '../../api-spec/generated/js/tdex-daemon/v1/walletunlocker_pb';
import {
  ChangePasswordRequest,
  GenSeedRequest,
  InitWalletRequest,
  IsReadyRequest,
  UnlockWalletRequest,
} from '../../api-spec/generated/js/tdex-daemon/v1/walletunlocker_pb';
import type { RootState } from '../../app/store';
import { retryRtkRequest } from '../../utils';
import { selectMacaroonCreds, selectWalletUnlockerClient } from '../settings/settingsSlice';
import { tdexApi } from '../tdex.api';

const walletUnlockerApi = tdexApi.injectEndpoints({
  endpoints: (build) => ({
    genSeed: build.query<string[], void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletUnlockerClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const genSeedReply = await client.genSeed(new GenSeedRequest(), metadata);
          return { data: genSeedReply.getSeedMnemonicList() };
        });
      },
    }),
    initWallet: build.mutation<
      ClientReadableStream<InitWalletReply>,
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
      UnlockWalletReply.AsObject,
      {
        password: string | Uint8Array;
      }
    >({
      queryFn: async ({ password }, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletUnlockerClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const unlockWalletReply = await client.unlockWallet(
            new UnlockWalletRequest().setWalletPassword(password),
            metadata
          );
          return {
            data: unlockWalletReply.toObject(false),
          };
        });
      },
      invalidatesTags: ['isReady', 'Market', 'MarketUTXOs', 'Fee', 'FeeUTXOs', 'Trade', 'Webhook'],
    }),
    changePassword: build.mutation<
      ChangePasswordReply,
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
          const changePasswordReply = await client.changePassword(
            new ChangePasswordRequest().setCurrentPassword(currentPassword).setNewPassword(newPassword),
            metadata
          );
          return { data: changePasswordReply };
        });
      },
      invalidatesTags: ['isReady'],
    }),
    isReady: build.query<IsReadyReply.AsObject, void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletUnlockerClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const isReadyReply = await client.isReady(new IsReadyRequest(), metadata);
          return {
            data: isReadyReply.toObject(false),
          };
        });
      },
      providesTags: ['isReady'],
    }),
  }),
});

export default walletUnlockerApi;
export const {
  useGenSeedQuery,
  useInitWalletMutation,
  useUnlockWalletMutation,
  useChangePasswordMutation,
  useIsReadyQuery,
} = walletUnlockerApi;
