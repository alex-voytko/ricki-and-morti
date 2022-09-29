import Container from "../Container";
import List from "../List";
import NLink from "../NavLink/NavLink";
import { views } from "./content";
import validateString from "./stringValidation";
import r from "../../routes";

function SideBar() {
  return (
    <Container htmlTag="aside" className="sidebar">
      <List className="nav-link-list">
        {views.map((view: string) => (
          <li key={view}>
            <NLink path={r[view]} name={validateString(view)} />
          </li>
        ))}
      </List>
    </Container>
  );
}

export default SideBar;
