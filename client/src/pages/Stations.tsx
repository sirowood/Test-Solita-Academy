import React from 'react';
import Table from '../components/Table';
import TopBar from '../components/TopBar';
import useTables from '../hooks/useTables';
import { fetchAllStations } from '../services/station.service';
import { STATIONS_COLUMNS, STATIONS_FILTERS } from '../constants';

function Stations() {
  const {
    data,
    filters,
    ordering,
    searchText,
    showFilter,
    currentPage,
    resetFilters,
    changeFilters,
    setSearchText,
    changeOrdering,
    changePageSize,
    changeShowFilter,
    changeCurrentPage,
  } = useTables({
    initialFilters: STATIONS_FILTERS,
    fetchFunction: fetchAllStations,
  });

  return (
    <section className="flex flex-col w-full h-screen">
      <TopBar
        pageTitle="Stations"
        filters={filters}
        searchText={searchText}
        showFilter={showFilter}
        resetFilters={resetFilters}
        changeFilters={changeFilters}
        setSearchText={setSearchText}
        changeShowFilter={changeShowFilter}
      />
      <Table
        ordering={ordering}
        currentPage={currentPage}
        columns={STATIONS_COLUMNS}
        isLoading={data.isLoading}
        visiblePages={data.visiblePages}
        totalPages={data.response.totalPages}
        changeOrdering={changeOrdering}
        changePageSize={changePageSize}
        changeCurrentPage={changeCurrentPage}
      >
        {data.response.items.map((item) => (
          <tr key={item.id}>
            <td>{item.nimi}</td>
            <td>{item.osoite}</td>
            <td className="text-right">{item.kapasiteet}</td>
          </tr>
        ))}
      </Table>
    </section>
  );
}

export default Stations;
