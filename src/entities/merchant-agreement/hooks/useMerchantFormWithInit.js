import { useEffect, useRef } from 'react';
import { useMerchantForm } from './useMerchantForm';
import { useMerchantFormOptions } from './useMerchantFormOptions';

export const useMerchantFormWithInit = () => {
  const { formData, errors, handleChange, validateAll } = useMerchantForm();
  const { data: options, isOptionsLoading } = useMerchantFormOptions();
  const isInitialized = useRef(false);

  useEffect(() => {
    if (options && !isInitialized.current) {
      const initFields = [
        { key: 'companyName', list: options.companyNames },
        { key: 'monthlyFee', list: options.monthlyFees },
        { key: 'contractNumber', list: options.contractNumbers },
      ];
      initFields.forEach(({ key, list }) => {
        if (list?.length > 0 && !formData[key]) {
          handleChange({ target: { name: key, value: list[0] } });
        }
      });
      isInitialized.current = true;
    }
  }, [options, formData, handleChange]);

  return {
    formData,
    errors,
    options,
    isOptionsLoading,
    handleChange,
    validateAll,
  };
};
