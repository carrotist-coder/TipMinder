import { Button } from '@/shared/ui/Button';
import { handleLogin } from '@features/auth/Login/model/service';

export const LoginButton = () => {
  return (
    <Button iconHref="/assets/icons/user-icon.svg" onClick={handleLogin}>
      Login
    </Button>
  );
};
