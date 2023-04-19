import { render, screen } from '@testing-library/react';
import { ErrorMessage } from '../components/ErrorMessage';
import { Provider } from 'react-redux';
import { testStore } from './testStore/testStore';

describe('Feedback component', () => {
  test('renders errorMessage correctly', () => {
    render(
      <Provider store={testStore}>
        <ErrorMessage />
      </Provider>
    );

    expect(screen.getByText('Some error')).toBeInTheDocument();
  });
});
