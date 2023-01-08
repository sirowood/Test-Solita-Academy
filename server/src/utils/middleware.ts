import { Request, Response, NextFunction } from 'express';
import { error as logError } from './logger';

const logger = (req: Request, _res: Response, next: NextFunction): void => {
  if (process.env.NODE_ENV !== 'test') {
    console.info(`${req.method} ${req.url}`);
  }
  next();
};

const unknownEndPoint = (_req: Request, res: Response, _next: NextFunction): void => {
  res.status(404).send({ error: 'Unknown endpoint' });
};

const errorHandler = (e: Error, _req: Request, res: Response, next: NextFunction) => {
  logError(e.message);
  switch (e.name) {
    case 'SequelizeForeignKeyConstraintError':
      return res.status(500).json({ error: 'Station Id not exists in the database'});
    case 'Missing data':
      return res.status(400).json({ error: e.message });
    case 'Invalid data':
      return res.status(400).json({ error: e.message });
    case 'Unreachable data':
      return res.status(404).json({ error: e.message });
    default:
      return next(e);
  }
};

export {
  logger,
  unknownEndPoint,
  errorHandler,
};