import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeSlice';
import feedbackReducer from './formSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    feedback: feedbackReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
