import { Col, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

import { useTypedDispatch, useTypedSelector } from '../../app/store';
import { ListMarkets } from '../operator/Market/ListMarkets';
import { setProxyHealth } from '../settings/settingsSlice';
import { UnlockModalForm } from '../walletUnlocker/UnlockModalForm';
import { useIsReadyQuery } from '../walletUnlocker/walletUnlocker.api';

import { DashboardPanelLeft } from './DashboardPanelLeft';
import { DashboardPanelRight } from './DashboardPanelRight';

const { Title } = Typography;

export const Home = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const { lbtcUnit, proxyHealth } = useTypedSelector(({ settings }) => settings);
  const {
    data: isReady,
    refetch: refetchIsReady,
    error: errorIsReady,
  } = useIsReadyQuery(undefined, {
    skip: proxyHealth !== 'SERVING',
  });
  // UnlockWallet Modal
  const [isUnlockWalletModalVisible, setIsUnlockWalletModalVisible] = useState(false);
  const showUnlockWalletModal = () => setIsUnlockWalletModalVisible(true);
  const handleUnlockWalletModalCancel = () => setIsUnlockWalletModalVisible(false);
  //
  const [proxyIsServingAndReady, setProxyIsServingAndReady] = useState(false);

  useEffect(() => {
    if (errorIsReady) dispatch(setProxyHealth('NOT_SERVING'));
    // eslint-disable-next-line
  }, [errorIsReady]);

  useEffect(() => {
    if (proxyHealth === 'SERVING') {
      if (isReady?.isInitialized) {
        setProxyIsServingAndReady(true);
      } else {
        refetchIsReady();
      }
    }
  }, [isReady?.isInitialized, proxyHealth, refetchIsReady]);

  useEffect(() => {
    if (isReady?.isInitialized && !isReady?.isUnlocked) {
      showUnlockWalletModal();
    }
  }, [isReady]);

  if (!proxyIsServingAndReady) {
    return <div />;
  }

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
