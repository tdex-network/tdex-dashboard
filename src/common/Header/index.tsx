import Icon, { MenuOutlined, PlusCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, Layout, Menu, Row, Space } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as depositIcon } from '../../assets/images/deposit-green.svg';
import logo from '../../assets/images/tdex-logo.svg';
import { NewMarketForm } from '../../features/operator/NewMarketForm';
import { UnlockModalForm } from '../../features/walletUnlocker/UnlockModalForm';
import { ONBOARDING_PAIRING_ROUTE } from '../../routes/constants';

export const Header = (): JSX.Element => {
  const { Header } = Layout;
  // AddMarket Modal
  const [isAddMarketModalVisible, setIsAddMarketModalVisible] = useState(false);
  const showAddMarketModal = () => setIsAddMarketModalVisible(true);
  const handleAddMarketModalCancel = () => setIsAddMarketModalVisible(false);
  // UnlockWallet Modal
  const [isUnlockWalletModalVisible, setIsUnlockWalletModalVisible] = useState(false);
  const showUnlockWalletModal = () => setIsUnlockWalletModalVisible(true);
  const handleUnlockWalletModalCancel = () => setIsUnlockWalletModalVisible(false);

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to={ONBOARDING_PAIRING_ROUTE}>Connect</Link>
      </Menu.Item>
      <Menu.Item>
        <Button type="text" style={{ padding: 0 }} onClick={showUnlockWalletModal}>
          Unlock Wallet
        </Button>
        <UnlockModalForm
          handleUnlockWalletModalCancel={handleUnlockWalletModalCancel}
          isUnlockWalletModalVisible={isUnlockWalletModalVisible}
        />
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
            <Button icon={<PlusCircleOutlined />} onClick={showAddMarketModal}>
              CREATE NEW MARKET
            </Button>
            <NewMarketForm
              isAddMarketModalVisible={isAddMarketModalVisible}
              handleAddMarketModalCancel={handleAddMarketModalCancel}
            />
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
