import { ActionCard } from '@shared/ui/ActionCard';
import { Button } from '@/shared/ui/Button';
import { useNavigate } from 'react-router-dom';

export const SuccessCard = () => {
  const navigate = useNavigate();

  return (
    <ActionCard
      heading="Contract Signed!"
      text="Your contract has been successfully processed."
      actions={<Button onClick={() => navigate('/')}>Go to Dashboard</Button>}
    />
  );
};
