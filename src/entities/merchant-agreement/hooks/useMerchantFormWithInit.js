import { useEffect, useRef } from 'react';
import { useMerchantForm } from './useMerchantForm';
import { useMerchantFormOptions } from './useMerchantFormOptions';
import { getInitialPayload } from '@entities/merchant-agreement/model/utils';

export const useMerchantFormWithInit = () => {
  const { formData, errors, handleChange, validateAll, setFields } =
    useMerchantForm();
  const { data: options, isOptionsLoading } = useMerchantFormOptions();
  const isInitialized = useRef(false);

  useEffect(() => {
    if (options && !isInitialized.current) {
      const initialPayload = getInitialPayload(options, formData);

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
