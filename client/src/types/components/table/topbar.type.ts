import { FilterStateProps } from '../../hooks/useFilterDebounce.type';

type TopBarProps = {
  filters: FilterStateProps,
  pageTitle: string,
  searchText: string,
  showFilters: boolean,
  resetFilters: () => void,
  changeFilters: (filterName: string, filterProperty: string, newValue: string) => void,
  setSearchText: (newSearchText: string) => void,
  changeShowFilters: () => void,
};

export default TopBarProps;
