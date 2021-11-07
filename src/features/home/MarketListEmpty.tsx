import './marketListEmpty.less';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import React from 'react';

export const MarketListEmpty = (): JSX.Element => {
  const handleClick = () => {
    //
    console.log('');
  };

  return (
    <Row id="marketListEmpty" className="text-center" align="middle">
      <Col span={24}>
        <Row>
          <Col span={16} offset={4}>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tecididunt ut labore et
              dolore magna aliqua.
            </p>
          </Col>
        </Row>
        <Row>
          <Col span={6} offset={9}>
            <Button icon={<PlusCircleOutlined />} onClick={handleClick} className="w-100">
              CREATE NEW MARKET
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
