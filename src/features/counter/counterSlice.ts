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
      // we can "mutate" the state, because immer is under 
      // the hood and it deal with that
      state.value++;
    }
  }
});


export const { incremented } = counterSlice.actions;

export default counterSlice.reducer;
