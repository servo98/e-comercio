import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Container from "react-bootstrap/Container";

const NormalLayout = () => {
  return (
    <>
      <NavBar />
      <Container className="my-4">
        <Outlet />
      </Container>
    </>
  );
};

export default NormalLayout;
