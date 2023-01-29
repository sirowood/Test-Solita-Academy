import React from 'react';
import CardProps from '../../types/components/station/StationCard.type';

// prettier-ignore
function StationCard({
  nimi,
  osoite,
  kaupunki,
  kapasiteet,
  operaattor,
}: CardProps) {
  return (
    <div className="flex flex-col items-center gap-1 p-6 rounded-md shadow-2xl h-fit bg-solita-500">
      <h1 className="text-3xl font-bold">{nimi}</h1>
      <h2 className="text-lg font-semibold">{osoite}</h2>
      <div className="flex flex-row items-center justify-center w-10 h-10 font-mono border-2 select-none rounded-3xl">
        {kapasiteet}
      </div>
      <div className="text-gray-300">{operaattor}</div>
      <div className="text-gray-300">{kaupunki}</div>
    </div>
  );
}

export default StationCard;
