export const useApiWithMock = (useQueryHook, mockData) => {
  const result = useQueryHook();

  if (result.isError || !result.data) {
    console.warn('API not available, mock data');
    return { data: mockData, isLoading: false, isError: true };
  }

  return {
    data: result.data,
    isLoading: result.isLoading,
    isError: result.isError,
  };
};
