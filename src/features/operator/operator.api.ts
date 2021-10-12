import type { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { createApi } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import type { Error } from 'grpc-web';

import type {
  GetInfoReply,
  GetFeeAddressReply,
  GetFeeBalanceReply,
  ClaimFeeDepositsReply,
  WithdrawFeeReply,
  GetMarketAddressReply,
  ListMarketAddressesReply,
  GetMarketBalanceReply,
  OpenMarketReply,
  CloseMarketReply,
  DropMarketReply,
  GetMarketCollectedSwapFeesReply,
  WithdrawMarketReply,
  UpdateMarketFeeReply,
  UpdateMarketPriceReply,
  UpdateMarketStrategyReply,
  ListMarketsReply,
  ListTradesReply,
  Page,
  ReloadUtxosReply,
  ListUtxosReply,
  AddWebhookReply,
  RemoveWebhookReply,
  ListWebhooksReply,
  ListDepositsReply,
  ListWithdrawalsReply,
  NewMarketReply,
} from '../../api-spec/generated/js/operator_pb';
import {
  ClaimFeeDepositsRequest,
  GetFeeAddressRequest,
  GetFeeBalanceRequest,
  GetInfoRequest,
  ListFeeAddressesRequest,
  WithdrawFeeRequest,
  TxOutpoint,
  NewMarketRequest,
  GetMarketAddressRequest,
  ListMarketAddressesRequest,
  GetMarketBalanceRequest,
  ClaimMarketDepositsRequest,
  OpenMarketRequest,
  CloseMarketRequest,
  DropMarketRequest,
  GetMarketCollectedSwapFeesRequest,
  WithdrawMarketRequest,
  UpdateMarketFixedFeeRequest,
  UpdateMarketPriceRequest,
  UpdateMarketStrategyRequest,
  ListMarketsRequest,
  ReloadUtxosRequest,
  ListUtxosRequest,
  AddWebhookRequest,
  RemoveWebhookRequest,
  ListWebhooksRequest,
  ListDepositsRequest,
  ListWithdrawalsRequest,
} from '../../api-spec/generated/js/operator_pb';
import { Market } from '../../api-spec/generated/js/types_pb';
import type { Fixed, Price, AddressWithBlindingKey } from '../../api-spec/generated/js/types_pb';
import type { RootState } from '../../app/store';
import { selectMacaroonCreds, selectOperatorClient } from '../settings/settingsSlice';

type MethodName =
  | 'getInfo'
  | 'getFeeAddress'
  | 'listFeeAddresses'
  | 'getFeeBalance'
  | 'claimFeeDeposits'
  | 'withdrawFee'
  | 'getMarketAddress'
  | 'listMarketAddresses'
  | 'getMarketBalance'
  | 'claimMarketDeposits'
  | 'newMarket'
  | 'openMarket'
  | 'closeMarket'
  | 'dropMarket'
  | 'getMarketCollectedSwapFees'
  | 'withdrawMarket'
  | 'updateMarketPercentageFee'
  | 'updateMarketFixedFee'
  | 'updateMarketPrice'
  | 'updateMarketStrategy'
  | 'listMarkets'
  | 'listTrades'
  | 'reloadUtxos'
  | 'listUtxos'
  | 'addWebhook'
  | 'removeWebhook'
  | 'listWebhooks'
  | 'listDeposits'
  | 'listWithdrawals';

const baseQueryFn: BaseQueryFn<
  {
    methodName: MethodName;
    body?: any;
  },
  unknown,
  string
> = async ({ methodName, body }, { getState }: BaseQueryApi) => {
  const state = getState() as RootState;
  const client = selectOperatorClient(state);
  const metadata = selectMacaroonCreds(state);

  switch (methodName) {
    case 'getInfo': {
      try {
        const info = await client.getInfo(new GetInfoRequest(), metadata);
        return { data: info.toObject(false) };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'getFeeAddress': {
      try {
        const feeAddressReply: GetFeeAddressReply = await client.getFeeAddress(
          new GetFeeAddressRequest(),
          metadata
        );
        return { data: feeAddressReply.getAddressWithBlindingKeyList().map((addr) => addr.toObject(false)) };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'listFeeAddresses': {
      try {
        const listFeeAddressesReply = await client.listFeeAddresses(new ListFeeAddressesRequest(), metadata);
        return {
          data: listFeeAddressesReply.getAddressWithBlinidngKeyList().map((addr) => addr.toObject(false)),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'getFeeBalance': {
      try {
        const feeBalanceReply = await client.getFeeBalance(new GetFeeBalanceRequest(), metadata);
        return {
          data: feeBalanceReply.toObject(false),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'claimFeeDeposits': {
      try {
        const { outpointsList } = body as { outpointsList: TxOutpoint.AsObject[] };
        const arr = outpointsList.map(({ hash, index }) => {
          const txOutpoint = new TxOutpoint();
          txOutpoint.setHash(hash);
          txOutpoint.setIndex(index);
          return txOutpoint;
        });

        return {
          data: await client.claimFeeDeposits(new ClaimFeeDepositsRequest().setOutpointsList(arr), metadata),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'withdrawFee': {
      try {
        const { amount, millisatsPerByte, address, asset } = body as {
          amount: number;
          millisatsPerByte: number;
          address: string;
          asset: string;
        };
        return {
          data: await client.withdrawFee(
            new WithdrawFeeRequest()
              .setAddress(address)
              .setAmount(amount)
              .setAsset(asset)
              .setMillisatsPerByte(millisatsPerByte),
            metadata
          ),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'getMarketAddress': {
      try {
        const getMarketAddressReply = await client.getMarketAddress(new GetMarketAddressRequest(), metadata);
        return {
          data: getMarketAddressReply.getAddressWithBlindingKeyList().map((addr) => addr.toObject(false)),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'listMarketAddresses': {
      try {
        const listMarketAddressesReply = await client.listMarketAddresses(
          new ListMarketAddressesRequest(),
          metadata
        );
        return {
          data: listMarketAddressesReply.getAddressWithBlinidngKeyList().map((addr) => addr.toObject(false)),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'getMarketBalance': {
      try {
        const getMarketBalanceReply = await client.getMarketBalance(new GetMarketBalanceRequest(), metadata);
        return {
          data: getMarketBalanceReply,
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'claimMarketDeposits': {
      try {
        const { outpointsList, market } = body as { outpointsList: TxOutpoint.AsObject[]; market: Market };
        const arr = outpointsList.map(({ hash, index }) => {
          const txOutpoint = new TxOutpoint();
          txOutpoint.setHash(hash);
          txOutpoint.setIndex(index);
          return txOutpoint;
        });
        const claimMarketDepositsReply = await client.claimMarketDeposits(
          new ClaimMarketDepositsRequest().setOutpointsList(arr).setMarket(market),
          metadata
        );
        return {
          data: claimMarketDepositsReply,
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'newMarket': {
      try {
        const { baseAsset, quoteAsset } = body as Market.AsObject;
        const market = new Market();
        market.setBaseAsset(baseAsset);
        market.setQuoteAsset(quoteAsset);
        const newMarketReply = await client.newMarket(new NewMarketRequest().setMarket(market), metadata);
        return {
          data: newMarketReply.toObject(false),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'openMarket': {
      try {
        const { baseAsset, quoteAsset } = body as Market.AsObject;
        const market = new Market();
        market.setBaseAsset(baseAsset);
        market.setQuoteAsset(quoteAsset);
        const openMarketReply = await client.openMarket(new OpenMarketRequest().setMarket(market), metadata);
        return {
          data: openMarketReply.toObject(false),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'closeMarket': {
      try {
        const { baseAsset, quoteAsset } = body as Market.AsObject;
        const market = new Market();
        market.setBaseAsset(baseAsset);
        market.setQuoteAsset(quoteAsset);
        const closeMarketReply = await client.closeMarket(
          new CloseMarketRequest().setMarket(market),
          metadata
        );
        return {
          data: closeMarketReply.toObject(false),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'dropMarket': {
      try {
        const { baseAsset, quoteAsset } = body as Market.AsObject;
        const market = new Market();
        market.setBaseAsset(baseAsset);
        market.setQuoteAsset(quoteAsset);
        const dropMarketReply = await client.dropMarket(new DropMarketRequest().setMarket(market), metadata);
        return {
          data: dropMarketReply.toObject(false),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'getMarketCollectedSwapFees': {
      try {
        const { market } = body as { market: Market };
        const getMarketCollectedSwapFeesReply = await client.getMarketCollectedSwapFees(
          new GetMarketCollectedSwapFeesRequest().setMarket(market),
          metadata
        );
        return {
          data: getMarketCollectedSwapFeesReply,
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'withdrawMarket': {
      try {
        const { market } = body as { market: Market };
        const withdrawMarketReply = await client.withdrawMarket(
          new WithdrawMarketRequest()
            .setMarket(market)
            .setBalanceToWithdraw()
            .setAddress('')
            .setMillisatPerByte(1),
          metadata
        );
        return {
          data: withdrawMarketReply,
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'updateMarketFixedFee': {
      try {
        const { market, fixedFee } = body as { market: Market; fixedFee: Fixed };
        const updateMarketFeeReply = await client.updateMarketFixedFee(
          new UpdateMarketFixedFeeRequest().setMarket(market).setFixed(fixedFee),
          metadata
        );
        return {
          data: updateMarketFeeReply,
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'updateMarketPrice': {
      try {
        const { market, price } = body as { market: Market; price: Price };
        const updateMarketPriceReply = await client.updateMarketPrice(
          new UpdateMarketPriceRequest().setMarket(market).setPrice(price),
          metadata
        );
        return {
          data: updateMarketPriceReply,
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'updateMarketStrategy': {
      try {
        const { market, strategyType, meta } = body as { market: Market; strategyType: any; meta: string };
        const updateMarketStrategyReply = await client.updateMarketStrategy(
          new UpdateMarketStrategyRequest().setMarket(market).setStrategyType(strategyType).setMetadata(meta),
          metadata
        );
        return {
          data: updateMarketStrategyReply,
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'listMarkets': {
      try {
        return {
          data: await client.listMarkets(new ListMarketsRequest(), metadata),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'reloadUtxos': {
      try {
        return {
          data: await client.reloadUtxos(new ReloadUtxosRequest(), metadata),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'listUtxos': {
      try {
        const { page, accountIndex } = body as { page: Page; accountIndex: number };
        const listUtxosReply = await client.listUtxos(
          new ListUtxosRequest().setPage(page).setAccountIndex(accountIndex),
          metadata
        );
        return {
          data: listUtxosReply,
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'addWebhook': {
      try {
        const { action, endpoint, secret } = body as { action: any; endpoint: any; secret: any };
        const addWebhookReply = await client.addWebhook(
          new AddWebhookRequest().setAction(action).setEndpoint(endpoint).setSecret(secret),
          metadata
        );
        return {
          data: addWebhookReply,
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'removeWebhook': {
      try {
        const { id } = body as { id: string };
        const removeWebhookReply = await client.removeWebhook(new RemoveWebhookRequest().setId(id), metadata);
        return {
          data: removeWebhookReply,
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'listWebhooks': {
      try {
        const { action } = body as { action: any };
        const listWebhooksReply = await client.listWebhooks(
          new ListWebhooksRequest().setAction(action),
          metadata
        );
        return {
          data: listWebhooksReply,
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'listDeposits': {
      try {
        const { accountIndex, page } = body as { accountIndex: number; page: Page };
        const listDepositsReply = await client.listDeposits(
          new ListDepositsRequest().setPage(page).setAccountIndex(accountIndex),
          metadata
        );
        return {
          data: listDepositsReply,
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    case 'listWithdrawals': {
      try {
        const { accountIndex, page } = body as { accountIndex: number; page: Page };
        const listWithdrawalsReply = await client.listWithdrawals(
          new ListWithdrawalsRequest().setPage(page).setAccountIndex(accountIndex),
          metadata
        );
        return {
          data: listWithdrawalsReply,
        };
      } catch (error) {
        console.error(error);
        return { error: (error as Error).message };
      }
    }
    default:
      return { error: 'method name is unknown' };
  }
};

export const operatorApi = createApi({
  reducerPath: 'operatorService',
  baseQuery: baseQueryFn,
  endpoints: (build) => ({
    getInfo: build.query<GetInfoReply.AsObject, void>({
      query: () => ({ methodName: 'getInfo' }),
    }),
    getFeeAddress: build.query<AddressWithBlindingKey.AsObject[], void>({
      query: () => ({ methodName: 'getFeeAddress' }),
    }),
    listFeeAddresses: build.query<AddressWithBlindingKey.AsObject[], void>({
      query: () => ({ methodName: 'listFeeAddresses' }),
    }),
    getFeeBalance: build.query<GetFeeBalanceReply.AsObject, void>({
      query: () => ({ methodName: 'getFeeBalance' }),
    }),
    claimFeeDeposits: build.mutation<ClaimFeeDepositsReply, { body: TxOutpoint.AsObject[] }>({
      query: (body) => ({ methodName: 'claimFeeDeposits', body }),
    }),
    withdrawFee: build.mutation<
      WithdrawFeeReply,
      {
        body: {
          amount: number;
          millisatsPerByte: number;
          address: string;
          asset: string;
        };
      }
    >({
      query: (body) => ({ methodName: 'withdrawFee', body }),
    }),
    getMarketAddress: build.query<GetMarketAddressReply, void>({
      query: () => ({ methodName: 'getMarketAddress' }),
    }),
    listMarketAddresses: build.query<ListMarketAddressesReply, void>({
      query: () => ({ methodName: 'listMarketAddresses' }),
    }),
    getMarketBalance: build.query<GetMarketBalanceReply, void>({
      query: () => ({ methodName: 'getMarketBalance' }),
    }),
    claimMarketDeposits: build.mutation<
      ClaimMarketDepositsRequest,
      { body: { market: Market; outpointsList: TxOutpoint.AsObject[] } }
    >({
      query: (body) => ({ methodName: 'claimMarketDeposits', body }),
    }),
    newMarket: build.mutation<NewMarketReply, Market.AsObject>({
      query: (body) => ({ methodName: 'newMarket', body }),
    }),
    openMarket: build.mutation<OpenMarketReply.AsObject, Market.AsObject>({
      query: (body) => ({ methodName: 'openMarket', body }),
    }),
    closeMarket: build.mutation<CloseMarketReply, Market.AsObject>({
      query: (body) => ({ methodName: 'closeMarket', body }),
    }),
    dropMarket: build.mutation<DropMarketReply, Market.AsObject>({
      query: (body) => ({ methodName: 'dropMarket', body }),
    }),
    getMarketCollectedSwapFees: build.mutation<GetMarketCollectedSwapFeesReply, { body: { market: Market } }>(
      {
        query: (body) => ({ methodName: 'getMarketCollectedSwapFees', body }),
      }
    ),
    withdrawMarket: build.mutation<WithdrawMarketReply, { body: { market: Market } }>({
      query: (body) => ({ methodName: 'withdrawMarket', body }),
    }),
    updateMarketPercentageFee: build.mutation<
      UpdateMarketFeeReply,
      { body: { market: Market; basisPoint: number } }
    >({
      query: (body) => ({ methodName: 'updateMarketPercentageFee', body }),
    }),
    updateMarketFixedFee: build.mutation<UpdateMarketFeeReply, { body: { market: Market; fixedFee: Fixed } }>(
      {
        query: (body) => ({ methodName: 'updateMarketFixedFee', body }),
      }
    ),
    updateMarketPrice: build.mutation<UpdateMarketPriceReply, { body: { market: Market; price: Price } }>({
      query: (body) => ({ methodName: 'updateMarketPrice', body }),
    }),
    updateMarketStrategy: build.mutation<
      UpdateMarketStrategyReply,
      { body: { market: Market; strategyType: any; meta: string } }
    >({
      query: (body) => ({ methodName: 'updateMarketStrategy', body }),
    }),
    listMarkets: build.query<ListMarketsReply, void>({
      query: () => ({ methodName: 'listMarkets' }),
    }),
    listTrades: build.query<ListTradesReply, void>({
      query: () => ({ methodName: 'listTrades' }),
    }),
    reloadUtxos: build.query<ReloadUtxosReply, void>({
      query: () => ({ methodName: 'reloadUtxos' }),
    }),
    listUtxos: build.query<ListUtxosReply, void>({
      query: () => ({ methodName: 'listUtxos' }),
    }),
    addWebhook: build.mutation<AddWebhookReply, { body: { action: any; endpoint: any; secret: any } }>({
      query: (body) => ({ methodName: 'addWebhook', body }),
    }),
    removeWebhook: build.mutation<RemoveWebhookReply, { body: { id: string } }>({
      query: (body) => ({ methodName: 'removeWebhook', body }),
    }),
    listWebhooks: build.query<ListWebhooksReply, { action: any }>({
      query: (body) => ({ methodName: 'listWebhooks', body }),
    }),
    listDeposits: build.query<ListDepositsReply, { accountIndex: number; page: Page }>({
      query: (body) => ({ methodName: 'listDeposits', body }),
    }),
    listWithdrawals: build.query<ListWithdrawalsReply, { accountIndex: number; page: Page }>({
      query: (body) => ({ methodName: 'listWithdrawals', body }),
    }),
  }),
});

export const {
  useGetInfoQuery,
  useGetFeeAddressQuery,
  useListFeeAddressesQuery,
  useGetFeeBalanceQuery,
  useClaimFeeDepositsMutation,
  useClaimMarketDepositsMutation,
  useCloseMarketMutation,
  useWithdrawFeeMutation,
  useGetMarketAddressQuery,
  useListMarketAddressesQuery,
  useGetMarketBalanceQuery,
  useNewMarketMutation,
  useOpenMarketMutation,
  useDropMarketMutation,
  useWithdrawMarketMutation,
  useUpdateMarketPriceMutation,
  useUpdateMarketStrategyMutation,
  useListMarketsQuery,
  useListTradesQuery,
  useListUtxosQuery,
  useAddWebhookMutation,
  useRemoveWebhookMutation,
  useListWebhooksQuery,
  useListDepositsQuery,
  useListWithdrawalsQuery,
} = operatorApi;
