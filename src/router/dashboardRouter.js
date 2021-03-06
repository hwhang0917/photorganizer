import express from "express";
import routes from "../routes";
import {
  getDashboard,
  getFilter,
  getImageUpload,
  postImageUpload
} from "../controller/dashboardController";
// import { uploadImage } from "../middleware";

// This is an express router
const dashboardRouter = express.Router();

dashboardRouter.get(routes.dashboardRoot, getDashboard);
dashboardRouter.get(routes.filter, getFilter);
dashboardRouter.get(routes.imageUpload, getImageUpload);
dashboardRouter.post(routes.imageUpload, postImageUpload);

export default dashboardRouter;
