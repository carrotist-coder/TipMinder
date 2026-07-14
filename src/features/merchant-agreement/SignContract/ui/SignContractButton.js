import { Button } from '@/shared/ui/Button';
import { signContract } from '@features/merchant-agreement/SignContract/model/service';
import { useDispatch } from 'react-redux';

export const SignContractButton = ({ formData, onValidate, onSuccess }) => {
  const dispatch = useDispatch();
  const handleSignContract = (e) => {
    e.preventDefault();
    if (!onValidate()) return;
    signContract(formData, dispatch);
    if (onSuccess) onSuccess();
  };
  return <Button onClick={handleSignContract}>Sign contract</Button>;
};
