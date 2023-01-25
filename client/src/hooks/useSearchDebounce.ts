import { useState, useEffect } from 'react';
import UseSearchDebounceProps from '../types/hooks/useSearchDebounce';

function useDebounce({
  initialValue,
  milliseconds,
}: UseSearchDebounceProps) {
  const [value, setValue] = useState<string>(initialValue);
  const [timeoutQueue, setTimeoutQueue] = useState<NodeJS.Timeout>();
  const [debouncedValue, setDebouncedValue] = useState<string>(initialValue);

  useEffect(() => {
    if (timeoutQueue) {
      clearTimeout(timeoutQueue);
    }

    setTimeoutQueue(
      setTimeout(() => {
        setDebouncedValue(value);
      }, milliseconds),
    );
  }, [value]);

  return {
    value,
    debouncedValue,
    setValue,
  };
}

export default useDebounce;
