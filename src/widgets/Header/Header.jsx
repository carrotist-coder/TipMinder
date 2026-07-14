import styles from './Header.module.css';
import { Logo } from '@shared/ui/Logo';
import { LogoutButton } from '@features/auth/Logout';
import { LoginButton } from '@features/auth/Login';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { NavLinks } from '@widgets/Header/NavLinks';
import { BurgerButton } from '@widgets/Header/BurgerButton';

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
      <BurgerButton onClick={toggleMenu} />

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
