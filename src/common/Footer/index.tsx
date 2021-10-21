import { Row, Col, Layout } from 'antd';
import React from 'react';

export const Footer = (): JSX.Element => {
  const { Footer } = Layout;

  return (
    <Footer>
      <Row align="middle" justify="space-between">
        <Col span={22} offset={1}>
          SevenLabs © 2021
        </Col>
      </Row>
    </Footer>
  );
};
