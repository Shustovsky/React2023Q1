import { ICharacter } from '../../../models';
import './Character.scss';
import { setCharacter } from '../../../store/homeSlice';
import { useAppDispatch } from '../../../hook';

interface CharacterProps {
  character: ICharacter;
}

export function CharacterMini({ character }: CharacterProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <div className="character_item" onClick={() => dispatch(setCharacter(character))}>
      <img src={character.image} alt={character.name} />
      <div className="character_item_name">{character.name}</div>
    </div>
  );
}
