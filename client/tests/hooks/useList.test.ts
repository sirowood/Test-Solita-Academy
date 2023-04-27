import { renderHook, act, waitFor } from '@testing-library/react';
import useList from '../../src/hooks/useList';
import { JOURNEYS_FILTERS } from '../../src/constants';

describe('useList', () => {
  test('should return the expected values and functions', async () => {
    const fetchFunction = jest.fn();

    const { result } = renderHook(() => useList({
      initialFilters: JOURNEYS_FILTERS,
      fetchFunction,
    }));

    await waitFor(() => {
      expect(result.current.data).toBeDefined();
      expect(result.current.orderDirection).toBeDefined();
      expect(result.current.filters).toBeDefined();
      expect(result.current.searchText).toBeDefined();
      expect(result.current.showFiltersModal).toBeDefined();
      expect(result.current.showAddModal).toBeDefined();
      expect(result.current.resetFilters).toBeDefined();
      expect(result.current.setSearchText).toBeDefined();
      expect(result.current.changeFilters).toBeDefined();
      expect(result.current.changePageSize).toBeDefined();
      expect(result.current.changeShowFiltersModal).toBeDefined();
      expect(result.current.changeShowAddModal).toBeDefined();
      expect(result.current.changeCurrentPage).toBeDefined();
      expect(result.current.changeOrderBy).toBeDefined();
      expect(result.current.changeOrderDirection).toBeDefined();
    })
  });
});
