import { useState, useEffect } from 'react';
import useData from './useData';
import useOdering from './useOdering';
import usePagination from './usePagination';
import useFilterDebounce from './useFilterDebounce';
import useSearchDebounce from './useSearchDebounce';
import UseListProps from '../types/hooks/UseList.type';

function useList({
  initialFilters,
  fetchFunction,
}: UseListProps) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showFiltersModal, setShowFiltersModal] = useState(false);

  function changeShowAddModal() {
    setShowAddModal(!showAddModal);
  }

  function changeShowFiltersModal() {
    setShowFiltersModal(!showFiltersModal);
  }

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
    debouncedFilters,
    resetFilters,
    changeFilters,
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
    showAddModal,
    showFiltersModal,
    resetFilters,
    setSearchText,
    changeFilters,
    changePageSize,
    changeShowAddModal,
    changeShowFiltersModal,
    changeCurrentPage,
    changeOrderBy,
    changeOrderDirection,
  };
}

export default useList;
