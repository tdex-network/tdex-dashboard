import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type collectedFeesRecord = Record<string, number>;

export type CollectedFeesPayload = {
  date: string;
  collectedFees: number;
};

export interface OperatorState {
  collectedFeesPerDay: collectedFeesRecord;
}

export const initialState: OperatorState = {
  collectedFeesPerDay: { '0/0/0': 0 } as collectedFeesRecord,
};

export const operatorSlice = createSlice({
  name: 'operator',
  initialState,
  reducers: {
    resetOperator: () => initialState,
    setCollectedFeeForDate: (state, action: PayloadAction<CollectedFeesPayload>) => {
      const { collectedFees, date } = action.payload;
      state.collectedFeesPerDay[date] = collectedFees;
    },
  },
});

export const { setCollectedFeeForDate, resetOperator } = operatorSlice.actions;

export default operatorSlice.reducer;
