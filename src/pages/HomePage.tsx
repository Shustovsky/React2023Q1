import axios from 'axios';
import { Component } from 'react';
import { CharactersState, IResponse } from '../models';
import { Character } from '../components/Character';
import { Search } from '../components/Search';

export class HomePage extends Component<Record<string, unknown>, CharactersState> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      characters: [],
      loading: false,
      error: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount(): Promise<void> {
    return this.fetchData(localStorage.getItem('search') || '');
  }

  async fetchData(searchValue: string): Promise<void> {
    this.setState({
      loading: true,
      error: '',
    });
    try {
      const response = await axios.get<IResponse>(
        `https://rickandmortyapi.com/api/character/?name=${searchValue}`
      );
      this.setState({
        characters: response.data.results,
        loading: false,
      });
    } catch (error) {
      this.setState({
        characters: [],
        loading: false,
        error: 'Unfortunately, try changing the search parameter',
      });
    }
  }

  handleSearch(searchValue: string): Promise<void> {
    return this.fetchData(searchValue);
  }

  render() {
    const { characters, error, loading } = this.state;
    return (
      <main className="main-home">
        <Search onSearch={this.handleSearch} />
        {loading && <h2 className="error-message">{'Loading'}</h2>}
        {error && <h2 className="error-message">{error}</h2>}
        <section className="products">
          {characters.map((character) => (
            <Character character={character} key={character.id} />
          ))}
        </section>
      </main>
    );
  }
}
