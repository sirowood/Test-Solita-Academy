import axios from 'axios';
import { JourneysResponse } from '../types/services/journey.type';
import { FetchAllFunctionProps } from '../types/services/fetch.type';

const URL = `${API_URL}/journeys`;

async function fetchAllJourneys({
  filters,
  ordering,
  pagination,
  searchText,
}: FetchAllFunctionProps) {
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
  return response.data as JourneysResponse;
}

async function addNewJourney(data: unknown) {
  const response = await axios.post(URL, data);
  return response;
}

export {
  fetchAllJourneys,
  addNewJourney,
};
