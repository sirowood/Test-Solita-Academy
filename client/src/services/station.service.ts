import axios, { AxiosError } from 'axios';
import {
  SingleStationResponse,
  SearchFunctionProps,
  SearchFunctionResponse,
} from '../types/services/station.type';
import { AddFunctionProps } from '../types/services/add.type';
import { FetchFunctionProps, FetchAllFunctionProps, CombinedResponse } from '../types/services/fetch.type';

const URL = `${API_URL}/stations`;

async function addStation({ ...newStation }: AddFunctionProps) {
  try {
    const response = await axios.post(URL, { ...newStation });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.data?.error) {
        throw new Error(error.response.data.error);
      } else {
        throw new Error('An error occurred while trying to add new station.');
      }
    } else {
      throw error;
    }
  }
}

async function fetchAllStations({
  filters,
  orderBy,
  orderDirection,
  pagination,
  searchText,
}: FetchAllFunctionProps) {
  const queryParams = {
    search: searchText,
    orderBy,
    size: pagination.pageSize,
    page: pagination.currentPage,
    orderDirection,
  };

  const queryFilters = filters.map((filter) => `&${filter.filterName}From=${filter.filterProperties.from}&${filter.filterName}To=${filter.filterProperties.to}`);

  const fullURL = `${URL}?${new URLSearchParams(queryParams).toString()}${queryFilters.join('')}`;
  const response = await axios.get(fullURL);
  return response.data as CombinedResponse;
}

async function fetchSingleStation({ id, month }: FetchFunctionProps) {
  try {
    const response = await axios.get(`${URL}/${id}?month=${month}`);
    return response.data as SingleStationResponse;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.data?.error) {
        throw new Error(error.response.data.error);
      } else {
        throw new Error('An error occurred while trying to fetch the station.');
      }
    } else {
      throw error;
    }
  }
}

async function fetchStationsBySearch({ nimi }: SearchFunctionProps) {
  try {
    const response = await axios.get(`${URL}/search/${nimi}`);
    return response.data as SearchFunctionResponse;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.data?.error) {
        throw new Error(error.response.data.error);
      } else {
        throw new Error('An error occurred while trying to search the station.');
      }
    } else {
      throw error;
    }
  }
}

export {
  addStation,
  fetchAllStations,
  fetchSingleStation,
  fetchStationsBySearch,
};
