import axios, { AxiosError } from 'axios';
import { AddFunctionProps } from '../types/services/add.type';
import { FetchAllFunctionProps, CombinedResponse } from '../types/services/fetch.type';

const URL = `${API_URL}/journeys`;

async function addJourney({ ...newJourney }: AddFunctionProps) {
  try {
    const response = await axios.post(URL, { ...newJourney });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.data?.error) {
        throw new Error(error.response.data.error);
      } else {
        throw new Error('An error occurred while trying to add new journey.');
      }
    } else {
      throw error;
    }
  }
}

async function fetchAllJourneys({
  filters,
  orderBy,
  orderDirection,
  pagination,
  searchText,
}: FetchAllFunctionProps) {
  const queryParams = {
    search: searchText,
    orderBy,
    orderDirection,
    size: pagination.pageSize,
    page: pagination.currentPage,
  };

  const queryFilters = filters.map((filter) => `&${filter.filterName}From=${filter.filterProperties.from}&${filter.filterName}To=${filter.filterProperties.to}`);

  const fullURL = `${URL}?${new URLSearchParams(queryParams).toString()}${queryFilters.join('')}`;
  const response = await axios.get(fullURL);
  return response.data as CombinedResponse;
}

export {
  fetchAllJourneys,
  addJourney,
};
