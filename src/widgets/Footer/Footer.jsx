import styles from './Footer.module.css';

export const Footer = ({ year = new Date().getFullYear() }) => {
  return (
    <footer className={styles.footer}>
      <p>TipMinder</p>
      <p>{year} All rights reserved</p>
    </footer>
  );
};
