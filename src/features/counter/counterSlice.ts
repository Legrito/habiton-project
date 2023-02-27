import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: string[];
}

const initialState: CounterState = {
  value: []
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented(state, action: PayloadAction<string>) {
      state.value.push(action.payload);
    },
    setValue(state, action: PayloadAction<string[]>) {
      state.value = action.payload;
    }
  }
});


export const { incremented, setValue } = counterSlice.actions;

export default counterSlice.reducer;
