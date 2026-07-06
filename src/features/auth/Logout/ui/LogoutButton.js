import { Button } from '@/shared/ui/Button';
import { handleLogout } from '@features/auth/Logout/model/service';

export const LogoutButton = () => {
  return (
    <Button iconHref="/assets/icons/user-icon.svg" onClick={handleLogout}>
      Log out
    </Button>
  );
};
