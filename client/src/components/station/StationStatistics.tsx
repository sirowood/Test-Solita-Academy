import React from 'react';
import { useNavigate } from 'react-router-dom';
import StationStatisticsProps from '../../types/components/station/stationStatistics.type';

function formatNumber(number: number): string {
  if (number > 1000000000) {
    return `${(number / 1000000000).toFixed(1).replace('.', ',')} b`;
  }

  if (number > 1000000) {
    return `${(number / 1000000).toFixed(1).replace('.', ',')} m`;
  }

  if (number > 1000) {
    return `${(number / 1000).toFixed(1).replace('.', ',')} k`;
  }

  return number.toFixed(1);
}

function StationStatistics({
  title,
  journeysCount,
  avgDistance,
  topTitle,
  topStations,
}: StationStatisticsProps) {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col p-6 rounded-md shadow-2xl select-none items-center1 h-fit bg-solita-500/50">
      <h2 className="text-lg font-bold text-center">{title}</h2>

      <div className="flex flex-col items-center mt-2">
        <h3 className="font-semibold">Journeys count</h3>
        <span className="font-mono text-3xl font-semibold border-b-2">
          {formatNumber(journeysCount)}
        </span>
      </div>

      <div className="flex flex-col items-center mt-2">
        <h3 className="font-semibold">Avg distance(m)</h3>
        <span className="font-mono text-3xl font-semibold border-b-2">
          {formatNumber(avgDistance)}
        </span>
      </div>

      <hr className="mt-4 border-solita-400" />

      <div className="flex flex-col mt-4">
        <h3 className="font-semibold text-center">Top {topTitle}</h3>
        <ol className="flex flex-col gap-1">
          {topStations.map((station, index) => (
            <a
              key={station.id}
              href={`/stations/${station.id}`}
              className="py-2 duration-150 rounded hover:bg-solita-400 hover:shadow-lg"
              onClick={() => navigate(`/stations/${station.id}`)}
            >
              <li>
                {index + 1}. {station.nimi}
              </li>
            </a>
          ))}
        </ol>
      </div>
    </section>
  );
}
export default StationStatistics;
