import styles from './Header.module.css';
import { Logo } from '@shared/ui/Logo';
import { TextLink } from '@shared/ui/TextLink';
import { LogoutButton } from '@features/auth/Logout';
import { LoginButton } from '@features/auth/Login';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const NavLinks = ({ isMobile = false }) => {
  const style = !isMobile ? `${styles.nav}` : `${styles.mobileNav}`;
  return (
    <nav className={style}>
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
  );
};

export const Header = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <Logo onClick={closeMenu} />

      {/* Desktop */}
      <NavLinks />
      <div className={styles.authButton}>
        {isAuth ? <LogoutButton /> : <LoginButton />}
      </div>

      {/* Mobile */}
      <button
        className={styles.burger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}
        onClick={closeMenu}
      >
        <NavLinks isMobile={true} />
        <div>{isAuth ? <LogoutButton /> : <LoginButton />}</div>
      </div>
    </header>
  );
};
