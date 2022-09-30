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
import { interceptors } from '../../grpcDevTool';
import { retryRtkRequest } from '../../utils';
import { selectMacaroonCreds, selectWalletClient } from '../settings/settingsSlice';
import { tdexApi } from '../tdex.api';

export const walletApi = tdexApi.injectEndpoints({
  endpoints: (build) => ({
    walletAddress: build.query<WalletAddressResponse, void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => ({
          data: (
            await client.walletAddress(WalletAddressRequest.create(), {
              meta: macaroon ? { macaroon } : undefined,
              interceptors,
            })
          ).response,
        }));
      },
    }),
    walletBalance: build.query<WalletBalanceResponse, void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => ({
          data: (
            await client.walletBalance(WalletBalanceRequest.create(), {
              meta: macaroon ? { macaroon } : undefined,
              interceptors,
            })
          ).response,
        }));
      },
    }),
    sendToMany: build.mutation<SendToManyResponse, SendToManyRequest>({
      queryFn: async ({ millisatPerByte, outputs }, { getState }) => {
        const state = getState() as RootState;
        const client = selectWalletClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        const outList = outputs.map((o) => {
          return TxOutput.create({ address: o.address, asset: o.asset, value: o.value });
        });
        return retryRtkRequest(async () => ({
          data: (
            await client.sendToMany(SendToManyRequest.create({ millisatPerByte, outputs: outList }), {
              meta: macaroon ? { macaroon } : undefined,
              interceptors,
            })
          ).response,
        }));
      },
    }),
  }),
});

export const { useWalletAddressQuery, useWalletBalanceQuery, useSendToManyMutation } = walletApi;
