import { fakeBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { createApi } from '@reduxjs/toolkit/query/react';
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
import { selectMacaroonCreds, selectWalletClient } from '../settings/settingsSlice';

export const walletApi = createApi({
  reducerPath: 'walletService',
  baseQuery: fakeBaseQuery<string>(),
  endpoints: (build) => ({
    walletAddress: build.query<WalletAddressReply, void>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectWalletClient(state);
          const metadata = selectMacaroonCreds(state);
          return { data: await client.walletAddress(new WalletAddressRequest(), metadata) };
        } catch (error) {
          console.error(error);
          return { error: (error as RpcError).message };
        }
      },
    }),
    walletBalance: build.query<WalletBalanceReply, void>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectWalletClient(state);
          const metadata = selectMacaroonCreds(state);
          return { data: await client.walletBalance(new WalletBalanceRequest(), metadata) };
        } catch (error) {
          console.error(error);
          return { error: (error as RpcError).message };
        }
      },
    }),
    sendToMany: build.mutation<
      SendToManyReply,
      {
        isPush: boolean;
        millisatPerByte: number;
        txOut: TxOut[];
      }
    >({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectWalletClient(state);
          const metadata = selectMacaroonCreds(state);
          const { isPush, millisatPerByte, txOut } = arg;
          return {
            data: await client.sendToMany(
              new SendToManyRequest()
                .setPush(isPush)
                .setMillisatPerByte(millisatPerByte)
                .setOutputsList(txOut),
              metadata
            ),
          };
        } catch (error) {
          console.error(error);
          return { error: (error as RpcError).message };
        }
      },
    }),
  }),
});

export const { useWalletAddressQuery, useWalletBalanceQuery, useSendToManyMutation } = walletApi;
