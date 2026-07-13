import styles from './StatusBadge.module.css';

const STATUS_DEFAULT = 'error';

export const StatusBadge = ({ status = STATUS_DEFAULT }) => {
  return (
    <div
      className={`${styles.badge} ${styles[status] ?? styles[STATUS_DEFAULT]}`}
    >
      {styles[status] ? status : STATUS_DEFAULT}
    </div>
  );
};
