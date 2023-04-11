import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    setCharacters: (state, action: PayloadAction<ICharacter[]>) => {
      state.characters = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setCharacter: (state, action: PayloadAction<ICharacter | null>) => {
      state.character = action.payload;
    },
  },
});

export const { setCharacters, setLoading, setError, setCharacter } = homeSlice.actions;

export default homeSlice.reducer;
