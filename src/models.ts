import { FieldErrors, UseFormRegister } from 'react-hook-form';
import React from 'react';

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface IResponse {
  info: object;
  results: ICharacter[];
}

export interface CharacterProps {
  character: ICharacter;
  onClick?: () => void;
}

export interface ErrorMessageProps {
  error: string;
}

export interface IFeedback {
  id: number;
  name: string;
  birthday: string;
  rate: string;
  gender: string;
  text: string;
  profilePicture: FileList;
  cute: boolean;
  checkbox: boolean;
}

export interface FeedbackProps {
  feedback: IFeedback;
}

export interface NameInputProps {
  label?: string;
  register: UseFormRegister<IFeedback>;
  errors?: FieldErrors<IFeedback>;
}

export interface FeedbackModalProps {
  label: string;
  onClose: () => void;
}

export interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}
