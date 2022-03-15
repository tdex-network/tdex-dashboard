import { fakeBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { createApi } from '@reduxjs/toolkit/query/react';
import type { Metadata, RpcError, ClientReadableStream } from 'grpc-web';

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
  ReloadUtxosReply,
  ListUtxosReply,
  AddWebhookReply,
  RemoveWebhookReply,
  NewMarketReply,
  ClaimMarketDepositsReply,
  ActionType,
  WebhookInfo,
  Withdrawal,
  GetMarketCollectedSwapFeesReply,
  StrategyType,
  TradeInfo,
  Deposit,
  MarketInfo,
  FragmenterSplitFundsReply,
  WithdrawFeeFragmenterReply,
  GetMarketFragmenterBalanceReply,
  WithdrawMarketFragmenterReply,
  MarketReport,
  TimeFrame,
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
  GetMarketFragmenterAddressRequest,
  ListFeeFragmenterAddressesRequest,
  GetFeeFragmenterBalanceRequest,
  FeeFragmenterSplitFundsRequest,
  WithdrawFeeFragmenterRequest,
  WithdrawMarketFragmenterRequest,
  MarketFragmenterSplitFundsRequest,
  GetMarketFragmenterBalanceRequest,
  ListMarketFragmenterAddressesRequest,
  ListTradesRequest,
  GetMarketInfoRequest,
  GetMarketReportRequest,
  TimeRange,
  CustomPeriod,
} from '../../api-spec/generated/js/operator_pb';
import { Market, Fixed, Price, Balance } from '../../api-spec/generated/js/types_pb';
import type { AddressWithBlindingKey } from '../../api-spec/generated/js/types_pb';
import type { BalanceInfo } from '../../api-spec/generated/js/wallet_pb';
import type { RootState } from '../../app/store';
import type { Optional } from '../../domain/helpers';
import { selectMacaroonCreds, selectOperatorClient } from '../settings/settingsSlice';

export const operatorApi = createApi({
  reducerPath: 'operatorService',
  baseQuery: fakeBaseQuery<string>(),
  tagTypes: ['Market', 'MarketUTXOs', 'Fee', 'FeeUTXOs', 'Trade', 'Webhook'],
  endpoints: (build) => ({
    // Fee
    getFeeAddress: build.query<AddressWithBlindingKey.AsObject[], void>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const feeAddressReply: GetFeeAddressReply = await client.getFeeAddress(
            new GetFeeAddressRequest(),
            metadata
          );
          return {
            data: feeAddressReply.getAddressWithBlindingKeyList().map((addr) => addr.toObject(false)),
          };
        } catch (error) {
          console.error('getFeeAddress', error);
          return { error: (error as RpcError).message };
        }
      },
    }),
    listFeeAddresses: build.query<AddressWithBlindingKey.AsObject[], void>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const listFeeAddressesReply = await client.listFeeAddresses(
            new ListFeeAddressesRequest(),
            metadata
          );
          return {
            data: listFeeAddressesReply
              .getAddressWithBlindingKeyList()
              .map((addr: AddressWithBlindingKey) => addr.toObject(false)),
          };
        } catch (error) {
          console.error('listFeeAddresses', error);
          return { error: (error as RpcError).message };
        }
      },
    }),
    getFeeBalance: build.query<GetFeeBalanceReply.AsObject, void>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const feeBalanceReply = await client.getFeeBalance(new GetFeeBalanceRequest(), metadata);
          return {
            data: feeBalanceReply.toObject(false),
          };
        } catch (error) {
          console.error('getFeeBalance', error);
          return { error: (error as RpcError).message };
        }
      },
      providesTags: ['FeeUTXOs'],
    }),
    claimFeeDeposits: build.mutation<ClaimFeeDepositsReply, { outpointsList: TxOutpoint.AsObject[] }>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { outpointsList } = arg;
          const arr = outpointsList.map(({ hash, index }) => {
            const txOutpoint = new TxOutpoint();
            txOutpoint.setHash(hash);
            txOutpoint.setIndex(index);
            return txOutpoint;
          });

          return {
            data: await client.claimFeeDeposits(
              new ClaimFeeDepositsRequest().setOutpointsList(arr),
              metadata
            ),
          };
        } catch (error) {
          console.error('claimFeeDeposits', error);
          return { error: (error as RpcError).message };
        }
      },
      invalidatesTags: ['FeeUTXOs'],
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
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { amount, millisatsPerByte, address, asset } = arg;
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
          console.error('withdrawFee', error);
          return { error: (error as RpcError).message };
        }
      },
      invalidatesTags: ['FeeUTXOs'],
    }),
    getFeeFragmenterAddress: build.query<AddressWithBlindingKey.AsObject[], { numOfAddresses: number }>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { numOfAddresses } = arg;
          return {
            data: (
              await client.getFeeFragmenterAddress(
                new GetFeeFragmenterAddressRequest().setNumOfAddresses(numOfAddresses),
                metadata
              )
            )
              .getAddressWithBlindingKeyList()
              .map((addr: AddressWithBlindingKey) => addr.toObject(false)),
          };
        } catch (error) {
          console.error('getFeeFragmenterAddress', error);
          return { error: (error as RpcError).message };
        }
      },
    }),
    listFeeFragmenterAddresses: build.query<AddressWithBlindingKey.AsObject[], void>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          return {
            data: (await client.listFeeFragmenterAddresses(new ListFeeFragmenterAddressesRequest(), metadata))
              .getAddressWithBlindingKeyList()
              .map((addr: AddressWithBlindingKey) => addr.toObject(false)),
          };
        } catch (error) {
          console.error('listFeeFragmenterAddresses', error);
          return { error: (error as RpcError).message };
        }
      },
    }),
    getFeeFragmenterBalance: build.query<Map<string, BalanceInfo>, void>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          return {
            data: (
              await client.getFeeFragmenterBalance(new GetFeeFragmenterBalanceRequest(), metadata)
            ).getBalanceMap(),
          };
        } catch (error) {
          console.error('getFeeFragmenterBalance', error);
          return { error: (error as RpcError).message };
        }
      },
    }),
    feeFragmenterSplitFunds: build.mutation<
      ClientReadableStream<FragmenterSplitFundsReply>,
      { maxFragments: number; millisatsPerByte: number }
    >({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { maxFragments, millisatsPerByte } = arg;
          return {
            data: await client.feeFragmenterSplitFunds(
              new FeeFragmenterSplitFundsRequest()
                .setMaxFragments(maxFragments)
                .setMillisatsPerByte(millisatsPerByte),
              metadata as Metadata | undefined
            ),
          };
        } catch (error) {
          console.error('feeFragmenterSplitFunds', error);
          return { error: (error as RpcError).message };
        }
      },
      invalidatesTags: ['FeeUTXOs'],
    }),
    withdrawFeeFragmenter: build.mutation<
      WithdrawFeeFragmenterReply,
      { address: string; millisatsPerByte: number }
    >({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { address, millisatsPerByte } = arg;
          return {
            data: await client.withdrawFeeFragmenter(
              new WithdrawFeeFragmenterRequest().setAddress(address).setMillisatsPerByte(millisatsPerByte),
              metadata
            ),
          };
        } catch (error) {
          console.error('withdrawFeeFragmenter', error);
          return { error: (error as RpcError).message };
        }
      },
    }),
    // Market
    getMarketReport: build.query<
      MarketReport.AsObject | undefined,
      { market: Market.AsObject | undefined; timeRange: TimeRange.AsObject; timeFrame: TimeFrame }
    >({
      queryFn: async ({ market, timeRange, timeFrame }, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          if (!market || !timeRange) throw new Error('missing argument');
          const t = new TimeRange();
          t.setPredefinedPeriod(timeRange.predefinedPeriod);
          if (timeRange.customPeriod) {
            const c = new CustomPeriod();
            c.setStartDate(timeRange.customPeriod.startDate);
            c.setEndDate(timeRange.customPeriod.endDate);
            t.setCustomPeriod(c);
          }
          const newMarket = new Market();
          newMarket.setBaseAsset(market.baseAsset);
          newMarket.setQuoteAsset(market.quoteAsset);
          const getMarketReportReply = await client.getMarketReport(
            new GetMarketReportRequest().setMarket(newMarket).setTimeRange(t).setTimeFrame(timeFrame),
            metadata
          );
          return {
            data: getMarketReportReply.toObject(false).report,
          };
        } catch (error) {
          console.error('getMarketReport', error);
          return { error: (error as RpcError).message };
        }
      },
    }),
    getMarketInfo: build.query<MarketInfo.AsObject | undefined, Market.AsObject>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { baseAsset, quoteAsset } = arg;
          if (!baseAsset || !quoteAsset) throw new Error('missing argument');
          const newMarket = new Market();
          newMarket.setBaseAsset(baseAsset);
          newMarket.setQuoteAsset(quoteAsset);
          const getMarketInfoReply = await client.getMarketInfo(
            new GetMarketInfoRequest().setMarket(newMarket),
            metadata
          );
          return {
            data: getMarketInfoReply.toObject(false).info,
          };
        } catch (error) {
          console.error('getMarketInfo', error);
          return { error: (error as RpcError).message };
        }
      },
      providesTags: ['Market', 'MarketUTXOs'],
    }),
    getMarketAddress: build.query<AddressWithBlindingKey.AsObject[], Market.AsObject>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { baseAsset, quoteAsset } = arg;
          if (!baseAsset || !quoteAsset) throw new Error('missing argument');
          const newMarket = new Market();
          newMarket.setBaseAsset(baseAsset);
          newMarket.setQuoteAsset(quoteAsset);
          const getMarketAddressReply = await client.getMarketAddress(
            new GetMarketAddressRequest().setMarket(newMarket),
            metadata
          );
          return {
            data: getMarketAddressReply
              .getAddressWithBlindingKeyList()
              .map((addr: AddressWithBlindingKey) => addr.toObject(false)),
          };
        } catch (error) {
          console.error('getMarketAddress', error);
          return { error: (error as RpcError).message };
        }
      },
    }),
    listMarketAddresses: build.query<AddressWithBlindingKey.AsObject[], Market.AsObject>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { baseAsset, quoteAsset } = arg;
          const newMarket = new Market();
          newMarket.setBaseAsset(baseAsset);
          newMarket.setQuoteAsset(quoteAsset);
          const listMarketAddressesReply = await client.listMarketAddresses(
            new ListMarketAddressesRequest().setMarket(newMarket),
            metadata
          );
          return {
            data: listMarketAddressesReply
              .getAddressWithBlindingKeyList()
              .map((addr: AddressWithBlindingKey) => addr.toObject(false)),
          };
        } catch (error) {
          console.error('listMarketAddresses', error);
          return { error: (error as RpcError).message };
        }
      },
      providesTags: ['Market'],
    }),
    getMarketBalance: build.query<GetMarketBalanceReply.AsObject, Market.AsObject>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { baseAsset, quoteAsset } = arg;
          const newMarket = new Market();
          newMarket.setBaseAsset(baseAsset);
          newMarket.setQuoteAsset(quoteAsset);
          const getMarketBalanceReply = await client.getMarketBalance(
            new GetMarketBalanceRequest().setMarket(newMarket),
            metadata
          );
          return {
            data: getMarketBalanceReply.toObject(false),
          };
        } catch (error) {
          console.error('getMarketBalance', error);
          return { error: (error as RpcError).message };
        }
      },
      providesTags: ['MarketUTXOs'],
    }),
    claimMarketDeposits: build.mutation<
      ClaimMarketDepositsReply.AsObject,
      { market: Market.AsObject; outpointsList: TxOutpoint.AsObject[] }
    >({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { outpointsList, market } = arg;
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
            data: claimMarketDepositsReply.toObject(false),
          };
        } catch (error) {
          console.error('claimMarketDeposits', error);
          return { error: (error as RpcError).message };
        }
      },
      invalidatesTags: ['MarketUTXOs'],
    }),
    newMarket: build.mutation<NewMarketReply.AsObject, Market.AsObject>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { baseAsset, quoteAsset } = arg;
          const market = new Market();
          market.setBaseAsset(baseAsset);
          market.setQuoteAsset(quoteAsset);
          const newMarketReply = await client.newMarket(new NewMarketRequest().setMarket(market), metadata);
          return {
            data: newMarketReply.toObject(false),
          };
        } catch (error) {
          console.error('newMarket', error);
          console.debug('base asset:', arg.baseAsset);
          console.debug('quote asset:', arg.quoteAsset);
          return { error: (error as RpcError).message };
        }
      },
      invalidatesTags: ['Market'],
    }),
    openMarket: build.mutation<OpenMarketReply.AsObject, Market.AsObject>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { baseAsset, quoteAsset } = arg;
          const market = new Market();
          market.setBaseAsset(baseAsset);
          market.setQuoteAsset(quoteAsset);
          const openMarketReply = await client.openMarket(
            new OpenMarketRequest().setMarket(market),
            metadata
          );
          return {
            data: openMarketReply.toObject(false),
          };
        } catch (error) {
          console.error('openMarket', error);
          return { error: (error as RpcError).message };
        }
      },
      invalidatesTags: ['Market'],
    }),
    closeMarket: build.mutation<CloseMarketReply.AsObject, Market.AsObject>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { baseAsset, quoteAsset } = arg;
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
          console.error('closeMarket', error);
          return { error: (error as RpcError).message };
        }
      },
      invalidatesTags: ['Market'],
    }),
    dropMarket: build.mutation<DropMarketReply.AsObject, Market.AsObject>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { baseAsset, quoteAsset } = arg;
          const market = new Market();
          market.setBaseAsset(baseAsset);
          market.setQuoteAsset(quoteAsset);
          const dropMarketReply = await client.dropMarket(
            new DropMarketRequest().setMarket(market),
            metadata
          );
          return {
            data: dropMarketReply.toObject(false),
          };
        } catch (error) {
          console.error('dropMarket', error);
          return { error: (error as RpcError).message };
        }
      },
      invalidatesTags: ['Market'],
    }),
    withdrawMarket: build.mutation<
      WithdrawMarketReply.AsObject,
      {
        market: Market.AsObject;
        balance: Balance.AsObject;
        address: string;
        millisatsPerByte: number;
      }
    >({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { market, balance, address, millisatsPerByte } = arg;
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
              .setMillisatsPerByte(millisatsPerByte),
            metadata
          );
          return {
            data: withdrawMarketReply.toObject(false),
          };
        } catch (error) {
          console.error('withdrawMarket', error);
          return { error: (error as RpcError).message };
        }
      },
      invalidatesTags: ['MarketUTXOs'],
    }),
    updateMarketPercentageFee: build.mutation<
      UpdateMarketFeeReply.AsObject,
      { market: Market.AsObject; basisPoint: number }
    >({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { market, basisPoint } = arg;
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
          console.error('updateMarketPercentageFee', error);
          return { error: (error as RpcError).message };
        }
      },
      invalidatesTags: ['Market'],
    }),
    updateMarketFixedFee: build.mutation<
      UpdateMarketFeeReply.AsObject,
      { market: Market.AsObject; fixedFee: Fixed.AsObject }
    >({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { market, fixedFee } = arg;
          const { baseAsset, quoteAsset } = market;
          const newMarket = new Market();
          newMarket.setBaseAsset(baseAsset);
          newMarket.setQuoteAsset(quoteAsset);
          const { baseFee, quoteFee } = fixedFee;
          const newFixed = new Fixed();
          newFixed.setBaseFee(baseFee);
          newFixed.setQuoteFee(quoteFee);
          const updateMarketFeeReply = await client.updateMarketFixedFee(
            new UpdateMarketFixedFeeRequest().setMarket(newMarket).setFixed(newFixed),
            metadata
          );
          return {
            data: updateMarketFeeReply.toObject(false),
          };
        } catch (error) {
          console.error('updateMarketFixedFee', error);
          return { error: (error as RpcError).message };
        }
      },
      invalidatesTags: ['Market'],
    }),
    updateMarketPrice: build.mutation<
      UpdateMarketPriceReply.AsObject,
      {
        market: Market.AsObject;
        // TODO: remove when basePriceDeprecated and quotePriceDeprecated removed from the interface
        price: Optional<Price.AsObject, 'basePriceDeprecated' | 'quotePriceDeprecated'>;
      }
    >({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { market, price } = arg;
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
          console.error('updateMarketPrice', error);
          return { error: (error as RpcError).message };
        }
      },
      invalidatesTags: ['Market'],
    }),
    updateMarketStrategy: build.mutation<
      UpdateMarketStrategyReply.AsObject,
      { market: Market.AsObject; strategyType: StrategyType; meta?: string }
    >({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { market, strategyType, meta } = arg;
          const { baseAsset, quoteAsset } = market;
          const newMarket = new Market();
          newMarket.setBaseAsset(baseAsset);
          newMarket.setQuoteAsset(quoteAsset);
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
          console.error('updateMarketStrategy', error);
          return { error: (error as RpcError).message };
        }
      },
      invalidatesTags: ['Market'],
    }),
    listMarkets: build.query<ListMarketsReply.AsObject, void>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const listMarketsReply = await client.listMarkets(new ListMarketsRequest(), metadata);
          return {
            data: listMarketsReply.toObject(false),
          };
        } catch (error) {
          console.error('listMarkets', error);
          return { error: (error as RpcError).message };
        }
      },
      providesTags: ['Market'],
    }),
    getMarketFragmenterAddress: build.query<AddressWithBlindingKey.AsObject[], { numOfAddresses: number }>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { numOfAddresses } = arg;
          return {
            data: (
              await client.getMarketFragmenterAddress(
                new GetMarketFragmenterAddressRequest().setNumOfAddresses(numOfAddresses),
                metadata
              )
            )
              .getAddressWithBlindingKeyList()
              .map((addr: AddressWithBlindingKey) => addr.toObject(false)),
          };
        } catch (error) {
          console.error('getMarketFragmenterAddress', error);
          return { error: (error as RpcError).message };
        }
      },
    }),
    listMarketFragmenterAddresses: build.query<AddressWithBlindingKey.AsObject[], void>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          return {
            data: (
              await client.listMarketFragmenterAddresses(new ListMarketFragmenterAddressesRequest(), metadata)
            )
              .getAddressWithBlindingKeyList()
              .map((addr: AddressWithBlindingKey) => addr.toObject(false)),
          };
        } catch (error) {
          console.error('listMarketFragmenterAddresses', error);
          return { error: (error as RpcError).message };
        }
      },
    }),
    getMarketFragmenterBalance: build.query<GetMarketFragmenterBalanceReply.AsObject, void>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          return {
            data: (
              await client.getMarketFragmenterBalance(new GetMarketFragmenterBalanceRequest(), metadata)
            ).toObject(false),
          };
        } catch (error) {
          console.error('getMarketFragmenterBalance', error);
          return { error: (error as RpcError).message };
        }
      },
    }),
    marketFragmenterSplitFunds: build.mutation<
      ClientReadableStream<FragmenterSplitFundsReply>,
      { market: Market.AsObject; millisatsPerByte: number }
    >({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { market, millisatsPerByte } = arg;
          const { baseAsset, quoteAsset } = market;
          const newMarket = new Market();
          newMarket.setBaseAsset(baseAsset);
          newMarket.setQuoteAsset(quoteAsset);
          return {
            data: await client.marketFragmenterSplitFunds(
              new MarketFragmenterSplitFundsRequest()
                .setMarket(newMarket)
                .setMillisatsPerByte(millisatsPerByte),
              metadata as Metadata | undefined
            ),
          };
        } catch (error) {
          console.error('marketFragmenterSplitFunds', error);
          return { error: (error as RpcError).message };
        }
      },
      invalidatesTags: ['MarketUTXOs'],
    }),
    withdrawMarketFragmenter: build.mutation<
      WithdrawMarketFragmenterReply,
      { address: string; millisatsPerByte: number }
    >({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { address, millisatsPerByte } = arg;
          return {
            data: await client.withdrawMarketFragmenter(
              new WithdrawMarketFragmenterRequest().setAddress(address).setMillisatsPerByte(millisatsPerByte),
              metadata
            ),
          };
        } catch (error) {
          console.error('withdrawMarketFragmenter', error);
          return { error: (error as RpcError).message };
        }
      },
      invalidatesTags: ['MarketUTXOs'],
    }),
    // Trades
    listTrades: build.query<TradeInfo.AsObject[], { market: Market.AsObject; page: Page.AsObject }>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { market, page } = arg;
          const { pageNumber, pageSize } = page;
          const newPage = new Page();
          newPage.setPageNumber(pageNumber);
          newPage.setPageSize(pageSize);
          const { baseAsset, quoteAsset } = market;
          const newMarket = new Market();
          newMarket.setBaseAsset(baseAsset);
          newMarket.setQuoteAsset(quoteAsset);
          const listTradesReply = await client.listTrades(
            new ListTradesRequest().setMarket(newMarket).setPage(newPage),
            metadata
          );
          return {
            data: listTradesReply.getTradesList().map((tradeInfo: TradeInfo) => tradeInfo.toObject(false)),
          };
        } catch (error) {
          console.error('listTrades', error);
          return { error: (error as RpcError).message };
        }
      },
      providesTags: ['Trade'],
    }),
    getMarketCollectedSwapFees: build.query<GetMarketCollectedSwapFeesReply.AsObject, Market.AsObject>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { baseAsset, quoteAsset } = arg;
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
          console.error('getMarketCollectedSwapFees', error);
          return { error: (error as RpcError).message };
        }
      },
      providesTags: ['Trade'],
    }),
    totalCollectedSwapFees: build.query<number, Market.AsObject[] | undefined>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          if (!arg) return { data: 0 };
          let totalCollectedSwapFees = 0;
          const markets = arg.map(({ baseAsset, quoteAsset }) => {
            const newMarket = new Market();
            newMarket.setBaseAsset(baseAsset);
            newMarket.setQuoteAsset(quoteAsset);
            return newMarket;
          });
          const results = await Promise.all(
            markets.map((market) =>
              client
                .getMarketCollectedSwapFees(
                  new GetMarketCollectedSwapFeesRequest().setMarket(market),
                  metadata
                )
                .then((res) => ({
                  market: [market.getBaseAsset(), market.getQuoteAsset()],
                  getMarketCollectedSwapFeesReply: res,
                }))
            )
          );
          for (const r of results) {
            // eslint-disable-next-line
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
        } catch (error) {
          console.error('totalCollectedSwapFees', error);
          return { error: (error as RpcError).message };
        }
      },
      providesTags: ['Trade'],
    }),
    // Utxos
    reloadUtxos: build.mutation<ReloadUtxosReply, void>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          return {
            data: await client.reloadUtxos(new ReloadUtxosRequest(), metadata),
          };
        } catch (error) {
          console.error('reloadUtxos', error);
          return { error: (error as RpcError).message };
        }
      },
      invalidatesTags: ['MarketUTXOs', 'FeeUTXOs'],
    }),
    listUtxos: build.query<ListUtxosReply.AsObject, { accountIndex: number; page?: Page }>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { page, accountIndex } = arg;
          const listUtxosReply = await client.listUtxos(
            new ListUtxosRequest().setAccountIndex(accountIndex).setPage(page),
            metadata
          );
          return {
            data: listUtxosReply.toObject(false),
          };
        } catch (error) {
          console.error('listUtxos', error);
          return { error: (error as RpcError).message };
        }
      },
      providesTags: ['MarketUTXOs', 'FeeUTXOs'],
    }),
    // Webhook
    addWebhook: build.mutation<
      AddWebhookReply.AsObject,
      { action: ActionType; endpoint: string; secret: string }
    >({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { action, endpoint, secret } = arg;
          const addWebhookReply = await client.addWebhook(
            new AddWebhookRequest().setAction(action).setEndpoint(endpoint).setSecret(secret),
            metadata
          );
          return {
            data: addWebhookReply.toObject(false),
          };
        } catch (error) {
          console.error('addWebhook', error);
          return { error: (error as RpcError).message };
        }
      },
    }),
    removeWebhook: build.mutation<RemoveWebhookReply, { id: string }>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { id } = arg;
          const removeWebhookReply = await client.removeWebhook(
            new RemoveWebhookRequest().setId(id),
            metadata
          );
          return {
            data: removeWebhookReply,
          };
        } catch (error) {
          console.error('removeWebhook', error);
          return { error: (error as RpcError).message };
        }
      },
    }),
    listWebhooks: build.query<WebhookInfo.AsObject[], { action: ActionType }>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          //const { action } = arg;
          const listWebhooksReply = await client.listWebhooks(new ListWebhooksRequest(), metadata);
          return {
            data: listWebhooksReply
              .getWebhookInfoList()
              .map((webhookInfo: WebhookInfo) => webhookInfo.toObject(false)),
          };
        } catch (error) {
          console.error('listWebhooks', error);
          return { error: (error as RpcError).message };
        }
      },
      providesTags: ['Webhook'],
    }),
    //
    getInfo: build.query<GetInfoReply.AsObject, void>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const info = await client.getInfo(new GetInfoRequest(), metadata);
          return { data: info.toObject(false) };
        } catch (error) {
          console.error('getInfo', error);
          return { error: (error as RpcError).message };
        }
      },
      providesTags: ['Market', 'Fee', 'Trade'],
    }),
    listDeposits: build.query<Deposit.AsObject[], { accountIndex: number }>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { accountIndex } = arg;
          const listDepositsReply = await client.listDeposits(
            new ListDepositsRequest().setAccountIndex(accountIndex),
            metadata
          );
          return {
            data: listDepositsReply.getDepositsList().map((deposit) => deposit.toObject(false)),
          };
        } catch (error) {
          console.error('listDeposits', error);
          return { error: (error as RpcError).message };
        }
      },
      providesTags: ['MarketUTXOs', 'FeeUTXOs'],
    }),
    listWithdrawals: build.query<Withdrawal.AsObject[], { accountIndex: number; page: Page.AsObject }>({
      queryFn: async (arg, { getState }) => {
        try {
          const state = getState() as RootState;
          const client = selectOperatorClient(state);
          const metadata = selectMacaroonCreds(state);
          const { accountIndex, page } = arg;
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
          console.error('listWithdrawals', error);
          return { error: (error as RpcError).message };
        }
      },
      providesTags: ['Market', 'Fee'],
    }),
  }),
});

export const {
  // Fee
  useGetFeeAddressQuery,
  useListFeeAddressesQuery,
  useGetFeeBalanceQuery,
  useClaimFeeDepositsMutation,
  useWithdrawFeeMutation,
  useGetFeeFragmenterAddressQuery,
  useListFeeFragmenterAddressesQuery,
  useGetFeeFragmenterBalanceQuery,
  useFeeFragmenterSplitFundsMutation,
  useWithdrawFeeFragmenterMutation,
  // Market
  useGetMarketReportQuery,
  useGetMarketInfoQuery,
  useWithdrawMarketMutation,
  useUpdateMarketPercentageFeeMutation,
  useUpdateMarketFixedFeeMutation,
  useUpdateMarketPriceMutation,
  useUpdateMarketStrategyMutation,
  useListMarketsQuery,
  useClaimMarketDepositsMutation,
  useCloseMarketMutation,
  useGetMarketAddressQuery,
  useListMarketAddressesQuery,
  useGetMarketBalanceQuery,
  useNewMarketMutation,
  useOpenMarketMutation,
  useDropMarketMutation,
  useGetMarketFragmenterAddressQuery,
  useListMarketFragmenterAddressesQuery,
  useGetMarketFragmenterBalanceQuery,
  useMarketFragmenterSplitFundsMutation,
  useWithdrawMarketFragmenterMutation,
  // Trades
  useGetMarketCollectedSwapFeesQuery,
  useTotalCollectedSwapFeesQuery,
  useListTradesQuery,
  // Utxos
  useReloadUtxosMutation,
  useListUtxosQuery,
  // Webhook
  useAddWebhookMutation,
  useRemoveWebhookMutation,
  useListWebhooksQuery,
  //
  useGetInfoQuery,
  useListDepositsQuery,
  useListWithdrawalsQuery,
} = operatorApi;
