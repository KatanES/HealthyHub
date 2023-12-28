import { createSlice } from '@reduxjs/toolkit';
import { addWaterIntake, deletedWaterIntake } from './operations';
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
  reducers: {},
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
      })
      .addMatcher(isAnyOf(deletedWaterIntake.fulfilled), (state, action) => {
        state.isLoading = false;
        console.log('Kate2', action);
        state.error = null;
        state.water = action.payload;
      })
      .addMatcher(isAnyOf(deletedWaterIntake.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isAnyOf(deletedWaterIntake.pending), (state) => {
        state.isLoading = true;
      });
  },
});
 


export const waterIntakeReducer = waterIntakeSlice.reducer;
