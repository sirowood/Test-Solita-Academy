import { Router, RequestHandler } from 'express';
import { getAllJourneysParams } from './helper.route';
import * as jourenyController from '../controllers/journey.controller';
import { JourneyFields } from '../types/journey.type';
import toNewJourneyEntry from '../validations/journey.validation';

const journeyRoute = Router();

journeyRoute.get('/', (async (req, res) => {
  const params = getAllJourneysParams(req.query);

  const allJourneys = await jourenyController.getAllJourneys(params);

  res.send(allJourneys);
}) as RequestHandler);

journeyRoute.post('/', (async (req, res, next) => {
  const body = req.body as JourneyFields;

  try {
    const newJourneyEntry = toNewJourneyEntry(body);
    const result = await jourenyController.addJourney(newJourneyEntry);
    res.status(201).send(result);
  } catch (e) {
    next(e);
  }
}) as RequestHandler);

export default journeyRoute;