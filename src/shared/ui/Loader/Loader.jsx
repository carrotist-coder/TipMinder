import styles from './Loader.module.css';

export const Loader = ({ isText = true }) => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
      {isText && <p>Loading...</p>}
    </div>
  );
};
