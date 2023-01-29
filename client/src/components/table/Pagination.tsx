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
} from '../../types/components/table/Pagination.type';
import { PAGINATION_OPTIONS as options } from '../../constants';

function PaginationButton({
  disabled,
  children,
  className,
  onClick,
}: PaginationButtonProps) {
  return (
    <button
      type="button"
      className={`${
        disabled
          ? 'border-gray-400 text-gray-400 hover:cursor-default'
          : 'duration-150 hover:bg-white hover:text-solita-400'
      } flex h-8 w-8 flex-row items-center justify-center duration-150 ${className}`}
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
        className="p-1 text-center align-middle rounded-md outline-none w-max bg-solita-500"
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
    <section className="flex flex-row items-center gap-4">
      <div className="flex flex-row items-center divide-x-[1px] border border-white">
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
            className={isCurrentPage(page) ? 'bg-white text-solita-400' : ''}
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
      <div>
        <span>Page</span>
        <span className="font-bold">{` ${currentPage} of ${totalPages}`}</span>
      </div>
      <PaginationSelect
        defaultValue="10"
        onChange={changePageSize}
      />
    </section>
  );
}

export default Pagination;
