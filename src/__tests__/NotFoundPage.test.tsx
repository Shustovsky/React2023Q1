import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';

describe('NotFoundPage component', () => {
  test('renders the not found page', () => {
    render(<NotFoundPage />);

    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
});
