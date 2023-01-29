import React from 'react';
import useStation from '../hooks/useStation';
import Loading from '../components/Loading';
import StationError from '../components/station/StationError';
import StationCard from '../components/station/StationCard';
import StationStatistics from '../components/station/StationStatistics';

function Station() {
  const { data, error, isLoading } = useStation();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <StationError error={error} />;
  }

  return (
    <section className="flex flex-row flex-wrap gap-4 p-4">
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
    </section>
  );
}

export default Station;
