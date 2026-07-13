import { ActionCard } from '@shared/ui/ActionCard';
import { LoginButton } from '@features/auth/Login';
import { LogoutButton } from '@features/auth/Logout';
import { useSelector } from 'react-redux';
import {
  AUTH_PAGE_HEADING,
  AUTH_PAGE_TEXT_IS_AUTH,
  AUTH_PAGE_TEXT_IS_NOT_AUTH,
} from '@pages/Auth/constants';

export const Auth = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <ActionCard
      heading={AUTH_PAGE_HEADING}
      text={
        isAuth ? { AUTH_PAGE_TEXT_IS_AUTH } : { AUTH_PAGE_TEXT_IS_NOT_AUTH }
      }
      actions={isAuth ? <LogoutButton /> : <LoginButton />}
    />
  );
};
