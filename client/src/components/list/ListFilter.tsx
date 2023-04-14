import React from 'react';
import { BiReset as ResetIcon } from 'react-icons/bi';
import { Modal, ModalHeader, ModalBody, ModalFooter } from './modal';
import FilterProps from '../../types/components/list/listFilter.type';
import {
  button,
  filter,
  filterRow,
  filterInput,
  singleFilter,
} from '../../styles/components/list/listFilter.styles';

function ListFilter({
  filters,
  showFilters,
  resetFilters,
  changeFilters,
  changeShowFilters,
}: FilterProps) {
  if (!showFilters) {
    return null;
  }

  return (
    <section className={filter}>
      <div
        role="presentation"
        onClick={changeShowFilters}
        className="fixed z-10 h-screen w-screen bg-gray-800/30 backdrop-blur-sm"
      />
      <div className="fixed top-1/2 left-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 rounded-md bg-solita-500 p-8">
        {filters.map(({ displayName, type, filterProperties, filterName }) => (
          <div
            key={filterName}
            className={singleFilter}
          >
            <span>{displayName}</span>
            <div className={filterRow}>
              <input
                title={`Filter ${displayName} from`}
                className={filterInput}
                type={type}
                value={filterProperties.from}
                // prettier-ignore
                onChange={({ target }) => changeFilters(filterName, 'from', target.value)
              }
              />
              <span>to</span>
              <input
                title={`Filter ${displayName} to`}
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
          title="Reset filters button"
          className={button}
          type="reset"
          onClick={resetFilters}
        >
          <ResetIcon />
        </button>
      </div>
    </section>
  );
}

export default ListFilter;
