import { createSlice } from '@reduxjs/toolkit';
import { signup, signin } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
    goal: '',
    age: null,
    height: null,
    avatarURL: '',
    gender: 'male',
    weight: null,
    activity: '1.2',
  },
  token: null,
  isAuthenticated: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(signin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signin.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.error.message;
      });
  },
});

export const { authenticate } = authSlice.actions;
export const authReducer = authSlice.reducer;
