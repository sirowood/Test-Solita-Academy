import { fn, col, literal, Op, Order, QueryTypes } from 'sequelize';
import { sequelize } from '../database';
import { Journey, Station } from '../database/models';
import { transformStation } from "./helper.controller";
import { NewStation, GetAllStationsParams, GetSingleStationData } from '../types/station.type';
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

async function getSingleStation(id: number): Promise<GetSingleStationData | null> {
  const station = await Station.findOne({
    where: { id },
  });

  if (!station) {
    return null;
  }

  const [departureJourneys, arrivalJourneys, topOriginStations, topDestinationStations] = await Promise.all([
    Journey.findOne({
      attributes: [
        [fn('AVG', fn('COALESCE', col('covered_distance'), 0)), 'avgDepartureDistance'],
        [literal('COUNT(*)::int'), 'numDepartureJourneys'],
      ],
      where: { departure_station_id: id },
    }),
    Journey.findOne({
      attributes: [
        [fn('AVG', fn('COALESCE', col('covered_distance'), 0)), 'avgArrivalDistance'],
        [literal('COUNT(*)::int'), 'numArrivalJourneys'],
      ],
      where: { arrival_station_id: id },
    }),
    sequelize.query(
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
    ),
    sequelize.query(
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
    ),
  ]);

  const result = {
    ...station,
    ...departureJourneys,
    ...arrivalJourneys,
    topOriginStations,
    topDestinationStations,
  };
  return result;
}

async function getStationsBySearch(nimi: string) {
  const where = {
    nimi: {
      [Op.iLike]: `%${nimi}%`,
    },
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