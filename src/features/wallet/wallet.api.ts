import type { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { createApi } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import type { RpcError } from 'grpc-web';

import type {
  SendToManyReply,
  WalletAddressReply,
  WalletBalanceReply,
  TxOut,
} from '../../api-spec/generated/js/wallet_pb';
import {
  SendToManyRequest,
  WalletAddressRequest,
  WalletBalanceRequest,
} from '../../api-spec/generated/js/wallet_pb';
import type { RootState } from '../../app/store';
import { selectWalletClient } from '../settings/settingsSlice';

type MethodName = 'walletAddress' | 'walletBalance' | 'sendToMany';

const baseQueryFn: BaseQueryFn<
  {
    methodName: MethodName;
    body?: any;
  },
  unknown,
  string
> = async ({ methodName, body }, { getState }: BaseQueryApi) => {
  const state = getState() as RootState;
  const client = selectWalletClient(state);
  const metadata = {};

  switch (methodName) {
    case 'walletAddress': {
      try {
        return { data: await client.walletAddress(new WalletAddressRequest(), metadata) };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
      }
    }
    case 'walletBalance': {
      try {
        return { data: await client.walletBalance(new WalletBalanceRequest(), metadata) };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
      }
    }
    case 'sendToMany': {
      try {
        const { isPush, millisatPerByte, txOut } = body as {
          isPush: boolean;
          millisatPerByte: number;
          txOut: TxOut[];
        };
        return {
          data: await client.sendToMany(
            new SendToManyRequest().setPush(isPush).setMillisatPerByte(millisatPerByte).setOutputsList(txOut),
            metadata
          ),
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

export const walletApi = createApi({
  reducerPath: 'walletService',
  baseQuery: baseQueryFn,
  endpoints: (build) => ({
    walletAddress: build.query<WalletAddressReply, void>({
      query: () => ({ methodName: 'walletAddress' }),
    }),
    walletBalance: build.query<WalletBalanceReply, void>({
      query: () => ({ methodName: 'walletBalance' }),
    }),
    sendToMany: build.mutation<
      SendToManyReply,
      {
        isPush: boolean;
        millisatPerByte: number;
        txOut: TxOut[];
      }
    >({
      query: (body) => ({ methodName: 'sendToMany', body }),
    }),
  }),
});

export const { useWalletAddressQuery, useWalletBalanceQuery, useSendToManyMutation } = walletApi;
