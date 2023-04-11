import './Character.scss';
import { useAppSelector } from '../../../hook';

export function Character(): JSX.Element | null {
  const character = useAppSelector((state) => state.home.character);

  if (!character) {
    return null;
  }

  return (
    <div className="character_item">
      <div>
        <div className="character_item_name">{character.name}</div>
        <img src={character.image} alt={character.name} />
      </div>
      <div className="character_item_dscr">
        <p>
          Location: <span className="bold">{character.location.name}</span>
        </p>
        <p>
          Species: <span className="bold">{character.species}</span>
        </p>
        <p>
          Gender: <span className="bold">{character.gender}</span>
        </p>
      </div>
    </div>
  );
}
