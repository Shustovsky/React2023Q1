import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './testHomeSlice';
import feedbackReducer from './testFormSlice';

export const testStore = configureStore({
  reducer: {
    home: homeReducer,
    feedback: feedbackReducer,
  },
});
