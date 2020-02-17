import express from "express";
import helmet from "helmet";
import logger from "morgan";
import routes from "./router/routes";
import globalRouter from "./router/globalRouter";

const app = express();

// Middlewares
app.use(helmet());
app.use(logger("dev"));
app.use("/static", express.static("static"));

// Routers
app.use(routes.home, globalRouter);

export default app;
