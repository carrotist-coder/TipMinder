import { logout } from '@entities/user/model/slice';

export const logoutService = (dispatch, navigate) => {
  console.log('Logout');
  dispatch(logout());
  navigate('/auth');
};
