import { createSlice } from '@reduxjs/toolkit';
import { forgotPassword } from './operations';

const initialState = {
  isLoading: false,
  error: null,
};

const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: forgotPasswordActions, reducer: forgotPasswordReducer } = forgotPasswordSlice;
