import { useCallback, useEffect, useState, createContext } from "react";
import classnames from "classnames";
import { getCharacters } from "../../api/";
import Container from "../../components/Container";
import Title from "../../components/Title";
import Button from "../../components/Button";
import List from "../../components/List";
import Modal from "../../components/Modal";
import CharacterCard from "../../components/CharacterCard";
import Loader from "../../components/Loader";
import FilterBar from "../../components/FilterBar";
import { initialCharacter, initialFilterData } from "./initialState";
import { CharacterData, CharacterFilter } from "../../ts-types/interfaces";
import filter from "./filterData";

interface Context {
  handleClickOnCard: (characterData: CharacterData) => void;
  handleCloseCard: () => void;
  handleChangeFilter: (data: CharacterFilter) => void;
  characterFilter: () => CharacterFilter;
}
export const CharacterContext = createContext({} as Context);

function CharactersView() {
  const [totalPages, setTotalePages] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [characters, setCharacters] = useState<CharacterData[] | []>([]);
  const [characterFilter, setCharacterFilter] =
    useState<CharacterFilter>(initialFilterData);
  const [characterInfo, setCharacterInfo] =
    useState<CharacterData>(initialCharacter);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const contextFunctions: Context = {
    handleClickOnCard: (characterData) => {
      setModalOpen(true);
      setCharacterInfo(characterData);
    },
    handleCloseCard: () => setModalOpen(false),
    handleChangeFilter: (data: CharacterFilter) => setCharacterFilter(data),
    characterFilter: () => characterFilter,
  };
  const handleBtnClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const { textContent } = e.target as HTMLButtonElement;
    if (textContent === "Prev") setPage(page - 1);
    if (textContent === "Next") setPage(page + 1);
  };

  useEffect(
    useCallback(() => {
      setIsLoading(true);
      getCharacters(page, characterFilter)
        .then((characters) => {
          setTotalePages(characters.info.pages);
          setCharacters(characters.results);
        })
        .catch((error) => {
          setError(true);
          return error.message;
        })
        .finally(() => setIsLoading(false));
    }, [page, characterFilter]),
    [page, characterFilter]
  );
  useEffect(
    useCallback(() => {
      setPage(1);
      setError(false);
    }, [characterFilter]),
    [characterFilter]
  );

  const modalStyles = classnames("backdrop-modal", { visible: modalOpen });

  return (
    <Container className="characters-section" htmlTag="section">
      <CharacterContext.Provider value={contextFunctions}>
        <Container className="title-btn-container">
          <Title text="Characters" />
          {page > 1 && (
            <Button
              onClick={handleBtnClick}
              className="title-btn-prev"
              name="Prev"
            />
          )}
          {page !== totalPages && (
            <Button
              onClick={handleBtnClick}
              className="title-btn-next"
              name="Next"
            />
          )}
        </Container>
        <FilterBar selectInputs={filter} />
        {error && (
          <Title
            className="error-title"
            priority={3}
            text="No results, try another filter"
          />
        )}
        {!isLoading && !error ? (
          <List className="character-list">
            {characters.map((character) => (
              <CharacterCard
                key={character.name + character.id}
                {...character}
              />
            ))}
          </List>
        ) : (
          <Loader size={100} />
        )}
        <Modal characterData={characterInfo} className={modalStyles} />
      </CharacterContext.Provider>
    </Container>
  );
}

export default CharactersView;
