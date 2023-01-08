import cors from 'cors';
import express, { Application } from 'express';
import routes from './routes';
import * as middlewares from './utils/middleware';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(middlewares.logger);
app.use('/api', routes);
app.use(middlewares.unknownEndPoint);
app.use(middlewares.errorHandler);

export default app;