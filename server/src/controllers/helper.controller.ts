import { Journey, Station } from '../database/models';

function formatDateTime(date: Date) {
  const dateOtions: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    second: '2-digit',
    minute: '2-digit',
    hour: '2-digit',
    hour12: false,
  };

  const localeDate = date.toLocaleDateString('fi-FI', dateOtions);
  const localeTime = date.toLocaleTimeString('fi-FI', timeOptions).replace(/\./g, ':');

  return [localeDate, localeTime].join(' ');
}

function getTotalPages(total: number, size: number) {
  const totalPages = Math.ceil(total / size);
  return totalPages;
}

function transformJourney(
  allJourneys: {
    count: number,
    rows: Journey[]
  },
  size: number,
  currentPage: number,
) {
  return {
    totalItems: allJourneys.count,
    totalPages: getTotalPages(allJourneys.count, size),
    currentPage,
    items: allJourneys.rows.map((journey) => ({
      ...journey,
      coveredDistance: (journey.coveredDistance / 1000).toFixed(3),
      duration: (journey.duration / 60).toFixed(2),
      departureTime: formatDateTime(journey.departureTime),
      arrivalTime: formatDateTime(journey.arrivalTime),
    })),
  };
}

function transformStation(
  allStations: {
    count: number,
    rows: Station[]
  },
  size: number,
  currentPage: number,
) {
  return {
    totalItems: allStations.count,
    totalPages: getTotalPages(allStations.count, size),
    currentPage,
    items: allStations.rows,
  };
}

export {
  transformJourney,
  transformStation,
};