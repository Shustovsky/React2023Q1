import { render, screen } from '@testing-library/react';
import { FeedbackModalProps } from '../models';
import { ModalConfirm } from '../components/ModalConfirm';

describe('Modal component', () => {
  const testModal: FeedbackModalProps = {
    label: 'Review successfully added',
    onClose: () => {},
  };

  test('renders modal correctly', () => {
    render(<ModalConfirm label={testModal.label} onClose={testModal.onClose} />);

    expect(screen.getByText(`Review successfully added`)).toBeInTheDocument();
  });
});
