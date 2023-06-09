import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { Provider } from 'react-redux';
import { testStore } from './testStore/testStore';

describe('App', () => {
  it('Renders page', () => {
    render(
      <BrowserRouter>
        <Provider store={testStore}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home');
    const link = screen.getByRole('link', { name: /about/i });
    expect(link).toHaveAttribute('href', '/about');
    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toHaveAttribute('href', '/');
  });
});
