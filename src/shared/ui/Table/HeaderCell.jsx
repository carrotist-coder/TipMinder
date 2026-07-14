import styles from './Table.module.css';

export const HeaderCell = ({ children }) => (
  <th className={styles.th}>{children}</th>
);
