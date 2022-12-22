import './marketListEmpty.less';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CREATE_MARKET_ROUTE } from '../../../../routes/constants';

export const MarketListEmpty = (): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(CREATE_MARKET_ROUTE);
  };

  return (
    <Row id="marketListEmpty" className="text-center panel panel__grey" align="middle">
      <Col span={24}>
        <Row>
          <Col span={16} offset={4}>
            <p className="mb-4" />
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Button icon={<PlusCircleOutlined />} onClick={handleClick}>
              CREATE NEW MARKET
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
