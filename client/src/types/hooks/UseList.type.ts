import { FetchFunction } from '../services/fetch.type';
import { FilterStateProps } from './useFilterDebounce.type';

type UseListProps = {
  fetchFunction: FetchFunction,
  initialFilters: FilterStateProps,
};

export default UseListProps;
