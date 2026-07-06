import { login } from '@entities/user/model/slice';
import { store } from '@app/store/store';

export const handleLogin = () => {
  console.log('Login');
  store.dispatch(login());
};
