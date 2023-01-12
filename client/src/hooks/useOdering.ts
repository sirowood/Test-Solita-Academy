import { useState } from 'react';
import OderingStateProps from '../types/hooks/useOdering.type';
import { USEORDERING_INITIAL_STATE } from '../constants';

function useOdering() {
  const [ordering, setOrdering] = useState<OderingStateProps>(USEORDERING_INITIAL_STATE);

  function resetOrdering() {
    setOrdering(USEORDERING_INITIAL_STATE);
  }

  function changeOrdering(columnName: string) {
    if (columnName === ordering.orderBy) {
      if (ordering.orderASC) {
        setOrdering({ ...ordering, orderASC: false });
      } else {
        resetOrdering();
      }
    } else {
      resetOrdering();
      setOrdering({ ...ordering, orderBy: columnName });
    }
  }

  return {
    ordering,
    resetOrdering,
    changeOrdering,
  };
}

export default useOdering;
