import React from 'react';
import { Button } from '@material-tailwind/react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from './modal';
import FilterProps from '../../types/components/list/listFilter.type';
import {
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
  return (
    <Modal
      open={showFilters}
      changeOpen={changeShowFilters}
    >
      <ModalHeader>Filters</ModalHeader>
      <ModalBody>
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
        <ModalFooter>
          <Button
            title="Reset filters button"
            color="amber"
            type="reset"
            onClick={resetFilters}
          >
            Reset
          </Button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}

export default ListFilter;
