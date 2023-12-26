import { createSlice } from '@reduxjs/toolkit';
import { addWaterIntake } from './operations';
import { isAnyOf } from '@reduxjs/toolkit';

const initialState = {
  water: {
    value: null,
  },
  isLoading: false,
  error: null,
};

export const waterIntakeSlice = createSlice({
  name: 'waterIntake',
  initialState,
  reducers: {
    deleteWaterIntake() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(addWaterIntake.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(addWaterIntake.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isAnyOf(addWaterIntake.fulfilled), (state, action) => {
        state.isLoading = false;
        console.log('Kate', action);
        state.error = null;
        state.water = action.payload;
      });
  },
});

export const { deleteWaterIntake } = waterIntakeSlice.actions;
export const waterIntakeReducer = waterIntakeSlice.reducer;
