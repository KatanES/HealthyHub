import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addWaterIntake = createAsyncThunk(
  'waterIntake/post',
  async ({ value }, thunkAPI) => {
    try {
      const res = await axios.post('/api/user/water-intake', { water: value });

      return res.data;
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
      const response = await axios.delete(
        `/api/user/water-intake`,
        waterIntake
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getWaterToday = createAsyncThunk(
  'waterIntake/getForToday',
  async (dateToday, thunkAPI) => {
    try {
      const response = await axios.post('/user/water-intake', dateToday);
      return response.value;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
