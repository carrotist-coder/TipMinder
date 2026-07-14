import { Table } from '@shared/ui/Table';
import { TransactionRow } from '@entities/transaction';
import { Loader } from '@shared/ui/Loader';
import { useTransactions } from '@entities/transaction/hooks/useTransactions';
import { TransferHistoryTableHead } from '@widgets/TransferHistoryTable/TransferHistoryTableHead';
import { transferHistoryTableHeadTitles } from '@widgets/TransferHistoryTable/constants';

export const TransferHistoryTable = () => {
  const { data, isLoading } = useTransactions();
  if (isLoading) return <Loader />;

  return (
    <Table columnsCount={transferHistoryTableHeadTitles.length}>
      <thead>
        <TransferHistoryTableHead />
      </thead>
      <tbody>
        {data.map((transaction) => (
          <TransactionRow key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </Table>
  );
};
