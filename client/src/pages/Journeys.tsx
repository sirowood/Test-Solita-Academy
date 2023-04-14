import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../reducers/modal';
import PageLayout from '../components/PageLayout';
import AddJourneyModal from '../components/list/journeys/AddJourneyModal';
import TopBar from '../components/TopBar';
import ListTopBar from '../components/list/ListTopBar';
import ListControlBar from '../components/list/ListControlBar';
import ListFilter from '../components/list/ListFilter';
import ListSection from '../components/list/ListSection';
import JourneyItems from '../components/list/journeys/JourneyItems';
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

  const dispatch = useDispatch();

  function changeOpen() {
    dispatch(toggleModal());
  }

  return (
    <>
      <AddJourneyModal changeOpen={changeOpen} />

      <PageLayout>
        <ListFilter
          filters={filters}
          showFilters={showFilters}
          resetFilters={resetFilters}
          changeFilters={changeFilters}
          changeShowFilters={changeShowFilters}
        />

        <TopBar title="Journeys">
          <ListTopBar
            searchText={searchText}
            setSearchText={setSearchText}
            changeOpen={changeOpen}
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
      </PageLayout>
    </>
  );
}

export default Journeys;
