// RequireAuth.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.session);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default AuthRoute;
