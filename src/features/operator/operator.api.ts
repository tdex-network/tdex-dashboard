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
} from '../../api-spec/generated/js/operator_pb';
import { Market, Fixed, Price, Balance } from '../../api-spec/generated/js/types_pb';
import type { AddressWithBlindingKey } from '../../api-spec/generated/js/types_pb';
import type { BalanceInfo } from '../../api-spec/generated/js/wallet_pb';
import type { RootState } from '../../app/store';
import { selectMacaroonCreds, selectOperatorClient } from '../settings/settingsSlice';

type MethodName =
  // Fee
  | 'getFeeAddress'
  | 'listFeeAddresses'
  | 'getFeeBalance'
  | 'claimFeeDeposits'
  | 'withdrawFee'
  | 'getFeeFragmenterAddress'
  | 'listFeeFragmenterAddresses'
  | 'getFeeFragmenterBalance'
  | 'feeFragmenterSplitFunds'
  | 'withdrawFeeFragmenter'
  // Market
  | 'getMarketInfo'
  | 'getMarketAddress'
  | 'listMarketAddresses'
  | 'getMarketBalance'
  | 'claimMarketDeposits'
  | 'newMarket'
  | 'openMarket'
  | 'closeMarket'
  | 'dropMarket'
  | 'withdrawMarket'
  | 'updateMarketPercentageFee'
  | 'updateMarketFixedFee'
  | 'updateMarketPrice'
  | 'updateMarketStrategy'
  | 'listMarkets'
  | 'getMarketFragmenterAddress'
  | 'listMarketFragmenterAddresses'
  | 'getMarketFragmenterBalance'
  | 'marketFragmenterSplitFunds'
  | 'withdrawMarketFragmenter'
  // Trades
  | 'getMarketCollectedSwapFees'
  | 'totalCollectedSwapFees'
  | 'listTrades'
  // Utxos
  | 'reloadUtxos'
  | 'listUtxos'
  // Webhook
  | 'addWebhook'
  | 'removeWebhook'
  | 'listWebhooks'
  //
  | 'getInfo'
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
    // Fee
    case 'getFeeAddress': {
      try {
        const feeAddressReply: GetFeeAddressReply = await client.getFeeAddress(
          new GetFeeAddressRequest(),
          metadata
        );
        return { data: feeAddressReply.getAddressWithBlindingKeyList().map((addr) => addr.toObject(false)) };
      } catch (error) {
        console.error('getFeeAddress', error);
        return { error: (error as RpcError).message };
      }
    }
    case 'listFeeAddresses': {
      try {
        const listFeeAddressesReply = await client.listFeeAddresses(new ListFeeAddressesRequest(), metadata);
        return {
          data: listFeeAddressesReply
            .getAddressWithBlindingKeyList()
            .map((addr: AddressWithBlindingKey) => addr.toObject(false)),
        };
      } catch (error) {
        console.error('listFeeAddresses', error);
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
        console.error('getFeeBalance', error);
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
        console.error('claimFeeDeposits', error);
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
        console.error('withdrawFee', error);
        return { error: (error as RpcError).message };
      }
    }
    case 'getFeeFragmenterAddress': {
      try {
        const { numOfAddresses } = body as { numOfAddresses: number };
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
    }
    case 'listFeeFragmenterAddresses': {
      try {
        return {
          data: (await client.listFeeFragmenterAddresses(new ListFeeFragmenterAddressesRequest(), metadata))
            .getAddressWithBlindingKeyList()
            .map((addr: AddressWithBlindingKey) => addr.toObject(false)),
        };
      } catch (error) {
        console.error('listFeeFragmenterAddresses', error);
        return { error: (error as RpcError).message };
      }
    }
    case 'getFeeFragmenterBalance': {
      try {
        return {
          data: (
            await client.getFeeFragmenterBalance(new GetFeeFragmenterBalanceRequest(), metadata)
          ).getBalanceMap(),
        };
      } catch (error) {
        console.error('getFeeFragmenterBalance', error);
        return { error: (error as RpcError).message };
      }
    }
    case 'feeFragmenterSplitFunds': {
      try {
        const { maxFragments, millisatsPerByte } = body as { maxFragments: number; millisatsPerByte: number };
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
    }
    case 'withdrawFeeFragmenter': {
      try {
        const { address, millisatsPerByte } = body as { address: string; millisatsPerByte: number };
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
    }
    // Market
    case 'getMarketInfo': {
      try {
        const { baseAsset, quoteAsset } = body as Market.AsObject;
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
    }
    case 'getMarketAddress': {
      try {
        const { baseAsset, quoteAsset } = body as Market.AsObject;
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
    }
    case 'listMarketAddresses': {
      try {
        const { baseAsset, quoteAsset } = body as Market.AsObject;
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
    }
    case 'getMarketBalance': {
      try {
        const { baseAsset, quoteAsset } = body as Market.AsObject;
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
          data: claimMarketDepositsReply.toObject(false),
        };
      } catch (error) {
        console.error('claimMarketDeposits', error);
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
        console.error('newMarket', error);
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
        console.error('openMarket', error);
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
        console.error('closeMarket', error);
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
        console.error('dropMarket', error);
        return { error: (error as RpcError).message };
      }
    }
    case 'withdrawMarket': {
      try {
        const { market, balance, address, millisatsPerByte } = body as {
          market: Market.AsObject;
          balance: Balance.AsObject;
          address: string;
          millisatsPerByte: number;
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
        console.error('updateMarketPercentageFee', error);
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
        console.error('updateMarketFixedFee', error);
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
        console.error('updateMarketPrice', error);
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
        console.error('updateMarketStrategy', error);
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
        console.error('listMarkets', error);
        return { error: (error as RpcError).message };
      }
    }
    case 'getMarketFragmenterAddress': {
      try {
        const { numOfAddresses } = body as { numOfAddresses: number };
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
    }
    case 'listMarketFragmenterAddresses': {
      try {
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
    }
    case 'getMarketFragmenterBalance': {
      try {
        return {
          data: (
            await client.getMarketFragmenterBalance(new GetMarketFragmenterBalanceRequest(), metadata)
          ).toObject(false),
        };
      } catch (error) {
        console.error('getMarketFragmenterBalance', error);
        return { error: (error as RpcError).message };
      }
    }
    case 'marketFragmenterSplitFunds': {
      try {
        const { market, millisatsPerByte } = body as { market: Market.AsObject; millisatsPerByte: number };
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
    }
    case 'withdrawMarketFragmenter': {
      try {
        const { address, millisatsPerByte } = body as { address: string; millisatsPerByte: number };
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
    }
    // Trades
    case 'listTrades': {
      try {
        const { market, page } = body as { market: Market.AsObject; page: Page.AsObject };
        const { pageNumber, pageSize } = page;
        const newPage = new Page();
        newPage.setPageNumber(pageNumber);
        newPage.setPageSize(pageSize);
        //
        const { baseAsset, quoteAsset } = market;
        const newMarket = new Market();
        newMarket.setBaseAsset(baseAsset);
        newMarket.setQuoteAsset(quoteAsset);
        //
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
        console.error('getMarketCollectedSwapFees', error);
        return { error: (error as RpcError).message };
      }
    }
    case 'totalCollectedSwapFees': {
      try {
        if (!body) return { data: 0 };
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
    }
    // Utxos
    case 'reloadUtxos': {
      try {
        return {
          data: await client.reloadUtxos(new ReloadUtxosRequest(), metadata),
        };
      } catch (error) {
        console.error('reloadUtxos', error);
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
        console.error('listUtxos', error);
        return { error: (error as RpcError).message };
      }
    }
    // Webhook
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
        console.error('addWebhook', error);
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
        console.error('removeWebhook', error);
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
        console.error('listWebhooks', error);
        return { error: (error as RpcError).message };
      }
    }
    //
    case 'getInfo': {
      try {
        const info = await client.getInfo(new GetInfoRequest(), metadata);
        return { data: info.toObject(false) };
      } catch (error) {
        console.error('getInfo', error);
        return { error: (error as RpcError).message };
      }
    }
    case 'listDeposits': {
      try {
        const { accountIndex } = body as { accountIndex: number };
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
        console.error('listWithdrawals', error);
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
  tagTypes: ['Market', 'MarketUTXOs', 'Fee', 'FeeUTXOs', 'Trade', 'Webhook'],
  endpoints: (build) => ({
    // Fee
    getFeeAddress: build.query<AddressWithBlindingKey.AsObject[], void>({
      query: () => ({ methodName: 'getFeeAddress' }),
    }),
    listFeeAddresses: build.query<AddressWithBlindingKey.AsObject[], void>({
      query: () => ({ methodName: 'listFeeAddresses' }),
    }),
    getFeeBalance: build.query<GetFeeBalanceReply.AsObject, void>({
      query: () => ({ methodName: 'getFeeBalance' }),
      providesTags: ['FeeUTXOs'],
    }),
    claimFeeDeposits: build.mutation<ClaimFeeDepositsReply, { outpointsList: TxOutpoint.AsObject[] }>({
      query: (body) => ({ methodName: 'claimFeeDeposits', body }),
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
      query: (body) => ({ methodName: 'withdrawFee', body }),
      invalidatesTags: ['FeeUTXOs'],
    }),
    getFeeFragmenterAddress: build.query<AddressWithBlindingKey.AsObject[], { numOfAddresses: number }>({
      query: (body) => ({ methodName: 'getFeeFragmenterAddress', body }),
    }),
    listFeeFragmenterAddresses: build.query<AddressWithBlindingKey.AsObject[], void>({
      query: () => ({ methodName: 'listFeeFragmenterAddresses' }),
    }),
    getFeeFragmenterBalance: build.query<Map<string, BalanceInfo>, void>({
      query: () => ({ methodName: 'getFeeFragmenterBalance' }),
    }),
    feeFragmenterSplitFunds: build.mutation<void, { maxFragments: number; millisatsPerByte: number }>({
      query: (body) => ({ methodName: 'feeFragmenterSplitFunds', body }),
      invalidatesTags: ['FeeUTXOs'],
    }),
    withdrawFeeFragmenter: build.mutation<void, { address: string; millisatsPerByte: number }>({
      query: (body) => ({ methodName: 'withdrawFeeFragmenter', body }),
    }),
    // Market
    getMarketInfo: build.query<MarketInfo.AsObject, Market.AsObject>({
      query: (body) => ({ methodName: 'getMarketInfo', body }),
      providesTags: ['Market'],
    }),
    getMarketAddress: build.query<AddressWithBlindingKey.AsObject[], Market.AsObject>({
      query: (body) => ({ methodName: 'getMarketAddress', body }),
    }),
    listMarketAddresses: build.query<AddressWithBlindingKey.AsObject[], Market.AsObject>({
      query: (body) => ({ methodName: 'listMarketAddresses', body }),
      providesTags: ['Market'],
    }),
    getMarketBalance: build.query<GetMarketBalanceReply.AsObject, Market.AsObject>({
      query: (body) => ({ methodName: 'getMarketBalance', body }),
      providesTags: ['MarketUTXOs'],
    }),
    claimMarketDeposits: build.mutation<
      ClaimMarketDepositsReply.AsObject,
      { market: Market.AsObject; outpointsList: TxOutpoint.AsObject[] }
    >({
      query: (body) => ({ methodName: 'claimMarketDeposits', body }),
      invalidatesTags: ['MarketUTXOs'],
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
    withdrawMarket: build.mutation<
      WithdrawMarketReply.AsObject,
      {
        market: Market.AsObject;
        balance: Balance.AsObject;
        address: string;
        millisatsPerByte: number;
      }
    >({
      query: (body) => ({ methodName: 'withdrawMarket', body }),
      invalidatesTags: ['MarketUTXOs'],
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
    getMarketFragmenterAddress: build.query<AddressWithBlindingKey.AsObject[], { numOfAddresses: number }>({
      query: (body) => ({ methodName: 'getMarketFragmenterAddress', body }),
    }),
    listMarketFragmenterAddresses: build.query<AddressWithBlindingKey.AsObject[], void>({
      query: () => ({ methodName: 'listMarketFragmenterAddresses' }),
    }),
    getMarketFragmenterBalance: build.query<Map<string, BalanceInfo>, void>({
      query: () => ({ methodName: 'getMarketFragmenterBalance' }),
    }),
    marketFragmenterSplitFunds: build.mutation<void, { market: Market.AsObject; millisatsPerByte: number }>({
      query: (body) => ({ methodName: 'marketFragmenterSplitFunds', body }),
      invalidatesTags: ['MarketUTXOs'],
    }),
    withdrawMarketFragmenter: build.mutation<void, { address: string; millisatsPerByte: number }>({
      query: (body) => ({ methodName: 'withdrawMarketFragmenter', body }),
    }),
    // Trades
    listTrades: build.query<TradeInfo.AsObject[], { market: Market.AsObject; page: Page.AsObject }>({
      query: (body) => ({ methodName: 'listTrades', body }),
      providesTags: ['Trade'],
    }),
    getMarketCollectedSwapFees: build.query<GetMarketCollectedSwapFeesReply.AsObject, Market.AsObject>({
      query: (body) => ({ methodName: 'getMarketCollectedSwapFees', body }),
      providesTags: ['Trade'],
    }),
    totalCollectedSwapFees: build.query<number, Market.AsObject[] | undefined>({
      query: (body) => ({ methodName: 'totalCollectedSwapFees', body }),
      providesTags: ['Trade'],
    }),
    // Utxos
    reloadUtxos: build.mutation<ReloadUtxosReply, void>({
      query: () => ({ methodName: 'reloadUtxos' }),
      invalidatesTags: ['MarketUTXOs', 'FeeUTXOs'],
    }),
    listUtxos: build.query<ListUtxosReply.AsObject, { accountIndex: number; page?: Page }>({
      query: () => ({ methodName: 'listUtxos' }),
      providesTags: ['MarketUTXOs', 'FeeUTXOs'],
    }),
    // Webhook
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
      providesTags: ['Webhook'],
    }),
    //
    getInfo: build.query<GetInfoReply.AsObject, void>({
      query: () => ({ methodName: 'getInfo' }),
      providesTags: ['Market', 'Fee', 'Trade'],
    }),
    listDeposits: build.query<Deposit.AsObject[], { accountIndex: number }>({
      query: (body) => ({ methodName: 'listDeposits', body }),
      providesTags: ['MarketUTXOs', 'FeeUTXOs'],
    }),
    listWithdrawals: build.query<Withdrawal.AsObject[], { accountIndex: number; page: Page.AsObject }>({
      query: (body) => ({ methodName: 'listWithdrawals', body }),
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
