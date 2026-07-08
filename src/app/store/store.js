import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@entities/user/model/slice';
import { merchantAgreementReducer } from '@entities/merchant-agreement/model/slice';
import { baseApi } from '@shared/api/baseApi';

export const store = configureStore({
  reducer: {
    user: userReducer,
    merchantAgreement: merchantAgreementReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
