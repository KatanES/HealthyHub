import { createSlice } from '@reduxjs/toolkit';
import { addWaterIntake, deletedWaterIntake } from './operations';
import { isAnyOf } from '@reduxjs/toolkit';

const initialState = {
  water: {
    number: null,
  },
  isLoading: false,
  error: null,
};

export const waterIntakeSlice = createSlice({
  name: 'waterIntake',
  initialState,
  reducers: {
    deletedWaterIntake(state) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(addWaterIntake.pending),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(addWaterIntake.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(addWaterIntake.fulfilled),
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.water.value = action.payload.data.value;
        }
      );
  },
});

export const { deletedWaterIntake } = waterIntakeSlice.actions;
export const waterIntakeReducer = waterIntakeSlice.reducer;
