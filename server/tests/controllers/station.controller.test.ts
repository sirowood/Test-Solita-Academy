import { connectToDatabase, sequelize, rollbackMigrations } from '../../src/database';
import * as stationController from '../../src/controllers/station.controller';
import { Journey } from '../../src/database/models';
import { journeys, stations } from '../data';

beforeAll(async () => {
  await connectToDatabase();
});

describe('Independent station controllers:', () => {
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

  it('Empty initially', async () => {
    const result = await stationController.getAllStations(params);

    expect(result.totalItems).toBe(0);
  });

  it('Add new station entries', async () => {
    for (const station of stations) {
      await stationController.addStation(station);
    }

    const result = await stationController.getAllStations(params);

    expect(result.totalItems).toBe(5);
  });

  it('Get a non-exist station will return null', async () => {
    const result = await stationController.getSingleStation(6);

    expect(result).toBeNull();
  });

  it('Get an exist station', async () => {
    const result = await stationController.getSingleStation(1);

    expect(result!.nimi).toBe('Kaivopuisto');
  });

  it('Search an existing station by nimi', async () => {
    const result = await stationController.getStationsBySearch('kai');

    expect(result?.length).toBe(1);
    expect(result[0]?.id).toBeDefined();
    expect(result[0]?.nimi).toBe('Kaivopuisto');
  })

  it('Search a non-existing station by nimi', async () => {
    const result = await stationController.getStationsBySearch('imnobody');

    expect(result?.length).toBe(0);
  })
});

describe('Dependent station controllers:', () => {
  beforeAll(async () => {
    await Journey.bulkCreate(journeys);
  })

  it('Correct numDepartureJourneys', async () => {
    const result = await stationController.getSingleStation(1);

    expect(result!.numDepartureJourneys).toBe(5);
  });

  it('Correct numArrivalJourneys', async () => {
    const result = await stationController.getSingleStation(1);

    expect(result!.numArrivalJourneys).toBe(5);
  });

  it('Correct avgDepartureDistance', async () => {
    const result = await stationController.getSingleStation(1);

    expect(result!.avgDepartureDistance).toBe(2177.6);
  });

  it('Correct avgArrivalDistance', async () => {
    const result = await stationController.getSingleStation(1);

    expect(result!.avgArrivalDistance).toBe(1086.2);
  });

  it('Correct topOriginStations', async () => {
    const result = await stationController.getSingleStation(1);
    const popularDepartureStations = result!.topOriginStations as { nimi: string }[];

    expect(popularDepartureStations.length).toBe(1);
    expect(popularDepartureStations[0]['nimi']).toBe('Sepänkatu');
  });

  it('Correct topDestinationStations', async () => {
    const result = await stationController.getSingleStation(1);
    const popularDepartureStations = result?.topDestinationStations as { 'nimi': string }[];

    expect(popularDepartureStations.length).toBe(1);
    expect(popularDepartureStations[0]['nimi']).toBe('Sepänkatu');
  });
});

afterAll(async () => {
  await rollbackMigrations();
  await sequelize.close();
});