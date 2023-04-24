import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { Provider } from 'react-redux';
import { testStore } from './testStore/testStore';
import { render } from '@testing-library/react';

describe('App component', () => {
  test('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Provider store={testStore}>
          <App />
        </Provider>
      </BrowserRouter>
    );
  });
});
