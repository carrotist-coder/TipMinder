import { createSlice } from '@reduxjs/toolkit';
import { initMerchantAgreement } from './config';

const merchantAgreementSlice = createSlice({
  name: 'merchantAgreement',
  initialState: initMerchantAgreement(),
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetForm: () => initMerchantAgreement(),
  },
});

export const { updateField, resetForm } = merchantAgreementSlice.actions;
export const merchantAgreementReducer = merchantAgreementSlice.reducer;
