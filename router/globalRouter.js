import express from "express";
import routes from "./routes";
import { getHome } from "../controller/globalController";

// This is an express router
const globalRouter = express.Router();

globalRouter.get(routes.home, getHome);

export default globalRouter;
