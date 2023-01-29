import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  TiArrowUnsorted,
  TiArrowSortedUp,
  TiArrowSortedDown,
} from 'react-icons/ti';
import Loading from '../Loading';
import Pagination from './Pagination';
import {
  TableProps,
  SortingArrowProps,
} from '../../types/components/table/Table.type';

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
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const navigatable = pathname === '/stations';

  if (data.isLoading) {
    return <Loading />;
  }

  return (
    <section className="flex flex-col h-full gap-2">
      <table className="w-full">
        <thead className="select-none">
          <tr className="h-12 border-b-2">
            {columns.map((column) => (
              <td
                key={column.queryName}
                className="hover:cursor-pointer hover:bg-solita-500/80"
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
            <tr>
              <td colSpan={columns.length}>
                <div className="text-">
                  <Loading />
                </div>
              </td>
            </tr>
          ) : (
            data.response.items.map((item) => (
              <tr
                className={`${
                  navigatable
                    ? 'hover:cursor-pointer hover:bg-solita-500/80'
                    : ''
                } h-12 border-b-[1px]`}
                key={item.id}
                // prettier-ignore
                onClick={() => navigatable && navigate(`${pathname}/${item.id}`)
                }
              >
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
