import { Router } from 'express';
import healthRoute from './health.route';
import journeyRoute from './journey.route';
import stationRoute from './station.route';

const routes = Router();

routes.use('/health', healthRoute);
routes.use('/stations', stationRoute);
routes.use('/journeys', journeyRoute);

export default routes;