import { useGetCardsQuery } from '@entities/card/api/cardApi';
import { mockCards } from '@entities/card';
import { useApiWithMock } from '@shared/lib/hooks/useApiWithMock';

export const useCards = () => {
  return useApiWithMock(useGetCardsQuery, mockCards);
};
