import type { ClientReadableStream, Metadata } from 'grpc-web';

import type {
  ClaimFeeDepositsResponse,
  ClaimMarketDepositsResponse,
  CloseMarketResponse,
  FeeFragmenterSplitFundsResponse,
  GetFeeAddressResponse,
  GetFeeBalanceResponse,
  GetMarketBalanceResponse,
  GetMarketCollectedSwapFeesResponse,
  ListMarketsResponse,
  MarketFragmenterSplitFundsResponse,
  RemoveWebhookResponse,
  UpdateMarketFixedFeeResponse,
  UpdateMarketPriceResponse,
  WithdrawFeeFragmenterResponse,
  WithdrawFeeResponse,
  WithdrawMarketFragmenterResponse,
  WithdrawMarketResponse,
  GetInfoResponse,
  ListUtxosResponse,
  ReloadUtxosResponse,
  DropMarketResponse,
  GetMarketFragmenterBalanceResponse,
  OpenMarketResponse,
  UpdateMarketPercentageFeeResponse,
  UpdateMarketStrategyResponse,
  AddWebhookResponse,
  NewMarketResponse,
} from '../../api-spec/protobuf/gen/js/tdex-daemon/v1/operator_pb';
import {
  AddWebhookRequest,
  ClaimFeeDepositsRequest,
  ClaimMarketDepositsRequest,
  CloseMarketRequest,
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
  ReloadUtxosRequest,
  RemoveWebhookRequest,
  UpdateMarketFixedFeeRequest,
  UpdateMarketPercentageFeeRequest,
  UpdateMarketPriceRequest,
  UpdateMarketStrategyRequest,
  WithdrawFeeFragmenterRequest,
  WithdrawFeeRequest,
  WithdrawMarketFragmenterRequest,
  WithdrawMarketRequest,
} from '../../api-spec/protobuf/gen/js/tdex-daemon/v1/operator_pb';
import type {
  ActionType,
  AddressWithBlindingKey,
  BalanceInfo,
  Deposit,
  MarketInfo,
  MarketReport,
  StrategyType,
  TimeFrame,
  TradeInfo,
  WebhookInfo,
  Withdrawal,
} from '../../api-spec/protobuf/gen/js/tdex-daemon/v1/types_pb';
import {
  CustomPeriod,
  Outpoint,
  Page,
  TimeRange,
} from '../../api-spec/protobuf/gen/js/tdex-daemon/v1/types_pb';
import { Balance, Fixed, Market, Price } from '../../api-spec/protobuf/gen/js/tdex/v1/types_pb';
import type { RootState } from '../../app/store';
import {
  BTC_CURRENCY,
  fromSatsToUnitOrFractional,
  getAssetDataFromRegistry,
  isLbtcTicker,
  retryRtkRequest,
} from '../../utils';
import type { CoinGeckoPriceResult } from '../rates.api';
import { convertAmountToFavoriteCurrency } from '../rates.api';
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
          const feeAddressResponse: GetFeeAddressResponse = await client.getFeeAddress(
            new GetFeeAddressRequest(),
            metadata
          );
          return {
            data: feeAddressResponse.getAddressWithBlindingKeyList().map((addr) => addr.toObject(false)),
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
          const listFeeAddressesResponse = await client.listFeeAddresses(
            new ListFeeAddressesRequest(),
            metadata
          );
          return {
            data: listFeeAddressesResponse
              .getAddressWithBlindingKeyList()
              .map((addr: AddressWithBlindingKey) => addr.toObject(false)),
          };
        });
      },
    }),
    getFeeBalance: build.query<GetFeeBalanceResponse.AsObject, void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const feeBalanceResponse = await client.getFeeBalance(new GetFeeBalanceRequest(), metadata);
          return {
            data: feeBalanceResponse.toObject(false),
          };
        });
      },
      providesTags: ['FeeUTXOs'],
    }),
    claimFeeDeposits: build.mutation<ClaimFeeDepositsResponse, ClaimFeeDepositsRequest.AsObject>({
      queryFn: async ({ outpointsList }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const arr = outpointsList.map(({ hash, index }) => {
            const txOutpoint = new Outpoint();
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
      WithdrawFeeResponse,
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
      ClientReadableStream<FeeFragmenterSplitFundsResponse>,
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
      WithdrawFeeFragmenterResponse,
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
          const getMarketReportResponse = await client.getMarketReport(
            new GetMarketReportRequest().setMarket(newMarket).setTimeRange(t).setTimeFrame(timeFrame),
            metadata
          );
          return {
            data: getMarketReportResponse.toObject(false).report,
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
          const getMarketInfoResponse = await client.getMarketInfo(
            new GetMarketInfoRequest().setMarket(newMarket),
            metadata
          );
          return {
            data: getMarketInfoResponse.toObject(false).info,
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
          const getMarketAddressResponse = await client.getMarketAddress(
            new GetMarketAddressRequest().setMarket(newMarket),
            metadata
          );
          return {
            data: getMarketAddressResponse
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
          const listMarketAddressesResponse = await client.listMarketAddresses(
            new ListMarketAddressesRequest().setMarket(newMarket),
            metadata
          );
          return {
            data: listMarketAddressesResponse
              .getAddressWithBlindingKeyList()
              .map((addr: AddressWithBlindingKey) => addr.toObject(false)),
          };
        });
      },
      providesTags: ['Market'],
    }),
    getMarketBalance: build.query<GetMarketBalanceResponse.AsObject, Market.AsObject>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const newMarket = new Market();
          newMarket.setBaseAsset(baseAsset);
          newMarket.setQuoteAsset(quoteAsset);
          const getMarketBalanceResponse = await client.getMarketBalance(
            new GetMarketBalanceRequest().setMarket(newMarket),
            metadata
          );
          return {
            data: getMarketBalanceResponse.toObject(false),
          };
        });
      },
      providesTags: ['MarketUTXOs'],
    }),
    claimMarketDeposits: build.mutation<
      ClaimMarketDepositsResponse.AsObject,
      { market: Market.AsObject; outpointsList: Outpoint.AsObject[] }
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
            const txOutpoint = new Outpoint();
            txOutpoint.setHash(hash);
            txOutpoint.setIndex(index);
            return txOutpoint;
          });
          const claimMarketDepositsResponse = await client.claimMarketDeposits(
            new ClaimMarketDepositsRequest().setOutpointsList(arr).setMarket(newMarket),
            metadata
          );
          return {
            data: claimMarketDepositsResponse.toObject(false),
          };
        });
      },
      invalidatesTags: ['MarketUTXOs'],
    }),
    newMarket: build.mutation<NewMarketResponse.AsObject, Market.AsObject>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const market = new Market();
          market.setBaseAsset(baseAsset);
          market.setQuoteAsset(quoteAsset);
          const newMarketResponse = await client.newMarket(
            new NewMarketRequest().setMarket(market),
            metadata
          );
          return {
            data: newMarketResponse.toObject(false),
          };
        });
      },
      invalidatesTags: ['Market'],
    }),
    openMarket: build.mutation<OpenMarketResponse.AsObject, Market.AsObject>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const market = new Market();
          market.setBaseAsset(baseAsset);
          market.setQuoteAsset(quoteAsset);
          const openMarketResponse = await client.openMarket(
            new OpenMarketRequest().setMarket(market),
            metadata
          );
          return {
            data: openMarketResponse.toObject(false),
          };
        });
      },
      invalidatesTags: ['Market'],
    }),
    closeMarket: build.mutation<CloseMarketResponse.AsObject, Market.AsObject>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const market = new Market();
          market.setBaseAsset(baseAsset);
          market.setQuoteAsset(quoteAsset);
          const closeMarketResponse = await client.closeMarket(
            new CloseMarketRequest().setMarket(market),
            metadata
          );
          return {
            data: closeMarketResponse.toObject(false),
          };
        });
      },
      invalidatesTags: ['Market'],
    }),
    dropMarket: build.mutation<DropMarketResponse.AsObject, Market.AsObject>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const market = new Market();
          market.setBaseAsset(baseAsset);
          market.setQuoteAsset(quoteAsset);
          const dropMarketResponse = await client.dropMarket(
            new DropMarketRequest().setMarket(market),
            metadata
          );
          return {
            data: dropMarketResponse.toObject(false),
          };
        });
      },
      invalidatesTags: ['Market'],
    }),
    withdrawMarket: build.mutation<
      WithdrawMarketResponse.AsObject,
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
          const withdrawMarketResponse = await client.withdrawMarket(
            new WithdrawMarketRequest()
              .setMarket(newMarket)
              .setBalanceToWithdraw(newBalance)
              .setAddress(address)
              .setMillisatsPerByte(millisatsPerByte),
            metadata
          );
          return {
            data: withdrawMarketResponse.toObject(false),
          };
        });
      },
      invalidatesTags: ['MarketUTXOs'],
    }),
    updateMarketPercentageFee: build.mutation<
      UpdateMarketPercentageFeeResponse.AsObject,
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
          const updateMarketFeeResponse = await client.updateMarketPercentageFee(
            new UpdateMarketPercentageFeeRequest().setMarket(newMarket).setBasisPoint(basisPoint),
            metadata
          );
          return {
            data: updateMarketFeeResponse.toObject(false),
          };
        });
      },
      invalidatesTags: ['Market'],
    }),
    updateMarketFixedFee: build.mutation<
      UpdateMarketFixedFeeResponse.AsObject,
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
          const updateMarketFeeResponse = await client.updateMarketFixedFee(
            new UpdateMarketFixedFeeRequest().setMarket(newMarket).setFixed(newFixed),
            metadata
          );
          return {
            data: updateMarketFeeResponse.toObject(false),
          };
        });
      },
      invalidatesTags: ['Market'],
    }),
    updateMarketPrice: build.mutation<
      UpdateMarketPriceResponse.AsObject,
      {
        market: Market.AsObject;
        price: Price.AsObject;
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
          const updateMarketPriceResponse = await client.updateMarketPrice(
            new UpdateMarketPriceRequest().setMarket(newMarket).setPrice(newPrice),
            metadata
          );
          return {
            data: updateMarketPriceResponse.toObject(false),
          };
        });
      },
      invalidatesTags: ['Market'],
    }),
    updateMarketStrategy: build.mutation<
      UpdateMarketStrategyResponse.AsObject,
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
          const updateMarketStrategyResponse = await client.updateMarketStrategy(
            new UpdateMarketStrategyRequest()
              .setMarket(newMarket)
              .setStrategyType(strategyType)
              .setMetadata(meta || ''),
            metadata
          );
          return {
            data: updateMarketStrategyResponse.toObject(false),
          };
        });
      },
      invalidatesTags: ['Market'],
    }),
    listMarkets: build.query<ListMarketsResponse.AsObject, void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const listMarketsResponse = await client.listMarkets(new ListMarketsRequest(), metadata);
          return {
            data: listMarketsResponse.toObject(false),
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
    getMarketFragmenterBalance: build.query<GetMarketFragmenterBalanceResponse.AsObject, void>({
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
      ClientReadableStream<MarketFragmenterSplitFundsResponse>,
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
      WithdrawMarketFragmenterResponse,
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
          const listTradesResponse = await client.listTrades(
            new ListTradesRequest().setMarket(newMarket).setPage(newPage),
            metadata
          );
          return {
            data: listTradesResponse.getTradesList().map((tradeInfo: TradeInfo) => tradeInfo.toObject(false)),
          };
        });
      },
      providesTags: ['Trade'],
    }),
    getMarketCollectedSwapFees: build.query<GetMarketCollectedSwapFeesResponse.AsObject, Market.AsObject>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const newMarket = new Market();
          newMarket.setBaseAsset(baseAsset);
          newMarket.setQuoteAsset(quoteAsset);
          const getMarketCollectedSwapFeesResponse = await client.getMarketCollectedSwapFees(
            new GetMarketCollectedSwapFeesRequest().setMarket(newMarket),
            metadata
          );
          return {
            data: getMarketCollectedSwapFeesResponse.toObject(false),
          };
        });
      },
      providesTags: ['Trade'],
    }),
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

          // turns bare markets array into a Google JS ProtoBuff Markets Object
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
                .then((res: GetMarketCollectedSwapFeesResponse) => ({
                  market: [market.getBaseAsset(), market.getQuoteAsset()],
                  getMarketCollectedSwapFeesResponse: res,
                }))
            )
          );

          const calculateTotalCollectedSwapFees = (
            marketId: string,
            r: { market: string[]; getMarketCollectedSwapFeesResponse: GetMarketCollectedSwapFeesResponse }
          ) => {
            const marketIdCollectedSwapFees = r.getMarketCollectedSwapFeesResponse
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
          };
          for (const r of results) {
            r.market.forEach((marketId) => calculateTotalCollectedSwapFees(marketId, r));
          }
          return { data: totalCollectedSwapFees };
        });
      },
      providesTags: ['Trade'],
    }),
    // Utxos
    reloadUtxos: build.mutation<ReloadUtxosResponse, void>({
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
    listUtxos: build.query<ListUtxosResponse.AsObject, { accountIndex: number; page?: Page }>({
      queryFn: async ({ page, accountIndex }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const listUtxosResponse = await client.listUtxos(
            new ListUtxosRequest().setAccountIndex(accountIndex).setPage(page),
            metadata
          );
          return {
            data: listUtxosResponse.toObject(false),
          };
        });
      },
      providesTags: ['MarketUTXOs', 'FeeUTXOs'],
    }),
    // Webhook
    addWebhook: build.mutation<
      AddWebhookResponse.AsObject,
      { action: ActionType; endpoint: string; secret: string }
    >({
      queryFn: async ({ action, endpoint, secret }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const addWebhookResponse = await client.addWebhook(
            new AddWebhookRequest().setAction(action).setEndpoint(endpoint).setSecret(secret),
            metadata
          );
          return {
            data: addWebhookResponse.toObject(false),
          };
        });
      },
      invalidatesTags: ['Webhook'],
    }),
    removeWebhook: build.mutation<RemoveWebhookResponse, { id: string }>({
      queryFn: async ({ id }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state);
        const metadata = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const removeWebhookResponse = await client.removeWebhook(
            new RemoveWebhookRequest().setId(id),
            metadata
          );
          return {
            data: removeWebhookResponse,
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
          const listWebhooksResponse = await client.listWebhooks(new ListWebhooksRequest(), metadata);
          return {
            data: listWebhooksResponse
              .getWebhookInfoList()
              .map((webhookInfo: WebhookInfo) => webhookInfo.toObject(false)),
          };
        });
      },
      providesTags: ['Webhook'],
    }),
    //
    getInfo: build.query<GetInfoResponse.AsObject, void>({
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
          const listDepositsResponse = await client.listDeposits(
            new ListDepositsRequest().setAccountIndex(accountIndex),
            metadata
          );
          return {
            data: listDepositsResponse.getDepositsList().map((deposit: Deposit) => deposit.toObject(false)),
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
          const listWithdrawalsResponse = await client.listWithdrawals(
            new ListWithdrawalsRequest().setPage(newPage).setAccountIndex(accountIndex),
            metadata
          );
          return {
            data: listWithdrawalsResponse
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
