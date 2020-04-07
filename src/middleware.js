import routes from "./routes";
import multer from "multer";

// Multer
const multerImage = multer({ dest: "upload" });
export const uploadImage = multerImage.single("imageFile");

// This middleware sends local data to view
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Phtorganizer";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
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
