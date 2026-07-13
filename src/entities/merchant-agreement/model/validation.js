import * as v from '@shared/lib/helpers/validators/formValidators';

export const merchantValidationMap = {
  companyName: v.validateCompanyName,
  monthlyFee: v.validateMonthlyFee,
  personalCode: v.validatePersonalCode,
  phoneNumber: v.validatePhone,
  address: v.validateAddress,
  bankAccount: v.validateBAN,
  email: v.validateEmail,
  dateFrom: v.validateDateFrom,
  contractNumber: v.validateContractNumber,
};
