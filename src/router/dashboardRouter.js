import express from "express";
import routes from "../routes";
import { getDashboard, getFilter } from "../controller/dashboardController";

// This is an express router
const dashboardRouter = express.Router();

dashboardRouter.get(routes.dashboardRoot, getDashboard);
dashboardRouter.get(routes.filter, getFilter);

export default dashboardRouter;
