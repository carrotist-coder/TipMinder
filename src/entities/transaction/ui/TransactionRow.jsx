import { Cell, Row } from '@/shared/ui/Table';

export const TransactionRow = ({ transaction }) => {
  return (
    <Row>
      <Cell>{transaction.date}</Cell>
      <Cell>{transaction.location}</Cell>
      <Cell>{transaction.amount}</Cell>
    </Row>
  );
};
