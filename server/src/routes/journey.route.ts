import { Router, RequestHandler } from 'express';
import { getAllJourneysParams } from './helper.route';
import * as journeyController from '../controllers/journey.controller';
import { JourneyFields } from '../types/journey.type';
import toNewJourneyEntry from '../validations/journey.validation';

const journeyRoute = Router();

journeyRoute.get('/', (async (req, res) => {
  const params = getAllJourneysParams(req.query);

  const allJourneys = await journeyController.getAllJourneys(params);

  res.send(allJourneys);
}) as RequestHandler);

journeyRoute.post('/', (async (req, res, next) => {
  const body = req.body as JourneyFields;

  try {
    const newJourneyEntry = toNewJourneyEntry(body);
    const result = await journeyController.addJourney(newJourneyEntry);
    res.status(201).send(result);
  } catch (e) {
    next(e);
  }
}) as RequestHandler);

journeyRoute.post('/reset', (async (_req, res) => {
  await journeyController.resetJourneys();
  res.send();
}) as RequestHandler);

export default journeyRoute;