import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocationCity, MdLocationPin } from 'react-icons/md';
import { Station } from '../../types/services/station.type';

type StationItemsProps = {
  items: Station[];
};

function StationItems({ items }: StationItemsProps) {
  return (
    <>
      {items.map((item) => (
        <Link
          key={item.id}
          className="flex h-max flex-col rounded-lg bg-solita-500 shadow-lg duration-150 sm:hover:scale-105 sm:hover:shadow-xl"
          to={`/stations/${item.id}`}
        >
          <h2 className="rounded-t-lg bg-gray-700/60 py-1 text-center text-xl font-semibold">
            {item.nimi}
          </h2>

          <div className="flex flex-row items-center gap-2 p-2">
            <div className="flex w-full flex-col">
              <div className="flex flex-row gap-1">
                <MdLocationCity className="h-6 w-6" />
                <span className="w-full">{item.kaupunki}</span>
              </div>
              <div className="flex flex-row gap-1">
                <MdLocationPin className="h-6 w-6" />
                <span className="w-full">{item.osoite}</span>
              </div>
            </div>
            <div
              title={`Station capacity ${item.kapasiteet}`}
              className="flex h-10 w-10 shrink-0 flex-row items-center justify-center rounded-3xl border-2 border-gray-400 font-mono"
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
