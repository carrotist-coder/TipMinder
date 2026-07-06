import { Table, Row, HeaderCell } from '@/shared/ui/Table';
import { CardRow, mockCards } from '@/entities/card';
import { LockCardButton, LogoutCardButton } from '@/features/card';

export const CardsTable = () => {
  return (
    <Table columnsCount={5}>
      <thead>
        <Row>
          <HeaderCell>Number</HeaderCell>
          <HeaderCell>Card number</HeaderCell>
          <HeaderCell>Status</HeaderCell>
          <HeaderCell>Valid till</HeaderCell>
          <HeaderCell>Action</HeaderCell>
        </Row>
      </thead>
      <tbody>
        {mockCards.map((card) => (
          <CardRow
            key={card.number}
            card={card}
            actions={
              <>
                <LogoutCardButton id={card.number} />
                <LockCardButton id={card.number} />
              </>
            }
          />
        ))}
      </tbody>
    </Table>
  );
};
