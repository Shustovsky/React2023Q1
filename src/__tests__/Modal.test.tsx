import { render, screen } from '@testing-library/react';
import { ModalProps } from '../models';
import { Modal } from '../components/Modal';

describe('Modal component', () => {
  const testModal: ModalProps = {
    show: true,
    onClose: () => {},
  };

  test('renders modal correctly', () => {
    render(<Modal show={testModal.show} onClose={testModal.onClose} />);

    expect(screen.getByText(`Review successfully added`)).toBeInTheDocument();
  });
});
