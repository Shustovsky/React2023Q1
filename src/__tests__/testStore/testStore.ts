import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './testHomeSlice';
import feedbackReducer from './testFormSlice';
import searchReducer from './testSearchSlice';

export const testStore = configureStore({
  reducer: {
    home: homeReducer,
    feedback: feedbackReducer,
    search: searchReducer,
  },
});
