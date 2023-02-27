import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63f872df1dc21d5465bf737e.mockapi.io';

interface Credentials {
  email: string;
  password: string;
}

const register = createAsyncThunk('auth/register', async (credentials: Credentials) => {
  try {
    const { data } = await axios.post('/register', credentials);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return "An unexpected error occurred";
    }
  }
});

const login = createAsyncThunk('auth/login', async (credentials: Credentials) => {
  try {
    const { data } = await axios.post('/login', credentials);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return "An unexpected error occurred";
    }
  }
});

const authOperations = {register, login}

export default authOperations;
