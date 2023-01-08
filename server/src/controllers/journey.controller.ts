import sequelize, { FindAttributeOptions, Order } from "sequelize";
import { Station, Journey } from '../database/models';
import { transformJourney } from "./helper.controller";
import { NewJourney, GetAllJourneysParams } from '../types/journey.type';
import { error } from '../utils/logger';

const addJourney = async (newJourneyEntry: NewJourney) => {
  let journeyCreated;

  try {
    journeyCreated = await Journey.create(newJourneyEntry, { returning: true, isNewRecord: true });
  } catch (e: unknown) {
    if (e instanceof Error) {
      error(e.message);
      throw (e);
    }
  }

  return journeyCreated;
};

const getAllJourneys = async (
  { size, currentPage, limit, offset, sortField, sortOrder, filters, searchString }: GetAllJourneysParams
) => {
  const attributes: FindAttributeOptions = {
    include: [
      [sequelize.col('"departureStation"."nimi"'), 'departureStationName'],
      [sequelize.col('"arrivalStation"."nimi"'), 'arrivalStationName']
    ],
  };
  const include = [
    { model: Station, as: 'departureStation', attributes: [] as never },
    { model: Station, as: 'arrivalStation', attributes: [] as never},
  ];
  const where = {
    ...filters,
    [sequelize.Op.or]: [
      sequelize.where(sequelize.col('departureStation.nimi'), { [sequelize.Op.like]:`%${searchString}%` }),
      sequelize.where(sequelize.col('arrivalStation.nimi'), { [sequelize.Op.like]: `%${searchString}%` }),
    ],
  };
  const order: Order = [[sortField, sortOrder]];

  const allJourneys = await Journey.findAndCountAll({
    attributes,
    include,
    where,
    order,
    limit,
    offset,
  });

  const transformedJourneys = transformJourney(allJourneys, size, currentPage);

  return transformedJourneys;
};

export {
  addJourney,
  getAllJourneys,
};