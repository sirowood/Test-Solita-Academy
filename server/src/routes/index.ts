import { Router } from "express";
import healthRoute from "./health.routes";

const routes = Router();

routes.use('/health', healthRoute);

export default routes;