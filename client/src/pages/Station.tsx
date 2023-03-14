import React from 'react';
import PageLayout from '../components/PageLayout';
import useStation from '../hooks/useStation';
import Loading from '../components/Loading';
import StationError from '../components/station/StationError';
import StationCard from '../components/station/StationCard';
import StationStatistics from '../components/station/StationStatistics';
import { station, statisticsContainer } from '../styles/pages/station.styles';

function Station() {
  const { data, error, isLoading } = useStation();

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
    <PageLayout classProps={station}>
      <StationCard
        nimi={data.nimi}
        osoite={data.osoite}
        kaupunki={data.kaupunki}
        kapasiteet={data.kapasiteet}
        operaattor={data.operaattor}
        x={data.x}
        y={data.y}
      />
      <section className={statisticsContainer}>
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
    </PageLayout>
  );
}

export default Station;
