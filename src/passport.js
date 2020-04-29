import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import User from "./models/User";
import dotenv from "dotenv";
import routes from "./routes";
import { googleLoginCallback } from "./controller/globalController";

dotenv.config();

passport.use(User.createStrategy());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `http://localhost:4000/auth/google/callback`,
    },
    googleLoginCallback
  )
);

// Serialize and Deserialize user login cookie
passport.serializeUser(
  User.serializeUser(function (user, done) {
    done(null, user);
  })
);
passport.deserializeUser(
  User.deserializeUser(function (user, done) {
    done(null, user);
  })
);
