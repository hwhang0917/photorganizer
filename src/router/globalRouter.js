import express from "express";
import routes from "../routes";
import passport from "passport";
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
  postResetPassword,
  googleLogin,
  postGoogleLogin,
} from "../controller/globalController";
import { onlyPublic, onlyPrivate } from "../middleware";

// This is an express router
const globalRouter = express.Router();

// Static Pages
globalRouter.get(routes.landingPage, getLandingPage);

// Login
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.logout, getLogout);

// Google Login
globalRouter.get(routes.googleLogin, googleLogin);
globalRouter.get(
  routes.googleCallback,
  passport.authenticate("google", { failureRedirect: routes.landingPage }),
  postGoogleLogin
);

// Reset Password
globalRouter.get(routes.resetPassword, getResetPassword);
globalRouter.post(routes.resetPassword, postResetPassword);

// Join
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

// Settings
globalRouter.get(routes.settings, getSettings);
globalRouter.get(routes.updateProfile, getUpdateProfile);
globalRouter.post(routes.updateProfile, postUpdateProfile);

export default globalRouter;
