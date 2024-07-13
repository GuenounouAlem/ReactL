// AuthContext.js
import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = (username, password) => {
    // Simulate a registration process
    if (username && password) {
      setUser({ username, password });
    }
  };

  const login = (username, password) => {
    // Simulate a login process
    if (username && password && user && user.username === username && user.password === password) {
      setUser({ username, password });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
