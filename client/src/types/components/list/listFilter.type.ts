import { FilterStateProps } from '../../hooks/useFilterDebounce.type';

type FilterProps = {
  filters: FilterStateProps;
  showFilters: boolean;
  resetFilters: () => void;
  changeFilters: (
    filterName: string,
    filterProperty: string,
    newValue: string,
  ) => void;
  changeShowFilters: () => void;
};

export default FilterProps;
