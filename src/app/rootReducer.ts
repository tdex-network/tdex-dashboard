import { combineReducers } from '@reduxjs/toolkit';

import liquidApi from '../features/liquid.api';
import { settingsSlice } from '../features/settings/settingsSlice';
import { tdexApi } from '../features/tdex.api';

export const rootReducer = combineReducers({
  [settingsSlice.name]: settingsSlice.reducer,
  [liquidApi.reducerPath]: liquidApi.reducer,
  [tdexApi.reducerPath]: tdexApi.reducer,
});
