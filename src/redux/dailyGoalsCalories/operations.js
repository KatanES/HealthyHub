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
//       const response = await instance('api/user/daily-goal-calories');

//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://6521778fa4199548356d3ed4.mockapi.io/api/s7';

// export const fetchCaloriesIntake = createAsyncThunk(
//   'caloriesGoal/get',
//   async (_, thunkAPI) => {
//     try {
//       const responce = await axios.get('/goal-calories');
//       return responce.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
