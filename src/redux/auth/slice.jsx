import { createSlice } from '@reduxjs/toolkit';
import { signup, signin, updateGoal, updateWeight } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
    goal: '',
    age: null,
    height: null,
    gender: 'male',
    weight: null,
  },
  token: null,
  isSignedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoadingTrue(state, _) {
      state.isLoading = true;
    },
    setLoadingFalse(state, _) {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(signup.pending, (state, action) => {
        console.log('Sign up pending');
        state.isLoading = true;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isSignedIn = false;
        state.error = action.payload.error;
        state.isLoading = false;
      })
      .addCase(signin.pending, (state, action) => {
        console.log('Sign in pending');
        state.isLoading = true;
      })
        .addCase(signin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signin.rejected, (state, action) => {
        state.isSignedIn = false;
        state.error = action.payload.error;
      })
      .addCase(updateGoal.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateGoal.fulfilled, (state, action) => {
        state.user.goal = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateWeight.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateWeight.fulfilled, (state, action) => {
        state.auth.weight = action.payload;
        state.isLoading = false;
        state.error = null;
      })
  },
});

export const { clearError } = authSlice.actions;
export const authReducer = authSlice.reducer;
