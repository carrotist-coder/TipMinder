import { Button } from '@/shared/ui/Button';
import { signContract } from '../model/service';

export const SignContractButton = ({ formData, onValidate, onSuccess }) => {
  const handleSignContract = (e) => {
    e.preventDefault();
    if (!onValidate()) return;
    signContract(formData);
    if (onSuccess) onSuccess();
  };
  return <Button onClick={handleSignContract}>Sign contract</Button>;
};
