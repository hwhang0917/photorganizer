import express from "express";
import routes from "../routes";
import {
  getHome,
  getJoin,
  getLogin,
  getResetPassword,
  getSettings
} from "../controller/globalController";

// This is an express router
const globalRouter = express.Router();

globalRouter.get(routes.home, getHome);
globalRouter.get(routes.join, getJoin);
globalRouter.get(routes.login, getLogin);
globalRouter.get(routes.resetPassword, getResetPassword);
globalRouter.get(routes.settings, getSettings);

export default globalRouter;
