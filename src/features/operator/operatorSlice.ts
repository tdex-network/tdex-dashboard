import { createSlice } from '@reduxjs/toolkit';

export const initialState = {};

export const operatorSlice = createSlice({
  name: 'operator',
  initialState,
  reducers: {
    resetOperator: () => initialState,
  },
});

export const { resetOperator } = operatorSlice.actions;

export default operatorSlice.reducer;
