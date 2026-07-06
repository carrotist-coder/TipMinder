import { Input } from '@shared/ui/Input';
import { Dropdown } from '@shared/ui/Dropdown';
import { Button } from '@shared/ui/Button';

export const MerchantAgreementForm = () => {
  return (
    <form>
      <Dropdown label="Company name" name="companyName" />
      <Dropdown label="Terminal monthly fee" name="monthlyFee" />
      <Input
        type="number"
        label="Personal code"
        name="personalCode"
        placeholder="Personal code"
      />
      <Input
        type="phone"
        label="Telephone number"
        name="phoneNumber"
        placeholder="Telephone number"
      />
      <Input type="text" label="Address" name="address" placeholder="Address" />
      <Input
        type="text"
        label="Bank account number"
        name="bankAccount"
        placeholder="Bank account number"
      />
      <Input type="email" label="Email" name="email" placeholder="Email" />
      <Input
        type="date"
        label="Date from"
        name="dateFrom"
        placeholder="Date from"
      />
      <Dropdown label="Contract number" name="contractNumber" />
      <Button>Sign contract</Button>
      <Button type="secondary">Back</Button>
    </form>
  );
};
