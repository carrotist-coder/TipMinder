import { HeaderCell, Row, Table } from '@shared/ui/Table';
import { mockTransactions, TransactionRow } from '@entities/transaction';

export const TransferHistoryTable = () => {
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
        {mockTransactions.map((transaction) => (
          <TransactionRow key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </Table>
  );
};
