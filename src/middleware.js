import routes from "./routes";

// This middleware sends local data to view
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Phtorganizer";
  res.locals.routes = routes;
  next();
};

// Middleware to prevent non-logged-in users from accessing certain page
export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.landingPage);
  } else {
    next();
  }
};

// Middleware to prevent logged-in users from accessing certain page
export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.dashboard);
  }
};
