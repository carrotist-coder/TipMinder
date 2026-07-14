import { useMemo, useState } from 'react';
import { Chart } from '@shared/ui/Chart';
import { SegmentedControl } from '@shared/ui/SegmentedControl';
import styles from './PriceChart.module.css';
import { useTransactions } from '@entities/transaction/hooks/useTransactions';
import {
  transformTransactionsToDays,
  transformTransactionsToMonths,
} from '@entities/transaction/helpers/transformTransactionsToChartData';
import { Loader } from '@shared/ui/Loader';

export const PriceChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const options = ['Days', 'Month'];
  const currentKey = options[activeIndex].toLowerCase();

  const { data, isLoading } = useTransactions();

  const chartData = useMemo(() => {
    if (!data) return { days: [], month: [] };
    return {
      days: transformTransactionsToDays(data),
      month: transformTransactionsToMonths(data),
    };
  }, [data]);

  if (isLoading) return <Loader />;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Current price</h3>
        <SegmentedControl
          options={options}
          activeIndex={activeIndex}
          onChange={setActiveIndex}
        />
      </div>
      <div className={styles.chart}>
        <Chart data={chartData[currentKey]} />
      </div>
      <div className={styles.footer}>
        <span className={styles.dot} />
        <p>Amount of tips transferred</p>
      </div>
    </div>
  );
};
