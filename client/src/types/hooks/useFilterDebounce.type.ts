type FilterStateProps = {
  displayName: string,
  filterName: string,
  type: string,
  filterProperties: {
    from: string,
    to: string,
  },
}[];

type UseFilterDebounceProps = {
  initialFilters: FilterStateProps,
  milliseconds: number,
};

export {
  FilterStateProps,
  UseFilterDebounceProps,
};
