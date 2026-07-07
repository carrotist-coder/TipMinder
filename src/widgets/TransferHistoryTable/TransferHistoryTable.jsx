import { HeaderCell, Row, Table } from '@shared/ui/Table';

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
      <tbody></tbody>
    </Table>
  );
};
