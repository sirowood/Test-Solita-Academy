import React from 'react';
import { useNavigate } from 'react-router-dom';
import StationErrorProp from '../../types/components/station/stationError.type';

function StationError({ error }: StationErrorProp) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span className="text-lg font-bold">{error}</span>
      <button
        className="px-2 py-1 rounded shadow-md bg-solita-500"
        onClick={() => navigate('/stations')}
      >
        Back
      </button>
    </div>
  );
}

export default StationError;
