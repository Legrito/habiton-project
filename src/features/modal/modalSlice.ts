import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalToggled(state) {
      state.isOpen = !state.isOpen;
    }
  }
});

export const { modalToggled } = modalSlice.actions;

export default modalSlice.reducer;