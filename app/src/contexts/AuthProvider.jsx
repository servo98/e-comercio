import AuthContext from "./AuthContext";
import { useState } from "react";

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const loginProvider = () => {
    console.log("function login");
    setIsAuth(true);
  };

  const logoutProvider = () => {
    console.log("function logout");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, loginProvider, logoutProvider }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
