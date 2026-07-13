import { Button } from '@/shared/ui/Button';
import { lockCard } from '../model/service';

export const LockCardButton = ({ id }) => {
  const handleLock = () => {
    lockCard(id);
  };
  return (
    <Button iconHref="/assets/sprite.svg#lock-fill" onClick={handleLock} />
  );
};
