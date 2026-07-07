import { Input } from '@shared/ui/Input';
import { Dropdown } from '@shared/ui/Dropdown';
import { Form } from '@shared/ui/Form';
import { SignContractButton } from '@features/merchant-agreement/SignContract/ui/SignContractButton';
import { useDispatch, useSelector } from 'react-redux';
import { updateField } from '@entities/merchant-agreement/model/slice';
import { BackButton } from '@features/navigation/Back';
import { useState } from 'react';
import { merchantValidationMap } from '@entities/merchant-agreement/model/validation';

export const MerchantAgreementForm = () => {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.merchantAgreement);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));

    const validator = merchantValidationMap[name];
    if (validator) {
      setErrors((prev) => ({ ...prev, [name]: validator(value) }));
    }
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
        error={errors.companyName}
      />
      <Dropdown
        label="Terminal monthly fee"
        name="monthlyFee"
        value={formData.monthlyFee}
        onChange={handleChange}
        error={errors.monthlyFee}
      />
      <Input
        type="number"
        label="Personal code"
        name="personalCode"
        placeholder="Personal code"
        value={formData.personalCode}
        onChange={handleChange}
        error={errors.personalCode}
      />
      <Input
        type="tel"
        label="Telephone number"
        name="phoneNumber"
        placeholder="Telephone number"
        value={formData.phoneNumber}
        onChange={handleChange}
        error={errors.phoneNumber}
      />
      <Input
        type="text"
        label="Address"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        error={errors.address}
      />
      <Input
        type="text"
        label="Bank account number"
        name="bankAccount"
        placeholder="Bank account number"
        value={formData.bankAccount}
        onChange={handleChange}
        error={errors.bankAccount}
      />
      <Input
        type="email"
        label="Email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <Input
        type="date"
        label="Date from"
        name="dateFrom"
        placeholder="Date from"
        value={formData.dateFrom}
        onChange={handleChange}
        error={errors.dateFrom}
      />
      <Dropdown
        label="Contract number"
        name="contractNumber"
        value={formData.contractNumber}
        onChange={handleChange}
        error={errors.contractNumber}
      />
    </Form>
  );
};
