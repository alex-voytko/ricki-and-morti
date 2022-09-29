import { useContext } from "react";
import { createPortal } from "react-dom";
import { CharacterData } from "../../ts-types/interfaces";
import { CharacterContext } from "../../views/CharactersView/CharactersView";
import Title from "../../components/Title";

interface ModalProps {
  characterData: CharacterData;
  className: string;
}
function Modal({ characterData, className }: ModalProps) {
  const { handleCloseCard } = useContext(CharacterContext);
  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) handleCloseCard();
  };
  return createPortal(
    <div className={className} onClick={onBackdropClick}>
      <div className="modal-content">
        <div className="character-descr-container">
          <img
            src={characterData.image}
            alt={characterData.name}
            loading="lazy"
          />
          <div className="text-container">
            <Title text={characterData.name} priority={3} />
            <p>{characterData.species}</p>
            <br />
            <p>
              Gender: <span>{characterData.gender}</span>
            </p>
            <p>
              Status: <span>{characterData.status}</span>
            </p>
            {characterData.type && (
              <p>
                Type: <span>{characterData.type}</span>
              </p>
            )}
            <p>
              Origin: <span>{characterData.origin.name}</span>
            </p>
            <p>
              Location: <span>{characterData.location.name}</span>
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal-root") as HTMLElement
  );
}

export default Modal;
