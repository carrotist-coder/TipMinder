import { Row, HeaderCell } from '@/shared/ui/Table';

export const CardsTableHeader = () => {
  return (
    <Row>
      <HeaderCell>Number</HeaderCell>
      <HeaderCell>Card number</HeaderCell>
      <HeaderCell>Status</HeaderCell>
      <HeaderCell>Valid till</HeaderCell>
      <HeaderCell>Action</HeaderCell>
    </Row>
  );
};
