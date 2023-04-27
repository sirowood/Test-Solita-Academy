import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useSearchDebounce from './useSearchDebounce';
import { fetchSingleStation } from '../services/station.service';
import { SingleStationResponse } from '../types/services/station.type';
import { STATION_INITIAL_STATE } from '../constants';

function useStation() {
  const { id } = useParams();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<SingleStationResponse>(
    STATION_INITIAL_STATE,
  );
  const {
    value: monthFilter,
    debouncedValue: month,
    setValue: setMonthFilter,
  } = useSearchDebounce({ initialValue: '', milliseconds: 500 });

  async function updateDate() {
    setIsLoading(true);
    try {
      const response = await fetchSingleStation({ id, month });
      setData(response);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
    setIsLoading(false);
  }

  useEffect(() => {
    updateDate();
  }, [month, id]);

  return { data, monthFilter, setMonthFilter, error, isLoading };
}

export default useStation;
