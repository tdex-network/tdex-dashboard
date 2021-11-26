import { Col, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

import { useTypedSelector } from '../../app/store';
import { ListMarkets } from '../operator/Market/ListMarkets';
import { UnlockModalForm } from '../walletUnlocker/UnlockModalForm';
import { useIsReadyQuery } from '../walletUnlocker/walletUnlocker.api';

import { DashboardPanelLeft } from './DashboardPanelLeft';
import { DashboardPanelRight } from './DashboardPanelRight';

const { Title } = Typography;

export const Home = (): JSX.Element => {
  const { data: isReady } = useIsReadyQuery();
  const lbtcUnit = useTypedSelector(({ settings }) => settings.lbtcUnit);
  // UnlockWallet Modal
  const [isUnlockWalletModalVisible, setIsUnlockWalletModalVisible] = useState(false);
  const showUnlockWalletModal = () => setIsUnlockWalletModalVisible(true);
  const handleUnlockWalletModalCancel = () => setIsUnlockWalletModalVisible(false);

  useEffect(() => {
    if (isReady?.isInitialized && !isReady?.isUnlocked) {
      showUnlockWalletModal();
    }
  }, [isReady]);

  return (
    <>
      <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={2}>
        Dashboard Overview
      </Title>

      <Row gutter={{ xs: 4, sm: 8, md: 12 }} className="mb-8">
        <Col span={12}>
          <DashboardPanelLeft lbtcUnit={lbtcUnit} />
        </Col>
        <Col span={12}>
          <DashboardPanelRight lbtcUnit={lbtcUnit} />
        </Col>
      </Row>
      <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={2}>
        Markets
      </Title>
      <ListMarkets />
      <UnlockModalForm
        closable={false}
        handleUnlockWalletModalCancel={handleUnlockWalletModalCancel}
        isUnlockWalletModalVisible={isUnlockWalletModalVisible}
      />
    </>
  );
};
