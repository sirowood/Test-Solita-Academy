import { renderHook, act } from "@testing-library/react";
import useSearchDebounce from '../../src/hooks/useSearchDebounce';

test('should return the correct initial state', () => {
  const { result } = renderHook(() => useSearchDebounce({ initialValue: '', milliseconds: 500 }));

  expect(result.current.value).toBe('');
  expect(result.current.debouncedValue).toBe('');
});

test('should change search text', () => {
  const { result } = renderHook(() => useSearchDebounce({ initialValue: '', milliseconds: 500 }));

  act(() => result.current.setValue('Kai'));
  expect(result.current.value).toBe('Kai');
});
