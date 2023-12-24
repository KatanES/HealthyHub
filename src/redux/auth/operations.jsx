import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { authenticate } from './slice';
import { Navigate, useNavigate } from 'react-router-dom';

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
      const response = await axios.post('/api/user/weight', credentials);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateGoal = createAsyncThunk(
  'auth/api/updateGoal',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.put('/api/user/goal', credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
