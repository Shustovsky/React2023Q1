import { createSlice } from '@reduxjs/toolkit';
import { IFeedback } from '../../models';

export interface HomeState {
  feedbackList: IFeedback[];
  showFeedbackModal: boolean;
}

const initialState: HomeState = {
  feedbackList: [],
  showFeedbackModal: false,
};

export const feedbackSlice = createSlice({
  name: 'feedback',
  initialState: initialState,
  reducers: {
    setFeedbackList: (state, action) => {
      state.feedbackList.push(action.payload);
    },
    setShowFeedbackModal: (state, action) => {
      state.showFeedbackModal = action.payload;
    },
  },
});

export const { setFeedbackList, setShowFeedbackModal } = feedbackSlice.actions;

export default feedbackSlice.reducer;
