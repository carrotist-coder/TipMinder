import { setAgreementData } from '@entities/merchant-agreement/model/slice';

export const signContract = (formData, dispatch) => {
  console.log(`Sign contract: ${JSON.stringify(formData)}`);
  dispatch(setAgreementData(formData));
};
