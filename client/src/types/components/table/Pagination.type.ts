type PaginationProps = {
  totalPages: number;
  currentPage: string;
  visiblePages: string[];
  changePageSize: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  changeCurrentPage: (newCurrentPage: string) => void;
};

type PaginationButtonProps = {
  disabled: boolean;
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
};

type PaginationSelectProps = {
  defaultValue: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export { PaginationProps, PaginationButtonProps, PaginationSelectProps };
