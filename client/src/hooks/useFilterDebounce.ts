import { useState, useEffect } from 'react';
import { UseFilterDebounceProps, FilterStateProps } from '../types/hooks/useFilterDebounce.type';

function useFilter({ initialFilters, milliseconds }: UseFilterDebounceProps) {
  const [filters, setFilters] = useState<FilterStateProps>(initialFilters);
  const [timeoutQueue, setTimeoutQueue] = useState<NodeJS.Timeout>();
  const [debouncedFilters, setDebouncedFilters] = useState<FilterStateProps>(initialFilters);

  function changeFilters(filterName: string, propertyName: string, newValue: string) {
    const newFilters = filters.map((filter) => (filter.filterName === filterName
      ? {
        ...filter,
        filterProperties: {
          from: propertyName === 'from' ? newValue : filter.filterProperties.from,
          to: propertyName === 'to' ? newValue : filter.filterProperties.to,
        },
      }
      : filter));

    setFilters(newFilters);
  }

  function resetFilters() {
    setFilters(initialFilters);
  }

  useEffect(() => {
    if (timeoutQueue) {
      clearTimeout(timeoutQueue);
    }

    setTimeoutQueue(
      setTimeout(() => {
        setDebouncedFilters(filters);
      }, milliseconds),
    );
  }, [filters]);

  return {
    filters,
    debouncedFilters,
    resetFilters,
    changeFilters,
  };
}

export default useFilter;
