import { createSlice } from '@reduxjs/toolkit';
import { ICharacter } from '../../models';

export interface HomeState {
  characters: ICharacter[];
  loading: boolean;
  error: string;
  character: ICharacter | null;
}

const initialState: HomeState = {
  characters: [],
  loading: false,
  error: 'Some error',
  character: {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
      // ...
    ],
    url: 'https://rickandmortyapi.com/api/character/2',
    created: '2017-11-04T18:50:21.651Z',
  },
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
