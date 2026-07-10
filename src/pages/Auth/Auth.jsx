import { ActionCard } from '@shared/ui/ActionCard';
import { LoginButton } from '@features/auth/Login';
import { LogoutButton } from '@features/auth/Logout';
import { useSelector } from 'react-redux';

export const Auth = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <ActionCard
      heading="Profile"
      text={
        isAuth
          ? 'You are already logged in. Manage your account below.'
          : 'Please login to access your dashboard and manage your tips.'
      }
      actions={isAuth ? <LogoutButton /> : <LoginButton />}
    />
  );
};
