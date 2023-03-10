import axios, { AxiosError } from 'axios';
import { StationsResponse, SingleStationResponse } from '../types/services/station.type';
import { AddFunctionProps } from '../types/services/add.type';
import { FetchFunctionProps, FetchAllFunctionProps } from '../types/services/fetch.type';

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
  return response.data as StationsResponse;
}

async function fetchSingleStation({ id }: FetchFunctionProps) {
  try {
    const response = await axios.get(`${URL}/${id}`);
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

type SearchFunctionProps = { nimi: string };
type SearchFunctionResponse = {
  id: number,
  nimi: string,
}[] | [];

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
