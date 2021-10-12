import React from 'react';

import Shell from './common/Shell';
import { Routes } from './routes';

export const App = (): JSX.Element => {
  return (
    <Shell>
      <Routes />
    </Shell>
  );
};
