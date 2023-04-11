import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './testHomeSlice';

export const testStore = configureStore({
  reducer: {
    home: homeReducer,
  },
});
