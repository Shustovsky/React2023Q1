import React from 'react';
import { render, screen } from '@testing-library/react';
import { InputProps, SelectProps, TextareaProps } from '../models';
import { CheckboxInput } from '../components/inputs/CheckboxInput';
import { DateInput } from '../components/inputs/DateInput';
import { DropdownInput } from '../components/inputs/DropdownInput';
import { NameInput } from '../components/inputs/NameInput';
import { PictureInput } from '../components/inputs/PictureInput';
import { RadioInput } from '../components/inputs/RadioInput';
import { SwitcherInput } from '../components/inputs/SwitcherInput';
import { Textarea } from '../components/inputs/Textarea';

describe('CheckboxInput component', () => {
  const testInputProps: InputProps = {
    input: React.createRef<HTMLInputElement>(),
    errorMessage: 'This field is required',
  };

  test('renders checkbox input correctly', () => {
    render(
      <CheckboxInput input={testInputProps.input} errorMessage={testInputProps.errorMessage} />
    );

    expect(screen.getByText(`I have agreed to the processing of this data`)).toBeInTheDocument();
    expect(screen.getByText(testInputProps.errorMessage!)).toBeInTheDocument();
  });
});

describe('DateInput component', () => {
  const testInputProps: InputProps = {
    input: React.createRef<HTMLInputElement>(),
    errorMessage: 'This field is required',
  };

  test('renders dateInput input correctly', () => {
    render(<DateInput input={testInputProps.input} errorMessage={testInputProps.errorMessage} />);

    expect(screen.getByText(`Birthday:`)).toBeInTheDocument();
    expect(screen.getByText(testInputProps.errorMessage!)).toBeInTheDocument();
  });
});

describe('DropdownInput component', () => {
  const testInputProps: SelectProps = {
    input: React.createRef<HTMLSelectElement>(),
  };

  test('renders dropdownInput input correctly', () => {
    render(<DropdownInput input={testInputProps.input} />);

    expect(screen.getByText(`Rate this site:`)).toBeInTheDocument();
    expect(screen.getByText(`5`)).toBeInTheDocument();
    expect(screen.getByText(`4`)).toBeInTheDocument();
    expect(screen.getByText(`3`)).toBeInTheDocument();
    expect(screen.getByText(`2`)).toBeInTheDocument();
    expect(screen.getByText(`1`)).toBeInTheDocument();
  });
});

describe('NameInput component', () => {
  const testInputProps: InputProps = {
    input: React.createRef<HTMLInputElement>(),
    errorMessage: 'This field is required',
  };

  test('renders nameInput input correctly', () => {
    render(<NameInput input={testInputProps.input} errorMessage={testInputProps.errorMessage} />);

    expect(screen.getByText(`Your name:`)).toBeInTheDocument();
    expect(screen.getByText(testInputProps.errorMessage!)).toBeInTheDocument();
  });
});

describe('PictureInput component', () => {
  const testInputProps: InputProps = {
    input: React.createRef<HTMLInputElement>(),
    errorMessage: 'This field is required',
  };

  test('renders pictureInput input correctly', () => {
    render(
      <PictureInput input={testInputProps.input} errorMessage={testInputProps.errorMessage} />
    );

    expect(screen.getByText(`Profile picture:`)).toBeInTheDocument();
    expect(screen.getByText(testInputProps.errorMessage!)).toBeInTheDocument();
  });
});

describe('RadioInput component', () => {
  const testInputProps: InputProps = {
    input: React.createRef<HTMLInputElement>(),
    errorMessage: 'This field is required',
  };

  test('renders radioInput input correctly', () => {
    render(<RadioInput input={testInputProps.input} errorMessage={testInputProps.errorMessage} />);

    expect(screen.getByText(`Male`)).toBeInTheDocument();
    expect(screen.getByText(`Female`)).toBeInTheDocument();
    expect(screen.getByText(testInputProps.errorMessage!)).toBeInTheDocument();
  });
});

describe('SwitcherInput component', () => {
  const testInputProps: InputProps = {
    input: React.createRef<HTMLInputElement>(),
    errorMessage: 'This field is required',
  };

  test('renders switcherInput input correctly', () => {
    render(
      <SwitcherInput input={testInputProps.input} errorMessage={testInputProps.errorMessage} />
    );

    expect(screen.getByText(`I agree that I'm cute:`)).toBeInTheDocument();
  });
});

describe('Textarea component', () => {
  const testInputProps: TextareaProps = {
    input: React.createRef<HTMLTextAreaElement>(),
    errorMessage: 'This field is required',
  };

  test('renders textarea input correctly', () => {
    render(<Textarea input={testInputProps.input} errorMessage={testInputProps.errorMessage} />);

    expect(
      screen.getByText(`Please tell me what you liked or didn't like on this site:`)
    ).toBeInTheDocument();
    expect(screen.getByText(testInputProps.errorMessage!)).toBeInTheDocument();
  });
});
