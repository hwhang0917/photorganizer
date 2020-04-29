import express from "express";
import helmet from "helmet";
import logger from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import cookieSession from "cookie-session";
import mongoose from "mongoose";
import session from "express-session";
import flash from "express-flash";
import MongoStore from "connect-mongo";
import { join } from "path";
import routes from "./routes";
import globalRouter from "./router/globalRouter";
import dashboardRouter from "./router/dashboardRouter";
import imageRouter from "./router/imageRouter";
import { localsMiddleware } from "./middleware";
import "./passport";

const app = express();

const CookieStore = MongoStore(session);

// Set View Engine
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

// Middlewares
app.use(helmet());
app.use(logger("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cookieSession({
    name: "google session",
    keys: ["key1", "key2"],
  })
);
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

// Use Static directory
app.use("/static", express.static(join(__dirname, "static")));
app.use("/images", express.static("images"));

// Routers
app.use(routes.root, globalRouter);
app.use(routes.dashboard, dashboardRouter);
app.use(routes.image, imageRouter);

export default app;
