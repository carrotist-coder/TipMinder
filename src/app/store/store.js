import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@entities/user/model/slice';
import { merchantAgreementReducer } from '@entities/merchant-agreement/model/slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    merchantAgreement: merchantAgreementReducer,
  },
});
