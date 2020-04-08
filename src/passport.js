import dotenv from "dotenv";
dotenv.config();
import passport from "passport";
import request from "request";
import User from "./models/User";
import routes from "./routes";

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
