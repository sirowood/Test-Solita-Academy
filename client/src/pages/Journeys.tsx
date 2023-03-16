import React from 'react';
import PageLayout from '../components/PageLayout';
import TopBar from '../components/TopBar';
import ListTopBar from '../components/list/ListTopBar';
import ListControlBar from '../components/list/ListControlBar';
import ListFilter from '../components/list/ListFilter';
import ListSection from '../components/list/ListSection';
import JourneyItems from '../components/journeys/JourneyItems';
import useTables from '../hooks/useTables';
import { fetchAllJourneys } from '../services/journey.service';
import { JOURNEYS_ORDERS, JOURNEYS_FILTERS } from '../constants';

function Journeys() {
  const {
    data,
    orderDirection,
    filters,
    searchText,
    showFilters,
    resetFilters,
    changeFilters,
    setSearchText,
    changePageSize,
    changeShowFilters,
    changeCurrentPage,
    changeOrderBy,
    changeOrderDirection,
  } = useTables({
    initialFilters: JOURNEYS_FILTERS,
    fetchFunction: fetchAllJourneys,
  });

  return (
    <PageLayout>
      <TopBar title="Journeys">
        <ListTopBar
          searchText={searchText}
          setSearchText={setSearchText}
        />
      </TopBar>

      <ListControlBar
        loading={data.isLoading}
        currentPage={data.response.currentPage}
        totalPages={data.response.totalPages}
        orderDirection={orderDirection}
        orderOptions={JOURNEYS_ORDERS}
        changeCurrentPage={changeCurrentPage}
        changePageSize={changePageSize}
        changeShowFilters={changeShowFilters}
        changeOrderBy={changeOrderBy}
        changeOrderDirection={changeOrderDirection}
      />

      <ListSection>
        <JourneyItems items={data.response.items} />
      </ListSection>

      <ListFilter
        filters={filters}
        showFilters={showFilters}
        resetFilters={resetFilters}
        changeFilters={changeFilters}
        changeShowFilters={changeShowFilters}
      />
    </PageLayout>
  );
}

export default Journeys;
