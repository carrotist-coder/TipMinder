import styles from './SummaryCards.module.css';
import { SummaryCard } from '@entities/summary-card';
import { mockSummaryCards } from '@widgets/SummaryCards/mock';

export const SummaryCards = () => {
  return (
    <div className={styles.grid}>
      {mockSummaryCards.map((card, index) => (
        <SummaryCard key={index} {...card} />
      ))}
    </div>
  );
};
