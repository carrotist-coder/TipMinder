import { Heading } from '@shared/ui/Heading';
import { LoginButton } from '@features/auth/Login';
import { LogoutButton } from '@features/auth/Logout';
import { useSelector } from 'react-redux';
import styles from './AuthPage.module.css';

export const Auth = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Heading>Profile</Heading>
        <p className={styles.text}>
          {isAuth
            ? 'You are already logged in. Manage your account below.'
            : 'Please login to access your dashboard and manage your tips.'}
        </p>
        {isAuth ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
};
