import { useState, useEffect, useCallback } from "react";
import Container from "../../components/Container";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { getLocations } from "../../api";
import Table from "../../components/Table";
import locationsTableHead from "./locationsTableHead";

function LocationsView() {
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [locations, setLocations] = useState([]);
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
      getLocations(page)
        .then((location) => {
          setTotalPages(location.info.pages);
          setLocations(location.results);
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
    <Container htmlTag="section" className="locations-section">
      <Container className="title-btn-container">
        <Title text="Locations" />
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
      <Table
        tableHead={locationsTableHead}
        tableBody={locations.map(({ id, type, name, dimension }) => ({
          id,
          type,
          name,
          dimension,
        }))}
      />
    </Container>
  );
}

export default LocationsView;
