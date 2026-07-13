import { Link } from 'react-router-dom';
import styles from './TextLink.module.css';
import { ICONS } from '@shared/config/assets';

export const TextLink = ({
  children,
  href,
  iconHref = ICONS.ARROW_LINK,
  variant = '',
  ...props
}) => {
  const style = `${styles.link} ${styles[variant] ?? ''}`.trim();
  return (
    <Link to={href} className={style} {...props}>
      {children}
      {iconHref && (
        <svg className={styles.icon}>
          <use href={iconHref} />
        </svg>
      )}
    </Link>
  );
};
