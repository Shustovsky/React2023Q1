import axios, { AxiosError } from 'axios';
import { CharacterMini } from './components/CharacterMini';
import { Search } from './components/Search';
import { Loader } from '../../components/Loader';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Modal } from '../../components/Modal';
import { Character } from './components/Character';
import { useEffect, useCallback } from 'react';
import { ICharacter, IResponse } from '../../models';
import './components/HomePage.scss';
import { setCharacters, setError, setLoading } from '../../store/homeSlice';
import { useAppDispatch, useAppSelector } from '../../hook';

export function HomePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.home.characters);
  const loading = useAppSelector((state) => state.home.loading);
  const error = useAppSelector((state) => state.home.error);
  const character = useAppSelector((state) => state.home.character);
  const searchValue = useAppSelector((state) => state.search.searchValue);

  const fetchData = useCallback(
    async (searchValue: string): Promise<void> => {
      dispatch(setLoading(true));
      dispatch(setError(''));

      try {
        const response = await axios.get<IResponse>(
          `https://rickandmortyapi.com/api/character/?name=${searchValue}`
        );
        dispatch(setCharacters(response.data.results));
      } catch (e: unknown) {
        const error = e as AxiosError;
        if (error.response?.status === 404) {
          dispatch(setError('Oops nothing found, try changing the search parameter!'));
        } else {
          dispatch(setError(error.message));
        }
        dispatch(setCharacters([]));
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    fetchData(searchValue);
  }, [fetchData, searchValue]);

  const handleSearch = (searchValue: string): Promise<void> => {
    return fetchData(searchValue);
  };

  return (
    <>
      <main className="main-home">
        <Search onSearch={handleSearch} />
        {loading && <Loader />}
        {error && <ErrorMessage />}
        <section className="character">
          {characters.map((character: ICharacter) => (
            <CharacterMini character={character} key={character.id} />
          ))}
        </section>
      </main>
      {character && (
        <Modal>
          <Character />
        </Modal>
      )}
    </>
  );
}
