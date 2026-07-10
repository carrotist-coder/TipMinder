import { Button } from '@/shared/ui/Button';
import { useLogout } from '@features/auth/Logout/hooks/useLogout';

export const LogoutButton = () => {
  const handleLogout = useLogout();
  return (
    <Button iconHref="/assets/icons/user-icon.svg" onClick={handleLogout}>
      Log out
    </Button>
  );
};
