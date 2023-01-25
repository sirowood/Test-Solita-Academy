import { Op } from 'sequelize';

type PaginationProps = {
  size: number,
  currentPage: number,
  limit: number,
  offset: number,
};

type FilterProps = {
  [filterName: string]:
  { [Op.between]: string[] }
  | { [Op.gte]: string }
  | { [Op.lte]: string }
};

export {
  PaginationProps,
  FilterProps,
};
