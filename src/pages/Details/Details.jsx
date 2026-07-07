import { Heading } from '@shared/ui/Heading';
import { TransferHistoryTable } from '@widgets/TransferHistoryTable';
import { SummaryCards } from '@widgets/SummaryCards';

export const Details = () => {
  return (
    <>
      <Heading>Details</Heading>
      <SummaryCards />
      <TransferHistoryTable />
    </>
  );
};
