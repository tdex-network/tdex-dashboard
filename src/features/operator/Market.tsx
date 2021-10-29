import { Button, Typography } from 'antd';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import type { Market as MarketType } from '../../api-spec/generated/js/types_pb';
import { HOME_ROUTE } from '../../routes/constants';

import { MarketSettings } from './MarketSettings';
import { WithdrawMarketForm } from './WithdrawMarketForm';
import {
  useCloseMarketMutation,
  useDropMarketMutation,
  useListMarketsQuery,
  useOpenMarketMutation,
} from './operator.api';

const { Text } = Typography;

export const Market = (): JSX.Element => {
  const { data: listMarkets, error: listMarketsError } = useListMarketsQuery();
  const [openMarket, { error: openMarketError }] = useOpenMarketMutation();
  const [closeMarket, { error: closeMarketError }] = useCloseMarketMutation();
  const [dropMarket, { error: dropMarketError }] = useDropMarketMutation();
  const { state } = useLocation<MarketType.AsObject>();
  const history = useHistory();
  const marketInfo = listMarkets?.marketsList.find(
    ({ market }) => market?.baseAsset === state.baseAsset && market?.quoteAsset === state.quoteAsset
  );

  const handleClickOpenMarket = (market?: MarketType.AsObject) => {
    if (!market) return;
    openMarket({ baseAsset: market.baseAsset, quoteAsset: market.quoteAsset });
  };

  const handleClickCloseMarket = (market?: MarketType.AsObject) => {
    if (!market) return;
    closeMarket({ baseAsset: market.baseAsset, quoteAsset: market.quoteAsset });
  };

  const handleClickDropMarket = (market?: MarketType.AsObject) => {
    if (!market) return;
    dropMarket({ baseAsset: market.baseAsset, quoteAsset: market.quoteAsset });
    history.push(HOME_ROUTE);
  };

  return (
    <>
      {marketInfo ? (
        <div className="card bordered mb-8">
          <div className="card-body">
            <div className="mb-4">
              <div className="card-actions justify-end">
                <Button>Deposit</Button>
                <WithdrawMarketForm />
                <MarketSettings market={marketInfo?.market} />
              </div>
              <p>
                <Text strong>Market Base Asset: </Text>
                {marketInfo?.market?.baseAsset}
              </p>
              <p>
                <Text strong>Market Quote Asset: </Text>
                {marketInfo?.market?.quoteAsset}
              </p>
              <p>
                <Text strong>Fee Basis Point: </Text>
                {marketInfo?.fee?.basisPoint}
              </p>
              <p>
                <Text strong>Base Fee: </Text>
                {marketInfo?.fee?.fixed?.baseFee}
              </p>
              <p>
                <Text strong>Quote Fee: </Text>
                {marketInfo?.fee?.fixed?.quoteFee}
              </p>
              <p>
                <Text strong>Tradable: </Text>
                {String(marketInfo?.tradable)}
              </p>
              <p>
                <Text strong>Strategy Type: </Text>
                {marketInfo?.strategyType}
              </p>
              <p>
                <Text strong>Account Index: </Text>
                {marketInfo?.accountIndex}
              </p>
              <p>
                <Text strong>Base Price: </Text>
                {marketInfo?.price?.basePrice}
              </p>
              <p>
                <Text strong>Quote Price: </Text>
                {marketInfo?.price?.quotePrice}
              </p>
              <p>
                <Text strong>Balance Base Amount: </Text>
                {marketInfo?.balance?.baseAmount}
              </p>
              <p>
                <Text strong>Balance Quote Amount: </Text>
                {marketInfo?.balance?.quoteAmount}
              </p>
            </div>
            <div className="card-actions">
              <Button onClick={() => handleClickOpenMarket(marketInfo?.market)}>Open Trading</Button>
              <Button onClick={() => handleClickCloseMarket(marketInfo?.market)}>Close Trading</Button>
              <Button onClick={() => handleClickDropMarket(marketInfo?.market)}>Drop</Button>
            </div>
          </div>
        </div>
      ) : (
        <p>No market found</p>
      )}
      {listMarketsError && <p>{listMarketsError}</p>}
      {openMarketError && <p>{openMarketError}</p>}
      {closeMarketError && <p>{closeMarketError}</p>}
      {dropMarketError && <p>{dropMarketError}</p>}
    </>
  );
};
