import { createSlice } from '@reduxjs/toolkit';
import { fetchCaloriesIntake } from './operations/fetchCaloriesIntake';

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfildGet = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.calories.value = action.payload.data.value;
};

const caloriesGoalSlice = createSlice({
  name: 'caloriesGoal',
  initialState: {
    calories: {
      value: 0,
    },
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCaloriesIntake.fulfilled, handleFulfildGet)
      .addCase(fetchCaloriesIntake.pending, handlePending)
      .addCase(fetchCaloriesIntake.rejected, handleRejected);
  },
});

export const caloriesReducer = caloriesGoalSlice.reducer;
