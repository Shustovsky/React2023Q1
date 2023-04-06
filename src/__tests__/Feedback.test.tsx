import { render, screen } from '@testing-library/react';
import { IFeedback } from '../models';
import { Feedback } from '../components/Feedback';
import { vitest } from 'vitest';

describe('Feedback component', () => {
  const file = new File(['file contents'], 'test.png', { type: 'image/png' });
  const fileList = {
    0: file,
    length: 1,
    item: () => file,
  } as unknown as FileList;

  const testFeedback: IFeedback = {
    id: 278,
    name: 'Sacha cha cha',
    birthday: '25.04.1993',
    rate: '5',
    checkbox: true,
    cute: true,
    gender: 'Male',
    text: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
    profilePicture: fileList,
  };

  test('renders feedback correctly', () => {
    window.URL.createObjectURL = vitest.fn();
    render(<Feedback feedback={testFeedback} />);

    expect(screen.getByText(`Name: ${testFeedback.name}`)).toBeInTheDocument();
    expect(screen.getByText(`Birthday: ${testFeedback.birthday}`)).toBeInTheDocument();
    expect(screen.getByText(`You are really cute!`)).toBeInTheDocument();
    expect(screen.getByText(`Gender: ${testFeedback.gender}`)).toBeInTheDocument();
    expect(screen.getByText(testFeedback.text)).toBeInTheDocument();
  });
});
