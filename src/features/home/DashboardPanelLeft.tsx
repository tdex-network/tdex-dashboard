import './dashboardPanelLeft.less';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Typography } from 'antd';
import Big from 'big.js';
import { useNavigate } from 'react-router-dom';

import type { Market } from '../../api-spec/generated/js/tdex/v1/types_pb';
import type { RootState } from '../../app/store';
import { useTypedSelector } from '../../app/store';
import { CREATE_MARKET_ROUTE } from '../../routes/constants';
import type { LbtcUnit } from '../../utils';
import { LBTC_ASSET } from '../../utils';
import { useListMarketsQuery, useTotalCollectedSwapFeesQuery } from '../operator/operator.api';
import type { PriceFeedQueryResult } from '../rates.api';
import { convertAssetToCurrency } from '../rates.api';

const { Title } = Typography;

interface DashboardPanelLeftProps {
  lbtcUnit: LbtcUnit;
  priceFeed: PriceFeedQueryResult;
}

export const DashboardPanelLeft = ({ lbtcUnit, priceFeed }: DashboardPanelLeftProps): JSX.Element => {
  const navigate = useNavigate();
  const { currency, network } = useTypedSelector(({ settings }: RootState) => settings);
  const { data: listMarkets } = useListMarketsQuery();
  const { data: prices, isLoading: isLoadingPrices, isError: isErrorPrices } = priceFeed;
  const activeMarkets = listMarkets?.marketsList.filter((m) => m.tradable).length || 0;
  const pausedMarkets = (listMarkets?.marketsList.length ?? 0) - activeMarkets;
  //
  const markets = listMarkets?.marketsList.map((m) => m.market as Market.AsObject);
  const { data: totalCollectedSwapFees } = useTotalCollectedSwapFeesQuery(markets);

  const TotalCollectedSwapFees =
    totalCollectedSwapFees &&
    convertAssetToCurrency({
      asset: LBTC_ASSET[network],
      amount: Big(totalCollectedSwapFees),
      network: network,
      preferredCurrency: currency,
      preferredLbtcUnit: lbtcUnit,
      prices: prices,
      useSymbol: true,
    });

  return (
    <div id="dashboard-panel-left-container" className="panel w-100 h-100">
      <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
        Total Earned
      </Title>
      <Row>
        <Col className="dm-mono dm-mono__xxxxxx" span={16}>
          {!isLoadingPrices && !isErrorPrices && TotalCollectedSwapFees}
        </Col>
        <Col className="total-earned-change" span={8}>
          <div>24h</div>
          <div>+2.85%</div>
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
