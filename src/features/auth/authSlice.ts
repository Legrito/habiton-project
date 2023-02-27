import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authOperations from "./authOperations"

interface User {
  id: string;
  email: string;
}

interface AuthState {
  user: User;
  token: string;
  isLoggedIn: boolean;
}

const initialState = {
  user: { id: "", email: ""},
  token: null,
  isLoggedIn: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authOperations.register.fulfilled, (state, action) => {
      state.user = { id: action.payload.id, email: action.payload.email };
      state.token = action.payload.token;
      state.isLoggedIn = true;
    })
    .addCase(authOperations.login.fulfilled, (state, action) => {
      state.user = { id: action.payload.id, email: action.payload.email };
      state.token = action.payload.token;
      state.isLoggedIn = true;
    })
  }
});

export default authSlice.reducer;
