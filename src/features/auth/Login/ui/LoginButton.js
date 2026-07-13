import { Button } from '@/shared/ui/Button';
import { useLogin } from '@features/auth/Login/hooks/useLogin';

export const LoginButton = () => {
  const handleLogin = useLogin();
  return (
    <Button iconHref="/assets/sprite.svg#user-icon" onClick={handleLogin}>
      Login
    </Button>
  );
};
