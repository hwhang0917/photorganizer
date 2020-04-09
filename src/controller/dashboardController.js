import routes from "../routes";
import { getImagesByUser } from "../db";

export const getDashboard = async (req, res) => {
  //console.log(req.user);
  const images = await getImagesByUser(2);
  //console.log(images);
  res.render("dashboard", { pageTitle: "Dashboard", loggedUser: true, images });
};

export const getFilter = (req, res) => {
  const {
    query: { term },
  } = req;
  res.render("filter", {
    pageTitle: `Filtering by ${term}`,
    term,
    loggedUser: true,
  });
};

export const getImageUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload", loggedUser: true });
};

export const postImageUpload = (req, res) => {
  console.log(req.body);
  let metaName = "";
};
