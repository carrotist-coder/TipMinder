import styles from './Logo.module.css';

export const Logo = ({ isIcon = true, isText = true }) => {
  return (
    <div className={styles.logo}>
      {isIcon && (
        <div className={styles.icon}>
          <div className={styles.oval}></div>
          <div className={styles.oval}></div>
        </div>
      )}
      {isText && <p>TipMinder</p>}
    </div>
  );
};
