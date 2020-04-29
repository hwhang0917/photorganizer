import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

// AWS s3
const s3 = new aws.S3({
  accessKey: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_KEY,
  region: "us-west-1",
});

// Multer
const multerImage = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "photorganizer/photo",
  }),
});

const multerLocal = multer({ dest: "images/" });

export const uploadImage = multerImage.single("imageFile");
export const localUpload = multerLocal.single("imageFile");

// This middleware sends local data to view
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Phtorganizer";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

// Middleware to prevent non-logged-in users from accessing certain page
export const onlyPublic = (req, res, next) => {
  console.log(req.user);
  if (req.user) {
    next();
  } else {
    res.redirect(routes.landingPage);
  }
};

// Middleware to prevent logged-in users from accessing certain page
export const onlyPrivate = (req, res, next) => {
  console.log(req.user);
  if (req.user) {
    res.redirect(routes.dashboard);
  } else {
    next();
  }
};
