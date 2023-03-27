import { FieldErrors, UseFormRegister } from 'react-hook-form';

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
}

export interface SearchState {
  searchValue: string;
}

export interface LayoutState {
  currentPageName: string | undefined;
}

export interface CharactersState {
  characters: ICharacter[];
  error?: string;
  loading?: boolean;
}

export interface IFeedback {
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

export interface FormPageState {
  name: string;
  nameError: string;
  birthday: string;
  birthdayError: string;
  rate: string;
  rateError: string;
  checkbox: boolean;
  checkboxError: string;
  cute: boolean;
  gender: string | undefined;
  genderError: string;
  profilePicture?: File;
  profilePictureError: string;
  text: string;
  textError: string;
  feedbackList: IFeedback[];
  showFeedbackModal: boolean;
}

export interface InputProps {
  input: React.RefObject<HTMLInputElement>;
  input2?: React.RefObject<HTMLInputElement>;
  errorMessage?: string;
}

export interface SelectProps {
  input: React.RefObject<HTMLSelectElement>;
  errorMessage?: string;
}

export interface TextareaProps {
  input: React.RefObject<HTMLTextAreaElement>;
  errorMessage?: string;
}

export interface ModalProps {
  show: boolean;
  onClose: () => void;
}

export interface NameInputProps {
  label?: string;
  register: UseFormRegister<IFeedback>;
  errors?: FieldErrors<IFeedback>;
}
