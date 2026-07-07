import { Heading } from '@shared/ui/Heading';
import { TransferHistoryTable } from '@widgets/TransferHistoryTable';
import { SummaryCards } from '@widgets/SummaryCards';
import { PriceChart } from '@widgets/PriceChart';

export const Details = () => {
  return (
    <>
      <Heading>Details</Heading>
      <SummaryCards />
      <PriceChart />
      <TransferHistoryTable />
    </>
  );
};
