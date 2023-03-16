import { Search } from '../components/Search';
import { Character } from '../components/Character';
import { CharactersState, IResponse } from '../models';
import axios from 'axios';
import { Component } from 'react';

export class HomePage extends Component<Record<string, unknown>, CharactersState> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  public async componentDidMount(): Promise<void> {
    const response = await axios.get<IResponse>('https://rickandmortyapi.com/api/character');
    this.setState({ characters: response.data.results });
  }

  public render(): JSX.Element {
    const { characters } = this.state;
    return (
      <main className="main-home">
        <Search></Search>
        <section className="products">
          {characters.map((character) => (
            <Character character={character} key={character.id} />
          ))}
        </section>
      </main>
    );
  }
}
