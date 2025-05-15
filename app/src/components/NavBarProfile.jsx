import Button from "react-bootstrap/Button";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";

const NavBarProfile = () => {
  const { logoutProvider } = useAuth();

  const navigate = useNavigate();
  const handleLogout = () => {
    logoutProvider();
    navigate("/");
  };
  return (
    <Button variant="danger" onClick={handleLogout}>
      Cerrar sesión
    </Button>
  );
};

export default NavBarProfile;
