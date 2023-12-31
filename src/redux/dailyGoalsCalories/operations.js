// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://healthyhubserver.onrender.com/',
// });

// export const setAuthHeader = (token) => {
//   instance.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// export const fetchCaloriesIntake = createAsyncThunk(
//   'caloriesGoal/get',
//   async (_, thunkAPI) => {
//     try {
//       const state = thunkAPI.getState();
//       const persistToken = state.auth.token;
//       if (!persistToken) {
//         return thunkAPI.rejectWithValue('No token');
//       }
//       setAuthHeader(persistToken);
//       const response = await instance('api/user/goal');

//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCaloriesIntake = createAsyncThunk(
  'api/user/fetchCaloriesIntake',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/user/daily-goal-calories');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
