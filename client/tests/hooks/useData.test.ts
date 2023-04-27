import { renderHook, act } from "@testing-library/react";
import useData from '../../src/hooks/useData';
import {
  USEDATA_INITIAL_STATE,
  JOURNEYS_FILTERS,
} from '../../src/constants';

describe('useData', () => {
  test('should return the correct initial state', () => {
    const fetchFunction = jest.fn().mockResolvedValue({});
    const { result } = renderHook(() => useData({
      orderBy: 'id',
      orderDirection: 'ASC',
      pagination: {
        pageSize: '10',
        currentPage: '1',
      },
      filters: JOURNEYS_FILTERS,
      searchText: '',
      fetchFunction,
    }));

    expect(result.current.data).toBe(USEDATA_INITIAL_STATE);
  });

});

test('should update data', async () => {
  const fakeResponse = {
    totalItems: 1234,
    totalPages: 124,
    currentPage: 1,
    items: [],
  };

  const fetchFunction = jest.fn().mockResolvedValue(fakeResponse);
  const { result } = renderHook(() => useData({
    orderBy: 'id',
    orderDirection: 'ASC',
    pagination: {
      pageSize: '10',
      currentPage: '1',
    },
    filters: JOURNEYS_FILTERS,
    searchText: '',
    fetchFunction,
  }));

  expect(fetchFunction).toHaveBeenCalledTimes(0);

  await act(async () => result.current.updateData());

  expect(fetchFunction).toHaveBeenCalledTimes(1);
  expect(result.current.data.isLoading).toBe(false);
  expect(result.current.data.response).toHaveProperty('totalItems', fakeResponse.totalItems);
  expect(result.current.data.response).toHaveProperty('totalPages', fakeResponse.totalPages);
  expect(result.current.data.response).toHaveProperty('currentPage', fakeResponse.currentPage);
  expect(result.current.data.response).toHaveProperty('items', fakeResponse.items);
});
