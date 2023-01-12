import { FetchFunction } from '../services/fetch.type';
import { FilterStateProps } from './useFilterDebounce.type';

type UseTableProps = {
  fetchFunction: FetchFunction,
  initialFilters: FilterStateProps,
};

export default UseTableProps;
