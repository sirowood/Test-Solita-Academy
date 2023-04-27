import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocationCity, MdLocationPin } from 'react-icons/md';
import {
  singleStationDiv,
  stationHeader,
  stationBody,
  bodyTextDiv,
  textSubDiv,
  capacityDiv,
} from '../../../styles/components/list/stations/StationItems.styles';
import { Station } from '../../../types/services/station.type';

function StationItems({ items }: { items: Station[] }) {
  return (
    <>
      {items.map((item) => (
        <Link
          key={item.id}
          className={singleStationDiv}
          to={`/stations/${item.id}`}
        >
          <h2 className={stationHeader}>{item.nimi}</h2>

          <div className={stationBody}>
            <div className={bodyTextDiv}>
              <div className={textSubDiv}>
                <MdLocationCity className="h-6 w-6" />
                <span>{item.kaupunki}</span>
              </div>
              <div className={textSubDiv}>
                <MdLocationPin className="h-6 w-6" />
                <span>{item.osoite}</span>
              </div>
            </div>
            <div
              title={`Station capacity ${item.kapasiteet}`}
              className={capacityDiv}
            >
              {item.kapasiteet}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default StationItems;
