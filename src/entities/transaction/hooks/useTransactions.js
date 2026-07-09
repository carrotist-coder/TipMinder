import { useGetTransactionsQuery } from '@entities/transaction/api/transactionApi';
import { mockTransactions } from '../model/mock';

export const useTransactions = () => {
  const { data, isLoading, isError } = useGetTransactionsQuery();

  if (isError || !data) {
    console.warn('API not available, mock data');
    return { data: mockTransactions, isLoading: false, isError: true };
  }

  console.log('API available');
  return {
    data: data,
    isLoading,
    isError,
  };
};
