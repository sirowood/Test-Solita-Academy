import { renderHook, act } from '@testing-library/react';
import useFilterDebounce from '../../src/hooks/useFilterDebounce';
import { JOURNEYS_FILTERS } from '../../src/constants';

test('should return the correct initial state', () => {
  const { result } = renderHook(() => useFilterDebounce({ initialFilters: JOURNEYS_FILTERS, milliseconds: 500 }));

  expect(result.current.filters).toEqual(JOURNEYS_FILTERS);
  expect(result.current.showFilters).toEqual(false);
  expect(result.current.debouncedFilters).toEqual(JOURNEYS_FILTERS);
});

test('should change show filters', () => {
  const { result } = renderHook(() => useFilterDebounce({ initialFilters: JOURNEYS_FILTERS, milliseconds: 500 }));

  act(() => result.current.changeShowFilters());
  expect(result.current.showFilters).toEqual(true);
});

test('should change filters', () => {
  const { result } = renderHook(() => useFilterDebounce({ initialFilters: JOURNEYS_FILTERS, milliseconds: 500 }));

  act(() => result.current.changeFilters('departureTime', 'from', '2021-07-01'));
  expect(result.current.filters.filter((filter) => filter.filterName === 'departureTime')[0].filterProperties.from).toBe('2021-07-01');
});

test('should reset filters', () => {
  const { result } = renderHook(() => useFilterDebounce({ initialFilters: JOURNEYS_FILTERS, milliseconds: 500 }));

  act(() => result.current.changeFilters('departureTime', 'from', '2021-07-01'));
  act(() => result.current.resetFilters());
  expect(result.current.filters).toEqual(JOURNEYS_FILTERS);
});