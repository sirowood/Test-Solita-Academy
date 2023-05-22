import { Router, RequestHandler } from 'express';
import { getSingleStationQueries, getAllStationsParams } from './helper.route';
import * as stationController from '../controllers/station.controller';
import { StationFields } from '../types/station.type';
import toNewStationEntry from '../validations/station.validation';

const stationRoute = Router();

stationRoute.get('/', (async (req, res) => {
  const params = getAllStationsParams(req.query);

  const allStations = await stationController.getAllStations(params);

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

  const month = getSingleStationQueries(req.query);

  try {
    const result = await stationController.getSingleStation(+id, month);
    if (!result) {
      return next({
        name: 'Unreachable data',
        message: 'Could not find the station',
      });
    }
    res.send(result);
  } catch (e) {
    next(e);
  }
}) as RequestHandler);

stationRoute.post('/', (async (req, res, next) => {
  const body = req.body as StationFields;

  try {
    const newStationEntry = toNewStationEntry(body);
    const result = await stationController.addStation(newStationEntry);
    res.status(201).send(result);
  } catch (e) {
    next(e);
  }
}) as RequestHandler);

stationRoute.get('/search/:nimi', (async (req, res, next) => {
  const { nimi } = req.params;

  if (!nimi) {
    next();
    return;
  }

  try {
    const result = await stationController.getStationsBySearch(nimi);
    res.send(result);
  } catch (e) {
    next(e);
  }
}) as RequestHandler);

stationRoute.post('/reset', (async (_req, res) => {
  await stationController.resetStations();
  res.send();
}) as RequestHandler);

export default stationRoute;