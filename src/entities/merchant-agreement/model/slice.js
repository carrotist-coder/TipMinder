import { createSlice } from '@reduxjs/toolkit';
import { initMerchantAgreement } from './config';

const merchantAgreementSlice = createSlice({
  name: 'merchantAgreement',
  initialState: initMerchantAgreement(),
  reducers: {
    setAgreementData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setAgreementData } = merchantAgreementSlice.actions;
export const merchantAgreementReducer = merchantAgreementSlice.reducer;
