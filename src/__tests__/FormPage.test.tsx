import { render, screen } from '@testing-library/react';
import { FormPage } from '../pages/FormPage';

test('renders form page', () => {
  render(<FormPage />);
  expect(screen.getByText('Please leave a rating for this site:')).toBeInTheDocument();
});
