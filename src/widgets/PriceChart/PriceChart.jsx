import { useState } from 'react';
import { Chart } from '@shared/ui/Chart';
import { SegmentedControl } from '@shared/ui/SegmentedControl';
import styles from './PriceChart.module.css';

// Mock data (I'll change it later)
const chartData = {
  days: [
    { name: '0', value: 0.6 },
    { name: '1', value: 0.2 },
    { name: '2', value: 0.9 },
    { name: '3', value: 0.1 },
    { name: '4', value: 0.42 },
    { name: '5', value: 0.3 },
    { name: '6', value: 0.2 },
  ],
  month: [
    { name: '1', value: 0.4 },
    { name: '2', value: 0.7 },
    { name: '3', value: 0.5 },
  ],
};

export const PriceChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const options = ['Days', 'Month'];
  const currentKey = options[activeIndex].toLowerCase();

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
