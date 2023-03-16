import { useState } from 'react';
import { UseDataProps, DataStateProps } from '../types/hooks/useData.type';
import {
  USEDATA_INITIAL_STATE,
} from '../constants';

function useData({
  filters,
  orderBy,
  orderDirection,
  pagination,
  searchText,
  fetchFunction,
}: UseDataProps) {
  const [data, setData] = useState<DataStateProps>(USEDATA_INITIAL_STATE);

  async function updateData() {
    setData({ ...data, isLoading: true });
    const response = await fetchFunction({
      filters,
      orderBy,
      orderDirection,
      pagination,
      searchText,
    });
    setData({
      isLoading: false,
      response,
    });
  }

  return {
    data,
    updateData,
  };
}

export default useData;
