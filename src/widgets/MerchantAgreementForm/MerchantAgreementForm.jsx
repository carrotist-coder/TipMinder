import { Form } from '@shared/ui/Form';
import { SignContractButton } from '@features/merchant-agreement/SignContract/ui/SignContractButton';
import { BackButton } from '@features/navigation/Back';
import { Loader } from '@shared/ui/Loader';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@shared/config/routes';
import { useMerchantFormWithInit } from '@entities/merchant-agreement/hooks/useMerchantFormWithInit';
import { MerchantAgreementFormFields } from '@widgets/MerchantAgreementForm/MerchantAgreementFormFields';

export const MerchantAgreementForm = () => {
  const navigate = useNavigate();
  const {
    formData,
    errors,
    options,
    isOptionsLoading,
    handleChange,
    validateAll,
  } = useMerchantFormWithInit();

  if (isOptionsLoading) return <Loader />;

  const handleSuccess = () => {
    navigate(ROUTES.SUCCESS_MERCHANT_AGREEMENT, {
      state: { fromAgreement: true },
      replace: true,
    });
  };

  return (
    <Form
      actions={
        <>
          <SignContractButton
            formData={formData}
            onValidate={validateAll}
            onSuccess={handleSuccess}
          />
          <BackButton />
        </>
      }
    >
      <MerchantAgreementFormFields
        formData={formData}
        errors={errors}
        options={options}
        onChange={handleChange}
      />
    </Form>
  );
};
