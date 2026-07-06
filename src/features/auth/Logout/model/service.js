import { userModel } from '@/entities/user';

export const logout = () => {
  console.log('Logout');
  userModel.logout();
};
