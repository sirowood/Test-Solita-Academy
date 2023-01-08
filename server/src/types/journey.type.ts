import { Journey } from "src/database/models";

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

type TransformJourneyParams = {
  allJourneys: {
    count: number,
    rows: Journey[]
  },
  size: number,
  currentPage: number
};

export {
  JourneyFields,
  NewJourney,
  FullJourney,
  GetAllJourneysParams,
  TransformJourneyParams,
};