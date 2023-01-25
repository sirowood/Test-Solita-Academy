import { renderHook, act } from "@testing-library/react";
import useData from '../../src/hooks/useData';
import {
  USEPAGINATION_INITIAL_STATE,
  USEORDERING_INITIAL_STATE,
  USEDATA_INITIAL_STATE,
  JOURNEYS_FILTERS,
} from '../../src/constants';

test('should return the correct initial state', () => {
  const fetchFunction = jest.fn().mockResolvedValue({});
  const { result } = renderHook(() => useData({
    pagination: USEPAGINATION_INITIAL_STATE,
    ordering: USEORDERING_INITIAL_STATE,
    filters: JOURNEYS_FILTERS,
    searchText: '',
    fetchFunction,
  }));

  expect(result.current.data).toEqual(USEDATA_INITIAL_STATE);
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
    pagination: USEPAGINATION_INITIAL_STATE,
    ordering: USEORDERING_INITIAL_STATE,
    filters: JOURNEYS_FILTERS,
    searchText: '',
    fetchFunction,
  }));
  expect(fetchFunction).toHaveBeenCalledTimes(0);

  await act(async () => result.current.updateData());
  expect(fetchFunction).toHaveBeenCalledTimes(1);
  expect(result.current.data.isLoading).toEqual(false);
  expect(result.current.data.response).toEqual(fakeResponse);
});
