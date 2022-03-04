import { combineReducers } from '@reduxjs/toolkit';

import { liquidApi } from '../features/liquid.api';
import { operatorApi } from '../features/operator/operator.api';
import { settingsSlice } from '../features/settings/settingsSlice';
import { walletApi } from '../features/wallet/wallet.api';
import { walletUnlockerApi } from '../features/walletUnlocker/walletUnlocker.api';

export const rootReducer = combineReducers({
  [settingsSlice.name]: settingsSlice.reducer,
  [liquidApi.reducerPath]: liquidApi.reducer,
  [operatorApi.reducerPath]: operatorApi.reducer,
  [walletUnlockerApi.reducerPath]: walletUnlockerApi.reducer,
  [walletApi.reducerPath]: walletApi.reducer,
});
