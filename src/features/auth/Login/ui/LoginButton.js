import { Button } from '@/shared/ui/Button';
import { useLogin } from '@features/auth/Login/hooks/useLogin';
import { ICONS } from '@shared/config/assets';

export const LoginButton = () => {
  const handleLogin = useLogin();
  return (
    <Button iconHref={ICONS.USER} onClick={handleLogin}>
      Login
    </Button>
  );
};
