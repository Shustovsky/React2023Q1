import { createSlice } from '@reduxjs/toolkit';
import { ICharacter } from '../../models';

export interface HomeState {
  characters: ICharacter[];
  loading: boolean;
  error: string;
  character: ICharacter | null;
}

const testCharacter = {
  id: 302,
  name: 'Ruben',
  status: 'Dead',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/302.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/3'],
  url: 'https://rickandmortyapi.com/api/character/302',
  created: '2018-01-05T14:03:21.824Z',
};

const initialState: HomeState = {
  characters: [testCharacter],
  loading: true,
  error: 'Some error',
  character: testCharacter,
};

export const testHomeSlice = createSlice({
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

export default testHomeSlice.reducer;
