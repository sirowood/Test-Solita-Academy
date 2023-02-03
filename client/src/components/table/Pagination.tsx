import React from 'react';
import {
  RxArrowLeft as PrevArrowIcon,
  RxArrowRight as NextArrowIcon,
  RxDoubleArrowLeft as LeftArrowIcon,
  RxDoubleArrowRight as RightArrowIcon,
} from 'react-icons/rx';
import {
  PaginationProps,
  PaginationButtonProps,
  PaginationSelectProps,
} from '../../types/components/table/pagination.type';
import { PAGINATION_OPTIONS as options } from '../../constants';
import {
  pagination,
  paginationPages,
  paginationSelect,
  paginationButtons,
  paginationButton,
} from '../../styles/components/table/pagination.styles';

function PaginationButton({
  disabled,
  children,
  classProps,
  onClick,
}: PaginationButtonProps) {
  return (
    <button
      type="button"
      className={paginationButton(disabled, classProps)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function PaginationSelect({ defaultValue, onChange }: PaginationSelectProps) {
  return (
    <div>
      <select
        className={paginationSelect}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {`Show ${option.label}`}
          </option>
        ))}
      </select>
    </div>
  );
}

function Pagination({
  totalPages,
  currentPage,
  visiblePages,
  changePageSize,
  changeCurrentPage,
}: PaginationProps) {
  function isFirstPage() {
    return currentPage === '1';
  }

  function isCurrentPage(page: string) {
    return currentPage === page;
  }

  function isLastPage() {
    return +currentPage === totalPages;
  }

  function toFirstPage() {
    changeCurrentPage('1');
  }

  function toPrevPage() {
    changeCurrentPage((+currentPage - 1).toString());
  }

  function toNextPage() {
    changeCurrentPage((+currentPage + 1).toString());
  }

  function toLastPage() {
    changeCurrentPage(totalPages!.toString());
  }

  return (
    <section className={pagination}>
      <div className={paginationButtons}>
        <PaginationButton
          disabled={isFirstPage()}
          onClick={toFirstPage}
        >
          <LeftArrowIcon />
        </PaginationButton>
        <PaginationButton
          disabled={isFirstPage()}
          onClick={toPrevPage}
        >
          <PrevArrowIcon />
        </PaginationButton>
        {visiblePages.map((page) => (
          <PaginationButton
            key={page}
            disabled={isCurrentPage(page)}
            onClick={() => changeCurrentPage(page)}
            classProps={isCurrentPage(page) ? 'bg-white text-solita-400' : ''}
          >
            {page}
          </PaginationButton>
        ))}
        <PaginationButton
          disabled={isLastPage()}
          onClick={toNextPage}
        >
          <NextArrowIcon />
        </PaginationButton>
        <PaginationButton
          disabled={isLastPage()}
          onClick={toLastPage}
        >
          <RightArrowIcon />
        </PaginationButton>
      </div>
      <div className={paginationPages}>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <PaginationSelect
          defaultValue="10"
          onChange={changePageSize}
        />
      </div>
    </section>
  );
}

export default Pagination;
