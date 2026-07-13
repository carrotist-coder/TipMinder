import styles from './Header.module.css';
import { TextLink } from '@shared/ui/TextLink';

export const NavLinks = ({ isMobile = false }) => {
  const style = isMobile ? styles.mobileNav : styles.nav;
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
