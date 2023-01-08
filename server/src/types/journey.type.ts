type JourneyFields = {
  departureTime: unknown,
  arrivalTime: unknown,
  departureStationId: unknown,
  arrivalStationId: unknown,
  coveredDistance: unknown,
  duration: unknown,
};

type NewJourney = {
  departureTime: Date,
  arrivalTime: Date,
  departureStationId: number,
  arrivalStationId: number,
  coveredDistance: number,
  duration: number,
};

type FullJourney = NewJourney & {
  id: number,
  departureStationName: string,
  arrivalStationName: string,
};

type GetAllJourneysParams = {
  size: number,
  currentPage: number,
  limit: number,
  offset: number,
  sortField: string,
  sortOrder: string,
  filters: { [key: string]: string },
  searchString: string
};

export {
  JourneyFields,
  NewJourney,
  FullJourney,
  GetAllJourneysParams,
};