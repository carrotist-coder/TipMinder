import { Input } from '@shared/ui/Input';
import { Dropdown } from '@shared/ui/Dropdown';

export const MerchantAgreementFormFields = ({
  formData,
  errors,
  options,
  onChange,
}) => {
  return (
    <>
      <Dropdown
        label="Company name"
        name="companyName"
        options={options?.companyNames || []}
        value={formData.companyName}
        onChange={onChange}
        error={errors.companyName}
      />
      <Dropdown
        label="Terminal monthly fee"
        name="monthlyFee"
        options={options?.monthlyFees || []}
        value={formData.monthlyFee}
        onChange={onChange}
        error={errors.monthlyFee}
      />
      <Input
        type="number"
        label="Personal code"
        name="personalCode"
        placeholder="Personal code"
        value={formData.personalCode}
        onChange={onChange}
        error={errors.personalCode}
      />
      <Input
        type="tel"
        label="Telephone number"
        name="phoneNumber"
        placeholder="Telephone number"
        value={formData.phoneNumber}
        onChange={onChange}
        error={errors.phoneNumber}
      />
      <Input
        type="text"
        label="Address"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={onChange}
        error={errors.address}
      />
      <Input
        type="text"
        label="Bank account number"
        name="bankAccount"
        placeholder="Bank account number"
        value={formData.bankAccount}
        onChange={onChange}
        error={errors.bankAccount}
      />
      <Input
        type="email"
        label="Email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={onChange}
        error={errors.email}
      />
      <Input
        type="date"
        label="Date from"
        name="dateFrom"
        placeholder="Date from"
        value={formData.dateFrom}
        onChange={onChange}
        error={errors.dateFrom}
      />
      <Dropdown
        label="Contract number"
        name="contractNumber"
        options={options?.contractNumbers || []}
        value={formData.contractNumber}
        onChange={onChange}
        error={errors.contractNumber}
      />
    </>
  );
};
