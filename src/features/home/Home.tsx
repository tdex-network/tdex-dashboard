import { Col, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

import { useTypedDispatch, useTypedSelector } from '../../app/store';
import { ServiceUnavailableModal } from '../../common/ServiceUnavailableModal';
import { ListMarkets } from '../operator/Market/ListMarkets';
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
    // Skip if proxy is used and not serving
    skip: proxyHealth && proxyHealth !== 'SERVING',
  });
  // UnlockWallet Modal
  const [isUnlockWalletModalVisible, setIsUnlockWalletModalVisible] = useState(false);
  const showUnlockWalletModal = () => setIsUnlockWalletModalVisible(true);
  const handleUnlockWalletModalCancel = () => setIsUnlockWalletModalVisible(false);
  //
  const [proxyIsServingAndReady, setProxyIsServingAndReady] = useState(false);
  const [isServiceUnavailableModalVisible, setIsServiceUnavailableModalVisible] = useState<boolean>(false);

  useEffect(() => {
    if (errorIsReady) setIsServiceUnavailableModalVisible(true);
  }, [dispatch, errorIsReady]);

  useEffect(() => {
    if (proxyHealth === 'SERVING') {
      if (isReady?.initialized) {
        setProxyIsServingAndReady(true);
      } else {
        refetchIsReady();
      }
    }
  }, [isReady?.initialized, proxyHealth, refetchIsReady]);

  useEffect(() => {
    if (isReady?.initialized && !isReady?.unlocked) {
      showUnlockWalletModal();
    }
  }, [isReady]);

  if ('__TAURI__' in window && !proxyIsServingAndReady) {
    return (
      <ServiceUnavailableModal
        isServiceUnavailableModalVisible={isServiceUnavailableModalVisible}
        setIsServiceUnavailableModalVisible={setIsServiceUnavailableModalVisible}
      />
    );
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
