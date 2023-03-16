import React from 'react';
import {
  FiArrowUp,
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
  FiFilter,
} from 'react-icons/fi';

type ListControlBarProps = {
  loading: boolean;
  currentPage: number;
  totalPages: number;
  orderDirection: string;
  orderOptions: {
    value: string;
    label: string;
  }[];
  changeCurrentPage: (newCurrentPage: string) => void;
  changePageSize: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  changeShowFilters: () => void;
  changeOrderBy: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  changeOrderDirection: () => void;
};

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
    <section className="flex shrink-0 flex-row items-center gap-2 overflow-x-auto bg-solita-400 p-2 shadow-xl">
      <div className="flex flex-row items-center gap-1">
        <button
          className="rounded border-[1px] border-gray-400 text-gray-400 duration-75 hover:cursor-pointer hover:border-white hover:text-white active:scale-95 disabled:border-gray-600 disabled:text-gray-600 disabled:hover:cursor-default disabled:active:scale-100"
          type="button"
          title="Previous page"
          disabled={currentPage === 1 || loading}
          onClick={() => changeCurrentPage((currentPage - 1).toString())}
        >
          <FiArrowLeft className="h-6 w-6" />
        </button>
        <button
          className="rounded border-[1px] border-gray-400 text-gray-400 duration-75 hover:cursor-pointer hover:border-white hover:text-white active:scale-95 disabled:border-gray-600 disabled:text-gray-600 disabled:hover:cursor-default disabled:active:scale-100"
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
          className="appearance-none rounded bg-solita-500 px-2 py-1 outline-none"
          title="Page size"
          onChange={changePageSize}
        >
          <option value="10">10 / page</option>
          <option value="20">20 / page</option>
          <option value="40">40 / page</option>
        </select>
      </div>
      <div className="flex flex-row items-center gap-2">
        <select
          title="Order by"
          className="w-24 appearance-none truncate rounded bg-solita-500 px-2 py-1 outline-none sm:w-max"
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
          title={`Order direction: ${orderDirection}`}
          className="text-gray-400 duration-75 hover:cursor-pointer hover:text-white"
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
        Page {currentPage} / {totalPages}
      </div>
      <div className="items-cen flex grow flex-row justify-end">
        <button
          type="button"
          title="Set filters"
          className="text-gray-400 duration-75 hover:cursor-pointer hover:text-white"
          onClick={changeShowFilters}
        >
          <FiFilter className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}

export default ListControlBar;
