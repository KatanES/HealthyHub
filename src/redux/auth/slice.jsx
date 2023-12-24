import { createSlice } from '@reduxjs/toolkit';
import {
  signup,
  signin,
  signOut,
  updateWeight,
  updateGoal,
  refreshUser,
} from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleSignUpFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isAuthenticated = true;
  state.error = null;
  state.isLoading = false;
};

const handleSignUpRejected = (state, action) => {
  state.isAuthenticated = false;
  state.error = action.error.message;
  state.isLoading = false;
};

const handleSignInFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isAuthenticated = true;
  state.isLoading = false;
  state.error = null;
};

const handleSignInRejected = (state, action) => {
  state.isAuthenticated = false;
  state.error = action.error.message;
};

const handleSignOutFulfilled = (state) => {
  state.user = {
    name: null,
    email: null,
    goal: '',
    age: null,
    height: null,
    avatarURL: '',
    gender: 'male',
    weight: null,
    activity: '1.2',
  };
  state.token = null;
  state.isAuthenticated = false;
  state.isLoading = false;
  state.error = null;

  state.isRefreshing = false;
};

const handleSignOutRejected = (state, action) => {
  state.user = {
    name: null,
    email: null,
    goal: '',
    age: null,
    height: null,
    avatarURL: '',
    gender: 'male',
    weight: null,
    activity: '1.2',
  };
  state.token = null;
  state.isLoading = false;
  state.error = action.payload;
};

const handleUpdateWeightFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  // state.user.weight = action.payload.weight; //THERE
  // state.lastWeightDate = action.payload.date; //THERE
  state.user.weight = action.meta.arg.weight;
};

const handleUpdateGoalFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.user.goal = action.payload.goal;
};

export const handleRefreshUserPending = (state) => {
  state.isRefreshing = true;
};

export const handleFulfilledRefresh = (state, action) => {
  state.user = action.payload[0];
  state.isAuthenticated = true;
  state.isLoading = false;
  state.error = null;
};

export const handleRejectedRefresh = (state) => {
  state.token = null;
  state.isRefreshing = false;
};

export const initialState = {
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
  lastWeightDate: null,
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
      .addCase(signup.pending, handlePending)
      .addCase(signup.fulfilled, handleSignUpFulfilled)
      .addCase(signup.rejected, handleSignUpRejected)
      .addCase(signin.pending, handlePending)
      .addCase(signin.fulfilled, handleSignInFulfilled)
      .addCase(signin.rejected, handleSignInRejected)
      .addCase(signOut.pending, handlePending)
      .addCase(signOut.fulfilled, handleSignOutFulfilled)
      .addCase(signOut.rejected, handleSignOutRejected)
      .addCase(updateWeight.pending, handlePending)
      .addCase(updateWeight.fulfilled, handleUpdateWeightFulfilled)
      .addCase(updateWeight.rejected, handleRejected)
      .addCase(updateGoal.pending, handlePending)
      .addCase(updateGoal.fulfilled, handleUpdateGoalFulfilled)
      .addCase(updateGoal.rejected, handleRejected)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addCase(refreshUser.rejected, handleRejectedRefresh)
      .addCase(refreshUser.pending, handleRefreshUserPending);
  },
});

export const { authenticate } = authSlice.actions;
export const authReducer = authSlice.reducer;
