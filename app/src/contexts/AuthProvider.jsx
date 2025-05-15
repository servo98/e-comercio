import AuthContext from "./AuthContext";
import { useState } from "react";

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));

  const loginProvider = (token) => {
    console.log("function login");
    localStorage.setItem("token", token);
    setIsAuth(true);
  };

  const logoutProvider = () => {
    console.log("function logout");
    setIsAuth(false);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isAuth, loginProvider, logoutProvider }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
