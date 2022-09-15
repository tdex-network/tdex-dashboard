import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isConnectUrlFromEnvVar: false,
};

export const walletUnlockerSlice = createSlice({
  name: 'walletUnlocker',
  initialState,
  reducers: {
    setIsConnectUrlFromEnvVar: (state, action: PayloadAction<boolean>) => {
      state.isConnectUrlFromEnvVar = action.payload;
    },
    resetWalletUnlocker: () => initialState,
  },
});

export const { resetWalletUnlocker, setIsConnectUrlFromEnvVar } = walletUnlockerSlice.actions;

export default walletUnlockerSlice.reducer;
