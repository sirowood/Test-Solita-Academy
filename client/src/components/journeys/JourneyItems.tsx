import React from 'react';
import { BsArrowBarRight, BsClock } from 'react-icons/bs';
import { CgArrowsHAlt } from 'react-icons/cg';
import { Journey } from '../../types/services/journey.type';

type JourneyItemsProps = {
  items: Journey[];
};

function JourneyItems({ items }: JourneyItemsProps) {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-2 font-mono rounded-lg shadow-lg h-max bg-solita-500"
        >
          <div className="flex flex-row justify-between gap-1 p-2">
            <div className="flex w-[45%] flex-col items-center text-center">
              <div className="w-full font-sans text-lg font-semibold truncate">
                {item.departureStationName}
              </div>
              <div>{item.departureTime.toString().split(' ')[0]}</div>
              <div>{item.departureTime.toString().split(' ')[1]}</div>
            </div>
            <div className="flex w-[10%] max-w-max flex-col justify-center">
              <BsArrowBarRight className="w-8 h-8" />
            </div>
            <div className="flex w-[45%] flex-col items-center text-center">
              <div className="w-full font-sans text-lg font-semibold truncate">
                {item.arrivalStationName}
              </div>
              <div>{item.arrivalTime.toString().split(' ')[0]}</div>
              <div>{item.arrivalTime.toString().split(' ')[1]}</div>
            </div>
          </div>
          <div className="flex flex-row px-2 py-1 rounded-b-lg bg-gray-700/60">
            <div className="flex flex-row items-center w-1/2 gap-2 ">
              <span className="shrink-0">
                <CgArrowsHAlt />
              </span>
              <span className="truncate">{item.coveredDistance} km</span>
            </div>
            <div className="flex flex-row items-center w-1/2 gap-2">
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
