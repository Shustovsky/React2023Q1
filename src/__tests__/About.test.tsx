import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AboutPage } from '../pages/AboutPage';

describe('About page component', () => {
  test('renders the not found page', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });
});
