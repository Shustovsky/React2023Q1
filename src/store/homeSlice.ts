import { createSlice } from '@reduxjs/toolkit';
import { ICharacter } from '../models';

export interface HomeState {
  characters: ICharacter[];
  loading: boolean;
  error: string;
  character: ICharacter | null;
}

const initialState: HomeState = {
  characters: [],
  loading: false,
  error: '',
  character: null,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setCharacter: (state, action) => {
      state.character = action.payload;
    },
  },
});

export const { setCharacters, setLoading, setError, setCharacter } = homeSlice.actions;

export default homeSlice.reducer;
