import { createSlice } from '@reduxjs/toolkit';

export const initialState: any = {
  collectedFeesPerDay: {
    '0/0/0': 0,
  },
};

export const operatorSlice = createSlice({
  name: 'operator',
  initialState,
  reducers: {
    resetOperator: () => initialState,
    setCollectedFeeForDate: (state, action) => {
      const { collectedFees, date } = action.payload;
      state.collectedFeesPerDay[date] = collectedFees;
    },
  },
});

export const { setCollectedFeeForDate, resetOperator } = operatorSlice.actions;

export default operatorSlice.reducer;
