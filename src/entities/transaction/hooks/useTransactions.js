import { useGetTransactionsQuery } from '@entities/transaction/api/transactionApi';
import { mockTransactions } from '../model/mock';
import { useApiWithMock } from '@shared/lib/hooks/useApiWithMock';

export const useTransactions = () => {
  return useApiWithMock(useGetTransactionsQuery, mockTransactions);
};
