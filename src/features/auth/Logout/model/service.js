import { logout } from '@entities/user/model/slice';

export const logoutService = (dispatch, navigate) => {
  dispatch(logout());
  navigate('/auth');
};
