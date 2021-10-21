import { MenuOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, Layout, Menu, Row, Space } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/images/tdex-logo.png';
import { NewMarketForm } from '../../features/operator/NewMarketForm';
import { UnlockModalForm } from '../../features/walletUnlocker/UnlockModalForm';
import { useIsReadyQuery } from '../../features/walletUnlocker/walletUnlocker.api';
import { SET_PASSWORD_ROUTE, MARKETS_ROUTE } from '../../routes/constants';

export const Header = (): JSX.Element => {
  const { Header } = Layout;
  const { data: isReady } = useIsReadyQuery();
  const history = useHistory();

  const handleClickMarkets = () => {
    history.push(MARKETS_ROUTE);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a href={SET_PASSWORD_ROUTE}>Connect</a>
      </Menu.Item>
      <Menu.Item>
        <UnlockModalForm />
      </Menu.Item>
      <Menu.Item>
        <a>Disconnect</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ height: '100%' }}>
      <Row justify="end" style={{ height: '45px' }}>
        <Col>
          <span>{`Status Unlocked ${isReady?.isUnlocked} - Initialized ${isReady?.isInitialized} - Synced ${isReady?.isSynced}`}</span>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <a href="/">
            <img src={logo} alt="logo" style={{ height: '45px' }} />
          </a>
        </Col>
        <Col span={6} className="d-flex align-center">
          <Button onClick={handleClickMarkets}>Markets</Button>
        </Col>
        <Col span={12} className="d-flex justify-end align-center pr-4">
          <Space>
            <Button href="/settings">Settings</Button>
            <NewMarketForm />
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                <MenuOutlined />
              </a>
            </Dropdown>
          </Space>
        </Col>
      </Row>
    </Header>
  );
};
