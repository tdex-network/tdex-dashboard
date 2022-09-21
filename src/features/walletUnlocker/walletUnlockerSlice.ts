import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isPackaged: false,
};

export const walletUnlockerSlice = createSlice({
  name: 'walletUnlocker',
  initialState,
  reducers: {
    setIsPackaged: (state, action: PayloadAction<boolean>) => {
      state.isPackaged = action.payload;
    },
    resetWalletUnlocker: () => initialState,
  },
});

export const { resetWalletUnlocker, setIsPackaged } = walletUnlockerSlice.actions;

export default walletUnlockerSlice.reducer;
