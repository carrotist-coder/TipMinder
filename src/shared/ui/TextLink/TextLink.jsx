import { Link } from 'react-router-dom';
import styles from './TextLink.module.css';

export const TextLink = ({
  children,
  href,
  iconHref = '/assets/sprite.svg#arrow-link',
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
