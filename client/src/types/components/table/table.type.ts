import React from 'react';
import { DataStateProps } from '../../hooks/useData.type';
import OrderingStateProps from '../../hooks/useOdering.type';

type TableProps = {
  data: DataStateProps,
  ordering: OrderingStateProps,
  currentPage: string,
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
