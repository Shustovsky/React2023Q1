import { CharacterMini } from '../components/CharacterMini';
import { Search } from '../components/Search';
import { useHomePage } from '../hooks/homePageHook';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import { Modal } from '../components/Modal';
import { Character } from '../components/Character';
import '../styles/homePage.scss';

export function HomePage(): JSX.Element {
  const { characters, loading, error, handleSearch, character, setCharacter } = useHomePage();

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
