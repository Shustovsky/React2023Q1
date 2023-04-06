import { render, screen } from '@testing-library/react';
import { ModalConfirm } from '../components/ModalConfirm';

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
    render(<ModalConfirm label={testModal.label} onClose={testModal.onClose} />);

    expect(screen.getByText(`Review successfully added`)).toBeInTheDocument();
  });
});
