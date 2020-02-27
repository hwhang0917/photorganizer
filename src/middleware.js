import routes from "./routes";

// This middleware sends local data to view
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Phtorganizer";
  res.locals.routes = routes;
  next();
};
