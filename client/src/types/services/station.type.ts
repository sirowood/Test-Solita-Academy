type Station = {
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
  [key: string]: string | number,
};

type StationsResponse = {
  totalItems: number,
  totalPages: number,
  currentPage: number,
  items: Station[],
};

type SingleStationResponse = {
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
  avgDepartureDistance: number,
  avgArrivalDistance: number,
  numDepartureJourneys: number,
  numArrivalJourneys: number,
  topOriginStations: { id: number, nimi: string }[],
  topDestinationStations: { id: number, nimi: string }[],
};

export {
  Station,
  StationsResponse,
  SingleStationResponse,
};
