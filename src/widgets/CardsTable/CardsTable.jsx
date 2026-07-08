import { Table, Row, HeaderCell } from '@/shared/ui/Table';
import { CardRow } from '@/entities/card';
import { LockCardButton, LogoutCardButton } from '@/features/card';
import { useCards } from '@entities/card/model/useCards';
import { Loader } from '@shared/ui/Loader';

export const CardsTable = () => {
  const { data, isLoading } = useCards();
  if (isLoading) return <Loader />;

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
        {data.map((card) => (
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
