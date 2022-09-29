import { useCallback, useEffect, useState } from "react";
import Container from "../../components/Container";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Table from "../../components/Table";
import Loader from "../../components/Loader";
import { getEpisodes } from "../../api";
import { EpisodeData } from "../../ts-types/interfaces";
import episodesTableHead from "./episodesTable";

function EpisodesView() {
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [episodes, setEpisodes] = useState<EpisodeData[] | []>([]);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleBtnClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const { textContent } = e.target as HTMLButtonElement;
    if (textContent === "Prev") setPage(page - 1);
    if (textContent === "Next") setPage(page + 1);
  };

  useEffect(
    useCallback(() => {
      setIsLoading(true);
      getEpisodes(page)
        .then((episodes) => {
          setTotalPages(episodes.info.pages);
          setEpisodes(episodes.results);
        })
        .catch((error) => {
          setError(true);
          return error.message;
        })
        .finally(() => setIsLoading(false));
    }, [page]),
    [page]
  );
  return (
    <Container className="episodes-section" htmlTag="section">
      <Container className="title-btn-container">
        <Title text="Episodes" />
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
      {!isLoading && !error ? (
        <Table
          tableHead={episodesTableHead}
          tableBody={episodes.map(({ id, name, air_date, episode }) => ({
            id,
            name,
            air_date,
            episode,
          }))}
        />
      ) : (
        <Loader size={100} />
      )}
    </Container>
  );
}

export default EpisodesView;
