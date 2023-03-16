import React from 'react';
import { BsFillCalendarMonthFill, BsXCircleFill } from 'react-icons/bs';
import {
  stationTopBarDiv,
  monthFilterDiv,
  input,
  resetButton,
} from '../../styles/components/station/stationTopBar.styles';
import StationTopBarProps from '../../types/components/station/stationTopBar.type';

function StationTopBar({ monthFilter, setMonthFilter }: StationTopBarProps) {
  function resetMonthFilter() {
    setMonthFilter('');
  }

  return (
    <div className={stationTopBarDiv}>
      <BsFillCalendarMonthFill className="h-6 w-6" />
      <div className={monthFilterDiv}>
        <input
          id="month"
          type="month"
          title="Month filter"
          className={input}
          pattern="d{4}-(0[1-9]|1[0-2])"
          value={monthFilter}
          onChange={({ target }) => setMonthFilter(target.value)}
        />
        <button
          type="button"
          title="Reset month filter button"
          className={resetButton}
          onClick={resetMonthFilter}
          disabled={!monthFilter}
        >
          <BsXCircleFill className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default StationTopBar;
