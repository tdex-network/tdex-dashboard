import type { RpcOutputStream, RpcStatus } from '@protobuf-ts/runtime-rpc';

import type {
  AddWebhookResponse,
  CloseMarketResponse,
  DeriveFeeAddressesResponse,
  DeriveFeeFragmenterAddressesResponse,
  DeriveMarketAddressesResponse,
  DeriveMarketFragmenterAddressesResponse,
  DropMarketResponse,
  FeeFragmenterSplitFundsResponse,
  GetFeeBalanceResponse,
  GetFeeFragmenterBalanceResponse,
  GetMarketFragmenterBalanceResponse,
  GetMarketInfoResponse,
  GetMarketReportResponse,
  ListDepositsResponse,
  ListFeeAddressesResponse,
  ListFeeFragmenterAddressesResponse,
  ListMarketAddressesResponse,
  ListMarketFragmenterAddressesResponse,
  ListMarketsResponse,
  ListTradesResponse,
  ListUtxosResponse,
  ListWithdrawalsResponse,
  MarketFragmenterSplitFundsResponse,
  NewMarketResponse,
  OpenMarketResponse,
  RemoveWebhookResponse,
  UpdateMarketFixedFeeResponse,
  UpdateMarketPercentageFeeResponse,
  UpdateMarketPriceResponse,
  UpdateMarketStrategyResponse,
  WithdrawFeeFragmenterResponse,
  WithdrawFeeResponse,
  WithdrawMarketFragmenterResponse,
  WithdrawMarketResponse,
} from '../../api-spec/protobuf/gen/js/tdex-daemon/v2/operator_pb';
import {
  AddWebhookRequest,
  CloseMarketRequest,
  DeriveFeeAddressesRequest,
  DeriveFeeFragmenterAddressesRequest,
  DeriveMarketAddressesRequest,
  DeriveMarketFragmenterAddressesRequest,
  DropMarketRequest,
  FeeFragmenterSplitFundsRequest,
  GetFeeBalanceRequest,
  GetFeeFragmenterBalanceRequest,
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
  RemoveWebhookRequest,
  UpdateMarketFixedFeeRequest,
  UpdateMarketPercentageFeeRequest,
  UpdateMarketPriceRequest,
  UpdateMarketStrategyRequest,
  WithdrawFeeFragmenterRequest,
  WithdrawFeeRequest,
  WithdrawMarketFragmenterRequest,
  WithdrawMarketRequest,
} from '../../api-spec/protobuf/gen/js/tdex-daemon/v2/operator_pb';
import type {
  ActionType,
  StrategyType,
  WebhookInfo,
} from '../../api-spec/protobuf/gen/js/tdex-daemon/v2/types_pb';
import {
  CustomPeriod,
  Page,
  PredefinedPeriod,
  TimeRange,
} from '../../api-spec/protobuf/gen/js/tdex-daemon/v2/types_pb';
import { Fixed, Market, Price } from '../../api-spec/protobuf/gen/js/tdex/v1/types_pb';
import type { RootState } from '../../app/store';
import { interceptors } from '../../grpcDevTool';
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
    deriveFeeAddresses: build.query<DeriveFeeAddressesResponse['addresses'], void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.deriveFeeAddresses(DeriveFeeAddressesRequest.create(), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return {
            data: call.response.addresses,
          };
        });
      },
    }),
    listFeeAddresses: build.query<ListFeeAddressesResponse['addresses'], void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.listFeeAddresses(ListFeeAddressesRequest.create(), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return {
            data: call.response.addresses,
          };
        });
      },
    }),
    getFeeBalance: build.query<GetFeeBalanceResponse, void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.getFeeBalance(GetFeeBalanceRequest.create(), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return {
            data: call.response,
          };
        });
      },
      providesTags: ['FeeUTXOs'],
    }),
    withdrawFee: build.mutation<WithdrawFeeResponse, WithdrawFeeRequest>({
      queryFn: async ({ outputs, millisatsPerByte, password }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.withdrawFee(
            WithdrawFeeRequest.create({ outputs, millisatsPerByte, password }),
            { meta: macaroon ? { macaroon } : undefined, interceptors }
          );
          return {
            data: call.response,
          };
        });
      },
      invalidatesTags: ['FeeUTXOs'],
    }),
    deriveFeeFragmenterAddresses: build.query<
      DeriveFeeFragmenterAddressesResponse['addresses'],
      DeriveFeeFragmenterAddressesRequest
    >({
      queryFn: async ({ numOfAddresses }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          return {
            data: (
              await client.deriveFeeFragmenterAddresses(
                DeriveFeeFragmenterAddressesRequest.create({ numOfAddresses }),
                { meta: macaroon ? { macaroon } : undefined, interceptors }
              )
            ).response.addresses,
          };
        });
      },
    }),
    listFeeFragmenterAddresses: build.query<ListFeeFragmenterAddressesResponse['addresses'], void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          return {
            data: (
              await client.listFeeFragmenterAddresses(ListFeeFragmenterAddressesRequest.create(), {
                meta: macaroon ? { macaroon } : undefined,
                interceptors,
              })
            ).response.addresses,
          };
        });
      },
    }),
    getFeeFragmenterBalance: build.query<GetFeeFragmenterBalanceResponse['balance'], void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          return {
            data: (
              await client.getFeeFragmenterBalance(GetFeeFragmenterBalanceRequest.create(), {
                meta: macaroon ? { macaroon } : undefined,
                interceptors,
              })
            ).response.balance,
          };
        });
      },
    }),
    feeFragmenterSplitFunds: build.mutation<
      { responses: RpcOutputStream<FeeFragmenterSplitFundsResponse>; status: Promise<RpcStatus> },
      FeeFragmenterSplitFundsRequest
    >({
      queryFn: ({ maxFragments, millisatsPerByte }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        const call = client.feeFragmenterSplitFunds(
          FeeFragmenterSplitFundsRequest.create({
            maxFragments,
            millisatsPerByte,
          }),
          { meta: macaroon ? { macaroon } : undefined, interceptors }
        );
        return {
          data: { responses: call.responses, status: call.status },
        };
      },
      invalidatesTags: ['FeeUTXOs'],
    }),
    withdrawFeeFragmenter: build.mutation<WithdrawFeeFragmenterResponse, WithdrawFeeFragmenterRequest>({
      queryFn: async ({ outputs, millisatsPerByte, password }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          return {
            data: (
              await client.withdrawFeeFragmenter(
                WithdrawFeeFragmenterRequest.create({ outputs, millisatsPerByte, password }),
                { meta: macaroon ? { macaroon } : undefined, interceptors }
              )
            ).response,
          };
        });
      },
    }),
    // Market
    getMarketReport: build.query<GetMarketReportResponse['report'], GetMarketReportRequest>({
      queryFn: async ({ market, timeRange, timeFrame }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          if (!market || !timeRange) throw new Error('missing argument');
          let t = TimeRange.create({ predefinedPeriod: timeRange.predefinedPeriod });
          if (timeRange.customPeriod) {
            const c = CustomPeriod.create({
              startDate: timeRange.customPeriod.startDate,
              endDate: timeRange.customPeriod.endDate,
            });
            t = TimeRange.create({ customPeriod: c });
          }
          const newMarket = Market.create({ baseAsset: market.baseAsset, quoteAsset: market.quoteAsset });
          const call = await client.getMarketReport(
            GetMarketReportRequest.create({ market: newMarket, timeRange: t, timeFrame }),
            { meta: macaroon ? { macaroon } : undefined, interceptors }
          );
          return {
            data: call.response.report,
          };
        });
      },
    }),
    getMarketInfo: build.query<GetMarketInfoResponse['info'], GetMarketInfoRequest['market']>({
      queryFn: async (market, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          if (!market) throw new Error('missing argument');
          const newMarket = Market.create({ baseAsset: market.baseAsset, quoteAsset: market.quoteAsset });
          const call = await client.getMarketInfo(GetMarketInfoRequest.create({ market: newMarket }), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return {
            data: call.response.info,
          };
        });
      },
      providesTags: ['Market', 'MarketUTXOs'],
    }),
    deriveMarketAddresses: build.query<
      DeriveMarketAddressesResponse['addresses'],
      DeriveMarketAddressesRequest['market']
    >({
      queryFn: async (market, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const newMarket = Market.create({ baseAsset: market?.baseAsset, quoteAsset: market?.quoteAsset });
          const call = await client.deriveMarketAddresses(
            DeriveMarketAddressesRequest.create({ market: newMarket }),
            { meta: macaroon ? { macaroon } : undefined, interceptors }
          );
          return {
            data: call.response.addresses,
          };
        });
      },
      providesTags: ['Market'],
    }),
    listMarketAddresses: build.query<ListMarketAddressesResponse['addresses'], ListMarketAddressesRequest>({
      queryFn: async ({ market }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const newMarket = Market.create({ baseAsset: market?.baseAsset, quoteAsset: market?.quoteAsset });
          const call = await client.listMarketAddresses(
            ListMarketAddressesRequest.create({ market: newMarket }),
            { meta: macaroon ? { macaroon } : undefined, interceptors }
          );
          return {
            data: call.response.addresses,
          };
        });
      },
      providesTags: ['Market'],
    }),
    newMarket: build.mutation<NewMarketResponse, Market>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const newMarket = Market.create({ baseAsset, quoteAsset });
          const call = await client.newMarket(NewMarketRequest.create({ market: newMarket }), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return {
            data: call.response,
          };
        });
      },
      invalidatesTags: ['Market'],
    }),
    openMarket: build.mutation<OpenMarketResponse, Market>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const newMarket = Market.create({ baseAsset, quoteAsset });
          const call = await client.openMarket(OpenMarketRequest.create({ market: newMarket }), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return {
            data: call.response,
          };
        });
      },
      invalidatesTags: ['Market'],
    }),
    closeMarket: build.mutation<CloseMarketResponse, Market>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const newMarket = Market.create({ baseAsset, quoteAsset });
          const call = await client.closeMarket(CloseMarketRequest.create({ market: newMarket }), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return {
            data: call.response,
          };
        });
      },
      invalidatesTags: ['Market'],
    }),
    dropMarket: build.mutation<DropMarketResponse, Market>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const newMarket = Market.create({ baseAsset, quoteAsset });
          const call = await client.dropMarket(DropMarketRequest.create({ market: newMarket }), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return {
            data: call.response,
          };
        });
      },
      invalidatesTags: ['Market'],
    }),
    withdrawMarket: build.mutation<WithdrawMarketResponse, WithdrawMarketRequest>({
      queryFn: async ({ market, outputs, millisatsPerByte, password }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const newMarket = Market.create({ baseAsset: market?.baseAsset, quoteAsset: market?.quoteAsset });
          const call = await client.withdrawMarket(
            WithdrawMarketRequest.create({
              market: newMarket,
              outputs,
              millisatsPerByte,
              password,
            }),
            { meta: macaroon ? { macaroon } : undefined, interceptors }
          );
          return {
            data: call.response,
          };
        });
      },
      invalidatesTags: ['MarketUTXOs'],
    }),
    updateMarketPercentageFee: build.mutation<
      UpdateMarketPercentageFeeResponse,
      { market: Market; basisPoint: number }
    >({
      queryFn: async ({ market, basisPoint }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const { baseAsset, quoteAsset } = market;
          const newMarket = Market.create({ baseAsset, quoteAsset });
          const call = await client.updateMarketPercentageFee(
            UpdateMarketPercentageFeeRequest.create({ market: newMarket, basisPoint }),
            { meta: macaroon ? { macaroon } : undefined, interceptors }
          );
          return {
            data: call.response,
          };
        });
      },
      invalidatesTags: ['Market'],
    }),
    updateMarketFixedFee: build.mutation<UpdateMarketFixedFeeResponse, { market: Market; fixedFee: Fixed }>({
      queryFn: async ({ market, fixedFee }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const { baseAsset, quoteAsset } = market;
          const newMarket = Market.create({ baseAsset, quoteAsset });
          const { baseFee, quoteFee } = fixedFee;
          const newFixed = Fixed.create({ baseFee, quoteFee });
          const call = await client.updateMarketFixedFee(
            UpdateMarketFixedFeeRequest.create({ market: newMarket, fixed: newFixed }),
            { meta: macaroon ? { macaroon } : undefined, interceptors }
          );
          return {
            data: call.response,
          };
        });
      },
      invalidatesTags: ['Market'],
    }),
    updateMarketPrice: build.mutation<
      UpdateMarketPriceResponse,
      {
        market: Market;
        price: Price;
      }
    >({
      queryFn: async ({ market, price }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const { baseAsset, quoteAsset } = market;
          const newMarket = Market.create({ baseAsset, quoteAsset });
          //
          const { basePrice, quotePrice } = price;
          const newPrice = Price.create({ basePrice, quotePrice });
          //
          const call = await client.updateMarketPrice(
            UpdateMarketPriceRequest.create({ market: newMarket, price: newPrice }),
            { meta: macaroon ? { macaroon } : undefined, interceptors }
          );
          return {
            data: call.response,
          };
        });
      },
      invalidatesTags: ['Market'],
    }),
    updateMarketStrategy: build.mutation<
      UpdateMarketStrategyResponse,
      { market: Market; strategyType: StrategyType; meta?: string }
    >({
      queryFn: async ({ market, strategyType, meta }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const { baseAsset, quoteAsset } = market;
          const newMarket = Market.create({ baseAsset, quoteAsset });
          const call = await client.updateMarketStrategy(
            UpdateMarketStrategyRequest.create({ market: newMarket, strategyType, metadata: meta || '' }),
            { meta: macaroon ? { macaroon } : undefined, interceptors }
          );
          return {
            data: call.response,
          };
        });
      },
      invalidatesTags: ['Market'],
    }),
    listMarkets: build.query<ListMarketsResponse['markets'], void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.listMarkets(ListMarketsRequest.create(), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return {
            data: call.response.markets,
          };
        });
      },
      providesTags: ['Market'],
    }),
    deriveMarketFragmenterAddresses: build.query<
      DeriveMarketFragmenterAddressesResponse['addresses'],
      DeriveMarketFragmenterAddressesRequest
    >({
      queryFn: async ({ numOfAddresses }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          return {
            data: (
              await client.deriveMarketFragmenterAddresses(
                DeriveMarketFragmenterAddressesRequest.create({ numOfAddresses }),
                { meta: macaroon ? { macaroon } : undefined, interceptors }
              )
            ).response.addresses,
          };
        });
      },
    }),
    listMarketFragmenterAddresses: build.query<ListMarketFragmenterAddressesResponse['addresses'], void>({
      queryFn: async (_, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          return {
            data: (
              await client.listMarketFragmenterAddresses(ListMarketFragmenterAddressesRequest.create(), {
                meta: macaroon ? { macaroon } : undefined,
                interceptors,
              })
            ).response.addresses,
          };
        });
      },
    }),
    getMarketFragmenterBalance: build.query<GetMarketFragmenterBalanceResponse, void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          return {
            data: (
              await client.getMarketFragmenterBalance(GetMarketFragmenterBalanceRequest.create(), {
                meta: macaroon ? { macaroon } : undefined,
                interceptors,
              })
            ).response,
          };
        });
      },
    }),
    marketFragmenterSplitFunds: build.mutation<
      { responses: RpcOutputStream<MarketFragmenterSplitFundsResponse>; status: Promise<RpcStatus> },
      MarketFragmenterSplitFundsRequest
    >({
      queryFn: ({ market, millisatsPerByte }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        const newMarket = Market.create({ baseAsset: market?.baseAsset, quoteAsset: market?.quoteAsset });
        const call = client.marketFragmenterSplitFunds(
          MarketFragmenterSplitFundsRequest.create({ market: newMarket, millisatsPerByte }),
          { meta: macaroon ? { macaroon } : undefined, interceptors }
        );
        return {
          data: { responses: call.responses, status: call.status },
        };
      },
      invalidatesTags: ['MarketUTXOs'],
    }),
    withdrawMarketFragmenter: build.mutation<
      WithdrawMarketFragmenterResponse,
      WithdrawMarketFragmenterRequest
    >({
      queryFn: async ({ outputs, millisatsPerByte, password }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          return {
            data: (
              await client.withdrawMarketFragmenter(
                WithdrawMarketFragmenterRequest.create({ outputs, millisatsPerByte, password }),
                { meta: macaroon ? { macaroon } : undefined, interceptors }
              )
            ).response,
          };
        });
      },
      invalidatesTags: ['MarketUTXOs'],
    }),
    // Trades
    listTrades: build.query<ListTradesResponse['trades'], ListTradesRequest>({
      queryFn: async ({ market, page }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const newPage = Page.create({ number: page?.number, size: page?.size });
          const newMarket = Market.create({ baseAsset: market?.baseAsset, quoteAsset: market?.quoteAsset });
          const call = await client.listTrades(
            ListTradesRequest.create({ market: newMarket, page: newPage }),
            { meta: { macaroon }, interceptors }
          );
          return {
            data: call.response.trades,
          };
        });
      },
      providesTags: ['Trade'],
    }),
    // Calculate the % change of collected swap fees across 24h period
    totalCollectedSwapFeesChange: build.query<
      string,
      {
        markets?: Market[];
        prices?: CoinGeckoPriceResult;
      }
    >({
      queryFn: async ({ markets, prices }, { getState, dispatch }) => {
        if (!markets || !prices) return { data: '0' };
        //
        const milliseconds24hrs = 24 * 60 * 60 * 1000;
        const startDate = new Date(`${new Date().getFullYear()}-01-01T00:00:00`).toISOString();
        const minus24hDate = new Date(Date.now() - milliseconds24hrs).toISOString();
        const customPeriodUntil24hAgo = CustomPeriod.create({ startDate, endDate: minus24hDate });
        const timeRangeUntil24hAgo = TimeRange.create({ customPeriod: customPeriodUntil24hAgo });
        const collectedSwapFeesUntil24hAgo: number = await dispatch(
          operatorApi.endpoints.totalCollectedSwapFees.initiate({
            markets,
            prices,
            timeRange: timeRangeUntil24hAgo,
          })
        ).unwrap();
        console.log('collectedSwapFeesUntil24hAgo', collectedSwapFeesUntil24hAgo);
        //
        const currentDate = new Date(Date.now()).toISOString();
        const customPeriodUntilNow = CustomPeriod.create({ startDate, endDate: currentDate });
        const timeRangeUntilNow = TimeRange.create({ customPeriod: customPeriodUntilNow });
        const collectedSwapFeesUntilNow: number = await dispatch(
          operatorApi.endpoints.totalCollectedSwapFees.initiate({
            markets,
            prices,
            timeRange: timeRangeUntilNow,
          })
        ).unwrap();
        console.log('collectedSwapFeesUntilNow', collectedSwapFeesUntilNow);
        // Calculate variation percentage
        const changePercentage =
          ((collectedSwapFeesUntilNow - collectedSwapFeesUntil24hAgo) / collectedSwapFeesUntil24hAgo) * 100;
        // If we calculate percentage variation with totalCollectedSwapFeesUntil24hAgo == zero, return 'N/A' instead of Infinity
        const change = isFinite(changePercentage)
          ? new Intl.NumberFormat('en-US', {
              maximumFractionDigits: 2,
              signDisplay: 'always',
            }).format(changePercentage)
          : 'N/A';
        return { data: change };
      },
      providesTags: ['Trade'],
    }),
    // Sum swap fees from all markets, converted to L-sats
    totalCollectedSwapFees: build.query<
      number,
      { markets?: Market[]; prices?: CoinGeckoPriceResult; timeRange?: TimeRange }
    >({
      queryFn: async (
        { markets, prices, timeRange = { predefinedPeriod: PredefinedPeriod.PREDEFINED_PERIOD_ALL } },
        { getState }
      ) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        const network = state.settings.network;
        const assets = state.settings.assets;
        return retryRtkRequest(async () => {
          if (!markets || !prices) return { data: 0 };
          let totalCollectedSwapFees = 0;
          await Promise.all(
            markets.map((market) =>
              client
                .getMarketReport(
                  GetMarketReportRequest.create({
                    market,
                    timeRange,
                  }),
                  {
                    meta: { macaroon },
                    interceptors,
                  }
                )
                .then((res) => {
                  const totalCollectedFees = res.response.report?.totalCollectedFees;
                  if (!totalCollectedFees) return;
                  Object.entries(market).forEach(([assetType, assetId]) => {
                    const currentAsset = getAssetDataFromRegistry(assetId, assets[network], 'L-BTC');
                    if (!currentAsset) return;
                    // Convert non-L-sats amount to fractional
                    const amountSatsOrFractional = fromSatsToUnitOrFractional(
                      assetType === 'baseAsset'
                        ? totalCollectedFees.baseAmount
                        : totalCollectedFees.quoteAmount,
                      currentAsset.precision,
                      isLbtcTicker(currentAsset.ticker),
                      'L-sats'
                    );
                    // Convert non-Lbtc amount to L-sats
                    const marketSwapFeesSats = convertAmountToFavoriteCurrency({
                      asset: currentAsset,
                      amount: amountSatsOrFractional,
                      network: network,
                      preferredCurrency: BTC_CURRENCY,
                      preferredLbtcUnit: 'L-sats',
                      prices: prices,
                    });
                    // Add L-sats base and quote amounts together
                    if (marketSwapFeesSats) {
                      totalCollectedSwapFees += Number(marketSwapFeesSats);
                    }
                  });
                })
            )
          );
          return { data: totalCollectedSwapFees };
        });
      },
      providesTags: ['Trade'],
    }),
    // Utxos
    listUtxos: build.query<ListUtxosResponse, ListUtxosRequest>({
      queryFn: async ({ page, accountName }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.listUtxos(ListUtxosRequest.create({ accountName, page }), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return {
            data: call.response,
          };
        });
      },
      providesTags: ['MarketUTXOs', 'FeeUTXOs'],
    }),
    // Webhook
    addWebhook: build.mutation<AddWebhookResponse, { action: ActionType; endpoint: string; secret: string }>({
      queryFn: async ({ action, endpoint, secret }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.addWebhook(AddWebhookRequest.create({ action, endpoint, secret }), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return {
            data: call.response,
          };
        });
      },
      invalidatesTags: ['Webhook'],
    }),
    removeWebhook: build.mutation<RemoveWebhookResponse, { id: string }>({
      queryFn: async ({ id }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const removeWebhookResponse = await client.removeWebhook(RemoveWebhookRequest.create({ id }), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return {
            data: removeWebhookResponse,
          };
        });
      },
      invalidatesTags: ['Webhook'],
    }),
    listWebhooks: build.query<WebhookInfo[], void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.listWebhooks(ListWebhooksRequest.create(), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return {
            data: call.response.webhookInfo,
          };
        });
      },
      providesTags: ['Webhook'],
    }),
    //
    listDeposits: build.query<ListDepositsResponse['deposits'], ListDepositsRequest>({
      queryFn: async ({ accountName }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.listDeposits(ListDepositsRequest.create({ accountName }), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return {
            data: call.response.deposits,
          };
        });
      },
      providesTags: ['MarketUTXOs', 'FeeUTXOs'],
    }),
    listWithdrawals: build.query<ListWithdrawalsResponse['withdrawals'], ListWithdrawalsRequest>({
      queryFn: async ({ accountName, page }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const newPage = Page.create({ number: page?.number, size: page?.size });
          const call = await client.listWithdrawals(
            ListWithdrawalsRequest.create({ page: newPage, accountName }),
            {
              meta: macaroon ? { macaroon } : undefined,
              interceptors,
            }
          );
          return {
            data: call.response.withdrawals,
          };
        });
      },
      providesTags: ['Market', 'Fee'],
    }),
  }),
});

export const {
  // Fee
  useDeriveFeeAddressesQuery,
  useListFeeAddressesQuery,
  useGetFeeBalanceQuery,
  useWithdrawFeeMutation,
  useDeriveFeeFragmenterAddressesQuery,
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
  useCloseMarketMutation,
  useDeriveMarketAddressesQuery,
  useListMarketAddressesQuery,
  useNewMarketMutation,
  useOpenMarketMutation,
  useDropMarketMutation,
  useDeriveMarketFragmenterAddressesQuery,
  useListMarketFragmenterAddressesQuery,
  useGetMarketFragmenterBalanceQuery,
  useMarketFragmenterSplitFundsMutation,
  useWithdrawMarketFragmenterMutation,
  // Trades
  useTotalCollectedSwapFeesQuery,
  useTotalCollectedSwapFeesChangeQuery,
  useListTradesQuery,
  // Utxos
  useListUtxosQuery,
  // Webhook
  useAddWebhookMutation,
  useRemoveWebhookMutation,
  useListWebhooksQuery,
  //
  useListDepositsQuery,
  useListWithdrawalsQuery,
} = operatorApi;
