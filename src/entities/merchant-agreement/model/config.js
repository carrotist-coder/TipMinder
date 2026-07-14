const EMPTY_FIELD = '';

const initialMerchantAgreement = {
  companyName: EMPTY_FIELD,
  personalCode: EMPTY_FIELD,
  phoneNumber: EMPTY_FIELD,
  address: EMPTY_FIELD,
  bankAccount: EMPTY_FIELD,
  email: EMPTY_FIELD,
  dateFrom: EMPTY_FIELD,
  contractNumber: EMPTY_FIELD,
};

export const initMerchantAgreement = () => {
  return initialMerchantAgreement;
};
