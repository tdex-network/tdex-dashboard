import { combineReducers } from '@reduxjs/toolkit';

import { liquidApi } from '../features/liquid.api';
import { operatorApi } from '../features/operator/operator.api';
import type { SettingsState } from '../features/settings/settingsSlice';
import { settingsSlice } from '../features/settings/settingsSlice';
import { walletApi } from '../features/wallet/wallet.api';
import { walletUnlockerApi } from '../features/walletUnlocker/walletUnlocker.api';
import { persist } from '../utils/storage';

export const rootReducer = combineReducers({
  settings: persist<SettingsState>({
    reducer: settingsSlice.reducer,
    key: settingsSlice.name,
    version: 0,
  }),
  [liquidApi.reducerPath]: liquidApi.reducer,
  [operatorApi.reducerPath]: operatorApi.reducer,
  [walletUnlockerApi.reducerPath]: walletUnlockerApi.reducer,
  [walletApi.reducerPath]: walletApi.reducer,
});
