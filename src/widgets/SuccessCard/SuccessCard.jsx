import { ActionCard } from '@shared/ui/ActionCard';
import { GoToDashboardButton } from '@features/navigation/GoToDashboard';
import {
  SUCCESS_CARD_HEADING,
  SUCCESS_CARD_TEXT,
} from '@widgets/SuccessCard/constants';

export const SuccessCard = () => {
  return (
    <ActionCard
      heading={SUCCESS_CARD_HEADING}
      text={SUCCESS_CARD_TEXT}
      actions={<GoToDashboardButton />}
    />
  );
};
