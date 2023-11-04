// authActions.js
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk('auth/register', async ({ email, password }, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/register`, { email, password }, config);
    // storing token to local storage for later

    localStorage.setItem('token', data.token);
    return data;
  } catch (error) {
    if (error.response && error.response.data.error) {
      return rejectWithValue(error.response.data.error);
    } else {
      return rejectWithValue(error.error);
    }
  }
});

export const loginUser = createAsyncThunk('auth/login', async ({ email, password }, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/login`, { email, password }, config);
    // storing token to local storage for later

    localStorage.setItem('token', data.token);
    return data;
  } catch (error) {
    if (error.response && error.response.data.error) {
      return rejectWithValue(error.response.data.error);
    } else {
      return rejectWithValue(error.error);
    }
  }
});
