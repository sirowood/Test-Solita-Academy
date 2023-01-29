import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

  async function updateDate() {
    setIsLoading(true);
    try {
      const response = await fetchSingleStation({ id });
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
  }, []);

  return { data, error, isLoading };
}

export default useStation;
