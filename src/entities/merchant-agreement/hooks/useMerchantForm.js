import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateField } from '@entities/merchant-agreement/model/slice';
import { merchantValidationMap } from '@entities/merchant-agreement/model/validation';

export const useMerchantForm = () => {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.merchantAgreement);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      dispatch(updateField({ field: name, value }));

      const validator = merchantValidationMap[name];
      if (validator) {
        setErrors((prev) => ({ ...prev, [name]: validator(value) }));
      }
    },
    [dispatch],
  );

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

  return { formData, errors, handleChange, validateAll };
};
