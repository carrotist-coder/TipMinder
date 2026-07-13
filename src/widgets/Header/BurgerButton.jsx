import styles from './Header.module.css';

export const BurgerButton = ({ isOpen, onClick }) => {
  return (
    <button
      className={styles.burger}
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <span />
      <span />
      <span />
    </button>
  );
};
