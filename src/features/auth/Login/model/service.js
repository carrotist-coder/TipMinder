import { userModel } from '@/entities/user';

export const login = () => {
  console.log('Login');
  userModel.login();
};
