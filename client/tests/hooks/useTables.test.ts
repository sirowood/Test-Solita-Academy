import { renderHook, act, waitFor } from "@testing-library/react";
import useTables from '../../src/hooks/useTables';
import {
  STATIONS_FILTERS,
  USEPAGINATION_INITIAL_STATE,
  USEORDERING_INITIAL_STATE,
  USEDATA_INITIAL_STATE,
} from "../../src/constants";

test('should returns the correct initial state', async () => {
  const fakeResponse = USEDATA_INITIAL_STATE.response;

  const fetchFunction = jest.fn().mockResolvedValue(fakeResponse);
  const { result } = renderHook(() => useTables({ initialFilters: STATIONS_FILTERS, fetchFunction }));

  expect(result.current.searchText).toEqual('');
  expect(result.current.filters).toEqual(STATIONS_FILTERS);
  expect(result.current.ordering).toEqual(USEORDERING_INITIAL_STATE);
  expect(result.current.currentPage).toEqual(USEPAGINATION_INITIAL_STATE.currentPage);

  await waitFor(() => {
    expect(result.current.data.isLoading).toEqual(false);
    expect(result.current.data.response).toEqual(fakeResponse);
    expect(result.current.data.visiblePages).toEqual(['1']);
  });
});

test('should run fetchFunction when ordering or pagination changed', async () => {

  const fakeResponse = USEDATA_INITIAL_STATE.response;

  const fetchFunction = jest.fn().mockResolvedValue(fakeResponse);
  const { result } = renderHook(() => useTables({ initialFilters: STATIONS_FILTERS, fetchFunction }));

  await waitFor(() => expect(fetchFunction).toBeCalledTimes(2));

  await act(async () => result.current.changeOrdering('departureTime'));
  expect(fetchFunction).toBeCalledTimes(3);

  await act(async () => result.current.changePageSize({ target: { value: '20' } } as React.ChangeEvent<HTMLSelectElement>));
  expect(fetchFunction).toBeCalledTimes(4);

  await act(async () => result.current.changeCurrentPage('2'));
  expect(fetchFunction).toBeCalledTimes(5);
});

test('should reset pagination and ordering when change searchText or filters', async () => {
  const fakeResponse = {
    totalItems: 1234,
    totalPages: 124,
    currentPage: 1,
    items: [],
  };

  const fetchFunction = jest.fn().mockResolvedValue(fakeResponse);
  const { result } = renderHook(() => useTables({ initialFilters: STATIONS_FILTERS, fetchFunction }));

  await waitFor(() => expect(fetchFunction).toBeCalledTimes(2));

  await act(async () => result.current.changeCurrentPage('2'));
  await waitFor(() => expect(result.current.currentPage).toBe('2'));

  await act(async () => result.current.setSearchText('Kai'));
  await waitFor(() => expect(result.current.currentPage).toBe('1'));

  await act(async () => result.current.changeOrdering('kapasiteet'));
  await waitFor(() => expect(result.current.ordering.orderBy).toBe('kapasiteet'));

  await act(async () => result.current.changeFilters('kapasiteet', 'from', '50'));
  await waitFor(() => expect(result.current.ordering.orderBy).toBe('id'));
});
