import { FilterProps } from "./routes.type";

type StationFields = {
  nimi: unknown,
  namn: unknown,
  name: unknown,
  osoite: unknown,
  adress: unknown,
  kaupunki?: unknown,
  stad?: unknown,
  operaattor?: unknown,
  kapasiteet: unknown,
  x: unknown,
  y: unknown,
};

type NewStation = {
  nimi: string,
  namn: string,
  name: string,
  osoite: string,
  adress: string,
  kaupunki?: string,
  stad?: string,
  operaattor?: string,
  kapasiteet: number,
  x: number,
  y: number,
};

type FullStation = NewStation & {
  id: number
};

type GetAllStationsParams = {
  size: number,
  currentPage: number,
  limit: number,
  offset: number,
  sortField: string,
  sortOrder: string,
  filters: FilterProps,
  searchString: string
};

type TopStations = {
  id: number,
  nimi: string,
  [key: string]: number | string,
}[];

type GetSingleStationData = FullStation & {
  avgDepartureDistance?: number,
  numDepartureJourneys?: number,
  avgArrivalDistance?: number,
  numArrivalJourneys?: number,
  topOriginStations: TopStations,
  topDestinationStations: TopStations,
};

export {
  StationFields,
  NewStation,
  FullStation,
  GetAllStationsParams,
  TopStations,
  GetSingleStationData,
};