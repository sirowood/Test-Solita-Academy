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
  searchString: string
};

export {
  StationFields,
  NewStation,
  FullStation,
  GetAllStationsParams,
};