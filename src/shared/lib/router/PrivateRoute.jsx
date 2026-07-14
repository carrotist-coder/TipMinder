import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '@shared/config/routes';

export const PrivateRoute = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  return isAuth ? <Outlet /> : <Navigate to={ROUTES.AUTH} replace />;
};
