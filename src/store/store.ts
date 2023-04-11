import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeSlice';
import feedbackReducer from './formSlice';
import searchReducer from './searchSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    feedback: feedbackReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
