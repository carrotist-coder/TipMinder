const REQUIRED = 'Required value';

// Dropdowns
export const isValidCompanyName = (value) =>
  value ? null : 'Please select a company';
export const isValidMonthlyFee = (value) =>
  value ? null : 'Please select a fee';
export const isValidContractNumber = (value) =>
  value ? null : 'Please select a contract';

// Inputs
export const isValidPersonalCode = (value) => {
  if (!value) return REQUIRED;
  if (!/^\d{9}$/.test(value)) return 'Must be 9 digits';
  return null;
};

export const isValidPhone = (value) => {
  if (!value) return REQUIRED;
  const cleanPhone = value.replace(/[\s\-()]/g, '');
  // 7-15 digits
  if (!/^\d{7,15}$/.test(cleanPhone)) return 'Invalid phone format';
  return null;
};

export const isValidAddress = (value) => {
  if (!value) return REQUIRED;
  if (value.length < 10) return 'Address is too short';
  return null;
};

export const isValidBAN = (value) => {
  if (!value) return REQUIRED;
  const cleanBAN = value.replace(/\s/g, '');
  // Example: BTO918282811291
  if (!/^[A-Z]{3}[0-9]{12,32}$/.test(cleanBAN)) return 'Invalid format';
  return null;
};

export const isValidEmail = (value) => {
  if (!value) return REQUIRED;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
    return 'Please enter a valid email address';
  return null;
};

export const isValidDateFrom = (value) => {
  if (!value) return REQUIRED;
  const selectedDate = new Date(value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (selectedDate < today) return 'Date cannot be in the past';
  return null;
};
