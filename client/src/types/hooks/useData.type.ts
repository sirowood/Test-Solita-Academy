import { StationsResponse } from '../services/station.type';
import { JourneysResponse } from '../services/journey.type';
import OrderingStateProps from './useOdering.type';
import PaginationStateProps from './usePagination.type';
import { FilterStateProps } from './useFilterDebounce.type';
import { FetchFunction } from '../services/fetch.type';

type GenerateVisiblePagesProps = {
  pagination: PaginationStateProps,
  totalPages: number,
};

type DataStateProps = {
  isLoading: boolean,
  visiblePages: string[],
  response: StationsResponse | JourneysResponse,
};

type UseDataProps = {
  ordering: OrderingStateProps,
  pagination: PaginationStateProps,
  searchText: string,
  filters: FilterStateProps,
  fetchFunction: FetchFunction,
};

export {
  GenerateVisiblePagesProps,
  DataStateProps,
  UseDataProps,
};
