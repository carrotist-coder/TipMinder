import styles from './Header.module.css';
import { Logo } from '@shared/ui/Logo';
import { TextLink } from '@shared/ui/TextLink';
import { LogoutButton } from '@features/auth/Logout';
import { LoginButton } from '@features/auth/Login';
import { useSelector } from 'react-redux';

export const Header = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav}>
        <TextLink variant={'nav'} iconHref="" href="/about">
          About
        </TextLink>
        <TextLink variant={'nav'} iconHref="" href="/agreement">
          General condition
        </TextLink>
        <TextLink variant={'nav'} iconHref="" href="/price">
          Price list
        </TextLink>
        <TextLink variant={'nav'} iconHref="" href="/faq">
          FAQ
        </TextLink>
        <TextLink variant={'nav'} iconHref="" href="/contacts">
          Contacts
        </TextLink>
      </nav>
      {isAuth ? <LogoutButton /> : <LoginButton />}
    </header>
  );
};
