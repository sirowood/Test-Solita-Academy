import React from 'react';
import StationStatisticsProps from '../../types/components/station/stationStatistics.type';
import {
  horizontalLine,
  singleStatistics,
  statisticsHeading,
  statisticsNumber,
  statisticsSubDiv,
  tops,
  topsHeading,
  topsItem,
  topsList,
} from '../../styles/components/station/stationStatistics.styles';

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
  return (
    <section className={singleStatistics}>
      <h2 className={statisticsHeading}>{title}</h2>

      <div className={statisticsSubDiv}>
        <h3>Journeys count</h3>
        <span className={statisticsNumber}>{formatNumber(journeysCount)}</span>
      </div>

      <div className={statisticsSubDiv}>
        <h3>Avg distance(m)</h3>
        <span className={statisticsNumber}>{formatNumber(avgDistance)}</span>
      </div>

      <span className={horizontalLine} />

      <section className={tops}>
        <h3 className={topsHeading}>Top {topTitle}</h3>
        <ol className={topsList}>
          {topStations.map((station) => (
            <a
              key={station.id}
              href={`/stations/${station.id}`}
              className={topsItem}
            >
              <li>{station.nimi}</li>
            </a>
          ))}
        </ol>
      </section>
    </section>
  );
}
export default StationStatistics;
