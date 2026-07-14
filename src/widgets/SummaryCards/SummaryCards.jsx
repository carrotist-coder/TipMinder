import styles from './SummaryCards.module.css';
import { SummaryCard } from '@entities/summary';
import { Loader } from '@shared/ui/Loader';
import { useSummary } from '@entities/summary/hooks/useSummary';
import { transformSummaryToCards } from '@entities/summary/helpers/transformSummaryToCards';

export const SummaryCards = () => {
  const { data, isLoading } = useSummary();
  const cards = transformSummaryToCards(data);
  if (isLoading) return <Loader />;

  return (
    <div className={styles.grid}>
      {cards.map((card, index) => (
        <SummaryCard key={index} {...card} />
      ))}
    </div>
  );
};
