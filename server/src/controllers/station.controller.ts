import { fn, col, Op, Order, QueryTypes } from 'sequelize';
import { sequelize } from '../database';
import { Journey, Station } from '../database/models';
import { transformStation } from "./helper.controller";
import { NewStation, GetAllStationsParams } from '../types/station.type';
import { error } from '../utils/logger';

async function addStation(newStationEntry: NewStation) {
  let stationCreated;

  try {
    stationCreated = await Station.create(newStationEntry, {
      returning: true,
      isNewRecord: true
    });
  } catch (e: unknown) {
    if (e instanceof Error) {
      error(e.message);
      throw (e);
    }
  }

  return stationCreated;
}

async function getAllStations(
  { size, currentPage, limit, offset, sortField, sortOrder, filters, searchString }: GetAllStationsParams
) {
  const searchFields = [
    'nimi', 'namn', 'name', 'osoite',
    'adress', 'kaupunki', 'stad', 'operaattor'
  ];

  const where = {
    ...filters,
    [Op.or]: searchFields.map((field) => ({
      [field]: { [Op.like]: `%${searchString}%` }
    }))
  };

  const order: Order = [[sortField, sortOrder]];

  const allStations = await Station.findAndCountAll({
    where,
    order,
    limit,
    offset
  });

  const transformedStations = transformStation(allStations, size, currentPage);

  return transformedStations;
}

async function getSingleStation(id: number) {
  const station = await Station.findOne({
    attributes: {
      include: [
        [
          fn('AVG', fn('COALESCE', col('departureJourneys.covered_distance'), 0)),
          'avgDepartureDistance'
        ],
        [
          fn('AVG', fn('COALESCE', col('arrivalJourneys.covered_distance'), 0)),
          'avgArrivalDistance'
        ]
      ]
    },
    include: [
      { model: Journey, as: 'departureJourneys', attributes: [] },
      { model: Journey, as: 'arrivalJourneys', attributes: [] },
    ],
    group: ['stations.id'],
    where: { id },
  });

  if (!station) {
    return null;
  }

  const [numDepartureJourneys, numArrivalJourneys] = await Promise.all([
    Journey.count({
      where: { departureStationId: id },
    }),
    Journey.count({
      where: { arrivalStationId: id },
    }),
  ]);

  const topOriginStations = await sequelize.query(
    `
    SELECT stations.id, stations.nimi
    FROM stations
    JOIN journeys ON stations.id = journeys.departure_station_id
    WHERE journeys.arrival_station_id=$id
    GROUP BY stations.id
    ORDER BY COUNT(journeys.departure_station_id) DESC
    LIMIT 5;
    `, {
    bind: { id },
    type: QueryTypes.SELECT,
  }
  );

  const topDestinationStations = await sequelize.query(
    `
    SELECT stations.id, stations.nimi
    FROM stations
    JOIN journeys ON stations.id = journeys.arrival_station_id
    WHERE journeys.departure_station_id=$id
    GROUP BY stations.id
    ORDER BY COUNT(journeys.arrival_station_id) DESC
    LIMIT 5;
    `, {
    bind: { id },
    type: QueryTypes.SELECT,
  }
  );

  const result = {
    ...station,
    numDepartureJourneys,
    numArrivalJourneys,
    topOriginStations,
    topDestinationStations,
  };
  return result;
}

async function getStationsBySearch(nimi: string) {
  const where = {
    nimi: {
      [Op.iLike]: `%${nimi}%`,
    }
  };

  const stations = await Station.findAll({
    attributes: ['id', 'nimi'],
    where,
  });

  return stations;
}

export {
  addStation,
  getAllStations,
  getSingleStation,
  getStationsBySearch,
};