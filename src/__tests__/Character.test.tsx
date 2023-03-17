import { render, screen } from '@testing-library/react';
import { Character } from '../components/Character';
import { ICharacter } from '../models';

describe('Character component', () => {
  const testCharacter: ICharacter = {
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

  test('renders character info correctly', () => {
    render(<Character character={testCharacter} />);

    expect(screen.getByText(testCharacter.name)).toBeInTheDocument();
    expect(screen.getByAltText(testCharacter.name)).toBeInTheDocument();
    expect(screen.getByText(`Location: ${testCharacter.location.name}`)).toBeInTheDocument();
    expect(screen.getByText(`Species: ${testCharacter.species}`)).toBeInTheDocument();
    expect(screen.getByText(`Gender: ${testCharacter.gender}`)).toBeInTheDocument();
  });
});