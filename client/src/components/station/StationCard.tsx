import React from 'react';
import StationMap from './StationMap';
import {
  stationAddress,
  stationCapacity,
  stationCard,
  stationName,
} from '../../styles/components/station/stationCard.styles';
import CardProps from '../../types/components/station/stationCard.type';

function StationCard({
  nimi,
  osoite,
  kaupunki,
  kapasiteet,
  operaattor,
  x,
  y,
}: CardProps) {
  return (
    <section className={stationCard}>
      <h1 className={stationName}>{nimi}</h1>
      <h2 className={stationAddress}>{osoite}</h2>
      <p className={stationCapacity}>{kapasiteet}</p>
      <p>{operaattor}</p>
      <p>{kaupunki}</p>
      <StationMap
        lat={y}
        lng={x}
      />
    </section>
  );
}

export default StationCard;
