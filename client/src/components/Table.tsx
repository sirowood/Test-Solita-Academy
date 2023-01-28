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
  data,
  columns,
  ordering,
  currentPage,
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
          {data.isLoading ? (
            <Loading colSpan={columns.length} />
          ) : (
            data.response.items.map((item) => (
              <tr key={item.id}>
                {columns.map((column) => (
                  <td
                    className={column.isNumber ? 'text-right' : ''}
                    key={column.displayName}
                  >
                    {item[column.queryName]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
      <Pagination
        totalPages={data.response.totalPages}
        currentPage={currentPage}
        visiblePages={data.visiblePages}
        changePageSize={changePageSize}
        changeCurrentPage={changeCurrentPage}
      />
    </section>
  );
}

export default Table;
