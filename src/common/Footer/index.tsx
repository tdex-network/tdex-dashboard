import { Row, Col, Layout } from 'antd';
import React from 'react';

import { useTypedSelector } from '../../app/store';
import { ProxyConnectionIndicator } from '../ProxyConnectionIndicator';

export const Footer = (): JSX.Element => {
  const { useProxy } = useTypedSelector(({ settings }) => settings);
  const { Footer } = Layout;

  return (
    <Footer>
      {useProxy ? (
        <Row className="w-100 text-end">
          <Col span={24}>
            <ProxyConnectionIndicator />
          </Col>
        </Row>
      ) : null}
    </Footer>
  );
};
