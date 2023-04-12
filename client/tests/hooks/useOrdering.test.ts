import { renderHook, act } from '@testing-library/react';
import useOrdering from '../../src/hooks/useOdering';

describe('useOrdering', () => {
  test('should initialize with default values', () => {
    const { result } = renderHook(() => useOrdering());

    expect(result.current.orderBy).toBe('id');
    expect(result.current.orderDirection).toBe('ASC');
  });

  test('should update order direction when changeOrderDirection is called', () => {
    const { result } = renderHook(() => useOrdering());

    act(() => {
      result.current.changeOrderDirection();
    });

    expect(result.current.orderDirection).toBe('DESC');

    act(() => {
      result.current.changeOrderDirection();
    });

    expect(result.current.orderDirection).toBe('ASC');

  });

  test('should update order by when changeOrderBy is called', () => {
    const { result } = renderHook(() => useOrdering());

    act(() => {
      result.current.changeOrderBy({ target: { value: 'departureTime' } } as React.ChangeEvent<HTMLSelectElement>);
    });

    expect(result.current.orderBy).toBe('departureTime');
  });
});
