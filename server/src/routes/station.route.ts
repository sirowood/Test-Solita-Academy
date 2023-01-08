import { Router, RequestHandler } from 'express';
import { getAllStationsParams } from './helper.route';
import * as stationService from '../controllers/station.controller';
import { StationFields } from '../types/station.type';
import toNewStationEntry from '../validations/station.validation';

const stationRoute = Router();

stationRoute.get('/', (async (req, res) => {
  const params = getAllStationsParams(req.query);

  const allStations = await stationService.getAllStations(params);

  res.send(allStations);
}) as RequestHandler);

stationRoute.get('/:id', (async (req, res, next) => {
  const { id } = req.params;
  const parsedId = Number(id);

  if (isNaN(parsedId)) {
    return next({
      name: 'Invalid data',
      message: 'Invalid id parameter. id must be a number',
    });
  }

  try {
    const result = await stationService.getSingleStation(+id);
    if (!result) {
      return next({
        name: 'Unreachable data',
        message: 'Could not find the station',
      });
    }
    res.send(result);
  } catch (e) {
    next (e);
  }
}) as RequestHandler);

stationRoute.post('/', (async (req, res, next) => {
  const body = req.body as StationFields;

  try {
    const newStationEntry = toNewStationEntry(body);
    const result = await stationService.addStation(newStationEntry);
    res.status(201).send(result);
  } catch (e) {
      next(e);
  }
}) as RequestHandler);

export default stationRoute;