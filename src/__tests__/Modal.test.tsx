import { render, screen } from '@testing-library/react';
import { Modal } from '../components/Modal';
import { Character } from '../pages/Home/components/Character';
import { Provider } from 'react-redux';
import { testStore } from './testStore/testStore';

describe('Modal component', () => {
  test('renders character info correctly', () => {
    render(
      <Provider store={testStore}>
        <Modal>
          <Character />
        </Modal>
      </Provider>
    );

    expect(screen.getByText('×')).toBeInTheDocument();
  });
});
