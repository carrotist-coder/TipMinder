import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { merchantValidationMap } from '@entities/merchant-agreement/model/validation';
import { validateFormFields } from '@entities/merchant-agreement/model/utils';

export const useMerchantForm = () => {
  const [errors, setErrors] = useState({});
  const initialFormData = useSelector((state) => state.merchantAgreement);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const validator = merchantValidationMap[name];
    if (validator) {
      setErrors((prev) => ({ ...prev, [name]: validator(value) }));
    }
  }, []);

  const setFields = useCallback((fields) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  }, []);

  const validateAll = useCallback(() => {
    const { errors: newErrors, isValid } = validateFormFields(formData);
    setErrors(newErrors);
    return isValid;
  }, [formData]);

  return { formData, errors, handleChange, validateAll, setFields };
};
