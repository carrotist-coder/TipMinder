import { Button } from '@/shared/ui/Button';
import { logout } from '../model/service';

export const LogoutButton = () => {
  return (
    <Button iconHref="/assets/icons/user-icon.svg" onClick={logout}>
      Log out
    </Button>
  );
};
