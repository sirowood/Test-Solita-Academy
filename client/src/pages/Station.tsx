import React from 'react';
import PageLayout from '../components/PageLayout';
import useStation from '../hooks/useStation';
import Loading from '../components/Loading';
import StationError from '../components/station/StationError';
import StationCard from '../components/station/StationCard';
import StationStatistics from '../components/station/StationStatistics';

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
    <PageLayout className="flex-row flex-wrap gap-4 p-4">
      <StationCard
        nimi={data.nimi}
        osoite={data.osoite}
        kaupunki={data.kaupunki}
        kapasiteet={data.kapasiteet}
        operaattor={data.operaattor}
      />
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
    </PageLayout>
  );
}

export default Station;
