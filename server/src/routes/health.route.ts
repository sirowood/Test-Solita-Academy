import { Router } from 'express';

const healthRoute = Router();

healthRoute.get('/', (_req, res) => {
  res.send('ok');
});

export default healthRoute;