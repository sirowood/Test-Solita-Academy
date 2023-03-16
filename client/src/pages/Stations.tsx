import React from 'react';
import PageLayout from '../components/PageLayout';
import TopBar from '../components/TopBar';
import ListTopBar from '../components/list/ListTopBar';
import ListControlBar from '../components/list/ListControlBar';
import ListFilter from '../components/list/ListFilter';
import ListSection from '../components/list/ListSection';
import StationItems from '../components/stations/StationItems';
import useTables from '../hooks/useTables';
import { fetchAllStations } from '../services/station.service';
import { STATIONS_ORDERS, STATIONS_FILTERS } from '../constants';
import stations from '../styles/pages/stations.styles';

function Stations() {
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
    initialFilters: STATIONS_FILTERS,
    fetchFunction: fetchAllStations,
  });

  return (
    <PageLayout classProps={stations}>
      <TopBar title="Stations">
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
        orderOptions={STATIONS_ORDERS}
        changeCurrentPage={changeCurrentPage}
        changePageSize={changePageSize}
        changeShowFilters={changeShowFilters}
        changeOrderBy={changeOrderBy}
        changeOrderDirection={changeOrderDirection}
      />

      <ListFilter
        filters={filters}
        showFilters={showFilters}
        resetFilters={resetFilters}
        changeFilters={changeFilters}
        changeShowFilters={changeShowFilters}
      />

      <ListSection>
        <StationItems items={data.response.items} />
      </ListSection>
    </PageLayout>
  );
}

export default Stations;
