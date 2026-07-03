import { Button } from '@/shared/ui/Button';
import { logoutCard } from '../model/service';

export const LogoutCardButton = ({ id }) => {
  const handleLogout = () => {
    logoutCard(id);
  };
  return (
    <Button iconHref="/assets/icons/logout-circle.svg" onClick={handleLogout} />
  );
};
