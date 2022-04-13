import type { ClientReadableStream, Metadata } from 'grpc-web';

import type {
  ActionType,
  AddWebhookReply,
  ClaimFeeDepositsReply,
  ClaimMarketDepositsReply,
  CloseMarketReply,
  Deposit,
  DropMarketReply,
  FragmenterSplitFundsReply,
  GetFeeAddressReply,
  GetFeeBalanceReply,
  GetInfoReply,
  GetMarketBalanceReply,
  GetMarketCollectedSwapFeesReply,
  GetMarketFragmenterBalanceReply,
  ListMarketsReply,
  ListUtxosReply,
  MarketInfo,
  MarketReport,
  NewMarketReply,
  OpenMarketReply,
  ReloadUtxosReply,
  RemoveWebhookReply,
  StrategyType,
  TimeFrame,
  TradeInfo,
  UpdateMarketFeeReply,
  UpdateMarketPriceReply,
  UpdateMarketStrategyReply,
  WebhookInfo,
  Withdrawal,
  WithdrawFeeFragmenterReply,
  WithdrawFeeReply,
  WithdrawMarketFragmenterReply,
  WithdrawMarketReply,
} from '../../api-spec/protobuf/gen/js/tdex-daemon/v1/operator_pb';
import {
  AddWebhookRequest,
  ClaimFeeDepositsRequest,
  ClaimMarketDepositsRequest,
  CloseMarketRequest,
  CustomPeriod,
  DropMarketRequest,
  FeeFragmenterSplitFundsRequest,
  GetFeeAddressRequest,
  GetFeeBalanceRequest,
  GetFeeFragmenterAddressRequest,
  GetFeeFragmenterBalanceRequest,
  GetInfoRequest,
  GetMarketAddressRequest,
  GetMarketBalanceRequest,
  GetMarketCollectedSwapFeesRequest,
  GetMarketFragmenterAddressRequest,
  GetMarketFragmenterBalanceRequest,
  GetMarketInfoRequest,
  GetMarketReportRequest,
  ListDepositsRequest,
  ListFeeAddressesRequest,
  ListFeeFragmenterAddressesRequest,
  ListMarketAddressesRequest,
  ListMarketFragmenterAddressesRequest,
  ListMarketsRequest,
  ListTradesRequest,
  ListUtxosRequest,
  ListWebhooksRequest,
  ListWithdrawalsRequest,
  MarketFragmenterSplitFundsRequest,
  NewMarketRequest,
  OpenMarketRequest,
  Page,
  ReloadUtxosRequest,
  RemoveWebhookRequest,
  TimeRange,
  TxOutpoint,
  UpdateMarketFixedFeeRequest,
  UpdateMarketPercentageFeeRequest,
  UpdateMarketPriceRequest,
  UpdateMarketStrategyRequest,
  WithdrawFeeFragmenterRequest,
  WithdrawFeeRequest,
  WithdrawMarketFragmenterRequest,
  WithdrawMarketRequest,
} from '../../api-spec/protobuf/gen/js/tdex-daemon/v1/operator_pb';
import type { BalanceInfo } from '../../api-spec/protobuf/gen/js/tdex-daemon/v1/wallet_pb';
import type { AddressWithBlindingKey } from '../../api-spec/protobuf/gen/js/tdex/v1/types_pb';
import { Balance, Fixed, Market, Price } from '../../api-spec/protobuf/gen/js/tdex/v1/types_pb';
import type { RootState } from '../../app/store';
import type { Optional } from '../../domain/helpers';
import {
  retryRtkRequest,
  getAssetDataFromRegistry,
  fromSatsToUnitOrFractional,
  isLbtcTicker,
  BTC_CURRENCY,
} from '../../utils';
import { convertAmountToFavoriteCurrency } from '../rates.api';
import type { CoinGeckoPriceResult } from '../rates.api';
import { selectMacaroonCreds, selectOperatorClient } from '../settings/settingsSlice';
import { tdexApi } from '../tdex.api';

export const operatorApi = tdexApi.injectEndpoints({
  endpoints: (build) => ({
    // Fee
    getFeeAddress: build.query<AddressWithBlindingKey.AsObject[], void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const feeAddressReply: GetFeeAddressReply = await client.getFeeAddress(
            new GetFeeAddressRequest(),
            metadata
          );
          return {
            data: feeAddressReply.getAddressWithBlindingKeyList().map((addr) => addr.toObject(false)),
          };
        });
      },
    }),
    listFeeAddresses: build.query<AddressWithBlindingKey.AsObject[], void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const listFeeAddressesReply = await client.listFeeAddresses(
            new ListFeeAddressesRequest(),
            metadata
          );
          return {
            data: listFeeAddressesReply
              .getAddressWithBlindingKeyList()
              .map((addr: AddressWithBlindingKey) => addr.toObject(false)),
          };
        });
      },
    }),
    getFeeBalance: build.query<GetFeeBalanceReply.AsObject, void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const feeBalanceReply = await client.getFeeBalance(new GetFeeBalanceRequest(), metadata);
          return {
            data: feeBalanceReply.toObject(false),
          };
        });
      },
      providesTags: ['FeeUTXOs'],
    }),
    claimFeeDeposits: build.mutation<ClaimFeeDepositsReply, { outpointsList: TxOutpoint.AsObject[] }>({
      queryFn: async ({ outpointsList }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
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
        });
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
      queryFn: async ({ amount, millisatsPerByte, address, asset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
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
        });
      },
      invalidatesTags: ['FeeUTXOs'],
    }),
    getFeeFragmenterAddress: build.query<AddressWithBlindingKey.AsObject[], { numOfAddresses: number }>({
      queryFn: async ({ numOfAddresses }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
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
        });
      },
    }),
    listFeeFragmenterAddresses: build.query<AddressWithBlindingKey.AsObject[], void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          return {
            data: (await client.listFeeFragmenterAddresses(new ListFeeFragmenterAddressesRequest(), metadata))
              .getAddressWithBlindingKeyList()
              .map((addr: AddressWithBlindingKey) => addr.toObject(false)),
          };
        });
      },
    }),
    getFeeFragmenterBalance: build.query<Map<string, BalanceInfo>, void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          return {
            data: (
              await client.getFeeFragmenterBalance(new GetFeeFragmenterBalanceRequest(), metadata)
            ).getBalanceMap(),
          };
        });
      },
    }),
    feeFragmenterSplitFunds: build.mutation<
      ClientReadableStream<FragmenterSplitFundsReply>,
      { maxFragments: number; millisatsPerByte: number }
    >({
      queryFn: async ({ maxFragments, millisatsPerByte }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          return {
            data: await client.feeFragmenterSplitFunds(
              new FeeFragmenterSplitFundsRequest()
                .setMaxFragments(maxFragments)
                .setMillisatsPerByte(millisatsPerByte),
              metadata as Metadata | undefined
            ),
          };
        });
      },
      invalidatesTags: ['FeeUTXOs'],
    }),
    withdrawFeeFragmenter: build.mutation<
      WithdrawFeeFragmenterReply,
      { address: string; millisatsPerByte: number }
    >({
      queryFn: async ({ address, millisatsPerByte }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          return {
            data: await client.withdrawFeeFragmenter(
              new WithdrawFeeFragmenterRequest().setAddress(address).setMillisatsPerByte(millisatsPerByte),
              metadata
            ),
          };
        });
      },
    }),
    // Market
    getMarketReport: build.query<
      MarketReport.AsObject | undefined,
      { market: Market.AsObject | undefined; timeRange: TimeRange.AsObject; timeFrame: TimeFrame }
    >({
      queryFn: async ({ market, timeRange, timeFrame }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
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
        });
      },
    }),
    getMarketInfo: build.query<MarketInfo.AsObject | undefined, Market.AsObject>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
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
        });
      },
      providesTags: ['Market', 'MarketUTXOs'],
    }),
    getMarketAddress: build.query<AddressWithBlindingKey.AsObject[], Market.AsObject>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
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
        });
      },
    }),
    listMarketAddresses: build.query<AddressWithBlindingKey.AsObject[], Market.AsObject>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
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
        });
      },
      providesTags: ['Market'],
    }),
    getMarketBalance: build.query<GetMarketBalanceReply.AsObject, Market.AsObject>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
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
        });
      },
      providesTags: ['MarketUTXOs'],
    }),
    claimMarketDeposits: build.mutation<
      ClaimMarketDepositsReply.AsObject,
      { market: Market.AsObject; outpointsList: TxOutpoint.AsObject[] }
    >({
      queryFn: async ({ outpointsList, market }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const { baseAsset, quoteAsset } = market;
          const newMarket = new Market();
          newMarket.setBaseAsset(baseAsset);
          newMarket.setQuoteAsset(quoteAsset);
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
        });
      },
      invalidatesTags: ['MarketUTXOs'],
    }),
    newMarket: build.mutation<NewMarketReply.AsObject, Market.AsObject>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const market = new Market();
          market.setBaseAsset(baseAsset);
          market.setQuoteAsset(quoteAsset);
          const newMarketReply = await client.newMarket(new NewMarketRequest().setMarket(market), metadata);
          return {
            data: newMarketReply.toObject(false),
          };
        });
      },
      invalidatesTags: ['Market'],
    }),
    openMarket: build.mutation<OpenMarketReply.AsObject, Market.AsObject>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
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
        });
      },
      invalidatesTags: ['Market'],
    }),
    closeMarket: build.mutation<CloseMarketReply.AsObject, Market.AsObject>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
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
        });
      },
      invalidatesTags: ['Market'],
    }),
    dropMarket: build.mutation<DropMarketReply.AsObject, Market.AsObject>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
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
        });
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
      queryFn: async ({ market, balance, address, millisatsPerByte }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
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
        });
      },
      invalidatesTags: ['MarketUTXOs'],
    }),
    updateMarketPercentageFee: build.mutation<
      UpdateMarketFeeReply.AsObject,
      { market: Market.AsObject; basisPoint: number }
    >({
      queryFn: async ({ market, basisPoint }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
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
        });
      },
      invalidatesTags: ['Market'],
    }),
    updateMarketFixedFee: build.mutation<
      UpdateMarketFeeReply.AsObject,
      { market: Market.AsObject; fixedFee: Fixed.AsObject }
    >({
      queryFn: async ({ market, fixedFee }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
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
        });
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
      queryFn: async ({ market, price }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
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
        });
      },
      invalidatesTags: ['Market'],
    }),
    updateMarketStrategy: build.mutation<
      UpdateMarketStrategyReply.AsObject,
      { market: Market.AsObject; strategyType: StrategyType; meta?: string }
    >({
      queryFn: async ({ market, strategyType, meta }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
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
        });
      },
      invalidatesTags: ['Market'],
    }),
    listMarkets: build.query<ListMarketsReply.AsObject, void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const listMarketsReply = await client.listMarkets(new ListMarketsRequest(), metadata);
          return {
            data: listMarketsReply.toObject(false),
          };
        });
      },
      providesTags: ['Market'],
    }),
    getMarketFragmenterAddress: build.query<AddressWithBlindingKey.AsObject[], { numOfAddresses: number }>({
      queryFn: async ({ numOfAddresses }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
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
        });
      },
    }),
    listMarketFragmenterAddresses: build.query<AddressWithBlindingKey.AsObject[], void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          return {
            data: (
              await client.listMarketFragmenterAddresses(new ListMarketFragmenterAddressesRequest(), metadata)
            )
              .getAddressWithBlindingKeyList()
              .map((addr: AddressWithBlindingKey) => addr.toObject(false)),
          };
        });
      },
    }),
    getMarketFragmenterBalance: build.query<GetMarketFragmenterBalanceReply.AsObject, void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          return {
            data: (
              await client.getMarketFragmenterBalance(new GetMarketFragmenterBalanceRequest(), metadata)
            ).toObject(false),
          };
        });
      },
    }),
    marketFragmenterSplitFunds: build.mutation<
      ClientReadableStream<FragmenterSplitFundsReply>,
      { market: Market.AsObject; millisatsPerByte: number }
    >({
      queryFn: async ({ market, millisatsPerByte }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
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
        });
      },
      invalidatesTags: ['MarketUTXOs'],
    }),
    withdrawMarketFragmenter: build.mutation<
      WithdrawMarketFragmenterReply,
      { address: string; millisatsPerByte: number }
    >({
      queryFn: async ({ address, millisatsPerByte }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          return {
            data: await client.withdrawMarketFragmenter(
              new WithdrawMarketFragmenterRequest().setAddress(address).setMillisatsPerByte(millisatsPerByte),
              metadata
            ),
          };
        });
      },
      invalidatesTags: ['MarketUTXOs'],
    }),
    // Trades
    listTrades: build.query<TradeInfo.AsObject[], { market: Market.AsObject; page: Page.AsObject }>({
      queryFn: async ({ market, page }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
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
        });
      },
      providesTags: ['Trade'],
    }),
    getMarketCollectedSwapFees: build.query<GetMarketCollectedSwapFeesReply.AsObject, Market.AsObject>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
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
        });
      },
      providesTags: ['Trade'],
    }),
    // TODO: fix wrong calculation
    totalCollectedSwapFees: build.query<
      number,
      { markets?: Market.AsObject[]; prices?: CoinGeckoPriceResult }
    >({
      queryFn: async ({ markets, prices }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        const network = state.settings.network;
        const assets = state.settings.assets;
        return retryRtkRequest(async () => {
          if (!markets || !prices) return { data: 0 };
          let totalCollectedSwapFees = 0;

          const marketsJSPB = markets.map(({ baseAsset, quoteAsset }) => {
            const newMarket = new Market();
            newMarket.setBaseAsset(baseAsset);
            newMarket.setQuoteAsset(quoteAsset);
            return newMarket;
          });

          const results = await Promise.all(
            marketsJSPB.map((market) =>
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

              // Get Asset Data using the asset marketId
              const currentAsset = getAssetDataFromRegistry(marketId, assets[network], 'L-BTC');

              if (currentAsset === undefined || marketIdCollectedSwapFees === undefined) {
                // No point in calculating asset conversion
                // for unknown asset and
                // for undefined marketIdCollectedSwapFees
                return;
              }

              // Keeps marketIdCollectedSwapFees as sats if it's btc
              // 100000000 lbtc/sats-representation = 100000000 L-sats
              // Otherwise this makes sure to get the amount with fiat precision
              // 100000000 usdt/sats-representation = 1 usdt
              const currentAmount = fromSatsToUnitOrFractional(
                marketIdCollectedSwapFees,
                currentAsset.precision,
                isLbtcTicker(currentAsset.ticker),
                'L-sats'
              );

              // Converts (LBTC/USDT/LCAD) to L-sats terms using the latest prices
              const marketIdCollectedSwapFeesInSats = convertAmountToFavoriteCurrency({
                asset: currentAsset,
                amount: currentAmount,
                network: network,
                preferredCurrency: BTC_CURRENCY,
                preferredLbtcUnit: 'L-sats',
                prices: prices,
              });

              if (marketIdCollectedSwapFeesInSats) {
                totalCollectedSwapFees += Number(marketIdCollectedSwapFeesInSats);
              }
            });
          }
          return { data: totalCollectedSwapFees };
        });
      },
      providesTags: ['Trade'],
    }),
    // Utxos
    reloadUtxos: build.mutation<ReloadUtxosReply, void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          return {
            data: await client.reloadUtxos(new ReloadUtxosRequest(), metadata),
          };
        });
      },
      invalidatesTags: ['MarketUTXOs', 'FeeUTXOs'],
    }),
    listUtxos: build.query<ListUtxosReply.AsObject, { accountIndex: number; page?: Page }>({
      queryFn: async ({ page, accountIndex }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const listUtxosReply = await client.listUtxos(
            new ListUtxosRequest().setAccountIndex(accountIndex).setPage(page),
            metadata
          );
          return {
            data: listUtxosReply.toObject(false),
          };
        });
      },
      providesTags: ['MarketUTXOs', 'FeeUTXOs'],
    }),
    // Webhook
    addWebhook: build.mutation<
      AddWebhookReply.AsObject,
      { action: ActionType; endpoint: string; secret: string }
    >({
      queryFn: async ({ action, endpoint, secret }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const addWebhookReply = await client.addWebhook(
            new AddWebhookRequest().setAction(action).setEndpoint(endpoint).setSecret(secret),
            metadata
          );
          return {
            data: addWebhookReply.toObject(false),
          };
        });
      },
      invalidatesTags: ['Webhook'],
    }),
    removeWebhook: build.mutation<RemoveWebhookReply, { id: string }>({
      queryFn: async ({ id }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const removeWebhookReply = await client.removeWebhook(
            new RemoveWebhookRequest().setId(id),
            metadata
          );
          return {
            data: removeWebhookReply,
          };
        });
      },
      invalidatesTags: ['Webhook'],
    }),
    listWebhooks: build.query<WebhookInfo.AsObject[], void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const listWebhooksReply = await client.listWebhooks(new ListWebhooksRequest(), metadata);
          return {
            data: listWebhooksReply
              .getWebhookInfoList()
              .map((webhookInfo: WebhookInfo) => webhookInfo.toObject(false)),
          };
        });
      },
      providesTags: ['Webhook'],
    }),
    //
    getInfo: build.query<GetInfoReply.AsObject, void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const info = await client.getInfo(new GetInfoRequest(), metadata);
          return { data: info.toObject(false) };
        });
      },
      providesTags: ['Market', 'Fee', 'Trade'],
    }),
    listDeposits: build.query<Deposit.AsObject[], { accountIndex: number }>({
      queryFn: async ({ accountIndex }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const listDepositsReply = await client.listDeposits(
            new ListDepositsRequest().setAccountIndex(accountIndex),
            metadata
          );
          return {
            data: listDepositsReply.getDepositsList().map((deposit) => deposit.toObject(false)),
          };
        });
      },
      providesTags: ['MarketUTXOs', 'FeeUTXOs'],
    }),
    listWithdrawals: build.query<Withdrawal.AsObject[], { accountIndex: number; page: Page.AsObject }>({
      queryFn: async ({ accountIndex, page }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
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
        });
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
