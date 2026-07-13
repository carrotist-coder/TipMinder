import { login } from '@entities/user/model/slice';
import { ROUTES } from '@shared/config/routes';

export const loginService = (dispatch, navigate) => {
  dispatch(login());
  navigate(ROUTES.MAIN);
};
