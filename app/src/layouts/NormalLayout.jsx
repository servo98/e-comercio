import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const NormalLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default NormalLayout;
