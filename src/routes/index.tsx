import React from 'react';
import { Route, Routes as ReactRouterDomRoutes } from 'react-router-dom';

import { Home } from '../features/home/Home';
import { FeeDeposit } from '../features/operator/FeeDeposit';
import { Market } from '../features/operator/Market';
import { Settings } from '../features/settings/Settings';
import { OnboardingConfirmMnemonic } from '../features/walletUnlocker/OnboardingConfirmMnemonic';
import { OnboardingPairing } from '../features/walletUnlocker/OnboardingPairing';
import { OnboardingShowMnemonic } from '../features/walletUnlocker/OnboardingShowMnemonic';

import {
  HOME_ROUTE,
  SETTINGS_ROUTE,
  MARKET_ROUTE,
  FEE_DEPOSIT_ROUTE,
  ONBOARDING_PAIRING_ROUTE,
  ONBOARDING_SHOW_MNEMONIC_ROUTE,
  ONBOARDING_CONFIRM_MNEMONIC_ROUTE,
} from './constants';

export const Routes = (): JSX.Element => {
  return (
    <ReactRouterDomRoutes>
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path={MARKET_ROUTE} element={<Market />} />
      <Route path={SETTINGS_ROUTE} element={<Settings />} />
      <Route path={FEE_DEPOSIT_ROUTE} element={<FeeDeposit />} />
      <Route path={ONBOARDING_PAIRING_ROUTE} element={<OnboardingPairing />} />
      <Route path={ONBOARDING_SHOW_MNEMONIC_ROUTE} element={<OnboardingShowMnemonic />} />
      <Route path={ONBOARDING_CONFIRM_MNEMONIC_ROUTE} element={<OnboardingConfirmMnemonic />} />
    </ReactRouterDomRoutes>
  );
};
