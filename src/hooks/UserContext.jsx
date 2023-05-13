import { createContext, useState } from "react";

const UserContext = createContext(false);

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <UserContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
