import React from 'react';
import { AiOutlineLoading3Quarters as LoadingIcon } from 'react-icons/ai';
import LoadingProps from '../types/components/loading.type';

function Loading({ colSpan }: LoadingProps) {
  return (
    <tr>
      <td colSpan={colSpan}>
        <LoadingIcon className="text-4xl animate-spin" />
      </td>
    </tr>
  );
}

export default Loading;
