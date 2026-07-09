import styles from './Logo.module.css';
import { Link } from 'react-router-dom';

export const Logo = ({ isIcon = true, isText = true }) => {
  return (
    <Link className={styles.logo} to={'/'}>
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
