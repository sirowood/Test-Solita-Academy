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
    initialFilters: STATIONS_FILTERS,
    fetchFunction: fetchAllStations,
  });

  return (
    <section className="flex flex-col w-full h-screen">
      <TopBar
        pageTitle="Stations"
        filters={filters}
        searchText={searchText}
        showFilters={showFilters}
        resetFilters={resetFilters}
        changeFilters={changeFilters}
        setSearchText={setSearchText}
        changeShowFilters={changeShowFilters}
      />
      <Table
        data={data}
        ordering={ordering}
        currentPage={currentPage}
        columns={STATIONS_COLUMNS}
        changeOrdering={changeOrdering}
        changePageSize={changePageSize}
        changeCurrentPage={changeCurrentPage}
      ></Table>
    </section>
  );
}

export default Stations;
