import { Heading } from '@shared/ui/Heading';
import { TransferHistoryTable } from '@widgets/TransferHistoryTable';
import { SummaryCard } from '@entities/summary-card';

export const Details = () => {
  return (
    <>
      <Heading>Details</Heading>
      <TransferHistoryTable />
      <SummaryCard
        title={'Username'}
        value={'Jackson_2'}
        linkText={'Edit profile'}
      />
      <SummaryCard
        title={'Card'}
        value={'1921 0120 0120 0120'}
        linkText={'See other cards'}
      />
      <SummaryCard
        title={'Tips transferred'}
        value={'Jackson_2'}
        linkText={'View details'}
      />
      <SummaryCard
        title={'Tips amomunt'}
        value={'10$ (2030-12-31)'}
        linkText={'View details'}
      />
      <SummaryCard
        title={'GPT paid'}
        value={'20$ (2030-12-31)'}
        linkText={'View details'}
      />
      <SummaryCard
        title={'Tips processing'}
        value={'20$ (2030-12-31)'}
        linkText={'View details'}
      />
    </>
  );
};
