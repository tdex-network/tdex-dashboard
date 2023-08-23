import { notification } from 'antd';
import React, { useEffect } from 'react';
import { Navigate, Route, Routes as ReactRouterDomRoutes, useNavigate } from 'react-router-dom';

import type { GetStatusResponse } from '../api-spec/protobuf/gen/js/tdex-daemon/v2/wallet_pb';
import { configRecord } from '../app/config';
import type { RootState } from '../app/store';
import { useTypedDispatch, useTypedSelector } from '../app/store';
import type { NetworkString } from '../domain/misc';
import { Home } from '../features/home/Home';
import { FeeDeposit } from '../features/operator/Fee/FeeDeposit';
import { FeeWithdraw } from '../features/operator/Fee/FeeWithdraw';
import { CreateMarket } from '../features/operator/Market/CreateMarket';
import { MarketDeposit } from '../features/operator/Market/MarketDeposit';
import { MarketFragmenterWithdraw } from '../features/operator/Market/MarketFragmenterWithdraw';
import { MarketOverview } from '../features/operator/Market/MarketOverview';
import { MarketWithdraw } from '../features/operator/Market/MarketWithdraw';
import { Settings } from '../features/settings/Settings';
import {
  logout,
  setExplorerLiquidAPI,
  setExplorerLiquidUI,
  setNetwork,
} from '../features/settings/settingsSlice';
import { OnboardingConfirmMnemonic } from '../features/wallet/OnboardingConfirmMnemonic';
import { OnboardingCreateOrRestore } from '../features/wallet/OnboardingCreateOrRestore';
import { OnboardingPairing } from '../features/wallet/OnboardingPairing';
import { OnboardingRestoreMnemonic } from '../features/wallet/OnboardingRestoreMnemonic';
import { OnboardingShowMnemonic } from '../features/wallet/OnboardingShowMnemonic';
import { useGetInfoQuery, useGetStatusQuery } from '../features/wallet/wallet.api';

import {
  HOME_ROUTE,
  SETTINGS_ROUTE,
  FEE_DEPOSIT_ROUTE,
  ONBOARDING_PAIRING_ROUTE,
  ONBOARDING_SHOW_MNEMONIC_ROUTE,
  ONBOARDING_CONFIRM_MNEMONIC_ROUTE,
  CREATE_MARKET_ROUTE,
  FEE_WITHDRAW_ROUTE,
  MARKET_WITHDRAW_ROUTE,
  MARKET_DEPOSIT_ROUTE,
  MARKET_OVERVIEW_ROUTE,
  MARKET_WITHDRAW_FRAGMENTER_ROUTE,
  ONBOARDING_CREATE_OR_RESTORE_ROUTE,
  ONBOARDING_RESTORE_MNEMONIC_ROUTE,
} from './constants';

const PrivateRoute = ({ children }: any) => {
  const tdexdConnectUrl = useTypedSelector(({ settings }: RootState) => settings.tdexdConnectUrl);
  const isDaemonInitialized = useTypedSelector(
    ({ tdexService }: RootState) =>
      (tdexService.queries['getStatus(undefined)']?.data as GetStatusResponse)?.initialized
  );
  if (isDaemonInitialized && tdexdConnectUrl) {
    return children;
  } else if (!isDaemonInitialized && !tdexdConnectUrl) {
    return <Navigate to={ONBOARDING_PAIRING_ROUTE} />;
  } else if (!isDaemonInitialized && tdexdConnectUrl) {
    return <Navigate to={ONBOARDING_CREATE_OR_RESTORE_ROUTE} />;
  } else if (isDaemonInitialized && !tdexdConnectUrl) {
    return <Navigate to={ONBOARDING_PAIRING_ROUTE} />;
  }
};

export const Routes = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  // If tdexdConnectUrl, call IsReady to set data in store
  const { tdexdConnectUrl, proxyHealth, useProxy } = useTypedSelector(({ settings }: RootState) => settings);
  const { isSuccess: getStatusSuccess, isError: getStatusError } = useGetStatusQuery(undefined, {
    // Skip if no tdexdConnectUrl or if proxy is used but not serving
    skip: !tdexdConnectUrl || (useProxy && proxyHealth !== 'SERVING'),
  });
  const { data: daemonInfo } = useGetInfoQuery(undefined, {
    // Skip if no tdexdConnectUrl or if proxy is used but not serving
    skip: !tdexdConnectUrl || (useProxy && proxyHealth !== 'SERVING'),
  });

  useEffect(() => {
    if (daemonInfo?.network && getStatusSuccess) {
      const net = daemonInfo.network === 'mainnet' ? 'liquid' : daemonInfo.network;
      dispatch(setNetwork(net as NetworkString));
      dispatch(setExplorerLiquidAPI(configRecord?.[net as NetworkString]?.explorerLiquidAPI));
      dispatch(setExplorerLiquidUI(configRecord?.[net as NetworkString]?.explorerLiquidUI));
    }
  }, [daemonInfo, dispatch, getStatusSuccess]);

  useEffect(() => {
    (async () => {
      if (getStatusError) {
        navigate(ONBOARDING_PAIRING_ROUTE);
        notification.error({
          message: 'Service is not available or credentials are wrong',
          key: 'service unavailable',
        });
        dispatch(logout());
      }
    })();
  }, [dispatch, getStatusError, navigate, useProxy]);

  return (
    <ReactRouterDomRoutes>
      <Route path={ONBOARDING_PAIRING_ROUTE} element={<OnboardingPairing />} />
      <Route path={ONBOARDING_CREATE_OR_RESTORE_ROUTE} element={<OnboardingCreateOrRestore />} />
      <Route path={ONBOARDING_RESTORE_MNEMONIC_ROUTE} element={<OnboardingRestoreMnemonic />} />
      <Route path={ONBOARDING_SHOW_MNEMONIC_ROUTE} element={<OnboardingShowMnemonic />} />
      <Route path={ONBOARDING_CONFIRM_MNEMONIC_ROUTE} element={<OnboardingConfirmMnemonic />} />
      <Route path={SETTINGS_ROUTE} element={<Settings />} />
      {(getStatusSuccess || !tdexdConnectUrl) && (
        <>
          <Route
            path={HOME_ROUTE}
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path={MARKET_OVERVIEW_ROUTE}
            element={
              <PrivateRoute>
                <MarketOverview />
              </PrivateRoute>
            }
          />
          <Route
            path={FEE_DEPOSIT_ROUTE}
            element={
              <PrivateRoute>
                <FeeDeposit />
              </PrivateRoute>
            }
          />
          <Route
            path={FEE_WITHDRAW_ROUTE}
            element={
              <PrivateRoute>
                <FeeWithdraw />
              </PrivateRoute>
            }
          />
          <Route
            path={CREATE_MARKET_ROUTE}
            element={
              <PrivateRoute>
                <CreateMarket />
              </PrivateRoute>
            }
          />
          <Route
            path={MARKET_DEPOSIT_ROUTE}
            element={
              <PrivateRoute>
                <MarketDeposit />
              </PrivateRoute>
            }
          />
          <Route
            path={MARKET_WITHDRAW_ROUTE}
            element={
              <PrivateRoute>
                <MarketWithdraw />
              </PrivateRoute>
            }
          />
          <Route
            path={MARKET_WITHDRAW_FRAGMENTER_ROUTE}
            element={
              <PrivateRoute>
                <MarketFragmenterWithdraw />
              </PrivateRoute>
            }
          />
        </>
      )}
    </ReactRouterDomRoutes>
  );
};
