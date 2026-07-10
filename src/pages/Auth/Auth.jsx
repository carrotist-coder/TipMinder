import { Heading } from '@shared/ui/Heading';
import { LoginButton } from '@features/auth/Login';
import { LogoutButton } from '@features/auth/Logout';
import { useSelector } from 'react-redux';

export const Auth = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <>
      <Heading>Welcome</Heading>
      {isAuth ? (
        <>
          <LogoutButton />
        </>
      ) : (
        <>
          <LoginButton />
        </>
      )}
    </>
  );
};
