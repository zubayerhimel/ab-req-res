import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './authActions';

const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;

const initialState = {
  loading: false,
  userId: null,
  token,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.loading = false;
      state.userId = null;
      state.token = null;
      state.error = null;
    },
    setCredentials: (state, { payload }) => {
      state.token = payload;
    },
  },
  extraReducers: {
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userId = payload.id;
      state.token = payload.token;
      state.success = true;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // login user
    [loginUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.token = payload.token;
      state.success = true;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { logout, setCredentials } = authSlice.actions;
export default authSlice.reducer;
