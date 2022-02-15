import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RpcError, ClientReadableStream } from 'grpc-web';

import type {
  InitWalletReply,
  ChangePasswordReply,
  UnlockWalletReply,
  IsReadyReply,
} from '../../api-spec/generated/js/walletunlocker_pb';
import {
  ChangePasswordRequest,
  GenSeedRequest,
  InitWalletRequest,
  IsReadyRequest,
  UnlockWalletRequest,
} from '../../api-spec/generated/js/walletunlocker_pb';
import type { RootState } from '../../app/store';
import { selectMacaroonCreds, selectWalletUnlockerClient } from '../settings/settingsSlice';

export const walletUnlockerApi = createApi({
  reducerPath: 'walletUnlockerService',
  baseQuery: fakeBaseQuery<string>(),
  tagTypes: ['Unlocker'],
  endpoints: (build) => ({
    genSeed: build.query<string[], void>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectWalletUnlockerClient(state);
          const metadata = selectMacaroonCreds(state);
          const genSeedReply = await client.genSeed(new GenSeedRequest(), metadata);
          return { data: genSeedReply.getSeedMnemonicList() };
        } catch (error) {
          console.error(error);
          return { error: (error as RpcError).message };
        }
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
      queryFn: async (arg, { getState }) => {
        try {
          const { isRestore, password, mnemonic } = arg;
          const state = getState() as RootState;
          const client = selectWalletUnlockerClient(state);
          const clientReadableStream = await client.initWallet(
            new InitWalletRequest()
              .setRestore(isRestore)
              .setWalletPassword(password)
              .setSeedMnemonicList(mnemonic)
          );
          return {
            data: clientReadableStream,
          };
        } catch (error) {
          console.error(error);
          return { error: (error as RpcError).message };
        }
      },
      invalidatesTags: ['Unlocker'],
    }),
    unlockWallet: build.mutation<
      UnlockWalletReply.AsObject,
      {
        password: string | Uint8Array;
      }
    >({
      queryFn: async (arg, { getState }) => {
        try {
          const { password } = arg;
          const state = getState() as RootState;
          const client = selectWalletUnlockerClient(state);
          const metadata = selectMacaroonCreds(state);
          const unlockWalletReply = await client.unlockWallet(
            new UnlockWalletRequest().setWalletPassword(password),
            metadata
          );
          return {
            data: unlockWalletReply.toObject(false),
          };
        } catch (error) {
          console.error(error);
          return { error: (error as RpcError).message };
        }
      },
      invalidatesTags: ['Unlocker'],
    }),
    changePassword: build.mutation<
      ChangePasswordReply,
      {
        currentPassword: string | Uint8Array;
        newPassword: string | Uint8Array;
      }
    >({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectWalletUnlockerClient(state);
          const metadata = selectMacaroonCreds(state);
          const { currentPassword, newPassword } = arg;
          return {
            data: await client.changePassword(
              new ChangePasswordRequest().setCurrentPassword(currentPassword).setNewPassword(newPassword),
              metadata
            ),
          };
        } catch (error) {
          console.error(error);
          return { error: (error as RpcError).message };
        }
      },
      invalidatesTags: ['Unlocker'],
    }),
    isReady: build.query<IsReadyReply.AsObject, void>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectWalletUnlockerClient(state);
          const metadata = selectMacaroonCreds(state);
          const isReadyReply = await client.isReady(new IsReadyRequest(), metadata);
          return {
            data: isReadyReply.toObject(false),
          };
        } catch (error) {
          console.error(error);
          return { error: (error as RpcError).message };
        }
      },
      providesTags: ['Unlocker'],
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
