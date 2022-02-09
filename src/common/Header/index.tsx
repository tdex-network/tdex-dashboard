import { PlusCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Col, Layout, Row, Space } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/images/tdex-logo.svg';
import { CREATE_MARKET_ROUTE, HOME_ROUTE, SETTINGS_ROUTE } from '../../routes/constants';

export const Header = (): JSX.Element => {
  const { Header } = Layout;
  const navigate = useNavigate();

  return (
    <Header className="h-100 mt-4">
      <Row>
        <Col span={12}>
          <Link to={HOME_ROUTE}>
            <img src={logo} alt="logo" style={{ height: '45px' }} />
          </Link>
        </Col>
        <Col span={12} className="d-flex justify-end align-center pr-4">
          <Space>
            <Button icon={<PlusCircleOutlined />} onClick={() => navigate(CREATE_MARKET_ROUTE)}>
              CREATE NEW MARKET
            </Button>
            <Button icon={<SettingOutlined />} onClick={() => navigate(SETTINGS_ROUTE)} />
          </Space>
        </Col>
      </Row>
    </Header>
  );
};
