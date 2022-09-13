import './shell.less';
import { Col, Row, Layout } from 'antd';
import clx from 'classnames';
import React from 'react';
import { useLocation } from 'react-router-dom';

import { ReactComponent as TdexLogo } from '../../assets/images/tdex-logo.svg';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { HeaderOnboarding } from '../HeaderOnboarding';

interface Props {
  children: React.ReactNode;
}

const { Content } = Layout;

export const Shell = ({ children }: Props): JSX.Element => {
  const location = useLocation();
  const isOnboarding = location.pathname.startsWith('/onboarding');

  return (
    <Layout id="shell">
      {isOnboarding ? <HeaderOnboarding /> : <Header />}
      <Content className={clx({ 'is-onboarding': isOnboarding })}>
        {isOnboarding ? (
          <div className="w-100">
            <Row justify="center" className="mb-4">
              <Col>
                <div className="text-center">
                  <TdexLogo />
                </div>
              </Col>
            </Row>
            <Row className="w-100">
              <Col span={14} offset={5}>
                {children}
              </Col>
            </Row>
          </div>
        ) : (
          <Row>
            <Col span={20} offset={2}>
              {children}
            </Col>
          </Row>
        )}
      </Content>
      <Footer />
    </Layout>
  );
};

export default Shell;
