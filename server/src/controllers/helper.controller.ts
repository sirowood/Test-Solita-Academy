import { Journey, Station } from '../database/models';

const formatDateTime = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    second: '2-digit',
    minute: '2-digit',
    hour: '2-digit',
    hour12: false,
  };

  const localeDateTime = date.toLocaleString('fi-FI', options);

  const formatedDate = localeDateTime.split(' ')[0];
  const formatedTime = localeDateTime.split(' ')[1].replace(/\./g, ':');

  return [formatedDate, formatedTime].join(' ');
};

const getTotalPages = (total: number, size: number) => {
  const totalPages = Math.ceil(total / size);
  return totalPages;
};

const transformJourney = (allJourneys: { count: number, rows: Journey[]}, size: number, currentPage: number) => ({
  totalItems: allJourneys.count,
  totalPages: getTotalPages(allJourneys.count, size),
  currentPage,
  items: allJourneys.rows.map((journey) => ({
    ...journey,
    departureTime: formatDateTime(journey.departureTime),
    arrivalTime: formatDateTime(journey.arrivalTime),
  })),
});

const transformStation = (allStations: { count: number, rows: Station[]}, size: number, currentPage: number) => ({
  totalItems: allStations.count,
  totalPages: getTotalPages(allStations.count, size),
  currentPage,
  items: allStations.rows,
});

export {
  transformJourney,
  transformStation,
};