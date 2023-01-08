import { ParsedQs } from 'qs';

type Paginatioin = {
  size: number,
  currentPage: number,
  limit: number,
  offset: number,
};

const getPagination = (query: ParsedQs): Paginatioin => {
  const size = Math.max(Number(query.size) || 10, 10);
  const currentPage = Math.max(Number(query.page) || 1, 1);

  const limit = size;
  const offset = (currentPage - 1) * limit;

  return { currentPage, size, limit, offset };
};

const getSort = (query: ParsedQs, allowedFields: string[]) => {
  const orderBy = query.orderBy as string;
  const orderDirection = query.orderDirection as string;

  const allowedSortOrders = ['ASC', 'DESC'];

  const sortField = allowedFields.includes(orderBy) ? orderBy : 'id';
  const sortOrder = allowedSortOrders.includes(orderDirection) ? orderDirection : 'ASC';

  return { sortField, sortOrder };
};

const getFilter = (query: ParsedQs, allowedFilters: string[]) => {
  const filters: { [key: string]: string} = {};

  for (const filter of allowedFilters) {
    const validFilter = query[filter] && Number(query[filter]) && Number(query[filter]) > 0;
    if (validFilter) {
      filters[filter] = query[filter] as string;
    }
  }

  return filters;
};

const getSearchString = (query: ParsedQs) => {
  const search = query.search as string;

  return search || '';
};

const getAllJourneysParams = (query: ParsedQs) => {
  const allowedFilters = ['departureStationId', 'arrivalStationId'];
  const allowedSortFields = [
    ...allowedFilters,
    'departureTime', 'arrivalTime',
    'coveredDistance', 'duration',
  ];

  const { currentPage, size, limit, offset } = getPagination(query);
  const { sortField, sortOrder } = getSort(query, allowedSortFields);
  const filters = getFilter(query, allowedFilters);
  const searchString = getSearchString(query);

  return { size, currentPage, limit, offset, sortField, sortOrder, filters, searchString };
};

const getAllStationsParams = (query: ParsedQs) => {
  const allowedSortFields = [
    'id', 'nimi', 'namn', 'name', 'osoite',
    'adress', 'kaupunki', 'stad', 'operaattor',
    'kapasiteet', 'x', 'y',
  ];

  const { currentPage, size, limit, offset } = getPagination(query);
  const { sortField, sortOrder } = getSort(query, allowedSortFields);
  const searchString = getSearchString(query);

  return { size, currentPage, limit, offset, sortField, sortOrder, searchString };
};

export {
  getSearchString,
  getAllJourneysParams,
  getAllStationsParams,
};