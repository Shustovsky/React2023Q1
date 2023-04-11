import { render, screen } from '@testing-library/react';
import { Character } from '../pages/Home/components/Character';
import { Provider } from 'react-redux';
import { testStore } from './testStore/testStore';

describe('CharacterMini component', () => {
  test('renders character info correctly', () => {
    render(
      <Provider store={testStore}>
        <Character />
      </Provider>
    );

    expect(screen.getByText('Morty Smith')).toBeInTheDocument();
    expect(screen.getByAltText('Morty Smith')).toBeInTheDocument();
  });
});
