import React from 'react';
import CardProps from '../../types/components/station/stationCard.type';
import {
  stationAddress,
  stationCapacity,
  stationCard,
  stationName,
} from '../../styles/components/station/stationCard.styles';

function StationCard({
  nimi,
  osoite,
  kaupunki,
  kapasiteet,
  operaattor,
}: CardProps) {
  return (
    <section className={stationCard}>
      <h1 className={stationName}>{nimi}</h1>
      <h2 className={stationAddress}>{osoite}</h2>
      <p className={stationCapacity}>{kapasiteet}</p>
      <p>{operaattor}</p>
      <p>{kaupunki}</p>
    </section>
  );
}

export default StationCard;
