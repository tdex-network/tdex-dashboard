import { combineReducers } from '@reduxjs/toolkit';

import { liquidApi } from '../features/liquid.api';
import { ratesApi } from '../features/rates.api';
import { settingsSlice } from '../features/settings/settingsSlice';
import { tdexApi } from '../features/tdex.api';
import { walletSlice } from '../features/wallet/walletSlice';

export const rootReducer = combineReducers({
  [settingsSlice.name]: settingsSlice.reducer,
  [walletSlice.name]: walletSlice.reducer,
  [liquidApi.reducerPath]: liquidApi.reducer,
  [ratesApi.reducerPath]: ratesApi.reducer,
  [tdexApi.reducerPath]: tdexApi.reducer,
});
