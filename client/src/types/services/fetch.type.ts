import { StationsResponse } from './station.type';
import { JourneysResponse } from './journey.type';
import OrderingStateProps from '../hooks/useOdering.type';
import PaginationStateProps from '../hooks/usePagination.type';
import { FilterStateProps } from '../hooks/useFilterDebounce.type';

type FetchAllFunctionProps = {
  filters: FilterStateProps,
  searchText: string,
  ordering: OrderingStateProps,
  pagination: PaginationStateProps,
};

type FetchFunctionProps = {
  id: string | undefined,
};

type FetchFunction =
  (params: FetchAllFunctionProps) => Promise<StationsResponse | JourneysResponse>;

export {
  FetchAllFunctionProps,
  FetchFunctionProps,
  FetchFunction,
};
