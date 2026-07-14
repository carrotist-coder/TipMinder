import { Heading } from '@shared/ui/Heading';
import styles from './ActionCard.module.css';

export const ActionCard = ({ heading, text, actions }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Heading>{heading}</Heading>
        <p className={styles.text}>{text}</p>
        {actions}
      </div>
    </div>
  );
};
