import { Button, Col, Row, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { MARKET_WITHDRAW_FRAGMENTER_ROUTE } from '../../routes/constants';

const { Title } = Typography;

export function ActionButtons(): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
        Actions
      </Title>
      <Row justify="space-between">
        <Col span={24} className="d-flex flex-wrap grid-gap">
          <Button className="action-button" onClick={() => navigate(MARKET_WITHDRAW_FRAGMENTER_ROUTE)}>
            Recovery Withdraw Markets
          </Button>
        </Col>
      </Row>
    </>
  );
}
