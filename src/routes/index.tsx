import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from '../features/home/Home';
import { Market } from '../features/operator/Market';
import { Markets } from '../features/operator/Markets';
import { Settings } from '../features/settings/Settings';
import { Connect } from '../features/walletUnlocker/Connect';

import { HOME_ROUTE, MARKETS_ROUTE, CONNECT_ROUTE, SETTINGS_ROUTE, MARKET_ROUTE } from './constants';

export const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path={HOME_ROUTE} component={Home} />
      <Route exact path={MARKET_ROUTE} component={Market} />
      <Route exact path={MARKETS_ROUTE} component={Markets} />
      <Route exact path={CONNECT_ROUTE} component={Connect} />
      <Route exact path={SETTINGS_ROUTE} component={Settings} />
    </Switch>
  );
};
