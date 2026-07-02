import styles from './Button.module.css';

export const Button = ({ children, type = '', onClick, ...props }) => {
  const style = `${styles.button} ${styles[type] ?? ''}`;
  return (
    <button className={style} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
