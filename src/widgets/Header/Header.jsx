import styles from './Header.module.css';
import { Logo } from '@shared/ui/Logo';
import { TextLink } from '@shared/ui/TextLink';
import { LogoutButton } from '@features/auth/Logout';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav}>
        <TextLink variant={'nav'} iconHref="">
          About
        </TextLink>
        <TextLink variant={'nav'} iconHref="">
          General condition
        </TextLink>
        <TextLink variant={'nav'} iconHref="">
          Price list
        </TextLink>
        <TextLink variant={'nav'} iconHref="">
          FAQ
        </TextLink>
        <TextLink variant={'nav'} iconHref="">
          Contacts
        </TextLink>
      </nav>
      <LogoutButton />
    </header>
  );
};
