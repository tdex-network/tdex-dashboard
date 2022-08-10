import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';

import { liquidApi } from '../features/liquid.api';
import { ratesApi } from '../features/rates.api';
import { tdexApi } from '../features/tdex.api';
import { tauriStorage } from '../utils';

import { rootReducer } from './rootReducer';

// Persist all except API slices in order to persist Settings
const persistConfig = {
  key: 'root',
  version: 0,
  storage: '__TAURI__' in window ? tauriStorage : localStorage,
  blacklist: [liquidApi.reducerPath, tdexApi.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: false,
    }).concat(liquidApi.middleware, ratesApi.middleware, tdexApi.middleware),
});
// @ts-ignore
// window['store'] = store;
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export const useTypedDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
