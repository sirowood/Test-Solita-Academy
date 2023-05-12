import React from 'react';
import {
  FiArrowUp,
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
  FiFilter,
} from 'react-icons/fi';
import {
  arrowButton,
  arrowsDiv,
  genericButton,
  listControlBarSection,
  orderDiv,
  orderSelect,
  pageSizeSelect,
} from '../../styles/components/list/listControlBar.styles';
import ListControlBarProps from '../../types/components/list/listControlBar.type';

function ListControlBar({
  loading,
  currentPage,
  totalPages,
  orderDirection,
  orderOptions,
  changeCurrentPage,
  changePageSize,
  changeShowFilters,
  changeOrderBy,
  changeOrderDirection,
}: ListControlBarProps) {
  return (
    <section className={listControlBarSection}>
      <div className={arrowsDiv}>
        <button
          className={arrowButton}
          type="button"
          title="Previous page"
          disabled={currentPage === 1 || loading}
          onClick={() => changeCurrentPage((currentPage - 1).toString())}
        >
          <FiArrowLeft className="h-6 w-6" />
        </button>
        <button
          className={arrowButton}
          type="button"
          title="Next page"
          disabled={currentPage === totalPages || loading}
          onClick={() => changeCurrentPage((currentPage + 1).toString())}
        >
          <FiArrowRight className="h-6 w-6" />
        </button>
      </div>
      <div>
        <select
          className={pageSizeSelect}
          title="Page size"
          onChange={changePageSize}
        >
          <option value="10">10 / page</option>
          <option value="20">20 / page</option>
          <option value="40">40 / page</option>
        </select>
      </div>
      <div className={orderDiv}>
        <select
          title="Order by"
          className={orderSelect}
          defaultValue="id"
          onChange={changeOrderBy}
        >
          <option value="id">Order By</option>
          {orderOptions.map((optionItem) => (
            <option
              key={`${optionItem.value}`}
              value={`${optionItem.value}`}
            >
              {optionItem.label}
            </option>
          ))}
        </select>
        <button
          type="button"
          title="Change order direction"
          className={genericButton}
          onClick={changeOrderDirection}
        >
          {orderDirection === 'ASC' ? (
            <FiArrowUp className="h-6 w-6" />
          ) : (
            <FiArrowDown className="h-6 w-6" />
          )}
        </button>
      </div>
      <div className="hidden sm:block">
        Page {currentPage} / {loading ? '...' : totalPages}
      </div>
      <div className="items-cen flex grow flex-row justify-end">
        <button
          type="button"
          title="Set filters"
          className={genericButton}
          onClick={changeShowFilters}
        >
          <FiFilter className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}

export default ListControlBar;
