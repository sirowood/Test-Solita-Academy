import { renderHook, act } from '@testing-library/react';
import useOrdering from '../../src/hooks/useOdering';
import { USEORDERING_INITIAL_STATE } from '../../src/constants';

test('should return the correct initial state', () => {
  const { result } = renderHook(() => useOrdering());
  expect(result.current.ordering).toEqual(USEORDERING_INITIAL_STATE);
});

test('should change ordering', () => {
  const { result } = renderHook(() => useOrdering());

  act(() => result.current.changeOrdering('departureTime'));
  expect(result.current.ordering.orderBy).toBe('departureTime');
  expect(result.current.ordering.orderASC).toBe(true);

  act(() => result.current.changeOrdering('departureTime'));
  expect(result.current.ordering.orderASC).toBe(false);

  act(() => result.current.changeOrdering('departureTime'));
  expect(result.current.ordering.orderBy).toBe('id');
  expect(result.current.ordering.orderASC).toBe(true);
});

test('should reset ordering', () => {
  const { result } = renderHook(() => useOrdering());

  act(() => result.current.changeOrdering('departureTime'));
  act(() => result.current.resetOrdering());
  expect(result.current.ordering).toEqual(USEORDERING_INITIAL_STATE);
});
