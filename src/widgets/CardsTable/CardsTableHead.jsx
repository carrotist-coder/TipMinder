import { TableHead } from '@shared/ui/Table/TableHead';
import { cardsTableHeadTitles } from '@widgets/CardsTable/constants';

export const CardsTableHead = () => {
  return <TableHead heads={cardsTableHeadTitles} />;
};
