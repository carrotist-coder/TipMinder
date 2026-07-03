import styles from './Table.module.css';

export const Cell = ({ children }) => <td className={styles.td}>{children}</td>;
