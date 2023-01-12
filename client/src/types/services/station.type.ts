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

export {
  Station,
  StationsResponse,
};
