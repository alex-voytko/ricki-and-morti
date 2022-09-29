import { useContext } from "react";
import { CharacterData } from "../../ts-types/interfaces";
import { CharacterContext } from "../../views/CharactersView/CharactersView";
import Title from "../Title";

function CharacterCard(props: CharacterData) {
  const { handleClickOnCard } = useContext(CharacterContext);
  const handleClick = () => handleClickOnCard(props);
  return (
    <li className="character-item" onClick={handleClick}>
      <img src={props.image} alt={props.name} loading="lazy" />
      <div className="card-container">
        <Title text={props.name} priority={3} />
        <p>{props.species}</p>
      </div>
    </li>
  );
}

export default CharacterCard;
