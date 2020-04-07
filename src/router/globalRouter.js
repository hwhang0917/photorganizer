import express from "express";
import routes from "../routes";
import {
  getLandingPage,
  getLogin,
  postLogin,
  getLogout,
  getJoin,
  postJoin,
  getSettings,
  getEditProfile,
  postEditProfile,
  getChangePassword,
  postChangePassword,
} from "../controller/globalController";
import { onlyPublic, onlyPrivate } from "../middleware";

// This is an express router
const globalRouter = express.Router();

// Static Pages
globalRouter.get(routes.landingPage, getLandingPage);

// Login
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);
globalRouter.get(routes.logout, getLogout);

// Reset Password
globalRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
globalRouter.post(routes.changePassword, onlyPrivate, postChangePassword);

// Join
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

// Settings
globalRouter.get(routes.settings, onlyPrivate, getSettings);
globalRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
globalRouter.post(routes.editProfile, onlyPrivate, postEditProfile);

export default globalRouter;
