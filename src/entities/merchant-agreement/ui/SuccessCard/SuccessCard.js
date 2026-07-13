import { ActionCard } from '@shared/ui/ActionCard';
import { Button } from '@shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import {
  SUCCESS_CARD_HEADING,
  SUCCESS_CARD_TEXT,
} from '@entities/merchant-agreement/ui/SuccessCard/constants';

export const SuccessCard = () => {
  const navigate = useNavigate();

  return (
    <ActionCard
      heading={SUCCESS_CARD_HEADING}
      text={SUCCESS_CARD_TEXT}
      actions={<Button onClick={() => navigate('/')}>Go to Dashboard</Button>}
    />
  );
};
