import { Button } from '@/shared/ui/Button';
import { useLogout } from '@features/auth/Logout/hooks/useLogout';
import { ICONS } from '@shared/config/assets';

export const LogoutButton = () => {
  const handleLogout = useLogout();
  return (
    <Button iconHref={ICONS.USER} onClick={handleLogout}>
      Log out
    </Button>
  );
};
