import { Row, HeaderCell } from '@/shared/ui/Table';

export const TransferHistoryTableHeader = () => {
  return (
    <Row>
      <HeaderCell>Data</HeaderCell>
      <HeaderCell>Location</HeaderCell>
      <HeaderCell>Amount of tips transferred</HeaderCell>
    </Row>
  );
};
