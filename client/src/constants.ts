const USEPAGINATION_INITIAL_STATE = {
  pageSize: '10',
  currentPage: '1',
};

const USEDATA_INITIAL_STATE = {
  isLoading: false,
  visiblePages: [],
  response: {
    items: [],
    totalItems: 0,
    totalPages: 1,
    currentPage: 1,
  },
};

const PAGINATION_OPTIONS = [
  { label: '10', value: '10' },
  { label: '20', value: '20' },
  { label: '40', value: '40' },
];

const JOURNEYS_ORDERS = [
  {
    value: 'departureStationName',
    label: 'Departure Station',
  },
  {
    value: 'arrivalStationName',
    label: 'Arrival Station',
  },
  {
    value: 'departureTime',
    label: 'Departure Time',
  },
  {
    value: 'arrivalTime',
    label: 'Arrival Time',
  },
  {
    value: 'coveredDistance',
    label: 'Covered Distance',
  },
  {
    value: 'duration',
    label: 'Duration',
  },
];

const STATIONS_ORDERS = [
  {
    value: 'nimi',
    label: 'Name',
  },
  {
    value: 'osoite',
    label: 'Address',
  },
  {
    value: 'kapasiteet',
    label: 'Capacity',
  },
];

const STATIONS_FILTERS = [
  {
    displayName: 'Capacity',
    filterName: 'kapasiteet',
    type: 'number',
    filterProperties: {
      from: '',
      to: '',
    },
  },
];

const JOURNEYS_FILTERS = [
  {
    displayName: 'Departure Time',
    filterName: 'departureTime',
    type: 'date',
    filterProperties: {
      from: '',
      to: '',
    },
  },
  {
    displayName: 'Arrival Time',
    filterName: 'arrivalTime',
    type: 'date',
    filterProperties: {
      from: '',
      to: '',
    },
  },
  {
    displayName: 'Distance (m)',
    filterName: 'coveredDistance',
    type: 'number',
    filterProperties: {
      from: '',
      to: '',
    },
  },
  {
    displayName: 'Duration (s)',
    filterName: 'duration',
    type: 'number',
    filterProperties: {
      from: '',
      to: '',
    },
  },
];

const STATION_INITIAL_STATE = {
  id: 0,
  nimi: '',
  namn: '',
  name: '',
  osoite: '',
  adress: '',
  kaupunki: '',
  stad: '',
  operaattor: '',
  kapasiteet: 0,
  x: 0,
  y: 0,
  avgDepartureDistance: 0,
  avgArrivalDistance: 0,
  numDepartureJourneys: 0,
  numArrivalJourneys: 0,
  topOriginStations: [{ id: 0, nimi: '' }],
  topDestinationStations: [{ id: 0, nimi: '' }],
};

const CARD_DETAILS_INITIAL_STATE = [{ name: '', value: '' }];

const ADD_STATION_FIELDS = [
  {
    required: true,
    fieldName: 'nimi',
    displayName: 'Nimi',
    type: 'text',
    initialValue: '',
  },
  {
    required: true,
    fieldName: 'namn',
    displayName: 'Namn',
    type: 'text',
    initialValue: '',
  },
  {
    required: true,
    fieldName: 'name',
    displayName: 'Name',
    type: 'text',
    initialValue: '',
  },
  {
    required: true,
    fieldName: 'osoite',
    displayName: 'Osoite',
    type: 'text',
    initialValue: '',
  },
  {
    required: true,
    fieldName: 'adress',
    displayName: 'Adress',
    type: 'text',
    initialValue: '',
  },
  {
    required: true,
    fieldName: 'kapasiteet',
    displayName: 'Kapasiteet',
    type: 'number',
    initialValue: '',
    min: 1,
  },
  {
    required: true,
    fieldName: 'x',
    displayName: 'X',
    type: 'number',
    initialValue: '',
    min: -180,
    max: 180,
  },
  {
    required: true,
    fieldName: 'y',
    displayName: 'Y',
    type: 'number',
    initialValue: '',
    min: -90,
    max: 90,
  },
  {
    required: false,
    fieldName: 'kaupunki',
    displayName: 'Kaupunki',
    type: 'text',
    initialValue: '',
  },
  {
    required: false,
    fieldName: 'stad',
    displayName: 'Stad',
    type: 'text',
    initialValue: '',
  },
  {
    required: false,
    fieldName: 'operaattor',
    displayName: 'Operaattor',
    type: 'text',
    initialValue: '',
  },
];

const ADD_JOURNEY_FIELDS = [
  {
    required: true,
    fieldName: 'departureTime',
    displayName: 'Departure Time',
    type: 'string',
    initialValue: '',
  },
  {
    required: true,
    fieldName: 'arrivalTime',
    displayName: 'Arrival Time',
    type: 'string',
    initialValue: '',
  },
  {
    required: true,
    select: true,
    fieldName: 'departureStationId',
    displayName: 'Departure station',
    type: 'string',
    initialValue: '',
  },
  {
    required: true,
    select: true,
    fieldName: 'arrivalStationId',
    displayName: 'Arrival Station',
    type: 'string',
    initialValue: '',
  },
  {
    required: true,
    fieldName: 'coveredDistance',
    displayName: 'Covered Distance(m)',
    type: 'number',
    initialValue: '',
  },
  {
    required: true,
    fieldName: 'duration',
    displayName: 'Duration(s)',
    type: 'number',
    initialValue: '',
  },
];

export {
  USEPAGINATION_INITIAL_STATE,
  USEDATA_INITIAL_STATE,
  PAGINATION_OPTIONS,
  JOURNEYS_ORDERS,
  STATIONS_ORDERS,
  STATIONS_FILTERS,
  JOURNEYS_FILTERS,
  STATION_INITIAL_STATE,
  CARD_DETAILS_INITIAL_STATE,
  ADD_STATION_FIELDS,
  ADD_JOURNEY_FIELDS,
};
