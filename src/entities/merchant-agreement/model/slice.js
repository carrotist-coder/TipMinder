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
  },
});

export const { updateField } = merchantAgreementSlice.actions;
export const merchantAgreementReducer = merchantAgreementSlice.reducer;
