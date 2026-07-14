import { useApiWithMock } from '@shared/lib/hooks/useApiWithMock';
import { useGetSummaryQuery } from '@entities/summary/api/summaryApi';
import { mockSummary } from '@entities/summary/model/mock';

export const useSummary = () => {
  return useApiWithMock(useGetSummaryQuery, mockSummary);
};
