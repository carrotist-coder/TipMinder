import { useApiWithMock } from '@shared/lib/hooks/useApiWithMock';
import { mockMerchantOptions } from '@entities/merchant-agreement/model/mock';
import { useGetMerchantOptionsQuery } from '@entities/merchant-agreement/api/merchantOptionsApi';

export const useMerchantFormOptions = () => {
  return useApiWithMock(useGetMerchantOptionsQuery, mockMerchantOptions);
};
