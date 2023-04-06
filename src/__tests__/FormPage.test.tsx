import { render, screen } from '@testing-library/react';
import { FormPage } from '../pages/Form/FormPage';

test('renders form page', () => {
  render(<FormPage />);
  expect(screen.getByText('Please leave a rating for this site:')).toBeInTheDocument();
  expect(screen.getByLabelText('Your name:')).toBeInTheDocument();
  expect(screen.getByLabelText('Birthday:')).toBeInTheDocument();
  expect(screen.getByLabelText('Rate this site:')).toBeInTheDocument();
  expect(screen.getByLabelText(`I agree that I'm cute:`)).toBeInTheDocument();
  expect(screen.getByLabelText('Male')).toBeInTheDocument();
  expect(screen.getByLabelText('Female')).toBeInTheDocument();
  expect(screen.getByLabelText('Profile picture:')).toBeInTheDocument();
  expect(
    screen.getByLabelText("Please tell me what you liked or didn't like on this site:")
  ).toBeInTheDocument();
  expect(screen.getByLabelText('I have agreed to the processing of this data')).toBeInTheDocument();
});
