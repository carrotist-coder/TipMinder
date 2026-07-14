import { merchantValidationMap } from './validation';

export const validateFormFields = (formData) => {
  const errors = {};

  Object.keys(merchantValidationMap).forEach((key) => {
    const error = merchantValidationMap[key](formData[key]);
    if (error) {
      errors[key] = error;
    }
  });

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

export const getInitialPayload = (options, currentData) => {
  const payload = {};
  const initFields = [
    { key: 'companyName', list: options?.companyNames },
    { key: 'monthlyFee', list: options?.monthlyFees },
    { key: 'contractNumber', list: options?.contractNumbers },
  ];

  initFields.forEach(({ key, list }) => {
    if (list?.length > 0 && !currentData[key]) {
      payload[key] = list[0];
    }
  });

  return payload;
};
