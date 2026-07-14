import styles from './Logo.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '@shared/config/routes';

export const Logo = ({ isIcon = true, isText = true, ...props }) => {
  return (
    <Link className={styles.logo} to={ROUTES.MAIN} {...props}>
      {isIcon && (
        <div className={styles.icon}>
          <div className={styles.oval}></div>
          <div className={styles.oval}></div>
        </div>
      )}
      {isText && <p>TipMinder</p>}
    </Link>
  );
};
