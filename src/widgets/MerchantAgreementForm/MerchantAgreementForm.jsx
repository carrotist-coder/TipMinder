import { Input } from '@shared/ui/Input';
import { Dropdown } from '@shared/ui/Dropdown';
import { Form } from '@shared/ui/Form';
import { SignContractButton } from '@features/merchant-agreement/SignContract/ui/SignContractButton';
import { BackButton } from '@features/navigation/Back';
import { useMerchantForm } from '@entities/merchant-agreement/hooks/useMerchantForm';
import { useMerchantFormOptions } from '@entities/merchant-agreement/hooks/useMerchantFormOptions';
import { Loader } from '@shared/ui/Loader';
import { useEffect, useRef, useState } from 'react';
import { SuccessCard } from '@entities/merchant-agreement/ui/SuccessCard';

export const MerchantAgreementForm = () => {
  const [isSigned, setIsSigned] = useState(false);
  const { formData, errors, handleChange, validateAll } = useMerchantForm();
  const { data: options, isLoading: isOptionsLoading } =
    useMerchantFormOptions();

  const isInitialized = useRef(false);
  useEffect(() => {
    if (options && !isInitialized.current) {
      if (options.companyNames?.length > 0 && !formData.companyName) {
        handleChange({
          target: { name: 'companyName', value: options.companyNames[0] },
        });
      }
      if (options.monthlyFees?.length > 0 && !formData.monthlyFee) {
        handleChange({
          target: { name: 'monthlyFee', value: options.monthlyFees[0] },
        });
      }
      if (options.contractNumbers?.length > 0 && !formData.contractNumber) {
        handleChange({
          target: { name: 'contractNumber', value: options.contractNumbers[0] },
        });
      }
      isInitialized.current = true;
    }
  }, [
    options,
    formData.companyName,
    formData.monthlyFee,
    formData.contractNumber,
    handleChange,
  ]);

  if (isSigned) return <SuccessCard />;
  if (isOptionsLoading) return <Loader />;

  return (
    <Form
      actions={
        <>
          <SignContractButton
            formData={formData}
            onValidate={validateAll}
            onSuccess={() => setIsSigned(true)}
          />
          <BackButton />
        </>
      }
    >
      <Dropdown
        label="Company name"
        name="companyName"
        options={options?.companyNames || []}
        value={formData.companyName}
        onChange={handleChange}
        error={errors.companyName}
      />
      <Dropdown
        label="Terminal monthly fee"
        name="monthlyFee"
        options={options?.monthlyFees || []}
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
        options={options?.contractNumbers || []}
        value={formData.contractNumber}
        onChange={handleChange}
        error={errors.contractNumber}
      />
    </Form>
  );
};
