import { NavLink } from "react-router-dom";

import Container from "../Container";

interface NavLinkProps {
  name: string;
  path: string;
}

function NLink({ name, path }: NavLinkProps) {
  return (
    <Container>
      <NavLink to={path}>{name}</NavLink>
    </Container>
  );
}

export default NLink;
