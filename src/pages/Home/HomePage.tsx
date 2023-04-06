import axios, { AxiosError } from 'axios';
import { CharacterMini } from './components/CharacterMini';
import { Search } from './components/Search';
import { Loader } from '../../components/Loader';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Modal } from '../../components/Modal';
import { Character } from './components/Character';
import { useEffect, useState } from 'react';
import { ICharacter, IResponse } from '../../models';
import './components/HomePage.scss';

export function HomePage(): JSX.Element {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [character, setCharacter] = useState<ICharacter | null>(null);

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
    } catch (e: unknown) {
      const error = e as AxiosError;
      if (error.response?.status === 404) {
        setError('Oops nothing found, try changing the search parameter!');
      } else {
        setError(error.message);
      }
      setCharacters([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchValue: string): Promise<void> => {
    return fetchData(searchValue);
  };

  return (
    <>
      <main className="main-home">
        <Search onSearch={handleSearch} />
        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
        <section className="character">
          {characters.map((character) => (
            <CharacterMini
              character={character}
              key={character.id}
              onClick={() => setCharacter(character)}
            />
          ))}
        </section>
      </main>
      {character && (
        <Modal onClose={() => setCharacter(null)}>
          <Character character={character} />
        </Modal>
      )}
    </>
  );
}
