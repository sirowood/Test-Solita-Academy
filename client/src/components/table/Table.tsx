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
} from '../../types/components/table/table.type';
import {
  tableSection,
  tableHeadRow,
  tableHeadCell,
  tableBodyRow,
  tableBodyCell,
  tableHeadCellText,
} from '../../styles/components/table/table.styles';

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
    <section className={tableSection}>
      <table className="table-auto">
        <thead>
          <tr className={tableHeadRow}>
            {columns.map(({ isNumber, queryName, displayName }) => (
              <td
                key={queryName}
                className={tableHeadCell}
                onClick={() => changeOrdering(queryName)}
              >
                <div className={tableHeadCellText(isNumber)}>
                  {displayName}
                  <SortingArrow
                    queryName={queryName}
                    ordering={ordering}
                  />
                </div>
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.response.items.map((item) => (
            <tr
              className={tableBodyRow(navigatable)}
              key={item.id}
              // prettier-ignore
              onClick={() => navigatable && navigate(`${pathname}/${item.id}`)
                }
            >
              {columns.map(({ isNumber, displayName, queryName }) => (
                <td
                  className={tableBodyCell(isNumber)}
                  key={displayName}
                >
                  {item[queryName]}
                </td>
              ))}
            </tr>
          ))}
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
