import { configureStore } from '@reduxjs/toolkit';
import { caloriesReducer } from './slice';

export const store = configureStore({
  reducer: {
    goalCalories: caloriesReducer,
  },
});
