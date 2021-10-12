import { operatorApi } from '../features/operator/operator.api';
import { settingsSlice } from '../features/settings/settingsSlice';
import { walletApi } from '../features/wallet/wallet.api';
import { walletUnlockerApi } from '../features/walletUnlocker/walletUnlocker.api';

export const rootReducer = {
  settings: settingsSlice.reducer,
  [operatorApi.reducerPath]: operatorApi.reducer,
  [walletUnlockerApi.reducerPath]: walletUnlockerApi.reducer,
  [walletApi.reducerPath]: walletApi.reducer,
};
