import React from 'react';
import Table from '../components/Table';
import TopBar from '../components/TopBar';
import useTables from '../hooks/useTables';
import { fetchAllJourneys } from '../services/journey.service';
import { JOURNEYS_COLUMNS, JOURNEYS_FILTERS } from '../constants';

function Journeys() {
  const {
    data,
    filters,
    ordering,
    searchText,
    showFilters,
    currentPage,
    resetFilters,
    changeFilters,
    setSearchText,
    changeOrdering,
    changePageSize,
    changeShowFilters,
    changeCurrentPage,
  } = useTables({
    initialFilters: JOURNEYS_FILTERS,
    fetchFunction: fetchAllJourneys,
  });
  return (
    <section className="w-full">
      <TopBar
        pageTitle="Journeys"
        filters={filters}
        searchText={searchText}
        showFilters={showFilters}
        resetFilters={resetFilters}
        changeFilters={changeFilters}
        setSearchText={setSearchText}
        changeShowFilters={changeShowFilters}
      />
      <Table
        ordering={ordering}
        currentPage={currentPage}
        columns={JOURNEYS_COLUMNS}
        isLoading={data.isLoading}
        visiblePages={data.visiblePages}
        totalPages={data.response.totalPages}
        changeOrdering={changeOrdering}
        changePageSize={changePageSize}
        changeCurrentPage={changeCurrentPage}
      >
        {data.response.items.map((item) => (
          <tr key={item.id}>
            <td>{item.departureTime}</td>
            <td>{item.arrivalTime}</td>
            <td>{item.departureStationName}</td>
            <td>{item.arrivalStationName}</td>
            <td className="text-right">{item.coveredDistance}</td>
            <td className="text-right">{item.duration}</td>
          </tr>
        ))}
      </Table>
    </section>
  );
}

export default Journeys;
