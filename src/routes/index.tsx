import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from '../features/home/Home';

import { HOME_ROUTE } from './constants';

export const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path={HOME_ROUTE} component={Home} />
    </Switch>
  );
};
