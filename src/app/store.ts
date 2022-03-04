import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';

import { liquidApi } from '../features/liquid.api';
import { operatorApi } from '../features/operator/operator.api';
import { walletApi } from '../features/wallet/wallet.api';
import { walletUnlockerApi } from '../features/walletUnlocker/walletUnlocker.api';
import { tauriStorage } from '../utils';

import { rootReducer } from './rootReducer';

// Persist all except API slices in order to persist Settings
const persistConfig = {
  key: 'root',
  version: 0,
  storage: '__TAURI__' in window ? tauriStorage : localStorage,
  blacklist: [
    liquidApi.reducerPath,
    operatorApi.reducerPath,
    walletUnlockerApi.reducerPath,
    walletApi.reducerPath,
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: false,
    }).concat(
      liquidApi.middleware,
      operatorApi.middleware,
      walletUnlockerApi.middleware,
      walletApi.middleware
    ),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export const useTypedDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
