import dotenv from "dotenv";
dotenv.config();
import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import User from "./models/User";
import routes from "./routes";
import { googleLoginCallback } from "./controller/globalController";

passport.use(User.createStrategy());
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: `http://localhost:3000${routes.googleCallback}`,
    },
    googleLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
