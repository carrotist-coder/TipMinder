import { Button } from '@/shared/ui/Button';
import { login } from '../model/service';

export const LoginButton = () => {
  return (
    <Button iconHref="/assets/icons/user-icon.svg" onClick={login}>
      Login
    </Button>
  );
};
