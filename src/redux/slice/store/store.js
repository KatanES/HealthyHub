import { configureStore } from '@reduxjs/toolkit';
import diaryReducer from './slice/diarySlice';

const store = configureStore({
  reducer: {
    diary: diaryReducer,
    // Додайте інші reducer'и, якщо потрібно
  },
});

export default store;
