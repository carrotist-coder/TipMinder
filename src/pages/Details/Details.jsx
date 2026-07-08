import { Heading } from '@shared/ui/Heading';
import { TransferHistoryTable } from '@widgets/TransferHistoryTable';
import { SummaryCards } from '@widgets/SummaryCards';
import { PriceChart } from '@widgets/PriceChart';
import styles from './Details.module.css';

export const Details = () => {
  return (
    <>
      <Heading>Details</Heading>
      <div className={styles.grid}>
        <SummaryCards />
        <div className={styles.main}>
          <PriceChart />
          <TransferHistoryTable />
        </div>
      </div>
    </>
  );
};
