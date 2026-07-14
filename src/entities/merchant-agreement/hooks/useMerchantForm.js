import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { merchantValidationMap } from '@entities/merchant-agreement/model/validation';

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

  const validateAll = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(merchantValidationMap).forEach((key) => {
      const error = merchantValidationMap[key](formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  return { formData, errors, handleChange, validateAll, setFields };
};
