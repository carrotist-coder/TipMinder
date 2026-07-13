import { Button } from '@/shared/ui/Button';
import { logoutCard } from '../model/service';
import { ICONS } from '@shared/config/assets';

export const LogoutCardButton = ({ id }) => {
  const handleLogout = () => {
    logoutCard(id);
  };
  return (
    <Button
      iconHref={ICONS.LOGOUT}
      onClick={handleLogout}
      aria-label="Logout card"
    />
  );
};
