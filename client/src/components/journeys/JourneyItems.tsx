import React from 'react';
import { BsArrowBarRight, BsClock } from 'react-icons/bs';
import { CgArrowsHAlt } from 'react-icons/cg';
import {
  singleJourneyDiv,
  journeyBody,
  itemFooter,
  bodyStation,
  stationName,
  rightArrowIconDiv,
  footerSubDiv,
} from '../../styles/components/journeys/JourneyItems.styles';
import { Journey } from '../../types/services/journey.type';

function JourneyItems({ items }: { items: Journey[] }) {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className={singleJourneyDiv}
        >
          <div className={journeyBody}>
            <div className={bodyStation}>
              <div className={stationName}>{item.departureStationName}</div>
              <div>{item.departureTime.toString().split(' ')[0]}</div>
              <div>{item.departureTime.toString().split(' ')[1]}</div>
            </div>
            <div className={rightArrowIconDiv}>
              <BsArrowBarRight className="h-8 w-8" />
            </div>
            <div className={bodyStation}>
              <div className={stationName}>{item.arrivalStationName}</div>
              <div>{item.arrivalTime.toString().split(' ')[0]}</div>
              <div>{item.arrivalTime.toString().split(' ')[1]}</div>
            </div>
          </div>

          <div className={itemFooter}>
            <div className={footerSubDiv}>
              <span className="shrink-0">
                <CgArrowsHAlt />
              </span>
              <span className="truncate">{item.coveredDistance} km</span>
            </div>
            <div className={footerSubDiv}>
              <span className="shrink-0">
                <BsClock />
              </span>
              <span className="truncate">{item.duration}</span>
              <span className="shrink-0"> minutes</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default JourneyItems;
