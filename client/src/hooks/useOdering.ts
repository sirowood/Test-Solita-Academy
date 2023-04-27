import { useState } from 'react';
import OrderDirection from '../types/hooks/useOdering.type';

function useOdering() {
  const [orderBy, setOrderBy] = useState('id');
  const [orderDirection, setOrderDirection] = useState<OrderDirection>('ASC');

  function changeOrderDirection() {
    if (orderDirection === 'ASC') {
      setOrderDirection('DESC');
    } else {
      setOrderDirection('ASC');
    }
  }

  function changeOrderBy(event: React.ChangeEvent<HTMLSelectElement>) {
    const { value: newOrderBy } = event.target;
    setOrderBy(newOrderBy);
  }

  return {
    orderBy,
    orderDirection,
    changeOrderBy,
    changeOrderDirection,
  };
}

export default useOdering;
