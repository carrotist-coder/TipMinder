import { Heading } from '@shared/ui/Heading';
import styles from './NotFound404.module.css';
import { GoToDashboardButton } from '@features/navigation/GoToDashboard';
import {
  NOT_FOUND_PAGE_ERROR_CODE,
  NOT_FOUND_PAGE_HEADING,
} from '@pages/NotFound404/constants';

export const NotFound404 = () => {
  return (
    <section className={styles.page}>
      <Heading>{NOT_FOUND_PAGE_HEADING}</Heading>
      <div className={styles.container}>
        <span className={styles.error}>{NOT_FOUND_PAGE_ERROR_CODE}</span>
      </div>
      <GoToDashboardButton />
    </section>
  );
};
