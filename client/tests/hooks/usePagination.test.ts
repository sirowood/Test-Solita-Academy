import { renderHook, act } from '@testing-library/react';
import usePagination from '../../src/hooks/usePagination';
import { USEPAGINATION_INITIAL_STATE } from '../../src/constants';

test('should return the correct initial state', () => {
  const { result } = renderHook(() => usePagination());

  expect(result.current.pagination).toEqual(USEPAGINATION_INITIAL_STATE);
});

test('should change current page', () => {
  const { result } = renderHook(() => usePagination());

  act(() => result.current.changeCurrentPage('25'));
  expect(result.current.pagination.currentPage).toBe('25');
});

test('should change page size', () => {
  const { result } = renderHook(() => usePagination());

  act(() => result.current.changePageSize({ target: { value: '20' } } as React.ChangeEvent<HTMLSelectElement>));
  expect(result.current.pagination.pageSize).toBe('20');
});

test('should reset pagination', () => {
  const { result } = renderHook(() => usePagination());

  act(() => result.current.changeCurrentPage('25'));
  act(() => result.current.changePageSize({ target: { value: '20' } } as React.ChangeEvent<HTMLSelectElement>));
  act(() => result.current.resetPagination());
  expect(result.current.pagination).toEqual(USEPAGINATION_INITIAL_STATE);
});
