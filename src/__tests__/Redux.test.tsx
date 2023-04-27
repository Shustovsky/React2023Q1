import { describe, test, expect } from 'vitest';
import { store } from '../store/store';
import { setSearchValue, initialState as searchSliceInit, searchSlice } from '../store/searchSlice';
import {
  setFeedbackList,
  setShowFeedbackModal,
  initialState as formSliceInit,
  feedbackSlice,
} from '../store/formSlice';
import {
  setCharacter,
  initialState as homeSliceInit,
  homeSlice,
  fetchDataNew,
} from '../store/homeSlice';
import { IFeedback } from '../models';

describe('NotFoundPage component', () => {
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

  const file = new File(['file content'], 'ITEM_PREVIEW1.png', { type: 'image/png' });
  const testFiles = { 0: file } as unknown;

  const testFeedback: IFeedback = {
    birthday: '2023-04-03',
    checkbox: false,
    cute: false,
    gender: 'Male',
    id: 1,
    name: 'Александр Шустовский',
    profilePicture: testFiles as FileList,
    rate: '5',
    text: 'test text test text test text ',
  };
  test('SearchbarSlice tests', () => {
    expect(searchSlice.getInitialState()).toEqual(searchSliceInit);
    store.dispatch(setSearchValue('some text'));
    expect(store.getState().search.searchValue).toEqual('some text');
  });

  test('HomepageSlice tests', () => {
    expect(homeSlice.getInitialState()).toEqual(homeSliceInit);

    store.dispatch(setCharacter(testCharacter));
    expect(store.getState().home.character).toEqual(testCharacter);

    store.dispatch(fetchDataNew('test1'));
    expect(store.getState().home.error).toEqual('');
    expect(store.getState().home.character).toEqual(testCharacter);
    expect(store.getState().home.characters).toEqual([]);
    expect(store.getState().home.loading).toEqual(true);
  });

  test('FormSlice tests', () => {
    expect(feedbackSlice.getInitialState()).toEqual(formSliceInit);
    store.dispatch(setShowFeedbackModal(true));
    expect(store.getState().feedback.showFeedbackModal).toEqual(true);

    store.dispatch(setFeedbackList(testFeedback));
    expect(store.getState().feedback.showFeedbackModal).toEqual(true);
  });
});
