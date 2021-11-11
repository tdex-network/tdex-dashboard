import { Col, Row, Typography } from 'antd';
import React from 'react';

import { ListMarkets } from '../operator/Market/ListMarkets';

import { DashboardPanelLeft } from './DashboardPanelLeft';
import { DashboardPanelRight } from './DashboardPanelRight';

export const Home = (): JSX.Element => {
  const { Title } = Typography;

  return (
    <>
      <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={2}>
        Dashboard Overview
      </Title>

      <Row gutter={{ xs: 4, sm: 8, md: 12 }} className="mb-8">
        <Col span={12}>
          <DashboardPanelLeft />
        </Col>
        <Col span={12}>
          <DashboardPanelRight />
        </Col>
      </Row>
      <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={2}>
        Markets
      </Title>
      <ListMarkets />
    </>
  );
};
