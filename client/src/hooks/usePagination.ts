import React, { useState } from 'react';
import PaginationStateProps from '../types/hooks/usePagination.type';
import { USEPAGINATION_INITIAL_STATE } from '../constants';

function usePagination() {
  const [pagination, setPagination] = useState<PaginationStateProps>(USEPAGINATION_INITIAL_STATE);

  function resetPagination() {
    setPagination(USEPAGINATION_INITIAL_STATE);
  }

  function changePageSize(event: React.ChangeEvent<HTMLSelectElement>) {
    const { value: newPageSize } = event.target;
    setPagination({ currentPage: '1', pageSize: newPageSize });
  }

  function changeCurrentPage(newCurrentPage: string) {
    setPagination({ ...pagination, currentPage: newCurrentPage });
  }

  return {
    pagination,
    changePageSize,
    resetPagination,
    changeCurrentPage,
  };
}

export default usePagination;
