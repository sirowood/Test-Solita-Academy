import { connectToDatabase, sequelize, rollbackMigrations } from '../../src/database';
import * as stationController from '../../src/controllers/station.controller';
import { Journey } from '../../src/database/models';
import { journeys, stations } from '../data';

beforeAll(async () => {
  await connectToDatabase();
});

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

describe('Independent station controllers:', () => {
  it('empty initially', async () => {
    const result = await stationController.getAllStations(params);
    expect(result.totalItems).toBe(0);
  });

  it('add new station entries', async () => {
    for (const station of stations) {
      await stationController.addStation(station);
    }

    const result = await stationController.getAllStations(params);
    expect(result.totalItems).toBe(5);
  });

  it('get a non-exist station will return null', async () => {
    const result = await stationController.getSingleStation(6, '');
    expect(result).toBeNull();
  });

  it('get an exist station', async () => {
    const result = await stationController.getSingleStation(1, '');
    expect(result!.nimi).toBe('Kaivopuisto');
  });

  it('search an existing station by nimi', async () => {
    const result = await stationController.getStationsBySearch('kai');
    expect(result?.length).toBe(1);
    expect(result[0]?.id).toBeDefined();
    expect(result[0]?.nimi).toBe('Kaivopuisto');
  })

  it('search a non-existing station by nimi', async () => {
    const result = await stationController.getStationsBySearch('imnobody');
    expect(result?.length).toBe(0);
  })
});

describe('Dependent station controllers:', () => {
  beforeAll(async () => {
    await Journey.bulkCreate(journeys);
  })

  it('returns correct data without given month', async () => {
    const result = await stationController.getSingleStation(1, undefined);
    expect(result!.numDepartureJourneys).toBe(5);
    expect(result!.numArrivalJourneys).toBe(5);
    expect(result!.avgDepartureDistance).toBe(2177.6);
    expect(result!.avgArrivalDistance).toBe(1086.2);
    expect(result!.topOriginStations.length).toBe(1);
    expect(result!.topOriginStations[0]['nimi']).toBe('Sepänkatu');
    expect(result!.topDestinationStations.length).toBe(1);
    expect(result!.topDestinationStations[0]['nimi']).toBe('Sepänkatu');
  });

  it('returns correct data with a valid given month - 1', async () => {
    const result = await stationController.getSingleStation(1, '2021-05');
    expect(result!.numDepartureJourneys).toBe(5);
    expect(result!.numArrivalJourneys).toBe(5);
    expect(result!.avgDepartureDistance).toBe(2177.6);
    expect(result!.avgArrivalDistance).toBe(1086.2);
    expect(result!.topOriginStations.length).toBe(1);
    expect(result!.topOriginStations[0]['nimi']).toBe('Sepänkatu');
    expect(result!.topDestinationStations.length).toBe(1);
    expect(result!.topDestinationStations[0]['nimi']).toBe('Sepänkatu');
  });

  it('returns correct data with a valid given month - 2', async () => {
    const result = await stationController.getSingleStation(1, '2021-06');
    expect(result!.numArrivalJourneys).toBe(0);
    expect(result!.numDepartureJourneys).toBe(0);
    expect(result!.avgArrivalDistance).toBe(0);
    expect(result!.avgDepartureDistance).toBe(0);
    expect(result!.topOriginStations.length).toBe(0);
    expect(result!.topDestinationStations.length).toBe(0);
  });

  it('reset works correctly', async () => {
    await Journey.destroy({ where: {} });
    await stationController.resetStations();

    const result = await stationController.getAllStations(params);
    expect(result.totalItems).toBe(0);
  })
});

afterAll(async () => {
  await rollbackMigrations();
  await sequelize.close();
});