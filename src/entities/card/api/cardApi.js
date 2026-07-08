import { baseApi } from '@shared/api/baseApi';
import { ENDPOINTS } from '@shared/api/endpoints';

const cardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCards: builder.query({
      query: () => ENDPOINTS.CARDS,
      transformResponse: (response) => response?.cards,
    }),
  }),
});

export const { useGetCardsQuery } = cardApi;
