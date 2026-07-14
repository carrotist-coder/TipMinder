import styles from './Header.module.css';
import { TextLink } from '@shared/ui/TextLink';
import { ROUTES } from '@shared/config/routes';
import { VARIANTS } from '@shared/ui/TextLink/constants';

export const NavLinks = ({ isMobile = false }) => {
  const style = isMobile ? styles.mobileNav : styles.nav;
  return (
    <nav className={style}>
      <TextLink variant={VARIANTS.NAV} href={ROUTES.ABOUT}>
        About
      </TextLink>
      <TextLink variant={VARIANTS.NAV} href={ROUTES.MERCHANT_AGREEMENT}>
        General condition
      </TextLink>
      <TextLink variant={VARIANTS.NAV} href={ROUTES.PRICE_LIST}>
        Price list
      </TextLink>
      <TextLink variant={VARIANTS.NAV} href={ROUTES.FAQ}>
        FAQ
      </TextLink>
      <TextLink variant={VARIANTS.NAV} href={ROUTES.CONTACTS}>
        Contacts
      </TextLink>
    </nav>
  );
};
