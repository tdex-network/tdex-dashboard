import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isPackaged: false,
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setIsPackaged: (state, action: PayloadAction<boolean>) => {
      state.isPackaged = action.payload;
    },
    resetWallet: () => initialState,
  },
});

export const { resetWallet, setIsPackaged } = walletSlice.actions;

export default walletSlice.reducer;
