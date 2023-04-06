import { CharacterProps } from '../models';
import '../styles/character.scss';

export function CharacterMini({ character, onClick }: CharacterProps): JSX.Element {
  return (
    <div className="character_item" onClick={onClick}>
      <img src={character.image} alt={character.name} />
      <div className="character_item_name">{character.name}</div>
    </div>
  );
}
