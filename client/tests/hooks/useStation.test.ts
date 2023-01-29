import { renderHook, waitFor } from '@testing-library/react';
import useStation from '../../src/hooks/useStation';
import { STATION_INITIAL_STATE } from '../../src/constants';

jest.mock('../../src/services/station.service', () => ({
  fetchSingleStation: jest.fn(() => Promise.resolve(STATION_INITIAL_STATE))
}));

test('should fetch data and set states correctly', async () => {
  const { result } = renderHook(() => useStation());

  await waitFor(() => {
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(undefined);
    expect(result.current.data).toEqual(STATION_INITIAL_STATE);
  });
});
