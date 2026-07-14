import { useEffect, useRef } from 'react';
import { useMerchantForm } from './useMerchantForm';
import { useMerchantFormOptions } from './useMerchantFormOptions';

export const useMerchantFormWithInit = () => {
  const { formData, errors, handleChange, validateAll, setFields } =
    useMerchantForm();
  const { data: options, isOptionsLoading } = useMerchantFormOptions();
  const isInitialized = useRef(false);

  useEffect(() => {
    if (options && !isInitialized.current) {
      const initialPayload = {};
      const initFields = [
        { key: 'companyName', list: options.companyNames },
        { key: 'monthlyFee', list: options.monthlyFees },
        { key: 'contractNumber', list: options.contractNumbers },
      ];

      initFields.forEach(({ key, list }) => {
        if (list?.length > 0 && !formData[key]) {
          initialPayload[key] = list[0];
        }
      });

      if (Object.keys(initialPayload).length > 0) {
        setFields(initialPayload);
      }

      isInitialized.current = true;
    }
  }, [options, formData, setFields]);

  return {
    formData,
    errors,
    options,
    isOptionsLoading,
    handleChange,
    validateAll,
  };
};
