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
