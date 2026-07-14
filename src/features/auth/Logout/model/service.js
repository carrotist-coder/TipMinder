import { logout } from '@entities/user/model/slice';
import { ROUTES } from '@shared/config/routes';

export const logoutService = (dispatch, navigate) => {
  dispatch(logout());
  navigate(ROUTES.AUTH);
};
