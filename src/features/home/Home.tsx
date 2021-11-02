import { Col, Row, Typography } from 'antd';
import React from 'react';

import { ListMarkets } from '../operator/ListMarkets';

import { DashboardPanelLeft } from './DashboardPanelLeft';
import { DashboardPanelRight } from './DashboardPanelRight';

export const Home = (): JSX.Element => {
  const { Title } = Typography;

  return (
    <>
      <Title className="title-grey" level={2}>
        Dashboard Overview
      </Title>

      <Row gutter={{ xs: 4, sm: 6, md: 8 }} style={{ marginBottom: '34px' }}>
        <Col span={12}>
          <DashboardPanelLeft />
        </Col>
        <Col span={12}>
          <DashboardPanelRight />
        </Col>
      </Row>
      <Title className="title-grey" level={2}>
        Markets
      </Title>
      <ListMarkets />
    </>
  );
};
