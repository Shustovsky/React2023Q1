import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { Provider } from 'react-redux';
import { testStore } from './testStore/testStore';

describe('App component', () => {
  test('renders without crashing', () => {
    const root = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Provider store={testStore}>
          <App />
        </Provider>
      </BrowserRouter>,
      root
    );
    ReactDOM.unmountComponentAtNode(root);
  });
});
1;
