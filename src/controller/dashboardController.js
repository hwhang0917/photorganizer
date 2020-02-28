import { getImagesByUser } from "../db";

export const getDashboard = (req, res) => {
  let images = [];
  console.log(getImagesByUser(1));
  res.render("dashboard", { pageTitle: "Dashboard", images });
};

export const getImageDetail = (req, res) => {
  res.render("imageDetail", { pageTitle: "Image" });
};

export const filter = async (req, res) => {
  const {
    query: { location }
  } = req;

  let images = [];
  try {
    // images = await
    throw Error;
  } catch (error) {
    console.log(error);
  }

  res.render("dashboard", { pageTitle: `${location}, Images`, images });
};
