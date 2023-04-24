import React from 'react';
import PageLayout from '../components/PageLayout';
import AddStationModal from '../components/list/stations/AddStationModal';
import TopBar from '../components/TopBar';
import ListTopBar from '../components/list/ListTopBar';
import ListControlBar from '../components/list/ListControlBar';
import ListFilter from '../components/list/ListFilter';
import ListSection from '../components/list/ListSection';
import StationItems from '../components/list/stations/StationItems';
import useList from '../hooks/useList';
import { fetchAllStations } from '../services/station.service';
import { STATIONS_ORDERS, STATIONS_FILTERS } from '../constants';

function Stations() {
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
    initialFilters: STATIONS_FILTERS,
    fetchFunction: fetchAllStations,
  });

  return (
    <>
      <AddStationModal
        open={showAddModal}
        changeOpen={changeShowAddModal}
      />

      <ListFilter
        filters={filters}
        showFilters={showFiltersModal}
        resetFilters={resetFilters}
        changeFilters={changeFilters}
        changeShowFilters={changeShowFiltersModal}
      />
      <PageLayout>
        <TopBar title="Stations">
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
          orderOptions={STATIONS_ORDERS}
          changeCurrentPage={changeCurrentPage}
          changePageSize={changePageSize}
          changeShowFilters={changeShowFiltersModal}
          changeOrderBy={changeOrderBy}
          changeOrderDirection={changeOrderDirection}
        />

        <ListSection>
          <StationItems items={data.response.items} />
        </ListSection>
      </PageLayout>
    </>
  );
}

export default Stations;
