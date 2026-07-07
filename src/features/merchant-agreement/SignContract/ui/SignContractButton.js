import { Button } from '@/shared/ui/Button';
import { signContract } from '../model/service';

export const SignContractButton = ({ formData }) => {
  const handleSignContract = (e) => {
    e.preventDefault();
    signContract(formData);
  };
  return <Button onClick={handleSignContract}>Sign contract</Button>;
};
