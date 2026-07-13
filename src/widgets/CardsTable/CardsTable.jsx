import { Table } from '@/shared/ui/Table';
import { CardRow } from '@/entities/card';
import { LockCardButton, LogoutCardButton } from '@/features/card';
import { useCards } from '@entities/card/hooks/useCards';
import { Loader } from '@shared/ui/Loader';
import { CardsTableHeader } from '@widgets/CardsTable/CardsTableHeader';

export const CardsTable = () => {
  const { data, isLoading } = useCards();
  if (isLoading) return <Loader />;

  return (
    <Table columnsCount={5}>
      <thead>
        <CardsTableHeader />
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
