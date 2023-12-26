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

axios.defaults.baseURL = 'https://healthyhubserver.onrender.com';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const deletedWaterIntake = createAsyncThunk(
  'waterIntake/deleteWaterIntake',
  async ({value}, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistToken = state.auth.token;
      if (!persistToken) {
        return thunkAPI.rejectWithValue('No token');
      }
      setAuthHeader(persistToken);
      const response = await axios.delete(`/api/user/water-intake`, { params: { water: value } });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// export const getWaterToday = createAsyncThunk(
//   'waterIntake/getForToday',
//   async (dateToday, thunkAPI) => {
//     try {
//        const state = thunkAPI.getState();
//       const persistToken = state.auth.token;
//       if (!persistToken) {
//         return thunkAPI.rejectWithValue('No token');
//       }
//       setAuthHeader(persistToken);
//       const response = await axios.post('/user/water-intake', dateToday);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
