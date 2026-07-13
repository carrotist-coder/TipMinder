import {
  FORM_ERRORS,
  PERSONAL_CODE_DIGITS_COUNT,
} from '@shared/lib/helpers/validators/formMessages';

const MIN_PHONE_DIGITS_COUNT = 7;
const MAX_PHONE_DIGITS_COUNT = 15;

const MIN_ADDRESS_LENGTH = 10;

const BAN_LETTERS_COUNT = 3;
const BAN_DIGITS_MIN_COUNT = 12;
const BAN_DIGITS_MAX_COUNT = 32;

// Dropdowns
export const validateCompanyName = (value) =>
  value ? null : FORM_ERRORS.COMPANY_SELECT;
export const validateMonthlyFee = (value) =>
  value ? null : FORM_ERRORS.FEE_SELECT;
export const validateContractNumber = (value) =>
  value ? null : FORM_ERRORS.CONTRACT_SELECT;

// Inputs
export const validatePersonalCode = (value) => {
  if (!value) return FORM_ERRORS.REQUIRED;
  const personalCodeRegex = new RegExp(`^\\d{${PERSONAL_CODE_DIGITS_COUNT}}$`);
  if (!personalCodeRegex.test(value)) return FORM_ERRORS.PERSONAL_CODE_DIGITS;
  return null;
};

export const validatePhone = (value) => {
  if (!value) return FORM_ERRORS.REQUIRED;
  const cleanPhone = value.replace(/[\s\-()]/g, '');
  // 7-15 digits
  const phoneRegex = new RegExp(
    `^\\d{${MIN_PHONE_DIGITS_COUNT},${MAX_PHONE_DIGITS_COUNT}}$`,
  );
  if (!phoneRegex.test(cleanPhone)) return FORM_ERRORS.PHONE_FORMAT;
  return null;
};

export const validateAddress = (value) => {
  if (!value) return FORM_ERRORS.REQUIRED;
  if (value.length < MIN_ADDRESS_LENGTH) return FORM_ERRORS.ADDRESS_SHORT;
  return null;
};

export const validateBAN = (value) => {
  if (!value) return FORM_ERRORS.REQUIRED;
  const cleanBAN = value.replace(/\s/g, '');
  // Example: BTO918282811291
  const banRegex = new RegExp(
    `^[A-Z]{${BAN_LETTERS_COUNT}}[0-9]{${BAN_DIGITS_MIN_COUNT},${BAN_DIGITS_MAX_COUNT}}$`,
  );
  if (!banRegex.test(cleanBAN)) return FORM_ERRORS.BAN_FORMAT;
  return null;
};

export const validateEmail = (value) => {
  if (!value) return FORM_ERRORS.REQUIRED;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
    return FORM_ERRORS.EMAIL_INVALID;
  return null;
};

export const validateDateFrom = (value) => {
  if (!value) return FORM_ERRORS.REQUIRED;
  const selectedDate = new Date(value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (selectedDate < today) return FORM_ERRORS.DATE_PAST;
  return null;
};
