import styles from './Table.module.css';

export const Table = ({ columnsCount, children }) => (
  <table className={styles.table} style={{ '--columns-count': columnsCount }}>
    {children}
  </table>
);
