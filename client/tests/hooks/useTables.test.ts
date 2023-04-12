import { renderHook } from '@testing-library/react';
import useTables from '../../src/hooks/useTables';
import { JOURNEYS_FILTERS } from '../../src/constants';

describe('useTables', () => {
  test('should return the expected values and functions', () => {
    const fetchFunction = jest.fn();
    const { result } = renderHook(() => useTables({
      initialFilters: JOURNEYS_FILTERS,
      fetchFunction,
    }));

    expect(result.current.data).toBeDefined();
    expect(result.current.orderDirection).toBeDefined();
    expect(result.current.filters).toBeDefined();
    expect(result.current.searchText).toBeDefined();
    expect(result.current.showFilters).toBeDefined();
    expect(result.current.resetFilters).toBeDefined();
    expect(result.current.setSearchText).toBeDefined();
    expect(result.current.changeFilters).toBeDefined();
    expect(result.current.changePageSize).toBeDefined();
    expect(result.current.changeShowFilters).toBeDefined();
    expect(result.current.changeCurrentPage).toBeDefined();
    expect(result.current.changeOrderBy).toBeDefined();
    expect(result.current.changeOrderDirection).toBeDefined();
  });
});
