import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/user/userSlice';
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoute() {

  const currentUser = useSelector(selectUser);
  return currentUser ? <Outlet /> : <Navigate to="/sign-in" />
}
export default PrivateRoute;
