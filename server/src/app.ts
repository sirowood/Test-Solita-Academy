import cors from 'cors';
import express, { Application } from 'express';
import { loggerMiddleware, unknownEndPointMiddleware } from './utils/middleware';
import routes from './routes';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);
app.use('/', routes);
app.use(unknownEndPointMiddleware);

export default app;