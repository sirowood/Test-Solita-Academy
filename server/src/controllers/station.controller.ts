import { fn, col, where as sequelizeWhere, literal, Op, Order, QueryTypes } from 'sequelize';
import { sequelize } from '../database';
import { Journey, Station } from '../database/models';
import { transformStation } from "./helper.controller";
import { NewStation, GetAllStationsParams, TopStations, GetSingleStationData } from '../types/station.type';
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

async function getSingleStation(id: number, month: string | undefined): Promise<GetSingleStationData | null> {
  const station = await Station.findOne({
    where: { id },
  });

  if (!station) {
    return null;
  }

  function monthFilters(colName: string) {
    if (!month) {
      return {};
    }

    return sequelizeWhere(fn('TO_CHAR', col(colName), 'YYYY-MM'), {
      [Op.eq]: `${month}`,
    });
  }

  function getJourneys(
    avgDistanceName: string,
    numJourneysName: string,
    stationIdColumn: string,
    monthFilterColName: string
  ) {
    return Journey.findOne({
      attributes: [
        [fn('COALESCE', fn('AVG', col('covered_distance')), 0), avgDistanceName],
        [literal('COUNT(*)::int'), numJourneysName],
      ],
      where: {
        [Op.and]: [
          { [stationIdColumn]: id },
          monthFilters(monthFilterColName),
        ],
      },
    });
  }

  function getStations(joinStationColName: string, whereStationColName: string, timeColName: string): Promise<TopStations> {
    const monthClause = month
      ? `AND TO_CHAR(${timeColName}, 'YYYY-MM')=$month`
      : '';

    return sequelize.query(
      `
      SELECT stations.id, stations.nimi
      FROM stations
      JOIN journeys ON stations.id = journeys.${joinStationColName}
      WHERE journeys.${whereStationColName}=$id
      ${monthClause}
      GROUP BY stations.id
      ORDER BY COUNT(journeys.${joinStationColName}) DESC
      LIMIT 5;
      `,
      {
        bind: { id, month },
        type: QueryTypes.SELECT,
      }
    );
  }

  const [departureJourneys, arrivalJourneys, topOriginStations, topDestinationStations] = await Promise.all([
    getJourneys('avgDepartureDistance', 'numDepartureJourneys', 'departure_station_id', 'departure_time'),
    getJourneys('avgArrivalDistance', 'numArrivalJourneys', 'arrival_station_id', 'arrival_time'),
    getStations('departure_station_id', 'arrival_station_id', 'departure_time'),
    getStations('arrival_station_id', 'departure_station_id', 'arrival_time'),
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

async function resetStations() {
  await Station.destroy({ where: {}, truncate: true, cascade: true, restartIdentity: true });
}

export {
  addStation,
  getAllStations,
  getSingleStation,
  getStationsBySearch,
  resetStations,
};