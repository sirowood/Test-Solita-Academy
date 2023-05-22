import request from 'supertest';
import { connectToDatabase, sequelize, rollbackMigrations } from '../../src/database';
import { Station, Journey } from '../../src/database/models';
import { stations, journeys } from '../data';
import app from '../../src/app';

const api = request(app);

beforeAll(async () => {
  await connectToDatabase();
});

describe('GET /api/stations', () => {
  it('initially status', async () => {
    const response = await api.get('/api/stations');
    const { totalItems } = response.body;

    expect(response.status).toBe(200);
    expect(totalItems).toBe(0);
  });

  it('after insert 5 stations in database', async () => {
    await Station.bulkCreate(stations);

    const response = await api.get('/api/stations');
    const { totalItems } = response.body;

    expect(response.status).toBe(200);
    expect(totalItems).toBe(5);
  });

  it('pagination when size is not a number ', async () => {
    const response = await api.get('/api/stations?size=a');
    const { totalItems, totalPages, items } = response.body;

    expect(totalItems).toBe(5);
    expect(totalPages).toBe(1);
    expect(items.length).toBe(5);
  });

  it('pagination when size is nagative ', async () => {
    const response = await api.get('/api/stations?size=-1');
    const { totalItems, totalPages, items } = response.body;

    expect(totalItems).toBe(5);
    expect(totalPages).toBe(1);
    expect(items.length).toBe(5);
  });

  it('pagination when page is not a number ', async () => {
    const response = await api.get('/api/stations?page=a');
    const { totalItems, totalPages, items } = response.body;

    expect(totalItems).toBe(5);
    expect(totalPages).toBe(1);
    expect(items.length).toBe(5);
  });

  it('pagination when page is nagative', async () => {
    const response = await api.get('/api/stations?page=-1');
    const { totalItems, totalPages, items } = response.body;

    expect(totalItems).toBe(5);
    expect(totalPages).toBe(1);
    expect(items.length).toBe(5);
  });

  it('pagination when page is larger than the total pages ', async () => {
    const response = await api.get('/api/stations?page=100000');
    const { totalItems, totalPages, currentPage, items } = response.body;

    expect(totalItems).toBe(5);
    expect(totalPages).toBe(1);
    expect(currentPage).toBe(100000);
    expect(items.length).toBe(0);
  });

  it('search of stations exists in database', async () => {
    const response = await api.get('/api/stations?search=Kai');
    const { totalItems, totalPages, currentPage, items } = response.body;

    expect(totalItems).toBe(1);
    expect(totalPages).toBe(1);
    expect(currentPage).toBe(1);
    expect(items.length).toBe(1);
  });

  it('search of stations not exists in database', async () => {
    const response = await api.get('/api/stations?search=asdfasdfasdf');
    const { totalItems, totalPages, currentPage, items } = response.body;

    expect(totalItems).toBe(0);
    expect(totalPages).toBe(0);
    expect(currentPage).toBe(1);
    expect(items.length).toBe(0);
  });

  it('order based on valid orderBy', async () => {
    const response = await api.get('/api/stations?orderBy=kapasiteet');
    const { items } = response.body;

    expect(items.length).toBe(5);
    expect(items[0].nimi).toBe('Laivasillankatu');
    expect(items[4].nimi).toBe('Sepänkatu');
  });

  it('order based on invalid orderBy', async () => {
    const response = await api.get('/api/stations?orderBy=indalidword');
    const { items } = response.body;

    expect(items.length).toBe(5);
    expect(items[0].nimi).toBe('Kaivopuisto');
    expect(items[4].nimi).toBe('Sepänkatu');
  });

  it('order in descending order of id', async () => {
    const response = await api.get('/api/stations?orderDirection=DESC');
    const { items } = response.body;

    expect(items.length).toBe(5);
    expect(items[0].nimi).toBe('Sepänkatu');
    expect(items[4].nimi).toBe('Kaivopuisto');
  });

  it('order with combination of orderBy and orderDirection', async () => {
    const response = await api.get('/api/stations?orderBy=kapasiteet&orderDirection=DESC');
    const { items } = response.body;

    expect(items.length).toBe(5);
    expect(items[0].nimi).toBe('Sepänkatu');
    expect(items[4].nimi).toBe('Laivasillankatu');
  });

  it('filter with kapasiteetFrom and kapasiteetTo', async () => {
    const capacityFrom = 12;
    const capacityTo = 14;

    const response = await api.get(`/api/stations?kapasiteetFrom=${capacityFrom}&kapasiteetTo=${capacityTo}`);
    const { totalItems } = response.body;

    const expectation = stations.filter((station) => station.kapasiteet >= 12 && station.kapasiteet <= 14);

    expect(totalItems).toBe(expectation.length);
  })
})

describe('GET /api/stations/:id', () => {
  beforeAll(async () => {
    await Journey.bulkCreate(journeys);
  });

  it('valid id', async () => {
    const response = await api.get('/api/stations/1');
    const {
      nimi, numDepartureJourneys, numArrivalJourneys,
      topOriginStations, topDestinationStations
    } = response.body;

    expect(nimi).toBe('Kaivopuisto');
    expect(numDepartureJourneys).toBe(5);
    expect(numArrivalJourneys).toBe(5);
    expect(topOriginStations.length).toBe(1);
    expect(topOriginStations[0].nimi).toBe('Sepänkatu');
    expect(topDestinationStations.length).toBe(1);
    expect(topDestinationStations[0].nimi).toBe('Sepänkatu');
  });

  it('valid id but not exist station', async () => {
    const response = await api.get('/api/stations/100000');

    expect(response.status).toBe(404);
    expect(response.body.error).toBe('Could not find the station');
  });

  it('invalid id', async () => {
    const response = await api.get('/api/stations/hiddenone');
    const { error } = response.body;

    expect(response.status).toBe(400);
    expect(error).toBe('Invalid id parameter. id must be a number');
  })
})

describe('POST /api/stations', () => {
  const validStationEntry = {
    nimi: 'test nimi',
    namn: 'test namn',
    name: 'test name',
    osoite: 'test osoite',
    adress: 'test osoite',
    kaupunki: 'test kaupunki',
    stad: 'test stad',
    operaattor: 'test operaattor',
    kapasiteet: '30',
    x: '20',
    y: '70',
  };

  it('add valid station', async () => {
    const response = await api.post('/api/stations').send(validStationEntry);

    expect(response.status).toBe(201);
    expect(response.body.nimi).toBe('test nimi');
  });

  it('add station with invalid x', async () => {
    const invalidStationEntry = {
      ...validStationEntry,
      x: '1000'
    };

    const response = await api.post('/api/stations').send(invalidStationEntry);

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('x: abs(1000) is > 90');
  });

  it('add station with invalid kapasiteet', async () => {
    const invalidStationEntry = {
      ...validStationEntry,
      kapasiteet: 'not a number'
    };

    const response = await api.post('/api/stations').send(invalidStationEntry);

    expect(response.status).toBe(400);
    expect(response.body.error).toBe(`kapasiteet: 'not a number' is not a valid number`);
  });
});

describe('GET /api/stations/search/:nimi', () => {
  it('without nimi', async () => {
    const response = await api.get('/api/stations/search/');
    const { error } = response.body;

    expect(response.status).toBe(400);
    expect(error).toBe('Invalid id parameter. id must be a number');
  });

  it('with valid nimi and existing station', async () => {
    const response = await api.get('/api/stations/search/kai');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0].nimi).toBe('Kaivopuisto');
  });

  it('with valid nimi but non-existing station', async () => {
    const response = await api.get('/api/stations/search/ihaveagoodidea');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(0);
  });
});

describe('POST /api/stations/reset', () => {
  it('works correctly', async () => {
    await Journey.destroy({ where: {} });
    const response = await api.post('/api/stations/reset');
    expect(response.status).toBe(200);

    const newResponse = await api.get('/api/stations');
    const { totalItems } = newResponse.body;

    expect(newResponse.status).toBe(200);
    expect(totalItems).toBe(0);
  })
});

afterAll(async () => {
  await rollbackMigrations();
  await sequelize.close();
});