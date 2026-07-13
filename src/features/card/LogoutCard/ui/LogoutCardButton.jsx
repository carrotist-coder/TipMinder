import { Button } from '@/shared/ui/Button';
import { logoutCard } from '../model/service';

export const LogoutCardButton = ({ id }) => {
  const handleLogout = () => {
    logoutCard(id);
  };
  return (
    <Button
      iconHref="/assets/sprite.svg#logout-circle"
      onClick={handleLogout}
      aria-label="Logout card"
    />
  );
};
