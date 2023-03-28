import axios from 'axios';
import { useEffect, useState } from 'react';
import { ICharacter, IResponse } from '../models';
import { Character } from '../components/Character';
import { Search } from '../components/Search';

export function HomePage() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const searchValue = localStorage.getItem('search') || '';
    fetchData(searchValue);
  }, []);

  const fetchData = async (searchValue: string): Promise<void> => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.get<IResponse>(
        `https://rickandmortyapi.com/api/character/?name=${searchValue}`
      );
      setCharacters(response.data.results);
    } catch (error) {
      setError('Unfortunately, try changing the search parameter');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchValue: string): Promise<void> => {
    return fetchData(searchValue);
  };

  return (
    <main className="main-home">
      <Search onSearch={handleSearch} />
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
