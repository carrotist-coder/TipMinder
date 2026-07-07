import * as v from '@shared/lib/validators';

export const merchantValidationMap = {
  companyName: v.isValidCompanyName,
  monthlyFee: v.isValidMonthlyFee,
  personalCode: v.isValidPersonalCode,
  phoneNumber: v.isValidPhone,
  address: v.isValidAddress,
  bankAccount: v.isValidBAN,
  email: v.isValidEmail,
  dateFrom: v.isValidDateFrom,
  contractNumber: v.isValidContractNumber,
};
