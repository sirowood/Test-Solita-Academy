import { FilterStateProps } from '../hooks/useFilterDebounce.type';

type FilterProps = {
  filters: FilterStateProps,
  showFilter: boolean,
  resetFilters: () => void,
  changeFilters: (
    filterName: string,
    filterProperty: string,
    newValue: string,
  ) => void,
};

export default FilterProps;
