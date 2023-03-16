import { CharacterProps } from '../models';

export function Character({ character }: CharacterProps) {
  return (
    <div className="products_item">
      <div>
        <div className="products_item_name">{character.name}</div>
        <img src={character.image} alt={character.name} />
      </div>

      <div className="products_item_dscr">
        <p>Location: {character.location.name}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
      </div>
    </div>
  );
}
