import { Row, Col, Layout } from 'antd';
import React from 'react';

import { ConnectionIndicators } from '../ConnectionIndicators';

export const Footer = (): JSX.Element => {
  const { Footer } = Layout;

  return (
    <Footer>
      <Row className="w-100 text-end">
        <Col span={24}>
          <ConnectionIndicators />
        </Col>
      </Row>
    </Footer>
  );
};
