import routes from "../routes";
import Image from "../models/Image";
import { getImagesByUser } from "../db";

export const getDashboard = async (req, res) => {
  try {
    const images = await Image.find({ owner: req.user.id });
    res.render("dashboard", {
      pageTitle: "Dashboard",
      loggedIn: true,
      images,
    });
  } catch (error) {
    console.log(error);
    res.render("landingPage", { landingPage: true });
  }
};

export const getFilter = async (req, res) => {
  const {
    query: { term },
  } = req;
  let images = [];
  try {
    images = await Image.find({
      location: { $regex: term, $options: "i" },
    });
  } catch (error) {
    console.log(error);
  }
  res.render("dashboard", {
    pageTitle: "Dashboard",
    loggedIn: true,
    term,
    images,
  });
};

export const getImageUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload", loggedIn: true });
};

export const postImageUpload = async (req, res) => {
  const {
    body: { place },
    file: { path },
  } = req;
  const newImage = await Image.create({
    fileUrl: path,
    location: place,
    owner: req.user.id,
  });
  // eslint-disable-next-line no-underscore-dangle
  req.user.images.push(newImage._id);
  req.user.save();
  res.redirect(routes.dashboard);
};
