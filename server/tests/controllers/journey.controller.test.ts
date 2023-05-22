import { connectToDatabase, sequelize, rollbackMigrations } from '../../src/database';
import * as journeyController from '../../src/controllers/journey.controller';
import { Station } from '../../src/database/models';
import { journeys, stations } from '../data';

beforeAll(async () => {
  await connectToDatabase();
  await Station.bulkCreate(stations);
});

describe('Journey controllers', () => {
  const params = {
    size: 10,
    currentPage: 1,
    limit: 10,
    offset: 0,
    sortField: 'id',
    sortOrder: 'ASC',
    filters: {},
    searchString: ''
  };

  it('empty initially', async () => {
    const result = await journeyController.getAllJourneys(params);
    expect(result.totalItems).toBe(0);
  });

  it('add new Journey entries', async () => {
    for (const journey of journeys) {
      await journeyController.addJourney(journey);
    }

    const result = await journeyController.getAllJourneys(params);
    expect(result.totalItems).toBe(10);
  });

  it('reset works correctly', async () => {
    await journeyController.resetJourneys();

    const result = await journeyController.getAllJourneys(params);
    expect(result.totalItems).toBe(0);
  })
});

afterAll(async () => {
  await rollbackMigrations();
  await sequelize.close();
});