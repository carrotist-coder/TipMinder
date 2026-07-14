import { Button } from '@/shared/ui/Button';
import { useBack } from '@features/navigation/Back/hooks/useBack';

export const BackButton = () => {
  const handleBack = useBack();

  return (
    <Button type="secondary" onClick={handleBack}>
      Back
    </Button>
  );
};
