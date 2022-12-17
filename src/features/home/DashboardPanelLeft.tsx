import './dashboardPanelLeft.less';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Grid, Row, Typography } from 'antd';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { GetInfoResponse } from '../../api-spec/protobuf/gen/js/tdex-daemon/v1/operator_pb';
import type { Market } from '../../api-spec/protobuf/gen/js/tdex/v1/types_pb';
import type { RootState } from '../../app/store';
import { useTypedSelector } from '../../app/store';
import { CREATE_MARKET_ROUTE } from '../../routes/constants';
import type { LbtcUnit } from '../../utils';
import { LBTC_ASSET, fromUnitToUnit } from '../../utils';
import {
  useListMarketsQuery,
  useTotalCollectedSwapFeesChangeQuery,
  useTotalCollectedSwapFeesQuery,
} from '../operator/operator.api';
import type { PriceFeedQueryResult } from '../rates.api';
import { convertAmountToFavoriteCurrency } from '../rates.api';

const { Title } = Typography;
const { useBreakpoint } = Grid;

interface DashboardPanelLeftProps {
  lbtcUnit: LbtcUnit;
  priceFeed: PriceFeedQueryResult;
  daemonInfo?: GetInfoResponse;
  daemonInfoIsFetching: boolean;
}

export const DashboardPanelLeft = ({
  lbtcUnit,
  priceFeed,
  daemonInfo,
  daemonInfoIsFetching,
}: DashboardPanelLeftProps): JSX.Element => {
  const navigate = useNavigate();
  const { currency, network } = useTypedSelector(({ settings }: RootState) => settings);
  const { data: listMarkets } = useListMarketsQuery();
  const { data: prices, isLoading: isLoadingPrices, isError: isErrorPrices } = priceFeed;
  const activeMarkets = listMarkets?.markets.filter((m) => m.tradable).length || 0;
  const pausedMarkets = (listMarkets?.markets.length ?? 0) - activeMarkets;
  const markets = listMarkets?.markets.map((m) => m.market as Market);
  const { data: totalCollectedSwapFeesSats } = useTotalCollectedSwapFeesQuery({
    markets: markets,
    prices: prices,
  });
  const { data: totalCollectedSwapFeesChange } = useTotalCollectedSwapFeesChangeQuery({
    markets: markets,
    prices: prices,
  });
  const [totalCollectedSwapFeesAsFavoriteCurrency, setTotalCollectedSwapFeesAsFavoriteCurrency] =
    useState<string>();
  const screens = useBreakpoint();

  useEffect(() => {
    if (network === daemonInfo?.network && !daemonInfoIsFetching) {
      if (totalCollectedSwapFeesSats !== undefined) {
        const totalCollectedSwapFeesInLbtcUnit = fromUnitToUnit(
          totalCollectedSwapFeesSats,
          'L-sats',
          lbtcUnit
        );
        setTotalCollectedSwapFeesAsFavoriteCurrency(
          convertAmountToFavoriteCurrency({
            asset: LBTC_ASSET[network],
            amount: totalCollectedSwapFeesInLbtcUnit,
            network: network,
            preferredCurrency: currency,
            preferredLbtcUnit: lbtcUnit,
            prices: prices,
          })
        );
      }
    } else {
      setTotalCollectedSwapFeesAsFavoriteCurrency(undefined);
    }
  }, [
    currency,
    daemonInfo?.network,
    daemonInfoIsFetching,
    lbtcUnit,
    network,
    prices,
    totalCollectedSwapFeesSats,
  ]);

  return (
    <div id="dashboard-panel-left-container" className={classNames('panel w-100', { 'h-100': screens.lg })}>
      <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
        Total Earned
      </Title>
      <Row>
        <Col className="dm-mono dm-mono__xxxxxx" span={16}>
          {!isLoadingPrices && !isErrorPrices && totalCollectedSwapFeesAsFavoriteCurrency ? (
            <>
              {currency.symbol}
              {totalCollectedSwapFeesAsFavoriteCurrency}
            </>
          ) : (
            'N/A'
          )}
          {currency.value === 'btc' && totalCollectedSwapFeesAsFavoriteCurrency && (
            <span className="dm-sans dm-sans__xxxx ml-3">{lbtcUnit}</span>
          )}
        </Col>
        <Col
          className={classNames('total-earned-change', {
            'total-earned-change__is-negative': totalCollectedSwapFeesChange?.charAt(0) === '-',
          })}
          span={8}
        >
          <div>24h</div>
          {totalCollectedSwapFeesChange === 'N/A' ? (
            <div>N/A</div>
          ) : (
            <div>{totalCollectedSwapFeesChange}%</div>
          )}
        </Col>
      </Row>
      <Divider style={{ margin: '12px 0 40px 0' }} />
      <Row gutter={{ xs: 10, sm: 30, md: 60 }}>
        <Col span={8} className="market-stats market-stats__active">
          <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
            Active Markets
          </Title>
          <div className="dm-mono dm-mono__xxxxxx">{activeMarkets}</div>
        </Col>
        <Col span={8} className="market-stats market-stats">
          <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
            Paused Markets
          </Title>
          <div className="dm-mono dm-mono__xxxxxx">{pausedMarkets}</div>
        </Col>
        <Col span={8}>
          <Button
            className="create-new-btn"
            icon={<PlusCircleOutlined />}
            onClick={() => navigate(CREATE_MARKET_ROUTE)}
          >
            CREATE NEW
          </Button>
        </Col>
      </Row>
    </div>
  );
};
