import type { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { createApi } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import type { Error } from 'grpc-web';

import type {
  GenSeedReply,
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
  const metadata = selectMacaroonCreds(state);

  switch (methodName) {
    case 'genSeed': {
      try {
        return { data: await client.genSeed(new GenSeedRequest(), metadata) };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'initWallet': {
      try {
        const { isRestore, password, mnemonic } = body as {
          isRestore: boolean;
          password: string | Uint8Array;
          mnemonic: string[];
        };
        return {
          data: await client.initWallet(
            new InitWalletRequest()
              .setRestore(isRestore)
              .setWalletPassword(password)
              .setSeedMnemonicList(mnemonic)
          ),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'unlockWallet': {
      try {
        const { password } = body as {
          password: string | Uint8Array;
        };
        return {
          data: await client.unlockWallet(new UnlockWalletRequest().setWalletPassword(password), metadata),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
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
        return { error: (error as Error).message };
      }
    }
    case 'isReady': {
      try {
        return { data: await client.isReady(new IsReadyRequest(), metadata) };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    default:
      return { error: 'method name is unknown' };
  }
};

export const walletUnlockerApi = createApi({
  reducerPath: 'walletUnlockerService',
  baseQuery: baseQueryFn,
  endpoints: (build) => ({
    genSeed: build.query<GenSeedReply, void>({
      query: () => ({ methodName: 'genSeed' }),
    }),
    initWallet: build.mutation<
      InitWalletReply,
      {
        isRestore: boolean;
        password: string | Uint8Array;
        mnemonic: string[];
      }
    >({
      query: (body) => ({ methodName: 'initWallet', body }),
    }),
    unlockWallet: build.mutation<
      UnlockWalletReply,
      {
        password: string | Uint8Array;
      }
    >({
      query: (body) => ({ methodName: 'unlockWallet', body }),
    }),
    changePassword: build.mutation<
      ChangePasswordReply,
      {
        currentPassword: string | Uint8Array;
        newPassword: string | Uint8Array;
      }
    >({
      query: (body) => ({ methodName: 'changePassword', body }),
    }),
    isReady: build.query<IsReadyReply, void>({
      query: () => ({ methodName: 'isReady' }),
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
