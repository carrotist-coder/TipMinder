import styles from './StatusBadge.module.css';

const statusDefaultValue = 'error';

export const StatusBadge = ({ status = statusDefaultValue }) => {
  return (
    <div
      className={`${styles.badge} ${styles[status] ?? styles[statusDefaultValue]}`}
    >
      {styles[status] ? status : 'Error'}
    </div>
  );
};
