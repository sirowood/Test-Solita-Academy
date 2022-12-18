import { Request, Response, NextFunction } from 'express';
import { info } from 'console';

const loggerMiddleware = (req: Request, _res: Response, next: NextFunction): void => {
  if (process.env.NODE_ENV !== 'test') {
    info(`${req.method} ${req.url}`);
  }
  next();
};

const unknownEndPointMiddleware = (_req: Request, res: Response, _next: NextFunction): void => {
  res.status(404).send({ error: 'Unknown endpoint' });
};

export {
  loggerMiddleware,
  unknownEndPointMiddleware,
};