import { FilterStateProps } from '../hooks/useFilterDebounce.type';

type TopBarProps = {
  filters: FilterStateProps,
  pageTitle: string,
  searchText: string,
  showFilter: boolean,
  resetFilters: () => void,
  changeFilters: (filterName: string, filterProperty: string, newValue: string) => void,
  setSearchText: (newSearchText: string) => void,
  changeShowFilter: () => void,
};

export default TopBarProps;
