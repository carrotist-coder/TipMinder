import { baseApi } from '@shared/api/baseApi';
import { ENDPOINTS } from '@shared/api/endpoints';

const summaryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: () => ENDPOINTS.SUMMARY,
    }),
  }),
});

export const { useGetSummaryQuery } = summaryApi;
