import { ParsedQs } from 'qs';
import { Op } from 'sequelize';
import { PaginationProps, FilterProps } from '../types/routes.type';

function getPagination(query: ParsedQs): PaginationProps {
  const size = Math.max(Number(query.size) || 10, 10);
  const currentPage = Math.max(Number(query.page) || 1, 1);

  const limit = size;
  const offset = (currentPage - 1) * limit;

  return { currentPage, size, limit, offset };
}

function getSort(query: ParsedQs, allowedFields: string[]) {
  const orderBy = query.orderBy as string;
  const orderDirection = query.orderDirection as string;

  const allowedSortOrders = ['ASC', 'DESC'];

  const sortField = allowedFields.includes(orderBy) ? orderBy : 'id';
  const sortOrder = allowedSortOrders.includes(orderDirection) ? orderDirection : 'ASC';

  return { sortField, sortOrder };
}

function getFilter(query: ParsedQs, allowedFilters: string[]) {
  const filters: FilterProps = {};

  for (const filterName of allowedFilters) {
    const filterFrom = query[`${filterName}From`] as string | undefined;
    const filterTo = query[`${filterName}To`] as string | undefined;

    if (filterFrom && filterTo) {
      filters[filterName] = { [Op.between]: [filterFrom, filterTo] };
    } else if (filterFrom) {
      filters[filterName] = { [Op.gte]: filterFrom };
    } else if (filterTo) {
      filters[filterName] = { [Op.lte]: filterTo };
    }
  }

  return filters;
}

function getSearchString(query: ParsedQs) {
  const search = query.search as string;

  return search || '';
}

function getAllJourneysParams(query: ParsedQs) {
  const allowedFilters = [
    'departureTime', 'arrivalTime',
    'coveredDistance', 'duration',
  ];
  const allowedSortFields = [
    ...allowedFilters,
    'departureStationName', 'arrivalStationName',
  ];

  const { currentPage, size, limit, offset } = getPagination(query);
  const { sortField, sortOrder } = getSort(query, allowedSortFields);
  const filters = getFilter(query, allowedFilters);
  const searchString = getSearchString(query);

  return { size, currentPage, limit, offset, sortField, sortOrder, filters, searchString };
}

function getSingleStationQueries(query: ParsedQs) {
  const month = query.month as string;
  const regex = /^\d{4}-(0[1-9]|1[0-2])$/;

  if (!month || !regex.test(month)) {
    return undefined;
  }

  return month;
}

function getAllStationsParams(query: ParsedQs) {
  const allowedFilters = ['kapasiteet'];
  const allowedSortFields = [
    ...allowedFilters,
    'id', 'nimi', 'namn', 'name', 'osoite',
    'adress', 'kaupunki', 'stad', 'operaattor',
    'x', 'y',
  ];

  const { currentPage, size, limit, offset } = getPagination(query);
  const { sortField, sortOrder } = getSort(query, allowedSortFields);
  const filters = getFilter(query, allowedFilters);
  const searchString = getSearchString(query);

  return {
    size,
    currentPage,
    limit,
    offset,
    sortField,
    sortOrder,
    filters,
    searchString,
  };
}

export {
  getSearchString,
  getAllJourneysParams,
  getSingleStationQueries,
  getAllStationsParams,
};