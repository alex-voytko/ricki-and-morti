import Container from "../Container";
import List from "../List";
import SelectInput from "../SelectInput";
import { Filter } from "../../ts-types/types";

interface FilterBarProps {
  selectInputs: Filter;
}

function FilterBar({ selectInputs }: FilterBarProps) {
  return (
    <Container className="filter-container">
      <Container className="filter-wrapper">
        <List className="filter-list">
          {selectInputs.map((item) => (
            <li key={item[0]}>
              <p>{item[0]}</p>
              <SelectInput name={item[0]} options={item[1]} />
            </li>
          ))}
        </List>
      </Container>
    </Container>
  );
}

export default FilterBar;
