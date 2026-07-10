import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  return isAuth ? <Outlet /> : <Navigate to="/auth" replace />;
};
