import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Home
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/profile">
            Profile
          </Nav.Link>
          <Nav.Link as={NavLink} to="/products">
            My products
          </Nav.Link>
          <Nav.Link as={NavLink} to="/profile/sales">
            Sales
          </Nav.Link>
        </Nav>
        {/* TODO: gap between buttons */}
        <Button variant="primary" as={NavLink} to="/login">
          Login
        </Button>
        <Button variant="info" as={NavLink} to="/register">
          Register
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
