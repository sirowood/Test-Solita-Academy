import cors from 'cors';
import express from 'express';
import { loggerMiddleware, unknownEndPointMiddleware } from './utils/middleware';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);
app.use('/', routes);
app.use(unknownEndPointMiddleware);

export default app;