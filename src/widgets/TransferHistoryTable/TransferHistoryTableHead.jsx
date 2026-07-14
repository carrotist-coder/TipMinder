import { TableHead } from '@shared/ui/Table/TableHead';
import { transferHistoryTableHeadTitles } from '@widgets/TransferHistoryTable/constants';

export const TransferHistoryTableHead = () => {
  return <TableHead heads={transferHistoryTableHeadTitles} />;
};
