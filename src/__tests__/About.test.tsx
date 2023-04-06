import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AboutPage } from '../pages/AboutPage';

describe('About page component', () => {
  test('renders the not found page', () => {
    render(<AboutPage />);

    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });
});
