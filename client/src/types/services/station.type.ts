type StationBase = {
  id: number,
  nimi: string,
  namn: string,
  name: string,
  osoite: string,
  adress: string,
  kaupunki: string,
  stad: string,
  operaattor: string,
  kapasiteet: number,
  x: number,
  y: number,
};

type Station = StationBase & {
  [key: string]: string | number,
};

type StationsResponse = {
  totalItems: number,
  totalPages: number,
  currentPage: number,
  items: Station[],
};

type SingleStationResponse = StationBase & {
  avgDepartureDistance: number,
  avgArrivalDistance: number,
  numDepartureJourneys: number,
  numArrivalJourneys: number,
  topOriginStations: { id: number, nimi: string }[],
  topDestinationStations: { id: number, nimi: string }[],
};

type SearchFunctionProps = { nimi: string };

type SearchFunctionResponse = {
  id: number,
  nimi: string,
}[] | [];

export {
  Station,
  StationsResponse,
  SingleStationResponse,
  SearchFunctionProps,
  SearchFunctionResponse,
};
