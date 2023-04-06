import { render, screen } from '@testing-library/react';
import { ErrorMessage } from '../components/ErrorMessage';

describe('Feedback component', () => {
  test('renders errorMessage correctly', () => {
    render(<ErrorMessage error={'Some error'} />);

    expect(screen.getByText('Some error')).toBeInTheDocument();
  });
});
