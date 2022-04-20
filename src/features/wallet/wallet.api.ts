import { TxOutput } from '../../api-spec/protobuf/gen/js/tdex-daemon/v1/types_pb';
import type {
  SendToManyResponse,
  WalletAddressResponse,
  WalletBalanceResponse,
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
    walletAddress: build.query<WalletAddressResponse, void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => ({
          data: await client.walletAddress(new WalletAddressRequest(), metadata),
        }));
      },
    }),
    walletBalance: build.query<WalletBalanceResponse, void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => ({
          data: await client.walletBalance(new WalletBalanceRequest(), metadata),
        }));
      },
    }),
    sendToMany: build.mutation<SendToManyResponse, SendToManyRequest.AsObject>({
      queryFn: async ({ millisatPerByte, outputsList }, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletClient(state);
        const metadata = selectMacaroonCreds(state);
        const outList = outputsList.map((o) => {
          const txOut = new TxOutput();
          txOut.setAddress(o.address);
          txOut.setAsset(o.asset);
          txOut.setValue(o.value);
          return txOut;
        });
        return retryRtkRequest(async () => ({
          data: await client.sendToMany(
            new SendToManyRequest().setMillisatPerByte(millisatPerByte).setOutputsList(outList),
            metadata
          ),
        }));
      },
    }),
  }),
});

export const { useWalletAddressQuery, useWalletBalanceQuery, useSendToManyMutation } = walletApi;
