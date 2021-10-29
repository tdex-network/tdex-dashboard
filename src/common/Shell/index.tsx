import './shell.less';
import { Col, Row, Layout } from 'antd';
import React from 'react';

import { Footer } from '../Footer';
import { Header } from '../Header';

interface Props {
  children: React.ReactNode;
}

const { Content } = Layout;

export const Shell = ({ children }: Props): JSX.Element => {
  return (
    <Layout id="shell">
      <Header />
      <Content>
        <Row>
          <Col span={22} offset={1}>
            {children}
          </Col>
        </Row>
      </Content>
      <Footer />
    </Layout>
  );
};

export default Shell;
