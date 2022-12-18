import { Router, Request, Response } from 'express';

const healthRoute = Router();

healthRoute.get('/', (_req: Request, res: Response) => {
  res.send('ok');
});

export default healthRoute;