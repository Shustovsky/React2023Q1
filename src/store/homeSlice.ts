import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ICharacter } from '../models';

export interface HomeState {
  characters: ICharacter[];
  loading: boolean;
  error: string;
  character: ICharacter | null;
}

export const initialState: HomeState = {
  characters: [],
  loading: false,
  error: '',
  character: null,
};

export const fetchDataNew = createAsyncThunk<ICharacter[], string, { rejectValue: string }>(
  'home/fetchDataNew',
  async function (searchValue, { rejectWithValue }) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchValue}`);
    if (!response.ok) {
      return rejectWithValue(response.status.toString());
    }
    const data = await response.json();
    return data.results;
  }
);

export const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers: {
    setCharacter: (state, action: PayloadAction<ICharacter | null>) => {
      state.character = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataNew.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchDataNew.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload;
      })
      .addCase(fetchDataNew.rejected, (state, action) => {
        state.loading = false;
        state.characters = [];
        state.error =
          action.payload === '404'
            ? 'Oops nothing found, try changing the search parameter!'
            : `Error! ${action.error.message}!`;
      });
  },
});

export const { setCharacter } = homeSlice.actions;

export default homeSlice.reducer;
