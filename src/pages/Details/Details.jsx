import { Heading } from '@shared/ui/Heading';
import { TransferHistoryTable } from '@widgets/TransferHistoryTable';
import { SummaryCards } from '@widgets/SummaryCards';
import { Chart } from '@shared/ui/Chart/Chart';

export const Details = () => {
  return (
    <>
      <Heading>Details</Heading>
      <SummaryCards />
      <Chart />
      <TransferHistoryTable />
    </>
  );
};
