import React from 'react';
import { BiReset as ResetIcon } from 'react-icons/bi';
import FilterProps from '../../types/components/table/filter.type';

function Filter({
  filters,
  showFilters,
  resetFilters,
  changeFilters,
}: FilterProps) {
  if (!showFilters) {
    return null;
  }

  return (
    <div
      className="absolute top-[38px] -left-[128px] flex
      h-max w-max flex-col items-center
      gap-2 rounded-lg bg-solita-500 p-2
      text-sm shadow-lg"
    >
      {filters.map((filter) => (
        <div key={filter.filterName}>
          <div className="text-center">{filter.displayName}</div>
          <div className="flex flex-row items-center gap-1">
            <input
              className="w-[120px] rounded-md bg-solita-400 p-1"
              type={filter.type}
              value={filter.filterProperties.from}
              // prettier-ignore
              onChange={({ target }) => changeFilters(filter.filterName, 'from', target.value)
              }
            />
            <span>to</span>
            <input
              className="w-[120px] rounded-md bg-solita-400 p-1"
              type={filter.type}
              value={filter.filterProperties.to}
              min={filter.filterProperties.from}
              // prettier-ignore
              onChange={({ target }) => changeFilters(filter.filterName, 'to', target.value)
              }
            />
          </div>
        </div>
      ))}
      <button
        className="rounded-sm p-1 text-3xl duration-150 hover:bg-solita-400 active:translate-y-0.5 active:text-gray-400"
        type="button"
        onClick={resetFilters}
      >
        <ResetIcon />
      </button>
    </div>
  );
}

export default Filter;
