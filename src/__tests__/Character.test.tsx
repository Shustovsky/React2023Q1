import { render, screen } from '@testing-library/react';
import { Character } from '../pages/Home/components/Character';
import { Provider } from 'react-redux';
import { testStore } from './testStore/testStore';

describe('CharacterMini component', () => {
  test('renders character info correctly', () => {
    const character = {
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
    };
    if (character) {
      render(
        <Provider store={testStore}>
          <Character character={character} />
        </Provider>
      );
    }
    expect(screen.getByText('Morty Smith')).toBeInTheDocument();
    expect(screen.getByAltText('Morty Smith')).toBeInTheDocument();
  });
});
