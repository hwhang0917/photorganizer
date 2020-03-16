import { getImagesByUser } from "../db";

export const getDashboard = async (req, res) => {
  const images = await getImagesByUser(2);
  console.log(images);
  res.render("dashboard", { pageTitle: "Dashboard", loggedIn: true, images });
};

export const getFilter = (req, res) => {
  const {
    query: { term }
  } = req;
  res.render("filter", {
    pageTitle: `Filtering by ${term}`,
    term,
    loggedIn: true
  });
};
