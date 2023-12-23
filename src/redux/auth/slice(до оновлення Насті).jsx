import { createSlice } from '@reduxjs/toolkit';
import { signup, signin } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isSignedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
        state.error = null;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isSignedIn = false;
        state.error = action.payload.error;
      })
      .addCase(signin.rejected, (state, action) => {
        state.isSignedIn = false;
        state.error = action.payload.error;
      });
  },
});

export const { clearError } = authSlice.actions;
export const authReducer = authSlice.reducer;
