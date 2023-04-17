import { CharacterMini } from './components/CharacterMini';
import { Search } from './components/Search';
import { Loader } from '../../components/Loader';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Modal } from '../../components/Modal';
import { Character } from './components/Character';
import { useEffect } from 'react';
import { ICharacter } from '../../models';
import './components/HomePage.scss';
import { fetchDataNew, setCharacter } from '../../store/homeSlice';
import { useAppDispatch, useAppSelector } from '../../hook';

export function HomePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { characters, loading, error, character } = useAppSelector((state) => state.home);
  const searchValue = useAppSelector((state) => state.search.searchValue);

  useEffect(() => {
    dispatch(fetchDataNew(searchValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleSearch = (searchValue: string) => {
    dispatch(fetchDataNew(searchValue));
  };

  return (
    <>
      <main className="main-home">
        <Search onSearch={handleSearch} />
        {loading && <Loader />}
        {error && <ErrorMessage />}
        <section className="character">
          {characters.map((character: ICharacter) => (
            <CharacterMini
              character={character}
              onClick={() => dispatch(setCharacter(character))}
              key={character.id}
            />
          ))}
        </section>
      </main>
      {character && (
        <Modal>
          <Character character={character} />
        </Modal>
      )}
    </>
  );
}
