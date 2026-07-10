import { login } from '@entities/user/model/slice';

export const loginService = (dispatch, navigate) => {
  console.log('Login');
  dispatch(login());
  navigate('/');
};
