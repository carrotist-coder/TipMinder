import { logout } from '@/entities/user/model/slice';
import { store } from '@app/store/store';

export const handleLogout = () => {
  console.log('Logout');
  store.dispatch(logout());
};
