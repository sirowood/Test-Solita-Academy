import React from 'react';
import { BiReset as ResetIcon } from 'react-icons/bi';
import FilterProps from '../../types/components/table/filter.type';
import {
  button,
  filter,
  filterRow,
  filterInput,
  singleFilter,
} from '../../styles/components/table/filter.styles';

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
    <section className={filter}>
      {filters.map(({ displayName, type, filterProperties, filterName }) => (
        <div
          key={filterName}
          className={singleFilter}
        >
          <span>{displayName}</span>
          <div className={filterRow}>
            <input
              className={filterInput}
              type={type}
              value={filterProperties.from}
              // prettier-ignore
              onChange={({ target }) => changeFilters(filterName, 'from', target.value)
              }
            />
            <span>to</span>
            <input
              className={filterInput}
              type={type}
              value={filterProperties.to}
              min={filterProperties.from}
              // prettier-ignore
              onChange={({ target }) => changeFilters(filterName, 'to', target.value)
              }
            />
          </div>
        </div>
      ))}
      <button
        className={button}
        type="button"
        onClick={resetFilters}
      >
        <ResetIcon />
      </button>
    </section>
  );
}

export default Filter;
