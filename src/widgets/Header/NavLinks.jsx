import styles from './Header.module.css';
import { TextLink } from '@shared/ui/TextLink';
import { ROUTES } from '@shared/config/routes';

export const NavLinks = ({ isMobile = false }) => {
  const style = isMobile ? styles.mobileNav : styles.nav;
  return (
    <nav className={style}>
      <TextLink variant={'nav'} iconHref="" href={ROUTES.ABOUT}>
        About
      </TextLink>
      <TextLink variant={'nav'} iconHref="" href={ROUTES.MERCHANT_AGREEMENT}>
        General condition
      </TextLink>
      <TextLink variant={'nav'} iconHref="" href={ROUTES.PRICE_LIST}>
        Price list
      </TextLink>
      <TextLink variant={'nav'} iconHref="" href={ROUTES.FAQ}>
        FAQ
      </TextLink>
      <TextLink variant={'nav'} iconHref="" href={ROUTES.CONTACTS}>
        Contacts
      </TextLink>
    </nav>
  );
};
