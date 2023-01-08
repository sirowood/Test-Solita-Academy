import { fn, col, Op, Order, QueryTypes } from 'sequelize';
import { sequelize } from '../database';
import { Journey, Station } from '../database/models';
import { transformStation } from "./helper.controller";
import { NewStation, GetAllStationsParams } from '../types/station.type';
import { error } from '../utils/logger';

const addStation = async (newStationEntry: NewStation) => {
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
};

const getAllStations = async (
  { size, currentPage, limit, offset, sortField, sortOrder, searchString }: GetAllStationsParams
) => {
  const searchFields = [
    'nimi', 'namn', 'name', 'osoite',
    'adress', 'kaupunki', 'stad', 'operaattor'
  ];

  const where = {
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
};

const getSingleStation = async (id: number) => {
  const station = await Station.findOne({
    attributes: {
      include: [
        [fn('AVG', col('departureJourneys.covered_distance')), 'avgDepartureDistance'],
        [fn('AVG', col('arrivalJourneys.covered_distance')), 'avgArrivalDistance'],
      ]
    },
    include: [
      { model: Journey, as: 'departureJourneys', attributes: []},
      { model: Journey, as: 'arrivalJourneys', attributes: []},
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
    SELECT stations.nimi
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
    SELECT stations.nimi
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
};

export {
  addStation,
  getAllStations,
  getSingleStation,
};