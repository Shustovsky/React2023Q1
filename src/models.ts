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
}
