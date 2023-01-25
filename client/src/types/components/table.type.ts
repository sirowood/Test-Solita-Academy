import React from 'react';
import OrderingStateProps from '../hooks/useOdering.type';

type TableProps = {
  ordering: OrderingStateProps,
  currentPage: string,
  isLoading: boolean,
  visiblePages: string[],
  children: React.ReactNode,
  totalPages: number,
  columns: { displayName: string, queryName: string, isNumber: boolean }[],
  changeOrdering: (column: string) => void,
  changePageSize: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  changeCurrentPage: (newCurrentPage: string) => void,
};
type SortingArrowProps = {
  queryName: string,
  ordering: OrderingStateProps,
};

export {
  TableProps,
  SortingArrowProps,
};
