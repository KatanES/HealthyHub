// import { createSlice } from '@reduxjs/toolkit';
// import { fetchCaloriesIntake } from './operations';

// const initialState = {
//   calories: {
//     value: 0,
//   },
//   isLoading: false,
//   error: null,
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const handlePending = (state) => {
//   state.isLoading = true;
// };

// const handleFulfildGet = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.calories.value = action.payload.data.value;

//   console.log(action.payload);
// };

// export const caloriesGoalSlice = createSlice({
//   name: 'caloriesGoal',
//   initialState,
//   reducers: {
//     clearDailyCalories(state) {
//       return (state = initialState);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCaloriesIntake.fulfilled, handleFulfildGet)
//       .addCase(fetchCaloriesIntake.pending, handlePending)
//       .addCase(fetchCaloriesIntake.rejected, handleRejected);
//   },
// });

// export const { clearDailyCalories } = caloriesGoalSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import { fetchCaloriesIntake } from './operations';

const initialState = {
  calories: 0,
  isLoading: false,
  error: null,
};

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
  state.calories = action.payload.BRM;
};

export const caloriesGoalSlice = createSlice({
  name: 'caloriesGoal',
  initialState,
  reducers: {
    clearDailyCalories: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCaloriesIntake.fulfilled, handleFulfildGet)
      .addCase(fetchCaloriesIntake.pending, handlePending)
      .addCase(fetchCaloriesIntake.rejected, handleRejected);
  },
});

export const { clearDailyCalories } = caloriesGoalSlice.actions;
