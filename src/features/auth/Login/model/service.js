import { login } from '@entities/user/model/slice';

export const loginService = (dispatch, navigate) => {
  dispatch(login());
  navigate('/');
};
