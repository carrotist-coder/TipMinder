import { useGetCardsQuery } from '../api/cardApi';
import { mockCards } from '../model/mock';

export const useCards = () => {
  const { data, isLoading, isError } = useGetCardsQuery();

  if (isError || !data) {
    console.warn('API not available, mock data');
    return { data: mockCards, isLoading: false, isError: true };
  }

  console.log('API available');
  return {
    data: data,
    isLoading,
    isError,
  };
};
