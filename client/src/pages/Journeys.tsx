import React from 'react';
import PageLayout from '../components/PageLayout';
import TopBar from '../components/TopBar';
import Loading from '../components/Loading';
import AddJourneyModal from '../components/list/journeys/AddJourneyModal';
import ListTopBar from '../components/list/ListTopBar';
import ListControlBar from '../components/list/ListControlBar';
import ListFilter from '../components/list/ListFilter';
import ListSection from '../components/list/ListSection';
import JourneyItems from '../components/list/journeys/JourneyItems';
import useList from '../hooks/useList';
import { fetchAllJourneys } from '../services/journey.service';
import { JOURNEYS_ORDERS, JOURNEYS_FILTERS } from '../constants';

function Journeys() {
  const {
    data,
    orderDirection,
    filters,
    searchText,
    showAddModal,
    showFiltersModal,
    resetFilters,
    changeFilters,
    setSearchText,
    changePageSize,
    changeShowAddModal,
    changeShowFiltersModal,
    changeCurrentPage,
    changeOrderBy,
    changeOrderDirection,
  } = useList({
    initialFilters: JOURNEYS_FILTERS,
    fetchFunction: fetchAllJourneys,
  });

  return (
    <>
      <AddJourneyModal
        open={showAddModal}
        changeOpen={changeShowAddModal}
      />

      <PageLayout>
        <ListFilter
          filters={filters}
          showFilters={showFiltersModal}
          resetFilters={resetFilters}
          changeFilters={changeFilters}
          changeShowFilters={changeShowFiltersModal}
        />

        <TopBar title="Journeys">
          <ListTopBar
            searchText={searchText}
            setSearchText={setSearchText}
            changeOpen={changeShowAddModal}
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
          changeShowFilters={changeShowFiltersModal}
          changeOrderBy={changeOrderBy}
          changeOrderDirection={changeOrderDirection}
        />

        <ListSection>
          {data.isLoading ? (
            <Loading />
          ) : (
            <JourneyItems items={data.response.items} />
          )}
        </ListSection>
      </PageLayout>
    </>
  );
}

export default Journeys;
