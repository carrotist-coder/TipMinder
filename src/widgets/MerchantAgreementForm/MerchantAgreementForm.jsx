import { Input } from '@shared/ui/Input';
import { Dropdown } from '@shared/ui/Dropdown';
import { Form } from '@shared/ui/Form';
import { SignContractButton } from '@features/merchant-agreement/SignContract/ui/SignContractButton';
import { useDispatch, useSelector } from 'react-redux';
import { updateField } from '@entities/merchant-agreement/model/slice';
import { BackButton } from '@features/navigation/Back';

export const MerchantAgreementForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.merchantAgreement);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  };

  return (
    <Form
      actions={
        <>
          <SignContractButton formData={formData} />
          <BackButton />
        </>
      }
    >
      <Dropdown
        label="Company name"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
      />
      <Dropdown
        label="Terminal monthly fee"
        name="monthlyFee"
        value={formData.monthlyFee}
        onChange={handleChange}
      />
      <Input
        type="number"
        label="Personal code"
        name="personalCode"
        placeholder="Personal code"
        value={formData.personalCode}
        onChange={handleChange}
      />
      <Input
        type="tel"
        label="Telephone number"
        name="phoneNumber"
        placeholder="Telephone number"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <Input
        type="text"
        label="Address"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />
      <Input
        type="text"
        label="Bank account number"
        name="bankAccount"
        placeholder="Bank account number"
        value={formData.bankAccount}
        onChange={handleChange}
      />
      <Input
        type="email"
        label="Email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        type="date"
        label="Date from"
        name="dateFrom"
        placeholder="Date from"
        value={formData.dateFrom}
        onChange={handleChange}
      />
      <Dropdown
        label="Contract number"
        name="contractNumber"
        value={formData.contractNumber}
        onChange={handleChange}
      />
    </Form>
  );
};
