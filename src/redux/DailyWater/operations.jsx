import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addWaterIntake = createAsyncThunk(
  'waterIntake/addWaterIntake',
  async (waterIntake, thunkAPI) => {
    try {
      const response = await axios.post('/api/user/water-intake', waterIntake, {
        headers: {
          Authorization: `Bearer YOUR_ACTUAL_TOKEN`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error in addWaterIntake async action:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletedWaterIntake = createAsyncThunk(
  'waterIntake/deleteWaterIntake',
  async (waterIntake, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/user/water-intake`, waterIntake);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
