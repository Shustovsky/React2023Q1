import { render, screen } from '@testing-library/react';
import { ICharacter } from '../models';
import { Modal } from '../components/Modal';
import { Character } from '../pages/Home/components/Character';

describe('Modal component', () => {
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
    render(
      <Modal onClose={() => null}>
        <Character character={testCharacter} />
      </Modal>
    );

    expect(screen.getByText(testCharacter.name)).toBeInTheDocument();
    expect(screen.getByAltText(testCharacter.name)).toBeInTheDocument();
  });
});
