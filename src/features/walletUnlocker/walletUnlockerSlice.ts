import { createSlice } from '@reduxjs/toolkit';

export const initialState = {};

export const walletUnlockerSlice = createSlice({
  name: 'walletUnlocker',
  initialState,
  reducers: {
    resetWalletUnlocker: () => initialState,
  },
});

export const { resetWalletUnlocker } = walletUnlockerSlice.actions;

export default walletUnlockerSlice.reducer;
