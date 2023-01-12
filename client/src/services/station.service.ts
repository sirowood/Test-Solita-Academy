import axios from 'axios';
import { StationsResponse } from '../types/services/station.type';
import { FetchAllFunctionProps } from '../types/services/fetch.type';

const URL = `${API_URL}/stations`;

const fetchAllStations = async ({
  filters,
  ordering,
  pagination,
  searchText,
}: FetchAllFunctionProps) => {
  const queryParams = {
    search: searchText,
    orderBy: ordering.orderBy,
    size: pagination.pageSize,
    page: pagination.currentPage,
    orderDirection: ordering.orderASC ? 'ASC' : 'DESC',
  };

  const queryFilters = filters.map((filter) => `&${filter.filterName}From=${filter.filterProperties.from}&${filter.filterName}To=${filter.filterProperties.to}`);

  const fullURL = `${URL}?${new URLSearchParams(queryParams).toString()}${queryFilters.join('')}`;
  const response = await axios.get(fullURL);
  return response.data as StationsResponse;
};

const addNewStation = async (data: unknown) => {
  const response = await axios.post(URL, data);
  return response;
};

export {
  fetchAllStations,
  addNewStation,
};
