import { StationsResponse } from './station.type';
import { JourneysResponse } from './journey.type';
import PaginationStateProps from '../hooks/usePagination.type';
import { FilterStateProps } from '../hooks/useFilterDebounce.type';

type FetchAllFunctionProps = {
  filters: FilterStateProps;
  searchText: string;
  orderBy: string;
  orderDirection: string;
  pagination: PaginationStateProps;
};

type FetchFunctionProps = {
  id: string | undefined,
  month: string,
};

type CombinedResponse = Promise<StationsResponse> & Promise<JourneysResponse>;

type FetchFunction =
  (params: FetchAllFunctionProps) => CombinedResponse;

export {
  FetchAllFunctionProps,
  FetchFunctionProps,
  CombinedResponse,
  FetchFunction,
};
