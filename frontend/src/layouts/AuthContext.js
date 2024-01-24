// AuthContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true, username: action.username };
    case 'LOGOUT':
      return { ...state, isLoggedIn: false, username: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const storedAuthState = JSON.parse(localStorage.getItem('authState')) || {
    isLoggedIn: false,
    username: null,
  };

  const [authState, dispatch] = useReducer(authReducer, storedAuthState);

  useEffect(() => {
    localStorage.setItem('authState', JSON.stringify(authState));
  }, [authState]);

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
