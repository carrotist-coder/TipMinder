import { Link } from 'react-router-dom';
import styles from './TextLink.module.css';

export const TextLink = ({
  children,
  href,
  iconHref = '/assets/icons/arrow-link.svg',
  ...props
}) => {
  return (
    <Link to={href} className={`${styles.link}`.trim()} {...props}>
      {children}
      {iconHref && (
        <svg className={styles.icon}>
          <use href={iconHref} />
        </svg>
      )}
    </Link>
  );
};
