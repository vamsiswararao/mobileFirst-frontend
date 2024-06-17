import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const {token} = useSelector((state) => state.auth);
  return (
     (token ? <Component {...rest} /> : <Navigate to="/login" />)
  );
};

export default ProtectedRoute;
