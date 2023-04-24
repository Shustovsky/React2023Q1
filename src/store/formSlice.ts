import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFeedback } from '../models';

export interface FeedbackState {
  feedbackList: IFeedback[];
  showFeedbackModal: boolean;
}

export const initialState: FeedbackState = {
  feedbackList: [],
  showFeedbackModal: false,
};

export const feedbackSlice = createSlice({
  name: 'feedback',
  initialState: initialState,
  reducers: {
    setFeedbackList: (state, action: PayloadAction<IFeedback>) => {
      state.feedbackList.push(action.payload);
      console.log(action.payload);
    },
    setShowFeedbackModal: (state, action: PayloadAction<boolean>) => {
      state.showFeedbackModal = action.payload;
    },
  },
});

export const { setFeedbackList, setShowFeedbackModal } = feedbackSlice.actions;

export default feedbackSlice.reducer;
