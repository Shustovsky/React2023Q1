import { render, screen } from '@testing-library/react';
import { ModalConfirm } from '../components/ModalConfirm';
import { Provider } from 'react-redux';
import { testStore } from './testStore/testStore';

interface ModalConfirmProps {
  label: string;
  onClose: () => void;
}

describe('Modal component', () => {
  const testModal: ModalConfirmProps = {
    label: 'Review successfully added',
    onClose: () => {},
  };

  test('renders modal correctly', () => {
    render(
      <Provider store={testStore}>
        <ModalConfirm label={testModal.label} />
      </Provider>
    );

    expect(screen.getByText(`Review successfully added`)).toBeInTheDocument();
  });
});
