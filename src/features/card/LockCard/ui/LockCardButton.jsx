import { Button } from '@/shared/ui/Button';
import { lockCard } from '../model/service';
import { ICONS } from '@shared/config/assets';

export const LockCardButton = ({ id }) => {
  const handleLock = () => {
    lockCard(id);
  };
  return (
    <Button iconHref={ICONS.LOCK} onClick={handleLock} aria-label="Lock card" />
  );
};
