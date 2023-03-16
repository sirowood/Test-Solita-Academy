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
    orderBy,
    orderDirection,
    changeOrderBy,
    changeOrderDirection,
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
    orderBy,
    orderDirection,
    pagination,
    searchText,
    fetchFunction,
  });

  useEffect(() => {
    updateData();
  }, [pagination, orderBy, orderDirection]);

  useEffect(() => {
    resetPagination();
    updateData();
  }, [debouncedSearchText, debouncedFilters]);

  return {
    data,
    orderDirection,
    filters,
    searchText,
    showFilters,
    resetFilters,
    setSearchText,
    changeFilters,
    changePageSize,
    changeShowFilters,
    changeCurrentPage,
    changeOrderBy,
    changeOrderDirection,
  };
}

export default useTables;
