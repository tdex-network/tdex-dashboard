import { Col, notification, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

import { useTypedSelector } from '../../app/store';
import { ListMarkets } from '../operator/Market/ListMarkets';
import { useLatestPriceFeedFromCoinGeckoQuery } from '../rates.api';
import { UnlockModalForm } from '../wallet/UnlockModalForm';
import { useGetInfoQuery, useGetStatusQuery } from '../wallet/wallet.api';

import { DashboardPanelLeft } from './DashboardPanelLeft';
import { DashboardPanelRight } from './DashboardPanelRight';

const { Title } = Typography;

export const Home = (): JSX.Element => {
  const { lbtcUnit, proxyHealth, useProxy } = useTypedSelector(({ settings }) => settings);
  const {
    data: status,
    refetch: refetchStatus,
    error: errorStatus,
  } = useGetStatusQuery(undefined, {
    // Skip if proxy is used but not serving
    skip: useProxy && proxyHealth !== 'SERVING',
  });
  const priceFeed = useLatestPriceFeedFromCoinGeckoQuery(undefined, { pollingInterval: 60000 });
  const { data: daemonInfo, isFetching: daemonInfoIsFetching } = useGetInfoQuery();
  // UnlockWallet Modal
  const [isUnlockWalletModalVisible, setIsUnlockWalletModalVisible] = useState(false);
  const showUnlockWalletModal = () => setIsUnlockWalletModalVisible(true);
  const handleUnlockWalletModalCancel = () => setIsUnlockWalletModalVisible(false);
  //
  const [, setProxyIsServingAndReady] = useState(false);

  useEffect(() => {
    if (errorStatus) {
      notification.error({
        message: 'Service is not available or credentials are wrong',
        key: 'service unavailable',
      });
    }
  }, [errorStatus]);

  useEffect(() => {
    if (proxyHealth === 'SERVING') {
      if (status?.initialized) {
        setProxyIsServingAndReady(true);
      } else {
        refetchStatus();
      }
    }
  }, [status?.initialized, proxyHealth, refetchStatus]);

  useEffect(() => {
    if (status?.initialized && !status?.unlocked) {
      showUnlockWalletModal();
    }
  }, [status]);

  return (
    <>
      <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={2}>
        Dashboard Overview
      </Title>
      <Row gutter={{ xs: 4, sm: 8, md: 12 }} className="mb-8">
        <Col xs={24} lg={12}>
          <DashboardPanelLeft
            lbtcUnit={lbtcUnit}
            priceFeed={priceFeed}
            daemonInfo={daemonInfo}
            daemonInfoIsFetching={daemonInfoIsFetching}
          />
        </Col>
        <Col xs={24} lg={12}>
          <DashboardPanelRight
            lbtcUnit={lbtcUnit}
            priceFeed={priceFeed}
            daemonInfo={daemonInfo}
            daemonInfoIsFetching={daemonInfoIsFetching}
          />
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
