import React from 'react';
import useStation from '../hooks/useStation';
import PageLayout from '../components/PageLayout';
import TopBar from '../components/TopBar';
import Loading from '../components/Loading';
import StationError from '../components/station/StationError';
import StationTopBar from '../components/station/StationTopBar';
import StationCard from '../components/station/StationCard';
import StationStatistics from '../components/station/StationStatistics';
import {
  stationSection,
  statisticsSection,
} from '../styles/pages/station.styles';

function Station() {
  const { data, monthFilter, setMonthFilter, error, isLoading } = useStation();

  if (isLoading) {
    return (
      <PageLayout>
        <Loading />
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout>
        <StationError error={error} />
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <TopBar title="Station">
        <StationTopBar
          monthFilter={monthFilter}
          setMonthFilter={setMonthFilter}
        />
      </TopBar>

      <section className={stationSection}>
        <StationCard
          nimi={data.nimi}
          osoite={data.osoite}
          kaupunki={data.kaupunki}
          kapasiteet={data.kapasiteet}
          operaattor={data.operaattor}
          x={data.x}
          y={data.y}
        />
        <section className={statisticsSection}>
          <StationStatistics
            title="Departures"
            journeysCount={data.numDepartureJourneys}
            avgDistance={data.avgDepartureDistance}
            topTitle="destinations"
            topStations={data.topDestinationStations}
          />
          <StationStatistics
            title="Arrivals"
            journeysCount={data.numArrivalJourneys}
            avgDistance={data.avgArrivalDistance}
            topTitle="origins"
            topStations={data.topOriginStations}
          />
        </section>
      </section>
    </PageLayout>
  );
}

export default Station;
