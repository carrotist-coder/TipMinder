import { Button } from '@/shared/ui/Button';
import { useBack } from '@features/navigation/Back/model/service';

export const BackButton = () => {
  const handleBack = useBack();

  return (
    <Button type="secondary" onClick={handleBack}>
      Back
    </Button>
  );
};
