import { Col, notification, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

import { useTypedSelector } from '../../app/store';
import { ListMarkets } from '../operator/Market/ListMarkets';
import { useGetInfoQuery } from '../operator/operator.api';
import { useLatestPriceFeedFromCoinGeckoQuery } from '../rates.api';
import { UnlockModalForm } from '../walletUnlocker/UnlockModalForm';
import { useIsReadyQuery } from '../walletUnlocker/walletUnlocker.api';

import { DashboardPanelLeft } from './DashboardPanelLeft';
import { DashboardPanelRight } from './DashboardPanelRight';

const { Title } = Typography;

export const Home = (): JSX.Element => {
  const { lbtcUnit, proxyHealth, useProxy } = useTypedSelector(({ settings }) => settings);
  const {
    data: isReady,
    refetch: refetchIsReady,
    error: errorIsReady,
  } = useIsReadyQuery(undefined, {
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
    if (errorIsReady) {
      notification.error({
        message: 'Service is not available or credentials are wrong',
        key: 'service unavailable',
      });
    }
  }, [errorIsReady]);

  // Workaround for https://github.com/tdex-network/tdex-dashboard/issues/379
  // basically runs two times this effect, the first time proxyIsServingAndReady is ALWAYS false, altough right after becomes true
  // TODO refactor this logic

  /* useEffect(() => {
    if (isTauri && !proxyIsServingAndReady) {
      notification.error({
        message: 'Service is not available or credentials are wrong',
        key: 'service unavailable',
      });
    }
  }, [isTauri, proxyIsServingAndReady]); */

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
