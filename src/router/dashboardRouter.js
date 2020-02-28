import express from "express";
import routes from "../routes";
import {
  getDashboard,
  getImageDetail,
  filter
} from "../controller/dashboardController";

// This is an express router
const dashboardRouter = express.Router();

dashboardRouter.get(routes.dashboardHome, getDashboard);
dashboardRouter.get(routes.imageDetail, getImageDetail);

// Search Routes
dashboardRouter.get(routes.dashboardFilter, filter);

export default dashboardRouter;
