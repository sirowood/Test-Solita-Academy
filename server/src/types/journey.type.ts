import { FilterProps } from "./routes.type";

type JourneyFields = {
  departureTime: unknown,
  arrivalTime: unknown,
  departureStationId: unknown,
  arrivalStationId: unknown,
  coveredDistance: unknown,
  duration: unknown,
};

type NewJourney = {
  departureTime: string,
  arrivalTime: string,
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
  filters: FilterProps,
  searchString: string
};

export {
  JourneyFields,
  NewJourney,
  FullJourney,
  GetAllJourneysParams,
};