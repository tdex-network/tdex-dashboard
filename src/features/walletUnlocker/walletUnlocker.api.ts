import type { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { createApi } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import type { RpcError, ClientReadableStream } from 'grpc-web';

import type {
  InitWalletReply,
  ChangePasswordReply,
  UnlockWalletReply,
} from '../../api-spec/generated/js/walletunlocker_pb';
import {
  ChangePasswordRequest,
  GenSeedRequest,
  InitWalletRequest,
  IsReadyRequest,
  UnlockWalletRequest,
} from '../../api-spec/generated/js/walletunlocker_pb';
import type { RootState } from '../../app/store';
import { selectWalletUnlockerClient } from '../settings/settingsSlice';

type MethodName = 'genSeed' | 'initWallet' | 'unlockWallet' | 'changePassword' | 'isReady';

const baseQueryFn: BaseQueryFn<
  {
    methodName: MethodName;
    body?: any;
  },
  unknown,
  string
> = async ({ methodName, body }, { getState }: BaseQueryApi) => {
  const state = getState() as RootState;
  const client = selectWalletUnlockerClient(state);
  const metadata = {};

  switch (methodName) {
    case 'genSeed': {
      try {
        const genSeedReply = await client.genSeed(new GenSeedRequest(), metadata);
        return { data: genSeedReply.getSeedMnemonicList() };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
      }
    }
    case 'initWallet': {
      try {
        const { isRestore, password, mnemonic } = body as {
          isRestore: boolean;
          password: string | Uint8Array;
          mnemonic: string[];
        };
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
    }
    case 'unlockWallet': {
      try {
        const { password } = body as {
          password: string | Uint8Array;
        };
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
    }
    case 'changePassword': {
      try {
        const { currentPassword, newPassword } = body as {
          currentPassword: string | Uint8Array;
          newPassword: string | Uint8Array;
        };
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
    }
    case 'isReady': {
      try {
        const isReadyReply = await client.isReady(new IsReadyRequest(), metadata);
        return {
          data: {
            isUnlocked: isReadyReply.getUnlocked(),
            isInitialized: isReadyReply.getInitialized(),
            isSynced: isReadyReply.getSynced(),
          },
        };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
      }
    }
    default:
      return { error: 'method name is unknown' };
  }
};

export const walletUnlockerApi = createApi({
  reducerPath: 'walletUnlockerService',
  baseQuery: baseQueryFn,
  tagTypes: ['Unlocker'],
  endpoints: (build) => ({
    genSeed: build.query<string[], void>({
      query: () => ({ methodName: 'genSeed' }),
    }),
    initWallet: build.mutation<
      ClientReadableStream<InitWalletReply>,
      {
        isRestore: boolean;
        password: string | Uint8Array;
        mnemonic: string[];
      }
    >({
      query: (body) => ({ methodName: 'initWallet', body }),
      invalidatesTags: ['Unlocker'],
    }),
    unlockWallet: build.mutation<
      UnlockWalletReply,
      {
        password: string | Uint8Array;
      }
    >({
      query: (body) => ({ methodName: 'unlockWallet', body }),
      invalidatesTags: ['Unlocker'],
    }),
    changePassword: build.mutation<
      ChangePasswordReply,
      {
        currentPassword: string | Uint8Array;
        newPassword: string | Uint8Array;
      }
    >({
      query: (body) => ({ methodName: 'changePassword', body }),
      invalidatesTags: ['Unlocker'],
    }),
    isReady: build.query<
      {
        isUnlocked: boolean;
        isInitialized: boolean;
        isSynced: boolean;
      },
      void
    >({
      query: () => ({ methodName: 'isReady' }),
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
