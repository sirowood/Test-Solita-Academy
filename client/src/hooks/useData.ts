import { useState } from 'react';
import { GenerateVisiblePagesProps, UseDataProps, DataStateProps } from '../types/hooks/useData.type';
import {
  USEDATA_INITIAL_STATE,
  USETABLE_VISIBLE_PAGES_NUMBER as visiblePagesNumber,
} from '../constants';

function generateVisiblePages({
  pagination,
  totalPages,
}: GenerateVisiblePagesProps) {
  let startPage = 0;
  let endPage = totalPages;

  if (totalPages > visiblePagesNumber) {
    startPage = Math.max(+pagination.currentPage - Math.ceil(visiblePagesNumber / 2), 0);
    endPage = Math.min(startPage + visiblePagesNumber, totalPages);

    if (endPage - startPage < visiblePagesNumber) {
      startPage = Math.max(endPage - visiblePagesNumber, 0);
    }
  }
  return Array.from({ length: endPage - startPage }, (_, i) => (startPage + i + 1).toString());
}
function useData({
  filters,
  ordering,
  pagination,
  searchText,
  fetchFunction,
}: UseDataProps) {
  const [data, setData] = useState<DataStateProps>(USEDATA_INITIAL_STATE);

  async function updateData() {
    setData({ ...data, isLoading: true });
    const response = await fetchFunction({
      filters,
      ordering,
      pagination,
      searchText,
    });
    setData({
      isLoading: false,
      response,
      visiblePages: generateVisiblePages({
        pagination,
        totalPages: response.totalPages,
      }),
    });
  }

  return {
    data,
    updateData,
  };
}

export default useData;
