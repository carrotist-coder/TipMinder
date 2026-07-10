import styles from './Table.module.css';

export const Table = ({ columnsCount, children }) => (
  <div className={styles.container}>
    <table className={styles.table} style={{ '--columns-count': columnsCount }}>
      {children}
    </table>
  </div>
);
