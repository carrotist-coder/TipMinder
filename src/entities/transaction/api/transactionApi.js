import { baseApi } from '@shared/api/baseApi';
import { ENDPOINTS } from '@shared/api/endpoints';

const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: () => ENDPOINTS.TRANSACTIONS,
      transformResponse: (response) => response?.transactions,
    }),
  }),
});

export const { useGetTransactionsQuery } = transactionApi;
