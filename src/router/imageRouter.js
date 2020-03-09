import express from "express";
import routes from "../routes";
import { getImageDetail, getImageEdit } from "../controller/imageController";

// This is an express router
const imageRouter = express.Router();

imageRouter.get(routes.imageDetail(), getImageDetail);
imageRouter.get(routes.imageEdit(), getImageEdit);

export default imageRouter;
