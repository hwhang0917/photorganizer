import express from "express";
import helmet from "helmet";
import logger from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { join } from "path";
import routes from "./routes";
import globalRouter from "./router/globalRouter";
import dashboardRouter from "./router/dashboardRouter";
import imageRouter from "./router/imageRouter";
import { localsMiddleware } from "./middleware";

const app = express();

// Set View Engine
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

// Middlewares
app.use(helmet());
app.use(logger("dev"));
app.use(localsMiddleware);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use Static directory
app.use("/static", express.static(join(__dirname, "static")));

// Routers
app.use(routes.root, globalRouter);
app.use(routes.dashboard, dashboardRouter);
app.use(routes.image, imageRouter);

export default app;
