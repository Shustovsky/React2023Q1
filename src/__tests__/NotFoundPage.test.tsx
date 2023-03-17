import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NotFoundPage } from '../pages/NotFoundPage';

describe('NotFoundPage component', () => {
  test('renders the not found page', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
});
