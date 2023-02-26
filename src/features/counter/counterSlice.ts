import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  name: string;
  value: number;
}

const initialState: CounterState = {
  name: '',
  value: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    nameAdded(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    incremented(state) {
      // we can "mutate" the state, because immer is under 
      // the hood and it deal with that
      state.value++;
    },
    setValue(state, action: PayloadAction<number>) {
      state.value = action.payload;
    }
    // amountAdded(state, action: PayloadAction<number>) {
    //   state.value += action.payload;
    // },
  }
});


export const { incremented, setValue } = counterSlice.actions;

export default counterSlice.reducer;
