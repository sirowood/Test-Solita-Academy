import React from 'react';
import {
  TiArrowUnsorted,
  TiArrowSortedUp,
  TiArrowSortedDown,
} from 'react-icons/ti';
import Loading from './Loading';
import Pagination from './Pagination';
import { TableProps, SortingArrowProps } from '../types/components/table.type';

function SortingArrow({ queryName, ordering }: SortingArrowProps) {
  if (queryName !== ordering.orderBy) {
    return <TiArrowUnsorted className="text-gray-500" />;
  }

  return ordering.orderASC ? <TiArrowSortedUp /> : <TiArrowSortedDown />;
}

function Table({
  columns,
  children,
  ordering,
  isLoading,
  totalPages,
  currentPage,
  visiblePages,
  changeOrdering,
  changePageSize,
  changeCurrentPage,
}: TableProps) {
  return (
    <section className="flex flex-col h-full p-2">
      <table className="w-full">
        <thead className="select-none">
          <tr className="border-b-2">
            {columns.map((column) => (
              <td
                key={column.queryName}
                className="hover:cursor-pointer"
                onClick={() => changeOrdering(column.queryName)}
              >
                <div
                  className={`${
                    column.isNumber ? 'justify-end' : 'justify-start'
                  } flex flex-row items-center`}
                >
                  {column.displayName}
                  <SortingArrow
                    queryName={column.queryName}
                    ordering={ordering}
                  />
                </div>
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? <Loading colSpan={columns.length} /> : children}
        </tbody>
      </table>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        visiblePages={visiblePages}
        changePageSize={changePageSize}
        changeCurrentPage={changeCurrentPage}
      />
    </section>
  );
}

export default Table;
