import { render, screen } from '@testing-library/react';
import { FeedbackModalProps } from '../models';
import { FeedbackModal } from '../components/FeedbackModal';

describe('Modal component', () => {
  const testModal: FeedbackModalProps = {
    show: true,
    onClose: () => {},
  };

  test('renders modal correctly', () => {
    render(<FeedbackModal show={testModal.show} onClose={testModal.onClose} />);

    expect(screen.getByText(`Review successfully added`)).toBeInTheDocument();
  });
});
