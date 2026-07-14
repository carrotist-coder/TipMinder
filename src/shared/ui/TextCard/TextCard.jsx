import styles from './TextCard.module.css';

export const TextCard = ({ children, ...props }) => {
  return (
    <div className={styles.card} {...props}>
      {children}
    </div>
  );
};
