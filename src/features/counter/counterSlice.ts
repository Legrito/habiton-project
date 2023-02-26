import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented(state) {
      state.value++;
    },
    setValue(state, action: PayloadAction<number>) {
      state.value = action.payload;
    }
  }
});


export const { incremented, setValue } = counterSlice.actions;

export default counterSlice.reducer;
