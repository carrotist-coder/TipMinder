import { HeaderCell, Row, Table } from '@shared/ui/Table';
import { TransactionRow } from '@entities/transaction';
import { Loader } from '@shared/ui/Loader';
import { useTransactions } from '@entities/transaction/hooks/useTransactions';

export const TransferHistoryTable = () => {
  const { data, isLoading } = useTransactions();
  if (isLoading) return <Loader />;

  return (
    <Table columnsCount={3}>
      <thead>
        <Row>
          <HeaderCell>Data</HeaderCell>
          <HeaderCell>Location</HeaderCell>
          <HeaderCell>Amount of tips transferred</HeaderCell>
        </Row>
      </thead>
      <tbody>
        {data.map((transaction) => (
          <TransactionRow key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </Table>
  );
};
