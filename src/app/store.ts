import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

import { operatorApi } from '../features/operator/operator.api';
import { walletApi } from '../features/wallet/wallet.api';
import { walletUnlockerApi } from '../features/walletUnlocker/walletUnlocker.api';

import { rootReducer } from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: false, // disable this middleware to avoid conflict with redux-persist
    }).concat(operatorApi.middleware, walletUnlockerApi.middleware, walletApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
