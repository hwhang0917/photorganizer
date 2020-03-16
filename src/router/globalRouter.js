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
  getUpdateProfile,
  postUpdateProfile,
  getResetPassword,
  postResetPassword
} from "../controller/globalController";

// This is an express router
const globalRouter = express.Router();

// Static Pages
globalRouter.get(routes.landingPage, getLandingPage);

// Login
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.logout, getLogout);

// Reset Password
globalRouter.get(routes.resetPassword, getResetPassword);
globalRouter.post(routes.resetPassword, postResetPassword);

// Join
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

// Settings
globalRouter.get(routes.settings, getSettings);
globalRouter.get(routes.updateProfile, getUpdateProfile);
globalRouter.post(routes.updateProfile, postUpdateProfile);

export default globalRouter;
