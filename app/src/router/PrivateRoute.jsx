import { Outlet, Navigate } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = () => {
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
