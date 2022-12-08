import type { RpcOutputStream, RpcStatus } from '@protobuf-ts/runtime-rpc';

import type {
  AddWebhookResponse,
  ClaimFeeDepositsResponse,
  ClaimMarketDepositsResponse,
  CloseMarketResponse,
  DropMarketResponse,
  FeeFragmenterSplitFundsResponse,
  GetFeeBalanceResponse,
  GetInfoResponse,
  GetMarketBalanceResponse,
  GetMarketCollectedSwapFeesResponse,
  GetMarketFragmenterBalanceResponse,
  ListMarketsResponse,
  ListUtxosResponse,
  MarketFragmenterSplitFundsResponse,
  NewMarketResponse,
  OpenMarketResponse,
  ReloadUtxosResponse,
  RemoveWebhookResponse,
  UpdateMarketFixedFeeResponse,
  UpdateMarketPercentageFeeResponse,
  UpdateMarketPriceResponse,
  UpdateMarketStrategyResponse,
  WithdrawFeeFragmenterResponse,
  WithdrawFeeResponse,
  WithdrawMarketFragmenterResponse,
  WithdrawMarketResponse,
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
import { interceptors } from '../../grpcDevTool';
import {
  BTC_CURRENCY,
  fromSatsToUnitOrFractional,
  getAssetDataFromRegistry,
  isLbtcTicker,
  retryRtkRequest,
  rtkRequest,
} from '../../utils';
import type { CoinGeckoPriceResult } from '../rates.api';
import { convertAmountToFavoriteCurrency } from '../rates.api';
import { selectMacaroonCreds, selectOperatorClient } from '../settings/settingsSlice';
import { tdexApi } from '../tdex.api';

export const operatorApi = tdexApi.injectEndpoints({
  endpoints: (build) => ({
    // Fee
    getFeeAddress: build.query<AddressWithBlindingKey[], void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.getFeeAddress(GetFeeAddressRequest.create(), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return {
            data: call.response.addressWithBlindingKey,
          };
        });
      },
    }),
    listFeeAddresses: build.query<AddressWithBlindingKey[], void>({
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
            data: call.response.addressWithBlindingKey,
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
    claimFeeDeposits: build.mutation<ClaimFeeDepositsResponse, ClaimFeeDepositsRequest>({
      queryFn: async ({ outpoints }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const arr = outpoints.map(({ hash, index }) => {
            return Outpoint.create({ hash, index });
          });
          const call = await client.claimFeeDeposits(ClaimFeeDepositsRequest.create({ outpoints: arr }), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return {
            data: call.response,
          };
        });
      },
      invalidatesTags: ['FeeUTXOs'],
    }),
    withdrawFee: build.mutation<WithdrawFeeResponse, WithdrawFeeRequest>({
      queryFn: async ({ amount, millisatsPerByte, address, asset, password }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.withdrawFee(
            WithdrawFeeRequest.create({ address, amount, asset, millisatsPerByte, password }),
            { meta: macaroon ? { macaroon } : undefined, interceptors }
          );
          return {
            data: call.response,
          };
        });
      },
      invalidatesTags: ['FeeUTXOs'],
    }),
    getFeeFragmenterAddress: build.query<AddressWithBlindingKey[], { numOfAddresses: number }>({
      queryFn: async ({ numOfAddresses }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          return {
            data: (
              await client.getFeeFragmenterAddress(
                GetFeeFragmenterAddressRequest.create({ numOfAddresses }),
                { meta: macaroon ? { macaroon } : undefined, interceptors }
              )
            ).response.addressWithBlindingKey,
          };
        });
      },
    }),
    listFeeFragmenterAddresses: build.query<AddressWithBlindingKey[], void>({
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
            ).response.addressWithBlindingKey,
          };
        });
      },
    }),
    getFeeFragmenterBalance: build.query<Record<string, BalanceInfo>, void>({
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
      queryFn: async ({ address, millisatsPerByte, password }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          return {
            data: (
              await client.withdrawFeeFragmenter(
                WithdrawFeeFragmenterRequest.create({ address, millisatsPerByte, password }),
                { meta: macaroon ? { macaroon } : undefined, interceptors }
              )
            ).response,
          };
        });
      },
    }),
    // Market
    getMarketReport: build.query<
      MarketReport | undefined,
      { market: Market | undefined; timeRange: TimeRange; timeFrame: TimeFrame }
    >({
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
    getMarketInfo: build.query<MarketInfo | undefined, Market>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          if (!baseAsset || !quoteAsset) throw new Error('missing argument');
          const newMarket = Market.create({ baseAsset, quoteAsset });
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
    getMarketAddress: build.query<AddressWithBlindingKey[], Market>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          if (!baseAsset || !quoteAsset) throw new Error('missing argument');
          const newMarket = Market.create({ baseAsset, quoteAsset });
          const call = await client.getMarketAddress(GetMarketAddressRequest.create({ market: newMarket }), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return {
            data: call.response.addressWithBlindingKey,
          };
        });
      },
    }),
    listMarketAddresses: build.query<AddressWithBlindingKey[], Market>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const newMarket = Market.create({ baseAsset, quoteAsset });
          const call = await client.listMarketAddresses(
            ListMarketAddressesRequest.create({ market: newMarket }),
            { meta: macaroon ? { macaroon } : undefined, interceptors }
          );
          return {
            data: call.response.addressWithBlindingKey,
          };
        });
      },
      providesTags: ['Market'],
    }),
    getMarketBalance: build.query<GetMarketBalanceResponse, Market>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const newMarket = Market.create({ baseAsset, quoteAsset });
          const call = await client.getMarketBalance(GetMarketBalanceRequest.create({ market: newMarket }), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return {
            data: call.response,
          };
        });
      },
      providesTags: ['MarketUTXOs'],
    }),
    claimMarketDeposits: build.mutation<
      ClaimMarketDepositsResponse,
      { market: Market; outpointsList: Outpoint[] }
    >({
      queryFn: async ({ outpointsList, market }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const { baseAsset, quoteAsset } = market;
          const newMarket = Market.create({ baseAsset, quoteAsset });
          const arr = outpointsList.map(({ hash, index }) => {
            return Outpoint.create({ hash, index });
          });
          const call = await client.claimMarketDeposits(
            ClaimMarketDepositsRequest.create({ outpoints: arr, market: newMarket }),
            { meta: macaroon ? { macaroon } : undefined, interceptors }
          );
          return {
            data: call.response,
          };
        });
      },
      invalidatesTags: ['MarketUTXOs'],
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
        return rtkRequest(async () => {
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
      queryFn: async ({ market, balanceToWithdraw, address, millisatsPerByte, password }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const newMarket = Market.create({ baseAsset: market?.baseAsset, quoteAsset: market?.quoteAsset });
          const newBalance = Balance.create({
            baseAmount: balanceToWithdraw?.baseAmount,
            quoteAmount: balanceToWithdraw?.quoteAmount,
          });
          const call = await client.withdrawMarket(
            WithdrawMarketRequest.create({
              market: newMarket,
              balanceToWithdraw: newBalance,
              address,
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
    listMarkets: build.query<ListMarketsResponse, void>({
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
            data: call.response,
          };
        });
      },
      providesTags: ['Market'],
    }),
    getMarketFragmenterAddress: build.query<AddressWithBlindingKey[], { numOfAddresses: number }>({
      queryFn: async ({ numOfAddresses }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          return {
            data: (
              await client.getMarketFragmenterAddress(
                GetMarketFragmenterAddressRequest.create({ numOfAddresses }),
                { meta: macaroon ? { macaroon } : undefined, interceptors }
              )
            ).response.addressWithBlindingKey,
          };
        });
      },
    }),
    listMarketFragmenterAddresses: build.query<AddressWithBlindingKey[], void>({
      queryFn: async (arg, { getState }) => {
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
            ).response.addressWithBlindingKey,
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
      queryFn: async ({ address, millisatsPerByte, password }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          return {
            data: (
              await client.withdrawMarketFragmenter(
                WithdrawMarketFragmenterRequest.create({ address, millisatsPerByte, password }),
                { meta: macaroon ? { macaroon } : undefined, interceptors }
              )
            ).response,
          };
        });
      },
      invalidatesTags: ['MarketUTXOs'],
    }),
    // Trades
    listTrades: build.query<TradeInfo[], { market: Market; page: Page }>({
      queryFn: async ({ market, page }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const { pageNumber, pageSize } = page;
          const newPage = Page.create({ pageNumber, pageSize });
          const { baseAsset, quoteAsset } = market;
          const newMarket = Market.create({ baseAsset, quoteAsset });
          const call = await client.listTrades(
            ListTradesRequest.create({ market: newMarket, page: newPage }),
            { meta: macaroon ? { macaroon } : undefined, interceptors }
          );
          return {
            data: call.response.trades,
          };
        });
      },
      providesTags: ['Trade'],
    }),
    getMarketCollectedSwapFees: build.query<GetMarketCollectedSwapFeesResponse, Market>({
      queryFn: async ({ baseAsset, quoteAsset }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        console.log('macaroon!!', macaroon);
        return retryRtkRequest(async () => {
          const newMarket = Market.create({ baseAsset, quoteAsset });
          const call = await client.getMarketCollectedSwapFees(
            GetMarketCollectedSwapFeesRequest.create({ market: newMarket }),
            { meta: macaroon ? { macaroon } : undefined, interceptors }
          );
          return {
            data: call.response,
          };
        });
      },
      providesTags: ['Trade'],
    }),
    totalCollectedSwapFeesChange: build.query<string, { markets?: Market[]; prices?: CoinGeckoPriceResult }>({
      queryFn: async ({ markets, prices }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        const network = state.settings.network;
        const assets = state.settings.assets;
        return retryRtkRequest(async () => {
          if (!markets || !prices) return { data: '0' };
          let totalCollectedSwapFeesUntil24hAgo = 0;
          let totalCollectedSwapFeesUntilNow = 0;
          const marketsJSPB = markets.map(({ baseAsset, quoteAsset }) => {
            return Market.create({ baseAsset, quoteAsset });
          });
          // Calculate timeranges
          const milliseconds24hrs = 24 * 60 * 60 * 1000;
          const startDate = new Date(`${new Date().getFullYear()}-01-01T00:00:00`).toISOString();
          const minus24hDate = new Date(Date.now() - milliseconds24hrs).toISOString();
          const customPeriodUntil24hAgo = CustomPeriod.create({ startDate, endDate: minus24hDate });
          const timeRangeUntil24hAgo = TimeRange.create({ customPeriod: customPeriodUntil24hAgo });
          //
          const currentDate = new Date(Date.now()).toISOString();
          const customPeriodUntilNow = CustomPeriod.create({ startDate, endDate: currentDate });
          const timeRangeUntilNow = TimeRange.create({ customPeriod: customPeriodUntilNow });
          // We need to pass market because we don't have access to request parameters (protobuf-ts fixes this)
          const getMarketReportPromises = (market: Market) => [
            client
              .getMarketReport(GetMarketReportRequest.create({ market, timeRange: timeRangeUntil24hAgo }), {
                meta: macaroon ? { macaroon } : undefined,
              })
              .then((res) => ({
                marketReportUntil24hAgoResponse: res.response.report?.totalCollectedFees,
                market: { base: market.baseAsset, quote: market.quoteAsset },
              })),
            client
              .getMarketReport(GetMarketReportRequest.create({ market, timeRange: timeRangeUntilNow }), {
                meta: macaroon ? { macaroon } : undefined,
              })
              .then((res) => ({
                marketReportUntilNowResponse: res.response.report?.totalCollectedFees,
                market: { base: market.baseAsset, quote: market.quoteAsset },
              })),
          ];
          const results = await Promise.all(marketsJSPB.flatMap(getMarketReportPromises));

          const calculateTotalCollectedSwapFeesChange = (
            type: 'base' | 'quote',
            marketHash: string,
            r: any
          ) => {
            let amountSats = 0;
            if ('marketReportUntil24hAgoResponse' in r) {
              if (type === 'base') {
                amountSats = r.marketReportUntil24hAgoResponse?.baseAmount;
              } else {
                amountSats = r.marketReportUntil24hAgoResponse?.quoteAmount;
              }
            } else if ('marketReportUntilNowResponse' in r) {
              if (type === 'base') {
                amountSats = r.marketReportUntilNowResponse?.baseAmount;
              } else {
                amountSats = r.marketReportUntilNowResponse?.quoteAmount;
              }
            }
            const currentAsset = getAssetDataFromRegistry(marketHash, assets[network], 'L-BTC');
            if (!currentAsset) return;
            // Convert non-Lsats amount to fractional
            const amountSatsOrFractional = fromSatsToUnitOrFractional(
              amountSats,
              currentAsset.precision,
              isLbtcTicker(currentAsset.ticker),
              'L-sats'
            );
            // Convert non-Lbtc amount to Lbtc
            const marketSwapFeesChangeSats = convertAmountToFavoriteCurrency({
              asset: currentAsset,
              amount: amountSatsOrFractional,
              network: network,
              preferredCurrency: BTC_CURRENCY,
              preferredLbtcUnit: 'L-sats',
              prices: prices,
            });
            // Add Lsats base and quote amounts together
            if (marketSwapFeesChangeSats) {
              if ('marketReportUntil24hAgoResponse' in r) {
                totalCollectedSwapFeesUntil24hAgo += Number(marketSwapFeesChangeSats);
              }
              if ('marketReportUntilNowResponse' in r) {
                totalCollectedSwapFeesUntilNow += Number(marketSwapFeesChangeSats);
              }
            }
          };

          // Run calculation
          for (const r of results) {
            Object.entries(r.market).forEach(([type, marketHash]) =>
              calculateTotalCollectedSwapFeesChange(type as 'base' | 'quote', marketHash, r)
            );
          }

          // Calculate variation percentage
          const changePercentage =
            ((totalCollectedSwapFeesUntilNow - totalCollectedSwapFeesUntil24hAgo) /
              totalCollectedSwapFeesUntil24hAgo) *
            100;
          // If we calculate percentage variation with totalCollectedSwapFeesUntil24hAgo == zero, return 'N/A' instead of Infinity
          const change = isFinite(changePercentage)
            ? new Intl.NumberFormat('en-US', {
                maximumFractionDigits: 2,
                signDisplay: 'always',
              }).format(changePercentage)
            : 'N/A';
          return { data: change };
        });
      },
      providesTags: ['Trade'],
    }),
    totalCollectedSwapFees: build.query<number, { markets?: Market[]; prices?: CoinGeckoPriceResult }>({
      queryFn: async ({ markets, prices }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        const network = state.settings.network;
        const assets = state.settings.assets;
        return retryRtkRequest(async () => {
          if (!markets || !prices) return { data: 0 };
          let totalCollectedSwapFees = 0;

          // turns bare markets array into a Google JS ProtoBuff Markets Object
          const marketsJSPB = markets.map(({ baseAsset, quoteAsset }) => {
            return Market.create({ baseAsset, quoteAsset });
          });

          const results = await Promise.all(
            marketsJSPB.map((market) =>
              client
                .getMarketCollectedSwapFees(GetMarketCollectedSwapFeesRequest.create({ market }), {
                  meta: macaroon ? { macaroon } : undefined,
                  interceptors,
                })
                .then((res) => ({
                  market: [market.baseAsset, market.quoteAsset],
                  getMarketCollectedSwapFeesResponse: res.response,
                }))
            )
          );

          const calculateTotalCollectedSwapFees = (
            marketId: string,
            r: { market: string[]; getMarketCollectedSwapFeesResponse: GetMarketCollectedSwapFeesResponse }
          ) => {
            const marketIdCollectedSwapFees =
              r.getMarketCollectedSwapFeesResponse.totalCollectedFeesPerAsset[marketId];

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
              Number(marketIdCollectedSwapFees),
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
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          return {
            data: await client.reloadUtxos(ReloadUtxosRequest.create(), {
              meta: macaroon ? { macaroon } : undefined,
              interceptors,
            }),
          };
        });
      },
      invalidatesTags: ['MarketUTXOs', 'FeeUTXOs'],
    }),
    listUtxos: build.query<ListUtxosResponse, { accountIndex: number; page?: Page }>({
      queryFn: async ({ page, accountIndex }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.listUtxos(ListUtxosRequest.create({ accountIndex, page }), {
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
    getInfo: build.query<GetInfoResponse, void>({
      queryFn: async (arg, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.getInfo(GetInfoRequest.create(), {
            meta: macaroon ? { macaroon } : undefined,
            interceptors,
          });
          return { data: call.response };
        });
      },
      providesTags: ['Market', 'Fee', 'Trade'],
    }),
    listDeposits: build.query<Deposit[], { accountIndex: number }>({
      queryFn: async ({ accountIndex }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const call = await client.listDeposits(ListDepositsRequest.create({ accountIndex }), {
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
    listWithdrawals: build.query<Withdrawal[], { accountIndex: number; page: Page }>({
      queryFn: async ({ accountIndex, page }, { getState }) => {
        const state = getState() as RootState;
        const client = selectOperatorClient(state.settings.baseUrl);
        const macaroon = selectMacaroonCreds(state);
        return retryRtkRequest(async () => {
          const { pageNumber, pageSize } = page;
          const newPage = Page.create({ pageNumber, pageSize });
          const call = await client.listWithdrawals(
            ListWithdrawalsRequest.create({ page: newPage, accountIndex }),
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
      providesTags: ['MarketUTXOs', 'FeeUTXOs'],
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
  useTotalCollectedSwapFeesChangeQuery,
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
