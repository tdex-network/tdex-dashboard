import type {
  SendToManyReply,
  WalletAddressReply,
  WalletBalanceReply,
  TxOut,
} from '../../api-spec/protobuf/gen/js/tdex-daemon/v1/wallet_pb';
import {
  SendToManyRequest,
  WalletAddressRequest,
  WalletBalanceRequest,
} from '../../api-spec/protobuf/gen/js/tdex-daemon/v1/wallet_pb';
import type { RootState } from '../../app/store';
import { retryRtkRequest } from '../../utils';
import { selectMacaroonCreds, selectWalletClient } from '../settings/settingsSlice';
import { tdexApi } from '../tdex.api';

export const walletApi = tdexApi.injectEndpoints({
  endpoints: (build) => ({
    walletAddress: build.query<WalletAddressReply, void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => ({
          data: await client.walletAddress(new WalletAddressRequest(), metadata),
        }));
      },
    }),
    walletBalance: build.query<WalletBalanceReply, void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => ({
          data: await client.walletBalance(new WalletBalanceRequest(), metadata),
        }));
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
      queryFn: async ({ isPush, millisatPerByte, txOut }, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => ({
          data: await client.sendToMany(
            new SendToManyRequest().setPush(isPush).setMillisatPerByte(millisatPerByte).setOutputsList(txOut),
            metadata
          ),
        }));
      },
    }),
  }),
});

export const { useWalletAddressQuery, useWalletBalanceQuery, useSendToManyMutation } = walletApi;
