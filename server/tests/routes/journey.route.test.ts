
import request from 'supertest';
import { connectToDatabase, sequelize, rollbackMigrations } from '../../src/database';
import { Station, Journey } from '../../src/database/models';
import { stations, journeys } from '../data';
import app from '../../src/app';

const api = request(app);

beforeAll(async () => {
  await connectToDatabase();
  await Station.bulkCreate(stations);
});

describe('GET /api/journeys', () => {
  it('Initially status', async () => {
    const response = await api.get('/api/journeys');
    const { totalItems } = response.body;

    expect(response.status).toBe(200);
    expect(totalItems).toBe(0);
  });

  it('After insert 10 journeys in database', async () => {
    await Journey.bulkCreate(journeys);
    const response = await api.get('/api/journeys');
    const { totalItems } = response.body;

    expect(totalItems).toBe(10);
  });

  it('Search of journeys exists in database', async () => {
    const response = await api.get('/api/journeys?search=Sepänkatu');
    const { totalItems } = response.body;

    expect(totalItems).toBe(10);
  });

  it('Search of journeys not exists in database', async () => {
    const response = await api.get('/api/journeys?search=justnotexist');
    const { totalItems } = response.body;

    expect(totalItems).toBe(0);
  });

  it('Filter of journeys with valid number', async () => {
    const response = await api.get('/api/journeys?departureStationId=1');
    const { totalItems } = response.body;

    expect(totalItems).toBe(5);
  });

  it('Filter of journeys with invalid number', async () => {
    const response = await api.get('/api/journeys?departureStationId=-112');
    const { totalItems } = response.body;

    expect(totalItems).toBe(10);
  });

  it('Filter of journeys with string', async () => {
    const response = await api.get('/api/journeys?departureStationId=justForFun');
    const { totalItems } = response.body;

    expect(totalItems).toBe(10);
  });
})

describe('POST /api/journeys', () => {
  const validJourneyEntry = {
    departureTime: '2023-01-01 07:01:23',
    arrivalTime: '2023-01-01 07:10:23',
    departureStationId: '1',
    arrivalStationId: '2',
    coveredDistance: '1000',
    duration: '300',
  };

  it('Add a valid journey', async () => {
    const response = await api.post('/api/journeys').send(validJourneyEntry);

    expect(response.status).toBe(201);
    expect(response.body.coveredDistance).toBe(1000);
  });

  it('Add journey with invalid departure time', async () => {
    const invalidJourneyEntry = {
      ...validJourneyEntry,
      departureTime: '2023-01-01 07:01:99'
    };

    const response = await api.post('/api/journeys').send(invalidJourneyEntry);

    expect(response.status).toBe(400);
    expect(response.body.error).toBe(`Unable to convert departure time: '${invalidJourneyEntry.departureTime}' to Date`);
  });

  it('Add journey with arrival time is earlier than departure time', async () => {
    const invalidJourneyEntry = {
      ...validJourneyEntry,
      departureTime: '2023-01-01 07:11:23'
    };

    const response = await api.post('/api/journeys').send(invalidJourneyEntry);

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('arrival time is before departure time');
  });

  it('Add journey with invalid station id', async () => {
    const invalidJourneyEntry = {
      ...validJourneyEntry,
      departureStationId: '100000'
    };

    const response = await api.post('/api/journeys').send(invalidJourneyEntry);

    expect(response.status).toBe(500);
    expect(response.body.error).toBe('Station Id not exists in the database');
  });

  it('Add journey with covered distance < 10', async () => {
    const invalidJourneyEntry = {
      ...validJourneyEntry,
      coveredDistance: '5',
    };

    const response = await api.post('/api/journeys').send(invalidJourneyEntry);

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('covered distance is < 10');
  });
});

afterAll(async () => {
  await rollbackMigrations();
  await sequelize.close();
});