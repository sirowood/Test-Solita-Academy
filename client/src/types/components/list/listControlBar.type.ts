type ListControlBarProps = {
  loading: boolean;
  currentPage: number;
  totalPages: number;
  orderDirection: string;
  orderOptions: {
    value: string;
    label: string;
  }[];
  changeCurrentPage: (newCurrentPage: string) => void;
  changePageSize: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  changeShowFilters: () => void;
  changeOrderBy: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  changeOrderDirection: () => void;
};

export default ListControlBarProps;
