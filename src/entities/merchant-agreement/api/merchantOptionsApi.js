import { baseApi } from '@shared/api/baseApi';
import { ENDPOINTS } from '@shared/api/endpoints';

const merchantOptionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMerchantOptions: builder.query({
      query: () => ENDPOINTS.MERCHANT_OPTIONS,
      transformResponse: (response) => response?.merchantOptions,
    }),
  }),
});

export const { useGetMerchantOptionsQuery } = merchantOptionsApi;
