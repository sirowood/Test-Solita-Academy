import React from 'react';
import { Link } from 'react-router-dom';
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
        <span className={statisticsNumber}>{journeysCount}</span>
      </div>

      <div className={statisticsSubDiv}>
        <h3>Avg distance(m)</h3>
        <span className={statisticsNumber}>{Math.round(avgDistance)}</span>
      </div>

      <span className={horizontalLine} />

      <section className={tops}>
        <h3 className={topsHeading}>Top {topTitle}</h3>
        <div className={topsList}>
          {topStations.map((station) => (
            <Link
              className={topsItem}
              key={station.id}
              to={`/stations/${station.id}`}
            >
              {station.nimi}
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}
export default StationStatistics;
