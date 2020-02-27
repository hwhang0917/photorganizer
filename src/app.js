import express from "express";
import helmet from "helmet";
import logger from "morgan";
import { join } from "path";
import routes from "./routes";
import globalRouter from "./router/globalRouter";
import dashboardRouter from "./router/dashboardRouter";

const app = express();

// Set View Engine
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

// Middlewares
app.use(helmet());
app.use(logger("dev"));

// Use Static directory
app.use("/static", express.static("static"));

// Routers
app.use(routes.home, globalRouter);
app.use(routes.dashboard, dashboardRouter);

export default app;
