type Journey = {
  id: number,
  departureTime: string,
  arrivalTime: string,
  coveredDistance: string,
  duration: string,
  departureStationId: number,
  arrivalStationId: number,
  departureStationName: string,
  arrivalStationName: string,
  [key: string]: string | number,
};

type JourneysResponse = {
  totalItems: number,
  totalPages: number,
  currentPage: number,
  items: Journey[],
};

export {
  Journey,
  JourneysResponse,
};
