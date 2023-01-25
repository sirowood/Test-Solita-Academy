import { useEffect } from 'react';
import useData from './useData';
import useOdering from './useOdering';
import usePagination from './usePagination';
import useFilterDebounce from './useFilterDebounce';
import useSearchDebounce from './useSearchDebounce';
import UseTableProps from '../types/hooks/useTables.type';

function useTables({
  initialFilters,
  fetchFunction,
}: UseTableProps) {
  const {
    ordering,
    resetOrdering,
    changeOrdering,
  } = useOdering();

  const {
    pagination,
    changePageSize,
    resetPagination,
    changeCurrentPage,
  } = usePagination();

  const {
    value: searchText,
    debouncedValue: debouncedSearchText,
    setValue: setSearchText,
  } = useSearchDebounce({ initialValue: '', milliseconds: 500 });

  const {
    filters,
    showFilters,
    debouncedFilters,
    resetFilters,
    changeFilters,
    changeShowFilters,
  } = useFilterDebounce({ initialFilters, milliseconds: 500 });

  const {
    data,
    updateData,
  } = useData({
    filters,
    ordering,
    pagination,
    searchText,
    fetchFunction,
  });

  useEffect(() => {
    updateData();
  }, [pagination, ordering]);

  useEffect(() => {
    resetOrdering();
    resetPagination();
    updateData();
  }, [debouncedSearchText, debouncedFilters]);

  return {
    data,
    filters,
    ordering,
    searchText,
    showFilters,
    currentPage: pagination.currentPage,
    resetFilters,
    setSearchText,
    changeFilters,
    changeOrdering,
    changePageSize,
    changeShowFilters,
    changeCurrentPage,
  };
}

export default useTables;
