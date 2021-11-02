import './dashboardPanelLeft.less';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Typography } from 'antd';
import React, { useState } from 'react';

import { NewMarketForm } from '../operator/NewMarketForm';
import { useListMarketsQuery } from '../operator/operator.api';

const { Title } = Typography;

export const DashboardPanelLeft = (): JSX.Element => {
  const { data: listMarkets } = useListMarketsQuery();
  const activeMarkets = listMarkets?.marketsList.filter((m) => m.tradable).length || 0;
  const pausedMarkets = (listMarkets?.marketsList.length ?? 0) - activeMarkets;
  // AddMarket Modal
  const [isAddMarketModalVisible, setIsAddMarketModalVisible] = useState(false);
  const showAddMarketModal = () => setIsAddMarketModalVisible(true);
  const handleAddMarketModalCancel = () => setIsAddMarketModalVisible(false);

  return (
    <div id="dashboard-panel-left-container" className="panel">
      <Title className="title-grey" level={3}>
        Total Earned
      </Title>
      <Row>
        <Col className="white-value white-value__big" span={12}>
          $18,000.32
        </Col>
        <Col className="total-earned-change" span={12}>
          <div>24h</div>
          <div>+2.85%</div>
        </Col>
      </Row>
      <Divider style={{ margin: '12px 0 40px 0' }} />
      <Row gutter={{ xs: 10, sm: 30, md: 60 }}>
        <Col span={8} className="market-stats market-stats__active">
          <Title className="title-grey" level={3}>
            Active Markets
          </Title>
          <div className="white-value white-value__big">{activeMarkets}</div>
        </Col>
        <Col span={8} className="market-stats market-stats">
          <Title className="title-grey" level={3}>
            Paused Markets
          </Title>
          <div className="white-value white-value__big">{pausedMarkets}</div>
        </Col>
        <Col span={8}>
          <Button className="create-new-btn" icon={<PlusCircleOutlined />} onClick={showAddMarketModal}>
            CREATE NEW
          </Button>
          <NewMarketForm
            isAddMarketModalVisible={isAddMarketModalVisible}
            handleAddMarketModalCancel={handleAddMarketModalCancel}
          />
        </Col>
      </Row>
    </div>
  );
};
