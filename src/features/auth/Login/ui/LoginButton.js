import { Button } from '@/shared/ui/Button';
import { useLogin } from '@features/auth/Login/hooks/useLogin';

export const LoginButton = () => {
  const handleLogin = useLogin();
  return (
    <Button iconHref="/assets/icons/user-icon.svg" onClick={handleLogin}>
      Login
    </Button>
  );
};
