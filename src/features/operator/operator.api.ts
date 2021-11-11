import type { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { createApi } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import type { Metadata, RpcError } from 'grpc-web';

import type {
  GetInfoReply,
  GetFeeAddressReply,
  GetFeeBalanceReply,
  ClaimFeeDepositsReply,
  WithdrawFeeReply,
  GetMarketBalanceReply,
  OpenMarketReply,
  CloseMarketReply,
  DropMarketReply,
  WithdrawMarketReply,
  UpdateMarketFeeReply,
  UpdateMarketPriceReply,
  UpdateMarketStrategyReply,
  ListMarketsReply,
  ListTradesReply,
  ReloadUtxosReply,
  ListUtxosReply,
  AddWebhookReply,
  RemoveWebhookReply,
  NewMarketReply,
  ClaimMarketDepositsReply,
  ActionType,
  WebhookInfo,
  UtxoInfo,
  Withdrawal,
  FragmentFeeDepositsReply,
  GetMarketCollectedSwapFeesReply,
  StrategyType,
  FragmentMarketDepositsReply,
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
  UpdateMarketPercentageFeeRequest,
  Page,
  GetFeeFragmenterAddressRequest,
  FragmentFeeDepositsRequest,
  FragmentMarketDepositsRequest,
} from '../../api-spec/generated/js/operator_pb';
import { Market, Fixed, Price, Balance } from '../../api-spec/generated/js/types_pb';
import type { AddressWithBlindingKey } from '../../api-spec/generated/js/types_pb';
import type { RootState } from '../../app/store';
import { selectMacaroonCreds, selectOperatorClient } from '../settings/settingsSlice';

type MethodName =
  | 'getInfo'
  | 'getFeeAddress'
  | 'listFeeAddresses'
  | 'getFeeBalance'
  | 'claimFeeDeposits'
  | 'getFeeFragmenterAddress'
  | 'fragmentFeeDeposits'
  | 'fragmentMarketDeposits'
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
  | 'totalCollectedSwapFees'
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
        return { error: (error as RpcError).message };
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
        return { error: (error as RpcError).message };
      }
    }
    case 'listFeeAddresses': {
      try {
        const listFeeAddressesReply = await client.listFeeAddresses(new ListFeeAddressesRequest(), metadata);
        return {
          data: listFeeAddressesReply
            .getAddressWithBlinidngKeyList()
            .map((addr: AddressWithBlindingKey) => addr.toObject(false)),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
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
        return { error: (error as RpcError).message };
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
        return { error: (error as RpcError).message };
      }
    }
    case 'getFeeFragmenterAddress': {
      try {
        return {
          data: (
            await client.getFeeFragmenterAddress(new GetFeeFragmenterAddressRequest(), metadata)
          ).getAddress(),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
      }
    }
    case 'fragmentFeeDeposits': {
      try {
        const { recoverAddress, maxFragments } = body as { recoverAddress: string; maxFragments: number };
        return {
          data: await client.fragmentFeeDeposits(
            new FragmentFeeDepositsRequest().setRecoverAddress(recoverAddress).setMaxFragments(maxFragments),
            metadata as Metadata | undefined
          ),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
      }
    }
    case 'fragmentMarketDeposits': {
      try {
        const { market, recoverAddress } = body as { market: Market.AsObject; recoverAddress: string };
        const { baseAsset, quoteAsset } = market;
        const newMarket = new Market();
        newMarket.setBaseAsset(baseAsset);
        newMarket.setQuoteAsset(quoteAsset);
        return {
          data: await client.fragmentMarketDeposits(
            new FragmentMarketDepositsRequest().setMarket(newMarket).setRecoverAddress(recoverAddress),
            metadata as Metadata | undefined
          ),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
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
        return { error: (error as RpcError).message };
      }
    }
    case 'getMarketAddress': {
      try {
        const getMarketAddressReply = await client.getMarketAddress(new GetMarketAddressRequest(), metadata);
        return {
          data: getMarketAddressReply
            .getAddressWithBlindingKeyList()
            .map((addr: AddressWithBlindingKey) => addr.toObject(false)),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
      }
    }
    case 'listMarketAddresses': {
      try {
        const listMarketAddressesReply = await client.listMarketAddresses(
          new ListMarketAddressesRequest(),
          metadata
        );
        return {
          data: listMarketAddressesReply
            .getAddressWithBlinidngKeyList()
            .map((addr: AddressWithBlindingKey) => addr.toObject(false)),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
      }
    }
    case 'getMarketBalance': {
      try {
        const getMarketBalanceReply = await client.getMarketBalance(new GetMarketBalanceRequest(), metadata);
        return {
          data: getMarketBalanceReply.toObject(false),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
      }
    }
    case 'claimMarketDeposits': {
      try {
        const { outpointsList, market } = body as {
          outpointsList: TxOutpoint.AsObject[];
          market: Market.AsObject;
        };
        const { baseAsset, quoteAsset } = market;
        const newMarket = new Market();
        newMarket.setBaseAsset(baseAsset);
        newMarket.setQuoteAsset(quoteAsset);
        //
        const arr = outpointsList.map(({ hash, index }) => {
          const txOutpoint = new TxOutpoint();
          txOutpoint.setHash(hash);
          txOutpoint.setIndex(index);
          return txOutpoint;
        });
        const claimMarketDepositsReply = await client.claimMarketDeposits(
          new ClaimMarketDepositsRequest().setOutpointsList(arr).setMarket(newMarket),
          metadata
        );
        return {
          data: claimMarketDepositsReply,
        };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
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
        return { error: (error as RpcError).message };
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
        return { error: (error as RpcError).message };
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
        return { error: (error as RpcError).message };
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
        return { error: (error as RpcError).message };
      }
    }
    case 'getMarketCollectedSwapFees': {
      try {
        const { baseAsset, quoteAsset } = body as Market.AsObject;
        const newMarket = new Market();
        newMarket.setBaseAsset(baseAsset);
        newMarket.setQuoteAsset(quoteAsset);
        const getMarketCollectedSwapFeesReply = await client.getMarketCollectedSwapFees(
          new GetMarketCollectedSwapFeesRequest().setMarket(newMarket),
          metadata
        );
        return {
          data: getMarketCollectedSwapFeesReply.toObject(false),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
      }
    }
    case 'totalCollectedSwapFees': {
      try {
        let totalCollectedSwapFees = 0;
        const markets = (body as Market.AsObject[]).map(({ baseAsset, quoteAsset }) => {
          const newMarket = new Market();
          newMarket.setBaseAsset(baseAsset);
          newMarket.setQuoteAsset(quoteAsset);
          return newMarket;
        });
        const results = await Promise.all(
          markets.map((market) =>
            client
              .getMarketCollectedSwapFees(new GetMarketCollectedSwapFeesRequest().setMarket(market), metadata)
              .then((res) => ({
                market: [market.getBaseAsset(), market.getQuoteAsset()],
                getMarketCollectedSwapFeesReply: res,
              }))
          )
        );
        for (const r of results) {
          r.market.forEach((marketId) => {
            const marketIdCollectedSwapFees = r.getMarketCollectedSwapFeesReply
              .getTotalCollectedFeesPerAssetMap()
              .get(marketId);
            if (marketIdCollectedSwapFees) {
              totalCollectedSwapFees += marketIdCollectedSwapFees;
            }
          });
        }
        return { data: totalCollectedSwapFees };
      } catch (err) {
        return { error: (err as RpcError).message };
      }
    }
    case 'withdrawMarket': {
      try {
        const { market, balance, address, millisatPerByte } = body as {
          market: Market.AsObject;
          balance: Balance.AsObject;
          address: string;
          millisatPerByte: number;
        };
        const { baseAsset, quoteAsset } = market;
        const newMarket = new Market();
        newMarket.setBaseAsset(baseAsset);
        newMarket.setQuoteAsset(quoteAsset);
        //
        const { baseAmount, quoteAmount } = balance;
        const newBalance = new Balance();
        newBalance.setBaseAmount(baseAmount);
        newBalance.setQuoteAmount(quoteAmount);
        //
        const withdrawMarketReply = await client.withdrawMarket(
          new WithdrawMarketRequest()
            .setMarket(newMarket)
            .setBalanceToWithdraw(newBalance)
            .setAddress(address)
            .setMillisatPerByte(millisatPerByte),
          metadata
        );
        return {
          data: withdrawMarketReply.toObject(false),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
      }
    }
    case 'updateMarketPercentageFee': {
      try {
        const { market, basisPoint } = body as { market: Market.AsObject; basisPoint: number };
        const { baseAsset, quoteAsset } = market;
        const newMarket = new Market();
        newMarket.setBaseAsset(baseAsset);
        newMarket.setQuoteAsset(quoteAsset);
        const updateMarketFeeReply = await client.updateMarketPercentageFee(
          new UpdateMarketPercentageFeeRequest().setMarket(newMarket).setBasisPoint(basisPoint),
          metadata
        );
        return {
          data: updateMarketFeeReply.toObject(false),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
      }
    }
    case 'updateMarketFixedFee': {
      try {
        const { market, fixedFee } = body as { market: Market.AsObject; fixedFee: Fixed.AsObject };
        const { baseAsset, quoteAsset } = market;
        const newMarket = new Market();
        newMarket.setBaseAsset(baseAsset);
        newMarket.setQuoteAsset(quoteAsset);
        //
        const { baseFee, quoteFee } = fixedFee;
        const newFixed = new Fixed();
        newFixed.setBaseFee(baseFee);
        newFixed.setQuoteFee(quoteFee);
        //
        const updateMarketFeeReply = await client.updateMarketFixedFee(
          new UpdateMarketFixedFeeRequest().setMarket(newMarket).setFixed(newFixed),
          metadata
        );
        return {
          data: updateMarketFeeReply.toObject(false),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
      }
    }
    case 'updateMarketPrice': {
      try {
        const { market, price } = body as { market: Market.AsObject; price: Price.AsObject };
        const { baseAsset, quoteAsset } = market;
        const newMarket = new Market();
        newMarket.setBaseAsset(baseAsset);
        newMarket.setQuoteAsset(quoteAsset);
        //
        const { basePrice, quotePrice } = price;
        const newPrice = new Price();
        newPrice.setBasePrice(basePrice);
        newPrice.setQuotePrice(quotePrice);
        //
        const updateMarketPriceReply = await client.updateMarketPrice(
          new UpdateMarketPriceRequest().setMarket(newMarket).setPrice(newPrice),
          metadata
        );
        return {
          data: updateMarketPriceReply.toObject(false),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
      }
    }
    case 'updateMarketStrategy': {
      try {
        const { market, strategyType, meta } = body as {
          market: Market.AsObject;
          strategyType: StrategyType;
          meta?: string;
        };
        const { baseAsset, quoteAsset } = market;
        const newMarket = new Market();
        newMarket.setBaseAsset(baseAsset);
        newMarket.setQuoteAsset(quoteAsset);
        //
        const updateMarketStrategyReply = await client.updateMarketStrategy(
          new UpdateMarketStrategyRequest()
            .setMarket(newMarket)
            .setStrategyType(strategyType)
            .setMetadata(meta || ''),
          metadata
        );
        return {
          data: updateMarketStrategyReply.toObject(false),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
      }
    }
    case 'listMarkets': {
      try {
        const listMarketsReply = await client.listMarkets(new ListMarketsRequest(), metadata);
        return {
          data: listMarketsReply.toObject(false),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
      }
    }
    case 'reloadUtxos': {
      try {
        return {
          data: await client.reloadUtxos(new ReloadUtxosRequest(), metadata),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
      }
    }
    case 'listUtxos': {
      try {
        const { page, accountIndex } = body as { accountIndex: number; page?: Page };
        const listUtxosReply = await client.listUtxos(
          new ListUtxosRequest().setAccountIndex(accountIndex).setPage(page),
          metadata
        );
        return {
          data: listUtxosReply.toObject(false),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
      }
    }
    case 'addWebhook': {
      try {
        const { action, endpoint, secret } = body as { action: ActionType; endpoint: string; secret: string };
        const addWebhookReply = await client.addWebhook(
          new AddWebhookRequest().setAction(action).setEndpoint(endpoint).setSecret(secret),
          metadata
        );
        return {
          data: addWebhookReply.toObject(false),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
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
        return { error: (error as RpcError).message };
      }
    }
    case 'listWebhooks': {
      try {
        const { action } = body as { action: ActionType };
        const listWebhooksReply = await client.listWebhooks(
          new ListWebhooksRequest().setAction(action),
          metadata
        );
        return {
          data: listWebhooksReply
            .getWebhookInfoList()
            .map((webhookInfo: WebhookInfo) => webhookInfo.toObject(false)),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
      }
    }
    case 'listDeposits': {
      try {
        const { accountIndex, page } = body as { accountIndex: number; page: Page.AsObject };
        const { pageNumber, pageSize } = page;
        const newPage = new Page();
        newPage.setPageNumber(pageNumber);
        newPage.setPageSize(pageSize);
        const listDepositsReply = await client.listDeposits(
          new ListDepositsRequest().setPage(newPage).setAccountIndex(accountIndex),
          metadata
        );
        return {
          data: listDepositsReply.getDepositsList().map((utxoInfo: UtxoInfo) => utxoInfo.toObject(false)),
        };
      } catch (error) {
        console.error(error);
        return { error: (error as RpcError).message };
      }
    }
    case 'listWithdrawals': {
      try {
        const { accountIndex, page } = body as { accountIndex: number; page: Page.AsObject };
        const { pageNumber, pageSize } = page;
        const newPage = new Page();
        newPage.setPageNumber(pageNumber);
        newPage.setPageSize(pageSize);
        const listWithdrawalsReply = await client.listWithdrawals(
          new ListWithdrawalsRequest().setPage(newPage).setAccountIndex(accountIndex),
          metadata
        );
        return {
          data: listWithdrawalsReply
            .getWithdrawalsList()
            .map((withdrawal: Withdrawal) => withdrawal.toObject(false)),
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

export const operatorApi = createApi({
  reducerPath: 'operatorService',
  baseQuery: baseQueryFn,
  tagTypes: ['Market'],
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
    claimFeeDeposits: build.mutation<ClaimFeeDepositsReply, TxOutpoint.AsObject[]>({
      query: (body) => ({ methodName: 'claimFeeDeposits', body }),
    }),
    getFeeFragmenterAddress: build.query<string, void>({
      query: () => ({ methodName: 'getFeeFragmenterAddress' }),
    }),
    fragmentFeeDeposits: build.mutation<
      FragmentFeeDepositsReply,
      { recoverAddress: string; maxFragments: number }
    >({
      query: (body) => ({ methodName: 'fragmentFeeDeposits', body }),
    }),
    fragmentMarketDeposits: build.mutation<
      FragmentMarketDepositsReply,
      { market: Market.AsObject; recoverAddress: string }
    >({
      query: (body) => ({ methodName: 'fragmentMarketDeposits', body }),
    }),
    withdrawFee: build.mutation<
      WithdrawFeeReply,
      {
        amount: number;
        millisatsPerByte: number;
        address: string;
        asset: string;
      }
    >({
      query: (body) => ({ methodName: 'withdrawFee', body }),
    }),
    getMarketAddress: build.query<AddressWithBlindingKey.AsObject[], void>({
      query: () => ({ methodName: 'getMarketAddress' }),
      providesTags: ['Market'],
    }),
    listMarketAddresses: build.query<AddressWithBlindingKey.AsObject[], void>({
      query: () => ({ methodName: 'listMarketAddresses' }),
      providesTags: ['Market'],
    }),
    getMarketBalance: build.query<GetMarketBalanceReply.AsObject, void>({
      query: () => ({ methodName: 'getMarketBalance' }),
      providesTags: ['Market'],
    }),
    claimMarketDeposits: build.mutation<
      ClaimMarketDepositsReply.AsObject,
      { market: Market.AsObject; outpointsList: TxOutpoint.AsObject[] }
    >({
      query: (body) => ({ methodName: 'claimMarketDeposits', body }),
      invalidatesTags: ['Market'],
    }),
    newMarket: build.mutation<NewMarketReply, Market.AsObject>({
      query: (body) => ({ methodName: 'newMarket', body }),
      invalidatesTags: ['Market'],
    }),
    openMarket: build.mutation<OpenMarketReply.AsObject, Market.AsObject>({
      query: (body) => ({ methodName: 'openMarket', body }),
      invalidatesTags: ['Market'],
    }),
    closeMarket: build.mutation<CloseMarketReply, Market.AsObject>({
      query: (body) => ({ methodName: 'closeMarket', body }),
      invalidatesTags: ['Market'],
    }),
    dropMarket: build.mutation<DropMarketReply, Market.AsObject>({
      query: (body) => ({ methodName: 'dropMarket', body }),
      invalidatesTags: ['Market'],
    }),
    getMarketCollectedSwapFees: build.query<GetMarketCollectedSwapFeesReply.AsObject, Market.AsObject>({
      query: (body) => ({ methodName: 'getMarketCollectedSwapFees', body }),
      providesTags: ['Market'],
    }),
    totalCollectedSwapFees: build.query<number, Market.AsObject[]>({
      query: (body) => ({ methodName: 'totalCollectedSwapFees', body }),
      providesTags: ['Market'],
    }),
    withdrawMarket: build.mutation<
      WithdrawMarketReply.AsObject,
      {
        market: Market.AsObject;
        balance: Balance.AsObject;
        address: string;
        millisatPerByte: number;
      }
    >({
      query: (body) => ({ methodName: 'withdrawMarket', body }),
      invalidatesTags: ['Market'],
    }),
    updateMarketPercentageFee: build.mutation<
      UpdateMarketFeeReply.AsObject,
      { market: Market.AsObject; basisPoint: number }
    >({
      query: (body) => ({ methodName: 'updateMarketPercentageFee', body }),
      invalidatesTags: ['Market'],
    }),
    updateMarketFixedFee: build.mutation<
      UpdateMarketFeeReply.AsObject,
      { market: Market.AsObject; fixedFee: Fixed.AsObject }
    >({
      query: (body) => ({ methodName: 'updateMarketFixedFee', body }),
      invalidatesTags: ['Market'],
    }),
    updateMarketPrice: build.mutation<
      UpdateMarketPriceReply.AsObject,
      { market: Market.AsObject; price: Price.AsObject }
    >({
      query: (body) => ({ methodName: 'updateMarketPrice', body }),
      invalidatesTags: ['Market'],
    }),
    updateMarketStrategy: build.mutation<
      UpdateMarketStrategyReply.AsObject,
      { market: Market.AsObject; strategyType: StrategyType; meta?: string }
    >({
      query: (body) => ({ methodName: 'updateMarketStrategy', body }),
      invalidatesTags: ['Market'],
    }),
    listMarkets: build.query<ListMarketsReply.AsObject, void>({
      query: () => ({ methodName: 'listMarkets' }),
      providesTags: ['Market'],
    }),
    listTrades: build.query<ListTradesReply, void>({
      query: () => ({ methodName: 'listTrades' }),
    }),
    reloadUtxos: build.query<ReloadUtxosReply, void>({
      query: () => ({ methodName: 'reloadUtxos' }),
    }),
    listUtxos: build.query<ListUtxosReply.AsObject, { accountIndex: number; page?: Page }>({
      query: () => ({ methodName: 'listUtxos' }),
    }),
    addWebhook: build.mutation<
      AddWebhookReply.AsObject,
      { action: ActionType; endpoint: string; secret: string }
    >({
      query: (body) => ({ methodName: 'addWebhook', body }),
    }),
    removeWebhook: build.mutation<RemoveWebhookReply, { id: string }>({
      query: (body) => ({ methodName: 'removeWebhook', body }),
    }),
    listWebhooks: build.query<WebhookInfo.AsObject[], { action: ActionType }>({
      query: (body) => ({ methodName: 'listWebhooks', body }),
    }),
    listDeposits: build.query<UtxoInfo.AsObject[], { accountIndex: number; page: Page.AsObject }>({
      query: (body) => ({ methodName: 'listDeposits', body }),
    }),
    listWithdrawals: build.query<Withdrawal.AsObject[], { accountIndex: number; page: Page.AsObject }>({
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
  useGetFeeFragmenterAddressQuery,
  useFragmentFeeDepositsMutation,
  useClaimMarketDepositsMutation,
  useCloseMarketMutation,
  useWithdrawFeeMutation,
  useGetMarketAddressQuery,
  useListMarketAddressesQuery,
  useGetMarketBalanceQuery,
  useNewMarketMutation,
  useOpenMarketMutation,
  useDropMarketMutation,
  useGetMarketCollectedSwapFeesQuery,
  useTotalCollectedSwapFeesQuery,
  useWithdrawMarketMutation,
  useUpdateMarketPercentageFeeMutation,
  useUpdateMarketFixedFeeMutation,
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
