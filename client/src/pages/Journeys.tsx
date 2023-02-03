import React from 'react';
import PageLayout from '../components/PageLayout';
import Table from '../components/table/Table';
import TopBar from '../components/table/TopBar';
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
    <PageLayout className="flex-col">
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
        data={data}
        ordering={ordering}
        currentPage={currentPage}
        columns={JOURNEYS_COLUMNS}
        changeOrdering={changeOrdering}
        changePageSize={changePageSize}
        changeCurrentPage={changeCurrentPage}
      ></Table>
    </PageLayout>
  );
}

export default Journeys;
