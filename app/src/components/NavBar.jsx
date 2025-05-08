import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>Home</Navbar.Brand>
        </NavLink>
        <Nav className="me-auto">
          <Nav.Link href="#home">Profile</Nav.Link>
          <Nav.Link href="#features">Sales</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
