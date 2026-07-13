import { Table } from '@shared/ui/Table';
import { TransactionRow } from '@entities/transaction';
import { Loader } from '@shared/ui/Loader';
import { useTransactions } from '@entities/transaction/hooks/useTransactions';
import { TransferHistoryTableHeader } from '@widgets/TransferHistoryTable/TransferHistoryTableHeader';

export const TransferHistoryTable = () => {
  const { data, isLoading } = useTransactions();
  if (isLoading) return <Loader />;

  return (
    <Table columnsCount={3}>
      <thead>
        <TransferHistoryTableHeader />
      </thead>
      <tbody>
        {data.map((transaction) => (
          <TransactionRow key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </Table>
  );
};
