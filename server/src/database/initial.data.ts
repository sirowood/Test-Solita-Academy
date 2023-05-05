const stationData = {
  url: 'https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv',
  columns: [
    'fid',
    'id',
    'nimi',
    'namn',
    'name',
    'osoite',
    'adress',
    'kaupunki',
    'stad',
    'operaattor',
    'kapasiteet',
    'x',
    'y',
  ],
};

const journeyData = {
  urls: [
    'https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv',
    'https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv',
    'https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv'
  ],
  columns: [
    'departureTime',
    'arrivalTime',
    'departureStationId',
    'departureStationName',
    'arrivalStationId',
    'arrivalStationName',
    'coveredDistance',
    'duration',
  ],
};

export {
  stationData,
  journeyData,
};