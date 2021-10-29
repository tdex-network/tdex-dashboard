import Icon, { MenuOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, Layout, Menu, Row, Space } from 'antd';
import React from 'react';

import { ReactComponent as depositIcon } from '../../assets/images/deposit-green.svg';
import logo from '../../assets/images/tdex-logo.png';
import { NewMarketForm } from '../../features/operator/NewMarketForm';
import { UnlockModalForm } from '../../features/walletUnlocker/UnlockModalForm';
import { SET_PASSWORD_ROUTE } from '../../routes/constants';

export const Header = (): JSX.Element => {
  const { Header } = Layout;

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
      <Row>
        <Col span={12}>
          <a href="/">
            <img src={logo} alt="logo" style={{ height: '45px' }} />
          </a>
        </Col>
        <Col span={12} className="d-flex justify-end align-center pr-4">
          <Space>
            <Button className="rotate-icon" icon={<Icon component={depositIcon} />}>
              WITHDRAW
            </Button>
            <Button icon={<Icon component={depositIcon} />}>DEPOSIT</Button>
            <NewMarketForm />
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                <MenuOutlined />
              </a>
            </Dropdown>
            <Button icon={<SettingOutlined />} href="/settings" />
          </Space>
        </Col>
      </Row>
    </Header>
  );
};
