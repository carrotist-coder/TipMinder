import { Row } from '@shared/ui/Table/Row';
import { HeaderCell } from '@shared/ui/Table/HeaderCell';

export const TableHead = ({ heads }) => {
  return (
    <Row>
      {heads.map((head) => (
        <HeaderCell key={head}>{head}</HeaderCell>
      ))}
    </Row>
  );
};
