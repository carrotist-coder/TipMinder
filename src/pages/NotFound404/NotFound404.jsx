import { Heading } from '@shared/ui/Heading';
import styles from './NotFound404.module.css';
import { BackButton } from '@features/navigation/Back';

export const NotFound404 = () => {
  return (
    <section className={styles.page}>
      <Heading>Page not found</Heading>
      <div className={styles.container}>
        <span className={styles.error}>404</span>
      </div>
      <div className={styles.button}>
        <BackButton />
      </div>
    </section>
  );
};
