import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
    <Switch>
      <Route exact path={HOME_ROUTE} component={Home} />
      <Route exact path={MARKET_ROUTE} component={Market} />
      <Route exact path={SETTINGS_ROUTE} component={Settings} />
      <Route exact path={FEE_DEPOSIT_ROUTE} component={FeeDeposit} />
      <Route exact path={ONBOARDING_PAIRING_ROUTE} component={OnboardingPairing} />
      <Route exact path={ONBOARDING_SHOW_MNEMONIC_ROUTE} component={OnboardingShowMnemonic} />
      <Route exact path={ONBOARDING_CONFIRM_MNEMONIC_ROUTE} component={OnboardingConfirmMnemonic} />
    </Switch>
  );
};
