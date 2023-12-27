import { configureStore } from '@reduxjs/toolkit';
import { clearDiary } from '/src/redux/diary/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { recommendedFoodReducer } from '../../recommendedFood/slice';
import { authReducer } from '../../auth/slice';

import { forgotPasswordReducer } from '../../auth/forgotPasswordSlice';
import { waterIntakeReducer } from '../../DailyWater/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    diary: clearDiary,
    forgotPassword: forgotPasswordReducer,
    recommendedFood: recommendedFoodReducer,
    waterIntake: waterIntakeReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
