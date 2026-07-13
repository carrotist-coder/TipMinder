import { Heading } from '@shared/ui/Heading';
import styles from './NotFound404.module.css';
import { GoToDashboardButton } from '@features/navigation/GoToDashboard';

export const NotFound404 = () => {
  return (
    <section className={styles.page}>
      <Heading>Page not found</Heading>
      <div className={styles.container}>
        <span className={styles.error}>404</span>
      </div>
      <div className={styles.button}>
        <GoToDashboardButton />
      </div>
    </section>
  );
};
