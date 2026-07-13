import { Button } from '@/shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@shared/config/routes';

export const GoToDashboardButton = () => {
  const navigate = useNavigate();
  return <Button onClick={() => navigate(ROUTES.MAIN)}>Go to Dashboard</Button>;
};
