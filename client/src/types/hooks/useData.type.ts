import { StationsResponse } from '../services/station.type';
import { JourneysResponse } from '../services/journey.type';
import PaginationStateProps from './usePagination.type';
import { FilterStateProps } from './useFilterDebounce.type';
import { FetchFunction } from '../services/fetch.type';

type DataStateProps = {
  isLoading: boolean;
  response: JourneysResponse & StationsResponse
};

type UseDataProps = {
  orderBy: string;
  orderDirection: string;
  pagination: PaginationStateProps;
  searchText: string;
  filters: FilterStateProps;
  fetchFunction: FetchFunction;
};

export {
  DataStateProps,
  UseDataProps,
};
