import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { authenticate } from './slice';

axios.defaults.baseURL = 'https://healthyhubserver.onrender.com';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signup = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/api/auth/signup', credentials);
      setAuthHeader(res.data.token);
      thunkAPI.dispatch(authenticate(res.data.token));
      return res.data;
    } catch (error) {
      console.error('Signup error:', error.response?.data || error.message);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const signin = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/api/auth/signin', credentials);
      setAuthHeader(res.data.token);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgot-password',
  async (email, thunkAPI) => {
    try {
      const res = await axios.post('/api/auth/forgot-password', { email });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  '/auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('api/user/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signOut = createAsyncThunk(
  '/api/auth/signout',

  async (_, thunkAPI) => {
    try {
      await axios.post('/api/auth/signout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateWeight = createAsyncThunk(
  'auth/api/updateWeight',
  async (credentials, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
      }
      setAuthHeader(persistedToken);
      const response = await axios.post('/api/user/weight', credentials);
      const lastEntry =
        response.data.length > 0
          ? response.data[response.data.length - 1]
          : null;

      return {
        weight: credentials.weight,
        lastWeightDate: lastEntry ? lastEntry.date : null,
      };
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateGoal = createAsyncThunk(
  'auth/api/updateGoal',
  async (credentials, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
      }
      setAuthHeader(persistedToken);
      const response = await axios.put('/api/user/goal', credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  'auth/info',
  async (credentials, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('name', credentials.name);
      formData.append('avatarURL', credentials.avatar);
      formData.append('age', Number(credentials.age));
      formData.append('gender', credentials.gender);
      formData.append('height', Number(credentials.height));
      formData.append('weight', Number(credentials.weight));
      formData.append('activity', Number(credentials.activity));

      const response = await axios.put('/api/user/update', formData, {
        headers: { 'content-type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);