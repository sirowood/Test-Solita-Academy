import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  stationError,
  errorMessage,
  returnButton,
} from '../../styles/components/station/stationError.styles';
import StationErrorProp from '../../types/components/station/stationError.type';

function StationError({ error }: StationErrorProp) {
  const navigate = useNavigate();
  return (
    <div className={stationError}>
      <span className={errorMessage}>{error}</span>
      <button
        className={returnButton}
        onClick={() => navigate('/stations')}
      >
        Back
      </button>
    </div>
  );
}

export default StationError;
